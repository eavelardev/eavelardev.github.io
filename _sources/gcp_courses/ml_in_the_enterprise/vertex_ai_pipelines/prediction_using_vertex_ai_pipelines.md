# Prediction using Vertex AI pipelines

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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_ai_pipelines/prediction_using_vertex_ai_pipelines/001.jpg
:alt: "1/11 Prediction using Vertex AI pipelines"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this lesson, we described and create a **Vertex AI pipeline**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_ai_pipelines/prediction_using_vertex_ai_pipelines/002.jpg
:alt: "2/11 Prediction using Vertex AI pipelines"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

A **pipeline** is composed of modular pieces of components chained together to form a **pipeline**. 

Essentially a **machine learning pipeline** lets you **automate** the **ML workflow** including every step it takes to produce a **machine learning model**. 

These multiple steps are code-based and sequential and do everything from **data extraction**, **data preprocessing**, **model training**, **model evaluation**, **model deploymen**t and **retraining**. 

In order for your **ML pipeline** to work well in **production**, the components must be **orchestrated**, which means the dependencies and **dataflow** between them must be coordinated on some schedule or **synchronized** in some way and regularly updated, particularly if the **data** is very dynamic. 

This practice is known as **machine learning orchestration**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_ai_pipelines/prediction_using_vertex_ai_pipelines/004.jpg
:alt: "3/11 Prediction using Vertex AI pipelines"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Vertex AI pipelines** are **portable** and **scalable ML workflows** that are based on **containers** and Google Cloud services. 

**Vertex AI pipelines** can run **pipelines** built using the **Kubeflow pipeline's SDK**  or **TensorFlow Extended**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_ai_pipelines/prediction_using_vertex_ai_pipelines/005.jpg
:alt: "4/11 Prediction using Vertex AI pipelines"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If you use **TensorFlow** in an **ML workflow** that processes terabytes of **structured data** or **text data**, we recommend that you build your **pipeline** using **TFX**. 

For other use cases, we recommend that you build your **pipeline** using the **Kubeflow pipeline's SDK**. 

To **orchestrate** your **ML workflow** on **Vertex AI pipelines**, you must first describe your **workflow** as a **pipeline**. 

The following sample demonstrates how to use the **Google Cloud Pipeline components** to build a **pipeline**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_ai_pipelines/prediction_using_vertex_ai_pipelines/006.jpg
:alt: "5/11 Prediction using Vertex AI pipelines"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Here, you import **Kubeflow pipelines** and set up your environment variables for `project ID`, region and the **pipeline** path.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_ai_pipelines/prediction_using_vertex_ai_pipelines/007.jpg
:alt: "6/11 Prediction using Vertex AI pipelines"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The next step is a **model training component**.

It takes the **dataset** outputted from the first step,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_ai_pipelines/prediction_using_vertex_ai_pipelines/008.jpg
:alt: "7/11 Prediction using Vertex AI pipelines"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

supplies it as an input argument to the **component**, the **dataset variable** shown here,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_ai_pipelines/prediction_using_vertex_ai_pipelines/009.jpg
:alt: "8/11 Prediction using Vertex AI pipelines"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and will put its outputs into the variable `training_op_run_op`, also shown here.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_ai_pipelines/prediction_using_vertex_ai_pipelines/010.jpg
:alt: "9/11 Prediction using Vertex AI pipelines"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The third and fourth steps are for **deploying** the **model**. 

Here, you create an **endpoint** by passing in the `project ID` and a display name.

You then **deploy** the **model** by passing in the **model output**, **endpoint** and automatic `min_replica` and `max_replica` count. 

Recall that `replica_count` is the minimum number of **nodes** for this **deployment**.

The **node count** can be increased or decreased as required by the **prediction node** up to the maximum number of **nodes** but will never fall below this number. 

This value must be greater than or equal to one.

If the `min_replica_count` flag is omitted, the value defaults to `one`. 

`The max_replica_count` is the maximum number of **nodes**. 

If you omit the `max_replica_count` flag, then the maximum number of **nodes** is set to the value of `min_replica_count`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_ai_pipelines/prediction_using_vertex_ai_pipelines/011.jpg
:alt: "10/11 Prediction using Vertex AI pipelines"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

After the **workflow** of your **pipeline** is defined, you can proceed to compile the **pipeline** into a JSON format. 

The JSON file will include all of the information for executing your **pipeline** on **Vertex Pipeline Services**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_ai_pipelines/prediction_using_vertex_ai_pipelines/012.jpg
:alt: "11/11 Prediction using Vertex AI pipelines"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Once the **workflow** of your **pipeline** is compiled into the JSON format, you can use the **Vertex AI Python client** to submit and run your **pipeline**.
</div>
</div>
</div>
</div>
