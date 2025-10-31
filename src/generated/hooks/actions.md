# Action Hooks

## wp-lemon/action/head/meta

Fires in the head for custom meta tags.

**see** partials/head.twig

**Hooked** 

<div class="table-hooked table-responsive">

| Name | Priority | Description |
| --- | --- | --- |
| <span class="hook-name"><code>WP_Lemon\Controllers\Analytics\head_statistics</code></span> | <span class="hook-priority">10</span> | <span class="hook-description">Outputs the statistics code, if enabled</span> |
| <span class="hook-name"><code>WP_Lemon\Controllers\Analytics\head_analytics</code></span> | <span class="hook-priority">10</span> | <span class="hook-description">Outputs the analytics meta tags, if enabled</span> |
| <span class="hook-name"><code>WP_Lemon\Controllers\A11y\skip_links</code></span> | <span class="hook-priority">10</span> | <span class="hook-description">Outputs the skip links</span> |


</div>

## wp-lemon/action/body/before

Fires inside the body tag, before any content is rendered.

**see** layouts/app.twig

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

**see** layouts/app.twig

## wp-lemon/action/header/inside/before

Fires before the navbar renders.

**see** partials/header.twig

## wp-lemon/action/header/menu-toggle/before

Fires before the menu toggle button.

**see** partials/header.twig

## wp-lemon/action/header/menu-toggle/after

Fires after the menu toggle button.

**see** partials/header.twig

## wp-lemon/action/header/main-menu/before

Fires before the main menu renders.

**see** partials/header.twig

## wp-lemon/action/header/main-menu/after

Fires after the main menu renders in the navbar.

**see** partials/header.twig

## wp-lemon/action/header/lang-menu/before

Fires before the language menu renders inside the navbar.

**see** partials/header.twig

## wp-lemon/action/header/lang-menu/after

Fires after the language menu renders.

**see** partials/header.twig

## wp-lemon/action/header/inside/after

Fires after the navbar renders.

**see** partials/header.twig

## wp-lemon/action/header/after

Fires after the header renders.

**see** layouts/app.twig

## wp-lemon/action/content/before

Fires inside the main content area, before any content is rendered.

Also rendered outside the entry div

**see** layouts/app.twig

## wp-lemon/action/content/after

Fires inside the main content area, after the main content is rendered.

Also rendered outside the entry div

**see** layouts/app.twig

## wp-lemon/action/footer/before

Fires before the footer renders.

**see** layouts/app.twig

## wp-lemon/action/footer/after

Fires after the footer renders.

**see** layouts/app.twig

**Hooked** 

<div class="table-hooked table-responsive">

| Name | Priority | Description |
| --- | --- | --- |
| <span class="hook-name"><code>WP_Lemon\Controllers\add_contact_buttons</code></span> | <span class="hook-priority">10</span> | <span class="hook-description">Outputs the contact buttons, if enabled</span> |


</div>

## wp-lemon/action/body/after

Fires before the body tag closes.

**see** layouts/app.twig

## wp-lemon/action/block/node-latest/{$card\_type}/loop/before

Fires before the node-latest loop for a specific card type.

`$card_type` The card type dynamically set in the block.

**see** blocks/node-latest/node-latest.twig

## wp-lemon/action/block/node-latest/{$card\_type}/loop/after

Fires after the node-latest loop for a specific card type.

`$card_type` The card type dynamically set in the block.

**see** blocks/node-latest/node-latest.twig

## wp-lemon/action/block/before

Fires before any block renders.

**see** layouts/block-wrap.twig

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $fields | `array` | The block fields. |
| $attributes | `array` | The block attributes. |

</div>

## wp-lemon/action/block/{$slug}/before

Fires before a specific block renders.

`$slug` The block slug dynamically set.

**see** layouts/block-wrap.twig

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $fields | `array` | The block fields. |
| $attributes | `array` | The block attributes. |

</div>

## wp-lemon/action/block/start

Fires at the start of any block, right after the opening div.

**see** layouts/block-wrap.twig

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $fields | `array` | The block fields. |
| $attributes | `array` | The block attributes. |

</div>

## wp-lemon/action/block/{$slug}/start

Fires at the start of a specific block, right after the opening div.

`$slug` The block slug dynamically set.

**see** layouts/block-wrap.twig

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $fields | `array` | The block fields. |
| $attributes | `array` | The block attributes. |

</div>

## wp-lemon/action/block/end

