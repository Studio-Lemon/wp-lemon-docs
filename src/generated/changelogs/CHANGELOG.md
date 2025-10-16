## 5.49.0 - 16 October 2025

### ⛰️ Features

- _(macro)_ Add filter for default arguments in picture macro
- _(navbar)_ Add scroll settings filter and update navbar behavior based on scroll values

### 🐛 Bug Fixes

- Replace nth-child with nth-of-type for consistent styling in card and timeline components

### 📚 Documentation

- Add example for phone number filtering in format_phone_number function

### 🎨 Styling

- Add text alignment support for card component
- Add background color variable for image card overlay

## 5.48.1 - 13 October 2025

### ⛰️ Features

- _(Site class)_ Add new is_archive_page method

### 🐛 Bug Fixes

- Update accordion item label default to use translation function

### 📚 Documentation

- Update docs

## 5.48.0 - 10 October 2025

### ⛰️ Features

- _(blocks)_ Add option to open first accordion item
- _(blocks)_ Update block.json files to include blockVersion 3 for all blocks
- Deprecated class-FAQ in favor of feature plugin

### 🐛 Bug Fixes

- Fix footer alignment
- Adjust alignment for centered images in entry blocks
- Update max-width-default calculation to use block-side-gutter-side

### 🚜 Refactor

- _(accordion)_ Complete accordion refactor

### 🎨 Styling

- Lint scss

## 5.47.2 - 06 October 2025

### 🐛 Bug Fixes

- Fix docblocks

## 5.47.1 - 06 October 2025

### ⛰️ Features

- Update get_other_items method to include taxonomy and terms parameters

### 🐛 Bug Fixes

- Fixed a bug where you were not able to click on a link that was inside the editor fields view.
- Make excerpt length filterable again for news cards
- Better editor alignment

### 📚 Documentation

- Update documentation
- Add docblocks to wp-lemon-post class

### ⚙️ Miscellaneous Tasks

- _(js)_ Rename scrollNext to scrollNextSectionListener

## 5.47.0 - 26 September 2025

### ⛰️ Features

- Add multisite support for wp-lemon licence and diagnostics class
- New filter

### 🐛 Bug Fixes

- Update Prettier configuration to remove twigPrintWidth and adjust overrides
- Fix button border regression

### 📚 Documentation

- Add example filters in documentation

### ⚙️ Miscellaneous Tasks

- Add class assignment for opening hours slot div
- Build fix

## 5.46.0 - 17 September 2025

### ⛰️ Features

- Add more variables for ghost buttons
- Add new helper function url_to_website_name

### 🐛 Bug Fixes

- Fix max width regression

### 📚 Documentation

- Update docblocks of helper functions

### ⚙️ Miscellaneous Tasks

- Update packages
- Update rsync deployment switches to exclude additional twig-action.php file
- Add inline-flex utilities

## 5.45.5 - 17 September 2025

### 🐛 Bug Fixes

- Fix archive nav color in dropdown
- Fix media query ordering issue, fixes websites going full width

## 5.45.4 - 15 September 2025

### 🐛 Bug Fixes

- Correct index for CopyWebpackPlugin patterns in webpack config

## 5.45.3 - 15 September 2025

### ⛰️ Features

- Filterable palette.json file

### 🐛 Bug Fixes

- Fixed a bug where a disabled blocks would still output the closing div
- Change heading from h2 to h3 for no content message

### 📚 Documentation

- Fix docblocks

### ⚙️ Miscellaneous Tasks

- Package updates

## 5.45.2 - 10 September 2025

### 🐛 Bug Fixes

- Fix editor in import in parent theme editor.scss stylesheet
- Fix class existence check for Bulldozer

## 5.45.1 - 04 September 2025

### 🐛 Bug Fixes

- Remove add_theme_support for wp-lemon-faq

## 5.45.0 - 03 September 2025

### ⛰️ Features

- Update filter arguments for node-overview block and add load more action filter
- Add post type tag to search result badges for better styling possibilities
- Add support for be media from production new version

### 🐛 Bug Fixes

- Less class lookup calls
- Adjust extra_args handling in Generic_Ajax_Query for improved filter compatibility
- Replace direct property manipulation with set_disabled method in Carousel_Block
- Update class modifier for image presence in ImageCard_Block
- Fix error on licence page
- Better .section class alignment in backend

### 📚 Documentation

- Update filter docs
- Fix code comment formatting in twig-actions.php

## 5.44.3 - 22 August 2025

### ⛰️ Features

- Carousel block, create option to start at the first slide.
- Add support for additional social media platforms

### 🐛 Bug Fixes

- Add documentation for various actions and remove TODO comments

### 📚 Documentation

- Update docs

### ⚙️ Miscellaneous Tasks

- Lint files
- Lint twig files
- Update action

### Language

- Update translations

## 5.44.2 - 21 August 2025

### 📚 Documentation

- Update documentation of helper functions
- Update action docblocks
- Fix docblocks in navwalker

### 🎨 Styling

- Update wp-lemon icon font

### ⚙️ Miscellaneous Tasks

- PHPStan level 8
- Run rector & lint files
- Speed up wp-lemon by disabling some ACF functions

## 5.44.1 - 19 August 2025

### 🐛 Bug Fixes

- Fix focal point check in Image class

### 📚 Documentation

- Add PHP code examples for various filter hooks

## 5.44.0 - 14 August 2025

### ⛰️ Features

- Add reserved keys for site information and enforce validation in context addition
- Move attributes to new methods

### 🐛 Bug Fixes

- Speed up loading of wp-lemon by 10% by better class_exist calls.
- Increase default excerpt length in search result component
- Correct boolean casting for maybe_hide_animation in Section_Block
- Adjust aspect ratio handling for entry header picture
- Contact bar fixes

### 📚 Documentation

- Update generated docs
- Add examples in codebase
- Better docblock
- Change order of actions
- Update documentation for previous_post_info and taxonomy_post_collection functions

### 🎨 Styling

- Adjust width calculation for icons-list items

### ⚙️ Miscellaneous Tasks

- Ignore error
- Bump minimal Bulldozer version
- Update dependencies

## 5.43.1 - 28 July 2025

### 🐛 Bug Fixes

- Correct conditional check for parent block ID in Accordion_Item_Block
- Add missing body background variable to Bootstrap root styles

### 📚 Documentation

