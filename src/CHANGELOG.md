### 2.17.0:

_Release Date - 23 july 2021_

-   ⛏️ **Breaking**
    -   javascript function lazyLoad is now called lazyLoadFunc. If you have custom javascript plugging into this function, please rename acordingly.
    -   Lemon blocks updated to 1.2.2. Please update manually.
-   🐛 **Bugs Fixed**
    -   Fixed: missing padding in media-text
    -   Fixed: block quotes being too small
    -   Fixed: deprecation notice since WordPress 5.8 `block_categories` is now `block_categories_all`
    -   Fixed: banners not lazyloading properly
    -   Fixed: sliders not lazyloading in backend.
    -   Fixed: Timeline dots not connecting.
    -   Proposed fix: Timeline animations stopped abruptly after a large amount of items.
-   ✨ **Enhanced**
    -   Better selector usage for wp-media-text
    -   Set translation setting in timeline block
-   💡 **Newly added**
    -   New block: slide-banner, this replaces the banner in sliders.
    -   Added new $card-picture-padding variable to control image ratio.
    -   Updated color settings for menu items. You can now set the background and text colors.

### 2.16.2:

_Release Date - 22 july 2021_

-   🐛 **Bugs Fixed**
    -   Fixed: Dropdown not closing on click
    -   Fixed: menu animating away on mobile browsers while opening menu
    -   Fixed: Media/text wide aligned didn't had padding on mobile
    -   Fixed: paragraphs in cards always had a margin bottom. Now only the last paragraph has no margin.
-   ✨ **Enhanced**
    -   Copyright message is now placed in a smaller column.
-   💡 **Newly added**
    -   intrinsic image size added for cards.

### 2.16.1:

_Release Date - 20 july 2021_

-   ✨ **Enhanced**
    -   Tweak notice inside node-latest block
-   💡 **Newly added**
    -   Added filter to overwrite node-latest no-items message.

### 2.16.0:

_Release Date - 20 july 2021_

-   ⛏️ **Breaking**
    -   Please double check custom navbar styling on child sites.
-   ✨ **Enhanced**
    -   Added notice on front-end when node-latest block does not contain items.
    -   Rework of the javascript that slides the menu in and out. The timings are now snappier.
-   🌐 **Updated Dutch translation**

### 2.15.4:

_Release Date - 14 july 2021_

-   🐛 **Bugs Fixed**
    -   Load same amount of items in archive query as original query.
-   ✨ **Enhanced**
    -   Tweak font sizes
-   📦 **Updated dependencies**

### 2.15.3:

_Release Date - 14 july 2021_

-   🐛 **Bugs Fixed**
    -   Fixes heading colors not being inherited in timeline cards
    -   wrap timeline items in div so even/uneven works consistently
    -   Timeline date justify fix
-   ✨ **Enhanced**
    -   Simpler language menus
    -   close dropdowns on escape
    -   close dropdowns on click outside dropdown
    -   Restyling of logo gallery style.
-   📦 **Updated dependencies**

### 2.15.2:

_Release Date - 12 july 2021_

-   🐛 **Bugs Fixed**
    -   Fixes not loading child

### 2.15.1:

_Release Date - 12 july 2021_

-   🐛 **Bugs Fixed**
    -   Fixes not loading child

### 2.15.0:

_Release Date - 09 july 2021_

-   ⛏️ **Breaking**
    -   Please add ACF color palette plugin by:
        -   Updating your MU section in the composer.json like so: `"web/app/mu-plugins/{$name}/": [ "type:wordpress-muplugin", "log1x/acf-editor-palette" ],`
        -   And add the plugin as a MU-plugi using `composer require log1x/acf-editor-palette`
        -   Don't forget to upload the mu-plugins folder when deploying.
        -   Update bulldozer as well by upload the vendor folder in your root.
-   💡 **Newly added**
    -   New Timeline and timeline item blocks.
-   ✨ **Enhanced**
    -   Removed backend block overrides from partials and added them in separate file.
    -   Translated block keywords

### 2.14.2:

_Release Date - 30 june 2021_

-   🐛 **Bugs Fixed**
    -   Fixes missing card type class
    -   Add filter for js translation directory, defaults to parent theme.

### 2.14.1:

