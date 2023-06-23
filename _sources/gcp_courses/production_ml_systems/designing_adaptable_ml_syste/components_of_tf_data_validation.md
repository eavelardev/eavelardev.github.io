# Components of TensorFlow data validation

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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/001.jpg
:alt: "1/25 Components of TensorFlow data validation"
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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/002.jpg
:alt: "2/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**TensorFlow Data Validation** is a library for **analyzing** and **validating machine learning data**, for which there are three components:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/003.jpg
:alt: "3/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* The **Statistics Generation** component
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/004.jpg
:alt: "4/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* The **Schema Generation** component
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/005.jpg
:alt: "5/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* The **Example Validator** component
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/006.jpg
:alt: "6/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The `StatisticsGen` component generates **features statistics** and random samples over **training data**, which can be used for **visualization** and **validation**. 

It requires minimal configuration. 

For example, `StatisticsGen` takes as **input** a **dataset ingested** using `ExampleGen`. 

After `StatisticsGen` finishes running, you can **visualize** the outputted **statistics**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/007.jpg
:alt: "7/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In an example using taxi **data**, the `StatisticsGen` component has generated **data statistics** for the **numeric features**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/008.jpg
:alt: "8/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For the `trip_start_hour` **feature**, it appears there is not that much **data** in the early morning hours. 

It appears that the `trip_start_hour` column, where the time window is between 2:00am to 6:00am, has **data missing**. 

This helps determine the area we need to focus on to fix any **data-related problems**. 

We’ll need to get more **data**, otherwise, the **prediction** for 4:00am **data** will be overgeneralized.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/009.jpg
:alt: "9/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s look at another example, this time using a consumer spending score **dataset**. 

Here we are generating **statistics** for both a **training dataset**, that may have arrived on day one, and a **new dataset**, that may have arrived on day two. 

These **statistics** are being generated from a `Pandas DataFrame`. 

You can also generate **statistics** from a `CSV` file or a `TF.Record` formatted file.

By comparing both **datasets**, you can **analyze** how big of a difference there is between the two, and then determine if that difference matters.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/010.jpg
:alt: "10/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

`StatisticsGen` generates both **numeric** and **categorical features**. 

In this example, our **dataset** has two **numerical features**, `Work_Experience` and `Family_Size`. 

Our dataset also has three **categorical features**: `Graduated`, `Profession`, and `Spending_Score`. 

Notice that for our **categorical features**, in addition to seeing the number of missing **values**, we also see the number of unique **values**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/011.jpg
:alt: "11/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**TensorFlow Data Validation** can also help you identify **unbalanced data distributions**. 

For example, if you have a **dataset** you are using for a **classification problem** and you see that one **feature** has a lower percentage of **values** than the other, you can use **TensorFlow Data Validation** to detect this “**unbalance**”. 

The most **unbalanced features** will be listed at the top of each feature-type list. 

For example, the following screenshot shows `Work_Experience` with zero has a **data value** - which means that `31.54%` of the **values** in this **feature** are zeroes.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/012.jpg
:alt: "12/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

There are a number of `StatisticsGen` **data validation** checks that you should be aware of. 

These include:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/013.jpg
:alt: "13/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* **Feature** `min`, `max`, `mean`, `mode`, and `median`
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/014.jpg
:alt: "14/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* **Feature correlations**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/015.jpg
:alt: "15/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* **Class imbalance**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/016.jpg
:alt: "16/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* Check to see **missing values**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/017.jpg
:alt: "17/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Histograms** of **features** (for both **numerical** and **categorical**)
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/018.jpg
:alt: "18/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The `SchemaGen` **TFX pipeline component** can specify **data types** for **feature values**, whether a **feature** has to be present in all examples, allowed **value ranges**, and other properties. 

A `SchemaGen` **pipeline component** will automatically generate a **schema** by **inferring types**, **categories**, and **ranges** from the **training data**. 

In essence, `SchemaGen` is looking at the **data type** of the **input**, is it an `int`, `float`, `categorical`, etc. 

If it is `categorical` then **what are the valid values?** 

It also comes with a visualization tool to review the **inferred schema** and fix any issues.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/019.jpg
:alt: "19/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this example visualization:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/020.jpg
:alt: "20/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Type** indicates the **feature datatype**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/021.jpg
:alt: "21/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

`Presence` indicates whether the **feature** must be present in 100% of examples (required) or not (optional).
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/022.jpg
:alt: "22/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

`Valency` indicates the number of values required per **training example**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/023.jpg
:alt: "23/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Domain** and **Values** indicates the **feature domain** and its **values**.

In the case of **categorical features**, single indicates that each **training example** must have exactly **one category** for the **feature**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/024.jpg
:alt: "24/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The `ExampleValidator` **pipeline component** identifies **anomalies** in **training** and **serving data**. 

It can detect different **classes of anomalies** in the **data** and emit **validation results**. 

The `ExampleValidator` **pipeline component** identifies any **anomalies** in the **example data** by comparing **data statistics** computed by the `StatisticsGen` **pipeline component** against a **schema**. 

It takes the **inputs** and looks for problems in the **data**, like **missing values**, and reports any **anomalies**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/components_of_tf_data_validation/025.jpg
:alt: "25/25 Components of TensorFlow data validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

As we’ve explored, **TensorFlow Data Validation** is a component of **TensorFlow Extended** and it helps you to **analyze** and **validate** your **data**. 

**Data validation** checks include identifying **feature correlations**, checking for **missing values**, and identifying **class imbalances**.
</div>
</div>
</div>
</div>
