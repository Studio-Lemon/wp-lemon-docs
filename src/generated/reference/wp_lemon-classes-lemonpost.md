# LemonPost

This class is used to extend the Timber Post class to add custom methods and properties.

<!--more-->

Here we will add an example

**PHP**

```php
my_method( 'example', false );
```

## Overview

*This class extends `Timber\Post`*  
  

### Methods

<div class="table-methods table-responsive">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[get_archive_link()](#get_archive_link)</span> | <span class="method-type">`array` or `false`</span> | <span class="method-description">Method to get the archive link for the post type.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> The archive link.</span></span> |
| <span class="method-name">[get_excerpt()](#get_excerpt)</span> | <span class="method-type">`string`</span> | <span class="method-description">Custom excerpt.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Returns the excerpt.</span></span> |
| <span class="method-name">[get_other_items()](#get_other_items)</span> | <span class="method-type">`\Timber\PostCollectionInterface` or `null`</span> | <span class="method-description">Method to get other post items.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> The other items.</span></span> |

</div>


## Class Methods

### get\_archive\_link()

Method to get the archive link for the post type.

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

`get_other_items( int $number )`

**Returns:** `\Timber\PostCollectionInterface|null` The other items.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $number | `int` | The number of items to get. |

</div>

---

