# Filter Hooks

## wp-lemon/filter/phone-number/result

Filters the phone number result.

Use this filter to modify the phone number result.

| Name | Type | Description |
| --- | --- | --- |
| $result | `string[]` | The phone number result. |
| $countrycode | `int` | The country code of the phone number. |

## wp-lemon/filter/phone-number/default-format

- `wp-lemon/filter/phone-number/default-format`
- `wp-lemon/filter/phone-number/default-format`

Filters the default phone number format.

Can be one of the following:

- national (default)
- international (+31 6 12345678)
- combined (+31 (0) 6 12345678)
- localized (only if WPML is active and the current language is not the default language)

| Name | Type | Description |
| --- | --- | --- |
| $default_format | `string` | See above. |

## wp-lemon/filter/language-switcher

Filters the language switcher.

By using this filter you can change the output of the language switcher.

| Name | Type | Description |
| --- | --- | --- |
| $switcher | `array<string,mixed>` | The language switcher array. |

## wp-lemon/filter/share-context

Filters the loaded card type for the node-latest block.

| Name | Type | Description |
| --- | --- | --- |
| $shares | `array<string,mixed>` | an array of shares that can be addressed by the share partial. |

## wp-lemon/filter/socials-context

Filters the socials context.

This filter can be used to change the socials that are being outputted.

| Name | Type | Description |
| --- | --- | --- |
| $socials | `array<int` or `string,array>` | array of socials that can be addressed by the socials partial. |

## wp-lemon/filter/translations/frontend

Filters the front-end translations.

This filter is used to add or modify the translations array.
The translations is used in javascript to translate strings.

## wp-lemon/filter/block/faq-item/allowed-blocks

Filters the allowed blocks for the accordion-item block.

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array` | the allowed blocks. |

## wp-lemon/filter/block/faq/allowed-blocks

Filters the allowed blocks for the accordion block.

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array` | the allowed blocks. |

## wp-lemon/filter/block/card-grid/allowed-blocks

Filters the allowed blocks for the card grid block.

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array` | the allowed blocks. |

## "wp-lemon/filter/block/{$this->slug}/allowed-blocks

Filters the allowed blocks for the carousel block.

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array` | the allowed blocks. |

## wp-lemon/filter/block/color-block/allowed-blocks

Filters the allowed blocks for the color-block block.

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array` | the allowed blocks. |

## wp-lemon/filter/block/contact-cta/allowed-blocks

Filters the allowed blocks for the contact-cta block.

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array` | the allowed blocks. |

## wp-lemon/filter/block/image-sizes

Filters the default image sizes in blocks.

| Name | Type | Description |
| --- | --- | --- |
| $image_sizes | `string` | the default image sizes. |

## wp-lemon/filter/block/content-card/image-sizes

Filters the default image sizes in the content-card block.

| Name | Type | Description |
| --- | --- | --- |
| $image_sizes | `string` | the default image sizes. |

## wp-lemon/filter/block/content-card/fields/post-types

Filters the allowed post types to link to in the content-card block link field.

| Name | Type | Description |
| --- | --- | --- |
| $post_types | `array` | the allowed post types. |

## wp-lemon/filter/block/faq-highlights/posts-per-page

Filters the amount of posts per page for the faq-highlights block.

TODO: document the filter.

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `int` | the amount of posts per page. |

## wp-lemon/filter/block/faq-highlights/allowed-blocks

Filters the allowed blocks for the faq-highlights block.

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array` | the allowed blocks. |

## wp-lemon/filter/block/faq-highlights/overview-button-text

Filters the overview button text for the faq-highlights block.

| Name | Type | Description |
| --- | --- | --- |
| $overview_button_text | `string` | the overview button text. |

## "wp-lemon/filter/block/{$this->slug}/allowed-blocks

Filters the allowed blocks for the image-card block.

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array` | the allowed blocks. |

## "wp-lemon/filter/block/node-latest/{$this->dynamic\_post\_type}/overview-button-text

