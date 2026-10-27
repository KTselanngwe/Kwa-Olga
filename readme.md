# Kwa Olga Car Wash & Lifestyle Lounge

**Module:** WEDE5020 – Web 

**Student:** Keabetswe Tselanngwe

**Student Number:** ST10505914

**Lecturer:** Mrs C Nukeri


## Project Overview
Kwa Olga Car Wash & Lifestyle Lounge is a multi-page website designed to provide customers with information about the business, its services, food and drinks menu, events, gallery, booking options, contact details and location.

The project was developed in three parts:

- **Part 1:** HTML5 website structure and content.

- **Part 2:** CSS3 styling and responsive design.

- **Part 3:** JavaScript functionality and interactivity.

## Website Purpose and Target Audience
The purpose of the website is to establish an online presence for Kwa Olga Car Wash & Lifestyle Lounge and make important business information accessible to customers.

The website is intended for existing and potential customers, including people looking for car-wash services, food and drinks, events and specials, photographs, booking information or location details.

## Website Pages
PageFilePurposeHome`index.html`Introduces the business and provides links to key sections.About Us`about.html`Presents information about Kwa Olga.Menu`menu.html`Displays food and drink offerings.Events`events.html`Presents events, specials and related information.Gallery`gallery.html`Displays photographs and provides gallery interactions.Bookings`bookings.html`Provides booking information and a booking form with a summary.Contact`contact.html`Provides contact information and a contact form.Location`location.html`Provides location information and map functionality.Registration`register.html`Demonstrates client-side registration and password validation.
## Part 1 – HTML5 Development
Part 1 established the website structure and content using HTML5. The website was divided into separate pages so visitors could navigate the business information more easily.

Semantic HTML5 elements used across the project include:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `footer`
- `form`
- `label`
- `input`
- `select`
- `textarea`
- `figure`
- `figcaption`
The initial development included the navigation, business content, logo and images, menu, events and specials, gallery, booking form, contact form, location information and internal links between pages.

## Part 2 – CSS3 Styling and Responsive Design
Part 2 improved the presentation and usability of the website through the external stylesheet `css/style.css`. The stylesheet provides consistent styling across the website, including the header, navigation, hero sections, content, buttons, forms, gallery and footer.

### CSS Defaults and Colour Scheme
A universal CSS reset is used to create consistent spacing and sizing:

```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```
CSS custom properties are used to keep the main colours consistent:

```
:root {
    --black: #000000;
    --dark-grey: #333333;
    --grey: #808080;
    --light-grey: #D9D9D9;
    --white: #FFFFFF;
    --red: #C00000;
}
```
Black, grey and red form the main colour scheme, while white is used where needed for contrast and readability. These colours are applied to the header, navigation, buttons, content sections, forms, gallery and footer.

### Typography and Layout
The main font stack is `"Trebuchet MS", Arial, sans-serif`. Responsive heading sizes use CSS `clamp()` so text can scale between smaller and larger screens.

Consistent line height, spacing, heading styles and button typography help maintain readability throughout the website.

**Flexbox** is used for layouts such as the header, logo alignment, navigation and hero content.

**CSS Grid** is used for the image gallery, which is designed to display three columns on desktop, two on tablet and one on mobile.

The stylesheet also uses `:hover`, `:focus` and `:focus-visible` pseudo-classes to provide interactive feedback for navigation links, buttons, footer links and form controls.

### Responsive Design
Media queries adjust the layout for different screen sizes. The project uses breakpoints around `1024px`, `768px` and `480px`.

- **Desktop:** Horizontal navigation, wider content areas and a three-column gallery.

- **Tablet:** Adjusted logo and navigation spacing, content spacing and a two-column gallery.

- **Mobile:** Smaller typography and logo, reduced spacing, vertical navigation and a one-column gallery.

- **Small mobile:** Further reductions to navigation padding, hero height and heading size.
Images use responsive sizing so they remain within their containers:

```
img {
    max-width: 100%;
    height: auto;
    display: block;
}
```
The website also uses background imagery, including `images/ville-kaisla-HNCSCpWrVJA-unsplash.jpg`, with background sizing and positioning and a dark overlay to help keep text readable.

### Responsive Design Screenshots
The following screenshots were included in the original project documentation:

