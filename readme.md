# Kwa Olga Car Wash & Lifestyle Lounge

## WEDE5020 Web Development 
**Student:** Keabetswe Tselanngwe

**Student Number:** ST10505914

**Module:** WEDE5020 – Web Development

**Lecturer:** Mrs C Nukeri


---

## 1. Project Overview
Kwa Olga Car Wash & Lifestyle Lounge is a website developed for a car wash and lifestyle lounge business.

The website was developed in two stages for the WEDE5020 Web Development module.

**Part 1** focused on planning and developing the website structure using HTML5. This included creating the different website pages, navigation, content, images, forms and links.

**Part 2** focused on improving the website using CSS3. This included creating an external stylesheet, applying consistent styling, improving the layout, adding responsive design for desktop, tablet and mobile devices, and making improvements based on feedback from Part 1.

The project uses **HTML5 and CSS3 only**. No JavaScript has been created or used.

---

# 2. Website Goals and Objectives
The main objectives of the Kwa Olga website are to:

- Create a professional online presence for Kwa Olga Car Wash & Lifestyle Lounge.
- Provide customers with information about the business.
- Present the available car wash and lifestyle services.
- Display the food and drinks menu.
- Provide information about events and specials.
- Display photographs through the gallery.
- Allow customers to access booking information.
- Provide contact information.
- Provide the location of the business.
- Create a consistent and user-friendly website design.
- Make the website responsive on desktop, tablet and mobile devices.
- Use semantic HTML5 and an external CSS3 stylesheet.

---

# 3. Target Audience
The website is aimed at:

- Customers looking for car wash services.
- Customers interested in food and drinks.
- Customers looking for a place to relax and socialise.
- Customers interested in events and specials.
- Customers who want to make a booking.
- Customers looking for the business location.
- New and returning customers of Kwa Olga.

---

# 4. Part 1 – HTML5 Development
Part 1 focused mainly on developing the structure and content of the website using HTML5.

The website was divided into separate pages so that users can easily access different types of information.

## Part 1 Development Included

- Creating the website pages using HTML5.
- Creating a consistent navigation structure.
- Adding the Kwa Olga logo.
- Adding headings and paragraphs.
- Adding lists where required.
- Adding images.
- Creating the menu page.
- Creating the events and specials page.
- Creating the gallery.
- Creating the bookings page.
- Creating the contact page.
- Creating the location page.
- Adding forms for customer information.
- Adding internal page links.
- Adding external links where required.
- Organising website content using appropriate HTML elements.

---

# 5. Website Pages
The completed website contains the following pages:

### Home – `index.html`
The home page introduces Kwa Olga Car Wash & Lifestyle Lounge and provides access to the main areas of the website.

### About Us – `about.html`
The About Us page provides information about Kwa Olga and the type of experience offered to customers.

### Menu – `menu.html`
The Menu page displays the food and drinks available at the lounge.

### Events – `events.html`
The Events page provides information about specials, activities and events.

### Gallery – `gallery.html`
The Gallery page displays photographs related to Kwa Olga and its services.

### Bookings – `bookings.html`
The Bookings page provides customers with booking information and a booking form.

### Contact – `contact.html`
The Contact page provides contact information and a form that customers can use to submit enquiries.

### Location – `location.html`
The Location page provides information about where Kwa Olga is located and includes location/map information.

---

# 6. Navigation
A consistent navigation menu was implemented across the website.

The navigation provides links to:

- Home
- About Us
- Menu
- Events
- Gallery
- Bookings
- Contact
- Location

The navigation was checked and restored across all pages during the Part 2 development stage.

The logo is also kept visible in the header across the website.

---

# 7. Part 2 – CSS3 Development
Part 2 focused on improving the appearance, layout and responsiveness of the website.

An external stylesheet was created:

```css
css/style.css
```

The stylesheet is used throughout the website to maintain a consistent design.

---

# 8. Website Colour Scheme
The main visual colour scheme is:

- **Black**
- **Grey**
- **Red**

White is also used where necessary for text, contrast and backgrounds.

The colour scheme is used consistently across:

- Header
- Navigation
- Buttons
- Content sections
- Hero sections
- Forms
- Gallery
- Footer

---

# 9. CSS Features
The external stylesheet includes several CSS3 features.

## CSS Custom Properties
The project uses CSS custom properties in `:root` to store the main colours.

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

This makes the colour scheme easier to maintain consistently.

## CSS Reset
A universal selector is used to reset default margins and padding.

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

