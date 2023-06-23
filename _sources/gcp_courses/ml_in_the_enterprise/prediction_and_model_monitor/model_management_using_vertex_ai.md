# Model management using Vertex AI

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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/001.jpg
:alt: "1/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this lesson, we describe **Model monitoring**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/002.jpg
:alt: "2/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Vertex AI model monitoring** is a service that helps you **manage** the **performance** of your **models**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/003.jpg
:alt: "3/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Model monitoring** lets you detect **drift** in **data quality**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/004.jpg
:alt: "4/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

identify **skew** in **training** versus **serving data**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/005.jpg
:alt: "5/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

monitor **feature attribution**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/006.jpg
:alt: "6/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and use the UI to visualize **monitoring metrics**.

Let's walk through an example.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/007.jpg
:alt: "7/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

First to create a **model deployment monitoring job** by using the Cloud Console,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/009.jpg
:alt: "8/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

you need to either create an **endpoint** or edit an existing **endpoint** to enable **monitoring**. 

In the navigation page, select **endpoints**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/010.jpg
:alt: "9/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this example, three existing **endpoints** have **monitoring** disabled.

To enable **model monitoring** for the existing **endpoint** `credit_risk`,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/011.jpg
:alt: "10/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

simply select the **endpoint** and then click settings.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/012.jpg
:alt: "11/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

On the edit **endpoint** page, select **model monitoring**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/013.jpg
:alt: "12/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and toggle the button to enable **monitoring** for the **endpoint**.

Note that you can **monitor** the **tabular** and **custom models** deployed to this **endpoint** for changes in **feature drift**, **training serving skew**, and other objectives that help you understand how your **model** is **performing** compared to **real world data**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/014.jpg
:alt: "13/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Also note that settings in this step apply to all **models** deployed to the **endpoint**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/015.jpg
:alt: "14/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

After enabling **monitoring** and naming the **monitoring job display name**, you must define the size of the **time window** to **monitor** when the **monitoring job** runs, and this must be defined in `hours`. 

**Monitoring frequency** determines how often a **deployed model's inputs** are **monitored** for **skew** or **drift**. 

At the specified frequency, a **monitoring job** runs and performs **monitoring** on the recently logged inputs. 

**Monitoring frequency** determines the time spent or **monitoring window size** of logged data that is **analyzed** in each **monitoring run**. 

In the Google Cloud Console, you can see the time when each **monitoring job** runs and also visualize the **data analyzed** in each job. 

The minimum granularity is `one hour`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/016.jpg
:alt: "15/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Model monitoring** requires you to provide an `email address` to serve as the `email ID`. 

**Model monitoring** sends an `email alert` each time an alerting threshold is crossed, and each time **skew** or **drift detection** is set up, and each time an existing **model monitoring job configuration** is `updated`. 

The `email alert` contain pertinent information, including;
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/017.jpg
:alt: "16/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

the time at which the **monitoring job** ran,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/018.jpg
:alt: "17/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

the name of the **feature** that has **skew** or **drift**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/019.jpg
:alt: "18/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and the **alerting threshold** and the recorded `statistical distance` measure.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/020.jpg
:alt: "19/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Sampling rate** defines a `percentage` of the **prediction input data** that should be sampled when the **monitoring job** runs. 

This parameter controls the fraction of the **incoming prediction request** that are logged and **analyzed** for monitoring purposes. 

This is an optional parameter. 

If you don't configure this parameter, the **model monitoring service** logs all **prediction requests**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/021.jpg
:alt: "20/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **input schema** has two **input fields**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/022.jpg
:alt: "21/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

one is for the **prediction input schema**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/023.jpg
:alt: "22/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and the other is for an **analysis input schema**.

The **prediction input schema** defines the `format` of a single instance used in **prediction**. 

If the **schema** is not set, the **monitoring job** will generate the **prediction schema** from collected **prediction request**.

The **analysis input schema** describes the `format` of a single instance which **TensorFlow Data Validation** analyzes. 

If this **schema** is not set, the **monitoring job** will generate the **analysis schema** from collected **prediction request**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/024.jpg
:alt: "23/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

So next, you need to select
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/025.jpg
:alt: "24/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

the **monitoring objective**;
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/026.jpg
:alt: "25/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**training prediction skew detection**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/027.jpg
:alt: "26/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and the **target** field.

In **training prediction skew detection**, **skew** is calculated between **feature distributions** of **prediction input data** and **training data**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/028.jpg
:alt: "27/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this example, we chose to **monitoring** the **skew** from a **managed dataset** called `credit_risk_2`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/029.jpg
:alt: "28/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **target field** `default` is entered into the **target field**.

**Alert thresholds** are optional. 

You can specify an **alert threshold value** for each **feature** that will be used to **trigger alerts**. 

Values range from zero to one. 

If an **alert threshold** is not set, default **thresholds** will be used.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/030.jpg
:alt: "29/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

After configuring your **monitoring settings**, you will receive an email message that you are now using the **vertex AI model monitoring service**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/031.jpg
:alt: "30/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The email informs you that your request to set up **drift** or **skew detection** for the **prediction endpoint** is noted, and that **incoming prediction request** will be sampled and logged for any **analysis**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/032.jpg
:alt: "31/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Here, **monitoring** is now `enabled`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/033.jpg
:alt: "32/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

When a **feature** is **monitored** for **training serving skew** or **prediction drift**, **model monitoring** computes the s**tatistical distribution** of the latest **feature values** seen in **production**. 

This **statistical distribution** is then compared against another **baseline distribution** by computing a **distance score** to determine how similar the **production feature values** are to the **baseline**.

When the **distance score** between two **statistical distributions** exceed a certain **threshold**, **model monitoring** identifies that as **skew** or **drift**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/034.jpg
:alt: "33/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Model monitoring** uses different **baselines** for **skew detection** and **drift detection**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/035.jpg
:alt: "34/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For **skew detection**, the **baseline** is the **statistical distribution** of the **feature's values** in the **training data**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/036.jpg
:alt: "35/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For **drift detection**, the **baseline** is the **statistical distribution** of the **feature's values** seen in **production** in the recent past.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/037.jpg
:alt: "36/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Presented here is an example of f**eature distribution monitoring**. 

To compare two **statistical distributions**, **model monitoring** uses the following **statistical measures**; the `Jensen-Shannon divergence`, which is to calculate this distance between two **distributions** of `numerical features`, and the `L-infinity` distance, which is to calculate the distance between two distributions. 

Visualizing **data distribution** as **histograms** lets you quickly focus on the changes that occurred in the **data**.

Afterward, you might decide to adjust your **feature generation pipeline** or **retrain** the **model**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/038.jpg
:alt: "37/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For **categorical features**, the computed **distribution** is the number or percentage of instances of each possible value of the **feature**.

For **numerical features**, we divide the range of possible **feature values** into equal intervals, and compute the number or percentage of **feature values** that fall in each interval.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/prediction_and_model_monitor/model_management_using_vertex_ai/039.jpg
:alt: "38/38 Model management using Vertex AI"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

As we've shown, **prediction** and **model monitoring** both allow you to request either **batch** and **online predictions** via a **BigQuery table**, a CSV file, or from a **pre-built** or **custom container**, and monitor **training serving skew**.
</div>
</div>
</div>
</div>
