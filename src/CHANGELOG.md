### 2.2.2:

_Release Date - 02 march 2021_

-   ✨ **Enhanced**
    -   better image sizes compat for picture macro.

### 2.2.2:

_Release Date - 02 march 2021_

-   💡 **Newly added**

-   ✨ **Enhanced**

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
