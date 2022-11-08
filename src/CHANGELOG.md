### 3.27.0

_Release Date - 8 november 2022_

-   ⛏️ **Breaking**
    -   Due to bug in Timber 1.22 where Twig is updated to 3.x branch we have this version. Please update your full vendor folder after twig update.
-   ## ✨ **Enhanced**
    -   Removed first large margin before media text block.

### 3.26.1

_Release Date - 7 november 2022_

-   ## ✨ **Enhanced**
    -   Load more button is now unfocussed after successful load.
    -   Some style improvements that leads to less css.
-   🐛 **Bugs Fixed**
    -   Fixed animation being wrong in node-overview block
    -   Fixed incorrect lang domain
    -   Fixed a edge case bug in the editor when removing a specific block.

### 3.26.0

_Release Date - 3 november 2022_

-   ✨ **Enhanced**
    -   Compat fix with WordPress 6.1
    -   using new style.css labels to disable accidential updates when there is a theme with the same name.
-   🐛 **Bugs Fixed**
    -   Fixed a bug where custom sizes for media/text would be overwritten
    -   Added missing rel and target attributes to external links in socials.twig
    -   Temp fix for regression in WordPress 6.1 regarding the navwalker, see https://core.trac.wordpress.org/ticket/5694
    -   Fixed an issue where wide alligned elements inside full containers woulds still be wide alligned.

### 3.25.1 t/m 3.25.5:

_Release Date - 1 november 2022_

-   🐛 **Bugs Fixed**

    -   image card image sizes are now full size.
    -   Navwalker background color is not added anymore when no color is set.
    -   Dropdown active and hover states fixed
    -   Fixed wrong default aria state in faq-item
    -   Fixed a bug where tablet/mobile display would display wrong css.
    -   Fixed a excerpt bug
    -   Fixed regression in custom archives.
    -   Custom orders weren't obeyed in class-generic-ajax-call.php ajax calls.
    -   Some blocks wouldn't properly lazyload in tablet/mobile preview mode.
    -   Fix to map block having a too large margin when not used fully aligned.
    -   Fixed a bug where large amount of posts inside the ajax call would result in weird animations.

-   ✨ **Enhanced**
    -   node latest and node overview can now also query builtin post types.
    -   archive filter now has better styling
    -   improved disabled state of block
    -   archive filters are now more opinionated
    -   Custom order plugin extra css added for better interface in backend
    -   team pages are now searchable when detail page is active.

### 3.25.0:

_Release Date - 23 october 2022_

-   ⛏️ **Breaking**
    -   Please update bulldozer to 2.1.0
-   ✨ **Enhanced**
    -   Added 'combined' to phone number utility. it will output phone number as +31 (6) 12345678
    -   Less html/css for img-container block. This is a total rework, so if you encounter any bugs, let us know
    -   Complete rework of the section (beta) block. The container does not have a .section\_\_inner container anymore and elements inherit the --max-width css variable. If you encounter any bugs, let us know!
    -   Map block now support setting your own ratio via a field. You can make the card 16x9, 4x3 and square. Gets overwritten when fully aligned.
    -   Added instructions if there is a WPML field that has the copy setting.
    -   img card now supports
        -   Background color
        -   vertical alignment

### 3.24.1:

_Release Date - 20 october 2022_

-   🐛 **Bugs Fixed**

    -   Fix dropdowns not working when importing the bootstrap dropdown module
    -   Removed margin underneath last element inside an image card.

-   ✨ **Enhanced**
    -   Filter added for card type
    -   Swiper pagination color is now a scss var

### 3.24.0:

_Release Date - 17 october 2022_

-   💡 **Newly added**
    -   New block image-card added that can be used inside the card grid.
-   ✨ **Enhanced**
    -   Bumped PHP version to 8.0.2 minimum
    -   Further enhance search bar experience

### 3.23.3:

_Release Date - 14 october 2022_

-   ✨ **Enhanced**
    -   Larger pagination buttons for swiper
    -   more css vars introduced
    -   Enhanced search page display
    -   Enhanced search bar experience
        -   Auto focussing when opening the search bar
        -   Exit search bar when clicking outside the bar or search results
        -   Exit search bar when pressing escape
-   🐛 **Bugs Fixed**
    -   Removed default letter spacing in navigation items
    -   Fixed a bug where max widths couldn't be overwritten due to a specificity issue in the css.
    -   Possible fix for issue where too large images would crash the server on resizing or moving to webp
    -   Fixed an issue where lemon_excerpt() would return too little text when the content was not that long.
    -   Fixed a bug when searching for content and a password protected page would come up the password template would be loaded.
    -   Removed default order of team post type introduced in 3.23.0, this caused custom orders to not work.
