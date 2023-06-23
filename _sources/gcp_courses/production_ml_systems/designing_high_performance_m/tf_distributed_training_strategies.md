# TensorFlow distributed training strategies

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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tf_distributed_training_strategies/001.jpg
:alt: "1/10 TensorFlow distributed training strategies"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Distributed training** is particularly useful for very **large datasets**, because it becomes very difficult, and often unrealistic to perform **model training** on only a single hardware accelerator, such as a `GPU`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tf_distributed_training_strategies/002.jpg
:alt: "2/10 TensorFlow distributed training strategies"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**TensorFlow’s distributed strategies** make it easier to seamlessly **scale up heavy training workloads across multiple hardware accelerators** — be it `GPUs` or even `TPUs`. 

But in doing so, you may face challenges.

For example:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tf_distributed_training_strategies/003.jpg
:alt: "3/10 TensorFlow distributed training strategies"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* **How will you distribute the model parameters across the different devices?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tf_distributed_training_strategies/004.jpg
:alt: "4/10 TensorFlow distributed training strategies"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* **How will you accumulate the gradients during backpropagation?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tf_distributed_training_strategies/005.jpg
:alt: "5/10 TensorFlow distributed training strategies"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* And **how will the model parameters be updated?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tf_distributed_training_strategies/006.jpg
:alt: "6/10 TensorFlow distributed training strategies"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**tf.distribute.Strategy** can help with these, and other, potential challenges.It's a
**TensorFlow API** to **distribute training** across **multiple** `GPUs`, **multiple machines** or
`TPUs`.

And there are four TensorFlow distributed training **strategies.**

The list includes:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tf_distributed_training_strategies/007.jpg
:alt: "7/10 TensorFlow distributed training strategies"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* The **mirrored strategy**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tf_distributed_training_strategies/008.jpg
:alt: "8/10 TensorFlow distributed training strategies"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **multi-worker mirrored strategy**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tf_distributed_training_strategies/009.jpg
:alt: "9/10 TensorFlow distributed training strategies"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* The **TPU strategy**, and finally
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tf_distributed_training_strategies/010.jpg
:alt: "10/10 TensorFlow distributed training strategies"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* The **parameter server strategy**.
</div>
</div>
</div>
</div>
