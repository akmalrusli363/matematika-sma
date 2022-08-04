# Customization

This project can be customized by editing following files:

- `_config.yaml` for altering site settings (including theme color).
- `_data/navigation.yaml` for page navigations.
- `_layouts` for adding or customizing layouts within this theme.
- `_sass/_variables.scss` for project theme colors (including body text, heading, section, and blockquote).
- `_sass/_highlighter.scss` for setup syntax highlighting markup colors.
- `_sass/highlighter-theme` for managing syntax highlighting color schemes/theme.
- `assets` for managing project assets (including images, css, font, scripts, etc).
- `assets/favicon.ico` for site favicon.

You can create your own pages within projects (or with your own directory) with the pages listed on `_data/navigation.yaml` for ease-of-accessibility through navigation bar menu. Or if you had added your own posts for the project, you can customize (or even fork this project) for blogging/posting purpose through this theme.

## Configuration variables

Cayman will respect the following variables, if set in your site's `_config.yml`:

```yaml
title: [The title of your site]
description: [A short description of your site's purpose]
```

Additionally, you may choose to set the following optional variables:

```yaml
show_downloads: ["true" or "false" (unquoted) to indicate whether to provide a download URL]
google_analytics: [Your Google Analytics tracking ID]
```

The `google_analytics` is optional, especially when this site need to be tracked using Google Analytics for monitoring purpose.

## Theming

You can customize the `cayman-improved` theme by edit the `color` configuration on `_config.yml`:

```yaml
color:
  meta: "#2F205F" # For site theme applied on browser (especially for mobile browsers)
  primary: "#4A307D" # The primary color for site theme (applied on navbar & with meta color if meta isn't present)
  accent: "#5A3A90" # Color for accent components navbar shadow and back-to-top button
```

The following `primary` and `accent` are required for project theme, with `meta` are optional where default value is presented from `primary` if absent.

Customization can be possible with separate light and dark theme scheme where both are placed in `_variables.scss`. For example, the theme's `_variables.scss` consists of:

```scss
// Headers
$header-heading-color: #fff !default;
$header-bg-color: #FA406A !default;
$header-bg-color-secondary: #FA904F !default;

// Text
$section-headings-color: #159957 !default;
$body-text-color: #606c71 !default;
$body-link-color: #1e6bb8 !default;
$blockquote-text-color: #819198 !default;

// Dark Mode
$dark-bg-color: #272838 !default;
$dark-body-text-color: #F8F7F9 !default;
$dark-body-link-color: #5ABCDE !default;
$dark-section-headings-color: #06D6A0 !default;
$dark-blockquote-text-color: #CEBACF !default;

// Dark Headers Theme
$dark-header-bg-color: #5F4BB6 !default;
$dark-header-bg-color-secondary: #FA406A;
```

## Syntax Highlighting

For this project, we've already included some syntax highlighter colorschemes based on Base16, where the provided themes are placed on `/_sass/highlighter-theme` directory.

- `base16-chanivibes-light-scheme`: ChaniVibes light scheme
- `base16-chanivibes-scheme`: ChaniVibes dark scheme
- `base16-circus-scheme`: Circus dark theme
- `base16-github-scheme`: GitHub light theme
- `base16-google-dark-scheme`: Google dark theme
- `base16-google-light-scheme`: Google light theme
- `base16-hi-mageria-scheme`: Hi! Mage - Mageria dark scheme

For another themes, you can add from [tajmone/Base16-Sass](https://github.com/tajmone/Base16-Sass) for more customized theme, or create your own custom theme with following template:

```scss
$base00: #ffffff; // Default Background
$base01: #f5f5f5; // Lighter Background (Used for status bars, line number and folding marks)
$base02: #c8c8fa; // Selection Background
$base03: #969896; // Comments, Invisibles, Line Highlighting
$base04: #e8e8e8; // Dark Foreground (Used for status bars)
$base05: #333333; // Default Foreground, Caret, Delimiters, Operators
$base06: #ffffff; // Light Foreground (Not often used)
$base07: #ffffff; // Light Background (Not often used)
$base08: #ed6a43; // Variables, XML Tags, Markup Link Text, Markup Lists, Diff Deleted
$base09: #0086b3; // Integers, Boolean, Constants, XML Attributes, Markup Link Url
$base0A: #795da3; // Classes, Markup Bold, Search Text Background
$base0B: #183691; // Strings, Inherited Class, Markup Code, Diff Inserted
$base0C: #183691; // Support, Regular Expressions, Escape Characters, Markup Quotes
$base0D: #795da3; // Functions, Methods, Attribute IDs, Headings
$base0E: #a71d5d; // Keywords, Storage, Selector, Markup Italic, Diff Changed
$base0F: #333333; // Deprecated, Opening/Closing Embedded Language Tags, e.g. <?php ?>
```

Then, change the highlighter theme from `rogue-github.scss`:

```scss
@import "highlighter-themes/base16-chanivibes-scheme"; /* Change this for altered theme */
@import "_highlighter";
```
