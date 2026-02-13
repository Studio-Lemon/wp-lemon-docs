## 4.9.3:

_Release Date - 2 november 2023_

-   ✨ **Enhanced**
    -   PHP - support new simple-page-ordering plugin
    -   Twig - new hooks added for block-wrap and card-wrap
-   🐛 **Bugs Fixed**
    -   PHP - fix cache_cleared function.
    -   TWIG - removed unused icon class for contact-buttons.twig that might cause css issues.

## 4.9.2:

_Release Date - 31 october 2023_

-   ✨ **Enhanced**
    -   PHP - New cache.php controller file added where all cache related functions are stored.
    -   PHP - new filter added to set webp quality
    -   PHP - Cache block template parts in transient
-   🐛 **Bugs Fixed**
    -   JS - Fixed missing import of swiper in the carousel block
-   🗑️ **Removed**
    -   Removed alter_acf_block_scripts filter since a fix was introduced in WordPress 6.1.1

## 4.9.0:

## 4.9.1:

_Release Date - 26 october 2023_

-   ✨ **Enhanced**
    -   PHP/Twig - Rework of contact buttons for less code duplication
    -   PHP - active-archive page is now also set on archive pages that are a translation of the default language is an archive page.
    -   JS - script-injector now also support noscript elements
    -   SCSS - Less utility classes are now loaded by default, this decreases the css file size by ~ 6kb.

## 4.9.0:

_Release Date - 18 october 2023_

-   💡 **Newly added**
    -   PHP - New `taxonomy_post_collection` API function added that returns a collection of posts per taxonomy term. This is now used in the faq-overview block.
    -   TWIG - New helpers.todo macro added
    -   TWIG - blocks that have the section class also get a `.section__inner` class on first descendant div.
-   ✨ **Enhanced**
    -   SCSS - Better cookiebar styling
    -   SCSS - Better image card styling
    -   PHP - mark current archive page as active in the menu when in a secondary language
-   🐛 **Bugs Fixed**
    -   PHP - License check no longer fires on staging environments
    -   JS - Remove console.log from cookiebar

## 4.8.3:

_Release Date - 11 october 2023_

-   💡 **Newly added**
    -   PHP - Add license check in non-bedrock environments
-   ✨ **Enhanced**
    -   PHP - Refactored format_phone_number() function so filters will always be applied whether there is a transient or not and moved opinionated formatting to a new filter wp-lemon/filter/phone-number/result.
    -   PHP - add additional check in process_delete_generated_files to make sure the extension matches.
    -   JS - Changed deprecated window.pageYOffset to window.scrollY
    -   SCSS - Enhanced make-icon mixin to directly set/overwrite an icon, see example in the mixin file.

## 4.8.2:

_Release Date - 29 september 2023_

-   💡 **Newly added**
    -   PHP - New html_attributes function added which is still a work in progress.
    -   SCSS - Added a new overwrite-icon function to overwrite the icon in the icon library.
    -   Twig - New filters/actions added in Cookiebar to add your own content more easily.
-   ✨ **Enhanced**
    -   PHP - Moved new archive code introduced in 4.8.0 to new router folder.
    -   PHP - Refactored the way get_post_types() is called for getting the archive pages. This query is now only run once.
    -   PHP - Only add rewrite rules to team post type if the post type has a detail page activated.
    -   JS - Activated mousewheel/touchpad scroll for Carousel blocks.
-   🐛 **Bugs Fixed**
    -   JS - Fixed a bug in hidePagination function were it would throw an error when no pagination was found.
    -   PHP - Fixed a bug where phone formatting would be cached too aggressively
    -   SCSS - Fixed a bug where ACF blocks in the backend would render as grid elements because classes get applied to two elements.

## 4.8.1:

_Release Date - 18 september 2023_

-   ✨ **Enhanced**
    -   JS - Add a hidePagination function to hide the pagination blocks on page render.
    -   PHP - Linted PHP files

## 4.8.0:

_Release Date - 14 september 2023_

-   💡 **Newly added**
    -   Added a archive.php and archive.twig file to the theme.
    -   Added a pagination.twig partial for pagination.
    -   Added a way to allow page navigation on archive blocks. So you can have example.com/my-custom-archive-page/page/2/
-   ✨ **Enhanced**
    -   Updated icon for jobs post type
    -   updated example post type icon
    -
-   🐛 **Bugs Fixed**
    -   Fixed an issue where password-protected.php would not work properly on multi language sites in the non-primary language.
    -   Fixed a bug where you could not disable the default wp-lemon fields for the job post type by using wp-lemon/filter/model/acf-fields/job filter

## 4.7.2:

_Release Date - 31 august 2023_

-   ✨ **Enhanced**
    -   Refactor of the card-grid block which results in less inline css.
    -   You can now transform a block or multiple blocks into a container block.
