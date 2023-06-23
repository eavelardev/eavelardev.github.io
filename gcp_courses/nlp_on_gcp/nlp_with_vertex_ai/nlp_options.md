# NLP options

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

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_options/003.jpg
:alt: "1/11 NLP options"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Pre-built APIs** lets you leverage the **NLP problems** that were solved and the **NLP models** that were trained by **Google**, so you don’t need to build your own **NLP models** from scratch if you lack **training data** and **machine learning expertise** inside of the company.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_options/005.jpg
:alt: "2/11 NLP options"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

`AutoML` is a **no-code solution**, so you can build your own **NLP models** on **Vertex AI** through a point-and-click interface.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_options/007.jpg
:alt: "3/11 NLP options"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Through **custom training**, you can code your very own **NLP environment** to **train** and **deploy** an **NLP model** with **Vertex AI Workbench**, a notebook tool. 

This approach provides you with flexibility and control over the entire process.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_options/010.jpg
:alt: "4/11 NLP options"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Training data size**: 

**Pre-built APIs** do not require any **training data**, `AutoML` requires small to medium size **training data**, and **custom training** normally requires a large amount of **data**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_options/012.jpg
:alt: "5/11 NLP options"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Machine learning** and coding expertise:

**Pre-Built APIs** and `AutoML` are user-friendly with low requirements, but **Custom training** has a high requirement of `ML` and **coding expertise**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_options/014.jpg
:alt: "6/11 NLP options"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Flexibility to tune hyperparameters**:

At the moment, you can’t tune **hyperparameters** with **Pre-built APIs** or `AutoML`; however, you can experiment with **hyperparameters** with **custom training**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_options/016.jpg
:alt: "7/11 NLP options"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The time to **train** a **model**: 

**Pre-built APIs** require no time to **train** a **model**, because they directly use **pre-built models** from **Google**.

For the other two options, both take time to **train** and the **training time** depends on the projects and the resources.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_options/017.jpg
:alt: "8/11 NLP options"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Selecting the best option depends on your **business needs** and the expertise in `NLP` and `ML`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_options/019.jpg
:alt: "9/11 NLP options"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If you have little **ML/NLP experience** and no **training data**, using **pre-built APIs** is likely the best choice.

**Pre-built APIs** address common perceptual tasks in **natural language processing** such as **translation** and **document analysis**. 

They are ready to use without any **NLP and ML expertise** or **model development effort**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_options/021.jpg
:alt: "10/11 NLP options"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If you want to build **custom models** with your own **training data** and spend minimal time coding, then `AutoML` is your choice. 

`AutoML` provides a **no-code solution** to let you focus on **business problems** instead of the underlying **model architecture** and **ML provisioning**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_options/023.jpg
:alt: "11/11 NLP options"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If you want full control of the **NLP workflow**, for example, code your own **model development environment** and experiment with **hyperparameters**, **Vertex AI custom training** lets you **train** and **serve custom models** with code on **Vertex AI Workbench**.
</div>
</div>
</div>
</div>
