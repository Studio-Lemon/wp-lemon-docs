## 5.8.1 - 28 February 2024

### 🐛 Bug Fixes

-   Bump version to wp-lemon 5.8.1

### ⚙️ Miscellaneous Tasks

-   _(build)_ Add new version script and move block build script to separate folder
-   Update languages

## 5.8.0 - 27 February 2024

### ⛰️ Features

-   _(block)_ Add pagination option to carousel block
-   Smaller containers will give the smaller width to their children instead to the actual container
-   Add archive-content classes to each .row element for easier styling of archives in one place.
-   New wp-lemon/filter/core-blocks-to-allow filter added to create an allowlist of core blocks to be used in the editor this takes precedence over the wp-lemon/filter/core-blocks-to-remove filter when filled.

### 🐛 Bug Fixes

-   _(css)_ .share-buttons padding to margin for better flow
-   _(css)_ Fix link hover color
-   Add proper quotes around tagmanager
-   Run WP_Lemon_Site::prepare_site_information later in the lifecycle
-   Hide notice for "do not translate field" for fields in non-native languages. This is because block fields cannot be translated in the blockeditor.
-   Hide pagination in editor

## 5.7.1 - 19 February 2024

### 🐛 Bug Fixes

-   _(css)_ Minor css fix for accordion item
-   Fix wrong icon path in icon path filter
-   Fix license page error

## 5.7.0 - ❤️ 14 February 2024

### ⛰️ Features

-   _(php/css)_ [**breaking**] More consistent archive classes in menu:
    current-active-archive renamed to is-archive--active
    archive-{{name}} renamed to is-archive--{{name}}
    additional class is-arhive added

BREAKING CHANGE: classes have been changed, please check your codebase if you rely on these classes and if so, change accordingly.

-   Full integration of acf icon plugin, you can now use get\*svg_icon('icon-name') to get an svg icon from the acf icon plugin. If you have this integration setup yourself, we recommend to remove it and use the new get_svg_icon function and remove the filters starting with `acf_icon`
-   Add Bulldozer package information

### 🐛 Bug Fixes

-   Allow overwrites of body background in editor.scss
-   Better ordering of scss vars
-   Better carousel defaults

### ⚙️ Miscellaneous Tasks

-   Bump required bulldozer version to 4.4.0, please update your bulldozer version
-   Update packages
-   Remove unused import
-   Update the way Timber handles the extension of functions and filters nowwayday
-   Update packages

## 5.6.0 - 09 February 2024

### ⛰️ Features

-   _(js)_ Add new findParentBlock function to find the parent acf block
-   New block TODO added. New block added to track development/content process while the website is still under construction. This block will only be shown in development/staging environments and will be hidden from the block inserter
-   Is_preview twig function added for usage in macros
-   Allow content in widget when menu is active
-   Fully qualify name in add_fields methods in the acf blocks so that IDE's can autocomplete the fields

### 🐛 Bug Fixes

-   _(css)_ Fix ghost button in contrast mode
-   _(twig)_ Fix language switcher dropdown issues
-   Fix text alignment in circle-text block
-   Add lazy to footer logo

### ⚙️ Miscellaneous Tasks

-   Cleanup blocks
-   Update packages
-   Lint files

### ⚡ Enhancements

-   Loading strategy via wp_enqueue_script tags
-   Better logic for checking the password protected template

## 5.5.1 - 25 January 2024

### 🐛 Bug Fixes

-   _(php)_ First check if object is available in archive.js
-   _(php)_ Enhanced adjacent_post_info function

## 5.5.0 - 23 January 2024

### ⛰️ Features

-   [**breaking**] Twitter to X, Thanks Elon.. If you've overwritten the social icons to show in the share or social macros, please change the name to x.
-   _(tracking)_ Able to easily add Tagmananager or Analytics tracking via the theme settings
-   Translations are now managed via wp-i18n-twig

### 🐛 Bug Fixes

-   _(css)_ Theme-button--ghost now inherits correct outline styles
-   _(js)_ Trigger cookiebar event based on consent type
-   _(js)_ Better domReady function
-   _(php)_ Proper check to see if the array is empty or not in the taxonomy_post_collection function
-   Block_id was being inherited by cards that were used in loops. Variable now renamed to card_id
-   Better naming for cookie setting

## 5.4.0 - 16 January 2024

### ⛰️ Features

-   get_attachment_info API function added

### 🐛 Bug Fixes

-   _(js)_ Don't inject analytics script when there is no consent given for analytics.

### ⚙️ Miscellaneous Tasks

-   Update cookiebar.js to use api function trigger() to dispatch cookiebar events.
-   Update packages
-   Update phpcs version
-   Use suppored version of prettier melody

## 5.3.2 - 29 December 2023

### 🐛 Bug Fixes

-   _(twig)_ Fixed missing information in faq-overview.twig
-   _(php)_ Fixed a bug in taxonomy_post_collection and made the query faster
-   _(twig)_ filterable animations for cards as well

### ⚙️ Miscellaneous Tasks

-   Update packages
-   Lint php files

## 5.3.1 - 21 December 2023

### ⛰️ Features

-   _(blocks)_ Add filters to hide all animations at once

### 🐛 Bug Fixes

-   _(php)_ On vanilla wp, only show license notice when noindex is false
-   _(ci)_ Fix Github actions

## 5.3.0 - 18 December 2023

### ⛰️ Features

-   _(blocks)_ Node overview is only allowed on pages
-   _(php)_ When the autoloader is not yet loaded, load in from the site root.
-   _(php)_ Map block now uses the place_id over address
-   _(twig)_ Add additional extendable blocks for a more fluent way to extend custom cards.

### 🐛 Bug Fixes

-   _(css)_ Use proper css class
-   _(twig)_ Remove stray class
-   _(twig)_ Remove extra span tag

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