- Better docblocks
- Add missing parameter description for picture arguments filter
- Add closing code block to get_post_type_options function documentation
- Add closing code block to documentation for get_attachment_info function
- Add examples for various filters in twig-filters.php
- Add examples in queries and filter docs
- Enhance docs for get_post_type_options function

### 🎨 Styling

- Exclude theme-button from inheriting color in img-container

### ⚙️ Miscellaneous Tasks

- Phpstan
- Linting

## 5.43.0 - 24 July 2025

### ⛰️ Features

- Add font-weight variable for strong text elements
- Add is_special_page method to check for special pages in the site class
- Implement unique ID generation for ACF accordion blocks and update related templates
- Add documentation for action hooks in twig-actions.php

### 🐛 Bug Fixes

- Ensure full width for non-aligned entries in frontend alignment styles
- Add usage examples for card icon and footer filters

### ⚙️ Miscellaneous Tasks

- Add GitHub Action to check for undocumented WordPress hooks

## 5.42.2 - 11 July 2025

### ⛰️ Features

- Add card_type class to archive holder div. This makes it possible to target specific archive divs

### 🐛 Bug Fixes

- Fix core/file rendering
- Disable pointer events on links within acf-block to prevent interaction in the backend
- Wrap pagination include in conditional to prevent rendering when hidden
- Change class selector to figure for wp-block-embed styles

### ⚙️ Miscellaneous Tasks

- Update max-width to use CSS variable for entry header picture holder

## 5.42.1 - 04 July 2025

### 🐛 Bug Fixes

- [**breaking**] Fix function imports after update of sass

    to fix this in your child theme, search replace the following:

    Search for: @use "~parentThemeStyles/02-tools/functions" as \*;
    Replace with: @import "~parentThemeStyles/02-tools/functions";

## 5.42.0 - 03 July 2025

### 🚜 Refactor

- Run cache function also on delete post and make the logic behind cache clearing faster.

### ⚙️ Miscellaneous Tasks

- Update basebuilder to 6.0

## 5.41.1 - 30 June 2025

### 🐛 Bug Fixes

- Update class name check for button block in theme button class function

## 5.41.0 - 30 June 2025

### ⛰️ Features

- Add 'ucfirst' filter to Timber Twig functionality

### 🐛 Bug Fixes

- Correct link reference for archive page in single-person template
- Correct archive page link reference in entry header
- Correct filter hook syntax in Node_Overview_Block
- Remove 'wp-block-button\_\_link' class from theme button
- Add 'author' support to news post type
- Fix Mollie payment in Woocommerce

### ⚙️ Miscellaneous Tasks

- Update block categories from dynamic to overview for consistency

## 5.40.4 - 22 May 2025

### 🐛 Bug Fixes

- Update max-width calculations to use block-side-gutter for consistency

## 5.40.3 - 16 May 2025

### ⛰️ Features

- Add modal styles with background, input, and border radius variables

### 🐛 Bug Fixes

- Remove !important from dropdown background padding for better specificity
- Update max-width calculations to use block-side-gutter-side variable

### 📚 Documentation

- Enhance documentation for get_attachment_info and get_svg_icon functions with Twig examples

## 5.40.2 - 12 May 2025

### 🐛 Bug Fixes

- Update max-width calculation to use block-side-gutter variable

## 5.40.1 - 10 May 2025

### 🐛 Bug Fixes

- Remove admin check from get_archive_page function

### 📚 Documentation

- Document remaining twig filters

### ⚙️ Miscellaneous Tasks

- Cleanup filters and twig files

## 5.40.0 - 09 May 2025

### 🐛 Bug Fixes

- Fixes an issue where the cache clearing process would block the saving speed of a post. This process now runs async.
- Invert condition in get_archive_page to return false for admin context

## 5.39.0 - 09 May 2025

### ⛰️ Features

- Add get_posty_type_options function to retrieve post type options

### 🐛 Bug Fixes

- Correct function name in changelog and update get_archive_page logic
- Correct function name from get_posty_type_options to get_post_type_options
- Update get_archive_page logic to check for singular posts
- Correct button background color hover variable assignment
- Fix query
- Fix docs

### 📚 Documentation

- Add function to overwrite Fluent Forms payment URL

### ⚙️ Miscellaneous Tasks

- Linting

## 5.38.3 - 30 April 2025

### 🐛 Bug Fixes

- Correct JavaScript syntax in search-list.twig. Fixes #299

### 📚 Documentation

- Enhance documentation for phone number and attachment functions
- Improve documentation for filters
- Enhance documentation for get_attachment_info function
- Update filter documentation for clarity and consistency
- Enhance documentation for phone number formatting function

### ⚙️ Miscellaneous Tasks

- Update animation handling in various Twig templates and PHP files for improved consistency
- Update copyright year variable in footer template

## 5.38.2 - 29 April 2025

### ⛰️ Features

- Add filter for logo in footer

### 🐛 Bug Fixes

- Ensure type consistency in apply_filters arguments

### 📚 Documentation

- Document all the things
- Continue documentation
- Make a start with twig filter documentation

### ⚙️ Miscellaneous Tasks

- Exclude lib/api/twig-filters.php from rsync deployments

## 5.38.1 - 23 April 2025

### 🐛 Bug Fixes

- Add padding to body for consistent layout

## 5.38.0 - 23 April 2025

### ⛰️ Features

- Overwrite Fluent Forms email attachments with media attachments from form data
- Add button to view all frequently asked questions in related questions section

### 🐛 Bug Fixes

- Update alignment settings for block styles and adjust theme.json configuration fixes #297

### ⚙️ Miscellaneous Tasks

- Tested to 6.8

## 5.37.0 - 16 April 2025

### ⛰️ Features

- Core/file block now gets theme-button class as well

### 🐛 Bug Fixes

- Fix load just in time translation errors introduced in WordPress 6.8
- Rename focal argument to focalpoint for consistency in card filters
- Update card shadow color to use rgba for better transparency
- Improve focal point check in Image class
- Correct filter namespace for load more text in node overview block
- Correct formatting in changelog replacement step
- Refine comments and improve code readability in multiple files

### 📚 Documentation

- Enhance documentation for get_special_page method with usage details and link
- Update documentation for link attributes filter in Bootstrap_Navwalker
- Improve class documentation for ACF_Field_Fluentforms
- Rewrite hooks for better display in documentation
- Add usage example for ACF field fluentforms

### ⚙️ Miscellaneous Tasks

- Add find and replace step for changelog formatting in workflow
- Update composer dependencies
- Lint files

