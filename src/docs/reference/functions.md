---
title: Functions
disableTableOfContents: false
---


| Name                                                                                       | Return Type                                          | Summary/Returns                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------ | ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [add_spaces_to_phonenumber()](#add_spaces_to_phonenumber) | `string`            | Markup a phone numberReturns: the filtered phone number.                                                         |
| [format_phone_number()](#format_phone_number)             | `array` or `false`  | Function to format phone numbers throughout our template.Returns: Array with information about the phone number. |
| [get_archive_page()](#get_archive_page)                   | `int` or `false`    | Checks if posttype has custom page archive.Returns: the page id or false if not found.                           |
| [get_fluent_form()](#get_fluent_form)                     | `string`            | Return a fluent form.Returns: The html of the form.                                                              |
| [get_language_switcher()](#get_language_switcher)         | `bool` or `array`   | Collects all languages and returns them as an array for twig language switcher.                                                                                                                      |
| [get_svg_image()](#get_svg_image)                         | `string` or `false` | Get SVG image contents.Returns: the attachment image svg data or false if not found.                             |
| [log_message()](#log_message)                             | `void`              | Adds a log message to a specific log file in the website base folder.                                                                                                                                |
| [post_type_name()](#post_type_name)                       | `string` or `false` | Get singular name of a posttype.Returns: The singular name.                                                      |



### post_type_name()

Get singular name of a posttype.

`post_type_name( string $post_type, string $type = null )`

**Returns:** `string|false` The singular name.

| Name       | Type     | Description                                                |
| ---------- | -------- | ---------------------------------------------------------- |
| $post_type | `string` | The post type to check.                                    |
| $type      | `string` | The type of name to return, either 'plural' or 'singular'. |

---

### get_fluent_form()

Return a fluent form.

`get_fluent_form( int $id )`

**Returns:** `string` The html of the form.

| Name | Type  | Description         |
| ---- | ----- | ------------------- |
| $id  | `int` | the id of the form. |

---

### log_message()

Adds a log message to a specific log file in the website base folder.

You can use this function in your classes and functions to log errors and other messages.

**since** 3.19.5

`log_message( string $prefix, mixed $message, string $filename = 'application' )`

**Returns:** `void`

| Name      | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| $prefix   | `string` | The prefix of the log message. |
| $message  | `mixed`  | The message to log.            |
| $filename | `string` | The filename of the log file.  |

---

### format_phone_number()

Function to format phone numbers throughout our template.

**since** 3.17.0

`format_phone_number( string $number )`

**Returns:** `array|false` Array with information about the phone number.

| Name    | Type     | Description              |
| ------- | -------- | ------------------------ |
| $number | `string` | The actual phone number. |

---

### get_archive_page()

Checks if posttype has custom page archive.

`get_archive_page( string $posttype )`

**Returns:** `int|false` the page id or false if not found.

| Name      | Type     | Description                   |
| --------- | -------- | ----------------------------- |
| $posttype | `string` | the posttype we are checking. |

---

### get_language_switcher()

Collects all languages and returns them as an array for twig language switcher.

**since** 3.18.0

**Returns:** `bool|array`

---

### get_svg_image()

Get SVG image contents.

`get_svg_image( int $attachment_id )`

**Returns:** `string|false` the attachment image svg data or false if not found.

| Name           | Type  | Description        |
| -------------- | ----- | ------------------ |
| $attachment_id | `int` | The attachment ID. |

---

### add_spaces_to_phonenumber()

Markup a phone number

This function can be used to add a specific pattern of spaces to a phone number.

**since** 3.33.1

`add_spaces_to_phonenumber( string $phone, array $patters = [2, 2, 2, 2] )`

**Returns:** `string` the filtered phone number.

| Name     | Type     | Description                         |
| -------- | -------- | ----------------------------------- |
| $phone   | `string` | the phone number we want to filter. |
| $patters | `array`  | the spacing pattern.                |

---



| Name                                                                             | Return Type                                                  | Summary/Returns                                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------- | ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [adjacent_post_info()](#adjacent_post_info)     | `array`                     | Get next or previous post when available, otherwise get the first or last post.Returns: Array with post id, title and url.                                                                                         |
| [archive_query()](#archive_query)               | `\Timber\PostQuery`         | Archive query that queries an x amount of posts of a specific post type.Returns: Returns collection of posts.                                                                                                      |
| [get_total_posts()](#get_total_posts)           | `array`                     | Count function to use in relation with the above archive_query() Counts total amount of posts that can be queried in our ajax load more archives.Returns: Array with context data to be added to the archive.twig. |
| [latest_items_query()](#latest_items_query)     |                             | Context function that queries the latest x amount of posts.                                                                                                                                                                                                                                            |
| [next_post_info()](#next_post_info)             | `array`                     | Get next post when available, otherwise get the first post.Returns: Array with post id, title and url.                                                                                                             |
| [other_items_query()](#other_items_query)       | `array` or `bool` or `null` | Context function that queries other ID's of a specific post type on a singular template.Returns: Result of the query.                                                                                              |
| [previous_post_info()](#previous_post_info)     | `array`                     | Get previous post when available, otherwise get the last post.Returns: Array with post id, title and url.                                                                                                          |
| [specific_items_query()](#specific_items_query) | `array` or `bool` or `null` | Context function that queries specific ID's from a specific posttypeReturns: Returns collection of posts.                                                                                                          |



### latest_items_query()

Context function that queries the latest x amount of posts.

Does have a $predefined_posts param to filter which post to query.

`latest_items_query( string $type, int $amount = 2, array $predefined_posts = null, string $taxonomy = null, array $term_ids = null, array|bool|null $extra_args = null )`

| Name              | Type                        | Description                               |
| ----------------- | --------------------------- | ----------------------------------------- |
| $type             | `string`                    | which post type we want to query.         |
| $amount           | `int`                       | Amount of posts we want to query.         |
| $predefined_posts | `array`                     | Array with predefined post ids.           |
| $taxonomy         | `string`                    | name of the taxonomy we want to query.    |
| $term_ids         | `array`                     | Array of term ids which we want to query. |
| $extra_args       | `array` or `bool` or `null` | Extra arguments we want to mix in.        |

---

### other_items_query()

Context function that queries other ID's of a specific post type on a singular template.

Excludes current post.

`other_items_query( string $type, int $amount, int $current_id, string $taxonomy = null, array $terms = [] )`

**Returns:** `array|bool|null` Result of the query.

| Name        | Type     | Description                               |
| ----------- | -------- | ----------------------------------------- |
| $type       | `string` | which post type we want to query.         |
| $amount     | `int`    | Amount of posts we want to query.         |
| $current_id | `int`    | which ID we want to exclude.              |
| $taxonomy   | `string` | Name of the taxonomy to query.            |
| $terms      | `array`  | ID of the term to query inside $taxonomy. |

---

### specific_items_query()

Context function that queries specific ID's from a specific posttype

`specific_items_query( string $type, int $amount = -1, array $post_ids = [] )`

**Returns:** `array|bool|null` Returns collection of posts.

| Name      | Type     | Description                       |
| --------- | -------- | --------------------------------- |
| $type     | `string` | Which posttype we want to query.  |
| $amount   | `int`    | Amount of posts we want to query. |
| $post_ids | `array`  | The posts id's to query.          |

---

### archive_query()

Archive query that queries an x amount of posts of a specific post type.

Uses the page template php file and archive.twig file to display the items and setup context for the ajax call.
Uses archive.js for the ajax call
Uses archive-ajax.php to output the new items.

`archive_query( string $type, int $amount = -1, string $taxonomy = null, array $terms = [], array $extra_args = null )`

**Returns:** `\Timber\PostQuery` Returns collection of posts.

| Name        | Type     | Description                               |
| ----------- | -------- | ----------------------------------------- |
| $type       | `string` | which posttype we want to query.          |
| $amount     | `int`    | Amount of posts we want to query.         |
| $taxonomy   | `string` | Name of the taxonomy to query.            |
| $terms      | `array`  | ID of the term to query inside $taxonomy. |
| $extra_args | `array`  | Extra arguments we want to mix in.        |

---

### get_total_posts()

Count function to use in relation with the above archive_query()
Counts total amount of posts that can be queried in our ajax load more archives.

`get_total_posts( string $post_type, int $loaded_posts = '', string $taxonomy = null, array $term = null, array $extra_args = null )`

**Returns:** `array` Array with context data to be added to the archive.twig.

| Name          | Type     | Description                                |
| ------------- | -------- | ------------------------------------------ |
| $post_type    | `string` | which posttype we want to query.           |
| $loaded_posts | `int`    | how many posts there are currently loaded. |
| $taxonomy     | `string` | the taxonomy we want to query if any.      |
| $term         | `array`  | the terms we want to query if any.         |
| $extra_args   | `array`  | Extra arguments we want to mix in.         |

---

### adjacent_post_info()

Get next or previous post when available, otherwise get the first or last post.

`adjacent_post_info( string $direction )`

**Returns:** `array` Array with post id, title and url.

| Name       | Type     | Description         |
| ---------- | -------- | ------------------- |
| $direction | `string` | Direction to query. |

---

### next_post_info()

Get next post when available, otherwise get the first post.

**since** 3.31.3

**Returns:** `array` Array with post id, title and url.

---

### previous_post_info()

Get previous post when available, otherwise get the last post.

**since** 3.31.3

**Returns:** `array` Array with post id, title and url.
