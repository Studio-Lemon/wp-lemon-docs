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

## wp-lemon/filter/block/animation/hide

Filters whether or not to add an animation to the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $maybe_hide_animation | `bool` | false in the frontend, true in the backend. |

</div>

## wp-lemon/filter/block/{$slug}/animation/hide

Filters whether or not to hide the animation of a specific block.

Use this filter to toggle the animation for a specific block.

`$slug` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $maybe_hide_animation | `bool` | false in the frontend, true in the backend. |

</div>

## wp-lemon/filter/date-notation

Filters the default date notation

This filter is used in search results, news cards and the entry header.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $date_notation | `string` | The date notation. |

</div>

## wp-lemon/filter/card/person/phonenumber

Filters the phonenumber that is displayed in the person card.

**link** <More information about what the phone number array contains: https://studio-lemon.github.io/wp-lemon-docs/reference/api-functions#format_phone_number>

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $default_number | `string` | The default number. |
| $phone_numbers | `array` | The phone numbers array containing the phone number information. |

</div>

## wp-lemon/filter/card/icon

Filters the card icon.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $icon | `string` | The icon class name. |

</div>

An example of how to use this filter:
**PHP**

```php
add_filter('wp-lemon/filter/card/icon', function($icon) {
   return 'icon-arrow-right';
});
```

## wp-lemon/filter/card/excerpt-length

Filters the card excerpt length.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $excerpt_length | `int` | The excerpt length. |

</div>

## wp-lemon/filter/card/{$card\_type}/excerpt-length

Filters the card excerpt length for a specific card type.

`$card_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $excerpt_length | `int` | The excerpt length. |

</div>

## wp-lemon/filter/card/{$card\_type}/animation/hide

Filters whether or not to hide the animation.

Return true to hide the animation.

`$card_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $maybe_hide_animation | `bool` | false in the frontend, true in the backend. |

</div>

## wp-lemon/filter/card/{$card\_type}/animation

Filters what animation to use for the card.

`$card_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $animation | `string` | The AOS animation name. |

</div>

## wp-lemon/filter/card/{$card\_type}/image-id

Filters the image ID for the card.

Use this filter to change the image ID of the card.
You can use this filter to fall back to a default image if the image is not set.

`$card_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $attachment_id | `int` | The attachment ID. |

</div>

**PHP**

```php
add_filter('wp-lemon/filter/card/news/image-id', function($attachment_id) {
  if (empty($attachment_id)) {
    return get_theme_mod('fallback_image_news');
  }

  return $attachment_id;
});
```

## wp-lemon/filter/card/{$card\_type}/image-sizes

Filters the image ID for the card.

Use this filter to change the image ID of the card.
You can use this filter to fall back to a default image if the image is not set.

`$card_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $attachment_id | `int` | The attachment ID. |

</div>

An example of how to use this filter:
**PHP**

```php
function overview_image_sizes($sizes)
{
  return '
  (min-width: 768px) 750px,
  (min-width: 600px) 510px,
  400px';
}
add_filter('wp-lemon/filter/block/node-overview/case/image-sizes', __NAMESPACE__ . '\\overview_image_sizes');
```

## wp-lemon/filter/card/{$card\_type}/picture-classes

Filters the picture classes for the card.

`$card_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $picture_classes | `array` | The picture classes. |

</div>

## wp-lemon/filter/card/{$card\_type}/picture-el

Filters the picture element for the card.

`$card_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $picture_el | `string` | The picture element. |
| $args | `array` | additional arguments to help you filter the picture element.<br/><br/> |

</div>

An example of how to use this filter:
**PHP**

```php
function overwrite_news_card_media($content, $id)
{

  if (!get_field('video', $id)) {
     return $content;
  }

  return Timber::compile('components/cards/video.twig', [
     'video' => get_field('video', $id),
     'id' => get_post_thumbnail_id($id),
  ]);
}
add_filter('wp-lemon/filter/card/case/picture-el', __NAMESPACE__ . '\\overwrite_news_card_media', 10, 2); description
```

## wp-lemon/filter/card/{$card\_type}/picture-args

Filters the picture arguments to render the picture element in the card.

`$card_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $args | `array` | the arguments used by the picture macro to render the picture element.<br/><br/> |
| $attachment_id | `int` | The attachment ID. |