## 5.36.1 - 09 April 2025

### 🐛 Bug Fixes

- _(acf-field-fluentforms)_ Set default choices to an empty array, this prevents a query on page load
- _(node-overview)_ Add load more and no more items text filters for better localization on a per posttype basis.
- _(styles)_ Add custom root file to make sure the variables that are needed by the bootstrap css are available

### 📚 Documentation

- _(node-overview)_ Add filters for query arguments, load more text, and no more items message for better customization

### ⚙️ Miscellaneous Tasks

- Update dependencies
- _(node-overview)_ Update parameter types in docblock for clarity and consistency

## 5.36.0 - 02 April 2025

### ⛰️ Features

- _(site)_ Add getter method to retrieve special page information, see WP_Lemon_Site::get_special_page()
- _(styles)_ Enhance the way we load in media breakpoints in the global stylesheet

### 🐛 Bug Fixes

- _(carousel)_ Make carousel block easier to edit in the editor, fixes #292
- _(cli)_ Fix build process
- _(editor-styles)_ Add alignment styles for reusable blocks in the editor. Fixes #291
- _(hooks)_ Disable automatic sizes for image tags
- _(image)_ Add check to ensure attachment is an image, this fixes a compat issue with the Simple History plugin
- _(image-card)_ Update styles and descriptions for image overlay card
- _(load-blocks)_ Update deprecated filter for block removal list
- _(navwalker)_ Correct output handling for end of menu level

### 🚜 Refactor

- _(blocks)_ Streamline dynamic block example handling with a mapping array

### 🎨 Styling

- _(styles)_ Comment out bootstrap root import in \_vendor.scss

### ⚙️ Miscellaneous Tasks

- _(node-overview)_ Increase maximum value for node overview block
- Update translations
- Update dependencies in package.json and yarn.lock

## 5.35.0 - 19 March 2025

### ⛰️ Features

- _(navwalker)_ Add current_item property and filters for menu level classes and output. We can use this filter to add mega menu functions for example
- Add additional hooks in node-latest block
- Make full context available in ajax query results

### 🐛 Bug Fixes

- _(carousel)_ Adjust swiper-progress styles for improved layout and consistency
- _(carousel)_ Change swiper progress height to inherit for better responsiveness
- _(content-card)_ Ensure linked_item is an array before accessing its first element
- Wp-lemon/filter/core-blocks-to-allow filter now only filters core/ blocks instead of all registered blocks

## 5.34.3 - 07 March 2025

### 🐛 Bug Fixes

- Correct css variables regarding first and last block margins.

## 5.34.2 - 06 March 2025

### 🐛 Bug Fixes

- _(carousel)_ Refactor swiper initialization to use a configurable object. This fixes a missing scrollbar on mobile
- _(cookiebar)_ If no consent cookie is found, empty local storage object. Also set security_storage to true
- _(excerpt)_ BR tags are now being replaced with spaces. issue lemon_excerpt. Fixes #288
- _(styles)_ Update margin variables for responsive breakpoints
- _(theme)_ Add outline variation for button with ghost text color
- _(timber)_ Reorder use statements and adjust formatting for consistency

## 5.34.1 - 25 February 2025

### 🐛 Bug Fixes

- _(blocks)_ Rename image card to overlay card and update translations
- _(icons)_ Fix e-mail icon
- _(translations)_ Update Dutch language file

## 5.34.0 - 20 February 2025

### ⛰️ Features

- _(image)_ Add custom Image class to extend TimberImage functionality
- _(package)_ Enhance pre-release script to include documentation generation
- _(post)_ Extend Timber classes to use custom LemonPost and Image classes

### 🐛 Bug Fixes

- _(ajax)_ Update parent property type from string to mixed
- _(card)_ Update email icon to use wp-lemon-icon-logo-e-mail
- _(docs)_ Clean up docblocks and fix phpcs issues
- _(media-text)_ Exclude .section from margin-top spacing adjustment
- _(setup)_ Update return type in add_wp_lemon_post_classes function docblock

### 🚜 Refactor

- _(image)_ Rename focal method to focalpoint and update references

### 📚 Documentation

- _(filters)_ Add example usage for navwalker link attributes filter

### ⚙️ Miscellaneous Tasks

- _(package)_ Update basebuilder-config to version 5.1
- Lint twig files

## 5.33.0 - 14 February 2025

### ⛰️ Features

- _(blocks)_ Block examples added in the editor for most wp-lemon blocks.
- _(buttons)_ Add bottom margin variable for button spacing
- _(navwalker)_ Add filter for link attributes based on menu item ID
- _(timber-extend)_ Enhance webp_src_set function to be compatible with be-media-from-production and improve width handling

### 🐛 Bug Fixes

- _(entry-header)_ Ensure picture holder is only rendered when image_id is present
- _(head)_ Ensure gtag function is defined before usage to prevent errors
- _(wp-column)_ Set gap to 0 for no-margin columns on small screens, since margins are now gap based

### 📚 Documentation

- _(navwalker)_ Add documentation for the new filter in the navwalker

### Remove

- Remove unfinished html_attributes function to clean up code

## 5.32.0 - 24 January 2025

### ⛰️ Features

- _(blocks/cards)_ Add parent to context, this is the invoker that called the card in question. We can use this context to extend/change cards based on the location its called form, props to Mees.
- Add actions to card-wrap to extend cards based on their context, props to Mees.

### 🚜 Refactor

- _(ajax-query)_ Add parent parameter to ajax query

## 5.31.0 - 20 January 2025

### ⛰️ Features

- _(media)_ Enhance picture macro to include focal point handling and improve argument structure

### 🐛 Bug Fixes

- _(cards)_ Update holder_classes to use an array for improved flexibility
- _(diagnostics)_ Change send_diagnostics method to static and directly run first diagnostics run after activation
- _(logo)_ Ensure keys are retrieved safely from logo information
- _(media)_ Correct object-position style in picture macro and set default image size
- _(opening-hours)_ Wrap day label in a span for improved styling
- _(post)_ Update get_archive_link method to return the archive link and mark it as deprecated
- _(search-result)_ Change date container from div to small for semantic improvement
- _(site)_ Replace exception throw with error trigger in get_site_information method

### 🚜 Refactor

- Update method signatures and improve error handling in site class

### ⚙️ Miscellaneous Tasks

- _(style)_ Update gap in share buttons list to use CSS variable for improved responsiveness
- Lint files

## 5.30.0 - 17 December 2024

