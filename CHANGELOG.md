# CHANGELOG

# Kwa Olga Car Wash & Lifestyle Lounge
This changelog records the development and updates made to the Kwa Olga website throughout Parts 1, 2 and 3 of the WEDE5020 Web Development project.

---

## Part 3: JavaScript and Deployment  October 2026

### Added

- Added the reusable background car feature in `js/bg-car.js` for all nine website pages, with individual camera presets controlled by the `data-car` attribute.
- Added car camera movement in response to scrolling and pointer movement.
- Added an animation pause control that remembers the visitor's preference.
- Added reduced-motion support that disables scroll- and pointer-driven movement.
- Added a fallback to display a still car image when the 3D model or WebGL is unavailable.
- Added shared package information in `js/data.js`.
- Added dynamic home page package cards using `#home-package-grid` and data from `data.js`.
- Added JavaScript to populate the `#current-year` element automatically.
- Added a still poster image for cases where the background video cannot play.

### Changed

- Updated the mobile navigation in `js/main.js` to manage `aria-expanded`, close with Escape, manage keyboard focus while open and prevent background scrolling.
- Updated the mobile menu to fill the viewport on smaller screens.
- Retained the existing gallery filtering, lightbox and booking summary features.
- Updated the background video behavior to use a poster image as a fallback when playback is unavailable.

### Fixed

- Corrected the fallback car image path.
- Fixed car movement so it resumes correctly after the pause control is used.
- Removed obsolete references associated with the deleted video credit feature.

### Removed

- Removed the TikTok credit badge and its placeholder values, `YOUR_TIKTOK_HANDLE` and `YOUR_VIDEO_ID`.
- Removed the old video-toggle code and unused variables, including `videoToggle` and `userPausedVideo`.

### Maps: Contact and Location Pages

The map implementation is only complete when present in the code and tested on both the Contact and Location pages. The required implementation is an interactive Google Map replacing the OpenStreetMap tiles, with a Kwa Olga marker, information window and Get Directions link. It must provide a Google Maps embed or Open in Google Maps card if the interactive map cannot load, retain the approximate-location notice and retain click-to-read-coordinates behavior. Contact and Location page testing still needs to be confirmed before this work is marked complete.

### Deployment

- **Hosting:** GitHub Pages.
- **Branch:** `main`.
- **Publishing folder:** Repository root.
- **HTTPS:** Enable HTTPS in GitHub Pages settings.
- **Expected project URL:** `https://ktselanngwe.github.io/Kwa-Olga/`, assuming the repository name is `Kwa-Olga` and GitHub Pages is configured accordingly.
- For local testing, the Google Maps API key should allow the appropriate local development address, such as `http://127.0.0.1:5500/*`, and the deployed website's domain. Restrict the key to the necessary APIs.

### Testing

The following results were reported during development:

- JavaScript syntax checks passed on all four JavaScript files.
- Gallery filtering, the lightbox, the booking summary and the background car pause control worked in the browser.
- No horizontal overflow was reported at viewport widths of 360, 768, 1024 and 1440 pixels.
- No JavaScript errors were reported during the described tests.
- Browser 404 errors were reported for `car.glb`, `car.png`, `car-poster.png` and `kwa-olga-tiktok.mp4` because the corresponding files had not yet been added.

### Known Issues

- The 3D car model and fallback assets still need to be added and verified.
- The background video file `kwa-olga-tiktok.mp4` still needs to be added if it remains part of the final design.
- The Google Maps implementation must be confirmed in the source code and tested on both Contact and Location pages before it can be marked complete.
- The navigation currently displays both “Services & Menu” and “Menu”.
- The Location page uses “Leisure Lounge”, while the header uses “Lifestyle Lounge”. The business wording should be made consistent.
- Final testing on a physical phone and laptop should be recorded once completed.



---

## [Part 2] – September 2026

### Added

- Added external CSS stylesheet: `css/style.css`.
- Added responsive CSS styling.
- Added media queries and responsive breakpoints.
- Added CSS pseudo-classes for interactive elements.
- Added responsive image styling.
- Added responsive typography.
- Added responsive layouts for desktop, tablet and mobile devices.
- Added consistent styling across website pages.

### Changed