</div>

## wp-lemon/filter/card/{$card\_type}/footer

Filters the card footer for a specific card type.

`$card_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $card_footer | `string` | The card footer. |
| $post_id | `int` | The post ID. |
| $fields | `array` or `null` | The fields if the current card is an ACF block. |

</div>

**PHP**

```php
function custom_card_footer($card_footer, $post_id, $fields)
{
    return Timber::compile('components/cards/custom-footer.twig', []);
}
add_filter("wp-lemon/filter/card/{$card_type}/footer", __NAMESPACE__ . '\\custom_card_footer', 10, 3);
```

## wp-lemon/filter/block/node-overview/{$card\_type}/load-more-text

Filters the load more text in the node overview block for a specific post type.

`$card_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $load_more_text | `string` | The load more text. |

</div>

## wp-lemon/filter/block/node-overview/load-more-delay

Filters the load more delay in the node overview block.

Use this to slow down the fade in effect when loading more cards.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $delay | `int` | The delay in milliseconds. |

</div>

## wp-lemon/filter/block/node-overview/{$card\_type}/load-more-delay

Filters the load more delay in the node overview block for a specific post type.

Use this to slow down the fade in effect when loading more cards.

`$card_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $delay | `int` | The delay in milliseconds. |

</div>

## wp-lemon/filter/cookiebar/show-analytics-checkbox

Filters whether or not to show the analytics checkbox in the cookie bar.

Default is true.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $show_checkbox | `string` | True if the checkbox should be shown, false if it should be hidden. |

</div>

## wp-lemon/filter/cookiebar/show-marketing-checkbox

Filters whether or not to show the marketing checkbox in the cookie bar.

Default is false.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $show_checkbox | `string` | True if the checkbox should be shown, false if it should be hidden. |

</div>

## wp-lemon/filter/cookiebar/show-preferences-checkbox

Filters whether or not to show the preferences checkbox in the cookie bar.

Default is false.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $show_checkbox | `string` | True if the checkbox should be shown, false if it should be hidden. |

</div>

## wp-lemon/filter/cookiebar/text

Filters the complementary text for the cookie bar.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $text | `string` | The text for the cookie bar. |
| $site_name | `string` | The site name. |

</div>

## wp-lemon/filter/cookiebar/functional

Filters the explanation text for the functional cookies in the cookie bar.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $text | `string` | The text for the functional cookies. |

</div>

## wp-lemon/filter/cookiebar/analytics

Filters the explanation text for the analytics cookies in the cookie bar.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $text | `string` | The text for the analytics cookies. |

</div>

## wp-lemon/filter/cookiebar/marketing

Filters the explanation text for the marketing cookies in the cookie bar.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $text | `string` | The text for the marketing cookies. |

</div>

## wp-lemon/filter/cookiebar/preferences

Filters the explanation text for the preference cookies in the cookie bar.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $text | `string` | The text for the preference cookies. |

</div>

## wp-lemon/filter/cookiebar/reject

Filters the text for the reject button in the cookie bar.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $reject | `string` | default: 'Reject' |

</div>

## wp-lemon/filter/cookiebar/accept

Filters the text for the accept button in the cookie bar.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $accept | `string` | default: 'Accept' |

</div>

## wp-lemon/filter/header/render

Filters whether or not to render the header.

This is intended to be used on custom landing pages where you want to hide the header.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $show_header | `bool` | True if the header should be shown, false if it should be hidden. |

</div>

## wp-lemon/filter/header/logo

Filters the logo HTML for the header.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $logo_html | `string` | defaults to the logo HTML. |
| $logo | `array` | The array containing the logo data. |

</div>

## wp-lemon/filter/header/breakpoint

Filters the breakpoint for the header.

This filter is used to determine the breakpoint at which the header will change its layout.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $breakpoint | `string` | default: 'lg' |

</div>

## wp-lemon/filter/offcanvas/bootstrap-offcanvas-scroll

Filters the boolean value to active the scroll listener for the offcanvas menu.

This filter comes in handy when you are working with a onepager website and you want to place anchor links in the offcanvas menu.
This way, the offcanvas menu will scroll to the desired section when the menu item is clicked.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $activate_scroll_listener | `bool` |  |

</div>

## wp-lemon/filter/footer/render

Filters whether or not to render the footer.

This is intended to be used on custom landing pages where you want to hide the header.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $show_footer | `bool` | True if the footer should be shown, false if it should be hidden. |

</div>

## wp-lemon/filter/footer/show-logo

Filters if the logo should be shown in the footer.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $show_logo | `bool` | defaults to true. |

</div>

## wp-lemon/filter/footer/show-bottombar

Filters if the bottombar should be shown in the footer.

The bottombar is the bar in the footer containing the copyright message and footer menu.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $show_bottombar | `bool` | defaults to true. |

</div>

## wp-lemon/filter/footer/logo

Filters the logo HTML for the footer.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $logo_html | `string` | defaults to the logo HTML. |
| $logo | `array` | The array containing the logo data. |

</div>

## wp-lemon/filter/copyright-message

Filters the copyright message for the footer.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $copyright_message | `string` | The copyright message. |
| $year | `string` | The current year. |

</div>

## wp-lemon/filter/entry-header/{$post\_type}/tags

Filters the tags/categories in the entry header.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $ | `array` | An array of taxonomies. |

</div>

## wp-lemon/filter/entry-header/{$post\_type}/archive-page

Filters the back button information that leads back to the archive page.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $ | `array` | An array containing the back button information. |

</div>

## wp-lemon/filter/entry-header/{$post\_type}/type

Filters the post type name for the entry header.

This is shown above the title to indicate the post type.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $title | `string` | The title of the entry header. |

</div>

## wp-lemon/filter/entry-header/{$post\_type}/date

Filters the date html for the entry header.

Use this filter to change the date completely.

`$post_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $date | `string` | The date HTML. |

