# Kwa Olga Car Wash & Lifestyle Lounge


---

## Project Information
Student:Keabetswe Tselanngwe

Student Number:ST10505914

Module:WEDE5020 – Web Development

Lecturer:Mrs C Nukeri

---

## Project Overview
Kwa Olga Car Wash & Lifestyle Lounge is a website designed to provide customers with information about a car wash and lifestyle lounge business.

The website was developed across **Part 1 and Part 2** of the WEDE5020 project.

### Part 1
Part 1 focused on developing the foundation of the website using **HTML5**. This included:

- Planning the website structure.
- Creating the website pages.
- Creating the navigation.
- Adding business content.
- Adding images.
- Creating the menu.
- Creating the events and specials section.
- Creating the gallery.
- Creating the booking page and form.
- Creating the contact page and form.
- Creating the location page.
- Creating internal page links.

### Part 2
Part 2 focused on improving the website using **CSS3** and implementing responsive design.

This included:

- Creating an external CSS stylesheet.
- Applying consistent styling across all pages.
- Improving typography.
- Improving page layout.
- Implementing Flexbox.
- Implementing CSS Grid.
- Adding CSS pseudo-classes.
- Adding responsive media queries.
- Creating responsive navigation.
- Making images responsive.
- Improving the desktop, tablet and mobile layouts.
- Implementing changes based on Part 1 feedback.
- Updating the README and CHANGELOG.
- Testing and validating the website.

The project uses **HTML5 and CSS3 only**. JavaScript was not created or used.

---

# Website Purpose
The purpose of the website is to provide an online presence for Kwa Olga Car Wash & Lifestyle Lounge and make important business information easily accessible to customers.

The website allows visitors to:

- Learn about Kwa Olga.
- View available services and offerings.
- View the food and drinks menu.
- View events and specials.
- View photographs in the gallery.
- Access booking information.
- Submit booking information.
- Find contact information.
- Find the business location.

---

# Target Audience
The website is intended for:

- Existing Kwa Olga customers.
- Potential new customers.
- Customers looking for car wash services.
- Customers interested in food and drinks.
- Customers interested in events and specials.
- Customers looking for a social and lifestyle environment.
- Customers who need booking or contact information.

---

# Website Pages
The website consists of the following HTML pages:

### Home
`index.html`

Introduces Kwa Olga Car Wash & Lifestyle Lounge and provides access to the main areas of the website.

### About Us
`about.html`

Provides information about Kwa Olga and the business.

### Menu
`menu.html`

Displays the available food and drinks.

### Events
`events.html`

Displays specials, events and related information.

### Gallery
`gallery.html`

Displays photographs related to Kwa Olga.

### Bookings
`bookings.html`

Provides booking information and a booking form.

### Contact
`contact.html`

Provides contact information and a contact form.

### Location
`location.html`

Provides information about the business location and map information.

---

#  Website Features
The website includes:

- Consistent navigation across all pages.
- Kwa Olga logo in the header.
- Responsive website layout.
- Hero sections with background imagery.
- Business information.
- Food and drinks menu.
- Events and specials.
- Image gallery.
- Booking form.
- Contact form.
- Location information.
- Responsive images.
- Interactive navigation links.
- Hover and focus effects.
- Responsive desktop, tablet and mobile layouts.
- External CSS stylesheet.

---

# Part 1 – HTML5 Development
Part 1 established the basic structure and content of the website.