-   🗑️ **Removed**

    -   Removed small cols and no-ml styles from core/columns

-   🌐 **Updated Dutch translation**

### 3.23.2:

_Release Date - 12 october 2022_

-   📖 **Documented new filters**
-   🐛 **Bugs Fixed**

    -   Fix animation bug in archives where too many items would lead to weird fade in animations.
    -   Fixed a bug where small excerpts would not be shown completely inside cards.
    -   Fixed a bug where a person card would always show a link to the detail page, even if the detail page feature was not activated.

### 3.23.1:

_Release Date - 30 september 2022_

-   💡 **Newly added**
    -   Added hook for overwriting card classes
-   🐛 **Bugs Fixed**

    -   Already activated licenses on websites can now be reactivated.
    -   Full height sections in backend are properly displayed

-   ✨ **Enhanced**
    -   Font sizes are not overwritten in footer by force anymore
    -   Add body class when search is active
    -   Its now easier to overwrite css of the footer

### 3.23.0:

_Release Date - 30 september 2022_

-   💡 **Newly added**
    -   Added hooks file for actions and filters
-   🐛 **Bugs Fixed**
    -   Removed console logs.
    -   Better error handling for WP_Lemon\Controllers\format_phone_number() function.
-   ✨ **Enhanced**
    -   More css var usage
    -   WP_Lemon\Controllers\socials() is updated to be a named array.
    -   WP_Lemon\Controllers\log_message() now writes the time in the timezone selected from the site.
-   🗑️ **Removed**
    -   Cleaned up block patterns

### 3.22.3:

_Release Date - 21 september 2022_

-   💡 **Newly added**
    -   New customizer field added for google tag manager.
    -   new wp-lemon/filter/header/logo filter added
-   ✨ **Enhanced**
    -   Re-ordered customizer tabs and fields.
    -   Shorter default css navigation on links.
    -   added template uri to pb_site variable.
    -   Rework of get_attached_file() function
    -   Updated iconfont with nicer icons.
-   🐛 **Bugs Fixed**
    -   Fixed button hover color.
    -   Fixed menu issue #170

### 3.22.[1-2]:

_Release Date - 12 september 2022_

-   🐛 **Bugs Fixed**
    -   Fixed phone number default region
    -   Fixed a bug where section paddings would not be applied to latest section in .entry
    -   Fixed social icons on person card missing
    -   Fixed a not correctly closed heading tag inside the twig marco elements.twig

### 3.22.0:

_Release Date - 9 september 2022_

-   💡 **Newly added**
    -   New filter added to change share buttons and social buttons.
    -   New filters/actions added in archive-loop.twig to change the load more text and add items before/after the loop.
    -   Added archive page of current singular page to the navigation context. (nav.back)
-   🐛 **Bugs Fixed**
    -   Fixed a bug where full/wide sections did not have a margin.
    -   Changed the person card.
    -   Fixed button background color scss variable not working.
-   ✨ **Enhanced**
    -   Better feedback when license server fails.
    -   Added anchor link support for sections
-   📦 **updated packages**

### 3.21.2:

_Release Date - 9 august 2022_

-   🐛 **Bugs Fixed**
    -   Fixed phonenumber being incorrectly formatted when wpml is not active.

### 3.21.1:

_Release Date - 4 august 2022_

-   💡 **Newly added**
    -   New full height option in container
-   🐛 **Bugs Fixed**
    -   Fixed whatsapp button being shown when only call button is set

### 3.21.0:

_Release Date - 3 august 2022_

-   ⚠️ **Please add the following to your child theme**
    -   `resources/assets/styles/app.scss --> add new rule before @import "01-settings";` and add `@use "~parentThemeStyles/02-tools/functions" as *;`
    -   -   `resources/assets/styles/editor.scss --> add new rule before @import "01-settings/variables";` and add `@use "~parentThemeStyles/02-tools/functions" as *;`
-   🐛 **Bugs Fixed**
    -   Node overview block, fixed undefined fixes on rule 263 and 264
    -   class-site.php, fixed undefined fixes
    -   Fixed a bug where a a full aligned block after a full aligned section block with a background would have a margin-top
    -   Fixed alignment in entry-header.twig
    -   Archive load more buttons are not showing up anymore if there are no more items.
-   ✨ **Enhanced**
    -   Add ability to easily overwrite color for FAQ item buttons.
    -   New filters added in entry-footer.twig and single.twig

### 3.20.2:

_Release Date - 1 august 2022_

-   💡 **Newly added**
    -   New get_contact_buttons() method that will return an array to build the contact buttons displayed on the bottom right of the screen when activated. This array can be extended by overwriting this method.