Fires at the end of any block, just before the closing tag.

**see** layouts/block-wrap.twig

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $fields | `array` | The block fields. |
| $attributes | `array` | The block attributes. |

</div>

## wp-lemon/action/block/{$slug}/end

Fires at the end of a specific block just before the closing tag.

`$slug` The block slug dynamically set.

**see** layouts/block-wrap.twig

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $fields | `array` | The block fields. |
| $attributes | `array` | The block attributes. |

</div>

## wp-lemon/action/block/after

Fires after any block renders.

**see** layouts/block-wrap.twig

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $fields | `array` | The block fields. |
| $attributes | `array` | The block attributes. |

</div>

## wp-lemon/action/block/{$slug}/after

Fires after a specific block renders.

This way you can add additional dynamic content

`$slug` The block slug dynamically set.

**see** block-wrap.twig

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $fields | `array` | The block fields. |
| $attributes | `array` | The block attributes. |

</div>

**PHP**

```php
function render_hero_banner($fields)
{
 if (isset($fields['hide_banner']) && true == $fields['hide_banner']) {
     return;
 }
 echo block_template_part('banner');

}
add_action('wp-lemon/action/block/hero-image/after', __NAMESPACE__ . '\render_hero_banner', 10, 1);
```

## wp-lemon/action/card/{$card\_type}/before

Fires before a card of a specific type renders.

`$card_type` The card type dynamically set.

**see** components/cards/crd-wrap.twig

## wp-lemon/action/card/{$card\_type}/after

Fires after a card of a specific type renders.

`$card_type` The card type dynamically set.

**see** components/cards/crd-wrap.twig

## wp-lemon/action/block/node-overview/{$card\_type}/loop/before

Fires before the node-overview loop for a specific card type.

`$card_type` The card type dynamically set.

**see** components/archive-loop.twig

## wp-lemon/action/block/node-overview/{$card\_type}/loop/after

Fires after the node-overview loop for a specific card type.

`$card_type` The card type dynamically set in the block.

**see** components/archive-loop.twig

## wp-lemon/action/cookiebar/text/before

Fires before the cookie bar text.

**see** partials/cookiebar.twig

## wp-lemon/action/cookiebar/text/after

Fires after the cookie bar text.

**see** partials/cookiebar.twig

## wp-lemon/action/floating-buttons/before

Fires before the floating buttons render.

**see** partials/contact-buttons.twig

## wp-lemon/action/floating-buttons/after

Fires after the floating buttons render.

**see** partials/contact-buttons.twig

## wp-lemon/action/footer/inside/before

Fires before the footer inside content.

**see** partials/footer.twig

## wp-lemon/action/footer-widgets/before

Fires before the footer widgets.

**see** partials/footer.twig

## wp-lemon/action/footer-widgets/inside/before

Fires before the footer widgets inside content.

Use this to insert additional widgets for example.

**see** partials/footer.twig

## wp-lemon/action/footer-widgets/inside/after

Fires after the footer widgets inside content.

Use this to insert additional widgets for example.

**see** partials/footer.twig

## wp-lemon/action/footer-widgets/after

Fires after the footer widgets.

**see** partials/footer.twig

## wp-lemon/action/footer/inside/after

Fires after the footer inside content.

**see** partials/footer.twig

## wp-lemon/action/entry-header/{$post\_type}/title/before

Fires before the entry header title for a specific post type.

`$post_type` The post type dynamically set.

**see** partials/entry-header.twig

## wp-lemon/action/entry-header/{$post\_type}/title/after

Fires after the entry header title for a specific post type.

`$post_type` The post type dynamically set.

**see** partials/entry-header.twig

## wp-lemon/action/entry-header/{$post\_type}/tags/after

Fires after the entry header tags for a specific post type.

`$post_type` The post type dynamically set.

**see** partials/entry-header.twig

## wp-lemon/action/entry-header/{$post\_type}/picture/after

Fires after the entry header picture for a specific post type.

`$post_type` The post type dynamically set.

**see** partials/entry-header.twig

## wp-lemon/action/entry/before

Fires before the entry content.

**see** templates/index.twig for example

## wp-lemon/action/entry/content/before

Fires before the entry content area.

**see** templates/index.twig for example

## wp-lemon/action/entry/content/after

Fires after the entry content area.

**see** templates/index.twig for example

## wp-lemon/action/entry/after

Fires after the entry content.

**see** templates/index.twig for example

