# Distributed training architectures

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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/001.jpg
:alt: "1/39 Distributed training architectures"
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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/002.jpg
:alt: "2/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Previously we gave an overview of **why distributed training is needed**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/003.jpg
:alt: "3/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s now take a look at **distributed training architectures**.

Before we get into the details of how to achieve this scaling in **TensorFlow**, let’s step
back and explore the **high level concepts** and **architectures** in **distributed training**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/004.jpg
:alt: "4/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s say you start **training** on a machine with a **multi-core CPU**. 

**TensorFlow**
automatically handles scaling on multiple cores.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/005.jpg
:alt: "5/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You may speed up your **training** by adding an accelerator to your machine such as a
`GPU`. 

Again, **TensorFlow** will use this accelerator to speed up **model training** with no
extra work on your part.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/007.jpg
:alt: "6/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

But with **distributed training**, you can go further. 

You can go from using one machine
with a single device, to a machine with **multiple devices** attached to it,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/008.jpg
:alt: "7/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and finally to **multiple machines**, possibly with **multiple devices** each, connected over a network. 

Eventually, with various approaches, you can **scale up** to hundreds of devices, and that is in fact what we do in several **Google systems**. 

Simply stated, **distributed training** distributes **training workloads** across multiple mini-processors–or **worker nodes**. 

These **worker nodes** work in **parallel** to accelerate the **training process**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/009.jpg
:alt: "8/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Their parallelism can be achieved via two types of **distributed training architecture**.
Let’s explore both, starting with the most common,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/010.jpg
:alt: "9/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**data parallelism**. 

**Data parallelism** is **model agnostic**, making it the most widely used paradigm for
**parallelizing neural network training**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/011.jpg
:alt: "10/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In **data parallelism**, you run the **same model** and computation on every device,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/012.jpg
:alt: "11/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

but
train each of them using **different training samples**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/013.jpg
:alt: "12/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Each device computes **loss** and **gradients** based on the **training samples** it sees.

Then we update the **model’s parameters** using these **gradients**. 

The updated **model** is
then used in the next round of computation.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/014.jpg
:alt: "13/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You’ll recall that a **gradient** simply measures the change in all **weights** with regard to the change in error. 

You can also think of a **gradient** as the **slope of a function**. 

The higher the **gradient**, the steeper the slope and the faster a **model** can learn. 

But if the slope is zero, the **model** stops learning.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/015.jpg
:alt: "14/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

There are currently two approaches used to **update the model using gradients from various devices**: **Synchronous** and **asynchronous**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/016.jpg
:alt: "15/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In **synchronous training**, all of the devices **train** their **local model** using **different parts of data** from a single, large mini-batch. 

They then communicate their locally calculated **gradients**, directly or indirectly, to all devices.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/017.jpg
:alt: "16/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this approach, each **worker device** computes the forward and backward passes through the **model** on a different slice of the **input data**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/018.jpg
:alt: "17/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **computed gradients** from each of these slices are then **aggregated across all of the devices and reduced**, usually using an **average**, in a process known as **AllReduce**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/019.jpg
:alt: "18/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **optimizer** then performs the **parameter updates** with these **reduced gradients** thereby keeping the devices in sync. 

Because **each worker cannot proceed to the next training step until all the other workers have finished the current step**, this **gradient calculation** becomes the main overhead in **distributed training** for **synchronous strategies**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/022.jpg
:alt: "19/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Only after all devices have successfully computed and sent their gradients so that all workers are synchronized, is the model updated**. 

The **updated model** is then sent to all nodes along with splits from the next mini-batch. 

That is, devices **train** on non-overlapping splits of the mini-batch.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/023.jpg
:alt: "20/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In **asynchronous training**, no device waits for updates to the model from any other device. 

The devices can run independently and share results as peers, or communicate through one or more central servers known as **“parameter” servers**. 

Thus, In an **asynchronous parameter server architecture**, some devices are designated to be **parameter servers**, and others as **workers**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/024.jpg
:alt: "21/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Devices used to store variables are **parameter devices**, while devices used to run computations are called **worker devices**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/025.jpg
:alt: "22/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Each **worker** independently fetches
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/026.jpg
:alt: "23/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

the **latest parameters** from the **parameter servers** and computes **gradients** based on a subset **training samples**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/027.jpg
:alt: "24/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It then sends the **gradients** back to the `PS`. 

Which then updates its copy of the
**parameters** with those **gradients**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/028.jpg
:alt: "25/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Each **worker** does this independently. 

This allows it to **scale** well to a large number of **workers**, where **training workers** might be preempted by higher priority production jobs, or a machine may go down for maintenance, or where there is asymmetry between the **workers**. 

This does not hurt the scaling because **workers are not waiting for each other**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/029.jpg
:alt: "26/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The downside of this approach, however, is that **workers** can get out of sync. 

They compute **parameter updates** based on stale values and this can delay **convergence**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/030.jpg
:alt: "27/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Given these two broad strategies, the **asynchronous parameter server approach** and
the **synchronous allreduce approach**, **which should you choose?**

Well, there isn’t one right answer, but here are some considerations.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/031.jpg
:alt: "28/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **Asynchronous parameter server approach** should be used for **models** that use **sparse data** (which contain **fewer features**, consume less memory, and can run just a cluster of **CPUs**).
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/032.jpg
:alt: "29/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

is great for **sparse models**, as it shards the **model** across **parameter servers**, and **workers** only need to **fetch** the part they need for each step.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/033.jpg
:alt: "30/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For **dense models**, the **parameter server** transfers the whole **model** each step, and this can create a lot of network pressure.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/034.jpg
:alt: "31/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **Sync AllReduce approach** should be considered for **dense models** which contain
**many features** and thus consume more memory.

In this approach, **all machines share the load of storing and maintaining the global parameters**. 

This makes it the best option for **dense models**, like `BERT` (or
**Bidirectional Encoder Representations from Transformers**).
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/035.jpg
:alt: "32/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

When a **model** is too big to **fit** on one device’s memory, you divide it into smaller parts
on multiple devices and then compute over the same **training samples**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/036.jpg
:alt: "33/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

This is called **model parallelism**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/037.jpg
:alt: "34/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Model parallelism** feeds or gives every processor the **same data**, but applies a different **model** to it. 

Think of **model parallelism** as simply **multiple program, same data**.

**Model parallelism** splits the **weights** of the net equally among the threads. 

And all threads work on a single mini-batch. 

Here, the generated output after each **layer** needs to be synchronized, i.e. stacked, to provide the **input** to the next **layer**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/038.jpg
:alt: "35/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this approach, each `GPU` has different **parameters**, and computation, of **different parts of a model**. 

In other words, multiple `GPUs` **do not need to synchronize the values of the parameters**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/039.jpg
:alt: "36/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Model parallelism** needs special care when assigning different **layers** to different `GPUs`, which is more complicated than **data parallelism**. 

The **gradients** obtained from each **model** on each `GPU` are accumulated after a backward process, and the parameters are synchronized and updated.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/040.jpg
:alt: "37/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

However, a hybrid of the **data** and **model parallelism approaches** is sometimes used
together in the same architecture.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/041.jpg
:alt: "38/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Now that you’ve been introduced to some of the different **distributed training
architectures**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/distributed_training_architectures/042.jpg
:alt: "39/39 Distributed training architectures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

we’ll take a look at four T**ensorFlow distributed training strategies**.
</div>
</div>
</div>
</div>