Filters the allowed blocks for the faq-highlights block.

| Name | Type | Description |
| --- | --- | --- |
| $overview_button_text | `string` | the button text |
| $label | `string` | the post type label |

## "wp-lemon/filter/block/node-latest/{$this->dynamic\_post\_type}/args

Filters the query args for the node-latest block.

'$this->dynamic_post_type' The post type.

| Name | Type | Description |
| --- | --- | --- |
| $args | `null` or `array` | the original query args |

## "wp-lemon/filter/block/node-latest/{$this->dynamic\_post\_type}/no-items-message

Filters the query args for the node-latest block.

'$this->dynamic_post_type' The post type.

| Name | Type | Description |
| --- | --- | --- |
| $no_items_message | `string` | the message |
| $terms | `array` | the terms |
| $term_name | `false` or `string` | the term name |
| $label | `string` | the post type label |

## "wp-lemon/filter/block/node-latest/{$this->dynamic\_post\_type}/holder-classes

Filters the number of columns on lg format for the node-latest block.

'$this->dynamic_post_type' The post type.

| Name | Type | Description |
| --- | --- | --- |
| $col_lg_count | `string` | the number of columns |

## wp-lemon/filter/special-pages

Filters the special pages.

This filter allows you to add or remove special pages.
You can read more about special pages in the documentation.

**link** <https://studio-lemon.github.io/wp-lemon-docs/extend/special-pages>

**since** 4.0.0 Special pages introduced.

| Name | Type | Description |
| --- | --- | --- |
| $special_pages | `array` | The special pages. |

## wp-lemon/filter/socials-order

Filters the order or add/remove social media platforms.

We use this filter to change the order of social media platforms in the footer.

| Name | Type | Description |
| --- | --- | --- |
| $social_media_platforms | `array` | An array of social media platforms. |

## wp-lemon/filter/a11y/skip-links

Filters the array of skip links.

This allows developers to add or remove skip links.

**since** 4.1.0

| Name | Type | Description |
| --- | --- | --- |
| $links | `array` | Original array of skip links. |

## wp-lemon/filter/webp-quality

Filters the quality of the webp image.

**since** 4.9.2

| Name | Type | Description |
| --- | --- | --- |
| $quality | `int` | The quality of the webp image. |

## wp-lemon/filter/blocks

Filters the blocks to load.

With this filter you can remove blocks from the parent theme.

## wp-lemon/filter/core-blocks-to-allow

Filters the allowlist of blocks that will be allowed in the editor.

This will override the block removal list and short-circuit the function.

**since** 5.8.0

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array<string,mixed>` | to allow array of core blocks that we only want to show in the editor. |
| $post_type | `string` | The current post type. Use this to remove blocks for a specific post type. |

## wp-lemon/filter/core-blocks-to-remove

Filters the block removal list.

We have a list of blocks that we do not want to show in the editor, this filter allows us to remove blocks from that list.

| Name | Type | Description |
| --- | --- | --- |
| $post_type | `string` | The current post type. Use this to remove blocks for a specific post type. |

## wp-lemon/filter/model/acf-fields/job

Filters the job post type fields registered with ACF.

**since** 3.11.4

| Name | Type | Description |
| --- | --- | --- |
| $person_fields | `\StoutLogic\AcfBuilder\FieldsBuilder` | The fields for the job. |

## wp-lemon/filter/model/acf-fields/person

Filters the person post type fields registered with ACF.

**since** 3.11.4

| Name | Type | Description |
| --- | --- | --- |
| $person_fields | `\StoutLogic\AcfBuilder\FieldsBuilder` | The fields for the job. |

## wp-lemon/filter/model/acf-fields/menu

Filters the menu fields registered with ACF.

**since** 3.11.4

| Name | Type | Description |
| --- | --- | --- |
| $menu_fields | `\StoutLogic\AcfBuilder\FieldsBuilder` | The fields for the menu. |

