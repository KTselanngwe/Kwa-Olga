'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const data = window.KwaOlgaData;
    if (!data) {
        throw new Error('Kwa Olga site data could not be loaded.');
    }

    const header = document.querySelector('.site-header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('#site-navigation');
    const packageGrid = document.querySelector('#home-package-grid');
    const yearElement = document.querySelector('#current-year');

    if (header) {
        function updateHeaderOnScroll() {
            header.classList.toggle('is-scrolled', window.scrollY > 50);
        }

        updateHeaderOnScroll();
        window.addEventListener('scroll', updateHeaderOnScroll, { passive: true });
    }

    if (menuToggle && navigation) {
        const menuLinks = navigation.querySelectorAll('a');

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
                const focusable = [menuToggle].concat(Array.from(menuLinks));
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
            if (window.innerWidth > 1100) {
                setMenuOpen(false);
            }
        }, { passive: true });
    }

    if (packageGrid && Array.isArray(data.packages)) {
        const fragment = document.createDocumentFragment();
        const priceFormatter = new Intl.NumberFormat('en-ZA', {
            style: 'currency',
            currency: 'ZAR',
            maximumFractionDigits: 0
        });

        data.packages.forEach(function (servicePackage) {
            const card = document.createElement('article');
            const name = document.createElement('h3');
            const price = document.createElement('p');
            const link = document.createElement('a');

            card.className = 'package-card';
            name.textContent = servicePackage.name;
            price.className = 'package-price';
            price.textContent = priceFormatter.format(servicePackage.price);
            link.href = 'bookings.html';
            link.textContent = 'Request this service';
            card.append(name, price, link);
            fragment.append(card);
        });

        packageGrid.replaceChildren(fragment);
    }

    if (yearElement) {
        yearElement.textContent = String(new Date().getFullYear());
    }

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#site-navigation a').forEach(function (link) {
        const linkPage = new URL(link.href, window.location.href).pathname.split('/').pop();
        if (linkPage === currentPage) {
            link.setAttribute('aria-current', 'page');
        } else {
            link.removeAttribute('aria-current');
        }
    });

    const revealElements = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -4% 0px' });

        revealElements.forEach(function (element) {
            revealObserver.observe(element);
        });
    } else {
        revealElements.forEach(function (element) {
            element.classList.add('is-visible');
        });
    }
});
