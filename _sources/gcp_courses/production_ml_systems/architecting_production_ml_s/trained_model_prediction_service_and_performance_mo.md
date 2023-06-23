# Trained model, prediction service, and performance monitoring

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

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/trained_model_prediction_service_and_performance_mo/001.jpg
:alt: "1/20 Trained model, prediction service, and performance monitoring"
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

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/trained_model_prediction_service_and_performance_mo/002.jpg
:alt: "2/20 Trained model, prediction service, and performance monitoring"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **output** of **model validation** is a **trained model** that can be pushed to the **model registry**. 

A **machine learning model registry** is a centralized tracking system that
stores lineage, versioning, and related metadata for **published machine learning models**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/trained_model_prediction_service_and_performance_mo/003.jpg
:alt: "3/20 Trained model, prediction service, and performance monitoring"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

A **registry** may capture **governance data** required for auditing purposes, such as:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/trained_model_prediction_service_and_performance_mo/004.jpg
:alt: "4/20 Trained model, prediction service, and performance monitoring"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Who **trained** and **published** a **model**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/trained_model_prediction_service_and_performance_mo/005.jpg
:alt: "5/20 Trained model, prediction service, and performance monitoring"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Which **datasets** were used for **training**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/trained_model_prediction_service_and_performance_mo/006.jpg
:alt: "6/20 Trained model, prediction service, and performance monitoring"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The values of **metrics** measuring **predictive performance**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/trained_model_prediction_service_and_performance_mo/007.jpg
:alt: "7/20 Trained model, prediction service, and performance monitoring"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

When the **model** was **deployed** to **production**

It’s a place to find, publish, and use **ML models** or **model pipeline components**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/trained_model_prediction_service_and_performance_mo/008.jpg
:alt: "8/20 Trained model, prediction service, and performance monitoring"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Machine learning** uses **data** to answer questions. 

So **prediction**, or **inference**, is the step where we get to answer the questions we posed–whether it be a **business problem** or an academic research problem. 

The **trained model** is served as a **prediction service** to **production**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/trained_model_prediction_service_and_performance_mo/009.jpg
:alt: "9/20 Trained model, prediction service, and performance monitoring"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It’s important to note that the process is concerned only with **deploying** the **trained model** as a **prediction service**, for example, a **microservice** with a `REST API`, rather than **deploying** the entire **ML system**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/trained_model_prediction_service_and_performance_mo/010.jpg
:alt: "10/20 Trained model, prediction service, and performance monitoring"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For example, **Google’s AI Platform Prediction service** has an `API` for **serving predictions** from **machine learning models**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/trained_model_prediction_service_and_performance_mo/011.jpg
:alt: "11/20 Trained model, prediction service, and performance monitoring"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this particular example, **AI Platform Prediction** retrieves the **trained model** and saves it as a pickle in **Cloud Storage**. 

Pickle is the standard way of serializing objects in Python.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/trained_model_prediction_service_and_performance_mo/012.jpg
:alt: "12/20 Trained model, prediction service, and performance monitoring"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Trained models** deployed in **AI Platform Prediction service** are exposed as `REST` **endpoints** that can be invoked from any standard client that supports `HTTP`, such as a JupyterLab notebook.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/trained_model_prediction_service_and_performance_mo/013.jpg
:alt: "13/20 Trained model, prediction service, and performance monitoring"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **AI Platform Prediction service** can host **models** trained in popular **machine learning frameworks** including **TensorFlow**, **XGBoost**, and **Scikit-Learn**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/trained_model_prediction_service_and_performance_mo/014.jpg
:alt: "14/20 Trained model, prediction service, and performance monitoring"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

As a `best practice`, you need a way to **actively monitor** the **quality** of your **model** in **production**. 

**Monitoring** lets you detect **model performance degradation** or **model staleness**.

The output of monitoring for these changes then feeds into the **data analysis component**, which could serve as a trigger to execute the **pipeline** or to execute a new experimental cycle.

For example, **monitoring** should be designed to detect **data skews**, which occur when your **model training data** is not representative of the **live data**. 

That is to say, the **data** that we used to **train** the **model** in the research or **production environment** does not represent the **data** that we actually get in our **live system**, and this leads to **model staleness**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/trained_model_prediction_service_and_performance_mo/015.jpg
:alt: "15/20 Trained model, prediction service, and performance monitoring"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

To understand other **performance metrics**, you can configure **Google’s Cloud
Monitoring** to **monitor** your **model's**:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/trained_model_prediction_service_and_performance_mo/016.jpg
:alt: "16/20 Trained model, prediction service, and performance monitoring"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Traffic patterns
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/trained_model_prediction_service_and_performance_mo/017.jpg
:alt: "17/20 Trained model, prediction service, and performance monitoring"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Error rates
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/trained_model_prediction_service_and_performance_mo/018.jpg
:alt: "18/20 Trained model, prediction service, and performance monitoring"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Latency
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/trained_model_prediction_service_and_performance_mo/019.jpg
:alt: "19/20 Trained model, prediction service, and performance monitoring"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Resource utilization
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/trained_model_prediction_service_and_performance_mo/020.jpg
:alt: "20/20 Trained model, prediction service, and performance monitoring"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

This can help spot problems with your **models** and find the right machine type to
**optimize latency** and cost.
</div>
</div>
</div>
</div>
