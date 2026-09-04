# Generic\_Ajax\_Query

This class is used for the node-archive block. Can be extended for custom ajax query blocks.

<!--more-->

## Overview

### Methods

<div class="table-methods table-responsive">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[extra_args()](#extra_args)</span> | <span class="method-type"></span> | <span class="method-description">Add extra arguments to the query.</span> |
| <span class="method-name">[get()](#get)</span> | <span class="method-type"></span> | <span class="method-description">Get an allowlisted protected property value.</span> |
| <span class="method-name">[prepare()](#prepare)</span> | <span class="method-type"></span> | <span class="method-description">Prepare parameters before building the query arguments.</span> |
| <span class="method-name">[query_args()](#query_args)</span> | <span class="method-type"></span> | <span class="method-description">Setup query arguments for the query.</span> |
| <span class="method-name">[register()](#register)</span> | <span class="method-type"></span> | <span class="method-description">Handle the registration of the AJAX actions.</span> |

</div>


## Class Methods

### extra\_args()

Add extra arguments to the query.

Can be extended by running the parent method from within the child class.

`extra_args( ?array $extra_args )`

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $extra_args | `null` or `array` | extra arguments for the query. |

</div>

---

### get()

Get an allowlisted protected property value.

You can use this method to retrieve the value of certain protected properties of the class.
Mainly used for accessing private properties in filters and actions.

Allowed properties:
- posts_total
- posts_loaded
- post_type
- taxonomy
- terms
- terms_changed
- posts_per_page
- query_args
- card_type
- show_excerpt
- card_classes
- columns
- current_action

`get( string $property )`

<div class="table-responsive">

| Name | Type | Description |
| --- | --- | --- |
| $property | `string` | Property name to retrieve. |

</div>

**PHP**

```php
add_filter('wp-lemon/filter/ajax-query/load_posts/context', function ($context, $instance) {
    $context['posts_left'] = max(0, (int) $instance->get('posts_total') - (int) $instance->get('posts_loaded'));
    return $context;
}, 10, 2);
```

---

### prepare()

Prepare parameters before building the query arguments.

Can be extended by running the parent method from within the child class.

---

### query\_args()

Setup query arguments for the query.

Can be extended or overwritten by running the parent method from within the child class.

---

### register()

Handle the registration of the AJAX actions.

Can be extended for custom AJAX queries.

---

