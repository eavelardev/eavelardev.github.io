# Multi-worker mirrored strategy

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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/multi_worker_mirrored_strategy/001.jpg
:alt: "1/19 Multi-worker mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The `MultiWorkerMirroredStrategy` is very similar to the `MirroredStrategy`
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/multi_worker_mirrored_strategy/002.jpg
:alt: "2/19 Multi-worker mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It implements **synchronous distributed training** across **multiple workers**, each with
potentially **multiple** `GPUs`. Similar to `MirroredStraegy`, it creates copies of **all variables**
in the **model** on each device across **all workers**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/multi_worker_mirrored_strategy/003.jpg
:alt: "3/19 Multi-worker mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If you’ve mastered **single host training** and are looking to **scale training** even further, then adding multiple machines to your cluster can help you get an even greater **performance** boost. 

You can make use of a **cluster of machines** that are `CPU` only, or that each have one or more **GPUs**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/multi_worker_mirrored_strategy/004.jpg
:alt: "4/19 Multi-worker mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Like its **single-worker** counterpart, `MirroredStrategy`, `MultiWorkerMirroredStrategy` is a
**synchronous data parallelism strategy** that can be used with only a few code
changes.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/multi_worker_mirrored_strategy/005.jpg
:alt: "5/19 Multi-worker mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

However, unlike `MirroredStrategy`, for a **multi-worker** setup **TensorFlow** needs to know
which machines are part of the cluster. 

In most cases, this is specified with the
environment variable `TF_CONFIG`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/multi_worker_mirrored_strategy/006.jpg
:alt: "6/19 Multi-worker mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this simple `TF_CONFIG` example, the “cluster” key contains a dictionary with the
internal IPs and ports of all the machines.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/multi_worker_mirrored_strategy/007.jpg
:alt: "7/19 Multi-worker mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In `MultiWorkerMirroredStrategy`, **all machines are designated as workers**, which are
the physical machines on which the replicated computation is executed.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/multi_worker_mirrored_strategy/008.jpg
:alt: "8/19 Multi-worker mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In addition to each machine being a **worker**, there needs to be one **worker** that takes on some extra work such as **saving checkpoints** and writing summary files to **TensorBoard**. 

This machine is known as the **chief** (or by its deprecated name master).
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/multi_worker_mirrored_strategy/009.jpg
:alt: "9/19 Multi-worker mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Conveniently, when using **AI Platform Training**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/multi_worker_mirrored_strategy/010.jpg
:alt: "10/19 Multi-worker mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

the `TF_CONFIG` environment variable is set on each machine in your cluster so
there’s no need to worry about this set up!
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/multi_worker_mirrored_strategy/011.jpg
:alt: "11/19 Multi-worker mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* As with any **strategy** in the `tf.distribute` module, step one is to **create a strategy object**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/multi_worker_mirrored_strategy/012.jpg
:alt: "12/19 Multi-worker mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* Step two is to wrap the creation of the **model parameters** within the scope of
the **strategy**. 

This is crucial because it tells `MirroredStrategy` which variables to
mirror across the `GPU` **devices**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/multi_worker_mirrored_strategy/013.jpg
:alt: "13/19 Multi-worker mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* And the third and final step is to scale the **batch size** by the number of **replicas** in the cluster. This ensures that each **replica** processes the same number of examples on each step.  

Since we’ve already covered **training** with `MirroredStrategy`, the previous steps should be familiar. 

The main difference when moving from **synchronous data parallelism** on one machine to many is that the **gradients** at the end of each step now need to be synchronized across all **GPUs** in a machine and across all machines in the cluster. 

This additional step of synchronizing across the machines increases the overhead of distribution.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/multi_worker_mirrored_strategy/014.jpg
:alt: "14/19 Multi-worker mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

With **multi-worker mirrored strategy**, the **data** needs to be sharded, meaning that each **worker** is assigned a subset of the entire **dataset**. 

If **autosharding** is turned off, each replica processes every example in the **dataset**, which is not recommended. 

Therefore, at each step, a **global batch size** of non-overlapping dataset elements will be processed by each worker. 

This **sharding** happens automatically with `tf.data.experimental.AutoShardPolicy`. 

By default, the policy is set to `AUTO`, which will shard your **data** depending on whether it is file-based or not.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/multi_worker_mirrored_strategy/015.jpg
:alt: "15/19 Multi-worker mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Saving the **model** is slightly more complicated in the **multi-worker** case because there needs to be
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/multi_worker_mirrored_strategy/016.jpg
:alt: "16/19 Multi-worker mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

different destinations for each worker.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/multi_worker_mirrored_strategy/017.jpg
:alt: "17/19 Multi-worker mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **chief worker** will save to the desired model directory,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/multi_worker_mirrored_strategy/018.jpg
:alt: "18/19 Multi-worker mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

while the other workers will save the model to temporary directories.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/multi_worker_mirrored_strategy/019.jpg
:alt: "19/19 Multi-worker mirrored strategy"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It’s important that these temporary directories are unique in order to prevent **multiple workers** from writing to the same location. 

Saving can contain collective `ops`, so all **workers** must save and not just the **chief**.
</div>
</div>
</div>
</div>
