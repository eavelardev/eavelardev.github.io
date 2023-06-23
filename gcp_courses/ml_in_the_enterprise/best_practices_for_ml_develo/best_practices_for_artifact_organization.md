# Best practices for artifact organization

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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/best_practices_for_ml_develo/best_practices_for_artifact_organization/001.jpg
:alt: "1/14 Best practices for artifact organization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this lesson, we provide an overview of `best practices` for **artifact organization**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/best_practices_for_ml_develo/best_practices_for_artifact_organization/002.jpg
:alt: "2/14 Best practices for artifact organization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

An **artifact lineage** describes all the factors that resulted in an **artifact** such as **training data** or **hyperparameters** used for **model training**.

By using **artifact lineage**, you can understand differences in **performance** or **accuracy** over several **pipeline runs**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/best_practices_for_ml_develo/best_practices_for_artifact_organization/003.jpg
:alt: "3/14 Best practices for artifact organization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For example, a **model's lineage** could include the following:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/best_practices_for_ml_develo/best_practices_for_artifact_organization/004.jpg
:alt: "4/14 Best practices for artifact organization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **training**, **test** and **evaluation data** used to **train** the **model**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/best_practices_for_ml_develo/best_practices_for_artifact_organization/005.jpg
:alt: "5/14 Best practices for artifact organization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **hyperparameters** used during **model training**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/best_practices_for_ml_develo/best_practices_for_artifact_organization/006.jpg
:alt: "6/14 Best practices for artifact organization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The code that was used to train the model.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/best_practices_for_ml_develo/best_practices_for_artifact_organization/007.jpg
:alt: "7/14 Best practices for artifact organization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Metadata** recorded from the **training** and **evaluation process**, such as the **model's accuracy**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/best_practices_for_ml_develo/best_practices_for_artifact_organization/008.jpg
:alt: "8/14 Best practices for artifact organization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and **artifacts** that descend from this **model**, such as the **results** of **batch predictions**.

Note that each **pipeline run** produces **metadata** and **ML artifacts** such as **models** or **datasets**.

By using **artifact lineage**, you can understand differences in **performance** or **accuracy** over several **pipeline runs**. 

**Vertex ML metadata** stores **artifacts** and **metadata** for **pipelines run** using **Vertex AI pipelines**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/best_practices_for_ml_develo/best_practices_for_artifact_organization/009.jpg
:alt: "9/14 Best practices for artifact organization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Artifacts** are outputs resulting from each step in the **ML workflow**. 

It's a `best practice` to organize them in a standardized way.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/best_practices_for_ml_develo/best_practices_for_artifact_organization/010.jpg
:alt: "10/14 Best practices for artifact organization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You can use **Git** to **version control** your **ML pipelines** and the **custom components** you build for those **pipelines**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/best_practices_for_ml_develo/best_practices_for_artifact_organization/011.jpg
:alt: "11/14 Best practices for artifact organization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Use **Artifact Registry** to **store**, **manage,** and **secure** your dock of **container images** without making them publicly visible.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/best_practices_for_ml_develo/best_practices_for_artifact_organization/012.jpg
:alt: "12/14 Best practices for artifact organization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Artifacts** can be organized by: **source control repo** location, where **artifacts** such as **notebooks** and **pipeline source code** can be stored;
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/best_practices_for_ml_develo/best_practices_for_artifact_organization/013.jpg
:alt: "13/14 Best practices for artifact organization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**experiments** and **ML metadata**, where **artifacts** such as **experiments**, **parameters**, and **metrics** can be stored;
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/best_practices_for_ml_develo/best_practices_for_artifact_organization/014.jpg
:alt: "14/14 Best practices for artifact organization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and **Artifact Registry**, where **artifacts** such as **pipeline containers** and **custom training environments** are stored.
</div>
</div>
</div>
</div>
