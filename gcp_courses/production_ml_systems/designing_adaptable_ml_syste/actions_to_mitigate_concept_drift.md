# Actions to mitigate concept drift

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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/actions_to_mitigate_concept_drift/001.jpg
:alt: "1/18 Actions to mitigate concept drift"
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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/actions_to_mitigate_concept_drift/002.jpg
:alt: "2/18 Actions to mitigate concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

As previously mentioned, both **data drift** and **concept drift** lead to **Model Drift**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/actions_to_mitigate_concept_drift/003.jpg
:alt: "3/18 Actions to mitigate concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Data drift** - Examples of **data drift** can include concepts of:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/actions_to_mitigate_concept_drift/004.jpg
:alt: "4/18 Actions to mitigate concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* The change in the spamming behavior to try to fool the **model**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/actions_to_mitigate_concept_drift/005.jpg
:alt: "5/18 Actions to mitigate concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* A rule update in the app–in other words, a change in the limit of user messages per minute.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/actions_to_mitigate_concept_drift/006.jpg
:alt: "6/18 Actions to mitigate concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* **Selection bias**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/actions_to_mitigate_concept_drift/007.jpg
:alt: "7/18 Actions to mitigate concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Non-stationary environment--**training data** for a given season that has no power to generalize to another season.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/actions_to_mitigate_concept_drift/008.jpg
:alt: "8/18 Actions to mitigate concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

eCommerce apps are good examples of potential **concept drift** due to their reliance on personalization, for example, the fact that people’s preferences ultimately do change over time.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/actions_to_mitigate_concept_drift/009.jpg
:alt: "9/18 Actions to mitigate concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Sensors may also be subject to **concept drift** due to the nature of the **data** they collect and how it may change over time.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/actions_to_mitigate_concept_drift/010.jpg
:alt: "10/18 Actions to mitigate concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Movie **recommendations** - again - similar to eCommerce apps - rely on user preferences - and they may change.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/actions_to_mitigate_concept_drift/011.jpg
:alt: "11/18 Actions to mitigate concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Demand **forecasting** heavily relies on time, and as we have seen, time is a major contributor to potential **concept drift**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/actions_to_mitigate_concept_drift/012.jpg
:alt: "12/18 Actions to mitigate concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

So, **what if you diagnose data drift?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/actions_to_mitigate_concept_drift/013.jpg
:alt: "13/18 Actions to mitigate concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If you diagnose **data drift**, enough of the **data** needs to be **labeled** to introduce new **classes** and the **model retrained**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/actions_to_mitigate_concept_drift/014.jpg
:alt: "14/18 Actions to mitigate concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**What if you diagnose concept drift?** If you diagnose **concept drift**, the old data needs to be **relabeled** and the **model retrained**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/actions_to_mitigate_concept_drift/015.jpg
:alt: "15/18 Actions to mitigate concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Also, for **concept drift**, you can design your systems to detect changes. 

Periodically updating your **static model** with more recent historical data, for example, is a common way to mitigate **concept drift**. 

You can either discard the **static model** completely or you can use the existing state as the starting point for a better **model** to update your **model** by using a sample of the most recent historical **data**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/actions_to_mitigate_concept_drift/016.jpg
:alt: "16/18 Actions to mitigate concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You can also use an **ensemble** approach to **train** your **new model** in order to correct the **predictions** from prior **models**. 

The prior knowledge learnt from the old concept is used to improve the learning of the **new concept**. 

**Ensembles** which learnt the old concept with high diversity are **trained** by using low diversity on the **new concept**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/actions_to_mitigate_concept_drift/017.jpg
:alt: "17/18 Actions to mitigate concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Remember, **concept drift** is the **change in relationships between the model inputs and the model output**. 

After your diagnosis and mitigation efforts, **retraining** or refreshing the **model** over time will help to maintain **model quality**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/actions_to_mitigate_concept_drift/018.jpg
:alt: "18/18 Actions to mitigate concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

As the world changes, your **data** may change. 

The change can be gradual, sudden, and seasonal. 

These changes will impact **model performance**. 

Thus, **machine learning models** can be expected to degrade or decay. 

Sometimes, the **performance** drop is due to **low data quality**, broken **data pipelines**, or technical bugs.
</div>
</div>
</div>
</div>
