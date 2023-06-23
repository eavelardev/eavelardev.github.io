# Vertex AI

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

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/001.jpg
:alt: "1/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Vertex AI provides both, `AutoML`, a **no-code solution**, and **custom training**, a **code-based solution**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/002.jpg
:alt: "2/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s start with **Vertex AI**. 

**What are the problems it solves?**

**what are the benefits of using it?** and finally 

**what are its key features?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/003.jpg
:alt: "3/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For years now, **Google** has invested time and resources into developing **artificial intelligence** (`AI`) and **machine learning** (`ML`).
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/004.jpg
:alt: "4/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Google** had developed and supported key technologies and products, from the development of **scikit-learn** as a **Google summer coding project** back in `2007`, to **TensorFlow** 2.0 in `2019`, and to **Vertex AI** in `2021`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/012.jpg
:alt: "5/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

As an **AI-first company**, **Google** has applied A**I technologies** to many of its products and services, such as 
* **Gmail**, 
* **Google Maps**, 
* **Google Photos**, and 
* **Google Translate**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/013.jpg
:alt: "6/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

But developing these technologies doesn’t come without challenges, especially when it involves developing **machine learning models** and putting them into **production**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/015.jpg
:alt: "7/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Some traditional challenges include determining **how to handle large quantities of data**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/016.jpg
:alt: "8/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

choosing the right **machine learning model** to **train** the **data**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/017.jpg
:alt: "9/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and harnessing the required amount of computing power.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/021.jpg
:alt: "10/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Then there are challenges around **getting ML models into production**.

**Production** challenges require 
* **scalability**,
* **monitoring** and 
* **continuous integration** and **delivery** or **deployment**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/022.jpg
:alt: "11/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In fact, according to **Gartner**, __
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/023.jpg
:alt: "12/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And finally, there are ease-of-use challenges. 

Many tools on the market:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/024.jpg
:alt: "13/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Require **advanced coding skills**, which can take away the focus of a **data scientist** from **model configuration**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/025.jpg
:alt: "14/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Require expertise in `ML` and `NLP`, which is an obstacle for field experts who need to solve **practical NLP problems** but lack **ML knowledge**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/026.jpg
:alt: "15/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Provide no unified **workflow**. 

A **data scientist** often has to use multiple tools that are not compatible with each other.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/027.jpg
:alt: "16/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Google’s solution to many of the **production** and ease-of-use challenges is **Vertex AI**, a unified platform that brings all the components of the **machine learning ecosystem** and **workflow** together.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/028.jpg
:alt: "17/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

So, **what exactly does a unified platform mean?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/029.jpg
:alt: "18/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In the case of **Vertex AI**, it means having one digital experience to **create**, **deploy**, and **manage models** over time and **at scale**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/030.jpg
:alt: "19/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For example, During the **data readiness stage**, users can upload data from wherever it’s stored (**Cloud Storage**, **BigQuery**, or a local machine).
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/031.jpg
:alt: "20/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Then, during the **feature-readiness stage**, users can create **features**, which are the **processed data that will be put into the model**, and then share them with others by using the **feature store**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/032.jpg
:alt: "21/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

After that, it’s time for **training** and **hyperparameter tuning**. 

This means that when the **data** is ready, users can experiment with different **models** and adjust **hyperparameters**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/033.jpg
:alt: "22/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And finally, during **deployment** and **model monitoring**, users can **set up the pipeline to transform the model into production by automatically monitoring and performing continuous improvements**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/034.jpg
:alt: "23/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Being able to perform such a wide range of tasks in one unified platform has many benefits. 

This can be summarized with four Ss:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/035.jpg
:alt: "24/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It’s seamless.

**Vertex AI** provides a smooth user experience from uploading and **preparing data** to **model training** and **production**. 

You can complete an **end-to-end NLP workflow** with one single platform on **Vertex AI** without having to deal with multiple tools at the same time.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/036.jpg
:alt: "25/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It’s scalable.

The **machine learning operations** or `MLOps` provided by **Vertex AI help to monitor and manage the ML production; scaling the storage and computing power automatically**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/037.jpg
:alt: "26/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It’s sustainable. 

All of the **artifacts** and **features** created with **Vertex AI** can be reused and shared.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/038.jpg
:alt: "27/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And it’s speedy. 

**Vertex AI** produces models that have `80%` fewer lines of code than competitors.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/039.jpg
:alt: "28/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If you refer back to the different options to develop an **NLP project**, **Vertex AI** allows users to build **NLP models** with either `AutoML`, a **no-code solution**, or **Custom Training**, a **code-based solution**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/040.jpg
:alt: "29/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Vertex AI** provides many **features** to support the **ML workflow**, all of which are accessible through either `AutoML` or **Vertex AI Workbench**. 

Examples include:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/041.jpg
:alt: "30/34 Vertex AI"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/042.jpg
:alt: "31/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

which provides
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/043.jpg
:alt: "32/34 Vertex AI"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/044.jpg
:alt: "33/34 Vertex AI"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/vertex_ai/045.jpg
:alt: "34/34 Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">


</div>
</div>
</div>
</div>
