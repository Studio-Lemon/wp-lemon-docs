# Filter Hooks

## wp-lemon/filter/phone-number/result

Filters the phone number result.

Use this filter to modify the phone number result.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $result | `string[]` | The phone number result. |
| $countrycode | `int` | The country code of the phone number. |

</div>

## wp-lemon/filter/phone-number/default-format

- `wp-lemon/filter/phone-number/default-format`
- `wp-lemon/filter/phone-number/default-format`

Filters the default phone number format.

Can be one of the following:

- national (default)
- international (+31 6 12345678)
- combined (+31 (0) 6 12345678)
- localized (only if WPML is active and the current language is not the default language)

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $default_format | `string` | See above. |

</div>

## wp-lemon/filter/language-switcher

Filters the language switcher.

By using this filter you can change the output of the language switcher.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $switcher | `array<string,mixed>` | The language switcher array. |

</div>

## wp-lemon/filter/share-context

Filters the loaded card type for the node-latest block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $shares | `array<string,mixed>` | an array of shares that can be addressed by the share partial.  Array format: 'name' 'icon_class' 'share_url' |

</div>

## wp-lemon/filter/socials-context

Filters the socials context.

This filter can be used to change the socials that are being outputted.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $socials | `array<int` or `string,array>` | array of socials that can be addressed by the socials partial. |

</div>

## wp-lemon/filter/translations/frontend

Filters the front-end translations.

This filter is used to add or modify the translations array.
The translations is used in javascript to translate strings.

## wp-lemon/filter/block/faq-item/allowed-blocks

Filters the allowed blocks for the accordion-item block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array` | the allowed blocks. |

</div>

## wp-lemon/filter/block/faq/allowed-blocks

Filters the allowed blocks for the accordion block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array` | the allowed blocks. |

</div>

## wp-lemon/filter/block/card-grid/allowed-blocks

Filters the allowed blocks for the card grid block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array` | the allowed blocks. |

</div>

## "wp-lemon/filter/block/{$this->slug}/allowed-blocks

Filters the allowed blocks for the carousel block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array` | the allowed blocks. |

</div>

## wp-lemon/filter/block/color-block/allowed-blocks

Filters the allowed blocks for the color-block block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array` | the allowed blocks. |

</div>

## wp-lemon/filter/block/contact-cta/allowed-blocks

Filters the allowed blocks for the contact-cta block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array` | the allowed blocks. |

</div>

## wp-lemon/filter/block/image-sizes

Filters the default image sizes in blocks.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $image_sizes | `string` | the default image sizes. |

</div>

## wp-lemon/filter/block/content-card/image-sizes

Filters the default image sizes in the content-card block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $image_sizes | `string` | the default image sizes. |

</div>

## wp-lemon/filter/block/content-card/fields/post-types

Filters the allowed post types to link to in the content-card block link field.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $post_types | `array` | the allowed post types. |

</div>

## wp-lemon/filter/block/faq-highlights/posts-per-page

Filters the amount of posts per page for the faq-highlights block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `int` | the amount of posts per page. |

</div>

## wp-lemon/filter/block/faq-highlights/allowed-blocks

Filters the allowed blocks for the faq-highlights block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array` | the allowed blocks. |

</div>

## wp-lemon/filter/block/faq-highlights/overview-button-text

Filters the overview button text for the faq-highlights block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $overview_button_text | `string` | the overview button text. |

</div>

## "wp-lemon/filter/block/{$this->slug}/allowed-blocks

Filters the allowed blocks for the image-card block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array` | the allowed blocks. |

</div>

## "wp-lemon/filter/block/node-latest/{$this->dynamic\_post\_type}/overview-button-text

Filters the allowed blocks for the faq-highlights block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $overview_button_text | `string` | the button text |
| $label | `string` | the post type label |

</div>

## "wp-lemon/filter/block/node-latest/{$this->dynamic\_post\_type}/args

Filters the query args for the node-latest block.

'$this->dynamic_post_type' The post type.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $args | `null` or `array` | the original query args |
| $post_id | `int` | the post id |

</div>

## "wp-lemon/filter/block/node-latest/{$this->dynamic\_post\_type}/no-items-message

Filters the query args for the node-latest block.

'$this->dynamic_post_type' The post type.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $no_items_message | `string` | the message |
| $terms | `array` | the terms |
| $term_name | `false` or `string` | the term name |
| $label | `string` | the post type label |