The HTML pages were developed using semantic HTML5 elements such as:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<footer>`
- `<form>`
- `<label>`
- `<input>`
- `<select>`
- `<textarea>`
- `<figure>`
- `<figcaption>`

The website was divided into separate pages to make the information easier for users to navigate.

---

#  Part 1 Feedback and Improvements
Feedback and review from Part 1 were considered when developing Part 2.

The main improvements made during Part 2 included:

- Restoring and checking the complete navigation across all pages.
- Ensuring the logo remains visible in the header.
- Improving consistency between pages.
- Creating a central external stylesheet.
- Improving the visual hierarchy of headings and content.
- Improving spacing and page layout.
- Adding responsive design.
- Improving navigation on smaller screens.
- Improving image responsiveness.
- Improving the gallery layout.
- Adding hover and focus interaction.
- Improving form styling.
- Testing the website across different screen sizes.
- Confirming that JavaScript was not required or introduced.

These changes were recorded in the project's `CHANGELOG.md`.

---

# Part 2 – CSS Development
Part 2 uses an external stylesheet:

```css
css/style.css
```

The external stylesheet is linked to the website pages and provides consistent styling throughout the project.

The CSS includes:

- Default styling.
- Typography.
- Colour scheme.
- Layout.
- Navigation.
- Header.
- Hero sections.
- Buttons.
- Forms.
- Gallery.
- Footer.
- Responsive media queries.
- Pseudo-classes.
- Responsive images.

---

#  CSS Default Styling
The stylesheet uses a universal reset:

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

CSS custom properties are used to manage the website's main colours:

```css
:root {
    --black: #000000;
    --dark-grey: #333333;
    --grey: #808080;
    --light-grey: #D9D9D9;
    --white: #FFFFFF;
    --red: #C00000;
}
```

The project also uses:

- `scroll-behavior: smooth`
- `max-width`
- `box-sizing`
- Responsive image sizing
- Consistent margins and padding

---

# Typography
Typography is controlled through the external stylesheet.

The website uses:

```css
font-family: "Trebuchet MS", Arial, sans-serif;
```

Responsive typography is implemented using CSS `clamp()`.

For example:

```css
font-size: clamp(2.5rem, 8vw, 5.2rem);
```

This allows headings to adjust according to the size of the user's screen.

The typography styling includes:

- Consistent heading sizes.
- Uppercase headings.
- Responsive headings.
- Consistent line height.
- Paragraph spacing.
- Navigation typography.
- Button typography.

---

#  Layout Structure
The website uses modern CSS layout techniques.

### Flexbox
Flexbox is used for:

- Logo alignment.
- Header layout.
- Navigation layout.
- Hero content.

### CSS Grid
CSS Grid is used for the image gallery.

The gallery displays:

- Three columns on desktop.
- Two columns on tablet.
- One column on mobile.

This allows the gallery to adapt to different screen sizes.

---

# Colour and Visual Design
The primary colour scheme consists of:

- **Black**
- **Grey**
- **Red**

White is used where necessary for contrast and readability.

The colours are applied consistently to:

- Header.
- Navigation.
- Buttons.
- Hero sections.
- Content sections.
- Gallery.
- Forms.
- Footer.

The website also uses a red border to provide visual separation and emphasis.

---

# CSS Pseudo-classes
Pseudo-classes are used to improve interaction and accessibility.

The stylesheet uses:

```css
:hover
:focus
:focus-visible
```

These are applied to elements such as:

- Navigation links.
- Buttons.
- Footer links.
- Form controls.

For example, navigation and buttons change to the red colour when the user hovers over or focuses on them.

---

# Responsive Design
Responsive design was implemented using CSS media queries.

The project uses three main breakpoints:

```css
1024px
768px
480px
```

### Desktop – Above 1024px
The desktop layout includes:

- Larger logo.
- Horizontal navigation.
- Larger hero sections.
- Three-column gallery.
- Wider content sections.

  ![image alt](https://github.com/KTselanngwe/Kwa-Olga/blob/d89ebc078f4c8db4bcc1f2755d93a49b2233c8b6/images/Desktop%20view.png). 

### Tablet – 768px to 1024px
The tablet layout adjusts:

- Logo dimensions.
- Navigation spacing.
- Gallery to two columns.
- Content spacing.
- Hero sections.

  ![image alt](https://github.com/KTselanngwe/Kwa-Olga/blob/d89ebc078f4c8db4bcc1f2755d93a49b2233c8b6/images/Tablet%20view.png). 

### Mobile – 480px to 768px
The mobile layout includes:

- Smaller logo.
- Smaller typography.
- Vertical navigation.
- One-column gallery.
- Smaller hero sections.
- Adjusted content spacing.

![image alt](https://github.com/KTselanngwe/Kwa-Olga/blob/0ea4d933f43179ded90e4982397ce91b78b455c2/images/Phone%20view.png). 


### Small Mobile – Below 480px
Additional adjustments are made for smaller mobile screens, including:

- Smaller logo.
- Smaller navigation text.
- Reduced navigation padding.
- Smaller hero headings.
- Reduced hero height.
![image alt](https://github.com/KTselanngwe/Kwa-Olga/blob/d89ebc078f4c8db4bcc1f2755d93a49b2233c8b6/images/Phone%20view%202.png).

---

#  Responsive Navigation
The navigation is responsive.

On larger screens, navigation links are displayed horizontally.

On mobile screens, the navigation changes to a vertical layout:

```css
nav ul {
    flex-direction: column;
    align-items: stretch;
}
```

This makes the navigation links easier to use on smaller screens.

---

#  Responsive Images
Images use responsive sizing:

```css
img {
    max-width: 100%;
    height: auto;
    display: block;
}
```

This prevents images from overflowing their containers.

Gallery images are also resized at smaller breakpoints.

---

#  Background Images
The website uses a background image from Unsplash.

The image used in the CSS is:

```css
images/ville-kaisla-HNCSCpWrVJA-unsplash.jpg
```

The image is used with CSS background properties including:

- `background-image`
- `background-position`
- `background-size`
- `background-attachment`

A dark overlay is also used to improve text readability over the background image.

---

#  Project Structure

```text
Kwa-Olga/
│
├── index.html
├── about.html
├── menu.html
├── events.html
├── gallery.html
├── bookings.html
├── contact.html
├── location.html
│
├── css/
│   └── style.css
│
├── images/
│   ├── logo.jpeg
│   └── other website images
│
├── README.md
└── CHANGELOG.md
```

---

#  Technologies and Tools
The project was developed using:

- **HTML5** – Website structure and content.
- **CSS3** – Styling and responsive design.
- **CSS Flexbox** – Page and component layouts.
- **CSS Grid** – Gallery layout.
- **CSS Media Queries** – Responsive design.
- **CSS Custom Properties** – Colour management.
- **Visual Studio Code** – Code editor.
- **GitHub** – Version control and project hosting.

### JavaScript
JavaScript is not included in this project.

The project focuses on the requirements for **HTML5 and CSS3**.

---

#  Testing and Validation
Testing was carried out during the development of both Part 1 and Part 2.

### HTML Testing
The following were checked:

- All required HTML pages exist.
- Navigation links work between pages.
- Images load correctly.
- Forms are present.
- Internal links are correctly implemented.
- Page structures are consistent.

### CSS Testing
The following were checked:

- `style.css` is correctly linked.
- Styling is applied consistently.
- Colours are consistent.
- Typography is consistent.
- Buttons display correctly.
- Forms are styled correctly.
- Hover effects work.
- Focus effects work.
- Gallery layout works.

### Responsive Testing
The website was checked at:

- Desktop screen sizes.
- Tablet screen sizes.
- Mobile screen sizes.

Responsive changes were checked for:

- Navigation.
- Logo.
- Typography.
- Hero sections.
- Content sections.
- Gallery.
- Images.
- Buttons.

The HTML pages and `style.css` were validated after the Part 2 updates.

---

# GitHub and Version Control
The project is stored in the GitHub repository:

**Repository:** `Kwa-Olga`
**Username:** `KTselanngwe`

GitHub was used throughout the development process to:

- Store the project.
- Track changes.
- Maintain project versions.
- Record development progress.
- Keep descriptive commits.

Examples of development commit areas include:

- Initial HTML development.
- Page and content updates.
- Navigation updates.
- CSS implementation.
- Responsive design.
- Gallery improvements.
- Final testing.
- README and CHANGELOG updates.

---

# Documentation
The project includes two main documentation files:

### README.md
Documents:

- Project information.
- Project purpose.
- Part 1 development.
- Part 2 development.
- Technologies.
- Website pages.
- CSS implementation.
- Responsive design.
- Testing.
- GitHub development.
- References.

### CHANGELOG.md
Records the development history of the website, including changes made during Part 1 and Part 2.

---

#  References
The following sources and project assets were used during the development of the Kwa Olga Car Wash & Lifestyle Lounge website.

 **Unsplash. (2026).** *Car wash and vehicle cleaning images*. Available at: [https://unsplash.com/](https://unsplash.com/) (Accessed: 12 August 2026).
 
 **Unsplash – Ville Kaisla. (2026).** *Vehicle image used as the website background: ville-kaisla-HNCSCpWrVJA-unsplash.jpg*. Available at: [https://unsplash.com/](https://unsplash.com/) (Accessed: 12 August 2026).
 
 **Kwa Olga. (2026).** *Kwa Olga Car Wash & Lifestyle Lounge logo*. Original project asset.
 
 **Kwa Olga. (2026).** *Kwa Olga menu images*. Original project assets.
 
 **Mozilla Developer Network (MDN). (2026).** *HTML: HyperText Markup Language*. Available at: [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) (Accessed: 16 September 2026).
 
 **Mozilla Developer Network (MDN). (2026).** *CSS: Cascading Style Sheets*. Available at: [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) (Accessed: 16 September 2026).
 
 **Mozilla Developer Network (MDN). (2026).** *CSS Flexible Box Layout*. Available at: [https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout) (Accessed: 16 September 2026).
 
 **Mozilla Developer Network (MDN). (2026).** *CSS Grid Layout*. Available at: [https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout) (Accessed: 16 September 2026).
 
 **Mozilla Developer Network (MDN). (2026).** *CSS Media Queries*. Available at: [https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries) (Accessed: 16 September 2026).
 
 **Mozilla Developer Network (MDN). (2026).** *CSS Pseudo-classes*. Available at: [https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) (Accessed: 16 September 2026).
 
 **Mozilla Developer Network (MDN). (2026).** *Using CSS custom properties*. Available at: [https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_CSS_custom_properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_CSS_custom_properties) (Accessed: 16 September 2026).
 
 **Mozilla Developer Network (MDN). (2026).** *CSS clamp() function*. Available at: [https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/clamp) (Accessed: 16 September 2026).
 
 **W3Schools. (2026).** *HTML Tutorial*. Available at: [https://www.w3schools.com/html/](https://www.w3schools.com/html/) (Accessed: 16 September 2026).
 
 **W3Schools. (2026).** *CSS Tutorial*. Available at: [https://www.w3schools.com/css/](https://www.w3schools.com/css/) (Accessed: 16 September 2026).
 
 **W3Schools. (2026).** *Responsive Web Design*. Available at: [https://www.w3schools.com/css/css_rwd_intro.asp](https://www.w3schools.com/css/css_rwd_intro.asp) (Accessed: 16 September 2026).
 
 **GitHub. (2026).** *GitHub Documentation*. Available at: [https://docs.github.com/](https://docs.github.com/) (Accessed: 16 September 2026).
 
 **Microsoft. (2026).** *Visual Studio Code Documentation*. Available at: [https://code.visualstudio.com/docs](https://code.visualstudio.com/docs) (Accessed: 16 September 2026).

---

#  Project Status

### Part 1
**Completed**

The HTML5 structure, content, navigation, forms, images, gallery, menu, events, contact and location pages were developed.

### Part 2
**Completed**

The external CSS stylesheet, desktop styling, responsive design, responsive navigation, responsive images, typography, layout, pseudo-classes and Part 1 improvements were implemented.

### Current Project
**Part 1 + Part 2 Completed**

The current version contains the complete HTML5 and CSS3 development for the Kwa Olga Car Wash & Lifestyle Lounge website.

---



