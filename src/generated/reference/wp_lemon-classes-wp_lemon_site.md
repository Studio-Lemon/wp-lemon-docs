# WP\_Lemon\_Site

You will be able to retrieve this information from the context in your twig files or in your php files under the global $context variable.

<!--more-->

Here we will add an example

**PHP**

```php
my_method( 'example', false );
```

## Overview

### Methods

<div class="table-methods table-responsive">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[add_site_information()](#add_site_information)</span> | <span class="method-type"></span> | <span class="method-description">Static method to add site information from wherever you want.</span> |
| <span class="method-name">[extend_site_information()](#extend_site_information)</span> | <span class="method-type">`array`</span> | <span class="method-description">This is the main method that is overridden by the child-site class.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> $context The updated Timber context.</span></span> |
| <span class="method-name">[get_archive_page()](#get_archive_page)</span> | <span class="method-type">`array` or `false`</span> | <span class="method-description">Get archive information of singular item.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Contains ['id', 'title', 'url/link', 'status']</span></span> |
| <span class="method-name">[get_site_information()](#get_site_information)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">Get specific site information.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> $value     The value retrieved from the site information.</span></span> |
| <span class="method-name">[get_special_page()](#get_special_page)</span> | <span class="method-type">`array` or `false`</span> | <span class="method-description">Get special page information.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Contains ['id', 'title', 'url/link'] or false if key does not exist.</span></span> |
| <span class="method-name">[is_post_type()](#is_post_type)</span> | <span class="method-type"></span> | <span class="method-description">Check if the current post type is one of the given post types.</span> |

</div>


## Class Methods

### add\_site\_information()

Static method to add site information from wherever you want.

This method is internally used to check if the key already exists before adding it.

**since** 4.0

`add_site_information( string $key, mixed $value )`

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $key | `string` | The key under which this context can be accessed. |
| $value | `mixed` | The value to be stored. |

</div>

Example usage:

**PHP**

```php
protected function my_custom_method() {
  $my_custom_value = [];

  self::add_site_information('my-key', $my_custom_value);
}
```

---

### extend\_site\_information()

This is the main method that is overridden by the child-site class.

Everything returned from this method will be added to the site information if the key does not exist yet.

**since** 3.36.0

**Returns:** `array` $context The updated Timber context.

Example usage from within the child-site class:

**PHP**

```php
function extend_site_information(): array
{
   return [
       //'key' => and use your custom child method here
   ];
}
```

---

### get\_archive\_page()

Get archive information of singular item.

When a page is set as the archive page for a post type, this method will return the title and url of that page.

`get_archive_page( string|null $post_type = null )`

**Returns:** `array|false` Contains ['id', 'title', 'url/link', 'status']

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $post_type | `string` or `null` | Use this post type instead of current post type. |

</div>

Example usage:

**PHP**

```php
public function block_context($context): array {
  $news_archive = WP_Lemon_Child_Site::get_archive_page('news');

}
```

---

### get\_site\_information()

Get specific site information.

**since** 4.0

`get_site_information( string $key )`

**Returns:** `mixed` $value     The value retrieved from the site information.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $key | `string` | The key under which this context can be accessed. |

</div>

---

### get\_special\_page()

Get special page information.

Use in conjunction with the special pages filter to setup special pages and then retrieve them via this method.

**link** <https://studio-lemon.github.io/wp-lemon-docs/extend/special-pages>

**since** 5.36.0

`get_special_page( string $key )`

**Returns:** `array|false` Contains ['id', 'title', 'url/link'] or false if key does not exist.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $key | `string` | The key of the special page. |

</div>

Example usage:

**PHP**

```php
public function block_context($context): array {
  $contact_page = WP_Lemon_Child_Site::get_special_page('contact');
}
```

---

### is\_post\_type()

Check if the current post type is one of the given post types.

**since** 4.0

`is_post_type( string|array $post_type )`

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $post_type | `string` or `array` | The post type to check against. |

</div>

Example usage:

**PHP**

```php
if (self::is_post_type(['example', 'example2'])) {
// do something
}
```

---

