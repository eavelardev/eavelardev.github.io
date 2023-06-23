# Lab: Adapting to data

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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/001.jpg
:alt: "1/25 Lab: Adapting to data"
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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/002.jpg
:alt: "2/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

When leading a team of engineers,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/003.jpg
:alt: "3/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

many decisions are informed by
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/004.jpg
:alt: "4/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

technical debt and other sorts of
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/005.jpg
:alt: "5/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**cost-benefit analyses**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/006.jpg
:alt: "6/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The best teams get very high rates of return on their investments.

With that in mind,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/007.jpg
:alt: "7/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

let’s consider a few scenarios.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/008.jpg
:alt: "8/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s imagine that you’re the leader of a team of engineers
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/009.jpg
:alt: "9/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and you are nearing the end of a **code sprint**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/010.jpg
:alt: "10/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

One of the team’s goals for the sprint is to increase **performance** on the **model** by 5%.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/011.jpg
:alt: "11/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Currently, however, the best **performing model** is only marginally better than what was around before. 

One of the engineers acknowledges this
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/013.jpg
:alt: "12/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

but still insists that it’s worth spending time
doing an extensive ablation **analysis**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/015.jpg
:alt: "13/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

where the value of an individual **feature** is computed by comparing it
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/016.jpg
:alt: "14/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

to a **model** trained without it. 

**What might this engineer be concerned about?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/017.jpg
:alt: "15/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The engineer might be concerned about **legacy** and **bundled features**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/018.jpg
:alt: "16/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Legacy features** are **older features** that were added, because they were valuable at the time.

But since then, better **features** have been added, which have made them redundant without our knowledge.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/019.jpg
:alt: "17/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Bundled features** on the other hand, are **features** that were added as part of a bundle, which collectively are valuable but individually may not be.

Both of these **features** represent additional unnecessary **data dependencies**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/020.jpg
:alt: "18/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In another scenario,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/021.jpg
:alt: "19/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

another engineer has found a new **data source** that is very much
related to the **label**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/022.jpg
:alt: "20/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The problem is that it’s in a unique format and there’s no parser written in Python, which is what the codebase is composed of.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/023.jpg
:alt: "21/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Thankfully, there is a parser on the web but it’s closed source and written in a different language.

The engineer is thinking about the **model performance**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/024.jpg
:alt: "22/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Something in the back of your mind seems wrong.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/025.jpg
:alt: "23/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**What is it?** It's the smell. 

No, really! There's a concept called
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/026.jpg
:alt: "24/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

`code smell` and it applies in **ML** as well.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/lab_adapting_to_data/027.jpg
:alt: "25/25 Lab: Adapting to data"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this case, you might be thinking, "I wonder what introducing code that we can't inspect and are unable to easily modify into our **testing** in **production frameworks** will do."
</div>
</div>
</div>
</div>
