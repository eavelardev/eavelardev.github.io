# Concept drift

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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/001.jpg
:alt: "1/43 Concept drift"
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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/002.jpg
:alt: "2/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Why do machine learning models lose their predictive power over time?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/003.jpg
:alt: "3/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You’ll recall that **machine learning models**, such as **neural networks**, accept a **feature vector** and provide a **prediction** for our **target variable**. 

These **models** learn in a
**supervised fashion** where a set of **feature vectors** with expected output is provided.

The traditional **supervised learning** assumes that the **training** and the **application data**
come from the **same distribution**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/005.jpg
:alt: "4/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You’ll also remember that **traditional machine learning algorithms** were developed with
certain assumptions.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/006.jpg
:alt: "5/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The first is that **instances** are generated at random according to some **probability distribution** `D`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/007.jpg
:alt: "6/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The second is that **instances are independent** and **identically distributed**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/008.jpg
:alt: "7/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And the third assumption is that `D` is **stationary** with **fixed distributions**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/009.jpg
:alt: "8/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Drift** is the `change` in an **entity** with respect to a **baseline**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/010.jpg
:alt: "9/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In the case of **production ML models**, this is the change between the **real-time production data** and a **baseline data set**, likely the **training set**, that is **representative**
of the **task** the **model** is intended to perform.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/011.jpg
:alt: "10/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If your **model** were running in a **static environment**, using **static** or **stationary data** - for
example **data** whose **statistical properties** do not change, then **model drift** wouldn’t
occur and your **model** would not lose any of its **predictive power** because the **data**
you’re **predicting** comes from the **same distribution** as the **data** used for **training**.

But **production data** can diverge or **drift** from the **baseline data** over time due to changes in the real world.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/012.jpg
:alt: "11/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

There are several types of **drift** in **ML models**...
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/013.jpg
:alt: "12/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Data Drift** or change in probability of `X`, $P(X)$, is a **shift in the model’s input data distribution**. 

For example, incomes of all applicants increase by 5%, but the economic fundamentals are the same.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/014.jpg
:alt: "13/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Concept drift** or change in probability of `Y` given `X`, $P(Y|X)$, is a **shift in the actual relationship** between the **model inputs** and the **output**. 

An example of **concept drift** is when macroeconomic factors make lending riskier, and there is a higher standard to
be eligible for a loan. 

In this case, an income level that was earlier considered
creditworthy is no longer creditworthy.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/015.jpg
:alt: "14/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Prediction drift** or change in the predicted value of `Y` given `X`, $P(\hat{Y}|X)$ is a
**shift in the model’s predictions**. 

For example, a larger proportion of credit-worthy
applications when your product was launched in a more affluent area. 

Your model still holds, but your business may be unprepared for this scenario.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/016.jpg
:alt: "15/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Label drift** or change in the **predicted value** of `Y` as your target variable $P(Y$ Ground
Truth$)$ is a **shift in the model’s output** or **label distribution**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/017.jpg
:alt: "16/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Data drift**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/018.jpg
:alt: "17/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**feature drift**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/019.jpg
:alt: "18/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

population,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/020.jpg
:alt: "19/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and **covariate shift**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/021.jpg
:alt: "20/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

are all names to describe changes in the **data distribution** of the **inputs**. 

When **data shift** occurs, or when you
observe that the **model** performs worse on **unknown data regions**, that means that the
**input data** has changed.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/022.jpg
:alt: "21/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **distribution** of the **variables** is meaningfully different. 

As a result, the **trained model** is not relevant for this **new data**. 

It would still perform well on the data that is
similar to the “old” one!

The **model** is fine on the “old data”, but in practical terms, it became dramatically less
useful since we are now dealing with a **new feature space**.

Indeed, the relationships between the **model inputs** and **outputs** have changed.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/023.jpg
:alt: "22/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In contrast, **concept drift** occurs when there is a **change in the relationship** between
the **input feature** and the **label** (or **target**).
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/024.jpg
:alt: "23/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s explore two examples of **concept drift** which highlight the change in the
relationship between the **input feature** and the **label**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/025.jpg
:alt: "24/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this first example, **stationary supervised learning**, historical **data** is used to make
**predictions**. 

You might recall that in **supervised learning**, a **model** is **trained** from
historical **data** and that **data** is used to make **predictions**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/026.jpg
:alt: "25/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

