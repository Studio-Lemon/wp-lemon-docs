## 5.2.3 - 13 December 2023

### ⛰️ Features

-   _(php)_ Add zoom level option to map block

### 🐛 Bug Fixes

-   _(css)_ Overwrite text alignment on card level
-   _(css)_ Set bigger specificity
-   _(css)_ Remove specificity
-   Overwrite Woo's prevent admin check

### ⚙️ Miscellaneous Tasks

-   Reorder functions

## 5.2.2 - 08 December 2023

### ⛰️ Features

-   _(twig)_ New apply_filters_deprecated filter added
-   _(twig)_ renamed filters in entry-footer.twig to be more consistent and deprecated old filters.
-   _(php)_ remove caching from widgets
-   _(php)_ add a default title to maps block to comply with wcag, Fixes #248

### 🐛 Bug Fixes

-   _(js)_ Importing unregisterPlugin
-   _(php)_ Added new editor_css function that hooks into enqueue_block_assets to load styles in the block editor iframe, Fixes #249
-   _(twig)_ Added spaceless filter to remove extra whitespaces in editor that caused a react warning in the editor
-   Fix label filter
-   Change domready in opening hours block

### 📚 Documentation

-   Document hooks

### ⚙️ Miscellaneous Tasks

-   Remove unneeded js translation
-   Chore(translations) updated translations
-   Rename variable

## 5.2.1 - 06 December 2023

### ⛰️ Features

-   _(PHP/Twig)_ New apply_filters_deprecated filter added
-   _(twig)_ renamed filters in entry-footer.twig to be more consistent and deprecate old filters.
-   _(PHP)_ remove caching from widgets
-   _(PHP/Twig)_ add a default title to maps block iframe to comply with WCAG, fixes #248

### 🐛 Bug Fixes

-   Change domready in opening hours block

### ⚙️ Miscellaneous Tasks

-   Removed unneeded js translation task in package.json
-   Updated Dutch translations

## 5.2.0 - 21 November 2023

### ⛰️ Features

-   Updated Bulldozer required version to 4.1.0
-   New block opening-hours added, this will only be loaded when Rank Math is active

### 🐛 Bug Fixes

-   _(js)_ Add element as detail to eventHandler
-   _(php)_ Fixed WordPress 6.4 deprecation in functions.php
-   _(php)_ Reset array if more then one value in theme.php

## 5.1.0 - 20 November 2023

### ⛰️ Features

-   [**breaking**] wp-button component now has the `theme-button` class added. Outline buttons also get the modifier class `theme-button--ghost`. This makes it easier to style default button components as well as gutenberg buttons the same way. Make sure you check your custom button css to see if it is still needed/works.
-   _(php)_ Add modifier class to body when on a custom archive page
-   _(php)_ HTML classes now are more easily filterable via bootstrap_navwalker `nav_menu_link_attributes` filter
-   _(js)_ Add custom event dispatcher in search.js, menu.js and dropdown.js
-   _(lang)_ updated languages
-   _(css)_ Footer update - Realized by section of footer is now less intrusive
-   _(css)_ partially revert changes to remove default font weight in favor of a variable.
-   _(js)_ New eventHanler function added
-   _(Twig)_ Background images in sections now scale to 100vw
-   _(Twig)_ Remove deprecated action
-   Add automatic changelog generation

### 🐛 Bug Fixes

-   _(css)_ Overwrite css value of button when parent text color is set.
-   _(css)_ Set proper flex direction in .img-container
-   _(css)_ make headings scale the same way in the backend as in the frontend

### 🎨 Styling

-   Better default .theme-button-row
-   Better default ghost buttons

## 5.0.2:

_Release Date - 13 november 2023_

-   🐛 **Bugs Fixed**
    -   PHP - Temporary fix added for Timber 2.0.0 bug where the wrong twig files would be loaded when you want to overwrite a twig file from the parent theme.
    -   SCSS - Fix section background color in contrast mode.

## 5.0.1:

_Release Date - 13 november 2023_

-   ✨ **Enhanced**
    -   Workflow - run changelog sync separately from build
-   🐛 **Bugs Fixed**
    -   PHP - Update return type of query API functions to be more specific
    -   PHP - load correct dependencies for lock-reusable-block.js
    -   PHP - Fix array_map function in faq-highlight.php block
    -   PHP - Merge in full color settings from palette.json
    -   Twig - fix deprecated Image call in media.twig

## 5.0.0:

_Release Date - 10 november 2023_

-   ⛏️ **Breaking**
    -   JS `bp_site` is renamed to `wpLemon` to be more consistent with the rest of the codebase. Please update your own javascript functions accordingly.
    -   Minimal PHP version is now 8.1
    -   Timber 2.0 introduces breaking changes. Most of them are handled by wp-lemon but please check your child theme `Timber` calls to see if they are still valid. Also check your debug.log for any errors or deprecation notices.
    -   Swiper is updated to 11.x
-   💡 **Newly added**

    -   wp-lemon now uses Timber 2.0 which is way more modern then Timber 1. See [upgrade guide](https://timber.github.io/docs/v2/upgrade-guides/2.0/). We updated wp-lemon to be fully compatible with Timber 2.0

-   ✨ **Enhanced**
    -   Frontend translations are now handles via wp_localize_script instead of i18n.js. This leads to ~600kb less files loaded on the frontend.
-   📋 **Docs**
    -   Documentation is updated
    -   Changelogs are now generated automatically for all major versions. See [changelog](https://studio-lemon.github.io/wp-lemon-docs/changelog)