_Release Date - 30 june 2021_

-   💡 **Newly added**
    -   New filter for excerpt length in cards.
    -   Moved card filters to card-wrap
-   ✨ **Enhanced**
    -   Don't align img-container wide by default.
-   🐛 **Bugs Fixed**
    -   Fix missing paddings inside columns and img-container on some elements.

### 2.14.0:

_Release Date - 29 june 2021_

-   ⛏️ **Breaking**
    -   Renaming of actions
        -   wp-lemon_meta ➜ wp-lemon/action/head/meta
        -   wp-lemon_before ➜ wp-lemon/action/body/before
        -   wp-lemon_before_header ➜ wp-lemon/action/header/before
        -   wp-lemon_after_header ➜ wp-lemon/action/header/after
        -   wp-lemon_before_content ➜ wp-lemon/action/content/before
        -   wp-lemon_after_content ➜ wp-lemon/action/content/after
        -   wp-lemon_before_footer ➜ wp-lemon/action/footer/before
        -   wp-lemon_after_footer_widgets ➜ wp-lemon/action/footer-widgets/after
        -   wp-lemon_after_footer ➜ wp-lemon/action/footer/after
        -   wp-lemon_after ➜ wp-lemon/action/body/after
    -   Rename of filter
        -   wp-lemon/card-icon ➜ wp-lemon/filter/card-icon
        -   wp-lemon/image_sizes ➜ wp-lemon/filter/image_sizes
-   💡 **Newly added**
    -   New filter for filtering copyright message `wp-lemon/filter/copyright-message`
-   🐛 **Bugs Fixed**
    -   if no ga_id context tag is set, don't try to sent event on search.
    -   Better styling for instagram block.
-   ✨ **Enhanced**
    -   Linktree template is now simpler.

### 2.13.1:

_Release Date - 26 june 2021_

-   🐛 **Bugs Fixed**
    -   Media/Text block that was wide aligned had no padding on mobile. This is now fixed.
-   ✨ **Enhanced**
    -   Better mobile styling for repeating blocks.

### 2.13.0:

_Release Date - 23 june 2021_

-   ⛏️ **Breaking**
    -   Better scss styling for media and text block. **Please double check your existing blocks**
-   🐛 **Bugs Fixed**
    -   Removed unused class form img-container block
    -   Better way to tell if block is disabled or not, fixes issue on bit site.
-   💡 **Newly added**
    -   Added support for custom excerpts. We don't ... the sentence if a custom excerpt is written.
    -   Arrow icons in cards are now overwritable by filter.
    -   Added mixin for shevron button.
    -   Added variables for better dropdown styling

### 2.12.2:

_Release Date - 23 june 2021_

-   ✨ **Enhanced**
    -   Better translation default options

### 2.12.1:

_Release Date - 23 june 2021_

-   🐛 **Bugs Fixed**
    -   Fixes css bug where columns would not be 100% width on several screen sizes.
-   ✨ **Enhanced**
    -   Node blocks can now have a background and text color.
    -   new colored block now has some extra styling.
    -   Remove default margin beneath media-text block.
    -   Set image sizes on generic card block.
    -   Added .h1, .h2, etc classes for faster styling.
    -   Added transition to theme-button to target all buttons having this class.
-   💡 **Newly added**
    -   Added filters for image sizes for node blocks and generic card block.

### 2.12.0:

_Release Date - 22 june 2021_

-   ⛏️ **Breaking**
    -   Updated bulldozer to 1.5.3, please update as well.
-   🐛 **Bugs Fixed**
    -   Added wp-image block scss
    -   Block attribute saved with wrong heading level leads to error message in backend.
-   ✨ **Enhanced**
    -   Rework of enqueue names
    -   Better names for innerBlocks
    -   Removed unneeded api call function
    -   Only load block patterns in backend.
-   💡 **Newly added**
    -   New color block added!
    -   Added block style for columns for removing the gap between the columns.
-   🌐 **Updated Dutch translation**

### 2.11.0:

_Release Date - 21 june 2021_

-   🐛 **Bugs Fixed**
    -   Remove invalid field settings from banner
