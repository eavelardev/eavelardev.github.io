# Adapting to data

<aside class="margin sidebar">

::::{grid}
:::{grid-item}
:::
:::{grid-item}
<div id="slide-controls" class="btn-toolbar justify-content-between">

<button id="arrow_back" class="sd-btn">{material-regular}`arrow_back_ios;1.2em`</button>

<button id="arrow_forward" class="sd-btn">{material-regular}`arrow_forward_ios;1.2em`</button>
</div>
:::
::::
</aside>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/001.jpg
:alt: "1/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">


</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/002.jpg
:alt: "2/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**When it comes to adapting to change, consider which of these four is more likely to change?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/003.jpg
:alt: "3/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

An upstream mode,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/004.jpg
:alt: "4/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

a **data source** maintained by another team,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/005.jpg
:alt: "5/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

the relationship between **features** and **labels**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/006.jpg
:alt: "6/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

, or the **distributions** of **inputs.** The answer is
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/007.jpg
:alt: "7/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

that all of them can, and often do, change. 

Let's see how this happens, and what to do about it with a couple example scenarios.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/009.jpg
:alt: "8/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s say that you've created a Let’s say that you've created a model
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/010.jpg
:alt: "9/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

to **predict** demand for umbrellas
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/011.jpg
:alt: "10/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

that accepts as **input**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/012.jpg
:alt: "11/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

an **output** from a more specialized weather **prediction model**.

Unbeknownst to you and the owners, this **model** has been **trained** on the wrong years of **data**. 

Your model, however, is fit to the **upstream model’s outputs**. 

**What could go wrong?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/013.jpg
:alt: "12/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

One day, the **model** owners silently push a fix and the **performance** of your **model**, which expected the old **model’s distribution of data**, drops.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/015.jpg
:alt: "13/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The old **data** had below-average rainfall and now you’re **under-predicting** the days when you need an umbrella.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/016.jpg
:alt: "14/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Here’s another scenario. 

Let’s say your small **data science team** has convinced the web development team
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/017.jpg
:alt: "15/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

to let you **ingest** their traffic logs.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/018.jpg
:alt: "16/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Later, the web development team refactors their **code** and changes their logging format,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/019.jpg
:alt: "17/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

but continues publishing the old format.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/020.jpg
:alt: "18/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

At some point, they stop publishing in the old format but they forget to tell your team.

Your **model’s performance** degrades after getting an unexpectedly high number of null **features**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/021.jpg
:alt: "19/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

To fix this problem, first, you should stop **consuming data** from a **source** that doesn't notify downstream consumers.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/023.jpg
:alt: "20/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Second, you should consider making a local version of the **upstream model** and keeping it updated.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/024.jpg
:alt: "21/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Sometimes, the set of **features** that the **model** has been **trained** on include
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/025.jpg
:alt: "22/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

many that were added indiscriminately, which may worsen **performance** at times.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/026.jpg
:alt: "23/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For example, under pressure during a sprint, your team decided to include
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/027.jpg
:alt: "24/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

a number of new **features** without understanding their relationship to the **label**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/029.jpg
:alt: "25/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

One of them is causal,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/030.jpg
:alt: "26/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

while the others are merely correlated with the causal one.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/031.jpg
:alt: "27/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **model** can't distinguish between the two types,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/032.jpg
:alt: "28/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and takes all features into account equally
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/033.jpg
:alt: "29/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Months later, the **correlated feature** becomes **decorrelated** with the **label** and is thus no longer **predictive**. 

The **model’s performance** suffers.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/034.jpg
:alt: "30/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

To address this,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/035.jpg
:alt: "31/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**features** should always be scrutinized before being added,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/adapting_to_data/036.jpg
:alt: "32/32 Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and all **features** should be subjected to **leave-one-out evaluations**, to assess their importance.
</div>
</div>
</div>
</div>
