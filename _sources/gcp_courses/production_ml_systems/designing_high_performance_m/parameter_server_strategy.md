# Parameter server strategy

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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/parameter_server_strategy/001.jpg
:alt: "1/7 Parameter server strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Earlier we explored the **asynchronous parameter server architecture**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/parameter_server_strategy/002.jpg
:alt: "2/7 Parameter server strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

A **parameter server training cluster** consists of **workers** and **parameter servers**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/parameter_server_strategy/003.jpg
:alt: "3/7 Parameter server strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Variables** are created on **parameter servers** and they are read and updated by **workers** in each step. 

By default, **workers** read and update these variables independently without synchronizing with each other.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/parameter_server_strategy/004.jpg
:alt: "4/7 Parameter server strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **TensorFlow parameter server strategy**, introduces a **central coordinator**. 

The **coordinator** is a special task type that creates resources, dispatches training tasks, writes **checkpoints**, and deals with task failures.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/parameter_server_strategy/005.jpg
:alt: "5/7 Parameter server strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You can create your **parameter server strategy object** just like you would for the other **strategies**. 

Note that you will need to pass in the cluster resolver argument and if training with AI platform, this is just a simple `TFConfigClusterResolver`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/parameter_server_strategy/006.jpg
:alt: "6/7 Parameter server strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Using **model fit** with **parameter server training** requires that the **input data** be provided in a callable object that takes a single argument of type `tf.distribute.InputContext` and returns a `tf.data.Dataset`. 

We then need to wrap our dataset function in `tf.keras.utils.experimental.DatasetCreator`. 

The code in `dataset_fn` will be invoked on the **input device**, which is usually the `CPU` on each of the **worker machines**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/parameter_server_strategy/007.jpg
:alt: "7/7 Parameter server strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

When using **parameter service strategy**, it is recommended that you **shuffle** and repeat your **dataset** and pass in the `steps_per_epoch` argument to **model.fit**.
</div>
</div>
</div>
</div>
