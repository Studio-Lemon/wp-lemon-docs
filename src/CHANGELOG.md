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
    -   Skip licence check on development.
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
