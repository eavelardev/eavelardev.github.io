# Best practices for model deployment and serving

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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/best_practices_for_ml_develo/best_practices_for_model_deployment_and_serving/001.jpg
:alt: "1/7 Best practices for model deployment and serving"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this lesson, we provide an overview of `best practices` for **model deployment** and **serving**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/best_practices_for_ml_develo/best_practices_for_model_deployment_and_serving/004.jpg
:alt: "2/7 Best practices for model deployment and serving"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Model deployment** and **serving** refers to putting a **model** into **production**. 

The output of the **training job** is a **model file** stored on **Cloud Storage**, which you can upload to **Vertex AI** so the file can be used for **prediction serving**. 

For `best practices` for **model deployment** and **serving**: 
* specify the `number and types of machines you need`, 
* plan `inputs to the model`, 
* turn on `automatic scaling`, 
* and define `what is good and bad performance`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/best_practices_for_ml_develo/best_practices_for_model_deployment_and_serving/006.jpg
:alt: "3/7 Best practices for model deployment and serving"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

To **deploy** your **model** for **prediction**, choose hardware that's appropriate for your **model**, like different: 
* central processing unit (`CPU`), 
* virtual machine (`VM`) types, 
* or graphics processing unit (`GPU`) types.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/best_practices_for_ml_develo/best_practices_for_model_deployment_and_serving/007.jpg
:alt: "4/7 Best practices for model deployment and serving"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In addition to **deploying** a **model**, you'll need to determine how you're going to `parse inputs` to the **model**.

If you're using **batch prediction**, you can **fetch data** from the **data lake** or from **Vertex AI Feature Store batch serving API**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/best_practices_for_ml_develo/best_practices_for_model_deployment_and_serving/008.jpg
:alt: "5/7 Best practices for model deployment and serving"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If you're using **online prediction**, you can send **input instances** to the **service**, and it returns your **predictions** in the response.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/best_practices_for_ml_develo/best_practices_for_model_deployment_and_serving/009.jpg
:alt: "6/7 Best practices for model deployment and serving"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If you use the **online prediction service**, in most cases, we recommend that you turn on **automatic scaling** by setting minimum and maximum nodes.

To ensure a high-availability **service level agreement** (**SLA**), set **automatic scaling** with a minimum of `two nodes`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/best_practices_for_ml_develo/best_practices_for_model_deployment_and_serving/010.jpg
:alt: "7/7 Best practices for model deployment and serving"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

When you specify **performance requirements**, you're clarifying what constitutes "good" and "bad" **performance**.

Recall that the `first step` in the **ML process** is to identify a **goal** or **problem**. 

**How do you specify the performance requirements?** 

In **machine learning**, we refer to this as what **metric** you want to **optimize**.

**Business metrics** such as `ROC`, `AUC`, or `RMSE` should match your **business objective**. 

Because a **machine learning model's performance** degrades over time in **production**, you should **evaluate retraining requirements** before **model serving**.

Based on the use case, **model monitoring**, and **evaluation**, you can decide when to **retrain** the **model** again.
</div>
</div>
</div>
</div>
