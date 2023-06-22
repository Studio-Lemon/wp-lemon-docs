## 4.3.1:

_Release Date - 22 june 2023_

-   🐛 **Bugs Fixed**
    -   Fixed archive query not showing a load more button
    -   Fixed a bug where block twig files would not load on Windows (by upgrading to Bulldozer 3.7.1)

## 4.3.0:

_Release Date - 20 june 2023_

-   ✨ **Enhanced**
    -   Enhanced special pages with id, url, link and title.
    -   Added filter to filter the twig template array on single templates.
-   🐛 **Bugs Fixed**
    -   Fixed node overview and node archive blocks.
    -   Fixed unregister bug in backend.
    -   Fixed a bug where small font sizes where not overwritten properly.

## 4.2.0:

_Release Date - 15 june 2023_

-   ⛏️ **Breaking**

    -   Please update bulldozer to 3.7.0

-   💡 **Newly added**
    -   Added statistics script setting in customizer to add scripts that do not need consent.
    -   Push consentGiven event to datalayer for tag manager intergration.
    -   Added datalayer search tracking when properly setup.
-   ✨ **Enhanced**
    -   Reworked cookiebar messages
    -   Cookiebar now defaults set analytics tracking to true, this can be disabled by the end-user.
-   🐛 **Bugs Fixed**
-   Added two more fixes for Bootstrap 5.3 release.

## 4.1.1:

_Release Date - 07 june 2023_

-   🐛 **Bugs Fixed**
    -   Fix deprecated notice in single.php
    -   Fixed translation bug

## 4.1.0:

_Release Date - 06 june 2023_

-   💡 **Newly added**
    -   added filter so all acf/oembed fields are wrapped in boostrap responsive class.
    -   Updated to Bootstrap 5.3, please update the dependency in your child theme as well.
    -   Added filter to modify 'skip links'.
-   🪦 **Deprecated**
    -   WP_Lemon\Controllers\socials(), use WP_Lemon\API\get_socials() instead
    -   WP_Lemon\Controllers\share_context(), use WP_Lemon\API\get_share_platforms() instead
-   ✨ **Enhanced**
    -   Enhanced multiple queries by adding no_found_rows and ignore_sticky_posts to the query.

## 4.0.0:

_Release Date - 29 may 2023_

-   💡 **Newly added**

    -   ACF 6.0 block support.
        -   Blocks are now registered via json files.
        -   wp-lemon core blocks updated to new block register method.
        -   wp-lemon core blocks assets are only loaded when embedded on a page.
        -   Build process updated to build core block assets as well and ship them.
        -   Bulldozer library updated as well to support these new blocks. Introduced a new BlockRendererV2 class.
        -   Example blocks updated as well to reflect the new block structure.
    -   Several filters added and updated

-   ✨ **Enhanced**
    -   PHP script performance improvements result in:
        -   500 less i/o calls for a pageload
        -   10 less SQL queries for a default pageload
        -   3% less memory usage
    -   Reorganized the lib folder.
    -   Class WP_Lemon_Site() updated with
        -   is_post_type() method to easily conditionally add data to global context.
        -   add_site_information() method to set specific context.
        -   get_site_information() to get specific context.
    -   Updated Swiper to 9.x
    -   Enhanced backend rendering of block classes
    -   FAQ block renamed to accordion
-   🐛 **Bugs Fixed**
    -   log_message() function now supports more content types to log.
    -   Fixed unregistering of several wp core blocks.
    -   Fixed display of variable blocks in backend.
    -   Several minor css improvements
-   🗑️ **Removed**
    -   Removed deprecated functions
    -   Removed slide-banner block
    -   Removed banner block
    -   Removed widgets support in favor of block template parts.
