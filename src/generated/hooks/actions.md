# Action Hooks

## wp-lemon/action/head/meta

Fires in the head for custom meta tags.

## wp-lemon/action/body/before

Fires inside the body tag, before any content is rendered.

## wp-lemon/action/header/before

Fires before the header is rendered.

## wp-lemon/action/header/after

Fires after the header renders.

## wp-lemon/action/content/before

Fires inside the main content area, before any content is rendered.

## wp-lemon/action/content/after

Fires inside the main content area, after the main content is rendered.

## wp-lemon/action/footer/before

Fires before the footer renders.

## wp-lemon/action/footer/after

Fires after the footer renders.

## wp-lemon/action/body/after

Fires before the body tag closes.

## wp-lemon/action/block/node-latest/{$card\_type}/loop/before

Fires before the node-latest loop for a specific card type.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $card_type | `string` | The card type dynamically set in the block. |

</div>

## wp-lemon/action/block/node-latest/{$card\_type}/loop/after

Fires after the node-latest loop for a specific card type.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $card_type | `string` | The card type dynamically set in the block. |

</div>

## wp-lemon/action/block/before

Fires before any block renders.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $fields | `array` | The block fields. |
| $attributes | `array` | The block attributes. |

</div>

## wp-lemon/action/block/{$slug}/before

Fires before a specific block renders.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $fields | `array` | The block fields. |
| $attributes | `array` | The block attributes. |
| $slug | `string` | The block slug dynamically set. |

</div>

## wp-lemon/action/block/start

Fires at the start of any block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $fields | `array` | The block fields. |
| $attributes | `array` | The block attributes. |

</div>

## wp-lemon/action/block/{$slug}/start

Fires at the start of a specific block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $fields | `array` | The block fields. |
| $attributes | `array` | The block attributes. |
| $slug | `string` | The block slug dynamically set. |

</div>

## wp-lemon/action/block/end

Fires at the end of any block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $fields | `array` | The block fields. |
| $attributes | `array` | The block attributes. |

</div>

## wp-lemon/action/block/{$slug}/end

Fires at the end of a specific block.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $fields | `array` | The block fields. |
| $attributes | `array` | The block attributes. |
| $slug | `string` | The block slug dynamically set. |

</div>

## wp-lemon/action/block/after

Fires after any block renders.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $fields | `array` | The block fields. |
| $attributes | `array` | The block attributes. |

</div>

## wp-lemon/action/block/{$slug}/after

Fires after a specific block renders.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $fields | `array` | The block fields. |
| $attributes | `array` | The block attributes. |
| $slug | `string` | The block slug dynamically set. |

</div>

## wp-lemon/action/card/{$card\_type}/before

Fires before a card of a specific type renders.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $card_type | `string` | The card type dynamically set. |

</div>

## wp-lemon/action/card/{$card\_type}/after

Fires after a card of a specific type renders.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $card_type | `string` | The card type dynamically set. |

</div>

## wp-lemon/action/block/node-overview/{$card\_type}/loop/before

Fires before the node-overview loop for a specific card type.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $card_type | `string` | The card type dynamically set in the block. |

</div>

## wp-lemon/action/block/node-overview/{$card\_type}/loop/after

Fires after the node-overview loop for a specific card type.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $card_type | `string` | The card type dynamically set in the block. |

</div>

## wp-lemon/action/cookiebar/text/before

Fires before the cookie bar text.

## wp-lemon/action/cookiebar/text/after

Fires after the cookie bar text.

## wp-lemon/action/floating-buttons/before

Fires before the floating buttons render.

## wp-lemon/action/floating-buttons/after

Fires after the floating buttons render.

## wp-lemon/action/navbar/before

Fires before the navbar renders.

## wp-lemon/action/menu-toggle/before

Fires before the menu toggle button.

## wp-lemon/action/menu-toggle/after

Fires after the menu toggle button.

## wp-lemon/action/main-menu/before

Fires before the main menu renders.

## wp-lemon/action/main-menu/after

Fires after the main menu renders.

## wp-lemon/action/lang-menu/before

Fires before the language menu renders.

## wp-lemon/action/lang-menu/after

Fires after the language menu renders.

## wp-lemon/action/navbar/after

Fires after the navbar renders.

## wp-lemon/action/footer/inside/before

Fires before the footer inside content.

## wp-lemon/action/footer-widgets/before

Fires before the footer widgets.

## wp-lemon/action/footer-widgets/inside/before

Fires before the footer widgets inside content.

## wp-lemon/action/footer-widgets/inside/after

Fires after the footer widgets inside content.

## wp-lemon/action/footer-widgets/after

Fires after the footer widgets.

## wp-lemon/action/footer/inside/after

Fires after the footer inside content.

## wp-lemon/action/entry-header/{$post\_type}/title/before

Fires before the entry header title for a specific post type.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $post_type | `string` | The post type dynamically set. |

</div>

## wp-lemon/action/entry-header/{$post\_type}/title/after

Fires after the entry header title for a specific post type.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $post_type | `string` | The post type dynamically set. |

</div>

## wp-lemon/action/entry-header/{$post\_type}/tags/after

Fires after the entry header tags for a specific post type.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $post_type | `string` | The post type dynamically set. |

</div>

## wp-lemon/action/entry-header/{$post\_type}/picture/after

Fires after the entry header picture for a specific post type.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $post_type | `string` | The post type dynamically set. |

</div>

## wp-lemon/action/entry/before

Fires before the entry content.

## wp-lemon/action/entry/content/before

Fires before the entry content area.

## wp-lemon/action/entry/content/after

Fires after the entry content area.

## wp-lemon/action/entry/after

Fires after the entry content.