-   🐛 **Bugs Fixed**
    -   Backend notices in blocks are now visible again when a background image is added to a block.
    -   Fixed a bug where matrix displayed blocks would get css that will get inherited by child blocks.
    -
-   ✨ **Enhanced**
    -   card padding classes for pictures are now css vars and added filter for picture classes.
    -   remove lemon blocks from being activated by default.

### 3.20.1:

_Release Date - 27 july 2022_

-   🐛 **Bugs Fixed**
    -   Fixed a bug where the current menuitem wouldn't have an active state.
    -   Fixed a bug where heading fontsizes in the backend were too small
    -   Archive block improvements.

### 3.20.0:

_Release Date - 22 july 2022_

-   ⛏️ **Breaking**
    -   Update bootstrap to 5.2
    -   if you are using a custom archive with loadmore function, please rework your block. see node-overview.php block for reference.
        -   Echo urban design controleren
        -   zalm, vaantje, gouda petanque, chilibra, controleren
        -   nederhoff, geen node-archive.twig gebruiken, want we gebruiken geen filter.
-   💡 **Newly added**
    -   Added translation hints.
-   ✨ **Enhanced**
    -   Rework of archive query mechanism

### 3.19.9:

_Release Date - 19 july 2022_

-   💡 **Newly added**
    -   New experimental css clamp functionality added.

### 3.19.8:

_Release Date - 14 july 2022_

-   💡 **Newly added**
    -   New checklist style for lists.
-   ✨ **Enhanced**
    -   Enhanced icon font usage.
    -   Archives now have a getTerm and setTerm function to get and set the active term on the archive holder element.
    -   Transitioned some scss vars to css vars.
-   🐛 **Bugs Fixed**
    -   Fix bug with term_ids in node-overview
    -   Fixed a bug in menu.js where the --scoll modifier wouldn't go away.
    -   Fixed a bug in the header an footer where containers were wider then content containers.

### 3.19.6 and 3.19.7:

_Release Date - 13 july 2022_

-   ✨ **Enhanced**
    -   Easier backend styling with .ibb class to add really good section differentiation.
    -   better apply_filter name to easier apply filters on blocks. You now can directly copy the filter name from the source code.
    -   FAQ block doesn't have the edit mode anymore.
    -   Added picture.ratio class to automatically set a ratio on images.
-   🐛 **Bugs Fixed**
    -   REST api point now has proper permission callback
    -   Several contrast mode improvements
    -   Fix in node-archive
-   📦 **updated packages**
-   🤖 **linted PHP/CSS/JS**

### 3.19.5:

_Release Date - 12 july 2022_

-   💡 **Newly added**
    -   New log function added
-   ✨ **Enhanced**
    -   Better css for new section block.
-   🐛 **Bugs Fixed**
    -   Fixed an issue where width and height inside picture element were empty.

### 3.19.4:

_Release Date - 8 july 2022_

-   ✨ **Enhanced**
    -   You can now set a initial term on the archive.twig partial.
    -   new post_per_page filter in node-overview block.
-   🐛 **Bugs Fixed**
    -   Map permanent fix.
    -   Fixed "no more items" message in node-archive

_Release Date - 6 july 2022_

-   ✨ **Enhanced**
    -   Better css for new section block.
    -   Improved language switcher code.

### 3.19.2:

_Release Date - 6 july 2022_

-   ✨ **Enhanced**
    -   Better css for new section block.
    -   Added extra information on how to create your flexible card grid inside the editor.
    -   person card improved.
-   🐛 **Bugs Fixed**
    -   css alignment improvements
    -   Fixed map not being 100% height inside the editor.

### 3.19.1:

_Release Date - 4 july 2022_

-   ✨ **Enhanced**
    -   Improved block positioning classes. All blocks are now displayed with max width instead of an combination between width and max width. This is a bit experimental.
    -   Better default map styling due to new section class.
    -   Better css styling for headings.
    -   Cleaned css a bit
-   🐛 **Bugs Fixed**
    -   Map block fix in backend
    -   Fixed an issue where menu items were not active in sub menus when selected.
    -   Fixed a bug where the block edit block would be behind other block element.
    -   Fixed PHP bug when there were no widgets present.
    -   Fixed a JS bug where the menu.js would crash if the collapse element was not present.

### 3.19.0:

_Release Date - 24 june 2022_

-   ⛏️ **Breaking**
    -   Please re-save your customizer fields after updating on the live site. You can do this by changing a value and going back to the old value.
