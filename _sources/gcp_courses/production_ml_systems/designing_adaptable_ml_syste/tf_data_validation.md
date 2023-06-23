# TensorFlow data validation

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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/001.jpg
:alt: "1/39 TensorFlow data validation"
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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/002.jpg
:alt: "2/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

There are three phases in a **pipeline**:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/003.jpg
:alt: "3/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* **Data** is **ingested** and **validated**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/004.jpg
:alt: "4/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* A **model** is **trained** and **analyzed**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/005.jpg
:alt: "5/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* The **model** is then **deployed** in **production**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/006.jpg
:alt: "6/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

We’ll provide an overview of **TensorFlow Data Validation**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/007.jpg
:alt: "7/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

which is part of the **ingest** and **validate data phase**.

To learn more about the **train** and **analyze** the **model phase**, or how to **deploy** a **model** in **production**, please check out our **MLOps** Course.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/008.jpg
:alt: "8/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**TensorFlow Data Validation** is a library for **analyzing** and **validating machine learning data**.  

Two common use-cases of **TensorFlow Data Validation** within a **TensorFlow Extended pipelines** are
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/009.jpg
:alt: "9/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**validation** of continuously arriving **data**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/010.jpg
:alt: "10/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and **training**/**serving** **skew detection**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/011.jpg
:alt: "11/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **pipeline** begins with the `ExampleGen` component. 

This component takes **raw data** as **input** and generates **TensorFlow** examples, it can take many **input** formats (e.g. CSV, **TF Record**). 

It also does split the examples for you into **Train**/**Eval**. 

It then passes the result...
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/012.jpg
:alt: "12/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

...to the `StatisticsGen` component. 

This brings us to the three main components of **TensorFlow Data Validation**.

The **Statistics Generation** component - which generates **statistics** for **feature analysis**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/013.jpg
:alt: "13/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

the **Schema Generation** component - which gives you a description of your **data**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/014.jpg
:alt: "14/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and the **Example Validator** component - which allows you to check for anomalies. 

We’ll explore those three components in more depth, but first let’s look at our **use cases** for **TensorFlow Data Validation** so that we can understand how these components work.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/015.jpg
:alt: "15/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

There are many reasons and **use cases** where you may need to **analyze** and **transform** your **data**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/016.jpg
:alt: "16/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For example, when you’re missing **data**, such as **features** with **empty values**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/017.jpg
:alt: "17/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

or when you have **labels** treated as **features**, so that your **model** gets to peek at the right answer during **training**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/018.jpg
:alt: "18/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You may also have **features** with **values outside the range you expect**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/019.jpg
:alt: "19/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

or other **data anomalies**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/020.jpg
:alt: "20/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

To engineer more **effective feature sets**, you should identify:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/021.jpg
:alt: "21/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Especially **informative features**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/022.jpg
:alt: "22/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

redundant **features**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/023.jpg
:alt: "23/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**features** that vary so widely in **scale** that they may slow **learning**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/024.jpg
:alt: "24/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and **features** with little or no unique **predictive information**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/025.jpg
:alt: "25/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

One **use case** for **TensorFlow Data Validation** is to validate continuously arriving **data**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/027.jpg
:alt: "26/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* Let’s say on day one you generate **statistics** based on **data** from day one
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/028.jpg
:alt: "27/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Then, you generate **statistics** based on day two **data**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/029.jpg
:alt: "28/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

From there, you can validate Day 2 **statistics** against day one **statistics** and generate a **validation report**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/030.jpg
:alt: "29/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* You can do the same for day three, **validating** day three **statistics** against **statistics** from both day two and day one.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/031.jpg
:alt: "30/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**TensorFlow Data Validation** can also be used to detect **distribution skew** between **training** and **serving data**. 

**Training**-**serving skew**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/032.jpg
:alt: "31/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

occurs when **training data** is generated differently from how the **data** used to **request predictions** is generated.  

But **what causes distribution skew?** 

Possible causes might come from a change in **how data is handled in training vs in production**, or even a **faulty sampling mechanism** that only chooses a subsample of the **serving data** to **train** on.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/033.jpg
:alt: "32/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For example, if you use an **average value**, and for **training** purposes you average over 10 days,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/034.jpg
:alt: "33/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

but when you request **prediction**, you average over the last month.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/035.jpg
:alt: "34/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In general, any difference between how you generate your **training data** and your **serving data** (the data you use to generate **predictions**) should be reviewed to prevent **training-serving skew**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/036.jpg
:alt: "35/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Training-serving skew** can also occur based on your **data distribution** in your **training**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/037.jpg
:alt: "36/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**validation**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/038.jpg
:alt: "37/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and **testing data** splits.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/039.jpg
:alt: "38/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

To summarize, **distribution skew** occurs when the **distribution** of **feature values** for **training data** is significantly different from **serving data**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/tf_data_validation/040.jpg
:alt: "39/39 TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and one of the key causes for **distribution skew** is **how data is handled or changed in training vs in production**.
</div>
</div>
</div>
</div>