-   ✨ **Enhanced**
    -   acf image container block: add wide alignment.
    -   Removed unused JS
    -   acf slide block: added visual aid in editor.
    -   acf slider block: added ability to toggle autoplay and set delay.
    -   acf node overview block: You can now overwrite the node-latest block by creating node-latest-{{card_type}}.twig in the child theme for custom archive loops.
-   💡 **Newly added**
    -   wp image block: New icon style added.
    -   Add button macro
-   📦 **Updated dependencies & merged dependabot PR's**

### 2.10.0:

_Release Date - 11 june 2021_

-   ⛏️ **Breaking**
    -   Updated bulldozer to 1.52. **Please upload vendor folder.**
    -   Removed 2 block styles from banner block
        -   No margin bottom has been removed
        -   Small banner has been removed.
        -   Default margin underneath block has been removed. This has been done for better styling compat when working with containers for example.
        -   Added the removed margins back on the first heading, paragraph or list elements underneath the banner as a margin-top.
-   ✨ **Enhanced**
    -   Better placements of hook in footer.twig
    -   Better menu styling
-   🐛 **Bugs Fixed**
    -   Fixed some typos in code.
    -   Fixed field group name for person post type
    -   added animation back in archive for the navigation buttons
    -   Fixes bug where multiple dropdowns could be opened at the same time.

### 2.9.2:

_Release Date - 31 may 2021_

-   ✨ **Enhanced**
    -   Update job card with new meta fields.
    -   Added `wp-lemon_after_footer_widgets` action to add context to the footer.
-   🐛 **Bugs Fixed**
    -   Fix missing label bug when post type is no longer present.
    -   Ancestor pages are now shown active in the main menu
    -   Added fallback to post.type when post_type is not actively set in a card.
-   📦 **Updated dependencies & merged dependabot PR's**

### 2.9.1:

_Release Date - 28 may 2021_

-   🐛 **Bugs Fixed**

    -   Missing title on content cards is now fixed.

-   ✨ **Enhanced**

    -   Added custom excerpt function for twig. `lemon_excerpt($post, $characters)`.
    -   Remove title from picture element to prevent floating label.
    -   Converted last fields groups to PHP.
    -   Updated iconfont
    -   Better colors for A11y search bar and menu items

-   💡 **Newly added**
    -   Added new meta fields for jobs & added them to the single-job.twig

### 2.9.0:

_Release Date - 27 may 2021_

-   ⛏️ **Breaking**

    -   Removed blocks that where deprecated in version 2.6
    -   Easier way to define custom archive pages. Please set `'maybe_has_archive_page'` in your custom post types to `true` and remove the get_theme_mod code.

-   🐛 **Bugs Fixed**

    -   Padding is applied on paragraphs inside FAQ blocks once more.
    -   Fix gallery alignment
    -   Fall back to default card in ajax query when there is no specific card present.
    -   Fixed button radius variable
    -   Fixed bug where margin would be applied on whole archive block instead of the filters only.
    -   Font size small is now properly set on back-end.
    -   No arrow is shown in generic content card when no link is present.
    -   Removed relative from .lazyload class
    -   Fix alignment of contact bar in backend.
    -   Removed margin-top from headings inside banners.

-   ✨ **Enhanced**
    -   Complete overhaul on the way we define the taxonomy to filter by on node-overview and node-latest blocks.
    -   You can now select one or multiple terms inside the node-latest block to filter on.
    -   Better alignment for image container block.
    -   Updated messages in node blocks.

### 2.8.1:

_Release Date - 25 may 2021_

-   🐛 **Bugs Fixed**
    -   Fixed wrong field in map block
    -   Fixed regression in wide aligned blocks
    -   removed default margin from archive partial
    -   Added proper notice when no default taxonomy was selected.

### 2.8.0:

_Release Date - 24 may 2021_

-   ⛏️ **Breaking**
    -   `enable_query_block` in post type definitions has been replaces by two new `enable_overview_block` and `enable_latest_block` options. This way you have granular control which blocks you want per posttype. Please update your custom post types on child theme level accordingly.
-   🐛 **Bugs Fixed**
    -   Fluent forms pagination bar now really has the proper color.
    -   maybe_has_archive_page is now false when no customizer page is set.
