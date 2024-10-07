# Functions

<div class="table-methods table-responsive">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[add_spaces_to_phonenumber()](#add_spaces_to_phonenumber)</span> | <span class="method-type">`string`</span> | <span class="method-description">Markup a phone number<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> the filtered phone number.</span></span> |
| <span class="method-name">[cache_clearer()](#cache_clearer)</span> | <span class="method-type">`void`</span> | <span class="method-description">Cache clearer for spinupwp and wp-rocket.</span> |
| <span class="method-name">[format_phone_number()](#format_phone_number)</span> | <span class="method-type">`string[]` or `false`</span> | <span class="method-description">Function to format phone numbers throughout our template.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Array with information about the phone number.</span></span> |
| <span class="method-name">[get_archive_page()](#get_archive_page)</span> | <span class="method-type">`int` or `false`</span> | <span class="method-description">Checks if posttype has custom page archive.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> the page id or false if not found.</span></span> |
| <span class="method-name">[get_attachment_info()](#get_attachment_info)</span> | <span class="method-type">`array` or `false`</span> | <span class="method-description">Get the attachment file info.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> The attachment file info or false if not found.</span></span> |
| <span class="method-name">[get_constant()](#get_constant)</span> | <span class="method-type">`mixed`</span> | <span class="method-description">Get constant value.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> the value of the constant or false if not found.</span></span> |
| <span class="method-name">[get_fluent_form()](#get_fluent_form)</span> | <span class="method-type">`string`</span> | <span class="method-description">Return a fluent form.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> The html of the form.</span></span> |
| <span class="method-name">[get_language_switcher()](#get_language_switcher)</span> | <span class="method-type">`false` or `array`</span> | <span class="method-description">Collects all languages and returns them as an array for twig language switcher.</span> |
| <span class="method-name">[get_share_platforms()](#get_share_platforms)</span> | <span class="method-type">`array`</span> | <span class="method-description">Builds the sharing context.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Array of shares that can be addressed by the share macro.</span></span> |
| <span class="method-name">[get_socials()](#get_socials)</span> | <span class="method-type">`array`</span> | <span class="method-description">Builds the social context.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Array of platforms that can be addressed by the share macro.</span></span> |
| <span class="method-name">[get_svg_icon()](#get_svg_icon)</span> | <span class="method-type">`string` or `false`</span> | <span class="method-description">Retrieve a SVG icon.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> The svg icon or false if not found.</span></span> |
| <span class="method-name">[get_svg_image()](#get_svg_image)</span> | <span class="method-type">`string` or `false`</span> | <span class="method-description">Get SVG image contents.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> the attachment image svg data or false if not found.</span></span> |
| <span class="method-name">[is_post_type()](#is_post_type)</span> | <span class="method-type"></span> | <span class="method-description">Check if the current post type is one of the given post types.</span> |
| <span class="method-name">[log_message()](#log_message)</span> | <span class="method-type">`void`</span> | <span class="method-description">Adds a log message to a specific log file in the website base folder.</span> |
| <span class="method-name">[post_type_name()](#post_type_name)</span> | <span class="method-type">`string` or `false`</span> | <span class="method-description">Get singular name of a posttype.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> The singular name.</span></span> |
| <span class="method-name">[textarea_to_array()](#textarea_to_array)</span> | <span class="method-type">`array` or `false`</span> | <span class="method-description">Text helper to convert a textarea to an array.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> The array of text or false if empty.</span></span> |

</div>

### get\_constant()

Get constant value.

This function will return the value of a constant if it is defined.

`get_constant( string $constant )`

**Returns:** `mixed` the value of the constant or false if not found.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $constant | `string` | the constant to get the value for. |

</div>

---

### post\_type\_name()

Get singular name of a posttype.

`post_type_name( string $post_type, string $type = null )`

**Returns:** `string|false` The singular name.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $post_type | `string` | The post type to check. |
| $type | `string` | The type of name to return, either 'plural' or 'singular'. |

</div>

---

### get\_fluent\_form()

Return a fluent form.

**see** WP_Lemon\API\fluentFormRender function

`get_fluent_form( string|int $id, string $theme = '', string $type = 'classic' )`

**Returns:** `string` The html of the form.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $id | `string` or `int` | the id of the form. |
| $theme | `string` | the theme of the form, use 'ffs_inherit_theme' to inherit wp-lemon theme styling. |
| $type | `string` | the type of the form, can be 'classic' or 'conversational'. |

</div>

---

### log\_message()

Adds a log message to a specific log file in the website base folder.

You can use this function in your classes and functions to log errors and other messages.

**since** 3.19.5

`log_message( string $prefix, string|array|object|null|bool|\WP_Error $message, string $filename = 'application' )`

**Returns:** `void` 

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $prefix | `string` | The prefix of the log message. |
| $message | `string` or `array` or `object` or `null` or `bool` or `\WP_Error` | The message to log. |
| $filename | `string` | The filename of the log file. |

</div>

---

### format\_phone\_number()

Function to format phone numbers throughout our template.

**since** 3.17.0

`format_phone_number( string|int $number )`

**Returns:** `string[]|false` Array with information about the phone number.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $number | `string` or `int` | The actual phone number. |

</div>

---

### get\_archive\_page()

Checks if posttype has custom page archive.

`get_archive_page( string $posttype )`

**Returns:** `int|false` the page id or false if not found.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $posttype | `string` | the posttype we are checking. |

</div>

---

### get\_language\_switcher()

Collects all languages and returns them as an array for twig language switcher.

**since** 3.18.0

**Returns:** `false|array` 

---

### get\_svg\_image()

Get SVG image contents.

`get_svg_image( int $attachment_id )`

**Returns:** `string|false` the attachment image svg data or false if not found.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $attachment_id | `int` | The attachment ID. |

</div>

---

### add\_spaces\_to\_phonenumber()

Markup a phone number

This function can be used to add a specific pattern of spaces to a phone number.

**since** 3.33.1

`add_spaces_to_phonenumber( string $phone, array $pattern = [2, 2, 2, 2] )`

**Returns:** `string` the filtered phone number.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $phone | `string` | the phone number we want to filter. |
| $pattern | `int[]` | the spacing pattern. You can input an array of numbers to add spaces after a specific amount of characters. |

</div>

---

### get\_share\_platforms()

Builds the sharing context.

This sets up the share content that is being used in the sharing macro.

`get_share_platforms( object|int|null $post = null )`

**Returns:** `array` Array of shares that can be addressed by the share macro.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $post | `object` or `int` or `null` | the Post object or post id to get the share content for. |

</div>

---

### get\_socials()

Builds the social context.

This sets up the social content that is being used in the social buttons macro.

`get_socials( array<string,mixed> $platforms )`

**Returns:** `array` Array of platforms that can be addressed by the share macro.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $platforms | `array<string,mixed>` | platforms in an order we want to output the socials. |

</div>

---

### is\_post\_type()

Check if the current post type is one of the given post types.

**since** 4.4.0

`is_post_type( string|array $post_type )`

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $post_type | `string` or `string[]` | The post type to check against. |

</div>

Example usage:

**PHP**

```php
if (is_post_type(['example', 'example2'])) {
// do something
}
```

---

### cache\_clearer()

Cache clearer for spinupwp and wp-rocket.

This function will clear the cache for the current post or the entire site.

**since** 4.8.0

`cache_clearer( int|null $post_id = null )`

**Returns:** `void` 

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $post_id | `int` or `null` | The post id to clear the cache for. |

</div>

---

### get\_attachment\_info()

Get the attachment file info.

**since** 5.4.0

`get_attachment_info( int|null $attachment_id )`

**Returns:** `array|false` The attachment file info or false if not found.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $attachment_id | `int` or `null` | The attachment id to get the info for. |

</div>

---

### get\_svg\_icon()

Retrieve a SVG icon.

**since** 5.7.0

`get_svg_icon( string|null $filename )`

**Returns:** `string|false` The svg icon or false if not found.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $filename | `string` or `null` | The filename of the icon. |

</div>

---

### textarea\_to\_array()

Text helper to convert a textarea to an array.

This can be used to convert a textarea ACF field with line breaks to an array.
So you don't have to create a repeater field.

**since** 5.12.3

`textarea_to_array( string $text )`

**Returns:** `array|false` The array of text or false if empty.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $text | `string` | The text to convert. |

</div>

---

<div class="table-methods table-responsive">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[adjacent_post_info()](#adjacent_post_info)</span> | <span class="method-type">`array` or `false`</span> | <span class="method-description">Get next or previous post when available, otherwise get the first or last post.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Array with post id, title and url.</span></span> |
| <span class="method-name">[archive_query()](#archive_query)</span> | <span class="method-type">`\Timber\PostCollectionInterface` or `null`</span> | <span class="method-description">Archive query that queries an x amount of posts of a specific post type.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Returns collection of posts.</span></span> |
| <span class="method-name">[get_total_posts()](#get_total_posts)</span> | <span class="method-type">`array`</span> | <span class="method-description">Count function to use in relation with the above archive_query() Counts total amount of posts that can be queried in our ajax load more archives.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Array with context data to be added to the archive.twig.</span></span> |
| <span class="method-name">[latest_items_query()](#latest_items_query)</span> | <span class="method-type">`\Timber\PostCollectionInterface` or `null`</span> | <span class="method-description">Context function that queries the latest x amount of posts.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Returns collection of posts.</span></span> |
| <span class="method-name">[next_post_info()](#next_post_info)</span> | <span class="method-type">`array` or `false`</span> | <span class="method-description">Get next post when available, otherwise get the first post.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Array with post id, title and url.</span></span> |
| <span class="method-name">[other_items_query()](#other_items_query)</span> | <span class="method-type">`\Timber\PostCollectionInterface` or `null`</span> | <span class="method-description">Context function that queries other ID's of a specific post type on a singular template.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Returns collection of posts.</span></span> |
| <span class="method-name">[previous_post_info()](#previous_post_info)</span> | <span class="method-type">`array` or `false`</span> | <span class="method-description">Get previous post when available, otherwise get the last post.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Array with post id, title and url.</span></span> |
| <span class="method-name">[specific_items_query()](#specific_items_query)</span> | <span class="method-type">`\Timber\PostCollectionInterface` or `null`</span> | <span class="method-description">Context function that queries specific ID's from a specific posttype<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Returns collection of posts.</span></span> |
| <span class="method-name">[taxonomy_post_collection()](#taxonomy_post_collection)</span> | <span class="method-type">`array`</span> | <span class="method-description">Returns a collection of posts based on a taxonomy and post type.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Returns an array with (bool) categories, (nested-array) collection, (int) amount and (string) debug.</span></span> |

</div>

### latest\_items\_query()

Context function that queries the latest x amount of posts.

Does have a $predefined_posts param to filter which post to query.

`latest_items_query( string $type, int $amount = 2, array $predefined_posts = null, string $taxonomy = null, int[] $term_ids = null, array<string,mixed>|bool|null $extra_args = null )`

**Returns:** `\Timber\PostCollectionInterface|null` Returns collection of posts.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $type | `string` | which post type we want to query. |
| $amount | `int` | Amount of posts we want to query. |
| $predefined_posts | `array<string,mixed>` | Array with predefined post ids. |
| $taxonomy | `string` | name of the taxonomy we want to query. |
| $term_ids | `int[]` | Array of term ids which we want to query. |
| $extra_args | `array<string,mixed>` or `bool` or `null` | Extra arguments we want to mix in. |

</div>

---

### other\_items\_query()

Context function that queries other ID's of a specific post type on a singular template.

Excludes current post.

`other_items_query( string $type, int $amount, int $current_id, string $taxonomy = null, array $terms = [] )`

**Returns:** `\Timber\PostCollectionInterface|null` Returns collection of posts.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $type | `string` | which post type we want to query. |
| $amount | `int` | Amount of posts we want to query. |
| $current_id | `int` | which ID we want to exclude. |
| $taxonomy | `string` | Name of the taxonomy to query. |
| $terms | `array` | ID of the term to query inside $taxonomy. |

</div>

---

### specific\_items\_query()

Context function that queries specific ID's from a specific posttype

`specific_items_query( string $type, int $amount = -1, array $post_ids = [] )`

**Returns:** `\Timber\PostCollectionInterface|null` Returns collection of posts.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $type | `string` | Which posttype we want to query. |
| $amount | `int` | Amount of posts we want to query. |
| $post_ids | `array` | The posts id's to query. |

</div>

---

### archive\_query()

Archive query that queries an x amount of posts of a specific post type.

Uses the page template php file and archive.twig file to display the items and setup context for the ajax call.
Uses archive.js for the ajax call
Uses archive-ajax.php to output the new items.

`archive_query( string $type, int $amount = -1, string $taxonomy = null, array $terms = [], array $extra_args = null )`

**Returns:** `\Timber\PostCollectionInterface|null` Returns collection of posts.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $type | `string` | which posttype we want to query. |
| $amount | `int` | Amount of posts we want to query. |
| $taxonomy | `string` | Name of the taxonomy to query. |
| $terms | `array` | ID of the term to query inside $taxonomy. |
| $extra_args | `array` | Extra arguments we want to mix in. |

</div>

---

### get\_total\_posts()

Count function to use in relation with the above archive_query()
Counts total amount of posts that can be queried in our ajax load more archives.

`get_total_posts( string $post_type, int $loaded_posts = '', string $taxonomy = null, array $term = null, array $extra_args = null )`

**Returns:** `array` Array with context data to be added to the archive.twig.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $post_type | `string` | which posttype we want to query. |
| $loaded_posts | `int` | how many posts there are currently loaded. |
| $taxonomy | `string` | the taxonomy we want to query if any. |
| $term | `array` | the terms we want to query if any. |
| $extra_args | `array` | Extra arguments we want to mix in. |

</div>

---

### adjacent\_post\_info()

Get next or previous post when available, otherwise get the first or last post.

`adjacent_post_info( string $direction, string|null $orderby = null )`

**Returns:** `array|false` Array with post id, title and url.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $direction | `string` | Direction to query. Can be next or previous. |
| $orderby | `string` or `null` | Orderby parameter for the query. |

</div>

---

### next\_post\_info()

Get next post when available, otherwise get the first post.

**since** 3.31.3

`next_post_info( string|null $orderby = null )`

**Returns:** `array|false` Array with post id, title and url.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $orderby | `string` or `null` | Orderby parameter for the query. |

</div>

---

### previous\_post\_info()

Get previous post when available, otherwise get the last post.

**since** 3.31.3

`previous_post_info( string|null $orderby = null )`

**Returns:** `array|false` Array with post id, title and url.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $orderby | `string` or `null` | Orderby parameter for the query. |

</div>

---

### taxonomy\_post\_collection()

Returns a collection of posts based on a taxonomy and post type.

Use the 'collection' key to first loop through the main categories which holds
name, slug, id, description and posts and then run a nested loop through the posts.

```twig
  <nav class="post-overview__nav">
      {% for category in post.collection %}
              <a class="post-overview__navbtn" href="#{{ category.slug }}">{{ category.name }}</a>
      {% endfor %}
  </nav>
  <div class="post-overview__content">
          {% for category in post.collection %}
              <div class="post-overview__category" id="{{ category.slug }}">
                  <h2 class="post-overview__categorytitle">{{ category.name }}</h2>
                  <div class="post-overview__categorycontent row archive-content">
                          {% set index = 1 %}
                          {% for post in category.posts %}
                              {% set index = index == 3 + 1 ? 1 : index %}
                              {% set delay = 100 * index %}
                              {% include [
                                  'components/cards/crd-' ~ card_type ~ '.twig',
                                  'components/cards/crd-default.twig'
                              ] %}
                          {% endfor %}
                  </div>
              </div>
          {% endfor %}
  </div>

```

**since** 4.9.0

`taxonomy_post_collection( string $taxonomy, string $post_type )`

**Returns:** `array` Returns an array with (bool) categories, (nested-array) collection, (int) amount and (string) debug.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $taxonomy | `string` | The taxonomy to query. |
| $post_type | `string` | The post type to query. |

</div>

---

<div class="table-methods table-responsive">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[html_attributes()](#html_attributes)</span> | <span class="method-type"></span> | <span class="method-description">Function to add html attributes to a html element.</span> |
| <span class="method-name">[is_preview()](#is_preview)</span> | <span class="method-type">`bool`</span> | <span class="method-description">Function to check if we are in preview mode.</span> |

</div>

### html\_attributes()

Function to add html attributes to a html element.

TODO: Finish this function.

**since** 4.8.2

`html_attributes( array $attributes = [] )`

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $attributes | `array` | The attributes we want to add. |

</div>

---

### is\_preview()

Function to check if we are in preview mode.

Primarily used in macros.

**since** 5.6.0

**Returns:** `bool` 

---

