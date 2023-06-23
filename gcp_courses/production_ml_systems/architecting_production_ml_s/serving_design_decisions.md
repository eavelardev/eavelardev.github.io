# Serving design decisions

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

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/001.jpg
:alt: "1/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Just as the **use case** determines appropriate **training architecture**, it's also determines the appropriate **serving architecture**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/002.jpg
:alt: "2/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In designing our **serving architecture**, one of our goals is to **minimize average latency**.

Just like in operating systems, where we don’t want to be bottlenecked by slow disk I/O, when **serving models**, we don’t want to be bottlenecked by slow-to-decide **models**.

Remarkably, the solution for **serving models** is very similar to what we do to optimize I/O performance: we use a cache. 

In this case, rather than faster memory, we’ll use a table.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/003.jpg
:alt: "3/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Static serving** then computes the label ahead of time and **serves** by looking it up in the **table**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/004.jpg
:alt: "4/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Dynamic serving**, in contrast, computes the label **on-demand**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/005.jpg
:alt: "5/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

There’s a space-time tradeoff.

Static serving is
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/006.jpg
:alt: "6/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

space-intensive,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/007.jpg
:alt: "7/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

resulting in higher storage costs, because we store **pre-computed predictions**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/008.jpg
:alt: "8/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

with a low, fixed latency
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/009.jpg
:alt: "9/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

y and lower maintenance costs.

**Dynamic serving**, however, is
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/010.jpg
:alt: "10/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

compute-intensive.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/011.jpg
:alt: "11/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It has lower storage costs,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/012.jpg
:alt: "12/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

higher maintenance,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/013.jpg
:alt: "13/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and variable latency.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/014.jpg
:alt: "14/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The choice whether to use **static** or **dynamic serving** is determined by considering how important **latency**, **storage**, and **CPU costs** are.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/016.jpg
:alt: "15/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Sometimes, it can be hard to express the relative importance of these three areas. 

As a result, it might be helpful to consider **static** and **dynamic serving** through another lens:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/017.jpg
:alt: "16/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

peakedness
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/018.jpg
:alt: "17/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**cardinality**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/019.jpg
:alt: "18/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Peakedness** in a **data distribution** is the degree to which **data values** are **concentrated** around the **mean**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/020.jpg
:alt: "19/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

or in this case, how concentrated the **distribution** of the **prediction workload** is.

You can also think of it as **inverse entropy**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/021.jpg
:alt: "20/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For example, a **model** that **predicts** the next word given the current word, which you might find in your mobile phone keyboard app,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/022.jpg
:alt: "21/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

would be highly peaked
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/023.jpg
:alt: "22/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

because a small number of words account for the majority of words used.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/024.jpg
:alt: "23/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In contrast, a **model** that **predicted** quarterly revenue for all sales verticals in order to populate a report
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/025.jpg
:alt: "24/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

would be run on the same verticals, and with the same frequency
for each, and so it would be very flat.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/026.jpg
:alt: "25/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Cardinality** refers to the **number of values in a set**.

In this case, the set is composed of all the possible things we might have to make
**predictions** for.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/027.jpg
:alt: "26/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

So, a **model** predicting sales revenue given organization division number would have fairly low **cardinality**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/028.jpg
:alt: "27/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

A **model** predicting lifetime value given a user for an ecommerce platform would be high **cardinality** because the number of users, and the number of characteristics of each user, are likely to be quite large.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/029.jpg
:alt: "28/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Taken together, **peakedness** and **cardinality** create a space.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/030.jpg
:alt: "29/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

When the **cardinality** is sufficiently low, we can store the entire expected **prediction workload**, for example, the **predicted** sales revenue for all divisions, in a table and use **static serving**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/031.jpg
:alt: "30/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

When the **cardinality** is high, because the size of the input space is large, and the workload is not very peaked, you probably want to use **dynamic training**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/032.jpg
:alt: "31/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In practice, though, you often choose a hybrid of **static** and **dynamic**, where you **statically cache** some of the **predictions** while responding **on-demand** for the long tail.

This works best when the **distribution** is sufficiently **peaked**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/033.jpg
:alt: "32/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The striped area above the curve and not inside the blue rectangle is suitable for a hybrid solution, with the most frequently requested **predictions** cached and the tail computed on demand.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/034.jpg
:alt: "33/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s try to estimate **training** and **inference** needs for the same use cases that we saw in the previous lesson.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/035.jpg
:alt: "34/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The first **use case** is **predicting** whether an email is spam. 

**What inference style is needed?** 

Well, first we need to consider how **peaked** the **distribution** is. 

The answer is not at all; most emails are likely to be different, although they may be very similar if generated programmatically. 

Depending on the choice of **representation**, the **cardinality** might be enormous.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/036.jpg
:alt: "35/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

So, this would be **dynamic**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/037.jpg
:alt: "36/49 Serving design decisions"
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

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/038.jpg
:alt: "37/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The second use case is Android voice-to-text. 

This is again subtle. 

**Inference** is almost certainly **online**, since there’s such a long tail of possible voice clips.

But maybe with sufficient **signal processing**, some key phrases like “okay
google” may have precomputed answers. 

So, this would be **dynamic** or **hybrid**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/039.jpg
:alt: "38/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And the third use case is shopping ad conversion rate. 

The set of all ads doesn’t change much from day to day. 

Assuming users are comfortable waiting for a short while after uploading their ads, this could be done **statically**, and then a batch script could be run at regular intervals throughout the day.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/040.jpg
:alt: "39/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

This would be **static**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/041.jpg
:alt: "40/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In practice, you’ll often use a **hybrid** approach.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/042.jpg
:alt: "41/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You might not have realized it, but **dynamic serving** is what we have learned so far.

Think back to the **architecture** of the systems we’ve used to make **predictions**: a **model** that lived in **AI Platform** was sent one or more instances and returned **predictions** for each.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/043.jpg
:alt: "42/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If you wanted to build a **static serving system**, you would need to make three design changes.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/044.jpg
:alt: "43/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

First, you would need to change your call to **AI Platform** from an **online prediction job** to a **batch prediction job**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/045.jpg
:alt: "44/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Second, you’d need to make sure that your **model** accepted and passed
through keys as input. 

These keys are what will allow you to join your requests to **predictions** at **serving time**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/046.jpg
:alt: "45/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And third, you would write the **predictions** to a **data warehouse**, like **BigQuery** and create an `API` to read from it.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/047.jpg
:alt: "46/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Although the details for each of these instructions are beyond the scope of this
lesson, we’ve provided links in the course resources on:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/048.jpg
:alt: "47/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Submitting a `batch prediction job`:

* [Get predictions from a custom trained model](https://cloud.google.com/vertex-ai/docs/predictions/get-predictions)
* [Overview of getting predictions on Vertex AI](https://cloud.google.com/vertex-ai/docs/predictions/overview)
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/049.jpg
:alt: "48/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Enabling pass-through features in your model: 

* [How to extend a canned TensorFlow Estimator](https://towardsdatascience.com/how-to-extend-a-canned-tensorflow-estimator-to-add-more-evaluation-metrics-and-to-pass-through-ddf66cd3047d) (outdated)
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/serving_design_decisions/050.jpg
:alt: "49/49 Serving design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And loading **data** into **BigQuery**: 

* [Introduction to loading data](https://cloud.google.com/bigquery/docs/loading-data)
</div>
</div>
</div>
</div>
