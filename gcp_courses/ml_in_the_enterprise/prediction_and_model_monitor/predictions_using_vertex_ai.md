# Predictions using Vertex AI

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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/predictions_using_vertex_ai/001.jpg
:alt: "1/21 Predictions using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this lesson, we'll describe **batch** and **online predictions**. 

We'll also describe obtaining **predictions** using
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/predictions_using_vertex_ai/002.jpg
:alt: "2/21 Predictions using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

pre-built and **custom containers**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/predictions_using_vertex_ai/003.jpg
:alt: "3/21 Predictions using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Vertex AI** provides **predictions services** for:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/predictions_using_vertex_ai/004.jpg
:alt: "4/21 Predictions using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**batch predictions**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/predictions_using_vertex_ai/005.jpg
:alt: "5/21 Predictions using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**online predictions** from **AutoML models**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/predictions_using_vertex_ai/006.jpg
:alt: "6/21 Predictions using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and **pre-built containers** and **custom containers** for **prediction** and explanations.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/predictions_using_vertex_ai/007.jpg
:alt: "7/21 Predictions using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

When you're satisfied with your **model's performance** during the **validation** cycle, it's time to **deploy** your **model** .

Perhaps that means **production scale** usage or maybe it's a **one-time prediction request**. 

Depending on your use case, you can use your **model** in different ways.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/predictions_using_vertex_ai/008.jpg
:alt: "8/21 Predictions using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Batch prediction** lets you make many **prediction** requests at once.

**Batch prediction** is **asynchronous,** which means that the **model** will wait until it processes all of the **prediction requests** before returning a CSV file or a **BigQuery table** with **prediction values**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/predictions_using_vertex_ai/009.jpg
:alt: "9/21 Predictions using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Online prediction** is useful if your **model** is part of an application, and parts of your system are dependent on a **quick prediction** turnaround. 

**Deploy** your **model** to make it available for **prediction request** using a **REST API**. 

**Online prediction** is **synchronous** in **real time**, which means that it will quickly return a **prediction** but only accepts **one prediction request** per API call.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/predictions_using_vertex_ai/010.jpg
:alt: "10/21 Predictions using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Vertex AI** provides **Docker container images** that you run as
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/predictions_using_vertex_ai/011.jpg
:alt: "11/21 Predictions using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**pre-built containers** for **serving predictions** and **explanations** from **trained model artifacts**. 

These **containers** which are organized by **machine learning framework** and framework version, provide **HTTP prediction servers** that you can use to **serve predictions** with minimal configuration. 

In many cases, using a **pre-built container** is simpler than using a **custom container**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/predictions_using_vertex_ai/012.jpg
:alt: "12/21 Predictions using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

To use a **custom container** to **serve predictions** from a **custom-trained model**, you must provide **Vertex AI** with a **Docker container image** that runs an HTTP server. 

Specifically, the **container** must listen and respond to liveness checks, health checks, and **prediction requests**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/predictions_using_vertex_ai/013.jpg
:alt: "13/21 Predictions using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let's walk through an example of an **AutoML batch prediction**. 

To create a **batch prediction**, select your **model** from the model page and then select **batch prediction**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/predictions_using_vertex_ai/015.jpg
:alt: "14/21 Predictions using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Batch prediction** intakes a group of **prediction requests** and outputs the results to a specified location. 

**Batch prediction** can be useful with **AutoML models** and **custom-trained models**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/predictions_using_vertex_ai/016.jpg
:alt: "15/21 Predictions using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Requesting a **batch prediction** is an **asynchronous request** as opposed to **online prediction** which we said earlier is a **synchronous request**. 

You request **batch predictions** directly from the **model** resource. 

You don't need to **deploy** the **model** to an **endpoint**. 

For data types that support both **batch** and **online predictions**, use **batch predictions** when you don't require an immediate response and want to process accumulated **data** by using a **single request**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/predictions_using_vertex_ai/017.jpg
:alt: "16/21 Predictions using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

To make a **batch prediction**, you specify an **input source** and an **output location** where **Vertex AI** will store the **prediction results**. 

The inputs and outputs depend on the model type that you're working with.

For example, **batch predictions** for the **AutoML image model** type require an input JSON file and the name of a **cloud storage bucket** to store the output.

Note, if you select the **data source** as a **BigQuery table**, you need the following information;
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/predictions_using_vertex_ai/018.jpg
:alt: "17/21 Predictions using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**dataset ID**, and **table ID**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/predictions_using_vertex_ai/019.jpg
:alt: "18/21 Predictions using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For **BigQuery table** requirements, **BigQuery data source tables** cannot be larger than `100 gigabytes`.

And you must use a **multi-regional BigQuery dataset** in the US or EU locations. 

If the **table** is in a `different project`, you must provide the **BigQuery Data Editor role** to the **Vertex AI service account** in `that` project.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/predictions_using_vertex_ai/020.jpg
:alt: "19/21 Predictions using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For CSV file requirements, the first line of the **data source** must contain the name of the columns. 

Each **data source file** cannot be larger than `10 gigabytes`.

You can include multiple files up to a maximum size of `100 gigabytes`. 

If the **cloud storage bucket** is in a different project where you use **Vertex AI**, you must provide the **Storage Object Creator role** to the **Vertex AI service account** in that project.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/predictions_using_vertex_ai/021.jpg
:alt: "20/21 Predictions using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In addition to creating a **batch prediction** in the console, you can also create a **batch prediction** and a workbench notebook via the **command line**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/predictions_using_vertex_ai/022.jpg
:alt: "21/21 Predictions using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Vertex AI** sends the **batch prediction output** to your specified destination. 

Retrieving your results depends on the destination that you specified for the **batch prediction**, either **BigQuery** or **cloud storage**.

The return **payload** for an **online prediction** with **feature importance** from a **tabular regression model** looks similar to the following JSON example. 

The **instance output value** of `1795.12` is the **predicted value** with the lower bound and upper bound fields providing the `95%` **confidence interval**. 

The `baselineOutputValue` field contains the **baseline prediction score**, in this case, `1788.74`. 

The **feature** that contributed most strongly to this result was **feature** three.
</div>
</div>
</div>
</div>