-   💡 **Newly added**
    -   A page can now be the archive for multiple pages.
    -   class-site.php has been extended to add archive pages to the Timber context.
    -   entry-header now directly uses this new context instead of doing a separate database call.
    -   This overall enhances the experience to link back to an archive page from any custom post type.

### 3.18.1:

_Release Date - 21 june 2022_

-   💡 **Newly added**
    -   New icon block added.
    -   New get_svg_image() function to load the contents of an SVG image from the media library.
-   ✨ **Enhanced**
    -   New container block improvements
    -   Three new icons added in iconfont.
    -   Removed unneeded macro imports in blocks.
-   🐛 **Bugs Fixed**
    -   Fixed an issue with columns block.
-   🪦 **deprecated**
    -   Banner block is now marked as deprecated

### 3.18.0:

_Release Date - 17 june 2022_

-   💡 **Newly added**
    -   New container block added. This is still in beta.
-   ✨ **Enhanced**
    -   Only show block ID when one is set via attributes.
-   🐛 **Bugs Fixed**
    -   Removed unneeded normal font size
    -   Fixed license page not loading
    -   Fixed a bug where you could not overwrite blocks in theme.json
    -   Fixed typo in license class all over the codebase.
    -   Fixed an issue where the phone number could not be empty.

### 3.17.3:

_Release Date - 7 june 2022_

-   💡 **Newly added**
    -   New get_contact_information method that creates a single array of all contact information from the customizer.
    -   The contact_icons macro now requires contact as a first parameter that you will pass.
-   ✨ **Enhanced**
    -   PHP linted.
    -   Language switcher is now twig and has a helper function that formats the language switcher. This helps with custom language switcher implementation.
-   🐛 **Bugs Fixed**
    -   Fixed typo in license class all over the codebase.
    -   Fixed an issue where the phone number could not be empty.

### 3.17.2:

_Release Date - 7 june 2022_

-   💡 **Newly added**
    -   show bottom bar filter added in footer.
-   🐛 **Bugs Fixed**
    -   Fix contact bar icon color
    -   Fixed blockloader
    -   body background as css var is now working

### 3.17.1:

_Release Date - 2 june 2022_

-   💡 **Newly added**
    -   Password protected pages are now working
    -   New get_fluent_form function
    -   New block loader so you can filter blocks that are loaded by the parent theme.
-   ✨ **Enhanced**
    -   Added extra class when navbar is on top of the viewport.
    -   Better controls for slide and slider block.
    -   Added a localized phone number option. The site will show an national phonenumber on the default language and an internationized phone number on other languages.
-   🐛 **Bugs Fixed**
    -   Fixed large padding in wp-block-pullquote
    -   Minor css fixes in block columns and slider arrow colors

### 3.17.0:

_Release Date - 25 may 2022_

-   ⛏️ **Breaking**
    -   Please run `composer require giggsey/libphonenumber-for-php` in root and upload your vendor folder!
-   💡 **Newly added**
    -   New site class added for more structured context.
    -   New phone number methods added. This fixes a lot of multilanguage phonenumber issues.
-   ✨ **Enhanced**
    -   Updated default look and feel of hamburger menu
-   🐛 **Bugs Fixed**
    -   Navbar only gets a class when fully on top of the viewport.
    -   Fixed banner display
    -   Banners can now be text center aligned
    -   Proper card footer color
    -   You can now switch to the default font size after change.

### 3.16.2:

_Release Date - 14 may 2022_

-   🐛 **Bugs Fixed**
    -   Excerpt can now be hidden in default cards.
    -   Banner block: Set background opacity on videos now works again
-   💡 **Newly added**
    -   You can now set extra arguments on queries using a filter used in the virtual node-latest and node-overview blocks.

### 3.16.1:

_Release Date - 12 may 2022_

-   🐛 **Bugs Fixed**
    -   fixed domready
    -   top adminbar alignment fix
    -   Padding fix inside icons.

### 3.16.0:

_Release Date - 5 may 2022_

-   💡 **Newly added**
    -   Detail page for persons can now be enabled via the customizer
-   ✨ **Enhanced**
    -   Slider block improvements
    -   Removed deprecated FAQ fields
    -   Less css due to smart selectors
    -   Better icon positioning
    -   Excerpts can now recieve a -1 argument to post all content inside cards.
-   🐛 **Bugs Fixed**
    -   fix for lazyload issue on safari mobile

### 3.15.1 - 3.15.4:

_Release Date - 3 may 2022_

-   ✨ **Enhanced**
    -   Updated workflow dependencies
    -   Updated workflow files

### 3.15.0:

_Release Date - 3 may 2022_

-   ⛏️ **Breaking**
    -   Please update basebuilder to 2.8.0
    -   Please update bulldozer to 1.11.0
