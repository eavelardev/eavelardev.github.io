# Mirrored strategy

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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/mirrored_strategy/001.jpg
:alt: "1/19 Mirrored strategy"
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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/mirrored_strategy/002.jpg
:alt: "2/19 Mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **mirrored strategy** is the simplest way to get started with **distributed training**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/mirrored_strategy/003.jpg
:alt: "3/19 Mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It is a **single machine with multiple GPU devices** that creates **one replica of the model on each GPU device**. 

During **training**, one **mini-batch** is split into `N` parts, where `N` equals the number of `GPUS`, and each part feeds to one `GPU` **device**. 

For this setup, the **TensorFlow mirrored strategy** manages the coordination of **data distribution** and **gradient updates across all of the GPUs**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/mirrored_strategy/004.jpg
:alt: "4/19 Mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s look at an **image classification** example where a **Keras ResNet model** with the
**functional API** is defined.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/mirrored_strategy/005.jpg
:alt: "5/19 Mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

First, download the Cassava **dataset** from **TensorFlow Datasets**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/mirrored_strategy/006.jpg
:alt: "6/19 Mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Then, add a **preprocess_data function** to scale the images.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/mirrored_strategy/008.jpg
:alt: "7/19 Mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Then, define the **model**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/mirrored_strategy/010.jpg
:alt: "8/19 Mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s create the **strategy object** using `tf.distribute.MIrroredStrategy`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/mirrored_strategy/012.jpg
:alt: "9/19 Mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Next, let’s create the **model** with **variables** within the **strategy scope**. 

These **variables** include the **model**, `spare_categorical_crossentropy` for **loss**, a **Keras optimizer**, and **metrics variables** to compute **accuracy**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/mirrored_strategy/014.jpg
:alt: "10/19 Mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The last change you will want to make is to the **batch size**. 

When you carry out **distributed training** with the `tf.distribute.Strategy API` and `tf.data`, the **batch size** now refers to the **global batch size**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/mirrored_strategy/015.jpg
:alt: "11/19 Mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In other words, if you pass a **batch size** of `64`, and you have two `GPUs`, then each machine will process `32` **examples per step**. 

In this case, `64` is known as the **global batch size**, and `32` as the **per replica batch size**. 

To make the most out of your `GPUs`, you will want to scale the **batch size** by the number of replicas, which is two in this case because there is one replica on each `GPU`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/mirrored_strategy/017.jpg
:alt: "12/19 Mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

From there, **map**, **shuffle**, and **prefetch the data**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/mirrored_strategy/019.jpg
:alt: "13/19 Mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You then call `model.fit` on the **training data**. 

Here we are going to run five passes of the entire **training dataset**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/mirrored_strategy/020.jpg
:alt: "14/19 Mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s take a brief look at what actually happens when we call `model.fit` before adding a **strategy**. 

For simplicity, imagine you have a simple **linear model** instead of the **ResNet50 architecture**. 

In **TensorFlow**, you can think of this simple model in terms of its computational graph (or Directed Acyclic Graph - or `DAG`). 

Here, the `matmul op` takes in the `X` and `W` tensors, which are the **training batch** and **weights** respectively. 

The resulting **tensor** is then passed to the `add op` with the tensor `b`, which is the **model’s bias** terms. 

The result of this `op` is `ypred`, which is the **model’s predictions**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/mirrored_strategy/021.jpg
:alt: "15/19 Mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Here is an example of **data parallelism** with two `GPUs`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/mirrored_strategy/022.jpg
:alt: "16/19 Mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **input batch** `X` is split in half,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/mirrored_strategy/023.jpg
:alt: "17/19 Mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and one slice is sent to `GPU 0`,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/mirrored_strategy/024.jpg
:alt: "18/19 Mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and the other to `GPU 1`. 

In this case, each `GPU` calculates the same `ops` but on different slices of the data.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/mirrored_strategy/026.jpg
:alt: "19/19 Mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For more information on making the most of your `GPUs`, please refer to the guide
titled, “**Optimize TensorFlow GPU Performance with the TensorFlow Profiler**,” found at [tensorflow.org/guide/gpu_performance_analysis](https://www.tensorflow.org/guide/gpu_performance_analysis).
</div>
</div>
</div>
</div>
