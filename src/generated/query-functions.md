# Functions

<div class="table-methods table-responsive">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[adjacent_post_info()](#adjacent_post_info)</span> | <span class="method-type">`array` or `false`</span> | <span class="method-description">Get next or previous post when available, otherwise get the first or last post.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Array with post id, title and url.</span></span> |
| <span class="method-name">[archive_query()](#archive_query)</span> | <span class="method-type">`\Timber\PostCollectionInterface` or `null`</span> | <span class="method-description">Archive query that queries an x amount of posts of a specific post type.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Returns collection of posts.</span></span> |
| <span class="method-name">[get_post_type_options()](#get_post_type_options)</span> | <span class="method-type">`array`</span> | <span class="method-description">Get options for a specific post type.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> The post type options.</span></span> |
| <span class="method-name">[get_total_posts()](#get_total_posts)</span> | <span class="method-type">`array`</span> | <span class="method-description">Count function to use in relation with the above archive_query() Counts total amount of posts that can be queried in our ajax load more archives.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Array with context data to be added to the archive.twig.</span></span> |
| <span class="method-name">[latest_items_query()](#latest_items_query)</span> | <span class="method-type">`\Timber\PostCollectionInterface` or `null`</span> | <span class="method-description">Context function that queries the latest x amount of posts.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Returns collection of posts.</span></span> |
| <span class="method-name">[next_post_info()](#next_post_info)</span> | <span class="method-type">`array` or `false`</span> | <span class="method-description">Get next post when available, otherwise get the first post.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Array with post id, title and url.</span></span> |
| <span class="method-name">[other_items_query()](#other_items_query)</span> | <span class="method-type">`\Timber\PostCollectionInterface` or `null`</span> | <span class="method-description">Context function that queries other ID's of a specific post type on a singular template.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Returns collection of posts.</span></span> |
| <span class="method-name">[previous_post_info()](#previous_post_info)</span> | <span class="method-type">`array` or `false`</span> | <span class="method-description">Get previous post when available, otherwise get the last post.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Array with post id, title and url.</span></span> |
| <span class="method-name">[specific_items_query()](#specific_items_query)</span> | <span class="method-type">`\Timber\PostCollectionInterface` or `null`</span> | <span class="method-description">Context function that queries specific ID's from a specific posttype<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Returns collection of posts.</span></span> |
| <span class="method-name">[taxonomy_post_collection()](#taxonomy_post_collection)</span> | <span class="method-type">`array`</span> | <span class="method-description">Returns a collection of posts based on a taxonomy and post type.<br/><br/><span class="method-return"><span class="method-return-label">Returns:</span> Returns an array with (bool) categories, (nested-array) collection, (int) amount and (string) debug.</span></span> |

</div>

### get\_post\_type\_options()

Get options for a specific post type.

This function queries all posts of the given post type and returns an array containing the post ids and titles.

This is useful for creating a dropdown or select field in a form where the user can choose from existing posts of that type.

**since** 5.39.0

`get_post_type_options( string $post_type )`

**Returns:** `array` The post type options.

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $post_type | `string` | The post type to get the options for. |

</div>

**PHP**

```php
use function WP_Lemon\API\get_post_type_options;
$choices = get_post_type_options('person');

... additional customizer code ...
$wp_customize->add_setting(
   'job_contact',
   [
       'sanitize_callback' => 'absint',
   ]
);
$wp_customize->add_control(
       'job_contact',
       [
        'label'          => esc_html_x('Job contact', 'Backend - Customizer field label', 'wp-lemon'),
        'section'        => 'project',
        'allow_addition' => true,
        'type'           => 'select',
        'settings'       => 'job_contact',
        'choices'        => $choices
      ]
    );

---

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

