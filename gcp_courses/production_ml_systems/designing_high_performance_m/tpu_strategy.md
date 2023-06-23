# TPU strategy

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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tpu_strategy/001.jpg
:alt: "1/15 TPU strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Similar to **mirrored strategy**, **TPU strategy** uses a single machine
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tpu_strategy/002.jpg
:alt: "2/15 TPU strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

where the same **model** is replicated on each core, with its variable synchronized mirrored across each **replica** of the **model**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tpu_strategy/003.jpg
:alt: "3/15 TPU strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The main difference, however, is that the **TPU strategy** will **all-reduce across TPU cores**, whereas the **Mirrored Strategy** will **all-reduce across devices**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tpu_strategy/004.jpg
:alt: "4/15 TPU strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**tf.distribute.TPUStrategy** lets you run your **TensorFlow training** on **Tensor Processing Units** (`TPUs`). 

`TPUs` are **Google**'s specialized `ASICs` designed to dramatically **accelerate machine learning workloads**.

`TPUs` provide their own implementation of efficient **all-reduce** and other collective operations across multiple `TPU` cores, which are used in `TPUStrategy`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tpu_strategy/005.jpg
:alt: "5/15 TPU strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You'll also need a variable called `strategy` but this time you will choose the
`tf.distribute.TPUStrategy` method
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tpu_strategy/006.jpg
:alt: "6/15 TPU strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Because `TPUs` are very fast, many **models** ported to the `TPU` end up with a **data bottleneck**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tpu_strategy/007.jpg
:alt: "7/15 TPU strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The `TPU` is sitting **idle**, waiting for **data** for the most part of each **training epoch**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tpu_strategy/008.jpg
:alt: "8/15 TPU strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

`TPUs` read **training data** exclusively from **Google Cloud Storage** (`GCS`).
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tpu_strategy/009.jpg
:alt: "9/15 TPU strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And `GCS` can sustain a pretty large throughput if it is continuously streaming from multiple files in parallel. 

Following best practices will optimize the throughput.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tpu_strategy/010.jpg
:alt: "10/15 TPU strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

With too few files, `GCS` will not have enough streams to get max throughput.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tpu_strategy/011.jpg
:alt: "11/15 TPU strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

With too many files, time will be wasted accessing each individual file.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tpu_strategy/012.jpg
:alt: "12/15 TPU strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s summarize the **distribution strategies** using code.

Our base scope is a **Keras sequential model**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tpu_strategy/013.jpg
:alt: "13/15 TPU strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Now, to improve **training**, we can use the **mirrored strategy**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tpu_strategy/014.jpg
:alt: "14/15 TPU strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Or for **faster training**, the **multi-worker mirrored strategy**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/tpu_strategy/015.jpg
:alt: "15/15 TPU strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And for **really fast training**, the **TPU strategy**.
</div>
</div>
</div>
</div>
