# Kubeflow

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

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/kubeflow/001.jpg
:alt: "1/15 Kubeflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this module you will learn how to:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/kubeflow/002.jpg
:alt: "2/15 Kubeflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

build **hybrid cloud machine learning models** with Kubeflow
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/kubeflow/003.jpg
:alt: "3/15 Kubeflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and how to optimize **TensorFlow graphs** for mobile.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/kubeflow/004.jpg
:alt: "4/15 Kubeflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

To begin, let’s explore **Kubeflow**, an open-source **machine learning platform** designed to enable the use of **machine learning pipelines** to **orchestrate** complicated **workflows** running on **Kubernetes**. 

**Kubeflow** helps build **hybrid cloud machine learning models**. 

But **why are we discussing hybrid in the first place?** 

**Why would you need anything other than Google Cloud?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/kubeflow/005.jpg
:alt: "5/15 Kubeflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

We’ve focused on **cloud-native environments**, which involve **prototyping** and **developing code** using an **AI Platform notebook**. 

Once that code is working on a small sample of **data**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/kubeflow/006.jpg
:alt: "6/15 Kubeflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

the **training job** gets submitted to **AI Platform** to operate on the **full dataset**. 

There are, however, scenarios when **cloud-native**, or conducting **machine learning** solely on **Google Cloud**, is not an option. 

Let’s look at some of these scenarios now.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/kubeflow/007.jpg
:alt: "7/15 Kubeflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Maybe you’re tied to **on-premises infrastructure**, or there are other constraints preventing the option to move your **training data** off an **on-prem cluster** or **data center**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/kubeflow/008.jpg
:alt: "8/15 Kubeflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Alternatively, perhaps you require a **multi-cloud solution architecture**, one that does not rely solely on **Google Cloud**. 

This could be because you’re working with **data** that is being produced by a system that is running on a different **cloud provider**, or because **model predictions** need to be consumed from another cloud.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/kubeflow/009.jpg
:alt: "9/15 Kubeflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Or maybe you are in an initial phase of an **ML project** running **machine learning on the edge**, where you’re working on a **local developer workstation**. 

**Training at scale** typically happens in a **cloud environment**; however, **inference** and **distributed training** can happen at the **edge**. 

The **edge** means that **predictions** happen on a smart device, which is common in **internet-of-things**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/kubeflow/010.jpg
:alt: "10/15 Kubeflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Using **Kubernetes**, it’s possible to **orchestrate containers** that run either **on-premises** or in the **cloud**. 

And that can be any **cloud**. 

Using **Kubernetes** allows for speed, the ability to minimize **infrastructure management** needs, all while being able to move or burst to **Google Cloud**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/kubeflow/011.jpg
:alt: "11/15 Kubeflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Kubeflow** is the **machine learning toolkit** for **Kubernetes**, and it brings a number of benefits.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/kubeflow/012.jpg
:alt: "12/15 Kubeflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It makes **deploying machine learning workflows on Kubernetes** simple, **portable**, and **scalable**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/kubeflow/013.jpg
:alt: "13/15 Kubeflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It also extends **Kubernetes’** ability to run independent and configurable steps, with **machine learning specific frameworks** and **libraries**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/kubeflow/014.jpg
:alt: "14/15 Kubeflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And since **Kubeflow** is open source, it can run **Google Kubernetes Engine**, which is part of **Google Cloud**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/kubeflow/015.jpg
:alt: "15/15 Kubeflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

However, **Kubeflow** can actually run on anything–whether it’s a phone, a laptop, or an **on-premise cluster**. 

Regardless of where it’s run, the code remains the same. 

Some of the configuration settings just change.
</div>
</div>
</div>
</div>