-   🐛 **Bugs Fixed**
    -   Proposed fix for lazyload issue on safari mobile
    -   Footer menu items not aligning properly.

### 3.14.0:

_Release Date - 25 april 2022_

-   ✨ **Enhanced**

    -   PHP linting
    -   Filter added to show share buttons, overwrite labels and platforms of sharer.
    -   Css improvements
        -   ⚠️ Overall process of enhancing the default flow of blocks. Please double check your sites on weird margin issues ⚠️
        -   Changed all 30px margins to $vertical-gutter.
        -   logo grid now has same margin on the side as bottom
        -   Eliminated a lot of media queries by using custom properties.
        -   Menu toggler black outline removed on focus
        -   Rework of icons-list.scss for more consistent icons
        -   Table.scss display fix
        -   Media-text block css reworked and reduces total css size by 4kb

-   🐛 **Bugs Fixed**
    -   card grid backend display fix

### 3.13.0:

_Release Date - 15 april 2022_

-   ⛏️ **Breaking**
    -   Please update the version number to 2 in your theme.json in your child theme.
-   ✨ **Enhanced**
    -   font sizes inside searchbar are tweaked
    -   Improvements to other-items.twig
    -   Major overhaul to how blocks display their background colors
    -   Nav items with a background now have a has-background class
    -   Load more archives are more responsive to user input.
    -   Theme.json update to v2 and did some householding.
    -   Several queries in queries.php are now leaner and thus should perform better.
    -   Hide empty categories in node-overview block.
-   🐛 **Bugs Fixed**
    -   post_type_name() would throw notice on some post types.
    -   gallery block logo view with links now display properly
    -   Translation inside search-list.twig is fixed
    -   Load more archives with filters now load the correct next items.

### 3.12.1 - 3.12.2:

_Release Date - 4 april 2022_

-   💡 **Newly added**
    -   REST url added
    -   card-button-color variable added
-   ✨ **Enhanced**
    -   removed image size `small` and upsized `medium_large` to 800
-   🐛 **Bugs Fixed**
    -   A11y
        -   set body class directly on startup in head when in a11y mode to prevent flash when switching pages
        -   Fixed a lot of bugs in contrast mode
    -   wp-gallery block logo variant is working again
    -   Better image size loaded for content-cards
    -   less compression on webp generation

### 3.12.0:

_Release Date - 30 march 2022_

-   ✨ **Enhanced**
    -   slide block now has a proper option for an image. You can now choose between innerblocks and a single image
    -   Continued on contrast mode
    -   header and nav colors are transformed to css vars

### 3.11.4:

_Release Date - 25 march 2022_

-   💡 **Newly added**
    -   Fields of person and job are now filterable.
-   🐛 **Bugs Fixed**
    -   ACF fields at jobs and persons are translated once more
    -   Css grid fix in backend

### 3.11.2:

_Release Date - 25 march 2022_

-   💡 **Newly added**
    -   Added before footer widgets action
-   🐛 **Bugs Fixed**
    -   Card grid backend layout fixed
-   ✨ **Enhanced**
    -   Removed instagram feed block references.
    -   dim ratio moved to global

### 3.11.1:

_Release Date - 22 march 2022_

-   💡 **Newly added**
    -   Archive pages now have an extra body class 'archive-page'
-   🐛 **Bugs Fixed**
    -   Footer widgets css improvements
    -   Card grid backend layout fixed
-   ✨ **Enhanced**
    -   Removed instagram feed block references.
    -   dim ratio moved to global

### 3.11.0:

_Release Date - 21 march 2022_

-   💡 **Newly added**
    -   New logo block for usage in widget areas.
-   ✨ **Enhanced**
    -   Custom blocks added via the new card-grid filter introduced in 3.10.2 are now displayed the same way as regular cards inside the grid.

### 3.10.2:

_Release Date - 222 march 2022_

-   ✨ **Enhanced**
    -   Allowed blocks are now filterable so you can add your extra or your own blocks to wp-lemon blocks.
    -   Two new footer actions added.

### 3.10.0:

_Release Date - 21 march 2022_

-   ⛏️ **Breaking**
    -   Bumped bulldozer to 1.10.
-   💡 **Newly added**
    -   Card grid mode now has a flexible layout mode where you can build the layout of the grid by hand. You can choose from 3 different layouts to start with.
-   ✨ **Enhanced**
    -   Cleanup of setup function.
    -   scss vendor imports no longer prefixed
    -   Better slider JS
    -   Overlaps of media-text are now done purely by css grid instead of after element.
    -   Contrast mode work in progress
-   🐛 **Bugs Fixed**
-   Disable alignment on timeline block.

