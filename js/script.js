'use strict';

document.addEventListener('DOMContentLoaded', function () {
    document.documentElement.classList.add('js');
    const header = document.querySelector('header');
    const galleryImages = document.querySelectorAll('.gallery img');
    const cinematicVideo = document.querySelector('.video-background');
    const videoStatus = document.querySelector('.video-status');

    if (cinematicVideo) {
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        const videoSource = cinematicVideo.querySelector('source[data-src]');
        let videoFailed = false;
        let videoSourceConfigured = false;
        let videoSourcePromise = null;
        let pageIsVisible = document.visibilityState === 'visible';
        let mainIsVisible = true;

        function usePosterOnly(message) {
            document.body.classList.add('video-poster-only');
            cinematicVideo.pause();
            if (message && videoStatus) {
                videoStatus.textContent = message;
            }
        }

        function applyMotionPreferences() {
            if (videoFailed) {
                usePosterOnly('The background video is unavailable. A still image is shown instead.');
                return true;
            }

            if (reducedMotion.matches) {
                usePosterOnly('Background video is disabled because reduced motion is enabled.');
                return true;
            }

            if (connection && connection.saveData) {
                usePosterOnly('Background video is disabled to reduce data use.');
                return true;
            }

            document.body.classList.remove('video-poster-only');
            return false;
        }

        function prepareVideoSource() {
            if (videoSourceConfigured) {
                return Promise.resolve(true);
            }

            if (videoSourcePromise) {
                return videoSourcePromise;
            }

            videoSourcePromise = (async function () {
                if (!videoSource || window.location.protocol === 'file:') {
                    videoFailed = true;
                    document.body.classList.add('video-failed');
                    usePosterOnly('Serve this page with Live Server to check the TikTok background video. A still image is shown instead.');
                    return false;
                }

                try {
                    const response = await fetch(videoSource.dataset.src, { method: 'HEAD' });
                    if (!response.ok) {
                        videoFailed = true;
                        document.body.classList.add('video-failed');
                        usePosterOnly('The background video is unavailable. A still image is shown instead.');
                        return false;
                    }
                } catch (error) {
                    videoFailed = true;
                    document.body.classList.add('video-failed');
                    usePosterOnly('The background video could not be reached (' + error.message + '). A still image is shown instead.');
                    return false;
                }

                videoSource.src = videoSource.dataset.src;
                videoSourceConfigured = true;
                cinematicVideo.load();
                return true;
            })();

            return videoSourcePromise;
        }

        async function syncVideoPlayback() {
            if (document.body.classList.contains('bg-car-paused')
                || !pageIsVisible || !mainIsVisible || applyMotionPreferences()) {
                cinematicVideo.pause();
                return;
            }

            if (!await prepareVideoSource()) {
                return;
            }

            if (document.body.classList.contains('bg-car-paused')
                || !pageIsVisible || !mainIsVisible || applyMotionPreferences()) {
                cinematicVideo.pause();
                return;
            }

            try {
                await cinematicVideo.play();
                document.body.classList.remove('video-failed');
                if (videoStatus) {
                    videoStatus.textContent = '';
                }
            } catch (error) {
                if (error.name === 'NotAllowedError') {
                    if (videoStatus) {
                        videoStatus.textContent = 'Background video playback was blocked. Still imagery remains visible.';
                    }
                    return;
                }

                if (error.name === 'AbortError') {
                    return;
                }

                console.error('The Kwa Olga background video could not be played.', error);
                videoFailed = true;
                document.body.classList.add('video-failed');
                usePosterOnly('The background video is unavailable. A still image is shown instead.');
            }
        }

        if (!applyMotionPreferences()) {
            syncVideoPlayback();
        }

        document.body.addEventListener('bgcar:motionchange', syncVideoPlayback);
        cinematicVideo.addEventListener('error', function () {
            videoFailed = true;
            document.body.classList.add('video-failed');
            usePosterOnly('The background video is unavailable. A still image is shown instead.');
        });

        window.setTimeout(function () {
            if (videoSourceConfigured && cinematicVideo.networkState === 3) {
                videoFailed = true;
                document.body.classList.add('video-failed');
                usePosterOnly('The background video is unavailable. A still image is shown instead.');
            }
        }, 5000);

        document.addEventListener('visibilitychange', function () {
            pageIsVisible = document.visibilityState === 'visible';
            syncVideoPlayback();
        });

        if ('IntersectionObserver' in window) {
            const pageObserver = new IntersectionObserver(function (entries) {
                mainIsVisible = entries[0].isIntersecting;
                syncVideoPlayback();
            }, { threshold: 0, rootMargin: '80px 0px' });
            pageObserver.observe(document.querySelector('main'));
        }

        reducedMotion.addEventListener('change', function () {
            applyMotionPreferences();
            syncVideoPlayback();
        });

        if (connection && typeof connection.addEventListener === 'function') {
            connection.addEventListener('change', function () {
                applyMotionPreferences();
                syncVideoPlayback();
            });
        }
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('#site-navigation');

    if (menuToggle && navigation) {
        const menuLinks = Array.from(navigation.querySelectorAll('a[href]'));

        function setMenuOpen(isOpen) {
            menuToggle.setAttribute('aria-expanded', String(isOpen));
            menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
            navigation.classList.toggle('is-open', isOpen);
            document.body.classList.toggle('menu-open', isOpen);
        }

        menuToggle.addEventListener('click', function () {
            setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
        });

        menuLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                setMenuOpen(false);
            });
        });

        document.addEventListener('keydown', function (event) {
            if (menuToggle.getAttribute('aria-expanded') !== 'true') {
                return;
            }

            if (event.key === 'Escape') {
                setMenuOpen(false);
                menuToggle.focus();
                return;
            }

            if (event.key === 'Tab') {
                const focusable = [menuToggle].concat(menuLinks);
                const first = focusable[0];
                const last = focusable[focusable.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 768 && menuToggle.getAttribute('aria-expanded') === 'true') {
                setMenuOpen(false);
            }
        }, { passive: true });
    }

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#site-navigation a').forEach(function (link) {
        const linkPage = new URL(link.href, window.location.href).pathname.split('/').pop();
        if (linkPage === currentPage) {
            link.setAttribute('aria-current', 'page');
        }
    });

    // Reveal gallery images as they enter the viewport without hiding them when unsupported.
    if (galleryImages.length > 0) {
        const galleryTiles = document.querySelectorAll('.gallery figure');

        if ('IntersectionObserver' in window) {
            const revealObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' });

            galleryTiles.forEach(function (tile) {
                revealObserver.observe(tile);
            });
        } else {
            galleryTiles.forEach(function (tile) {
                tile.classList.add('is-visible');
            });
        }
    }

    // Add a shared section search without requiring a search form on every page.
    if (header) {
        const searchForm = document.createElement('form');
        const searchLabel = document.createElement('label');
        const searchInput = document.createElement('input');
        const searchButton = document.createElement('button');
        const resetButton = document.createElement('button');
        const searchStatus = document.createElement('p');

        searchForm.className = 'site-search';
        searchLabel.htmlFor = 'site-search-input';
        searchLabel.textContent = 'Search this page';
        searchInput.id = 'site-search-input';
        searchInput.type = 'search';
        searchInput.placeholder = 'Search sections';
        searchInput.autocomplete = 'off';
        searchButton.type = 'submit';
        searchButton.textContent = 'Search';
        resetButton.type = 'reset';
        resetButton.textContent = 'Clear';
        searchStatus.className = 'site-search-status';
        searchStatus.setAttribute('role', 'status');
        searchStatus.setAttribute('aria-live', 'polite');
        searchForm.append(searchLabel, searchInput, searchButton, resetButton, searchStatus);
        header.append(searchForm);

        searchForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const query = searchInput.value.trim().toLocaleLowerCase();

            if (!query) {
                searchStatus.textContent = 'Enter a word or phrase to search this page.';
                searchInput.focus();
                return;
            }

            const sections = Array.from(document.querySelectorAll('main section'));
            const match = sections.find(function (section) {
                return section.textContent.toLocaleLowerCase().includes(query);
            });

            if (!match) {
                searchStatus.textContent = 'No matching sections found on this page.';
                return;
            }

            searchStatus.textContent = 'A matching section was found.';
            match.scrollIntoView({ behavior: 'smooth', block: 'center' });
            match.classList.add('search-result');
            window.setTimeout(function () {
                match.classList.remove('search-result');
            }, 1800);
        });

        searchForm.addEventListener('reset', function () {
            searchStatus.textContent = '';
        });
    }

    const galleryFilters = document.querySelectorAll('[data-gallery-filter]');
    const galleryTiles = Array.from(document.querySelectorAll('.gallery figure'));
    const galleryFilterStatus = document.querySelector('.gallery-filter-status');

    if (galleryFilters.length && galleryTiles.length) {
        galleryFilters.forEach(function (filter) {
            filter.addEventListener('click', function () {
                const category = filter.dataset.galleryFilter;
                let visibleCount = 0;

                galleryFilters.forEach(function (button) {
                    button.setAttribute('aria-pressed', String(button === filter));
                });

                galleryTiles.forEach(function (tile) {
                    const matches = category === 'all' || tile.dataset.category === category;
                    tile.hidden = !matches;
                    if (matches) {
                        visibleCount += 1;
                        tile.classList.add('is-visible');
                    }
                });

                if (galleryFilterStatus) {
                    galleryFilterStatus.textContent = visibleCount + ' ' + (visibleCount === 1 ? 'photo' : 'photos') + ' shown.';
                }
            });
        });
    }

    // Keep image navigation, focus handling and keyboard controls inside the lightbox.
    if (galleryImages.length > 0) {
        const lightbox = document.createElement('div');
        const lightboxImage = document.createElement('img');
        const caption = document.createElement('p');
        const counter = document.createElement('p');
        const closeButton = document.createElement('button');
        const previousButton = document.createElement('button');
        const nextButton = document.createElement('button');
        let currentIndex = 0;
        let returnFocusTo = null;

        lightbox.className = 'lightbox';
        lightbox.hidden = true;
        lightbox.setAttribute('role', 'dialog');
        lightbox.setAttribute('aria-modal', 'true');
        lightbox.setAttribute('aria-label', 'Enlarged gallery image');
        lightbox.tabIndex = -1;
        lightboxImage.className = 'lightbox-image';
        caption.className = 'lightbox-caption';
        counter.className = 'lightbox-counter';
        counter.setAttribute('aria-live', 'polite');
        closeButton.className = 'lightbox-close';
        closeButton.type = 'button';
        closeButton.setAttribute('aria-label', 'Close enlarged image');
        closeButton.textContent = '×';
        previousButton.className = 'lightbox-previous';
        previousButton.type = 'button';
        previousButton.setAttribute('aria-label', 'Previous photo');
        previousButton.textContent = '‹';
        nextButton.className = 'lightbox-next';
        nextButton.type = 'button';
        nextButton.setAttribute('aria-label', 'Next photo');
        nextButton.textContent = '›';
        lightbox.append(lightboxImage, caption, counter, closeButton, previousButton, nextButton);
        document.body.append(lightbox);

        function visibleGalleryImages() {
            return Array.from(document.querySelectorAll('.gallery figure:not([hidden]) img'));
        }

        function showImage(index) {
            const images = visibleGalleryImages();
            if (!images.length) {
                return;
            }

            currentIndex = (index + images.length) % images.length;
            const image = images[currentIndex];
            lightboxImage.src = image.currentSrc || image.src;
            lightboxImage.alt = image.alt;
            caption.textContent = image.closest('figure').querySelector('figcaption').textContent;
            counter.textContent = (currentIndex + 1) + ' / ' + images.length;
        }

        function closeLightbox() {
            lightbox.hidden = true;
            document.body.classList.remove('lightbox-open');
            if (returnFocusTo) {
                returnFocusTo.focus();
            }
        }

        galleryImages.forEach(function (image) {
            image.tabIndex = 0;
            image.setAttribute('role', 'button');
            image.setAttribute('aria-label', 'Open image: ' + (image.alt || 'Gallery photograph'));

            function openLightbox() {
                returnFocusTo = image;
                showImage(visibleGalleryImages().indexOf(image));
                lightbox.hidden = false;
                document.body.classList.add('lightbox-open');
                closeButton.focus();
            }

            image.addEventListener('click', openLightbox);
            image.addEventListener('keydown', function (event) {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openLightbox();
                }
            });
        });

        closeButton.addEventListener('click', closeLightbox);
        previousButton.addEventListener('click', function () {
            showImage(currentIndex - 1);
        });
        nextButton.addEventListener('click', function () {
            showImage(currentIndex + 1);
        });
        lightbox.addEventListener('click', function (event) {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });
        document.addEventListener('keydown', function (event) {
            if (lightbox.hidden) {
                return;
            }

            if (event.key === 'Escape') {
                closeLightbox();
            } else if (event.key === 'ArrowLeft') {
                event.preventDefault();
                showImage(currentIndex - 1);
            } else if (event.key === 'ArrowRight') {
                event.preventDefault();
                showImage(currentIndex + 1);
            } else if (event.key === 'Tab') {
                const controls = [closeButton, previousButton, nextButton];
                const first = controls[0];
                const last = controls[controls.length - 1];
                if (event.shiftKey && document.activeElement === first) {
                    event.preventDefault();
                    last.focus();
                } else if (!event.shiftKey && document.activeElement === last) {
                    event.preventDefault();
                    first.focus();
                }
            }
        });
    }

    const bookingPackage = document.querySelector('#wash-package');
    const bookingDate = document.querySelector('#wash-date');
    const summaryPackage = document.querySelector('#booking-summary-package');
    const summaryPrice = document.querySelector('#booking-summary-price');
    const summaryDate = document.querySelector('#booking-summary-date');

    if (bookingPackage && summaryPackage && summaryPrice && summaryDate) {
        const priceFormatter = new Intl.NumberFormat('en-ZA', {
            style: 'currency',
            currency: 'ZAR',
            maximumFractionDigits: 0
        });

        function updateBookingSummary() {
            const selectedOption = bookingPackage.selectedOptions[0];
            const selectedPrice = selectedOption ? selectedOption.textContent.match(/R\s?(\d+)/) : null;
            summaryPackage.textContent = bookingPackage.value ? selectedOption.textContent.split(' - ')[0].trim() : 'Choose a wash package';
            summaryPrice.textContent = selectedPrice ? priceFormatter.format(Number(selectedPrice[1])) : '—';
            summaryDate.textContent = bookingDate && bookingDate.value
                ? new Date(bookingDate.value + 'T00:00:00').toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' })
                : 'Not selected';
        }

        bookingPackage.addEventListener('change', updateBookingSummary);
        if (bookingDate) {
            bookingDate.addEventListener('change', updateBookingSummary);
        }
        updateBookingSummary();
    }

    // Keep form feedback in the page and never echo submitted values.
    document.querySelectorAll('form[data-local-form]').forEach(function (form) {
        const status = document.createElement('p');
        status.className = 'form-status';
        status.setAttribute('role', 'status');
        status.setAttribute('aria-live', 'polite');
        form.append(status);
        form.noValidate = true;

        const fields = Array.from(form.querySelectorAll('input, select, textarea'));

        function getFieldError(field) {
            const value = field.value.trim();

            if (field.required && !value) {
                return 'This field is required.';
            }

            if (field.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                return 'Enter a valid email address.';
            }

            if (field.minLength > 0 && value.length < field.minLength) {
                return 'Enter at least ' + field.minLength + ' characters.';
            }

            return '';
        }

        function updateFieldError(field, message) {
            const errorId = field.id + '-error';
            let error = document.getElementById(errorId);

            if (!error) {
                error = document.createElement('span');
                error.id = errorId;
                error.className = 'field-error';
                field.insertAdjacentElement('afterend', error);
            }

            error.textContent = message;
            field.setAttribute('aria-invalid', message ? 'true' : 'false');
            if (message) {
                field.setAttribute('aria-describedby', errorId);
            } else {
                field.removeAttribute('aria-describedby');
            }
        }

        form.addEventListener('input', function (event) {
            if (event.target.matches('input, select, textarea')) {
                updateFieldError(event.target, getFieldError(event.target));
                status.textContent = '';
            }
        });

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            let firstInvalidField = null;
            let invalidCount = 0;

            fields.forEach(function (field) {
                let message = getFieldError(field);

                if (form.dataset.formType === 'registration' && field.name === 'password-confirmation') {
                    const password = form.querySelector('[name="password"]');
                    if (password && field.value !== password.value) {
                        message = 'Passwords do not match.';
                    }
                }

                updateFieldError(field, message);
                if (message) {
                    invalidCount += 1;
                    firstInvalidField = firstInvalidField || field;
                }
            });

            if (invalidCount > 0) {
                status.textContent = 'Please correct the ' + invalidCount + ' highlighted field' + (invalidCount === 1 ? '' : 's') + ' and try again.';
                firstInvalidField.focus();
                return;
            }

            if (form.dataset.formType === 'enquiry') {
                status.textContent = 'Your enquiry passed validation. This demonstration form is not connected to a backend, so nothing has been sent.';
            } else if (form.dataset.formType === 'registration') {
                status.textContent = 'The registration details passed validation. This demonstration page does not store or send account details.';
            } else if (form.dataset.formType === 'booking') {
                const nameField = form.querySelector('[name="wash-name"], [name="table-name"]');
                const serviceField = form.querySelector('#wash-package, #booking-type');
                const dateField = form.querySelector('#wash-date, #table-date');
                const timeField = form.querySelector('#wash-time, #table-time');
                const name = nameField ? nameField.value.trim() : 'customer';
                const service = serviceField && serviceField.selectedOptions[0]
                    ? serviceField.selectedOptions[0].textContent.trim()
                    : 'Kwa Olga';
                const date = dateField && dateField.value
                    ? new Date(dateField.value + 'T00:00:00').toLocaleDateString()
                    : 'your selected date';
                const time = timeField && timeField.value ? ' at ' + timeField.value : '';

                // This is a front-end demonstration: the booking has not been sent to a backend.
                status.textContent = 'Your booking details passed validation. This demonstration site is not connected to a booking backend.';
                window.alert('Thank you ' + name + ', your request for ' + service + ' on ' + date + time + ' passed validation. This demonstration booking has not been sent to a backend.');
            } else {
                status.textContent = 'The form passed validation. This demonstration site is not connected to a booking backend, so no request has been sent.';
            }
        });
    });

    // The button gives visitors a useful prompt only after an intentional click.
    const visitAlertButton = document.querySelector('#visit-alert-button');
    if (visitAlertButton) {
        visitAlertButton.addEventListener('click', function () {
            window.alert('Planning a visit? Check the services and opening information, then send an enquiry or request a booking.');
        });
    }
});