</div>

## wp-lemon/filter/entry-header/{$post\_type}/title

Filters the title html for the entry header.

Use this filter to change the title completely.

`$post_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $title | `string` | The title HTML. |

</div>

## wp-lemon/filter/entry-header/image-size

Filters the image size for the entry header.

Use this filter change the image size that is used in the entry header.
Can be thumbnail, medium, large, full or any custom size.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $image_size | `string` | The image size, default: 'large'. |

</div>

## wp-lemon/filter/entry-header/{$post\_type}/image-size

Filters the image size for the entry header.

Use this filter change the image size that is used in the entry header.
Can be thumbnail, medium, large, full or any custom size.

`$post_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $image_size | `string` | The image size, default: 'large'. |

</div>

## wp-lemon/filter/entry-header/{$post\_type}/image-id

Filters the image ID for the entry header.

Use this filter to change the image ID of the entry header.
You can use this filter to fall back to a default image if the image is not set.

`$post_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $attachment_id | `int` | The attachment ID. |

</div>

## wp-lemon/filter/entry-header/{$post\_type}/picture-el

Filters the full picture element for the entry header.

`$post_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $picture_html | `string` | The picture element HTML. |
| $post_id | `int` | The post ID. |

</div>

## wp-lemon/filter/entry-header/person/archive-page

Filters the back button information that leads back to the archive page.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $nav_back | `array` | An array containing the back button information. |

</div>

## wp-lemon/filter/entry-footer/share-buttons/show