-   💡 **Newly added**
    -   New latest nodes block added. This will give an overview of the latest items of a specific post type.
    -   node overview block now has a variable taxonomy. This way you can choose taxonomy you want as a filter.
-   ✨ **Enhanced**
    -   Better keywords for blocks
    -   Add dynamic modifier class for node-overview block for easier styling.
-   🌐 **Updated Dutch translation**

### 2.7.2 - 2.7.3:

_Release Date - 22 may 2021_

-   🐛 **Bugs Fixed**
    -   Fluentforms multipage form progress bar now has the primary color of the child theme.
    -   Fixed a minor backend issue where the block inserter would interfere with center and right aligned blocks.
    -   Fixed an issue where images inside media-text blocks weren't full height.
    -   Other minor css fixes.

### 2.7.1:

_Release Date - 21 may 2021_

-   🐛 **Bugs Fixed**
    -   Lemon Blocks - Fixed an issue where no Block appender was added when blocks where already present. Please upload the lemon-blocks plugin manually.
    -   SVGs had a margin in last release. This margin has now been removed for better compatibility with the editor.

### 2.7.0:

_Release Date - 20 may 2021_

-   ⛏️ **Breaking**
    -   Please update BaseBuilder to version 1.4.1 by setting ^1.4.1 in in your package.json and run yarn install.
    -   Set the new scssSettingsFolder in your config.json. For older projects this is still `"scssSettingsFolder": "1_common/",` don't forget to add this snippet to your example config as well for future reference.
-   💡 **Newly added**
    -   Generic content card can now have a background color.
-   ✨ **Enhanced**

    -   node-overview can now toggle excerpts
    -   SCSS folder structure overhaul for both parent and child theme.

-   🐛 **Bugs Fixed**
    -   Fix to font size variable
    -   Sliders work again

### 2.6.3:

_Release Date - 17 may 2021_

-   💡 **Newly added**
    -   Introduced a new function to check whether the correct version of Bulldozer is installed.
    -   Introduced a new post type argument to enable the node-block.
    -   Introduced two new customizer fields for linking to the contact and terms/conditions page.
-   ✨ **Enhanced**

    -   Blocks migrated from json fields to php fields.
        -   Banner block
        -   Deprecation notice in block names in the block inserter as well.

-   🐛 **Bugs Fixed**
    -   FAQ block now aligns the question better.
    -   Fixes duplicate helper function issue in Bulldozer. Duplicated function calls are removed and migrated.
    -   Several typos in documentation fixed.
    -   If querieing an empty category in a Ajax call a proper notification pops up.
    -   Fixed large padding in text-banner variant.

### 2.6.1:

_Release Date - 13 may 2021_

-   ✨ **Enhanced**
    -   First blocks migrated from json fields to php fields.
        -   FAQ block
        -   Generic content block
        -   Image container block
        -   Slider block
        -   Map block
    -   Improvements on cards classes.
-   🐛 **Bugs Fixed**
    -   Fix regression in block context.

### 2.6.0:

_Release Date - 12 may 2021_

-   💡 **Newly added**
    -   New generic post type block added.
    -   Add fallback card if no specific content card is found.
    -   Added notification when Ajax query is empty.
    -   Added a new way to mark blocks as deprecated.
-   🐛 **Bugs Fixed**
    -   Fixes to new ajax class.
-   ⛏️ **Breaking**
    -   Older custom blocks need to add the add_fields() method. See the example block in the parent theme.
    -   _block_ context used inside gutenberg blocks has been renamed to attributes.

### 2.5.0:

_Release Date - 10 may 2021_

-   💡 **Newly added**
    -   New Generic Ajax call class added which can be extended for your specific needs.
-   🐛 **Bugs Fixed**
    -   Fixed smootscroll issue where links wouldn't work if navigated to other page.
    -   Updated example posttype to have proper properties
-   📦 **Updated dependencies**
-   🌐 **Updated Dutch translation**

### 2.4.6:

_Release Date - 3 may 2021_

-   🐛 **Bugs Fixed**
    -   Minor javascript fixes

### 2.4.5:

_Release Date - 25 april 2021_

