# Training on large datasets with tf.data API

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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training_on_large_datasets_with_tf_data_api/001.jpg
:alt: "1/10 Training on large datasets with tf.data API"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It’s time to look at some specifics. 

The `tf.data API` introduces a `tf.data.Dataset` abstraction that represents a sequence of elements, in which each element consists of one or more components. 

For example, in an **image pipeline**, an element might be a single **training example**, with a pair of tensor components representing the image and its **label**. 

There are two distinct ways to create a **dataset**: 
1. A **data source** constructs a **Dataset** from **data** stored in memory or in one or more files. 
2. A **data transformation** constructs a **dataset** from one or more `tf.data.Dataset` **objects**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training_on_large_datasets_with_tf_data_api/002.jpg
:alt: "2/10 Training on large datasets with tf.data API"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Large datasets** tend to be sharded or broken apart into multiple files which can be loaded progressively. 

Remember that you **train** on **mini-batches** of **data**. 

You do not need to have the entire **dataset** in memory. 

One **mini-batch** is all you need for one **training step**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training_on_large_datasets_with_tf_data_api/003.jpg
:alt: "3/10 Training on large datasets with tf.data API"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **Dataset API** will help you create **input functions** for your **model** that will **load data progressively**. 

There are specialized **Dataset classes** that can read **data** from text files like `CSVs`, **Tensorflow records** or fixed length record files. 

**Datasets** can be created from different file formats:

* Use `TextLineDataset` to instantiate a **Dataset object** which is comprised of lines from one or more text files. 
* `TFRecordDataset` comprises records from one or more `TFRecord` files. 
* And `FixedLengthRecordDataset` is a **dataset object** from fixed-length records from one or more binary files. For anything else, you can use the **generic Dataset class** and add your own decoding code.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training_on_large_datasets_with_tf_data_api/004.jpg
:alt: "4/10 Training on large datasets with tf.data API"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let's walk through an example of `TFRecordDataset`. 

At the beginning, the `TFRecord` **op** is created and executed, producing a variant tensor representing a **dataset** which is stored in the corresponding Python object.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training_on_large_datasets_with_tf_data_api/005.jpg
:alt: "5/10 Training on large datasets with tf.data API"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Next, the **Shuffle op** is executed, using the output of the `TFRecord` **op** as its input, connecting the two stages of the **input pipeline**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training_on_large_datasets_with_tf_data_api/006.jpg
:alt: "6/10 Training on large datasets with tf.data API"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Next, the user-defined function is traced and passed as attribute to the **Map operation**, along with the **Shuffle dataset** variant **input**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training_on_large_datasets_with_tf_data_api/007.jpg
:alt: "7/10 Training on large datasets with tf.data API"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Finally, the **Batch op** is created and executed, creating the final stage of the **input pipeline**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training_on_large_datasets_with_tf_data_api/008.jpg
:alt: "8/10 Training on large datasets with tf.data API"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

When the for loop mechanism is used for enumerating the elements of **dataset**, the `iter` method is invoked on the dataset, which triggers creation and execution of two ops. 

First an anonymous **iterator op** is created and executed, which results in creation of an iterator resource.

Subsequently, this resource along with the **Batch dataset variant** is passed into the **MakeIterator op**, initializing the state of the iterator resource with the **dataset**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training_on_large_datasets_with_tf_data_api/009.jpg
:alt: "9/10 Training on large datasets with tf.data API"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

When the `next` method is called, it triggers creation and execution of the **IteratorGetNext op**, passing in the iterator resource as the **input**. 

Note that the **iterator op** is created only once but executed as many times as there are elements in the **input pipeline**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_high_performance_m/training_on_large_datasets_with_tf_data_api/010.jpg
:alt: "10/10 Training on large datasets with tf.data API"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Finally, when the Python iterator object goes out of scope, the **DeleteIterator op** is executed to make sure the iterator resource is properly disposed of. 

To state the obvious, properly disposing of the iterator resource is essential as it is not uncommon for the iterator resource to allocate `100MBs` to `GBs` of memory because of internal buffering.
</div>
</div>
</div>
</div>