### 3.9.1:

_Release Date - 15 march 2022_

-   🐛 **Bugs Fixed**
    -   Fixes to child block modifications
    -   Temporary fix for color palette issue, see: https://github.com/Log1x/acf-editor-palette/issues/30

### 3.9.0:

_Release Date - 9 march 2022_

-   ⛏️ **Breaking**
    -   Please update **basedbuilder-config** to 2.6
-   ✨ **Enhanced**
    -   Colors are now inserted into the theme.json file for maximum compat with new WordPress versions.
    -   Timeline positioning fixes.
-   🐛 **Bugs Fixed**
-   Disable alignment on timeline block.

### 3.8.3:

_Release Date - 25 februari 2022_

-   🐛 **Bugs Fixed**
    -   Media text fixes
    -   Timeline fixes

### 3.8.2:

_Release Date - 25 februari 2022_

-   ⛏️ **Breaking**
    -   Bumped bulldozer to 1.9.8
-   ✨ **Enhanced**
    -   Better backend block alignment.
    -   Aria improvements to language switcher and currentpage.
-   🐛 **Bugs Fixed**
    -   Fixed double notices in blocks.
    -   wp-seperator block is now properly displayed.

### 3.8.1:

_Release Date - 24 februari 2022_

-   🐛 **Bugs Fixed**
    -   Block alignment fixes

### 3.8.0:

_Release Date - 24 februari 2022_

-   ⛏️ **Breaking**
    -   Bumped minimal WordPress version to 5.9
    -   Removed the primary sidebar since it is not used in any project.
-   ✨ **Enhanced**
    -   Complete overhaul to the site.php file.
    -   Animate on scroll library is now handles by css custom properties. This decreases the css size by 20kb
    -   Simplified css for several blocks. This also decreased css size.
    -   Cleaned some PHP files
    -   Editor alignment of blocks on smaller screens is now better.
-   🐛 **Bugs Fixed**
    -   Cleaned the Ajax query class.

### 3.7.3:

_Release Date - 21 februari 2022_

-   💡 **Newly added**
    -   Slide block now hase a fade option
-   🐛 **Bugs Fixed**
    -   acf-fluentform class could throw a notice in some cases.

### 3.7.2:

_Release Date - 15 februari 2022_

-   🐛 **Bugs Fixed**
    -   Banner block margin backend fix #133
    -   img-container block not having correct background color.

### 3.7.1:

_Release Date - 14 februari 2022_

-   🐛 **Bugs Fixed**
    -   Css bootstrap5 gutter fix
    -   Link in colored paragraph now inherits color properly
    -   Fixed logo variant of gallery.
    -   Media and text without background color is now shown correctly without padding on mobile.
    -   Block positioning fixes.

### 3.7.0:

_Release Date - 10 februari 2022_

-   ⛏️ **Breaking**
    -   Please double check custom cards in your theme. We added custom footer in the card-wrap.twig that your card will probably extend. Disable the default footer by adding a twig var in your custom card `{% set hide_default_footer = true %}` or remake your custom cards and remove the footer.
-   ✨ **Enhanced**
    -   All cards now share the same footer.
    -   Allow lists inside faq items.
    -   Add default margin underneath img-container blocks.
-   🐛 **Bugs Fixed**
    -   Fixed backend notice not being correct.
    -   Hopefully a permanent bug for the overflowing navbar without setting the navbar to overflow: hidden.

### 3.6.3:

_Release Date - 08 februari 2022_

-   ✨ **Enhanced**
    -   Rework on menu.js and dropdown.js for better compat with custom dropdown elements outside the navbar.
    -   archive.js now is splited into two functions: an ajax call and listereners. This allows to use ajaxcall separately.
-   🐛 **Bugs Fixed**
    -   css headings were not displayed correctly because of an css regression introduces in 3.6.0
    -   Better footer css

### 3.6.2:

_Release Date - 07 februari 2022_

-   ✨ **Enhanced**
    -   content card grid - allow 1 col layouts.
    -   archive - filter is now a overwritable partial.
    -   Footer - don't show navholder div when not needed.
-   🐛 **Bugs Fixed**
    -   backend - fully alligned blocks cannot overflow anymore.

### 3.6.1:

_Release Date - 07 februari 2022_

-   🐛 **Bugs Fixed**
    -   Fixes overflow bug

### 3.6.0:

_Release Date - 06 februari 2022_

-   Please update bulldozer to 1.9.4 by uploading the vendor folder to the server.
-   ✨ **Enhanced**
    -   ⚠️ Enhanced FAQ block with new innerblock, please migrate your FAQ questions to the new innerblocks!
    -   Better editor block alignment
