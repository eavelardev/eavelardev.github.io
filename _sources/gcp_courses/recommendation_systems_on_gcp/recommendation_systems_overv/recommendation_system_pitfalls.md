# Recommendation System Pitfalls

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

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/recommendation_systems_overv/recommendation_system_pitfalls/001.jpg
:alt: "1/9 Recommendation System Pitfalls"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

When you're developing any **recommendation system** some common difficulties are helpful to keep in mind and some care must be taken to address them. 

For example, looking again at the **user-item interaction matrix**, note that the user space and the product space are **sparse** and **skewed.**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/recommendation_systems_overv/recommendation_system_pitfalls/002.jpg
:alt: "2/9 Recommendation System Pitfalls"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

We say the **user item matrix** is **sparse** because there are potentially **few interactions** within the entire **user item space**. 

There could be billions of users and millions of items and most of the entries in the matrix are zero. 

**Sparse matrices** are problematic because they take up a lot of memory and are slow to perform computations, even though most of the computations are simply adding or multiplying by zero.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/recommendation_systems_overv/recommendation_system_pitfalls/003.jpg
:alt: "3/9 Recommendation System Pitfalls"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

A typical person probably interacts with far less than one percent of your products. 

On the other hand, most products are in the long tail of usage and probably rated by less than 0.1 percent of all users.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/recommendation_systems_overv/recommendation_system_pitfalls/004.jpg
:alt: "4/9 Recommendation System Pitfalls"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In addition the matrix is **skewed**. 

Some properties might be very popular. 

Maybe that property is a resort with a thousand cabins.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/recommendation_systems_overv/recommendation_system_pitfalls/005.jpg
:alt: "5/9 Recommendation System Pitfalls"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

or there could be a few users that are very prolific. 

Maybe they're motorcycling around the country and staying in rental homes every day of the year or maybe some users just like everything.

If you naively take all the ratings for all users you risk **over emphasizing** certain users or products
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/recommendation_systems_overv/recommendation_system_pitfalls/006.jpg
:alt: "6/9 Recommendation System Pitfalls"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In addition a **cold start** can occur for both products and users. 

This happens when **there aren't enough interactions** or information for users or items. 

For example, when a new user is added to a system. 

For a time, the **recommender** has no past interactions with which to make new recommendations. 

Or consider when a new item is added to a catalog. 

Because **collaborative filtering** relies on user item interactions, without this information, **reliable recommendations** for users aren't generated. 

In this situation a **Content-based** approach would be better.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/recommendation_systems_overv/recommendation_system_pitfalls/007.jpg
:alt: "7/9 Recommendation System Pitfalls"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Another problem to keep in mind is a lack of explicit user feedback in the form of ratings or thumbs up or down. 

Often we don't have explicit measures to feed to a **recommender system**. 

In situations like this, it is necessary to rely on implicit ratings. 

For example, consider a youtube video like this one. 

Of the tens of thousands of views, there are substantially fewer up votes or down votes.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/recommendation_systems_overv/recommendation_system_pitfalls/008.jpg
:alt: "8/9 Recommendation System Pitfalls"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Instead, **implicit measures** must be used. 

Things like the portion of the video watched or the number of clicks play counts or other information about the user interaction like site navigation or time spent on the page. 

In practical scenarios, **implicit feedback** like this, is much more readily available even though explicit user feedback is ground truth and preferred.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/recommendation_systems_overv/recommendation_system_pitfalls/009.jpg
:alt: "9/9 Recommendation System Pitfalls"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

With enough data you can **train** an initial **model** that uses implicit user feedback to learn an **explicit rating**. 

Essentially the **input layer** takes implicit ratings and we use the **explicit ratings** as a **label**.

This **explicit rating** is what we want to use as our **input** when developing the **recommendation engine**.

At **inference time** in the absence of an explicit rating, we use the **trained initial model** to infer an **explicit rating** that we can then feed to the **recommendation engine**.

As we collect more data, these signal scores can be improved.
</div>
</div>
</div>
</div>
