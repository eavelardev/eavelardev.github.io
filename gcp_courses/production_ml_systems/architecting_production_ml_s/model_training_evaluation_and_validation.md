# Model training, evaluation, and validation

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

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/model_training_evaluation_and_validation/001.jpg
:alt: "1/17 Model training, evaluation, and validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The next step in our **workflow** is
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/model_training_evaluation_and_validation/002.jpg
:alt: "2/17 Model training, evaluation, and validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

choosing a **model** that you’ll **train**. 

In **model training**, you implement different **machine learning algorithms** with the **prepared data** to **train** various **ML models**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/model_training_evaluation_and_validation/003.jpg
:alt: "3/17 Model training, evaluation, and validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Essentially, **model training** is the process of
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/model_training_evaluation_and_validation/007.jpg
:alt: "4/17 Model training, evaluation, and validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**feeding** an **ML algorithm** with **data** to help **identify** and **learn** good values for the **feature set**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/model_training_evaluation_and_validation/008.jpg
:alt: "5/17 Model training, evaluation, and validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

So, you use your data to incrementally improve your **model’s predictive ability**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/model_training_evaluation_and_validation/009.jpg
:alt: "6/17 Model training, evaluation, and validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Model evaluation** aims to estimate the **generalization accuracy** of a **model** on **future**, **unseen**, or **out-of-sample data**. 

While **training** a **model** is a key step in the **pipeline**, **how the model generalizes on unseen data** is an equally important aspect that should be considered in every **machine learning pipeline**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/model_training_evaluation_and_validation/010.jpg
:alt: "7/17 Model training, evaluation, and validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

This means that we need to know whether the **model** actually works and,
consequently, if we can `trust` its **predictions**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/model_training_evaluation_and_validation/011.jpg
:alt: "8/17 Model training, evaluation, and validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Could the model be merely memorizing the data it’s fed with,**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/model_training_evaluation_and_validation/012.jpg
:alt: "9/17 Model training, evaluation, and validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**and therefore unable to make good predictions on future samples, or samples that it hasn’t seen before, such as the test set?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/model_training_evaluation_and_validation/013.jpg
:alt: "10/17 Model training, evaluation, and validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Model evaluation** consists of a person or group of people evaluating or assessing the model with respect to some **business-relevant metric**, like `AUC` (**area under the curve**) or **cost-weighted error**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/model_training_evaluation_and_validation/014.jpg
:alt: "11/17 Model training, evaluation, and validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If the model meets their **criteria**, then the **model** is moved from
the **assessment phase** to **development**.

For example, in the **development phase**, you may want to make modifications to
**hyperparameter values** to increase the **model’s performance**, which correlates to improvements in **evaluation results**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/model_training_evaluation_and_validation/015.jpg
:alt: "12/17 Model training, evaluation, and validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

After **development**, the **model** is then ready for a **live experiment** or **real-world test** of the **model**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/model_training_evaluation_and_validation/016.jpg
:alt: "13/17 Model training, evaluation, and validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In contrast to the **Model Evaluation component**, which is performed by humans, the
**Model Validation component** evaluates the **model** against fixed thresholds and alerts
engineers when things go awry. 

One common test is to look at **performance by slice**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/model_training_evaluation_and_validation/017.jpg
:alt: "14/17 Model training, evaluation, and validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s say, for example, **business stakeholders** care strongly about
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/model_training_evaluation_and_validation/018.jpg
:alt: "15/17 Model training, evaluation, and validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

a particular geographic market region.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/model_training_evaluation_and_validation/019.jpg
:alt: "16/17 Model training, evaluation, and validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

An alert can be set to notify engineers when the **accuracy** by country begins to **skew**
downward.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/model_training_evaluation_and_validation/020.jpg
:alt: "17/17 Model training, evaluation, and validation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **model evaluation** and **validation components** have one responsibility: 

to ensure that the **models** are ‘good’ before moving them into a **production environment**.
</div>
</div>
</div>
</div>
