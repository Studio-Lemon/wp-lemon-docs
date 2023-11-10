# Filter Hooks

## wp-lemon/filter/language-switcher

Filters the language switcher.

By using this filter you can change the output of the language switcher.

| Name | Type | Description |
| --- | --- | --- |
| $switcher | `array` | The language switcher array. |

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

## wp-lemon/filter/block/faq-highlights/

- `wp-lemon/filter/block/faq-highlights/`
- `wp-lemon/filter/block/faq-highlights/overview-button-text`

Filters the allowed blocks for the faq-highlights block.

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array` | the allowed blocks. |

## "wp-lemon/filter/block/{$this->slug}/allowed-blocks

Filters the allowed blocks for the image-card block.

| Name | Type | Description |
| --- | --- | --- |
| $blocks | `array` | the allowed blocks. |

## "wp-lemon/filter/block/node-latest/{$this->dynamic\_post\_type}/overview-button-text

Filters the allowed blocks for the faq-highlights block.

| Name | Type | Description |
| --- | --- | --- |
| $overview_button_text | `string` | The button text. |
| $label | `string` | The post type label. |

## "wp-lemon/filter/block/node-latest/{$this->dynamic\_post\_type}/args

Filters the query args for the node-latest block.

'$this->dynamic_post_type' The post type.

| Name | Type | Description |
| --- | --- | --- |
| $args | `array` or `null` | the original query args. |

## "wp-lemon/filter/block/node-latest/{$this->dynamic\_post\_type}/no-items-message

Filters the query args for the node-latest block.

'$this->dynamic_post_type' The post type.

| Name | Type | Description |
| --- | --- | --- |
| $no_items_message | `string` | The message. |
| $terms | `array` | The terms. |
| $term_name | `string` | The term name. |
| $label | `string` | The post type label. |

