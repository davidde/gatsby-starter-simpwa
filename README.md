# Gatsby starter for simple PWA's
This starter implements [gatsby-theme-simpwa](https://github.com/davidde/gatsby-theme-simpwa)
to provide a generic, re-usable and modular layout for developing simple PWA's
(Progressive Web Applications) with responsive sidebars on the left and right.

The intended use case is for **simple web apps** aiming to present themselves as close
as possible to native mobile apps. The idea here is that a simple app can stuff all
its content in the main screen and its left/right sidebars.

## Installation
```bash
gatsby new my-awesome-app https://github.com/davidde/gatsby-starter-simpwa
```

## Customization
Customization is fairly simple due to a modular approach to styling/theming.

> Even the theme 's got themes!

Each theme consists of 3 .scss partials: a **colors**, **specs**, and **styles** file,
which define *color variables*, *spec variables* (like sizes and media queries), and
the *general styles* of the theme respectively:
```
src/gatsby-theme-simpwa/styles
├── _default_colors.scss
├── _default_specs.scss
├── _default_styles.scss
└── default_theme.scss
```
Do you want different colors? Simply modify `src/gatsby-theme-simpwa/styles/_default_colors.scss`.  
Want smaller/larger sidebars? Modify `src/gatsby-theme-simpwa/styles/_default_specs.scss`.

Check out the [theme's README](https://github.com/davidde/gatsby-theme-simpwa)
for more.