-   🐛 **Bugs Fixed**
    -   Minor css fixes in front- and backend

### 3.5.3:

_Release Date - 03 februari 2022_

-   💡 **Newly added**
    -   New hook `wp-lemon/filter/navwalker/{{item}}/link-attributes` to filter attributes
    -   Menu items that function as an archive page now have a specific class named `.archive-{{posttype}}`
-   ✨ **Enhanced**
    -   Better editor block alignment
-   🐛 **Bugs Fixed**
    -   Minor css fixes in front- and backend

### 3.5.2:

_Release Date - 01 februari 2022_

-   ✨ **Enhanced**
    -   Better editor block alignment
    -   img container block now support text alignment

### 3.5.1:

_Release Date - 01 februari 2022_

-   💡 **Newly added**
    -   New hook `wp-lemon/action/entry/before` and `wp-lemon/action/entry/after` inside single.twig and index.twig
-   ✨ **Enhanced**
    -   Linting & security fixes
    -   Better WordPress 5.9 support
    -   Minor scss impromenets
    -   testimonial support inside sliders

### 3.5.0:

_Release Date - 27 january 2022_

-   💡 **Newly added**
    -   New testimonial block
-   🐛 **Bugs Fixed**
    -   Fixed smoothscroll bug
-   ✨ **Enhanced**
    -   Support responsive embeds.
    -   Tweaked font sizes a bit

### 3.4.0:

_Release Date - 25 january 2022_

-   🐛 **Bugs Fixed**
    -   Several JS bugs fixed.
-   ✨ **Enhanced**
    -   Added margin to first block if not full aligned, this reduces the usage of container blocks. Please check layouts of pages.
    -   better positioning of blocks inside editor
    -   acf boxes are not draggable anymore in backend.
    -   cleanup of files
    -   Woocommerce improvements

### 3.3.2:

_Release Date - 17 january 2022_

-   Please update bulldozer to 1.9.1 by uploading the vendor folder to the server.
-   🐛 **Bugs Fixed**
    -   block classes would be rendered incorrectly.

### 3.3.1:

_Release Date - 17 january 2022_

-   🐛 **Bugs Fixed**
    -   antispambot filter fixed
    -   bug where dropdown menus wouldn't close is fixed
-   ✨ **Enhanced**
    -   Removed no-js function in head
    -   removed overflow from header
    -   faster default fade-in animations
    -   better archive css
    -   some improvements to woocommerce

### 3.3.0:

_Release Date - 11 january 2022_

-   Please update bulldozer to 1.9.0 by uploading the vendor folder to the server.
-   💡 **Newly added**
    -   No more jQuery dependency in wp-lemon. Read: [Javascript](/basics/basic-javascript)
-   🐛 **Bugs Fixed**
    -   Several JS bugs fixed.
    -   bug where dropdown menus wouldn't close is fixed
-   ✨ **Enhanced**
    -   Its now possible to overwrite block attributes inside a block declaration class.
    -   Cleaned deprecated functions
    -   navwalker improvements. Less classes and better markup.
    -   Vanilla js Archive.js

### 3.2.2:

_Release Date - 05 january 2022_

-   💡 **Newly added**
    -   wp-lemon now supports nested sub menus.
-   🐛 **Bugs Fixed**
    -   JS fix in search.js
    -   JS fix in contact-buttons.js
-   ✨ **Enhanced**
    -   share.js is now vanilla js
    -   smoothscroll.js in now vanilla js
    -   Block-slider.js is now vanilla js
    -   A11y.js is now vanilla js
-   📦 **Updated dependencies**

### 3.2.0:

_Release Date - 24 december 2021_

-   💡 **Newly added**
    -   wp-lemon now supports nested sub menus.
-   🐛 **Bugs Fixed**
    -   Margin bottom is now fixed in banner block
    -   Button block now has a proper hover color
-   ✨ **Enhanced**
    -   Navbar toggle now has an aria label
    -   Search.js is now vanilla JS
    -   Contact-buttons is now vanilla js

### 3.1.7:

_Release Date - 23 december 2021_

-   🐛 **Bugs Fixed**
    -   Fixed media and text display in backend.
-   ✨ **Enhanced**
    -   Allow lists inside banner block
    -   Improved navwalker
    -   You are now able to overwrite font sizes inside cards more easily.

### 3.1.6:

_Release Date - 21 december 2021_

-   🐛 **Bugs Fixed**
    -   fluentform acf field now allows for a null value.
-   ✨ **Enhanced**
    -   Skip license check on development.
    -   Add possibility to add a margin underneath a banner block
    -   Allow wide alignment on card grid block
    -   other_items_query now supports taxonomies as well.