### ⛰️ Features

- Enhance get_archive_page function with WPML support and improved documentation

### 🚜 Refactor

- Deprecate get_archive_link method in favor of get_archive_page method in LemonPost class

### 📚 Documentation

- Update return type documentation for get_archive_page method

## 5.29.2 - 13 December 2024

### 🐛 Bug Fixes

- Unregister cron job upon license deactivation
- Ensure sizes are sorted only if present in media macro

## 5.29.1 - 13 December 2024

### 🐛 Bug Fixes

- Always use largest size
- Adjust padding for section container in contact CTA styles
- Add aria-label for search button in FAQ highlights

## 5.29.0 - 10 December 2024

### ⛰️ Features

- Support other logo variants then only header and footer, all logos added in the child-site-class will be available in this block.
- Add lazy loading attribute to YouTube iframes in content
- New prettier twig plugin without security issues + linting

### 🐛 Bug Fixes

- Fixed a lot of small css bugs in the editor to improve the editing experience
- Update ACF SVG Icon Picker handling and add backend notification for version requirement
- Escape attributes in Select2 initialization for ACF fields
- Correct parameter formatting in lazy loading function documentation
- Update method documentation formatting in LemonPost and LemonSite references

### ⚙️ Miscellaneous Tasks

- log_message() function now can output a start and end message to easier debug long running processes
- Update dependencies in yarn.lock for Babel and Prettier packages
- Add new documentation command to generate all references in one go

## 5.28.0 - 02 December 2024

### ⛰️ Features

- Update custom post type labels and arguments for better localization and functionality
- Add support for special log messages in log_message function
- Move wp-lemon/action/body/after action to just before the body end tag in app.twig

### 🐛 Bug Fixes

- Fix todo block
- Normalize version numbers in backend page

### ⚙️ Miscellaneous Tasks

- Add additional variables to hooks in block-wrap.twig
- Minor tweaks to icon font helpers
- Update arrow icons in icon font
- Update packages

## 5.27.0 - 22 November 2024

### ⛰️ Features

- Add support for search/ui setting in Gravity Forms & Fluent Forms Custom Fields

### 🐛 Bug Fixes

- _(blocks)_ Load larger images to prevent low quality images in node-latest and node-overview blocks
- _(css)_ Fix in css view of media-text block
- Phpstan fixes

### ⚙️ Miscellaneous Tasks

- Add stubs

## 5.26.2 - 13 November 2024

### 🐛 Bug Fixes

- Fix label of pricing card field
- Fix social icons class

### ⚙️ Miscellaneous Tasks

- _(css)_ Some css improvements
- Iupdate translations

## 5.26.1 - 11 November 2024

### ⛰️ Features

- Allow compat with ACF icon picker 4.0

### 🐛 Bug Fixes

- Fix excerpt length

### ⚙️ Miscellaneous Tasks

- Add variables to hooks

## 5.26.0 - 07 November 2024

### ⛰️ Features

- Pass whole timber object to wp-lemon/filter/single/templates filter
- Introduce new actions in block-wrap.twig to make it easier to extend blocks.

### 🐛 Bug Fixes

- Change live-search-results results key to posts to be consistent with the search.php file

### 🚜 Refactor

- [**breaking**] Deprecate get_share_platforms in favor of get_shares to prevent mixing up functionality. When using wp-lemon/filter/share-context or wp-lemon/filter/socials-context its no longer recommended to change the icons via the 'icon' key but by setting only the class via 'icon_class'.
- [**breaking**] Move button macro from helpers to elements, search for '.button(' in your codebase and add a import path called '{% import 'macros/elements.twig' as elements %}' to the top of the file. and change the prefix of .button to elements.button

### ⚙️ Miscellaneous Tasks

- _(css)_ Hide duplicate button from WPML inside the editor
- Lint files
- Cleanup unneeded extra query lookups when already provided by Timber
- Update packages
- Hide additional blocks from inserter for a more understandable content edit experience

## 5.25.0 - 24 October 2024

### ⛰️ Features

- Add gravity forms select field to ACF

### 🐛 Bug Fixes

- _(css)_ Fix job lists going horizontally instead of vertically.
- _(css)_ Remove css margin from contact-cta block
- Fix issue in css where in rare cases, when the editor is loaded in iframe mode would contain unstyled buttons. Fixes #281
- Fix a issue in the picture macro where passing an array instead of an idea could lead to a critical error.
- Fix a bug where you could not overwrite the card to use inside other-items.twig anymore by setting card_type. This broke backward compatibility and is now fixed.

### 📚 Documentation

- Add proper docblock

## 5.24.0 - 16 October 2024

### 🐛 Bug Fixes

- Remove stray character
- Fixes empty excerpt when there is content present. We add all acf blocks by default now to allow to be searched for inner content. closes #276

### 📚 Documentation

- Better docblock above filter
- Fix function reference
- Fix doc generation

### ⚙️ Miscellaneous Tasks

- Linting files
- Update packages
- Remove some oembed providers from default blocks
- Update docs to proper tag
- Add search replace step to fix docs building process

## 5.23.2 - 07 October 2024

### 🐛 Bug Fixes

- _(php)_ Fix missing method in card-grid block
- The card type in other-items.twig could only be set once, this fixes that so each card type can be a different one if needed.
- Fix search result not showing the excerpt

### 📚 Documentation

- Generate new docs and add them
- Document filters

### ⚙️ Miscellaneous Tasks

- Update packages

## 5.23.1 - 02 October 2024

### 🐛 Bug Fixes

- Update compatibility with new live search and WPML
- Fix share title filter not working in entry-footer.twig. Fixes #274
- Fix missing e-mail share icon, closes #273

### 📚 Documentation

- Enhance filter documentation in PHP code. This is an ongoing process.

### ⚙️ Miscellaneous Tasks

- Update twig templates to use default() fijlter for easier to understand code
- Update template part naming
- Update composer dependencies

## 5.23.0 - 30 September 2024

### ⛰️ Features

- _(js)_ Add trigger for starting cookie bar
- Continue on LemonPost post class

### 🚜 Refactor

- Refactor import paths for API helper functions in components
- Refactor other-items.twig to set default value for holder_classes if not provided
- Get_share_platforms function to accept a Post object or post ID

### ⚙️ Miscellaneous Tasks

- Update scroll behavior in API helper function
- Add additional arguments to node-overview query arguments filter. This makes it easier to alter the query based on field values and post type id.
- Update analytics section description in customizer-fields.php
- Update rector
- Run linting

