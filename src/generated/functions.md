# Functions

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[add_spaces_to_phonenumber()](#add_spaces_to_phonenumber)</span> | <span class="method-type">`string`</span> | <span class="method-description">Markup a phone number<br><br><span class="method-return"><span class="method-return-label">Returns:</span> the filtered phone number.</span></span> |
| <span class="method-name">[cache_clearer()](#cache_clearer)</span> | <span class="method-type">`void`</span> | <span class="method-description">Cache clearer for spinupwp and wp-rocket.</span> |
| <span class="method-name">[format_phone_number()](#format_phone_number)</span> | <span class="method-type">`string[]` or `false`</span> | <span class="method-description">Function to format phone numbers throughout our template.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Array with information about the phone number.</span></span> |
| <span class="method-name">[get_archive_page()](#get_archive_page)</span> | <span class="method-type">`int` or `false`</span> | <span class="method-description">Checks if posttype has custom page archive.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> the page id or false if not found.</span></span> |
| <span class="method-name">[get_fluent_form()](#get_fluent_form)</span> | <span class="method-type">`string`</span> | <span class="method-description">Return a fluent form.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The html of the form.</span></span> |
| <span class="method-name">[get_language_switcher()](#get_language_switcher)</span> | <span class="method-type">`false` or `array`</span> | <span class="method-description">Collects all languages and returns them as an array for twig language switcher.</span> |
| <span class="method-name">[get_share_platforms()](#get_share_platforms)</span> | <span class="method-type">`array`</span> | <span class="method-description">Builds the sharing context.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Array of shares that can be addressed by the share macro.</span></span> |
| <span class="method-name">[get_socials()](#get_socials)</span> | <span class="method-type">`array`</span> | <span class="method-description">Builds the social context.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Array of platforms that can be addressed by the share macro.</span></span> |
| <span class="method-name">[get_svg_image()](#get_svg_image)</span> | <span class="method-type">`string` or `false`</span> | <span class="method-description">Get SVG image contents.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> the attachment image svg data or false if not found.</span></span> |
| <span class="method-name">[is_post_type()](#is_post_type)</span> | <span class="method-type">`bool`</span> | <span class="method-description">Check if the current post type is one of the given post types.</span> |
| <span class="method-name">[log_message()](#log_message)</span> | <span class="method-type">`void`</span> | <span class="method-description">Adds a log message to a specific log file in the website base folder.</span> |
| <span class="method-name">[post_type_name()](#post_type_name)</span> | <span class="method-type">`string` or `false`</span> | <span class="method-description">Get singular name of a posttype.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> The singular name.</span></span> |

</div>

### post\_type\_name()

Get singular name of a posttype.

`post_type_name( string $post_type, string $type = null )`

**Returns:** `string|false` The singular name.

| Name | Type | Description |
| --- | --- | --- |
| $post_type | `string` | The post type to check. |
| $type | `string` | The type of name to return, either 'plural' or 'singular'. |

---

### get\_fluent\_form()

Return a fluent form.

`get_fluent_form( int $id )`

**Returns:** `string` The html of the form.

| Name | Type | Description |
| --- | --- | --- |
| $id | `int` | the id of the form. |

---

### log\_message()

Adds a log message to a specific log file in the website base folder.

You can use this function in your classes and functions to log errors and other messages.

**since** 3.19.5

`log_message( string $prefix, string|array|object|null|bool|\WP_Lemon\API\WP_Error $message, string $filename = 'application' )`

**Returns:** `void` 

| Name | Type | Description |
| --- | --- | --- |
| $prefix | `string` | The prefix of the log message. |
| $message | `string` or `array` or `object` or `null` or `bool` or `\WP_Lemon\API\WP_Error` | The message to log. |
| $filename | `string` | The filename of the log file. |

---

### format\_phone\_number()

Function to format phone numbers throughout our template.

**since** 3.17.0

`format_phone_number( string|int $number )`

**Returns:** `string[]|false` Array with information about the phone number.

| Name | Type | Description |
| --- | --- | --- |
| $number | `string` or `int` | The actual phone number. |

---

### get\_archive\_page()

Checks if posttype has custom page archive.

`get_archive_page( string $posttype )`

**Returns:** `int|false` the page id or false if not found.

| Name | Type | Description |
| --- | --- | --- |
| $posttype | `string` | the posttype we are checking. |

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

| Name | Type | Description |
| --- | --- | --- |
| $attachment_id | `int` | The attachment ID. |

---

### add\_spaces\_to\_phonenumber()

Markup a phone number

This function can be used to add a specific pattern of spaces to a phone number.

**since** 3.33.1

`add_spaces_to_phonenumber( string $phone, array $pattern = [2, 2, 2, 2] )`

**Returns:** `string` the filtered phone number.

| Name | Type | Description |
| --- | --- | --- |
| $phone | `string` | the phone number we want to filter. |
| $pattern | `array` | the spacing pattern. |

---

### get\_share\_platforms()

Builds the sharing context.

This sets up the share content that is being used in the sharing macro.

`get_share_platforms( int $post_id = null )`

**Returns:** `array` Array of shares that can be addressed by the share macro.

| Name | Type | Description |
| --- | --- | --- |
| $post_id | `int` | the post id that we want to use to create the share context. |

---

### get\_socials()

Builds the social context.

This sets up the social content that is being used in the social buttons macro.

`get_socials( array $platforms )`

**Returns:** `array` Array of platforms that can be addressed by the share macro.

| Name | Type | Description |
| --- | --- | --- |
| $platforms | `array` | platforms in an order we want to output the socials. |

---

### is\_post\_type()

Check if the current post type is one of the given post types.

**since** 4.4.0

`is_post_type( string|array $post_type )`

**Returns:** `bool` 

| Name | Type | Description |
| --- | --- | --- |
| $post_type | `string` or `string[]` | The post type to check against. |

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

| Name | Type | Description |
| --- | --- | --- |
| $post_id | `int` or `null` | The post id to clear the cache for. |

---

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[adjacent_post_info()](#adjacent_post_info)</span> | <span class="method-type">`array` or `false`</span> | <span class="method-description">Get next or previous post when available, otherwise get the first or last post.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Array with post id, title and url.</span></span> |
| <span class="method-name">[archive_query()](#archive_query)</span> | <span class="method-type">`\Timber\PostCollectionInterface` or `null`</span> | <span class="method-description">Archive query that queries an x amount of posts of a specific post type.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Returns collection of posts.</span></span> |
| <span class="method-name">[get_total_posts()](#get_total_posts)</span> | <span class="method-type">`array`</span> | <span class="method-description">Count function to use in relation with the above archive_query() Counts total amount of posts that can be queried in our ajax load more archives.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Array with context data to be added to the archive.twig.</span></span> |
| <span class="method-name">[latest_items_query()](#latest_items_query)</span> | <span class="method-type"></span> | <span class="method-description">Context function that queries the latest x amount of posts.</span> |
| <span class="method-name">[next_post_info()](#next_post_info)</span> | <span class="method-type">`array`</span> | <span class="method-description">Get next post when available, otherwise get the first post.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Array with post id, title and url.</span></span> |
| <span class="method-name">[other_items_query()](#other_items_query)</span> | <span class="method-type">`array` or `bool` or `null`</span> | <span class="method-description">Context function that queries other ID's of a specific post type on a singular template.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Result of the query.</span></span> |
| <span class="method-name">[previous_post_info()](#previous_post_info)</span> | <span class="method-type">`array`</span> | <span class="method-description">Get previous post when available, otherwise get the last post.<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Array with post id, title and url.</span></span> |
| <span class="method-name">[specific_items_query()](#specific_items_query)</span> | <span class="method-type">`array` or `bool` or `null`</span> | <span class="method-description">Context function that queries specific ID's from a specific posttype<br><br><span class="method-return"><span class="method-return-label">Returns:</span> Returns collection of posts.</span></span> |

</div>

### latest\_items\_query()

Context function that queries the latest x amount of posts.

Does have a $predefined_posts param to filter which post to query.

`latest_items_query( string $type, int $amount = 2, array $predefined_posts = null, string $taxonomy = null, array $term_ids = null, array|bool|null $extra_args = null )`

| Name | Type | Description |
| --- | --- | --- |
| $type | `string` | which post type we want to query. |
| $amount | `int` | Amount of posts we want to query. |
| $predefined_posts | `array` | Array with predefined post ids. |
| $taxonomy | `string` | name of the taxonomy we want to query. |
| $term_ids | `array` | Array of term ids which we want to query. |
| $extra_args | `array` or `bool` or `null` | Extra arguments we want to mix in. |

---

### other\_items\_query()

Context function that queries other ID's of a specific post type on a singular template.

Excludes current post.

`other_items_query( string $type, int $amount, int $current_id, string $taxonomy = null, array $terms = [] )`

**Returns:** `array|bool|null` Result of the query.

| Name | Type | Description |
| --- | --- | --- |
| $type | `string` | which post type we want to query. |
| $amount | `int` | Amount of posts we want to query. |
| $current_id | `int` | which ID we want to exclude. |
| $taxonomy | `string` | Name of the taxonomy to query. |
| $terms | `array` | ID of the term to query inside $taxonomy. |

---

### specific\_items\_query()

Context function that queries specific ID's from a specific posttype

`specific_items_query( string $type, int $amount = -1, array $post_ids = [] )`

**Returns:** `array|bool|null` Returns collection of posts.

| Name | Type | Description |
| --- | --- | --- |
| $type | `string` | Which posttype we want to query. |
| $amount | `int` | Amount of posts we want to query. |
| $post_ids | `array` | The posts id's to query. |

---

### archive\_query()

Archive query that queries an x amount of posts of a specific post type.

Uses the page template php file and archive.twig file to display the items and setup context for the ajax call.
Uses archive.js for the ajax call
Uses archive-ajax.php to output the new items.

`archive_query( string $type, int $amount = -1, string $taxonomy = null, array $terms = [], array $extra_args = null )`

**Returns:** `\Timber\PostCollectionInterface|null` Returns collection of posts.

| Name | Type | Description |
| --- | --- | --- |
| $type | `string` | which posttype we want to query. |
| $amount | `int` | Amount of posts we want to query. |
| $taxonomy | `string` | Name of the taxonomy to query. |
| $terms | `array` | ID of the term to query inside $taxonomy. |
| $extra_args | `array` | Extra arguments we want to mix in. |

---

### get\_total\_posts()

Count function to use in relation with the above archive_query()
Counts total amount of posts that can be queried in our ajax load more archives.

`get_total_posts( string $post_type, int $loaded_posts = '', string $taxonomy = null, array $term = null, array $extra_args = null )`

**Returns:** `array` Array with context data to be added to the archive.twig.

| Name | Type | Description |
| --- | --- | --- |
| $post_type | `string` | which posttype we want to query. |
| $loaded_posts | `int` | how many posts there are currently loaded. |
| $taxonomy | `string` | the taxonomy we want to query if any. |
| $term | `array` | the terms we want to query if any. |
| $extra_args | `array` | Extra arguments we want to mix in. |

---

### adjacent\_post\_info()

Get next or previous post when available, otherwise get the first or last post.

`adjacent_post_info( string $direction )`

**Returns:** `array|false` Array with post id, title and url.

| Name | Type | Description |
| --- | --- | --- |
| $direction | `string` | Direction to query. Can be next or previous. |

---

### next\_post\_info()

Get next post when available, otherwise get the first post.

**since** 3.31.3

**Returns:** `array` Array with post id, title and url.

---

### previous\_post\_info()

Get previous post when available, otherwise get the last post.

**since** 3.31.3

**Returns:** `array` Array with post id, title and url.

---

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[html_attributes()](#html_attributes)</span> | <span class="method-type">`string`</span> | <span class="method-description">Function to add html attributes to a html element.</span> |

</div>

### html\_attributes()

Function to add html attributes to a html element.

TODO: Finish this function.

**since** 4.8.2

`html_attributes( array $attributes = [] )`

**Returns:** `string` 

| Name | Type | Description |
| --- | --- | --- |
| $attributes | `array` | The attributes we want to add. |

---

