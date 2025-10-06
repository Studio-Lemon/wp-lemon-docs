# LemonPost

All custom post types will use this class as a base class unless you specifically create a new class that does not extend this class.

This class is used to extend the Timber Post class to add supporting methods for your post types.

<!--more-->

## Overview

*This class extends `Timber\Post`*  
  

### Methods

<div class="table-methods table-responsive">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[get_archive_page()](#get_archive_page)</span> | <span class="method-type">`array` or `false`</span> | <span class="method-description">Method to get the archive page for the post type.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> The archive link.</span></span> |
| <span class="method-name">[get_excerpt()](#get_excerpt)</span> | <span class="method-type">`string`</span> | <span class="method-description">Custom excerpt.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Returns the excerpt.</span></span> |
| <span class="method-name">[get_other_items()](#get_other_items)</span> | <span class="method-type">`\Timber\PostCollectionInterface` or `array`</span> | <span class="method-description">Method to get other post items.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> The other items.</span></span> |

</div>


## Class Methods

### get\_archive\_page()

Method to get the archive page for the post type.

**Returns:** `array|false` The archive link.

---

### get\_excerpt()

Custom excerpt.

This method if a wrapper around the excerpt method.
It allows you to get a custom excerpt for the post with predefined settings.

In case you have an empty excerpt, please add your custom blocks that are most likely used on the top of the page to the the excerpt_allowed_wrapper_blocks filter .

TODO:  Use this function inside our twig templates and deprecated the lemon_excerpt function inside Twig files.

`get_excerpt( string|int $length = 100 )`

**Returns:** `string` Returns the excerpt.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $length | `string` or `int` | Amount of characters, if -1 all characters are returned. |

</div>

---

### get\_other\_items()

Method to get other post items.

`get_other_items( int $number, string $taxonomy = null, array $terms = [] )`

**Returns:** `\Timber\PostCollectionInterface|array` The other items.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $number | `int` | The number of items to get. |
| $taxonomy | `string` | Name of the taxonomy to query. |
| $terms | `array` | ID of the term to query inside $taxonomy. |

</div>

**Twig**

```twig
{% include 'components/other-items.twig' with {
  more: {
       title: __('Bekijk gerelateerde vacatures', 'wp-lemon-child'),
       items: post.get_other_items(2, 'category', [12,34]),
       classes: ['section'],
       button: false
  },
 card_type: 'news',
 link: true
} %}
```

---