- Updated the overall website visual design.
- Improved the website colour scheme.
- Improved typography and text readability.
- Improved spacing and alignment.
- Improved navigation styling.
- Improved header and footer.
- Improved buttons.
- Improved cards.
- Improved forms.
- Improved gallery.
- Improved menu.
- Improved event sections.
- Improved booking sections.
- Improved image presentation.
- Improved desktop layouts.
- Improved tablet layouts.
- Improved mobile layouts.

---

## Navigation Updates

- Restored missing navigation links.
- Checked navigation links across all website pages.
- Ensured the main navigation provides access to the website pages.
- Maintained consistent navigation across the website.
- Checked internal links after the updates.

---

## Responsive Design

- Added desktop layout adjustments.
- Added tablet layout adjustments.
- Added mobile layout adjustments.
- Adjusted content widths.
- Adjusted typography for different screen sizes.
- Improved responsive images.
- Adjusted cards and content sections for mobile devices.
- Improved forms for smaller screens.
- Improved navigation responsiveness.
- Added responsive spacing and alignment.

---

## CSS Updates

- Created and implemented the shared external stylesheet.
- Added default styling.
- Added typography styling.
- Added layout styling.
- Added colour and decorative styling.
- Added hover effects.
- Added focus effects.
- Added active states.
- Improved buttons and links.
- Improved website sections and content presentation.

---

## Testing
The website was tested after the Part 2 updates.

Testing included:

- HTML page structure.
- Navigation links.
- Internal links.
- CSS stylesheet connections.
- Images.
- Forms.
- Header and footer.
- Buttons and interactive elements.
- Desktop layout.
- Tablet layout.
- Mobile layout.
- Responsive images.
- Responsive typography.
- Website consistency.

All HTML pages and `style.css` were checked after the updates.

---

## [Part 1] – 2026

### Added

- Created the initial website structure.
- Created the main HTML pages.
- Added website content.
- Added Kwa Olga branding.
- Added website navigation.
- Added images.
- Added menu information.
- Added events and specials.
- Added gallery content.
- Added booking information.
- Added contact information.
- Added location information.
- Added forms.
- Created the website sitemap.

---

## HTML Pages Created

- `index.html`
- `about.html`
- `menu.html`
- `events.html`
- `gallery.html`
- `bookings.html`
- `contact.html`
- `location.html`

---

## Initial Website Sections

- Home
- About Us
- Menu
- Specials and Events
- Gallery
- Bookings
- Contact
- Location

---

## Part 1 Feedback
Following the development and review of Part 1, areas for improvement were identified.

These included:

- Visual appearance.
- Consistent CSS styling.
- Page layouts.
- Typography.
- Navigation.
- Spacing and alignment.
- Image presentation.
- Responsive design.
- Mobile layouts.
- Tablet layouts.
- Interactive styling.
- Consistency across website pages.

These areas were addressed during Part 2.

---

## Part 2 Feedback Implementation
The following improvements were implemented during Part 2:

1. Created a shared external CSS stylesheet.
2. Implemented the stylesheet across the website pages.
3. Improved the visual design.
4. Improved typography.
5. Improved page layouts.
6. Improved navigation.
7. Restored and checked navigation links.
8. Added CSS pseudo-classes.
9. Improved colours and decorative styling.
10. Improved image presentation.
11. Added responsive media queries.
12. Added desktop, tablet and mobile adjustments.
13. Improved responsive typography.
14. Improved responsive images.
15. Improved forms and content sections.
16. Tested the website after the updates.

---

## Documentation Updates

- Updated `README.md`.
- Created and updated `CHANGELOG.md`.
- Documented Part 1 development.
- Documented Part 1 feedback.
- Documented Part 2 improvements.
- Documented responsive design.
- Documented CSS implementation.
- Added project references.
- Updated project status.

---

## Current Project Status

- Part 1 Completed
- Part 2 Completed
- Part 3 Completed 
- HTML5 Implemented
- CSS3 Implemented
- External CSS Implemented
- Responsive Design Implemented
- Navigation Updated
- JavaScript Implemented in `js/script.js`
- Registration Page Added
- Google Maps loader added; Contact and Location page testing still needs confirmation
- README Updated
- CHANGELOG Updated
- GitHub Repository Updated

---
