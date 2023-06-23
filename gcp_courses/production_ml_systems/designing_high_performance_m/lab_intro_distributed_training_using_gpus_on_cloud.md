# Lab Introduction: Distributed Training using GPUs on Cloud AI Platform

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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/lab_intro_distributed_training_using_gpus_on_cloud/001.jpg
:alt: "1/4 Lab Introduction: Distributed Training using GPUs on Cloud AI Platform"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

This lab provides hands-on practice using **Google Cloud’s AI Platform** to perform **distributed training** using the `MirroredStrategy` found within `tf.keras`. 

This **strategy** allows the use of the **synchronous AllReduce strategy** on a virtual machine with **multiple** `GPUs` attached.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/lab_intro_distributed_training_using_gpus_on_cloud/002.jpg
:alt: "2/4 Lab Introduction: Distributed Training using GPUs on Cloud AI Platform"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* You’ll start by setting up the environment,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/lab_intro_distributed_training_using_gpus_on_cloud/003.jpg
:alt: "3/4 Lab Introduction: Distributed Training using GPUs on Cloud AI Platform"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* then continue on to create a **deep neural network model** using the **Fashion MNIST dataset**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/lab_intro_distributed_training_using_gpus_on_cloud/004.jpg
:alt: "4/4 Lab Introduction: Distributed Training using GPUs on Cloud AI Platform"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* and then, finally, you’ll **train** that **model** using a `MultiWorkerMirroredStrategy` running on multiple `GPUs`.
</div>
</div>
</div>
</div>
