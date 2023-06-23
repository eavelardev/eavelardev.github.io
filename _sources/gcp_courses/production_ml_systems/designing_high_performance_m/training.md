# Training

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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training/001.jpg
:alt: "1/13 Training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**How long are you willing to spend on the model training?**

This might be driven by the
**business use case**. 

If you are **training** a **model** everyday so as to recommend
products to users the next day
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training/002.jpg
:alt: "2/13 Training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

then your **training** has to finish within 24 hours.

Realistically, you will need to time to **deploy**, to **A/B test**, etc.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training/003.jpg
:alt: "3/13 Training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

So, your actual budget might be only 18 hours.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training/004.jpg
:alt: "4/13 Training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In addition, there are ways to tune **performance** to reduce the time, reduce the cost,
or increase the **scale**.

In order to understand what these are, it helps to understand that **model training performance** will be bound by one of three things:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training/005.jpg
:alt: "5/13 Training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* **input**/**output** -- how fast can you get **data** into the **model** in each **training step**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training/006.jpg
:alt: "6/13 Training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

`CPU` -- how fast can you compute the **gradient** in each **training step**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training/007.jpg
:alt: "7/13 Training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* **Memory** -- how many **weights** can you hold in memory, so that you can do the
**matrix multiplications** in-memory on the `GPU` or `TPU`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training/008.jpg
:alt: "8/13 Training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Your **ML training will** be **I**/**O** bound if the number of **inputs** is large, heterogeneous (requires parsing), or if the **model** is so small that the compute requirements are trivial.

This also tends to be the case if the **input data** is on a storage system with low throughput.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training/009.jpg
:alt: "9/13 Training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Your **ML training** will be **CPU bound** if the **I**/**O** is simple, but the **model** involves lots of expensive computations.

You will also encounter this situation if you are running a **model** on underpowered hardware.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training/010.jpg
:alt: "10/13 Training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Your **ML training** might be memory-bound if the number of **inputs** is large or if the **model** is complex and has lots of free **parameters**. 

You will also face memory limitations if your accelerator doesn’t have enough memory.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training/011.jpg
:alt: "11/13 Training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

So, knowing what you are bound by, you can look at how to improve performance. 

If you are **I/O bound**, look at storing the **data** more efficiently, on a storage system with higher throughput, or **parallelizing the reads**. 

Although it is not ideal, you might consider reducing the `batch size` so that you are reading less **data** in each step.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training/012.jpg
:alt: "12/13 Training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If you are **CPU-bound**, see if you can run the **training** on a faster **accelerator**. 

`GPUs` keep getting faster, so move to a newer generation processor. 

And on **Google Cloud**, you also have the option of running on `TPUs`. 

Even if it is not ideal, you might consider using a simpler **model**, a less computationally expensive `activation function` or simply just **train** for fewer steps.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training/013.jpg
:alt: "13/13 Training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If you are **memory-bound**, see if you can add more memory to the individual **workers**. 

Again, not ideal, but you might consider using fewer `layers` in your **model**. 

Reducing the `batch size` can also help with **memory-bound ML systems**.
</div>
</div>
</div>
</div>
