# Generic\_Ajax\_Query

This class is used for the node-archive block. Can be extended for custom ajax query blocks.

<!--more-->

## Overview

### Methods

<div class="table-methods">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[extra_args()](#extra_args)</span> | <span class="method-type"></span> | <span class="method-description">Add extra arguments to the query.</span> |
| <span class="method-name">[handle()](#handle)</span> | <span class="method-type"></span> | <span class="method-description">Hook into the wp_ajax actions</span> |
| <span class="method-name">[prepare()](#prepare)</span> | <span class="method-type">`void`</span> | <span class="method-description">Prepare parameters before building the query arguments.</span> |
| <span class="method-name">[query()](#query)</span> | <span class="method-type">`void`</span> | <span class="method-description">Run the query</span> |
| <span class="method-name">[query_args()](#query_args)</span> | <span class="method-type">`void`</span> | <span class="method-description">Setup query arguments for the query.</span> |
| <span class="method-name">[register()](#register)</span> | <span class="method-type"></span> | <span class="method-description">Handle the registration of the AJAX actions.</span> |

</div>


## Class Methods

### register()

Handle the registration of the AJAX actions.

Can be extended for custom AJAX queries.

---

### handle()

Hook into the wp_ajax actions

Handles the AJAX request.
This first checks if the request is valid, then prepares the parameters.

---

### prepare()

Prepare parameters before building the query arguments.

Can be extended by running the parent method from within the child class.

**Returns:** `void` 

---

### query\_args()

Setup query arguments for the query.

Can be entended or overwritten by running the parent method from within the child class.

**Returns:** `void` 

---

### extra\_args()

Add extra arguments to the query.

Can be extended by running the parent method from within the child class.

`extra_args( null|array $extra_args )`

| Name | Type | Description |
| --- | --- | --- |
| $extra_args | `null` or `array` | Extra arguments for the query. |

---

### query()

Run the query

Runs the query and sets the context for the template.
Then compiles the template based on the context.

Can be overwritten as long as wp_send_json() has the same output.

**Returns:** `void` 

---