## 5.22.1 - 10 September 2024

### ⛰️ Features

- Allow setting a amount of posts per page in the faq-highlight block

### 🐛 Bug Fixes

- Typos

### ⚙️ Miscellaneous Tasks

- Update typos toml config
- Update overwrite-icon function to handle icon variables with missing quotes

## 5.22.0 - 04 September 2024

### ⛰️ Features

- Start with extended Post object class for wp-lemon usage.

### 🐛 Bug Fixes

- Update block appender/ button block alignment in editor
- Make it easier to select the maps block in the editor for a better editing experience

### ⚙️ Miscellaneous Tasks

- Add additional actions
- Add parameter to related_faq_query function for specifying the number of items to query
- Update packages

## 5.21.2 - 02 September 2024

### 🐛 Bug Fixes

- Fix release version

### 🐛 Bug Fixes

- _(a11y)_ Load cookiebar earlier in the HTML so its faster to tab to.
- _(js)_ Fixed a bug in the faq-search.js code where in rare conditions an element could not be found and thus the whole code would not run
- _(js)_ Allow menu.js running when no navCollapse is found
- _(php)_ Fixed a bug in the FAQ class where 0 results would cause an empty faq area instead of a notice that there were no results
- Don't require highlighted faqs anymore so we can fall back on the default query

## 5.21.0 - 16 August 2024

### ⛰️ Features

- Set filters for setting the base delay
- Add anonymize_ip by default on the analytics integration

### 🐛 Bug Fixes

- Remove unneeded
- Remove console debug statements in cookiebar.js

### ⚙️ Miscellaneous Tasks

- Simplify cpt registration
- Update packages
- Update packages

## 5.20.0 - 12 August 2024

### ⛰️ Features

- Add (beta) support for consent mode v2 in Google Tag Manager. There will be a guide on the docs website soon on how to implement consent mode v2 in your tagmanager. You can enable this feature in the Customizer settings.
- Add conditional preferences checkbox to cookiebar

### 🚜 Refactor

- Update conditional rendering for contact buttons in controller-helpers.php and contact-buttons.twig
- Refactor the cookiebar to use localstorage instead of cookies

### 🎨 Styling

- Update button class in \_wp-buttons.scss to reflect new theme-button style

## 5.19.0 - 05 August 2024

### 🐛 Bug Fixes

- _(css)_ Timeline block css now has better defaults regarding the flowing of labels and animations

### 📚 Documentation

- Rename function name to reflect what it actually does

### ⚙️ Miscellaneous Tasks

- Complete removal of WooCommerce as started in 5.12.0, make sure you update to lemon-woo 1.10 or higher if you need WooCommerce functionality.
- Update pot file

### ◀️ Revert

- Revert creation of strings.twig file since twig translator plugin now works as expected

## 5.18.1 - 31 July 2024

### ⛰️ Features

- Feat : Add card type filter in node-latest and node-overview blocks

### 🐛 Bug Fixes

- _(scss)_ Add css margin between share label and share items
- _(scss)_ Timeline card date now flows correctly
- Add proper class on card-grid that was missing
- Prevent that classes in other-items.twig will overwrite child elements

### ⚙️ Miscellaneous Tasks

- Prevent media.twig from querying existing Attachment objects when they are already available.

## 5.18.0 - 30 July 2024

### ⛰️ Features

- Add possibility to add additional classes to the wrapper element inside other-items.twig file

### 🐛 Bug Fixes

- _(theme.json)_ Remove default fonts sizes in editor
- _(twig)_ Fix an issue where images would render too small when no size was being set in the context
- Remove unneeded .crd\_\_content div from timeline-item-card
- Fix a rare behavior in the format_phone_number API function where multiple () were applied when the country code (for example 31) was also somewhere else in the phonenumber.
- Apply proper spaces format to the now updated add_spaces_to_phonenumber function
- Fix(php) Enhance the add_spaces_to_phonenumber API function to now take an array in the proper order.

### 📚 Documentation

- Enhance docs for timber_file_paths function/action

### ⚙️ Miscellaneous Tasks

- Package updates
- Update dependencies

## 5.17.3 - 24 July 2024

### 🐛 Bug Fixes

- Bedrock 1.24 does not support getenv & putenv anymore so we now use another way to get environment variables.
- Fix critical error when get_latest_packagist_version couldn't fetch a version number for any reason.

## 5.17.2 - 03 July 2024

### ⛰️ Features

- _(blocks)_ In 5.17.0 we introduced a fix where the block editor will no longer add block IDs to every **newly added** block. This new extra feature will actively remove all block IDs from all blocks on that page when the item is saved in the editor and therefore improve the loading speed of the item.
- Keep search query in search form when searching
- Only add redirect rules when page is actually published

### 🐛 Bug Fixes

- _(blocks)_ Removed required parameter from some fields

### ⚙️ Miscellaneous Tasks

- Run the PHP generator of language files on the pre-release step automatically.
- Update translations
- Update checkout in changelog.yml

## 5.17.1 - 02 July 2024

### ⛰️ Features

- Add feature to set card type per other item being loaded

### 🐛 Bug Fixes

- _(content-card)_ Use addRelationship field instead of addPostObject field

## 5.17.0 - 01 July 2024

### ⛰️ Features

- **breaking** Bumped Bulldozer version requirement to 5.0.0 in functions.php, please set your Bulldozer version to ^5.0 in your root composer.json file.
- _(acf/content-card)_ Add option to inherit a featured image from an existing post object
- Introduce new @blocks directive.
- Remove the need for Javascript evals() which are not save.

### 🐛 Bug Fixes

- _(blocks)_ Only set parent block on accordion to prevent block cache not working. This feature will speed up the loading of the block editor once unneeded block IDs are removed. This will be added in a future release. You can already activally remove all blocks by running a search and replace on the wp_post table. You can run the following regex to remove all block IDs: `/\,"id":"[a-z0-9]*"/` and leave the replace empty. **Please make sure to backup your database before running this query.**
- _(php)_ Add additional check if function exists in WP_Lemon\API\get_fluent_form
- _(twig)_ Show correct version of installed Bulldozer version in the wp-lemon backend page

### ⚙️ Miscellaneous Tasks

- Set correct block directive in timeline-item block
- Remove ACF json load path from parent theme since we are not using it
- Package updates

## 5.16.2 - 18 June 2024

### 🐛 Bug Fixes

