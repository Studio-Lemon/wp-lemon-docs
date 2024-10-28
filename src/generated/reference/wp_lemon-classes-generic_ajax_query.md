# Generic\_Ajax\_Query

This class is used for the node-archive block. Can be extended for custom ajax query blocks.

<!--more-->

## Overview

### Methods

<div class="table-methods table-responsive">

| Name | Return Type | Summary/Returns |
| --- | --- | --- |
| <span class="method-name">[extra_args()](#extra_args)</span> | <span class="method-type"></span> | <span class="method-description">Add extra arguments to the query.</span> |
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

