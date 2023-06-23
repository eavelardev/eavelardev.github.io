# Machine learning (ML) practitioners’ pain points

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

```{image} ../../../images/gcp_courses/ml_operations_mlops_getting_started/employing_ml_operations/ml_ml_practitioners_pain_points/001.jpg
:alt: "1/4 Machine learning (ML) practitioners’ pain points"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

“**ML practitioner**” is used to describe all these different roles throughout the **ML lifecycle**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_operations_mlops_getting_started/employing_ml_operations/ml_ml_practitioners_pain_points/002.jpg
:alt: "2/4 Machine learning (ML) practitioners’ pain points"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Now, let's look at the challenges these **ML practitioners** face when they **operationalize** and make their **models** available for **production.**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_operations_mlops_getting_started/employing_ml_operations/ml_ml_practitioners_pain_points/003.jpg
:alt: "3/4 Machine learning (ML) practitioners’ pain points"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

These challenges include **managing** and **keeping track** of complex details, such as **data**, **model** **architectures**, **hyperparameters**, and **experiments**. 

As for specific pain points, we hear it can be challenging to:

**Keep track of different versions of the models and their codes, different training procedure parameters, hyperparameter values in each trial, and performance metrics**. 

Control the experiment space to advance. 

In every iteration, these practitioners need to **monitor** what changes are being made, which ideas are being tried, which ideas work, and which ideas don’t. 

Pinpoint the **best performing model** when the models are benchmarked against each other. 

The **best model** here refers to the one that delivers the ideal result for your specific use case. 

Collaborate with 
* **data scientists**, 
* **data engineers**, 
* **ML engineers**, 
* **application developers**, 
* **site reliability engineers**,
* **business analysts**, and 
* **business users** 

in operationalizing the **ML models**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_operations_mlops_getting_started/employing_ml_operations/ml_ml_practitioners_pain_points/004.jpg
:alt: "4/4 Machine learning (ML) practitioners’ pain points"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And then there is the matter of **reproducibility**.

**Deploying** a **model** to a **production environment** is difficult unless it can be reproduced. 

In fact, bypassing the **reproducibility of the model** is often discouraged or disallowed by policies or regulations.

**Reproducibility** can be a major concern for **ML practitioners**, because they want to be able to rerun the **best model** with a more comprehensive parameter sweep. 

When a team successfully trains and makes a **model ready for production** in a streamlined fashion, performance and agility are considerably improved. 

Even if there’s a manual review step in the **pipeline**, **automation ensures that each job is configured and executed in a repeatable manner**, which reduces the risk of errors.

Also, **for a production application, the model needs to be updated regularly as new data comes in**. 

Therefore, **traceability** becomes paramount.
</div>
</div>
</div>
</div>