Filters whether or not to show the share buttons in the entry footer.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $show_share_buttons | `bool` | Whether or not to show the share buttons, default: true. |

</div>

## wp-lemon/filter/entry-footer/{$post\_type}/share-buttons/show

Filters whether or not to show the share buttons in the entry footer for a specific post type.

`$post_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $show_share_buttons | `bool` | Whether or not to show the share buttons, default: true. |

</div>

## wp-lemon/filter/entry-footer/share-buttons/platforms

Filters the share buttons for the entry footer.

Contains 'linkedin', 'x', 'facebook', 'e-mail', 'whatsapp'

You can change the order of the share buttons as well via this filter.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $share_buttons | `array` | The share buttons array. |

</div>

## wp-lemon/filter/entry-footer/{$post\_type}/share-buttons/platforms

Filters the share platforms in the entry footer for a specific post type.

Contains 'linkedin', 'x', 'facebook', 'e-mail', 'whatsapp'

`$post_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $share_buttons | `array` | The share buttons array. |

</div>

## wp-lemon/filter/entry-footer/{$post\_type}/share-buttons/post-type-name

Filters the post type name for the entry footer.

Use this if the share button sentence is vague.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $title | `string` | the post type name. |

</div>

## wp-lemon/filter/entry-footer/{$post\_type}/share-buttons/title

Filters the title for the share buttons in the entry footer for a specific post type.

`$post_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $title | `string` | the title of the entry footer. |

</div>

## wp-lemon/filter/entry-footer/share-platforms/hide-labels

Filters whether or not to show the share platforms labels in the entry footer.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $show_labels | `bool` | Whether or not to show the labels, default: true. |

</div>

## wp-lemon/filter/translations/frontend

Filters the front-end translations.

This filter is used to add or modify the translations array.
The translations is used in javascript to translate strings.

## wp-lemon/filter/block/accordion-item/allowed-blocks

Filters the allowed blocks for the accordion-item block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array` | the allowed blocks. |

</div>

## wp-lemon/filter/block/accordion/allowed-blocks

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

## wp-lemon/filter/block/carousel/allowed-blocks"

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

## wp-lemon/filter/block/image-card/allowed-blocks"

Filters the allowed blocks for the image-card block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array` | the allowed blocks. |

</div>

## wp-lemon/filter/block/node-latest/{$post\_type}/overview-button-text

Filters the overview button text for the node-latest block.

You can use this filter to change the button text on a per post type basis.

`$post_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $overview_button_text | `string` | the button text |
| $label | `string` | the post type label |

</div>

## wp-lemon/filter/block/node-latest/{$post\_type}/args

Filters the query args for the node-latest block.

You can use this filter to change the query args on a per post type basis.

`$post_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $args | `null` or `array` | the original query args |
| $post_id | `int` | the post id |

</div>

## wp-lemon/filter/block/node-latest/{$post\_type}/no-items-message

Filters the no items message for the node-latest block.

You can use this filter to change the message on a per post type basis.

`$post_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $no_items_message | `string` | the message |
| $terms | `array` | the terms |
| $term_name | `false` or `string` | the term name |
| $label | `string` | the post type label |

</div>

## wp-lemon/filter/block/node-latest/{$post\_type}/holder-classes

Filters the number of columns on lg format for the node-latest block.

You can use this filter to change the classes on a per post type basis.

`$post_type` the post type dynamically set in the block.

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

## wp-lemon/filter/block/node-latest/{$post\_type}/card-type

Filters the card type for the specific post type of the node-latest block.

You can use this filter to change the card type on a per post type basis.

`$post_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $card_name | `string` | the card name without the crd- prefix |

</div>

## wp-lemon/filter/block/node-overview/{$post\_type}/args

Filters the additional arguments for the initial query in the node-overview block.

`$post_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $args | `null` or `array` | The arguments for the query. |
| $post_id | `int` | The post ID of the block. |
| $fields | `array` | The fields of the block. |

