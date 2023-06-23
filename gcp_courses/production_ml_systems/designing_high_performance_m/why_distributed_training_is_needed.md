# Why distributed training is needed

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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/001.jpg
:alt: "1/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this module, we’ll explore how to run a **distributed training job** with **TensorFlow**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/002.jpg
:alt: "2/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

We’ll begin with understanding
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/003.jpg
:alt: "3/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

why **distributed training** is needed

After that, we’ll explore
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/004.jpg
:alt: "4/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**distributed training architectures**.

Then lastly, we’ll provide an overview of
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/005.jpg
:alt: "5/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**TensorFlow distributed training strategies**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/006.jpg
:alt: "6/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Deep learning** works because **datasets** are large.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/007.jpg
:alt: "7/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Notice that the x-axis here is **logarithmic**. 

For every doubling in the size of the **data,**
the error rate falls linearly.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/008.jpg
:alt: "8/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

A more **complex model** also helps -- that is the jump from the blue line to the orange line -- but more **data** is even more helpful in this situation. 

As a consequence of both of these trends, in terms of larger **data** sizes and more **complex models**, the compute required to build **state-of-the-art models** has grown over time. 

This growth is exponential as well.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/009.jpg
:alt: "9/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Each y-axis tick on this graph
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/010.jpg
:alt: "10/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

shows a 10x increase in computational need
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/011.jpg
:alt: "11/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**AlexNet**, which started the **deep learning revolution** in `2013`, required less than `0.01`
petaflops per second-day in compute per day for **training**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/012.jpg
:alt: "12/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

By the time you get to **Neural Architecture Search**, the learn-to-learn model published
by **Google** in `2017`, you need about `100` petaflops per second-day or `1000x` more
compute than you needed for **AlexNet**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/013.jpg
:alt: "13/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

This growth in **algorithm complexity** and **data** size means that, with **complex models** and **large data volumes**, **distributed systems** are pretty much a necessity when it comes to **machine learning**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/014.jpg
:alt: "14/25 Why distributed training is needed"
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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/015.jpg
:alt: "15/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Training complex networks** with **large amounts of data** can often take a long time.

This graph shows **training time** on the x-axis plotted against
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/016.jpg
:alt: "16/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

the **accuracy** of
**predictions** on the y-axis, when training an **image recognition model** on a `GPU`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/017.jpg
:alt: "17/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

As the dotted line shows, it took around 80 hours to reach 75% **accuracy.**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/018.jpg
:alt: "18/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

*  If your **training** takes a few minutes to a few hours, it will make you productive
and happy, and you can try out different ideas fast.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/019.jpg
:alt: "19/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

*  If the **training** takes a few days, you could still deal with that by running a few
ideas in parallel.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/020.jpg
:alt: "20/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* If the **training** starts to take a week or more, your progress will slow down
because you can’t try out new ideas quickly.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/021.jpg
:alt: "21/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* And if it takes more than a month… Well that's probably not even worth
thinking about!

And this is no exaggeration. 

**Training deep neural networks** such as **ResNet50** can
take up to a week on one `GPU`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/022.jpg
:alt: "22/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

A natural question to ask is - **how can you make training faster?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/023.jpg
:alt: "23/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* You can use a more powerful device such as `TPU` or `GPU` (accelerator).
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/024.jpg
:alt: "24/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* You can optimize your input **pipeline**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/why_distributed_training_is_needed/025.jpg
:alt: "25/25 Why distributed training is needed"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Or, you can try out **distributed training**.
</div>
</div>
</div>
</div>
