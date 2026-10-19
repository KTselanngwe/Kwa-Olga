'use strict';

document.addEventListener('DOMContentLoaded', function () {
    document.documentElement.classList.add('js');
    const header = document.querySelector('header');
    const galleryImages = document.querySelectorAll('.gallery img');
    const mapElement = document.querySelector('#business-map');
    const bookingVideo = document.querySelector('.bookings-page .video-background');

    // Retry autoplay from a user gesture on mobile; use the poster image on media failure.
    if (bookingVideo) {
        function attemptVideoPlayback() {
            const playAttempt = bookingVideo.play();
            if (playAttempt && typeof playAttempt.catch === 'function') {
                playAttempt.catch(function () {});
            }
        }

        function retryPlaybackAfterTouch() {
            if (bookingVideo.paused) {
                attemptVideoPlayback();
            }
        }

        bookingVideo.addEventListener('error', function () {
            document.body.classList.add('video-failed');
        });
        attemptVideoPlayback();
        window.addEventListener('load', attemptVideoPlayback, { once: true });
        document.addEventListener('touchstart', retryPlaybackAfterTouch, { once: true, passive: true });
    }

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

    // Show an accessible image overlay for each gallery photograph.
    if (galleryImages.length > 0) {
        const lightbox = document.createElement('div');
        const lightboxImage = document.createElement('img');
        const closeButton = document.createElement('button');

        lightbox.className = 'lightbox';
        lightbox.hidden = true;
        lightbox.setAttribute('role', 'dialog');
        lightbox.setAttribute('aria-modal', 'true');
        lightbox.setAttribute('aria-label', 'Enlarged gallery image');
        lightboxImage.className = 'lightbox-image';
        closeButton.className = 'lightbox-close';
        closeButton.type = 'button';
        closeButton.setAttribute('aria-label', 'Close enlarged image');
        closeButton.textContent = '×';
        lightbox.append(lightboxImage, closeButton);
        document.body.append(lightbox);

        function closeLightbox() {
            lightbox.hidden = true;
            document.body.classList.remove('lightbox-open');
        }

        galleryImages.forEach(function (image) {
            image.tabIndex = 0;
            image.setAttribute('role', 'button');
            image.setAttribute('aria-label', 'Open image: ' + (image.alt || 'Gallery photograph'));

            function openLightbox() {
                lightboxImage.src = image.currentSrc || image.src;
                lightboxImage.alt = image.alt;
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
        lightbox.addEventListener('click', function (event) {
            if (event.target === lightbox) {
                closeLightbox();
            }
        });
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && !lightbox.hidden) {
                closeLightbox();
            }
        });
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

    // Initialize the map only after the deferred Leaflet library is available.
    if (mapElement && window.L) {
        const latitude = Number(mapElement.dataset.latitude);
        const longitude = Number(mapElement.dataset.longitude);
        const mapStatus = document.querySelector('#map-status');

        if (Number.isFinite(latitude) && Number.isFinite(longitude)) {
            const map = window.L.map(mapElement).setView([latitude, longitude], 15);
            window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);

            window.L.marker([latitude, longitude]).addTo(map)
                .bindPopup('Kwa Olga Car Wash &amp; Lifestyle Lounge<br>Approximate Meadowlands location')
                .openPopup();

            map.on('click', function (event) {
                if (mapStatus) {
                    mapStatus.textContent = 'Selected coordinates: ' + event.latlng.lat.toFixed(6) + ', ' + event.latlng.lng.toFixed(6);
                }
            });
        }
    } else if (mapElement) {
        const mapStatus = document.querySelector('#map-status');
        if (mapStatus) {
            mapStatus.textContent = 'The interactive map could not load. Check your internet connection and reload the page.';
        }
    }

    // The button gives visitors a useful prompt only after an intentional click.
    const visitAlertButton = document.querySelector('#visit-alert-button');
    if (visitAlertButton) {
        visitAlertButton.addEventListener('click', function () {
            window.alert('Planning a visit? Check the services and opening information, then send an enquiry or request a booking.');
        });
    }
});