### 3.1.5:

_Release Date - 17 december 2021_

-   🐛 **Bugs Fixed**
    -   Fixes a bug where the excerpt would always be set
-   ✨ **Enhanced**
    -   New actions and filters added, please check the docs.

### 3.1.4:

_Release Date - 17 december 2021_

-   ✨ **Enhanced**
    -   Woocommerce improvements.

### 3.1.3:

_Release Date - 15 december 2021_

-   🐛 **Bugs Fixed**
    -   Fixes missing media text bg color
-   ✨ **Enhanced**
    -   minor css var improvements
    -   added date filter in entry header

### 3.1.2:

_Release Date - 13 december 2021_

-   Please update bulldozer to 1.8.2 by uploading the vendor folder to the server.
-   🐛 **Bugs Fixed**
    -   Disable mode switching for sevaral blocks.
    -   Fixes bug where card images would render at incorrect heights in the backend.
    -   Fixes wrong display of card grid with two columns.
-   ✨ **Enhanced**
    -   Card grid now shows horizontal alignment buttons.
    -   Several backend style improvements.
    -   Better checks if acf fields inside blocks are empty.
    -   Some block fields are no longer required.
    -   Better overwriting of styles

### 3.1.1:

_Release Date - 13 december 2021_

-   🐛 **Bugs Fixed**
    -   Fixes sass deprecation.
    -   Updated changelog for new theme.json
-   🌐 **Updated Dutch translation**

### 3.1.0:

_Release Date - 13 december 2021_

-   ⛏️ **Breaking**
    -   Please update bulldozer to 1.8.1 by uploading the vendor folder to the server.
    -   Please create a new file named `theme.json` with the following contents in your child theme.

```json title=theme.json lineNumbers=true
{
    "$schema": "https://schemas.wp.org/trunk/theme.json",
    "version": 1,
    "settings": {
        "border": {
            "customRadius": false
        },
        "spacing": {
            "customPadding": false,
            "customMargin": false
        },
        "layout": {
            "contentSize": "1100px",
            "wideSize": "1400px"
        }
    }
}
```

-   💡 **Newly added**
    -   New Block: Card grid
    -   Filter added: `wp-lemon/filter/card/' ~ card_type ~ '/image-id'`
    -   Filter added: `wp-lemon/filter/entry-header/' ~ post.type ~ '/type'`
    -   Filter added: `wp-lemon/filter/card/' ~ card_type ~ '/image-el'`
    -   Filter added: `wp-lemon/filter/entry-header/' ~ post.type ~ '/picture-el'`
-   ✨ **Enhanced**
    -   Font sizes are now set with css vars.
    -   Smaller css bundle by removing not used styles.
    -   Better icons for block to differentiate between them inside the editor.
    -   Various block context improvements
    -   macro picture now doesn't have any children elements when there is now image set.
    -   Move colors to css vars for several blocks
        -   Node latest
        -   Node overview
        -   Timeline

### 3.0.2:

_Release Date - 7 december 2021_

-   🐛 **Bugs Fixed**
    -   Fixes missing icon in card wrap
    -   Fixes the word "menu" not being translatable.

### 3.0.1:

_Release Date - 6 december 2021_

-   🐛 **Bugs Fixed**
    -   Fixes navbar being sticky top all the time
    -   proposed fix for overflowing navbar due to two transforming element inside each other.

### 3.0.0:

_Release Date - 2 december 2021_

Please read our upgrade guide for a step-by-step plan to upgrade to the newest version: [3.0 upgrade guide](/upgrade-guides/3.0)

-   ⛏️ **Breaking**
    -   Please update your dependencies in package.json to
        `"@popperjs/core": "^2.10.2", "aos": "^3.0.0-beta.6", "bootstrap": "^5.1", "lodash.throttle": "^4.1.1", "swiper": "^7.2", "vanilla-lazyload": "17.5"` and run yarn install
    -   Please update your dev dependencies like so:
        `"devDependencies": { "@wordpress/browserslist-config": "^4.1", "basebuilder-config": "^2.2", "prettier": "^2.4", "prettier-plugin-twig-melody": "^0.4.6", "stylelint": "^14.0" },`
    -   Please check custom bootstrap code against https://getbootstrap.com/docs/5.1/migration/
    -   Please update custom Swipers against https://swiperjs.com/migration-guide
    -   Remove "babel-preset-es2015" from your packages
    -   New naming for filters. Please double check if filters are still working.
    -   Icons classnames are now namespaced. So you can more easily add your own icon font.
-   ✨ **Enhanced**
    -   New offcanvas bootstrap 5 mobile menu
