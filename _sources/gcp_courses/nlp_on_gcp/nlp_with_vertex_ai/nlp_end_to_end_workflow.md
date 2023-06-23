# NLP end-to-end workflow

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

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/001.jpg
:alt: "1/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Vertex AI**, **Google’s AI Platform**, provides **developers** and **data scientists** with one unified environment to build **custom ML models**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/005.jpg
:alt: "2/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**How so?** 

Let’s look at how **Vertex AI**, specifically `AutoML`, experiments and builds an **NLP model** step by step. 

There are three main stages:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/006.jpg
:alt: "3/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**data preparation**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/007.jpg
:alt: "4/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**model training** and
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/008.jpg
:alt: "5/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**model serving**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/009.jpg
:alt: "6/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The first stage is **data preparation**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/012.jpg
:alt: "7/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

During this stage, you must first upload data.

The **data** used in **NLP models** is **text data**, which can come from either **Cloud Storage** or your local machine.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/013.jpg
:alt: "8/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **data** can also be either **labeled** or **unlabeled** depending on the goal of the **NLP project**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/014.jpg
:alt: "9/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

A **label** is a **training target**. 

So, if you want an **NLP model** to identify the sentiment of a sentence,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/016.jpg
:alt: "10/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

you must first provide sample sentences that are tagged or **labeled** as either positive or negative.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/017.jpg
:alt: "11/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

A **label** can be manually added, or
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/018.jpg
:alt: "12/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

it can be added by using the paid **label service** of **Google** through the **Vertex console**. 

These human labelers will manually generate accurate **labels** for you.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/019.jpg
:alt: "13/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **text data** can also be **unlabeled**. 

For example, If you want to identify the underlying pattern of texts and group similar documents into sets, you can use **cluster analysis**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/020.jpg
:alt: "14/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And if you want to recognize the co-occurrence of pairs of words or phrases you can use **Latent Semantic Indexing** (`LSI`).
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/021.jpg
:alt: "15/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

After uploading data, you’ll then prepare it for **model training** with **feature engineering**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/023.jpg
:alt: "16/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **data** normally needs to be **processed** before the **model** starts being **trained**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/024.jpg
:alt: "17/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The second stage of the **NLP workflow** is **model training**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/026.jpg
:alt: "18/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Model training** includes two steps: **model training** and **model evaluation**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/027.jpg
:alt: "19/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

An **NLP model**, just like the other **ML models**, needs a tremendous amount of **iterative training**.

This is when **training** and **evaluation** form a cycle where the **NLP model** is **trained**, then **evaluated**, and **trained** again.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/028.jpg
:alt: "20/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The third and final stage is **model serving**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/030.jpg
:alt: "21/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Model serving** also includes two steps: **model deployment** and **model monitoring**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/031.jpg
:alt: "22/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

An **NLP model** needs to be moved into **production**, otherwise it has no use and remains only a **theoretical model**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/032.jpg
:alt: "23/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

There are three options to deploy an **NLP model**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/035.jpg
:alt: "24/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The first option is to **deploy** to an **endpoint**. 

This option is best when immediate results with **low latency** are needed, such as **real-time translation**. 

A **model** must be **deployed** to an **endpoint** before that **model** can be used to serve **real-time predictions**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/037.jpg
:alt: "25/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The second option is to **deploy** using **batch prediction**. 

This is the best option when no immediate response is required, and accumulated data should be processed with a single request.

For example, sending new ads every other week based on the user’s recent purchasing behavior and what’s currently popular on the market.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/039.jpg
:alt: "26/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And the final option is to **deploy** using **offline prediction**.

This is the best option when the **model** should be **deployed** in a specific environment outside the **cloud**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/040.jpg
:alt: "27/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Now it’s important to note that an **NLP workflow** isn’t linear, it’s iterative.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/041.jpg
:alt: "28/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For example, during **model training**, you might need to return to investigate the **raw data** and generate more useful **features** to feed the **model**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_end_to_end_workflow/042.jpg
:alt: "29/29 NLP end-to-end workflow"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

When **monitoring** the **model** during **model serving**, you might find **data drifting**, meaning the **accuracy of your predictions might suddenly drop**. 

You might need to check the **data sources** and adjust the **model parameters**. 

Fortunately, these steps can be automated with **machine learning operations**, or `MLOps`.
</div>
</div>
</div>
</div>