## Typography
The website uses:

- Trebuchet MS
- Arial
- Responsive font sizes
- `clamp()` for headings
- Consistent line spacing
- Uppercase headings

## Flexbox
Flexbox is used for:

- Logo layout.
- Header elements.
- Navigation.
- Hero content.

## CSS Grid
CSS Grid is used for the gallery.

The gallery changes according to screen size:

- Desktop: 3 columns.
- Tablet: 2 columns.
- Mobile: 1 column.

## Background Images
Background images are used in the main website sections and hero areas.

The website background uses the following image:

```css
images/ville-kaisla-HNCSCpWrVJA-unsplash.jpg
```

## Buttons
Buttons are styled using CSS and change appearance when the user interacts with them.

## Forms
Form elements such as:

- Input fields
- Select fields
- Text areas
- Buttons

are styled consistently.

---

# 10. CSS Pseudo-classes
Pseudo-classes are used to improve user interaction.

The project uses:

- `:hover`
- `:focus`
- `:focus-visible`

For example, navigation links and buttons change colour when the user moves over them or focuses on them.

---

# 11. Responsive Design
Responsive design was added during Part 2 to make the website work across different screen sizes.

The project contains three main CSS breakpoints:

```css
1024px
768px
480px
```

## Desktop
The desktop layout provides:

- Full navigation.
- Three-column gallery.
- Larger hero sections.
- Larger images.
- Wider content areas.

## Tablet
The tablet layout adjusts:

- Logo size.
- Navigation spacing.
- Gallery to two columns.
- Content widths.
- Hero section sizing.

## Mobile
The mobile layout includes:

- Smaller logo.
- Smaller typography.
- Vertical navigation.
- One-column gallery.
- Smaller hero sections.
- Full-width buttons where required.
- Adjusted content spacing.

---

# 12. Responsive Navigation
The navigation was improved for smaller devices.

On desktop, navigation links are displayed horizontally.

On mobile devices, the navigation changes to a vertical layout so that the links are easier to access.

The navigation also remains consistent across the website pages.

---

# 13. Responsive Images
Images are made responsive using:

```css
img {
    max-width: 100%;
    height: auto;
    display: block;
}
```

This allows images to resize according to the available screen space while maintaining their proportions.

The gallery images are also adjusted at different breakpoints.

---

# 14. Part 1 Feedback and Part 2 Improvements
The Part 2 development included improvements based on the requirements and feedback from Part 1.

The main improvements included:

- Restoring and checking navigation links across all pages.
- Ensuring the logo remains visible in the header.
- Creating and applying a central external stylesheet.
- Improving the consistency of the website design.
- Adding desktop styling.
- Adding tablet styling.
- Adding mobile styling.
- Improving typography.
- Improving page spacing and layout.
- Adding responsive navigation.
- Adding responsive images.
- Improving the gallery layout.
- Adding CSS hover and focus effects.
- Improving form styling.
- Maintaining the black, grey and red visual identity.
- Confirming that no JavaScript files were created.

---

# 15. Testing and Validation
The website was tested during both development stages.

## Part 1 Testing
The HTML pages were checked for:

- Correct page structure.
- Working navigation links.
- Correct internal links.
- Correct image paths.
- Forms.
- Consistent page structure.
- Required website content.

## Part 2 Testing
The CSS and responsive layout were checked for:

- Correct external stylesheet linking.
- Consistent styling across pages.
- Desktop layout.
- Tablet layout.
- Mobile layout.
- Responsive navigation.
- Responsive images.
- Gallery layout.
- Hover effects.
- Focus effects.
- Form styling.

The HTML pages and `style.css` were validated after the updates.

---

# 16. Technologies and Tools
The following technologies and tools were used:

- **HTML5** – Website structure and content.
- **CSS3** – Styling and responsive design.
- **CSS Flexbox** – Layout.
- **CSS Grid** – Gallery layout.
- **CSS Media Queries** – Responsive design.
- **CSS Custom Properties** – Colour management.
- **Visual Studio Code** – Development environment.
- **GitHub** – Version control and project repository.

### JavaScript
JavaScript is **not used** in this project.

The project focuses specifically on **HTML5 and CSS3**.

---

# 17. Project Structure

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

# 18. GitHub
The project is stored and maintained using GitHub.

**Repository:** Kwa-Olga
**GitHub Username:** KTselanngwe

GitHub is used to:

- Store the project files.
- Track development.
- Record changes through commits.
- Maintain different versions of the website.
- Document the development process.

Descriptive commits were used to record development activities such as:

- Creating HTML pages.
- Updating website content.
- Fixing navigation.
- Developing CSS.
- Adding responsive design.
- Updating documentation.
- Final project improvements.

---

# 19. Project Development Summary

## Part 1
Part 1 established the foundation of the website by developing the HTML5 structure and content.

The main work included:

- Website planning.
- Page creation.
- Navigation.
- Content.
- Images.
- Forms.
- Gallery.
- Menu.
- Events.
- Contact information.
- Location information.

## Part 2
Part 2 developed the visual presentation and responsiveness of the website.

The main work included:

- External CSS stylesheet.
- Typography.
- Colour scheme.
- Layout.
- Flexbox.
- CSS Grid.
- Buttons.
- Forms.
- Pseudo-classes.
- Responsive design.
- Responsive navigation.
- Responsive images.
- Desktop, tablet and mobile breakpoints.
- Improvements based on Part 1 feedback.

---

# 20. References
The following sources and project assets were used during the development of the Kwa Olga Car Wash & Lifestyle Lounge website.

1. **Unsplash. (2026).** *Car wash and vehicle cleaning images*. Available at: [https://unsplash.com/](https://unsplash.com/) (Accessed: 12 August 2026).
2. **Unsplash – Ville Kaisla. (2026).** *Vehicle image used as the website background: ville-kaisla-HNCSCpWrVJA-unsplash.jpg*. Available at: [https://unsplash.com/](https://unsplash.com/) (Accessed: 12 August 2026).
3. **Kwa Olga. (2026).** *Kwa Olga Car Wash & Lifestyle Lounge logo*. Original project asset.
4. **Kwa Olga. (2026).** *Kwa Olga menu images*. Original project assets.
5. **Mozilla Developer Network (MDN). (2026).** *HTML: HyperText Markup Language*. Available at: [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) (Accessed: 16 September 2026).
6. **Mozilla Developer Network (MDN). (2026).** *CSS: Cascading Style Sheets*. Available at: [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) (Accessed: 16 September 2026).
7. **Mozilla Developer Network (MDN). (2026).** *CSS Flexible Box Layout*. Available at: [https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Flexible_box_layout) (Accessed: 16 September 2026).
8. **Mozilla Developer Network (MDN). (2026).** *CSS Grid Layout*. Available at: [https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout) (Accessed: 16 September 2026).
9. **Mozilla Developer Network (MDN). (2026).** *CSS Media Queries*. Available at: [https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries) (Accessed: 16 September 2026).
10. **Mozilla Developer Network (MDN). (2026).** *CSS Pseudo-classes*. Available at: [https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes) (Accessed: 16 September 2026).
11. **Mozilla Developer Network (MDN). (2026).** *Using CSS custom properties*. Available at: [https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_CSS_custom_properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_CSS_custom_properties) (Accessed: 16 September 2026).
12. **Mozilla Developer Network (MDN). (2026).** *CSS clamp() function*. Available at: [https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/clamp](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/clamp) (Accessed: 16 September 2026).
13. **W3Schools. (2026).** *HTML Tutorial*. Available at: [https://www.w3schools.com/html/](https://www.w3schools.com/html/) (Accessed: 16 September 2026).
14. **W3Schools. (2026).** *CSS Tutorial*. Available at: [https://www.w3schools.com/css/](https://www.w3schools.com/css/) (Accessed: 16 September 2026).
15. **W3Schools. (2026).** *Responsive Web Design*. Available at: [https://www.w3schools.com/css/css_rwd_intro.asp](https://www.w3schools.com/css/css_rwd_intro.asp) (Accessed: 16 September 2026).
16. **GitHub. (2026).** *GitHub Documentation*. Available at: [https://docs.github.com/](https://docs.github.com/) (Accessed: 16 September 2026).
17. **Microsoft. (2026).** *Visual Studio Code Documentation*. Available at: [https://code.visualstudio.com/docs](https://code.visualstudio.com/docs) (Accessed: 16 September 2026).

---

# 21. Project Status
**Part 1 – Completed**

HTML5 structure, website pages, content, navigation, images, forms and links were developed.

**Part 2 – Completed**

CSS3 styling, responsive design, navigation improvements, responsive images, layout improvements and documentation were completed.

The final project contains the complete Part 1 and Part 2 development work and focuses on **HTML5 and CSS3 without JavaScript**.


