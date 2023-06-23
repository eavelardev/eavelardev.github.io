# Content-Based or Collaborative

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

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/recommendation_systems_overv/content_based_or_collaborative/001.jpg
:alt: "1/4 Content-Based or Collaborative"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

A **Content-Based** method uses **attributes of the items** to **recommend new items** to a user. 

**It doesn't take into account the behavior or ratings of other users** for example. 

If a user has rented and liked a lot of vacation homes on the beach, this method will suggest other similar homes that are also on the beach. 

This is often done by **hand engineering features** for the items and learning how much a single user aligns with each of those features. 

Using that **feature representation** of the user, **it is impossible to extrapolate how a given user would rank unseen items**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/recommendation_systems_overv/content_based_or_collaborative/002.jpg
:alt: "2/4 Content-Based or Collaborative"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

A **Collaborative Filtering** model works with the entire **user-item interaction matrix**. 

**They consider all users, all items and all user item ratings.** 

Loosely speaking, they work with the idea that **similar users will like similar items**, that is, they use **similarities between the users and the items simultaneously** to provide recommendations. 

This can allow for seemingly serendipitous recommendations, meaning they can recommend an item to a user `A` based only on the interest of a similar user `B`. 

Another useful advantage is that the **feature representations** can be learned automatically so you don't have to rely on hand engineering specific features as you would for a **Content-based Filtering** method.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/recommendation_systems_overv/content_based_or_collaborative/003.jpg
:alt: "3/4 Content-Based or Collaborative"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

This process often involves **Matrix Factorization** and behaves similarly to a **Content-Based** approach but does not rely on previously constructed features.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/recommendation_systems_overv/content_based_or_collaborative/004.jpg
:alt: "4/4 Content-Based or Collaborative"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Knowledge-based** recommender systems are based on **explicit knowledge** about the user's preferences items and or recommendation criteria. 

They are especially useful when alternative approaches such as **collaborative filtering** or **content-based** methods cannot be applied. 

This occurs in situations where items are not purchased very often. 

For example, if instead of renting a vacation house suppose we want to build a recommendation engine for buying a vacation house. 

Because most people don't buy houses often we probably wouldn't have enough previous house buying information to use either a **content-based** or **collaborative filtering** approach. 

In this scenario, **Knowledge-based** systems will often explicitly ask users for their preferences and then use that information to begin making recommendations.
</div>
</div>
</div>
</div>
