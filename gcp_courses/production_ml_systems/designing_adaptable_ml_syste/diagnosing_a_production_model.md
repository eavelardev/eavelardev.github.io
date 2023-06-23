# Diagnosing a production model

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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/001.jpg
:alt: "1/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this section, we’ll put our learnings into practice by diagnosing a **production model**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/003.jpg
:alt: "2/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s say you’ve architected an **ML system** to **predict** the demand for widgets.

Your streaming purchase orders arrive in **Pub/Sub** and are fulfilled asynchronously, but let’s ignore fulfillment and focus on demand **prediction**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/004.jpg
:alt: "3/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Dataflow** processes this **stream** and using windowing functions, aggregates purchase orders over time.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/005.jpg
:alt: "4/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It then uses the output of these windowing functions and passes that to an **ML model** that lives in **Cloud AI Platform**, where the data are joined against historical purchase data that lives in a **data warehouse** like **BigQuery**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/006.jpg
:alt: "5/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The model returns a **predicted demand** for a particular time. 

The predictions returned
by the model are both written to
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/007.jpg
:alt: "6/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

storage
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/008.jpg
:alt: "7/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and sent to the purchasing system.

The purchasing system determines what’s in
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/009.jpg
:alt: "8/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

the inventory, and the inventory is also
logged in the **data warehouse**. 

The **model** is retrained daily, based on actual
inventory, sales, and other signals.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/010.jpg
:alt: "9/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The model is **deployed** to **Cloud AI Platform** for **training**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/011.jpg
:alt: "10/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **model** can then be invoked on any new or **updated data** within the **Dataflow**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/012.jpg
:alt: "11/35 Diagnosing a production model"
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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/013.jpg
:alt: "12/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

One day, your product manager has the idea to add a credit rating to each purchase
order.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/014.jpg
:alt: "13/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You’re the head of the **machine learning engineering team**. 

Do you think it should be added?
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/015.jpg
:alt: "14/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You get an email from the head of the **business unit** saying that he’s just noticed that sales are down significantly. 

The **warehouse manager**, who is copied on the email, says that inventory storage costs are also down significantly.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/016.jpg
:alt: "15/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The room is suddenly getting quite warm. 

**What could have happened here?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/017.jpg
:alt: "16/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

This is a great example of a **feedback loop**!
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/018.jpg
:alt: "17/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

What might have happened was that the **model** started under predicting demand, perhaps because of some corrupted historical data or an error in the **pipeline**. 

Once demand started to go down
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/019.jpg
:alt: "18/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

product turnover started to creep up. 

If this problem went unnoticed for a while,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/020.jpg
:alt: "19/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

the **model** might have learned to keep zero inventory all the time!
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/021.jpg
:alt: "20/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In addition to being a great reminder that
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/022.jpg
:alt: "21/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

humans need to stay in the loop, it’s also a
reminder that
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/023.jpg
:alt: "22/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

we are often **optimizing** for something other than what we ultimately care about. 

In this case, we were **optimizing** for matching predicted demand when what we cared about was minimizing carrying costs in order to maximize profits.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/024.jpg
:alt: "23/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Here’s another scenario. 

One of your salespeople just shared some amazing news. 

By leveraging their contacts at one of Megacorp’s many regional divisions, they signed Megacorp to a five-year deal and it’s the biggest contract yet!
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/025.jpg
:alt: "24/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Great, you think
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/027.jpg
:alt: "25/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

not realizing that this could have implications for your model’s
performance.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/028.jpg
:alt: "26/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**How can these be related?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/029.jpg
:alt: "27/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It all depends on how the sales orders come in, and how independent the divisions actually are. 

If the divisions are entirely dependent (because there’s actually just one purchasing decision, split up by division) and these orders come in separately, your model may still treat these orders as independent, in which case it would look much more compelling as evidence of an uptick in demand. 

The solution here would be to add
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/030.jpg
:alt: "28/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

some aggregation by company ID in your **pipeline** before computing other **statistics**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/031.jpg
:alt: "29/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Okay, let’s look at one last scenario.
Your **warehouse manager** emails you and tells you that the **warehouse** flooded and they’ve had to scrap a large portion of the inventory.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/032.jpg
:alt: "30/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

They’ve ordered replacements from purchasing,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/033.jpg
:alt: "31/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

but it will be four days before those
arrive and unfulfilled orders in the meantime will have to wait.

You realize that you have the skills to address this problem.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/034.jpg
:alt: "32/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**What do you do?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/035.jpg
:alt: "33/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You stop your **automatic model deployment process**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/036.jpg
:alt: "34/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The reason you do so is because data collected during this period will be
contaminated.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/diagnosing_a_production_model/038.jpg
:alt: "35/35 Diagnosing a production model"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Since the products will show as out of stock on the website, customer
orders will be low.
</div>
</div>
</div>
</div>
