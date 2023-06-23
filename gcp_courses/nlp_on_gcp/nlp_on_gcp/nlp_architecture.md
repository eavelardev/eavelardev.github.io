# NLP architecture

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

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_architecture/001.jpg
:alt: "1/22 NLP architecture"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_architecture/002.jpg
:alt: "2/22 NLP architecture"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **NLP architecture** on **Google Cloud** can be visualized with three layers.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_architecture/003.jpg
:alt: "3/22 NLP architecture"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The bottom layer is the `NLP`, or in general, **AI foundation**, and it includes the **Google Cloud infrastructure** and **data engineering tools**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_architecture/004.jpg
:alt: "4/22 NLP architecture"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s first uncover the **Google Cloud infrastructure**, which can be further visualized as two layers.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_architecture/005.jpg
:alt: "5/22 NLP architecture"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

At the base is **networking** and **security**, which is the foundation for all of **Google’s infrastructure** and **applications**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_architecture/006.jpg
:alt: "6/22 NLP architecture"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

On the next layer sit **compute** and **storage**. 

**Google Cloud** separates—or decouples, as it’s technically called—**compute** and **storage** so they can **scale independently** based on need.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_architecture/007.jpg
:alt: "7/22 NLP architecture"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s look at the **compute** element: 

breakthroughs in this area advanced `ML` significantly. 

In `2016`, **Google** introduced
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_architecture/008.jpg
:alt: "8/22 NLP architecture"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

the **Tensor Processing Unit**, or `TPU`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_architecture/009.jpg
:alt: "9/22 NLP architecture"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

`TPUs` are **Google’s** custom-developed **application-specific integrated circuits** (`ASICs`) used to **accelerate machine learning workloads**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_architecture/010.jpg
:alt: "10/22 NLP architecture"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

`TPUs` act as
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_architecture/011.jpg
:alt: "11/22 NLP architecture"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

domain-specific hardware, as opposed to
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_architecture/012.jpg
:alt: "12/22 NLP architecture"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

general-purpose hardware
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_architecture/013.jpg
:alt: "13/22 NLP architecture"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

with `CPUs` and `GPGPUs`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_architecture/014.jpg
:alt: "14/22 NLP architecture"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

`TPUs` allow for higher efficiency by tailoring **architecture**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_architecture/015.jpg
:alt: "15/22 NLP architecture"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

to meet the **computation needs** in a **domain**, such as **matrix multiplication** in **machine learning**. 

**Cloud TPUs** are integrated across **Google products**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_architecture/016.jpg
:alt: "16/22 NLP architecture"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_architecture/017.jpg
:alt: "17/22 NLP architecture"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The other component of the **NLP foundation** is a set of **data engineering tools**. 

For example, you can use **Dataflow** to **ingest** and process both **batch** and **real-time data** and use **BigQuery** to **analyze** and uncover the **insights** of the **data**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_architecture/018.jpg
:alt: "18/22 NLP architecture"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_architecture/019.jpg
:alt: "19/22 NLP architecture"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Above the **NLP foundation**, the middle layer represents the **NLP development platform**, which includes three options to **develop** an **NLP project**: 
* **pre-built APIs** such as the the **Dialogflow API** and the **Natural Language API**, 
* `AutoML`, and 
* **custom training** with Workbench, which are offered through **Vertex AI**.

The top layer represents ...
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_architecture/020.jpg
:alt: "20/22 NLP architecture"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**NLP solutions**, which include two groups: **horizontal solutions** and **industry solutions**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_architecture/021.jpg
:alt: "21/22 NLP architecture"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Horizontal solutions** usually apply to any industry that wants to solve the same problem. 

Examples include **Document AI** (`Doc AI`) and **Contact Center AI** (`CCAI`).

And the second group is **vertical**, or **industry solutions**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_architecture/022.jpg
:alt: "22/22 NLP architecture"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

These represent solutions that are relevant to specific industries. 

Examples include: **Lending DocAI**, which aims to transform the home loan experience for borrowers and lenders by automating mortgage document processing.

**Retail Search**, which gives retailers the ability to provide **Google-quality search** and **recommendations** on their own digital properties, thus helping to increase conversions and reduce search abandonment.
</div>
</div>
</div>
</div>
