# Mitigating training-serving skew through design

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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/mitigating_training_serving_skew_through_design/001.jpg
:alt: "1/12 Mitigating training-serving skew through design"
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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/mitigating_training_serving_skew_through_design/002.jpg
:alt: "2/12 Mitigating training-serving skew through design"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

We’ve talked about **training**/**serving skew** a number, but always at a high level.

Let’s look at it now in a little more detail.

**Training**/**Serving skew** refers to
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/mitigating_training_serving_skew_through_design/003.jpg
:alt: "3/12 Mitigating training-serving skew through design"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

differences in **performance** that occur as a function of
differences in environment.

Specifically, **training**/**serving skew** refers to differences caused by one of three things:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/mitigating_training_serving_skew_through_design/004.jpg
:alt: "4/12 Mitigating training-serving skew through design"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* A discrepancy between **how you handle data** in the **training** and **serving pipelines**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/mitigating_training_serving_skew_through_design/005.jpg
:alt: "5/12 Mitigating training-serving skew through design"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* A change in the **data** between when you **train** and when you **serve**, or
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/mitigating_training_serving_skew_through_design/006.jpg
:alt: "6/12 Mitigating training-serving skew through design"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* A **feedback loop** between your **model** and your **algorithm**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/mitigating_training_serving_skew_through_design/007.jpg
:alt: "7/12 Mitigating training-serving skew through design"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Up until now, we’ve focused on the **data** aspect of **training**-**serving skew**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/mitigating_training_serving_skew_through_design/008.jpg
:alt: "8/12 Mitigating training-serving skew through design"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

but it’s also possible to have inconsistencies that arise after the **data** have been introduced.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/mitigating_training_serving_skew_through_design/009.jpg
:alt: "9/12 Mitigating training-serving skew through design"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Say, for example, that in your development environment, you have version 2 of a library, but in production you have version 1. 

The libraries may be functionally equivalent but version 2 is
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/mitigating_training_serving_skew_through_design/010.jpg
:alt: "10/12 Mitigating training-serving skew through design"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

highly optimized and version 1 isn’t. 

Consequently, **predictions** might be significantly slower or consume more memory in **production** than they did in **development**. 

Alternately, it’s possible that version 1 and version 2 are functionally different, perhaps because of
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/mitigating_training_serving_skew_through_design/011.jpg
:alt: "11/12 Mitigating training-serving skew through design"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

a bug.

Finally, it’s also possible that
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/mitigating_training_serving_skew_through_design/012.jpg
:alt: "12/12 Mitigating training-serving skew through design"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

different code is used in **production** vs. **development**,
perhaps because of recognition of one of the other issues, but though the intent was to create equivalent code, the results were imperfect.
</div>
</div>
</div>
</div>
