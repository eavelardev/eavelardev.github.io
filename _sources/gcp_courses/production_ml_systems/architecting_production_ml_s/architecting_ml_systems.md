# Architecting ML systems

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

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/001.jpg
:alt: "1/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Welcome to **Architecting ML systems**, the second module of the **Production Machine Learning Systems** course.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/002.jpg
:alt: "2/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this module, we’ll explore what makes up an **architecture** as well as
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/003.jpg
:alt: "3/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

why and how to make good **systems design** decisions.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/004.jpg
:alt: "4/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let me ask you a question.

**What percent of system code does the ML model account for?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/006.jpg
:alt: "5/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

5%
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/007.jpg
:alt: "6/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

25%
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/008.jpg
:alt: "7/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

50%
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/009.jpg
:alt: "8/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

90%

You’ll recall from earlier in this specialization, we showed how time gets distributed among the different tasks necessary to launch an **ML model** and, surprisingly, **modeling** accounted for far less than most people expect. 

The same is true with respect to the **code**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/010.jpg
:alt: "9/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

So, the answer is that **ML model code** typically accounts for about `5%` of the overall **code base**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/011.jpg
:alt: "10/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The reason that **ML models** account for such a small percentage is that to keep a
**system running in production** requires doing a lot more than just computing the
**model’s outputs** for a given set of **inputs**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/012.jpg
:alt: "11/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this module, you’ll see what else a **production ML system** needs to do and how you can meet those needs.

Upon completing this module, you should acquire the knowledge to
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/013.jpg
:alt: "12/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

choose an appropriate **training** and **serving paradigm**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/014.jpg
:alt: "13/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

serve **ML models** `scalably`,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/015.jpg
:alt: "14/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and design an **architecture** from scratch
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/016.jpg
:alt: "15/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And while our focus is on "Google Cloud", it’s important that you always try and `reuse` **generic systems** when possible--many of which are open-source frameworks.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/017.jpg
:alt: "16/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

What’s true of software frameworks like **TensorFlow**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/018.jpg
:alt: "17/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Spark**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/019.jpg
:alt: "18/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

or **Apache Beam** is also true of the underlying infrastructure on which you execute them.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/020.jpg
:alt: "19/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Rather than spend time and effort provisioning **infrastructure**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/021.jpg
:alt: "20/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

you can use **managed services** such as such as
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/022.jpg
:alt: "21/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Dataproc**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/023.jpg
:alt: "22/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**AI Platform**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/architecting_ml_systems/024.jpg
:alt: "23/23 Architecting ML systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

or **Dataflow** to execute your **Spark**, **TensorFlow**, and **Beam code**.
</div>
</div>
</div>
</div>