</div>

## wp-lemon/filter/block/node-overview/{$post\_type}/select-all-text

Filters the text for the "all" option in the filter of the node-overview block.

`$post_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $all_text | `string` | The text for the select all option. |

</div>

## wp-lemon/filter/block/node-overview/{$post\_type}/holder-classes

Filters the holder classes for the cards in the node overview block.

`$post_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $holder_classes | `string` | The holder classes for the block. |

</div>

## wp-lemon/filter/block/image-sizes

Filters the image sizes for all blocks.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $image_sizes | `string` | The image sizes for the block. |

</div>

## wp-lemon/filter/block/node-overview/image-sizes

Filters the image sizes for the node overview block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $image_sizes | `string` | The image sizes for the block. |

</div>

## wp-lemon/filter/block/node-overview/{$post\_type}/image-sizes

Filters the image sizes for the node-overview block.

`$post_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $image_sizes | `string` | The image sizes for the block. |

</div>

## wp-lemon/filter/block/node-overview/{$post\_type}/card-type

Filters the card_type for a specific post type used inside the node-overview block

You can use this filter to change the card type for a specific post type.

`$post_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $card_type | `string` | The card type for the block. |

</div>

## wp-lemon/filter/block/node-overview/{$post\_type}/items

Filters the posts that are going to be displayed in the initial load of the node-overview block.

You can use this filter to add additional posts to the initial load or add an additional card in a specific spot.

`$post_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $items | `\Timber\PostCollectionInterface` or `null` | The posts that are going to be displayed in the initial load. |

</div>

## wp-lemon/filter/block/node-overview/{$post\_type}/posts-per-page

Filters the amount of posts that are are being queried for the node-overview block.

This number is used for loads after the initial load.

`$post_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $posts_to_query | `int` | The amount of posts to query for the block. |

</div>

## wp-lemon/filter/block/node-overview/{$post\_type}/load-more-text

Filters the text for the load more button in the node-overview block.

You can use this filter to change the text for the load more button for a specific post type.

`$post_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $load_more_text | `string` | The text for the load more button. |

</div>

## wp-lemon/filter/block/node-overview/{$post\_type}/no-more-items-text

Filters the text for the "no more items" message in the node-overview block.

You can use this filter to change the text for the no more items message for a specific post type.

`$post_type` the post type dynamically set in the block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $no_more_items_text | `string` | The text for the no more items message. |

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

## wp-lemon/filter/navwalker/{$page}/link-attributes

Filters the link attributes for a wp-lemon archive page.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $atts | `array` | The HTML attributes applied to the menu item's `<a>` element, empty strings are ignored. |
| $menu_item | `\WP_Post` | The current menu item. |
| $args | `\stdClass` | An object of wp_nav_menu() arguments. |
| $depth | `int` | Depth of menu ite |

</div>

**PHP**

```php
Example usage:
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

## wp-lemon/filter/navwalker/{$menu\_item\_id}/link-attributes

Filters the link attributes for a menu item based on the menu item ID.

`$menu_item_id` is the ID of the menu item.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $atts | `array` | The HTML attributes applied to the menu item's `<a>` element, empty strings are ignored. |
| $menu_item | `\WP_Post` | The current menu item. |
| $args | `\stdClass` | An object of wp_nav_menu() arguments. |
| $depth | `int` | Depth of menu ite  Example usage:  ```php function link_attributes_job($atts, $item, $args, $depth) {  $args = [    'post_type'      => 'job',    'posts_per_page' => -1,    'status'         => 'publish',  ];  $posts = \Timber\Timber::get_posts($args);  $count = count($posts);  if ($count > 0) {     $atts['data-jobs'] = $count; }    return $atts; }  add_filter('10/link-attributes', __NAMESPACE__ . '\\link_attributes_job', 10, 4); ``` |

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

## wp-lemon/filter/ajax-query/{$this->current\_action}/context

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

