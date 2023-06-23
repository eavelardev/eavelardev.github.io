# The concept of devOps in ML

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

```{image} ../../../images/gcp_courses/ml_operations_mlops_getting_started/employing_ml_operations/the_concept_of_devops_in_ml/001.jpg
:alt: "1/16 The concept of devOps in ML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let's walk through the **phases of developing and publishing a machine learning model**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_operations_mlops_getting_started/employing_ml_operations/the_concept_of_devops_in_ml/002.jpg
:alt: "2/16 The concept of devOps in ML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Given all the barriers that **ML practitioners** face today, **what can be done to mitigate them?**

One option is to **look at machine learning projects through an operational lens**. 

**Operationalizing a model** means balancing time, resources, and quality throughout the whole system. 

In **software engineering**, this approach is called `DevOps`.

That term transfers over to **machine learning** as `MLOps`, which aims to streamline **AI and ML projects** in the same way that `DevOps` does for application projects.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_operations_mlops_getting_started/employing_ml_operations/the_concept_of_devops_in_ml/003.jpg
:alt: "3/16 The concept of devOps in ML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Think of `MLOps` as a **lifecycle management discipline for machine learning**.

Its goal is a balanced **process-driven approach** to the management of resources, **data**, **code**, time, and quality to **achieve business objectives** and **meet regulatory concerns**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_operations_mlops_getting_started/employing_ml_operations/the_concept_of_devops_in_ml/004.jpg
:alt: "4/16 The concept of devOps in ML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

There are many similarities between `DevOps` and `MLOps`.

For example, when software developers work on a project, they work on a code repository and use source control and a branching strategy.

Code repositories and source control tools provide developers with both a historical record of all tasks, which lets them go back to previous versions, and a space to work on separate tasks in parallel. 

A branching strategy lets multiple teams work independently and verify that the changes on each branch do not conflict.

**Developers need to ensure that their changes are made against the latest version of the codebase**. 

Before merging their changes, they also performs **unit tests**.

For every push to the repository, **it’s very useful to create a set of scripts to build and test your application automatically**. 

This process is called **continuous integration**, or `CI` for short. 

Any change in the codebase repository, often triggers a **CI pipeline**.

The **pipeline** is a series of steps that starts from checking out the code stage and ends with merging it.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_operations_mlops_getting_started/employing_ml_operations/the_concept_of_devops_in_ml/005.jpg
:alt: "5/16 The concept of devOps in ML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Another process favored by developers is **continuous delivery** or **continuous deployment** which depend on the automation level. 

An important caveat here is that **continuous delivery** and **continuous deployment** are not same, although they are both shortened as `CD`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_operations_mlops_getting_started/employing_ml_operations/the_concept_of_devops_in_ml/006.jpg
:alt: "6/16 The concept of devOps in ML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Both of them refer to a method for **building**, **testing**, and **releasing software** in short cycles.

Done this way, **the main development code is almost always production-ready** and can be released into the live environment at any time. 

The difference between these two terms is the **automation of deployment**. 

**Continuous delivery** automates integration or acceptance tests, **deployment to staging**, and **smoke tests**. 

**Staging** refers to a **production-like environment** and **smoke tests** refer to **testing the application before it is deployed**. 

In **continuous delivery**, **deployment to the production** is still done **manually**.

However, **continuous deployment** compliments **continuous integration** with additional steps by **automating the configuration and deployment of the application to the production environment**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_operations_mlops_getting_started/employing_ml_operations/the_concept_of_devops_in_ml/007.jpg
:alt: "7/16 The concept of devOps in ML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Along with **continuous integration**, **delivery and deployment, data** is also an important aspect of `MLOps`. 

Unlike conventional software, which performs the same action repeatedly, an **ML model** can go “off.” 

This means that its **predictive power** can wane as **data profiles** inevitably change.

A **model deployed in production** will not be able to adapt to **changes in data** by itself. 

This requires something called **continuous training**, or `CT` for short. 

**Continuous training is the process of monitoring, measuring, retraining, and serving ML models automatically and continuously to adapt to changes in the data** before they’re redeployed.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_operations_mlops_getting_started/employing_ml_operations/the_concept_of_devops_in_ml/008.jpg
:alt: "8/16 The concept of devOps in ML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

`MLOps` differs from `DevOps` in important ways, too: 

**Continuous integration** is no longer only about **testing** and **validating code and components**, but also about **testing and validating data, data schemas, and models**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_operations_mlops_getting_started/employing_ml_operations/the_concept_of_devops_in_ml/009.jpg
:alt: "9/16 The concept of devOps in ML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It’s about a whole system—the **ML training pipeline**—that **automatically deploys** another service: the **model prediction service**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_operations_mlops_getting_started/employing_ml_operations/the_concept_of_devops_in_ml/010.jpg
:alt: "10/16 The concept of devOps in ML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

`ML` is also concerned with **automatically monitoring, retraining, and serving the models**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_operations_mlops_getting_started/employing_ml_operations/the_concept_of_devops_in_ml/011.jpg
:alt: "11/16 The concept of devOps in ML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Another concept that transfers well from **software development** to **machine learning** is **technical debt**. 

**Technical debt** represents the pressure to prioritize releases over quality, which might mean not paying close attention to **code quality**.

There’s often a compromise between **faster delivery** and **high quality**. 

Although there might be good reasons to prioritize the release, developers will still need to go back and fix things later.

**Machine learning** could arguably be considered “the high-interest credit card of technical debt.” 

This means that **developing** and **deploying** an **ML system** can be relatively fast and cheap, but **maintaining** it over time can be difficult and expensive.

The real challenge isn’t building an **ML model**; 

the challenge is **building an integrated ML system and operating it in production continuously**. 

Just like a high-interest credit card, the **technical debt** with **machine learning** compounds and can be incredibly expensive and difficult to pay down. 

Please check the reading at the end of this section to learn more about The High Interest Credit Card of Technical Debt.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_operations_mlops_getting_started/employing_ml_operations/the_concept_of_devops_in_ml/012.jpg
:alt: "12/16 The concept of devOps in ML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Machine learning systems** have all the operational challenges of **software development**, and a few of their own. 

One challenge is **multi-functional team structure**. 

Unlike many business projects, which are usually managed in a single department, **ML projects require significant multi-functional expertise**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_operations_mlops_getting_started/employing_ml_operations/the_concept_of_devops_in_ml/013.jpg
:alt: "13/16 The concept of devOps in ML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Another challenge stems from the fact that **ML is experimental in nature, which requires constantly approaching the data, the models, and parameter configuration in new ways**.

**The real challenge comes when ML practitioners try to track all experiments and metadata while they try to maintain reproducibility and maximize code reusability**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_operations_mlops_getting_started/employing_ml_operations/the_concept_of_devops_in_ml/014.jpg
:alt: "14/16 The concept of devOps in ML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And then there is **testing ML systems**, which is more complex than testing other software systems because **you need to validate data, parameters, code, and hyperparameters together in a system**, instead of only unit-testing methods or functions.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_operations_mlops_getting_started/employing_ml_operations/the_concept_of_devops_in_ml/015.jpg
:alt: "15/16 The concept of devOps in ML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In **ML systems**, **deployment** isn't as simple as deploying an offline-trained **ML model** as a **prediction service**. 

**ML systems might require you to deploy a multi-step pipeline to automatically retrain and deploy models**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_operations_mlops_getting_started/employing_ml_operations/the_concept_of_devops_in_ml/016.jpg
:alt: "16/16 The concept of devOps in ML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And finally, **ML systems** can present challenges related to **concept drift** and **model decay**.

**Data profiles constantly change**. 

**If something changes in the data input, the predictive power of the model in production will probably change with it**. 

Therefore, **you need to track summary statistics of your data and monitor the online performance of your model** to send notifications or roll back when values deviate from your expectations. 

**Drift is the change in an entity regarding a baseline**. 

With a **production ML model**, this is the change between the **real-time production data** and a **baseline dataset**, most likely the **training set**, that’s representative of the task the model is intended to perform. 

To learn more about the **several types of drift in ML models**, check the **Production Machine Learning Systems course** in the Google Cloud catalog. 

**Technical debt** accumulates in an **ML system** for many reasons, so we look at ways to mitigate that throughout this course.
</div>
</div>
</div>
</div>
