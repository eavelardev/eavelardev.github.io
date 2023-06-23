# NLP with custom training

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

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_custom_training/002.jpg
:alt: "1/17 NLP with custom training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this section, you’ll advance to **custom training** and explore the options that **Vertex AI** provides to build the development environment.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_custom_training/003.jpg
:alt: "2/17 NLP with custom training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If you don’t want to hand over everything to `AutoML` but rather wish to have full control of the **NLP training and deployment**, you can choose **custom training** with **Vertex AI Workbench**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_custom_training/004.jpg
:alt: "3/17 NLP with custom training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Vertex AI Workbench** is a notebook tool, with which you can code with your favorite libraries such as **TensorFlow** and your favorite languages such as **Python**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_custom_training/005.jpg
:alt: "4/17 NLP with custom training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Vertex AI Workbench** is also a single development environment to support an **end-to-end NLP workflow**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_custom_training/006.jpg
:alt: "5/17 NLP with custom training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

starting from uploading data,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_custom_training/007.jpg
:alt: "6/17 NLP with custom training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

to **model training**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_custom_training/008.jpg
:alt: "7/17 NLP with custom training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and to **model deployment**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_custom_training/009.jpg
:alt: "8/17 NLP with custom training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Before any coding begins, you need to determine what environment you want your **ML training code** to use.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_custom_training/010.jpg
:alt: "9/17 NLP with custom training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

There are two options: a **pre-built container** or a **custom container**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_custom_training/011.jpg
:alt: "10/17 NLP with custom training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Imagine that a **container** is a room. 

A **pre-built container** would represent a fully furnished room with cabinets and appliances.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_custom_training/012.jpg
:alt: "11/17 NLP with custom training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Cabinets could represent **dependencies** in the **NLP development environment**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_custom_training/013.jpg
:alt: "12/17 NLP with custom training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and appliances could represent the libraries that you need to build an **NLP model**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_custom_training/014.jpg
:alt: "13/17 NLP with custom training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

So, if your **NLP training** needs a platform like
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_custom_training/015.jpg
:alt: "14/17 NLP with custom training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**TensorFlow**, **PyTorch**, **Scikit-learn**, or **XGBoost** and a Python code to work with the platform,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_custom_training/016.jpg
:alt: "15/17 NLP with custom training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

a **pre-built container** is probably your best solution.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_custom_training/017.jpg
:alt: "16/17 NLP with custom training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

A **custom container**, alternatively, is like an empty room with no cabinets nor appliances.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_custom_training/018.jpg
:alt: "17/17 NLP with custom training"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You define the exact tools that you need to complete the job.
</div>
</div>
</div>
</div>
