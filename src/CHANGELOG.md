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