This second example is **supervised learning** under **concept drift**, where a new, secondary **data source** is **ingested** to provide both historical data and **new data** to make **predictions**. 

This **new data** could be in **batch** or **real time**. 

Whatever the form, it’s important to know that the **statistical properties** of the **target variable** may change over time. 

As a result, an **interpretation** of the **data** changes with time, while the **general distribution** of the **feature input** may not. 

This illustrates **concept drift**, where the **statistical properties** of the **class variable** (the **target** we want to **predict**) changes over time.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/027.jpg
:alt: "26/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this **supervised learning classification** example, when the **distribution** of the **label** changes, it could mean that the relationship between **features** and **labels** is changing as well. 

At the very least, it’s likely that our **model’s predictions**, which will typically match the **distribution** of the **labels** on the **data** on which it was **trained**, will be significantly **less accurate**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/028.jpg
:alt: "27/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s take a look at one other example. 

This one deals with **streaming data**. 

**Data** flows continuously over time in **dynamic environments** - particularly for **streaming data**, such as e-commerce, user modeling, spam emails, fraud detection, and intrusion, Changes in underlying data occur due to changing personal interests, changes in population, or adversary activities, or they can be attributed to a complex nature of the environment. 

In this example, a sensor’s measurement can **drift** due to a fault with the sensor or aging, changes in operation conditions or control command, and machine degradation as a result of wearing. 

In these cases, the **distribution** of the **feature inputs** and the **labels** or **targets** may change - which will impact **model performance** and lead to **model drift**. 

There is no guarantee that **future data** will follow similar **distributions** of past data in a stream setting.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/029.jpg
:alt: "28/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Accordingly, **concept drift** at time $t$ can be defined as the change of joint probability of $X$ and $y$ at time $t$. 

The joint probability $P_t(X, y)$ can be decomposed into two parts as the probability of $X$ times the probability of $y$ given $X$.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/030.jpg
:alt: "29/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s be a little more careful here with the definition of **concept drift**. 

Let’s use $X$ to a **feature vector** and **y** to its corresponding **label**.

Of course, when doing **supervised learning**, our goal is to understand the relationship between **X** and **y**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/031.jpg
:alt: "30/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

We will define a concept as a description of the **distribution** of our observations. 

More precisely, you can think of this as a **joint probability distribution** of our observations. 

However, this concept could depend on time! Otherwise **concept drift** would be a non-issue, **right?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/032.jpg
:alt: "31/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

We’ll use the notation **probability** of $X$ and $y$ at time $t$ $P_t(X,y)$ when we want to consider the **probability** of $X$ and $y$ $P(X,y)$ at a specific time.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/033.jpg
:alt: "32/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Now it’s easy to give a more rigorous description of **concept drift**. 

Simply put,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/034.jpg
:alt: "33/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**concept drift** occurs when the **distribution** of our **observations shifts over time**, or that the **joint probability distribution** we mentioned before changes.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/035.jpg
:alt: "34/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

We can break down this **distribution** into two parts using properties of **joint distributions**.

* First we have the **distribution** of the **feature space**, **probability** of $X$ $P(X)$, and then what we can think of as a description of our **decision boundary**, the **probability** of $y$ given $X$ $P(y | X)$.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/036.jpg
:alt: "35/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* If the **drift** is occurring for the **decision boundary**, then we call this **decision boundary drift**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/037.jpg
:alt: "36/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* Likewise, if the **drift** is occurring for the **feature space**, we call this **feature space drift**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/038.jpg
:alt: "37/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

* Of course, both can be happening at the same time, and this can make it
complicated to understand where the changes are happening!
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/039.jpg
:alt: "38/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Concept drift** can occur due to **shifts** in the **feature space** and/or the **decision boundary**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/040.jpg
:alt: "39/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

so we need to be aware of these during **production**. 

If the **data** is changing, or if the relationship between the **features** and the label is changing, this is going to cause issues with our **model**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/041.jpg
:alt: "40/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

There are different types of **concept drift**. 

* In **sudden drift** a new concept occurs within a short time.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/042.jpg
:alt: "41/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In **gradual drift** a new concept gradually replaces an old one over a period of time.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/043.jpg
:alt: "42/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In **incremental drift** an old concept incrementally changes to a new concept over a
period of time.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/concept_drift/044.jpg
:alt: "43/43 Concept drift"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And in **recurring concepts** an old concept may reoccur after some time
</div>
</div>
</div>
</div>