-   ⛏️ **Breaking**
    -   Moved Site_icons class to Bulldozer. [Please check docs](https://studio-lemon.github.io/wp-lemon-docs/basics/favicons-manifest) on how to update.
-   🐛 **Bugs Fixed**
    -   Fixed a bug where the nav items would be too hight in mobile menu.
    -   Minor archive fixes
-   📦 **Updated dependencies**

### 2.4.4:

_Release Date - 14 april 2021_

-   🐛 **Bugs Fixed**
    -   Added way to skip smoothscroll by adding class
    -   Removed important padding from nav links
    -   removed console.log from function

### 2.4.3:

_Release Date - 12 april 2021_

-   🐛 **Bugs Fixed**
    -   Language switcher shown twice.
    -   Minor bugfixes
-   ✨ **Enhanced**
    -   Code validation & documentation
    -   Own dropdown function for smaller js build.
    -   Sanatize Ajax calls

### 2.4.2:

_Release Date - 23 march 2021_

-   🐛 **Bugs Fixed**
    -   Flex bugs in ie11
    -   fixed bug with undefined localstorage setting.

### 2.4.0:

_Release Date - 23 march 2021_

-   ✨ **Enhanced**
    -   Using rem values for font sizes instead of px
    -   Removed site icon field from customizer
    -   Updated iconfont
-   💡 **Newly added**
    -   A11y
        -   Skiplinks
        -   Contrastmode
        -   Reduced motion stylesheet
        -   Larger font size toggle
    -   Slide block
    -   Add arrow button variant

### 2.3.1 - 2.3.3:

_Release Date - 17 march 2021_

-   🐛 **Bugs Fixed**
    -   Fixed a few w3.org errors and warnings
    -   Fix ie11 bug
    -   Add padding to full alligned media-text blocks back

### 2.3.0:

_Release Date - 16 march 2021_

-   💡 **Newly added**
    -   Added a new way to add favicons and generate a manifest. See [updated docs](https://studio-lemon.github.io/wp-lemon-docs/basics/favicons-manifest)
-   🐛 **Bugs Fixed**
    -   The curl call to get the latest version of the theme is now updated.
    -   Better alignment of wide media-text blocks
    -   Better font scaling.

### 2.2.4:

_Release Date - 10 march 2021_

-   ✨ **Enhanced**
    -   You are now able to overwrite the card title
    -   You can now completely disable a picture inside a card.
    -   Better latest items query
    -   Archive id is now overwriteable in archive-loop.twig
    -   Enhanced ajax archive

### 2.2.3:

_Release Date - 08 march 2021_

-   ✨ **Enhanced**
    -   better image sizes compat for picture macro.

### 2.2.2:

_Release Date - 02 march 2021_

-   🐛 **Bugs Fixed**
    -   fix e-mail icon not showing up in contact bar block
    -   Remove unused customizer fields.
    -   Fix archive query bug when using categories.
    -   Fall back to default bootstrap navwalker.
    -   Sevaral html fixes for ie11
    -   Proper image sizes now gets loaded in crd-wrap.twig
    -   Customizer analytics fix.

### 2.2.1:

_Release Date - 02 march 2021_

-   🐛 **Bugs Fixed**
    -   Fix customizer loading

### 2.2.0:

_Release Date - 02 march 2021_

-   💡 **Newly added**
    -   Added hooks in the templates for theme developers to hook into.
    -   404 pages are now manageable via the customizer
    -   You can now set custom archive pages via the customizer.
    -   Custom archive pages are now active in the menu when on a single item of that archive page.
    -   Linktree alternative. See the linktree page template.
    -   Added back navigation in single posts.
-   ✨ **Enhanced**

    -   Single.twig improvements to queries.
    -   Complete rework of the customizer. You can now **uninstall** kirki plugin.

-   🐛 **Bugs Fixed**
    -   Fixed alignment in media/text block
    -   Widgets now have the same fontsize as their parents.
    -   Fixed issue where footer and header nav would show up when no nav was set on that location.
    -   Fixed a bug where the generic card would not have a valid link.
    -   Fixed a bug that prevented custom font sizes to show up in the generic card.
-   🌐 **Updated Dutch translation**

### 2.1.3:

_Release Date - 25 february 2021_

-   ✨ **Enhanced**

    -   Bump dependencies
    -   Better contact-bar styling and backend features
    -   New way icons are added to the theme.
    -   Map block now scales better
    -   Styled native pullquote block
    -   Styled native blockquote block
    -   Better person card styling
    -   Rework of customizer options
    -   Added 404 page settings in customizer

-   🐛 **Bugs Fixed**
    -   lazyload fix for iframes
    -   Added margin underneath content header

### 2.1.2:

_Release Date - 23 february 2021_

-   🐛 **Bugs Fixed**
    -   Fixed contact bar showing notification when there was no need.
    -   Updated block pattern for generic content card and removed button from block template.

### 2.1.1:

_Release Date - 22 february 2021_

-   ✨ **Enhanced**

    -   Theme font size support is now in REM.
    -   Updated theme screenshot

-   🐛 **Bugs Fixed**
    -   Text in footer now has a consistent line height.
    -   Fixed rare case where webp filter would prefix image urls with home path.
-   🌐 **Updated Dutch translation**

### 2.1.0:

_Release Date - 20 february 2021_

-   💡 **Newly added**
    -   Added: First version of licence system. The system doesn't take action yet when no licence is present. This will come in later versions.
    -   Added: Block style php file in `lib/models/register-block-styles.php` where native block styles are registered.
    -   Added: `font-weight: $base-font-weight;` variable to set the default font weight in your child-theme
    -   Updated default favicons and logo for wp-lemon
    -   Added: two new block patterns.
-   ✨ **Enhanced**

    -   Better variables file in both parent and child themes

-   🐛 **Bugs Fixed**
    -   Removed unused css partials.
    -   Removed rem calculations so 2rem would be 20px. This caused issues in the backend.
    -   When changes are made in the customizer they will show up instantly instead after page load.
-   🌐 **Updated Dutch translation**

### 2.0.11:

_Release Date - 17 february 2021_

-   🐛 **Bugs Fixed**
    -   Fixed card link and title on regular posttype grids.
    -   Updated singular name of news.

### 2.0.10:

_Release Date - 16 february 2021_

-   ✨ **Enhanced**
    -   Added 3rem padding above fluentform blocks for better content low
    -   card-wrap.twig now has a new way to add classes. Use the variable (array) extra_card_classes to add more classes to the block
    -   Updated soon to be deprecated Timer method
-   🐛 **Bugs Fixed**
    -   Removed extra padding when adding a container inside a container
    -   Text in editor now renders 100%
    -   img-container block now displays proper background color in editor
    -   Removed double padding inside image container block
    -   Block appender inside container block now aligns better
    -   Background color on banner block now shows again
-   💡 **Newly added**
    -   Added: Generic content card
    -   Ability to define block patterns in parent theme
    -   First two block patterns added
        -   Container with heading, text and form
        -   3 Columns with the new generic cards inside them
    -   Added: ability to add a video background to the banner block
-   🌐 **Updated Dutch translation**

### 2.0.9:

_Release Date - 15 february 2021_

-   ✨ **Enhanced**
    -   better package.json defaults
    -   Banner now has a larger min-height
    -   $fancy-list-mb has now a more sane default value
    -   Removed bootstrap dropdown js to remove popper.js from bundle
    -   Added noreferer to external link in footer
    -   Better \_example files for compat with upcoming block creation tool
-   🐛 **Bugs Fixed**
    -   footer widgets are now always full width
    -   Version is now false in the enqueue hooks
    -   Fixed invalid color in head.twig
    -   Fixed favicon path containing two slashes
    -   Fixed paths to favicons in site.webmanifest
    -   Activate lemon-blocks on activation of theme
-   💡 **Newly added**
    -   Added bundle analyzer to get a grid on bundle sizes

### 2.0.8:

-   Workflow fix: fixed deploypath to remote server

### 2.0.7:

-   update: bump npm dependencies
-   Fix: removed footer role from footer
-   Fix: added do action('get_header') for compat with SEO plugin rankmath.

### 2.0.6:

-   update: Dutch translations
-   Added: composer.json file for automated updating via composer.

### 2.0.5:

-   New: theme color used in browser bar in chrome can now be set via $context['theme_color'];

### 2.0.4:

-   update: better style.css for theme
-   Added: gradient support

### 2.0.1 - 2.0.3:

-   Setting up github workflow

### 2.0.0:

-   Initial commit