- Fix regression in 5.16.1 where we check the wrong variable to see if there are posts in the generic ajax query.
- Fix regression in 5.16.0 where special pages could sometimes not be added to context.

### ⚙️ Miscellaneous Tasks

- Set default show title attribute in media.twig

## 5.16.1 - 14 June 2024

### ⛰️ Features

- Add filter for current archive in navwalker

### 🐛 Bug Fixes

- _(twig)_ Cards are not displaying the image anymore when set on page
- Fix for dynamic blocks

- Fix css layout faq list
- Revert "fix: correct debugging"

This reverts commit 2e9a3a3b48bebf29df7b044cea08288bbb2cf183.

- Generic ajax queries several fixes for extended queries

## 5.16.0 - 11 June 2024

### ⛰️ Features

- Allow special pages to be external links as well
- Added filter to set faq-related posts
- Add 'textarea_to_array' to Timber/Twig as a filter. This filter will convert a textarea field to an array of lines.

### 🐛 Bug Fixes

- _(php)_ Fix undefined error in node-latest block
- _(php)_ Fix google analytics (non-tagmanager) instances not being loaded since version 5.10.0

### 📚 Documentation

- Add filter documentation

### ⚙️ Miscellaneous Tasks

- Fix codestyle
- Update translations
- Css fixes

## 5.15.1 - 03 June 2024

### 🐛 Bug Fixes

- Fix twig files

## 5.15.0 - 03 June 2024

### ⛰️ Features

- _(twig)_ Work on new argument structure for picture elements
- Continue on deprecating WooCommerce integration in wp-lemon. See release 5.12.0 for more information.

### ⚙️ Miscellaneous Tasks

- Remove unneeded todo's

## 5.14.1 - 31 May 2024

### 🐛 Bug Fixes

- _(php)_ Remove open call dir from file paths

### ⚙️ Miscellaneous Tasks

- _(php)_ stronger typing for phpstan
- Lint files

## 5.14.0 - 31 May 2024

### ⛰️ Features

- _(css)_ contact-buttons are now focusable and have an aria-label
- _(php)_ Start introducing named template locations. We will continue on this in upcoming releases.
- _(php)_ Fix exception message in get_site_information method
- _(css)_ use css gap instead of margin for footer menu items and icon lists

### 🐛 Bug Fixes

- _(backend)_ Report proper version of Timber on the license page
- _(php)_ Set default heading level to 'h3' in Accordion_Item_Block class
- _(js)_ Disallow smooth scroll on Woocommerce anchors
- _(css)_ Add gap between items in footer menu

### 🚜 Refactor

- _(css)_ Improve focus styles for elements
- _(php)_ Refactor Generic_Ajax_Query class for better code organization and encapsulation

### 📚 Documentation

- _(php)_ Return correct docblock class in log_error_message

### ⚙️ Miscellaneous Tasks

- _(css)_ Lint css files
- Update npm dependencies and configuration files
- Update translations

## 5.13.0 - 22 May 2024

### ⛰️ Features

- _(block)_ Accordion now has a setting to choose heading level of sub-items
- _(php)_ Enhanced output of taxonomy_post_collection collection, see documentation for more information
- _(block)_ Use enhanced output of taxonomy_post_collection() function to give understandable warnings when using the list view in the FAQ overview block and the categories or items are empty.
- New textarea_to_array (timber) API function

### 🐛 Bug Fixes

- _(css)_ Fix regression in block alignment in backend
- _(css)_ Update WP gallery styles for logo style and responsive columns
- _(css)_ Fix buttons being styled in footer

### ⚙️ Miscellaneous Tasks

- _(lang)_ Update translations
- Run phpstan
- Run spellchecker and fix typos in codebase
- Add typos spellchecker

## 5.12.2 - 15 May 2024

### 🐛 Bug Fixes

- Fix text direction in timeline cards
- Fix shortcode defaults assignment in get_fluent_form function
- Refactor remove_generated_webp function for better readability and error handling

## 5.12.1 - 08 May 2024

### ⛰️ Features

- Update timeline styles to allow switching between how even/uneven items align. Also made the css smaller.

### ⚙️ Miscellaneous Tasks

- Rename translate:makepot command to translate:make-pot

## 5.12.0 - 08 May 2024

### ⛰️ Features