</div>

## "wp-lemon/filter/block/node-latest/{$this->dynamic\_post\_type}/holder-classes

Filters the number of columns on lg format for the node-latest block.

'$this->dynamic_post_type' The post type.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $col_lg_class | `string` | the number of columns |

</div>

## wp-lemon/filter/block/node-latest/card-type

Filters the default card type for the node-latest block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $card_name | `string` | the card name without the crd- prefix |

</div>

## "wp-lemon/filter/block/node-latest/{$this->dynamic\_post\_type}/card-type

Filters the card type for the specific post type of the node-latest block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $card_name | `string` | the card name without the crd- prefix |

</div>

## wp-lemon/filter/block/timeline-item/allowed-blocks

Filters the allowed blocks for the timeline-item block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array` | the allowed blocks. |

</div>

## wp-lemon/filter/block/widget-row/allowed-blocks

Filters the allowed blocks for the widget-row block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array` | the allowed blocks. |

</div>

## wp-lemon/filter/navwalker/archive-pages

Filters the archive page for the current post type.

Primarily used by the lemon-woo plugin to mark the shop page as the archive page for the product post type.

**since** 5.19.0

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $archive_pages | `mixed` | The archive page for the current post type. |
| $post_id | `int` | The post ID of the current menu item. |
| $item | `mixed` | The current menu item. |
| $classes | `array` | The current menu item classes. |

</div>

Example usage:

**PHP**

```php
function add_archive($archive_pages, $post_id, $item, $classes)
{

   if ($post_id == wc_get_page_id('shop')) {
       $archive_pages = array('product');
   }

   return $archive_pages;
}
add_filter('wp-lemon/filter/navwalker/archive-pages', __NAMESPACE__ . '\\add_archive', 10, 4);
```

## wp-lemon/filter/navwalker/start-lvl-classes

Filters the classes for the start of a menu level.

**since** 5.35.0

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $div_class_names | `array` | The classes for the start of a menu level. |
| $depth | `int` | The depth of the menu item. |
| $args | `\stdClass` | An object of wp_nav_menu() arguments. |
| $current_item | `\WP_Post` | The current menu item. |

</div>

## wp-lemon/filter/navwalker/start-lvl

Filters the output for the start of a menu level.

**since** 5.35.0

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $output | `string` | The output for the start of a menu level. |
| $depth | `int` | The depth of the menu item. |
| $args | `\stdClass` | An object of wp_nav_menu() arguments. |
| $current_item | `\WP_Post` | The current menu item. |

</div>

## wp-lemon/filter/navwalker/end-lvl

Filters the output for the end of a menu level just before the closing ul tag.

**since** 5.35.0

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $output | `string` | The output for the end of a menu level. |
| $depth | `int` | The depth of the menu item. |
| $args | `\stdClass` | An object of wp_nav_menu() arguments. |
| $current_item | `\WP_Post` | The current menu item. |

</div>

## wp-lemon/filter/navwalker/.$page./link-attributes

Filters the link attributes for a wp-lemon archive page.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $atts | `array` | The HTML attributes applied to the menu item's `<a>` element, empty strings are ignored. |
| $menu_item | `\WP_Post` | The current menu item. |
| $args | `\stdClass` | An object of wp_nav_menu() arguments. |
| $depth | `int` | Depth of menu ite |

</div>

Example usage:

**PHP**

```php
function link_attributes_job($atts, $item, $args, $depth)
{

$args = [
   'post_type'      => 'job',
   'posts_per_page' => -1,
   'status'         => 'publish',
 ];

$posts = \Timber\Timber::get_posts($args);
 $count = count($posts);

if ($count > 0) {
    $atts['data-jobs'] = $count;
}

  return $atts;
}

add_filter('wp-lemon/filter/navwalker/job/link-attributes', __NAMESPACE__ . '\\link_attributes_job', 10, 4);
```

## wp-lemon/filter/navwalker/.$menu\_item->ID./link-attributes

Filters the link attributes for a menu item based on the menu item ID.

Example usage:

```php
function link_attributes_job($atts, $item, $args, $depth)
{

$args = [
   'post_type'      => 'job',
   'posts_per_page' => -1,
   'status'         => 'publish',
 ];

$posts = \Timber\Timber::get_posts($args);
 $count = count($posts);

if ($count > 0) {
    $atts['data-jobs'] = $count;
}

  return $atts;
}

add_filter('wp-lemon/filter/navwalker/10/link-attributes', __NAMESPACE__ . '\\link_attributes_job', 10, 4);
```

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $atts | `array` | The HTML attributes applied to the menu item's `<a>` element, empty strings are ignored. |
| $menu_item | `\WP_Post` | The current menu item. |
| $args | `\stdClass` | An object of wp_nav_menu() arguments. |
| $depth | `int` | Depth of menu ite |

</div>

## wp-lemon/filter/model/faq-slug

Filters the FAQ slug.

Use this filter to change the slug of the FAQ post type.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $faq_slug | `string` | The FAQ slug. |

</div>

## wp-lemon/filter/faq/related-posts

Filters the number of related posts to query.

Defaults to 6.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $items | `int` | The number of items to query. |

</div>

## "wp-lemon/filter/ajax-query/{$this->current\_action}/context

Filters the context before rendering the cards.

This allows developers to add or remove context before rendering the cards.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $context | `array` | The context array. |
| $instance | `\Generic_Ajax_Query` | The current instance of the class. |

</div>

## wp-lemon/filter/special-pages

Filters the special pages.

This filter allows you to add or remove special pages.
You can read more about special pages in the documentation.

**link** <https://studio-lemon.github.io/wp-lemon-docs/extend/special-pages>

**since** 4.0.0 Special pages introduced.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $special_pages | `array` | The special pages. |

</div>

## wp-lemon/filter/socials-order

Filters the order or add/remove social media platforms.

We use this filter to change the order of social media platforms in the footer.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $social_media_platforms | `array` | An array of social media platforms. |

</div>

## wp-lemon/filter/a11y/skip-links

Filters the array of skip links.

This allows developers to add or remove skip links.

**since** 4.1.0

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $links | `array` | Original array of skip links. |

</div>

## wp-lemon/filter/webp-quality

Filters the quality of the webp image.

**since** 4.9.2

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $quality | `int` | The quality of the webp image. |

</div>

## wp-lemon/filter/blocks

Filters the blocks to load.

With this filter you can remove blocks from the parent theme.

## wp-lemon/filter/blocks-to-allow

Filters the allowlist of blocks that will be allowed in the editor.

This will override the block removal list and short-circuit the function.

**since** 5.35.0

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array<string,mixed>` | to allow array of core blocks that we only want to show in the editor. |
| $post_type | `string` | The current post type. Use this to remove blocks for a specific post type. |

</div>

## wp-lemon/filter/core-blocks-to-allow

Filters the list of core blocks that will be allowed in the editor.

**since** 5.8.0 introduced the filter.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array<string,mixed>` | to allow array of core blocks that we only want to show in the editor. |
| $post_type | `string` | The current post type. Use this to remove blocks for a specific post type. |

</div>

## wp-lemon/filter/core-blocks-to-remove

Filters the block removal list.

**DEPRECATED** since 5.35.0 Use wp-lemon/filter/blocks-to-remove instead. The name of the filter is misleading.

We have a list of blocks that we do not want to show in the editor, this filter allows us to remove blocks from that list.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $post_type | `string` | The current post type. Use this to remove blocks for a specific post type. |

</div>

## wp-lemon/filter/blocks-to-remove

Filters the block removal list.

We have a list of blocks that we do not want to show in the editor, this filter allows us to remove blocks from that list.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $post_type | `string` | The current post type. Use this to remove blocks for a specific post type. |

</div>

## wp-lemon/filter/model/acf-fields/job

Filters the job post type fields registered with ACF.

**since** 3.11.4

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $person_fields | `\StoutLogic\AcfBuilder\FieldsBuilder` | The fields for the job. |

</div>

## wp-lemon/filter/model/acf-fields/person

Filters the person post type fields registered with ACF.

**since** 3.11.4

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $person_fields | `\StoutLogic\AcfBuilder\FieldsBuilder` | The fields for the job. |

</div>

## wp-lemon/filter/model/acf-fields/menu

Filters the menu fields registered with ACF.

**since** 3.11.4

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $menu_fields | `\StoutLogic\AcfBuilder\FieldsBuilder` | The fields for the menu. |

</div>