-   🐛 **Bugs Fixed**
    -   Order of columns in single-person.twig is now correct again on mobile.

## 4.7.1:

_Release Date - 29 august 2023_

-   🐛 **Bugs Fixed**
    -   Fixed a php notice in the editor related to alter_acf_block_scripts()

## 4.7.0:

_Release Date - 28 august 2023_

-   ⛏️ **Breaking**
    -   Please update Basebuilder to `^4.0.6` in your package.json file.
    -   Please update `"apiVersion": 2` to `"apiVersion": 3` in all your block.json files to use the new editor rendering mode.
-   💡 **Newly added**
    -   Updated compatibility with WordPress 6.3
    -   Basebuilder now generates a palette.json file separately of the theme.json which gets merged by `WP_Lemon\Controllers\Theme\theme_json_merge_palette_json` this way its easier to make changes to your theme.json file without exiting watch mode.
-   🐛 **Bugs Fixed**
    -   Fixed a bug were oembeds weren't rendered in `block_template_part()`.
    -   Fixed a bug where the analytics ajax call would render the wrong codes for the body call.

## 4.6.0:

_Release Date - 25 july 2023_

-   💡 **Newly added**
    -   Next filter wp-lemon/filter/core-blocks-to-remove added to remove additional core blocks.
    -   New internal Site health class added with a first test.
-   ✨ **Enhanced**
    -   Added loading parameters to picture & video macros.
    -   Person card now uses icons for phonenumber and email
    -   Media text blocks now use gap instead of paddings
    -   Rework of wide aligned sections so they behave in a predicable way when scaling your screen.
-   🐛 **Bugs Fixed**
    -   Fixed a bug were ACF oembed fields would return a string, even when there was no value.

## 4.5.1-2:

_Release Date - 18 july 2023_

-   💡 **Newly added**
    -   Added new $button-padding variable
-   🐛 **Bugs Fixed**
    -   Fixed wide aligned blocks when around 1400px wide.
    -   Moved .faq-highlight classes to other partial file
-   ✨ **Enhanced**
    -   Linted PHP files
    -   Enhanced PHP 8.1 compatibility

## 4.5.0:

-   ⛏️ **Breaking**
    -   Css classes for the old faq/faq-item / new accordion/accordion-item are now also changes after the change in 4.0. If you have custom styling for the accordion block, please check/rename your classes.
    -   Swiper is updated to 10.0, please update swiper in your package.json and read the following [Migration guide](https://swiperjs.com/migration-guide-v10#modules-imports) if you have custom swipers
-   🐛 **Bugs Fixed**
    -   Accordion block: Fixed a bug where multiple accordion items could be extended at the same time.
    -   Fluent form filter renamed to be compatible with Fluent Forms 5.0
-   ✨ **Enhanced**
    -   Rework of scss imports to move partials out of settings and into their proper folders. This is a work in progress.
    -   You can now, for example, use `add_filter('wp-lemon/filter/model/acf-fields/person', '__return_false');` to remove all the custom fields from the person post type. This way you can clean fields that are already defined by wp-lemon.
    -   Allow color override of the default close button in the offcanvas element by using `$offcanvas-close-color`

## 4.4.0:

_Release Date - 07 july 2023_

-   💡 **Newly added**
    -   New is_post_type() helper function added that takes a string or array of post type names.
    -   Added additional image_sizes filter inside cards.
    -   Added 4 additional round social icons.
-   🐛 **Bugs Fixed**
    -   Update deprecated function call in woocommerce.php
    -   Backend scss section css fix.
-   ✨ **Enhanced**
    -   Rework of the format_phone_number() function to cache the number results but not the actual output.
    -   Rework of scss icons. The icons are now loaded as a css variable and all the scss variables are added to a map that generated the classes.

## 4.3.4:

_Release Date - 30 june 2023_

-   🐛 **Bugs Fixed**
    -   Scss fixed missing --max-width-default
-   ✨ **Enhanced**
    -   Cookiebar now has a decline button
    -   Social media buttons now have rel="me" instead of rel="nofollow noopener"

## 4.3.3:

_Release Date - 22 june 2023_

-   🐛 **Bugs Fixed**
    -   JS: Fixed archive query not showing proper archive results when filtering inside term.
    -   SCSS: Fixed archive css missing.
    -   Fixed missing bootstrap variables.
-   ✨ **Enhanced**
-   PHP: Better debugging of diagnostics class. This also fixes a rare case where diagnostics wouldn't be send.

## 4.3.2:

_Release Date - 22 june 2023_

-   🐛 **Bugs Fixed**
    -   Fixed JS translation

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
    -   Push consentGiven event to datalayer for tag manager integration.
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
    -   added filter so all acf/oembed fields are wrapped in bootstrap responsive class.
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
