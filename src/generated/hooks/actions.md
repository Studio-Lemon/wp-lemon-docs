# Action Hooks

## wp-lemon/action/head/meta

Fires in the head for custom meta tags.

**Hooked** 

<div class="table-hooked table-responsive">

| Name | Priority | Description |
| --- | --- | --- |
| <span class="hook-name"><code>WP_Lemon\Controllers\Analytics\head_statistics</code></span> | <span class="hook-priority">10</span> | <span class="hook-description">No description provided</span> |
| <span class="hook-name"><code>WP_Lemon\Controllers\Analytics\head_analytics</code></span> | <span class="hook-priority">11</span> | <span class="hook-description">No description provided</span> |
| <span class="hook-name"><code>WP_Lemon\Controllers\A11y\skip_links</code></span> | <span class="hook-priority">10</span> | <span class="hook-description">Outputs the skip links</span> |


</div>

## wp-lemon/action/body/before

Fires inside the body tag, before any content is rendered.

**Hooked** 

<div class="table-hooked table-responsive">

| Name | Priority | Description |
| --- | --- | --- |
| <span class="hook-name"><code>WP_Lemon\Controllers\Analytics\body_open_analytics</code></span> | <span class="hook-priority">9</span> | <span class="hook-description">Outputs the analytics code right after the body tag opens</span> |
| <span class="hook-name"><code>WP_Lemon\Controllers\A11y\skip_links</code></span> | <span class="hook-priority">10</span> | <span class="hook-description">Outputs the skip links</span> |
| <span class="hook-name"><code>WP_Lemon\Controllers\A11y\a11y_toolbar</code></span> | <span class="hook-priority">10</span> | <span class="hook-description">Outputs the accessibility toolbar</span> |
| <span class="hook-name"><code>WP_Lemon\Controllers\Analytics\add_cookiebar</code></span> | <span class="hook-priority">11</span> | <span class="hook-description">Outputs the cookie bar, if enabled</span> |


</div>

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

**Hooked** 

<div class="table-hooked table-responsive">

| Name | Priority | Description |
| --- | --- | --- |
| <span class="hook-name"><code>WP_Lemon\Controllers\add_contact_buttons</code></span> | <span class="hook-priority">10</span> | <span class="hook-description">Outputs the contact buttons, if enabled</span> |


</div>

## wp-lemon/action/body/after

Fires before the body tag closes.

## wp-lemon/action/block/node-latest/{$card\_type}/loop/before

Fires before the node-latest loop for a specific card type.

`$card_type` The card type dynamically set in the block.

## wp-lemon/action/block/node-latest/{$card\_type}/loop/after

Fires after the node-latest loop for a specific card type.

`$card_type` The card type dynamically set in the block.

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

`$slug` The block slug dynamically set.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $fields | `array` | The block fields. |
| $attributes | `array` | The block attributes. |

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

`$slug` The block slug dynamically set.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $fields | `array` | The block fields. |
| $attributes | `array` | The block attributes. |

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

`$slug` The block slug dynamically set.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $fields | `array` | The block fields. |
| $attributes | `array` | The block attributes. |

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

`$slug` The block slug dynamically set.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $fields | `array` | The block fields. |
| $attributes | `array` | The block attributes. |

</div>

## wp-lemon/action/card/{$card\_type}/before

Fires before a card of a specific type renders.

`$card_type` The card type dynamically set.

## wp-lemon/action/card/{$card\_type}/after

Fires after a card of a specific type renders.

`$card_type` The card type dynamically set.

## wp-lemon/action/block/node-overview/{$card\_type}/loop/before

Fires before the node-overview loop for a specific card type.

`$card_type` The card type dynamically set.

## wp-lemon/action/block/node-overview/{$card\_type}/loop/after

Fires after the node-overview loop for a specific card type.

`$card_type` The card type dynamically set in the block.

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

`$post_type` The post type dynamically set.

## wp-lemon/action/entry-header/{$post\_type}/title/after

Fires after the entry header title for a specific post type.

`$post_type` The post type dynamically set.

## wp-lemon/action/entry-header/{$post\_type}/tags/after

Fires after the entry header tags for a specific post type.

`$post_type` The post type dynamically set.

## wp-lemon/action/entry-header/{$post\_type}/picture/after

Fires after the entry header picture for a specific post type.

`$post_type` The post type dynamically set.

## wp-lemon/action/entry/before

Fires before the entry content.

## wp-lemon/action/entry/content/before

Fires before the entry content area.

## wp-lemon/action/entry/content/after

Fires after the entry content area.

## wp-lemon/action/entry/after

Fires after the entry content.

