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
