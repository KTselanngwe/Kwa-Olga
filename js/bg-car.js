'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const presets = {
        home: { orbit: 32, phi: 74, radius: 5.6, shift: 0.5, scale: 1.18, paint: '#C00000' },
        about: { orbit: 82, phi: 78, radius: 6.8, shift: -0.8, scale: 1, paint: '#292929' },
        services: { orbit: 8, phi: 48, radius: 5.2, shift: 0, scale: 1.1, paint: '#C00000' },
        menu: { orbit: 158, phi: 78, radius: 7, shift: 0.9, scale: 0.86, paint: '#4A1018' },
        specials: { orbit: 52, phi: 70, radius: 6.2, shift: -0.1, scale: 1, paint: '#C00000' },
        gallery: { orbit: 25, phi: 76, radius: 6.5, shift: 0, scale: 0.98, paint: '#C00000' },
        contact: { orbit: -30, phi: 78, radius: 8, shift: 1.2, scale: 0.72, paint: '#292929' },
        booking: { orbit: 30, phi: 76, radius: 6, shift: 0, scale: 0.94, paint: '#C00000' },
        register: { orbit: 120, phi: 76, radius: 7.5, shift: 0.8, scale: 0.82, paint: '#C00000' }
    };
    const preset = presets[body.dataset.car] || presets.home;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const lowPower = (navigator.deviceMemory && navigator.deviceMemory <= 2)
        || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2);
    let paused = readPausedPreference();

    body.style.setProperty('--bg-car-scale', String(preset.scale));
    body.style.setProperty('--bg-car-shift', preset.shift + 'vw');

    const layer = document.createElement('div');
    layer.className = 'bg-car';
    layer.setAttribute('aria-hidden', 'true');
    layer.innerHTML = '<div class="bg-car-glow"></div><img class="bg-car-fallback" src="images/car.png" alt="" draggable="false"><div class="bg-car-model"></div><div class="bg-car-vignette"></div>';
    body.insertBefore(layer, body.firstChild);

    const modelHost = layer.querySelector('.bg-car-model');
    const fallback = layer.querySelector('.bg-car-fallback');
    const pauseButton = document.createElement('button');
    pauseButton.type = 'button';
    pauseButton.className = 'bg-car-pause';
    pauseButton.setAttribute('aria-pressed', String(paused));
    pauseButton.setAttribute('aria-label', paused ? 'Resume background car motion' : 'Pause background car motion');
    pauseButton.textContent = paused ? 'Resume motion' : 'Pause motion';
    body.append(pauseButton);

    const paintPicker = document.createElement('div');
    paintPicker.className = 'bg-car-paint-picker';
    paintPicker.setAttribute('role', 'group');
    paintPicker.setAttribute('aria-label', 'Choose car paint color');
    [
        { name: 'Kwa Olga red', value: '#C00000' },
        { name: 'Midnight black', value: '#222222' },
        { name: 'Silver', value: '#B9BDC2' }
    ].forEach(function (paint, index) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'bg-car-swatch';
        button.dataset.paint = paint.value;
        button.setAttribute('aria-label', paint.name);
        button.setAttribute('aria-pressed', String(index === 0));
        button.style.setProperty('--swatch-color', paint.value);
        paintPicker.append(button);
    });
    body.append(paintPicker);

    const motionStatus = document.createElement('span');
    motionStatus.className = 'bg-car-status';
    motionStatus.setAttribute('role', 'status');
    motionStatus.setAttribute('aria-live', 'polite');
    body.append(motionStatus);
    let updateModelMotion = function () {};
    let updateFallbackMotion = function () {};

    function readPausedPreference() {
        try {
            return window.localStorage.getItem('kwaOlgaCarMotionPaused') === 'true';
        } catch (error) {
            return false;
        }
    }

    function storePausedPreference(value) {
        try {
            window.localStorage.setItem('kwaOlgaCarMotionPaused', String(value));
        } catch (error) {
            motionStatus.textContent = 'Motion preference applies for this visit only.';
        }
    }

    function setPaused(value) {
        paused = value;
        body.classList.toggle('bg-car-paused', paused);
        pauseButton.setAttribute('aria-pressed', String(paused));
        pauseButton.setAttribute('aria-label', paused ? 'Resume background car motion' : 'Pause background car motion');
        pauseButton.textContent = paused ? 'Resume motion' : 'Pause motion';
        storePausedPreference(paused);
        updateModelMotion();
        updateFallbackMotion();
        body.dispatchEvent(new CustomEvent('bgcar:motionchange', { detail: { paused: paused } }));
    }

    function supportsWebGL() {
        try {
            const canvas = document.createElement('canvas');
            return Boolean(window.WebGLRenderingContext
                && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
        } catch (error) {
            return false;
        }
    }

    function useFallback(reason) {
        body.classList.add('bg-car-fallback-active');
        body.classList.remove('bg-car-model-active');
        if (reason) {
            motionStatus.textContent = reason;
        }
    }

    function hexToRgbFactor(hex) {
        const value = hex.replace('#', '');
        return [0, 2, 4].map(function (offset) {
            return parseInt(value.slice(offset, offset + 2), 16) / 255;
        });
    }

    function applyPaint(color) {
        const modelViewer = modelHost.querySelector('model-viewer');
        if (!modelViewer || !modelViewer.model) {
            return;
        }

        const materials = modelViewer.model.materials;
        const paintMaterials = materials.filter(function (material) {
            return /paint|body|exterior|car/i.test(material.name || '');
        });
        (paintMaterials.length ? paintMaterials : materials.slice(0, 1)).forEach(function (material) {
            material.pbrMetallicRoughness.setBaseColorFactor(hexToRgbFactor(color));
        });
    }

    function mountModel() {
        if (reduceMotion || (connection && connection.saveData) || lowPower || !supportsWebGL()) {
            useFallback('Still car artwork is shown to respect device or motion preferences.');
            return;
        }

        if (window.location.protocol === 'file:') {
            useFallback('Serve this site with Live Server to load the 3D car. Still artwork is shown instead.');
            return;
        }

        fetch('models/car.glb', { method: 'HEAD' }).then(function (response) {
            if (!response.ok) {
                useFallback('Add a licensed car model at models/car.glb to enable the 3D car.');
                return null;
            }

            const loader = document.createElement('script');
            loader.type = 'module';
            loader.src = 'https://unpkg.com/@google/model-viewer@4.0.0/dist/model-viewer.min.js';
            loader.onload = function () {
                customElements.whenDefined('model-viewer').then(function () {
                    const modelViewer = document.createElement('model-viewer');
                    modelViewer.setAttribute('src', 'models/car.glb');
                    modelViewer.setAttribute('poster', 'images/car-poster.png');
                    modelViewer.setAttribute('alt', '');
                    modelViewer.setAttribute('aria-hidden', 'true');
                    modelViewer.setAttribute('loading', 'lazy');
                    modelViewer.setAttribute('reveal', 'auto');
                    modelViewer.setAttribute('environment-image', 'neutral');
                    modelViewer.setAttribute('shadow-intensity', '0.7');
                    modelViewer.setAttribute('exposure', '0.85');
                    modelViewer.setAttribute('camera-orbit', preset.orbit + 'deg ' + preset.phi + 'deg ' + preset.radius + 'm');
                    modelViewer.setAttribute('field-of-view', '32deg');
                    modelViewer.setAttribute('disable-zoom', '');
                    modelViewer.setAttribute('interaction-prompt', 'none');
                    modelViewer.setAttribute('auto-rotate', '');
                    modelViewer.style.setProperty('--poster-color', 'transparent');
                    modelViewer.addEventListener('load', function () {
                        body.classList.add('bg-car-model-active');
                        body.classList.remove('bg-car-fallback-active');
                        applyPaint(preset.paint);
                        motionStatus.textContent = '';
                    }, { once: true });
                    modelViewer.addEventListener('error', function () {
                        useFallback('The 3D car could not load. Still artwork is shown instead.');
                    }, { once: true });
                    modelHost.replaceChildren(modelViewer);
                    watchModelMotion(modelViewer);
                    paintPicker.addEventListener('click', function (event) {
                        const paintButton = event.target.closest('[data-paint]');
                        if (!paintButton) {
                            return;
                        }
                        paintPicker.querySelectorAll('[data-paint]').forEach(function (swatch) {
                            swatch.setAttribute('aria-pressed', String(swatch === paintButton));
                        });
                        applyPaint(paintButton.dataset.paint);
                    });
                });
            };
            loader.onerror = function () {
                useFallback('The 3D model viewer could not load. Still artwork is shown instead.');
            };
            document.head.append(loader);
            return response;
        }).catch(function () {
            useFallback('The car model is unavailable. Still artwork is shown instead.');
        });
    }

    function watchModelMotion(modelViewer) {
        let scrollTarget = 0;
        let scrollCurrent = 0;
        let currentTheta = preset.orbit;
        let currentPhi = preset.phi;
        let currentRadius = preset.radius;
        let pointerTheta = 0;
        let scrollFrame = 0;
        let pageVisible = document.visibilityState === 'visible';
        let inViewport = true;

        function targetOrbit() {
            return preset.orbit + scrollCurrent * 115 + pointerTheta;
        }

        function animateScroll() {
            scrollFrame = 0;
            scrollCurrent += (scrollTarget - scrollCurrent) * 0.08;
            currentTheta += (targetOrbit() - currentTheta) * 0.1;
            const targetPhi = Math.max(38, Math.min(100, preset.phi + Math.sin(scrollCurrent * Math.PI) * 7));
            const targetRadius = preset.radius - scrollCurrent * 0.35;
            currentPhi += (targetPhi - currentPhi) * 0.1;
            currentRadius += (targetRadius - currentRadius) * 0.1;
            modelViewer.cameraOrbit = currentTheta + 'deg ' + currentPhi + 'deg ' + currentRadius + 'm';

            if (Math.abs(scrollCurrent - scrollTarget) > 0.001
                || Math.abs(targetOrbit() - currentTheta) > 0.15
                || Math.abs(targetPhi - currentPhi) > 0.05
                || Math.abs(targetRadius - currentRadius) > 0.005) {
                scrollFrame = window.requestAnimationFrame(animateScroll);
            }
        }

        function scheduleOrbit() {
            if (!scrollFrame && !paused && !reduceMotion && pageVisible && inViewport) {
                scrollFrame = window.requestAnimationFrame(animateScroll);
            }
        }

        function onScroll() {
            const range = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
            scrollTarget = Math.min(1, Math.max(0, window.scrollY / range));
            scheduleOrbit();
        }

        function updateMotion() {
            const shouldPause = paused || reduceMotion || !pageVisible || !inViewport;
            modelViewer.toggleAttribute('auto-rotate', !shouldPause);
            if (shouldPause && scrollFrame) {
                window.cancelAnimationFrame(scrollFrame);
                scrollFrame = 0;
            } else {
                scheduleOrbit();
            }
        }

        updateModelMotion = updateMotion;
        updateMotion();
        window.addEventListener('scroll', onScroll, { passive: true });
        document.addEventListener('visibilitychange', function () {
            pageVisible = document.visibilityState === 'visible';
            updateMotion();
        });
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(function (entries) {
                inViewport = entries[0].isIntersecting;
                updateMotion();
            });
            observer.observe(body);
        }
        if (window.matchMedia('(pointer: fine)').matches) {
            window.addEventListener('pointermove', function (event) {
                if (paused) {
                    return;
                }
                pointerTheta = (event.clientX / window.innerWidth - 0.5) * 5;
                scheduleOrbit();
            }, { passive: true });
        }
    }

    function watchFallbackMotion() {
        let scrollProgress = 0;
        let pointerShift = 0;
        let currentX = 0;
        let currentY = 0;
        let frame = 0;
        let pageVisible = document.visibilityState === 'visible';

        function schedule() {
            if (!frame && !paused && !reduceMotion && pageVisible) {
                frame = window.requestAnimationFrame(animate);
            }
        }

        function animate() {
            frame = 0;
            const targetX = (scrollProgress - 0.5) * 20 + pointerShift;
            const targetY = (scrollProgress - 0.5) * 26;
            currentX += (targetX - currentX) * 0.08;
            currentY += (targetY - currentY) * 0.08;
            fallback.style.setProperty('--bg-car-fallback-x', currentX + 'px');
            fallback.style.setProperty('--bg-car-fallback-y', currentY + 'px');

            if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
                schedule();
            }
        }

        function onScroll() {
            const range = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
            scrollProgress = Math.min(1, Math.max(0, window.scrollY / range));
            schedule();
        }

        updateFallbackMotion = function () {
            if (paused || reduceMotion || !pageVisible) {
                if (frame) {
                    window.cancelAnimationFrame(frame);
                    frame = 0;
                }
                return;
            }
            schedule();
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        document.addEventListener('visibilitychange', function () {
            pageVisible = document.visibilityState === 'visible';
            updateFallbackMotion();
        });
        if (window.matchMedia('(pointer: fine)').matches) {
            window.addEventListener('pointermove', function (event) {
                pointerShift = (event.clientX / window.innerWidth - 0.5) * 12;
                schedule();
            }, { passive: true });
        }
        onScroll();
    }

    fallback.addEventListener('error', function handleFallbackError() {
        fallback.removeEventListener('error', handleFallbackError);
        fallback.src = 'images/ville-kaisla-HNCSCpWrVJA-unsplash.jpg';
    });
    watchFallbackMotion();
    pauseButton.addEventListener('click', function () {
        setPaused(!paused);
    });
    setPaused(paused);

    window.requestAnimationFrame(function () {
        window.requestAnimationFrame(mountModel);
    });
});
