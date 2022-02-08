### 3.6.3:

_Release Date - 08 februari 2022_

-   ✨ **Enhanced**
    -   Rework on menu.js and dropdown.js for better compat with custom dropdown elements outside the navbar.
    -   archive.js now is splited into two functions: an ajax call and listereners. This allows to use ajaxcall separately.
-   🐛 **Bugs Fixed**.
    -   css headings were not displayed correctly because of an css regression introduces in 3.6.0
    -   Better footer css

### 3.6.2:

_Release Date - 07 februari 2022_

-   ✨ **Enhanced**
    -   content card grid - allow 1 col layouts.
    -   archive - filter is now a overwritable partial.
    -   Footer - don't show navholder div when not needed.
-   🐛 **Bugs Fixed**.
    -   backend - fully alligned blocks cannot overflow anymore.

### 3.6.1:

_Release Date - 07 februari 2022_

-   🐛 **Bugs Fixed**.
    -   Fixes overflow bug

### 3.6.0:

_Release Date - 06 februari 2022_

-   Please update bulldozer to 1.9.4 by uploading the vendor folder to the server.
-   ✨ **Enhanced**
    -   ⚠️ Enhanced FAQ block with new innerblock, please migrate your FAQ questions to the new innerblocks!
    -   Better editor block alignment
-   🐛 **Bugs Fixed**.
    -   Minor css fixes in front- and backend

### 3.5.3:

_Release Date - 03 februari 2022_

-   💡 **Newly added**
    -   New hook `wp-lemon/filter/navwalker/{{item}}/link-attributes` to filter attributes
    -   Menu items that function as an archive page now have a specific class named `.archive-{{posttype}}`
-   ✨ **Enhanced**
    -   Better editor block alignment
-   🐛 **Bugs Fixed**.
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
-   🐛 **Bugs Fixed**.
    -   Fixed smoothscroll bug
-   ✨ **Enhanced**
    -   Support responsive embeds.
    -   Tweaked font sizes a bit

### 3.4.0:

_Release Date - 25 january 2022_

-   🐛 **Bugs Fixed**.
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
-   🐛 **Bugs Fixed**.
    -   block classes would be rendered incorrectly.

### 3.3.1:

_Release Date - 17 january 2022_

-   🐛 **Bugs Fixed**.
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
-   🐛 **Bugs Fixed**.
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
-   🐛 **Bugs Fixed**.
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
-   🐛 **Bugs Fixed**.
    -   Margin bottom is now fixed in banner block
    -   Button block now has a proper hover color
-   ✨ **Enhanced**
    -   Navbar toggle now has an aria label
    -   Search.js is now vanilla JS
    -   Contact-buttons is now vanilla js

### 3.1.7:

_Release Date - 23 december 2021_

-   🐛 **Bugs Fixed**.
    -   Fixed media and text display in backend.
-   ✨ **Enhanced**
    -   Allow lists inside banner block
    -   Improved navwalker
    -   You are now able to overwrite font sizes inside cards more easily.

### 3.1.6:

_Release Date - 21 december 2021_

-   🐛 **Bugs Fixed**.
    -   fluentform acf field now allows for a null value.
-   ✨ **Enhanced**
    -   Skip licence check on development.
    -   Add possibility to add a margin underneath a banner block
    -   Allow wide alignment on card grid block
    -   other_items_query now supports taxonomies as well.

### 3.1.5:

_Release Date - 17 december 2021_

-   🐛 **Bugs Fixed**.
    -   Fixes a bug where the excerpt would always be set
-   ✨ **Enhanced**
    -   New actions and filters added, please check the docs.

### 3.1.4:

_Release Date - 17 december 2021_

-   ✨ **Enhanced**
    -   Woocommerce improvements.

### 3.1.3:

_Release Date - 15 december 2021_

-   🐛 **Bugs Fixed**.
    -   Fixes missing media text bg color
-   ✨ **Enhanced**
    -   minor css var improvements
    -   added date filter in entry header

### 3.1.2:

_Release Date - 13 december 2021_

-   Please update bulldozer to 1.8.2 by uploading the vendor folder to the server.
-   🐛 **Bugs Fixed**.
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

-   🐛 **Bugs Fixed**.
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

-   🐛 **Bugs Fixed**.
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