- **Desktop view:** [View screenshot](https://github.com/KTselanngwe/Kwa-Olga/blob/d89ebc078f4c8db4bcc1f2755d93a49b2233c8b6/images/Desktop%20view.png)


- **Tablet view:** [View screenshot](https://github.com/KTselanngwe/Kwa-Olga/blob/d89ebc078f4c8db4bcc1f2755d93a49b2233c8b6/images/Tablet%20view.png)


- **Phone view:** [View screenshot](https://github.com/KTselanngwe/Kwa-Olga/blob/0ea4d933f43179ded90e4982397ce91b78b455c2/images/Phone%20view.png)


- **Small phone view:** [View screenshot](https://github.com/KTselanngwe/Kwa-Olga/blob/d89ebc078f4c8db4bcc1f2755d93a49b2233c8b6/images/Phone%20view%202.png)



### Part 1 Feedback and Improvements
The Part 1 review informed the improvements made during Part 2. These included:

- Checking navigation between pages.
- Keeping the logo visible in the header.
- Creating a central external stylesheet.
- Improving typography and spacing.
- Styling forms and buttons.
- Improving the gallery layout.
- Adding hover and focus states.
- Improving responsive navigation and images.
- Testing desktop, tablet and mobile layouts.
JavaScript was not part of Part 2. It was introduced in Part 3.

## Part 3 – JavaScript and Interactivity
Part 3 builds on the HTML5 structure from Part 1 and the CSS3 styling from Part 2 by adding interactive features. JavaScript is now part of the complete project.

### JavaScript Files
FilePurpose`js/bg-car.js`Controls the reusable decorative background-car component and its per-page presets.`js/script.js`Handles shared page interactions, including video backgrounds, gallery filtering, the lightbox and booking summary.`js/main.js`Handles mobile navigation, home-page behavior, package cards, scroll-reveal behavior and the current footer year.`js/data.js`Stores shared business details and package information, including names and prices.`js/map.js`Loads the Google Maps implementation and its fallback options for relevant pages.`css/bg-car.css`Controls background-car positioning and size for individual page presets.
### JavaScript Features

- **Animated background car:** A decorative car responds to scrolling and pointer movement. The `data-car` attribute on the page's `<body>` selects a preset for pages such as home, about, services, menu, specials, gallery, contact, booking and registration.
- **Pause control:** Visitors can pause the car animation, and their preference is remembered.
- **Motion accessibility:** The background car is decorative, is hidden from screen readers and respects reduced-motion preferences.
- **Video backgrounds:** The Gallery and Bookings pages are designed to use a muted, looping background video with a still-image fallback.
- **Data-driven package cards:** Home-page package cards are generated from shared information in `js/data.js`.
- **Accessible mobile menu:** The menu supports keyboard interaction, closes with the Escape key, manages focus and prevents background scrolling while open.
- **Automatic footer year:** The copyright year updates automatically.
- **Gallery filtering and lightbox:** Visitors can filter gallery items and open an image in a larger view.
- **Booking summary:** The booking interface can display the selected package, price and date.
- **Form and registration checks:** Client-side validation and registration password checks provide feedback in the browser.
- **Section search and scroll reveal:** Shared page behavior supports finding content and revealing sections as the visitor scrolls.
- **Map fallback:** The map script is designed to provide a fallback map or an address and directions card if the Google Maps JavaScript API cannot load.
Forms are demonstration-only. Client-side validation and booking summaries do not mean that submissions are sent to the business or stored in a database.

### Required Assets for the Background Car and Video
Check that these files exist at the indicated paths before treating the 3D car and video features as fully complete.

FilePurpose`models/car.glb`3D car model.`images/car.png`Fallback car image.`images/car-poster.png`Poster image displayed while the 3D model loads.`videos/kwa-olga-tiktok.mp4`Background video.`images/video-poster.jpg`Still image displayed if the video cannot play.If the 3D model or video is unavailable, the relevant fallback is only available if its asset exists and the fallback code can load it. Missing files may generate browser 404 errors.

### Customising the Background Car
Camera presets are configured in `js/bg-car.js`:

- `orbit` controls the horizontal camera angle.
- `phi` controls the vertical camera angle.
- `radius` controls the distance from the car.
The `data-car` selectors in `css/bg-car.css` control the car's placement and size on individual pages.

## Google Maps Configuration
The map loader is in `js/map.js`. The coordinates described in the project are approximate for Meadowlands and should not be treated as a verified street address or exact business pin.

The map implementation on the Contact, Location and Bookings pages must be tested on the deployed website before it is described as fully working.

To configure the Google Maps JavaScript API:

1. Open the [Google Cloud Console](https://console.cloud.google.com/) and create or select a project.
2. Set up billing for the project and enable **Maps JavaScript API** under **APIs & Services → Library**.
3. Create an API key under **APIs & Services → Credentials**.
4. Restrict the key to the website's approved HTTP referrers, including the deployed GitHub Pages origin and the local development origin used for testing.
5. Restrict API usage to **Maps JavaScript API** and set a budget alert. Budget alerts notify you about spending; they do not automatically stop usage.
6. In `js/map.js`, replace `YOUR_API_KEY_HERE` in `GOOGLE_MAPS_API_KEY` with the configured key, and replace `KWA_OLGA_COORDINATES` with verified latitude and longitude values. Replace `DEMO_MAP_ID` with your own Map ID if the implementation requires one.
7. Run the site using a local HTTP server rather than opening pages through `file://`.
**Security note:** A browser-based Maps API key is visible to website visitors. Restrict it by HTTP referrer and API, and do not commit an unrestricted key to the repository. If the key has already been exposed, review and rotate it in Google Cloud Console.

When the API key is absent or the JavaScript API fails, the code is intended to display a keyless map embed. If that also fails, it should display an address card and directions link. Verify each fallback in the browser.

The exact street address, phone or WhatsApp number, opening hours and package inclusions still need confirmation before the website is finalised.

## How to Run the Website Locally

1. Open the `Kwa-Olga` project folder in Visual Studio Code.
2. Start the website with the Live Server extension, or open a terminal in the project folder.
3. If Python is installed, run:

```
python -m http.server 8765
```
4. Open [http://127.0.0.1:8765/index.html](http://127.0.0.1:8765/index.html) in your browser.
A local HTTP server is recommended because browsers may block or restrict model, video and map resources when pages are opened directly through `file://`.

## Project Structure
The main project files are organised as follows. Some asset folders or files may need to be added if they are not yet present in the repository.

```
Kwa-Olga/
├── index.html
├── about.html
├── menu.html
├── events.html
├── gallery.html
├── bookings.html
├── contact.html
├── location.html
├── register.html
├── css/
│   ├── style.css
│   └── bg-car.css
├── js/
│   ├── bg-car.js
│   ├── script.js
│   ├── main.js
│   ├── data.js
│   └── map.js
├── images/
│   ├── logo.jpeg
│   ├── ville-kaisla-HNCSCpWrVJA-unsplash.jpg
│   └── [other website images and required fallback assets]
├── models/
│   └── car.glb
├── videos/
│   └── kwa-olga-tiktok.mp4
├── README.md
└── CHANGELOG.md
```

## Technologies and Tools

- **HTML5:** Page structure and content.
- **CSS3:** Styling and responsive design.
- **Flexbox and CSS Grid:** Page and component layouts.
- **CSS media queries:** Layout changes across desktop, tablet and mobile.
- **CSS custom properties:** Consistent colour management.
- **JavaScript:** Shared interactions, menus, gallery, booking summaries, form feedback and map loading.
- **Visual Studio Code:** Code editor and local development.
- **Git and GitHub:** Version control and project hosting.
- **Google Maps Platform:** Map functionality, subject to API configuration and testing.

## Testing and Validation

### Part 1 and Part 2
The project documentation records checks for:

- The presence of the required HTML pages.
- Navigation links and internal links.
- Images and forms.
- Correct stylesheet linking.
- Consistent styling, colours and typography.
- Buttons and form styling.
- Hover and focus effects.
- Gallery layout.
- Responsive behavior across desktop, tablet and mobile.
HTML and CSS should be rechecked after any further edits.

### Part 3
The following results were reported during Part 3 development:

- JavaScript syntax checks passed on the four core files `bg-car.js`, `script.js`, `main.js` and `data.js`.
- Gallery filtering, the lightbox, booking summary and background-car pause control were tested in the browser.
- No horizontal overflow was reported at viewport widths of 360px, 768px, 1024px and 1440px.
- No JavaScript errors were reported during the described tests.
- Mobile menu behavior was checked, including focus handling and closing with the Escape key.
These results reflect the tests reported during development. They do not confirm that every required asset, Google Maps configuration or live deployment has been verified.

Before submission, test every page and link, check the browser console and network panel, and test the map and fallback behavior on the live website.

## Known Limitations and Items to Confirm

- Confirm that `models/car.glb`, `images/car.png`, `images/car-poster.png`, `videos/kwa-olga-tiktok.mp4` and `images/video-poster.jpg` exist and load correctly. Missing files may cause 404 errors.
- Verify Google Maps on both Contact and Location pages, including the API key, coordinates and fallback behavior.
- Confirm the exact business address, phone or WhatsApp number, opening hours and package inclusions.
- Customer reviews and business-performance counters have been omitted until genuine information is available.
- Confirm that navigation labels are consistent; earlier notes identified both “Services & Menu” and “Menu”.
- Use “Lifestyle Lounge” consistently in the header and page content; earlier notes identified a “Leisure Lounge” wording difference.
- Ensure the displayed business location is described as approximate until the exact pin is verified.

## GitHub and Version Control
The project repository is [**Kwa-Olga**](https://github.com/KTselanngwe/Kwa-Olga) under the GitHub username `KTselanngwe`.

GitHub is used to store the project, track changes and record development progress. Commit messages should describe meaningful changes such as HTML page development, CSS styling, responsive design, JavaScript features, testing and documentation updates.

The intended GitHub Pages address recorded for the project is [https://ktselanngwe.github.io/Kwa-Olga/](https://ktselanngwe.github.io/Kwa-Olga/). Confirm the Pages settings and open the deployed site to verify the live URL before submitting it.

## Documentation

- `README.md`**:** Describes the project purpose, pages, Parts 1–3, technologies, responsive design, JavaScript features, setup, testing and known limitations.
- `CHANGELOG.md`**:** Records the development history and significant changes made during Parts 1, 2 and 3.

## References
The following sources informed the website development. Project-specific images and branding are identified separately from technical documentation.

1. Unsplash (2026) *Car wash and vehicle cleaning images*. Available at: [https://unsplash.com/](https://unsplash.com/) (Accessed: 12 August 2026).
2. Unsplash – Ville Kaisla (2026) *Vehicle image used as the website background: ville-kaisla-HNCSCpWrVJA-unsplash.jpg*. Available at: [https://unsplash.com/](https://unsplash.com/) (Accessed: 12 August 2026).
3. Kwa Olga (2026) *Kwa Olga Car Wash & Lifestyle Lounge logo*. Original project asset.
4. Kwa Olga (2026) *Kwa Olga menu images*. Original project assets.
5. Mozilla Developer Network (MDN) (2026) *HTML: HyperText Markup Language*. Available at: [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) (Accessed: 16 September 2026).
6. Mozilla Developer Network (MDN) (2026) *CSS: Cascading Style Sheets*. Available at: [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) (Accessed: 16 September 2026).
7. Mozilla Developer Network (MDN) (2026) *CSS Flexible Box Layout*. Available at: [https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout) (Accessed: 16 September 2026).
8. Mozilla Developer Network (MDN) (2026) *CSS Grid Layout*. Available at: [https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout) (Accessed: 16 September 2026).
9. Mozilla Developer Network (MDN) (2026) *CSS Media Queries*. Available at: [https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries) (Accessed: 16 September 2026).
10. Mozilla Developer Network (MDN) (2026) *CSS Pseudo-classes*. Available at: [https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) (Accessed: 16 September 2026).
11. Mozilla Developer Network (MDN) (2026) *Using CSS custom properties*. Available at: [https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_CSS_custom_properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_CSS_custom_properties) (Accessed: 16 September 2026).
12. Mozilla Developer Network (MDN) (2026) *CSS *`clamp()`* function*. Available at: [https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/clamp) (Accessed: 16 September 2026).
13. W3Schools (2026) *HTML Tutorial*. Available at: [https://www.w3schools.com/html/](https://www.w3schools.com/html/) (Accessed: 16 September 2026).
14. W3Schools (2026) *CSS Tutorial*. Available at: [https://www.w3schools.com/css/](https://www.w3schools.com/css/) (Accessed: 16 September 2026).
15. W3Schools (2026) *Responsive Web Design*. Available at: [https://www.w3schools.com/css/css_rwd_intro.asp](https://www.w3schools.com/css/css_rwd_intro.asp) (Accessed: 16 September 2026).
16. GitHub (2026) *GitHub Documentation*. Available at: [https://docs.github.com/](https://docs.github.com/) (Accessed: 16 September 2026).
17. Microsoft (2026) *Visual Studio Code Documentation*. Available at: [https://code.visualstudio.com/docs](https://code.visualstudio.com/docs) (Accessed: 16 September 2026).
18. Google (2026) *Google Maps Platform documentation*. Available at: [https://developers.google.com/maps/documentation/javascript](https://developers.google.com/maps/documentation/javascript) (Accessed: 27 October 2026).

## Project Status

- **Part 1 – HTML5:** Completed according to the project development notes.
- **Part 2 – CSS3 and responsive design:** Completed according to the project development notes.
- **Part 3 – JavaScript:** Implemented, with final verification still required for missing assets, map configuration and live-site behavior.