- **breaking**: Everything related to Woocommerce will slowly be moved to a separate plugin. This is the first step in that direction. You can add `composer require satispress/lemon-woo` to make the switch to this new feature plugin. Use the css variables to overwrite the given css. You can also safely remove all logic involving the Woocommerce cart. This will be handled by the new plugin. Please submit issues at the [GitHub repository](https://github.com/Studio-Lemon/lemon-woo/issues) if you encounter any problems.

### 🐛 Bug Fixes

- Allow null on get_svg_icon function

### 📚 Documentation

- Update function documentation

### ⚙️ Miscellaneous Tasks

- Update languages
- Update to newer version
- Lint files

## 5.11.0 - 26 April 2024

### ⛰️ Features

- Allow fluentforms field to directly return a form instead of an id
- Add additional parameters to get_fluent_form function to allow for theme and type to be set
- Add make-php command
- Add card types on all cards
- Disable new font library feature of WordPress
- Add Timber to license page

### 🐛 Bug Fixes

- _(css)_ Remove unneeded margin when a block covers comes directly after a section with a background color.
- _(css)_ Add margin to fluent form if it is the last element directly in the .entry element
- (twig) Remove spaceless filters because the caused errors with latest twig version
- (css) Make underline visible in editor when needed
- (css) Fix block alignment in backend on smaller devices

### 🚜 Refactor

- Run rector and refactor codebase

### 📚 Documentation

- Add return types to functions

### ⚙️ Miscellaneous Tasks

- Lint files
- Bump required WordPress version to 6.5.0

## 5.10.4 - 02 April 2024

### 🐛 Bug Fixes

- Fix missing text in crd-wrap.twig string due to bug in twig translator
- Fix ordering in adjacent_post_info function when custom order plugins are in use.
- If no file name is set in get_svg_icon, bail early.

## 5.10.3 - 22 March 2024

### ⛰️ Features

- Rework of entry header

### ⚙️ Miscellaneous Tasks

- Package updates

### ◀️ Revert

- Caching of menus is not working as expected

## 5.10.2 - 21 March 2024

### ◀️ Revert

- Revert other caching

## 5.10.1 - 21 March 2024

### ◀️ Revert

- Revert caching on main files until we have a way to globally enable/disable caching

## 5.10.0 - 21 March 2024

### ⛰️ Features

- Add card grid fix where colors would not be inherited
- Cache part of site context
- Add new WP actions to app.twig and head.twig to be compatible with modern WordPress standards.

### 🐛 Bug Fixes

- _(css)_ Fix css property for form input
- The image macro now orders the sizes from small to large and creates a right sizes attribute
- Increase image size from 400 to 420 px to cover the 412px size for the lighthouse test
- Set output path for webpack build the correct way

### ⚙️ Miscellaneous Tasks

- Update dependencies
- Update packages

### Perf

- Cache twig output

## 5.9.0 - 14 March 2024

### ⛰️ Features

- Extend wp-lemon/filter/card/' ~ card_type ~ '/picture-el filter
- Add warnings about non-overwritable templates

### 🐛 Bug Fixes

- Minor css tweaks
- Update translateion
- Fix typo in translation command
- Fix rare condition with custom post order plugins that the first post is also the last post.
- Force 100% width to inner children
- Remove unneeded phpstan warning
- Optimize performance for ajax queries

### 📚 Documentation

- Enhance documentation in twig file

### ⚙️ Miscellaneous Tasks

- Lint PHP files

### Fix

- #259 get rid of error in the template

## 5.8.4 - 06 March 2024

### ⛰️ Features

- _(twig)_ Overwritable card holder classes in crd-wrap.twig
- Several improvements how pages are displayed in preview mode. closes #257

## 5.8.3 - 05 March 2024

### 🐛 Bug Fixes

- _(css)_ Fix headings sizes breaking due to scss maps
- _(runner)_ Fix node version

## 5.8.2 - 05 March 2024

### ⛰️ Features

- _(css)_ Better configuarable animations

### 🐛 Bug Fixes

- _(css)_ Fix archive margin
- Fix swiper configurations

### ⚡ Enhancements

- _(js)_ Move trigger to api functions

### ⚙️ Miscellaneous Tasks

- _(actions)_ Update action runner

## 5.8.1 - 28 February 2024

### 🐛 Bug Fixes

- Bump version to wp-lemon 5.8.1

### ⚙️ Miscellaneous Tasks

- _(build)_ Add new version script and move block build script to separate folder
- Update languages

## 5.8.0 - 27 February 2024

### ⛰️ Features

- _(block)_ Add pagination option to carousel block
- Smaller containers will give the smaller width to their children instead to the actual container
- Add archive-content classes to each .row element for easier styling of archives in one place.
- New wp-lemon/filter/core-blocks-to-allow filter added to create an allowlist of core blocks to be used in the editor this takes precedence over the wp-lemon/filter/core-blocks-to-remove filter when filled.

### 🐛 Bug Fixes

- _(css)_ .share-buttons padding to margin for better flow
- _(css)_ Fix link hover color
- Add proper quotes around tagmanager
- Run WP_Lemon_Site::prepare_site_information later in the lifecycle
- Hide notice for "do not translate field" for fields in non-native languages. This is because block fields cannot be translated in the blockeditor.
- Hide pagination in editor

## 5.7.1 - 19 February 2024

### 🐛 Bug Fixes

- _(css)_ Minor css fix for accordion item
- Fix wrong icon path in icon path filter
- Fix license page error

## 5.7.0 - ❤️ 14 February 2024

### ⛰️ Features

- _(php/css)_ [**breaking**] More consistent archive classes in menu:
  current-active-archive renamed to is-archive--active
  archive-{{name}} renamed to is-archive--{{name}}
  additional class is-archive added

BREAKING CHANGE: classes have been changed, please check your codebase if you rely on these classes and if so, change accordingly.

- Full integration of acf icon plugin, you can now use get\*svg_icon('icon-name') to get an svg icon from the acf icon plugin. If you have this integration setup yourself, we recommend to remove it and use the new get_svg_icon function and remove the filters starting with `acf_icon`
- Add Bulldozer package information

### 🐛 Bug Fixes

- Allow overwrites of body background in editor.scss
- Better ordering of scss vars
- Better carousel defaults

### ⚙️ Miscellaneous Tasks

- Bump required bulldozer version to 4.4.0, please update your bulldozer version
- Update packages
- Remove unused import
- Update the way Timber handles the extension of functions and filters nowwayday
- Update packages

## 5.6.0 - 09 February 2024

### ⛰️ Features

- _(js)_ Add new findParentBlock function to find the parent acf block
- New block TODO added. New block added to track development/content process while the website is still under construction. This block will only be shown in development/staging environments and will be hidden from the block inserter
- Is_preview twig function added for usage in macros
- Allow content in widget when menu is active
- Fully qualify name in add_fields methods in the acf blocks so that IDE's can autocomplete the fields

### 🐛 Bug Fixes

- _(css)_ Fix ghost button in contrast mode
- _(twig)_ Fix language switcher dropdown issues
- Fix text alignment in circle-text block
- Add lazy to footer logo

### ⚙️ Miscellaneous Tasks

- Cleanup blocks
- Update packages
- Lint files

### ⚡ Enhancements

- Loading strategy via wp_enqueue_script tags
- Better logic for checking the password protected template

## 5.5.1 - 25 January 2024

### 🐛 Bug Fixes

- _(php)_ First check if object is available in archive.js
- _(php)_ Enhanced adjacent_post_info function

## 5.5.0 - 23 January 2024

### ⛰️ Features

- [**breaking**] Twitter to X, Thanks Elon.. If you've overwritten the social icons to show in the share or social macros, please change the name to x.
- _(tracking)_ Able to easily add Tagmananager or Analytics tracking via the theme settings
- Translations are now managed via wp-i18n-twig

### 🐛 Bug Fixes

- _(css)_ Theme-button--ghost now inherits correct outline styles
- _(js)_ Trigger cookiebar event based on consent type
- _(js)_ Better domReady function
- _(php)_ Proper check to see if the array is empty or not in the taxonomy_post_collection function
- Block_id was being inherited by cards that were used in loops. Variable now renamed to card_id
- Better naming for cookie setting

## 5.4.0 - 16 January 2024

### ⛰️ Features

- get_attachment_info API function added

### 🐛 Bug Fixes

- _(js)_ Don't inject analytics script when there is no consent given for analytics.

### ⚙️ Miscellaneous Tasks

- Update cookiebar.js to use api function trigger() to dispatch cookiebar events.
- Update packages
- Update phpcs version
- Use supported version of prettier melody

## 5.3.2 - 29 December 2023

### 🐛 Bug Fixes

- _(twig)_ Fixed missing information in faq-overview.twig
- _(php)_ Fixed a bug in taxonomy_post_collection and made the query faster
- _(twig)_ filterable animations for cards as well

### ⚙️ Miscellaneous Tasks

- Update packages
- Lint php files

## 5.3.1 - 21 December 2023

### ⛰️ Features

- _(blocks)_ Add filters to hide all animations at once

### 🐛 Bug Fixes

- _(php)_ On vanilla wp, only show license notice when noindex is false
- _(ci)_ Fix GitHub actions

## 5.3.0 - 18 December 2023

### ⛰️ Features

- _(blocks)_ Node overview is only allowed on pages
- _(php)_ When the autoloader is not yet loaded, load in from the site root.
- _(php)_ Map block now uses the place_id over address
- _(twig)_ Add additional extendable blocks for a more fluent way to extend custom cards.

### 🐛 Bug Fixes

- _(css)_ Use proper css class
- _(twig)_ Remove stray class
- _(twig)_ Remove extra span tag

## 5.2.3 - 13 December 2023

### ⛰️ Features

- _(php)_ Add zoom level option to map block

### 🐛 Bug Fixes

- _(css)_ Overwrite text alignment on card level
- _(css)_ Set bigger specificity
- _(css)_ Remove specificity
- Overwrite Woo's prevent admin check

### ⚙️ Miscellaneous Tasks

- Reorder functions

## 5.2.2 - 08 December 2023

### ⛰️ Features

- _(twig)_ New apply_filters_deprecated filter added
- _(twig)_ renamed filters in entry-footer.twig to be more consistent and deprecated old filters.
- _(php)_ remove caching from widgets
- _(php)_ add a default title to maps block to comply with wcag, Fixes #248

### 🐛 Bug Fixes

- _(js)_ Importing unregisterPlugin
- _(php)_ Added new editor_css function that hooks into enqueue_block_assets to load styles in the block editor iframe, Fixes #249
- _(twig)_ Added spaceless filter to remove extra whitespaces in editor that caused a react warning in the editor
- Fix label filter
- Change domready in opening hours block

### 📚 Documentation

- Document hooks

### ⚙️ Miscellaneous Tasks

- Remove unneeded js translation
- Chore(translations) updated translations
- Rename variable

## 5.2.1 - 06 December 2023

### ⛰️ Features

- _(PHP/Twig)_ New apply_filters_deprecated filter added
- _(twig)_ renamed filters in entry-footer.twig to be more consistent and deprecate old filters.
- _(PHP)_ remove caching from widgets
- _(PHP/Twig)_ add a default title to maps block iframe to comply with WCAG, fixes #248

### 🐛 Bug Fixes

- Change domready in opening hours block

### ⚙️ Miscellaneous Tasks

- Removed unneeded js translation task in package.json
- Updated Dutch translations

## 5.2.0 - 21 November 2023

### ⛰️ Features

- Updated Bulldozer required version to 4.1.0
- New block opening-hours added, this will only be loaded when Rank Math is active

### 🐛 Bug Fixes

- _(js)_ Add element as detail to eventHandler
- _(php)_ Fixed WordPress 6.4 deprecation in functions.php
- _(php)_ Reset array if more then one value in theme.php

## 5.1.0 - 20 November 2023

### ⛰️ Features

- [**breaking**] wp-button component now has the `theme-button` class added. Outline buttons also get the modifier class `theme-button--ghost`. This makes it easier to style default button components as well as gutenberg buttons the same way. Make sure you check your custom button css to see if it is still needed/works.
- _(php)_ Add modifier class to body when on a custom archive page
- _(php)_ HTML classes now are more easily filterable via bootstrap_navwalker `nav_menu_link_attributes` filter
- _(js)_ Add custom event dispatcher in search.js, menu.js and dropdown.js
- _(lang)_ updated languages
- _(css)_ Footer update - Realized by section of footer is now less intrusive
- _(css)_ partially revert changes to remove default font weight in favor of a variable.
- _(js)_ New eventHanler function added
- _(Twig)_ Background images in sections now scale to 100vw
- _(Twig)_ Remove deprecated action
- Add automatic changelog generation

### 🐛 Bug Fixes

- _(css)_ Overwrite css value of button when parent text color is set.
- _(css)_ Set proper flex direction in .img-container
- _(css)_ make headings scale the same way in the backend as in the frontend

### 🎨 Styling

- Better default .theme-button-row
- Better default ghost buttons

## 5.0.2:

_Release Date - 13 november 2023_

- 🐛 **Bugs Fixed**
    - PHP - Temporary fix added for Timber 2.0.0 bug where the wrong twig files would be loaded when you want to overwrite a twig file from the parent theme.
    - SCSS - Fix section background color in contrast mode.

## 5.0.1:

_Release Date - 13 november 2023_

- ✨ **Enhanced**
    - Workflow - run changelog sync separately from build
- 🐛 **Bugs Fixed**
    - PHP - Update return type of query API functions to be more specific
    - PHP - load correct dependencies for lock-reusable-block.js
    - PHP - Fix array_map function in faq-highlight.php block
    - PHP - Merge in full color settings from palette.json
    - Twig - fix deprecated Image call in media.twig

## 5.0.0:

_Release Date - 10 november 2023_

- ⛏️ **Breaking**
    - JS `bp_site` is renamed to `wpLemon` to be more consistent with the rest of the codebase. Please update your own javascript functions accordingly.
    - Minimal PHP version is now 8.1
    - Timber 2.0 introduces breaking changes. Most of them are handled by wp-lemon but please check your child theme `Timber` calls to see if they are still valid. Also check your debug.log for any errors or deprecation notices.
    - Swiper is updated to 11.x
- 💡 **Newly added**
    - wp-lemon now uses Timber 2.0 which is way more modern then Timber 1. See [upgrade guide](https://timber.github.io/docs/v2/upgrade-guides/2.0/). We updated wp-lemon to be fully compatible with Timber 2.0

- ✨ **Enhanced**
    - Frontend translations are now handles via wp_localize_script instead of i18n.js. This leads to ~600kb less files loaded on the frontend.
- 📋 **Docs**
    - Documentation is updated
    - Changelogs are now generated automatically for all major versions. See [changelog](https://studio-lemon.github.io/wp-lemon-docs/changelog)
