'use strict';

// Replace this placeholder with the browser key restricted to your site.
const GOOGLE_MAPS_API_KEY = 'YOUR_API_KEY_HERE';
// Approximate Kwa Olga location in Meadowlands; replace when the exact pin is confirmed.
const KWA_OLGA_COORDINATES = { lat: -26.2207, lng: 27.9058 };
const GOOGLE_MAP_ID = 'DEMO_MAP_ID';
const BUSINESS_ADDRESS = 'Meadowlands, Soweto (exact street address to be confirmed)';
const BUSINESS_NAME = 'Kwa Olga Car Wash & Lifestyle Lounge';

document.addEventListener('DOMContentLoaded', function () {
    const mapElement = document.querySelector('#business-map');
    if (!mapElement) {
        return;
    }

    const mapStatus = document.querySelector('#map-status');
    const fallbackContainer = document.querySelector('#map-fallback');
    const directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination='
        + encodeURIComponent(KWA_OLGA_COORDINATES.lat + ',' + KWA_OLGA_COORDINATES.lng);
    let fallbackTimer;
    let fallbackStarted = false;
    let addressCardShown = false;
    let mapInitialized = false;
    let initializationStarted = false;

    function makeExternalLink(label, href) {
        const link = document.createElement('a');
        link.href = href;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = label;
        return link;
    }

    function showAddressCard(reason) {
        if (addressCardShown) {
            return;
        }
        addressCardShown = true;
        window.clearTimeout(fallbackTimer);
        fallbackContainer.replaceChildren();

        const card = document.createElement('section');
        card.className = 'map-address-card';
        const heading = document.createElement('h3');
        heading.textContent = BUSINESS_NAME;
        const address = document.createElement('p');
        address.textContent = BUSINESS_ADDRESS;
        const link = makeExternalLink('Open in Google Maps', directionsUrl);
        card.append(heading, address, link);
        fallbackContainer.append(card);
        fallbackContainer.hidden = false;
        mapElement.hidden = true;
        if (mapStatus) {
            mapStatus.textContent = 'Map preview is unavailable. Use the address card to open directions.';
        }
        console.warn('Kwa Olga map fallback active: address card shown because the Google Maps embed could not load. ' + reason);
    }

    function showEmbedFallback(reason) {
        if (fallbackStarted) {
            return;
        }
        fallbackStarted = true;
        console.warn('Kwa Olga map fallback active: using the keyless Google Maps embed. ' + reason);
        mapElement.hidden = true;
        fallbackContainer.replaceChildren();

        const iframe = document.createElement('iframe');
        iframe.title = 'Google Maps location for Kwa Olga Car Wash & Lifestyle Lounge';
        iframe.loading = 'lazy';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;
        iframe.src = 'https://www.google.com/maps?q='
            + encodeURIComponent(KWA_OLGA_COORDINATES.lat + ',' + KWA_OLGA_COORDINATES.lng)
            + '&z=15&output=embed';
        let embedLoaded = false;
        iframe.addEventListener('load', function () {
            embedLoaded = true;
            window.clearTimeout(fallbackTimer);
        }, { once: true });
        iframe.addEventListener('error', function () {
            showAddressCard('The browser reported an iframe load error.');
        }, { once: true });
        fallbackContainer.append(iframe);

        function startEmbedTimeout() {
            if (!embedLoaded) {
                fallbackTimer = window.setTimeout(function () {
                    showAddressCard('The keyless embed did not finish loading within 12 seconds.');
                }, 12000);
            }
        }

        if ('IntersectionObserver' in window) {
            const embedObserver = new IntersectionObserver(function (entries) {
                if (entries[0].isIntersecting) {
                    embedObserver.disconnect();
                    startEmbedTimeout();
                }
            }, { rootMargin: '1000px 0px' });
            embedObserver.observe(iframe);
        } else {
            startEmbedTimeout();
        }
    }

    function initializeMap() {
        if (initializationStarted || fallbackStarted) {
            return;
        }
        initializationStarted = true;

        Promise.all([
            google.maps.importLibrary('maps'),
            google.maps.importLibrary('marker')
        ]).then(function (libraries) {
            if (fallbackStarted) {
                return;
            }
            const mapsLibrary = libraries[0];
            const markerLibrary = libraries[1];
            const map = new mapsLibrary.Map(mapElement, {
                center: KWA_OLGA_COORDINATES,
                zoom: 15,
                mapId: GOOGLE_MAP_ID,
                gestureHandling: window.matchMedia('(max-width: 768px)').matches ? 'cooperative' : 'auto',
                zoomControl: true,
                fullscreenControl: true,
                mapTypeControl: true,
                mapTypeControlOptions: {
                    mapTypeIds: ['roadmap', 'satellite']
                }
            });
            const marker = new markerLibrary.AdvancedMarkerElement({
                map: map,
                position: KWA_OLGA_COORDINATES,
                title: BUSINESS_NAME,
                gmpClickable: true
            });
            const infoContent = document.createElement('div');
            infoContent.className = 'map-info-window';
            const heading = document.createElement('strong');
            heading.textContent = BUSINESS_NAME;
            const address = document.createElement('p');
            address.textContent = BUSINESS_ADDRESS;
            const directions = makeExternalLink('Get Directions', directionsUrl);
            infoContent.append(heading, address, directions);

            const infoWindow = new google.maps.InfoWindow({ content: infoContent });
            marker.addListener('click', function () {
                infoWindow.open({ map: map, anchor: marker });
            });
            map.addListener('click', function (event) {
                if (event.latLng && mapStatus) {
                    mapStatus.textContent = 'Selected coordinates: '
                        + event.latLng.lat().toFixed(6) + ', '
                        + event.latLng.lng().toFixed(6);
                }
            });
            mapInitialized = true;
            window.clearTimeout(fallbackTimer);
        }).catch(function (error) {
            showEmbedFallback('The Google Maps API could not initialize (' + error.message + ').');
        });
    }

    window.initKwaOlgaGoogleMap = initializeMap;
    window.gm_authFailure = function () {
        showEmbedFallback('Google rejected the API key or its billing/API restrictions.');
    };

    if (!GOOGLE_MAPS_API_KEY || GOOGLE_MAPS_API_KEY === 'YOUR_API_KEY_HERE') {
        showEmbedFallback('No API key has been configured.');
        return;
    }

    if (window.location.protocol === 'file:') {
        showEmbedFallback('The page is running from file://; use Live Server or another HTTP origin for the API map.');
        return;
    }

    const apiScript = document.createElement('script');
    apiScript.src = 'https://maps.googleapis.com/maps/api/js?key='
        + encodeURIComponent(GOOGLE_MAPS_API_KEY)
        + '&loading=async&callback=initKwaOlgaGoogleMap&v=weekly';
    apiScript.async = true;
    apiScript.defer = true;
    apiScript.onerror = function () {
        showEmbedFallback('The Google Maps JavaScript API script failed to load.');
    };
    document.head.append(apiScript);
    fallbackTimer = window.setTimeout(function () {
        if (!mapInitialized) {
            showEmbedFallback('The Google Maps JavaScript API callback did not run within 15 seconds.');
        }
    }, 15000);
});
