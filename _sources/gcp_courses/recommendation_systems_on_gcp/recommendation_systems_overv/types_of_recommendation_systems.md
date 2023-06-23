# Types of Recommendation Systems

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

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/recommendation_systems_overv/types_of_recommendation_systems/001.jpg
:alt: "1/8 Types of Recommendation Systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let's consider a thought exercise. 

Suppose you want to build an application to suggest homes for people who want to rent a vacation home. 

You have a **database** of users and properties and information about users past rentals various property details and the user's respective ratings. 

We can represent this information in a matrix like the one here called a **user-item interaction matrix**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/recommendation_systems_overv/types_of_recommendation_systems/002.jpg
:alt: "2/8 Types of Recommendation Systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Each row corresponds to a user. 

Users could be customers, visitors app users or readers here we just have five but we could have millions or even billions of users. 

This user has rated three of the houses in our **database**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/recommendation_systems_overv/types_of_recommendation_systems/003.jpg
:alt: "3/8 Types of Recommendation Systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Each column corresponds to an item. 

Items could be products, movies, events, articles, we could have thousands in this case. 

Items are properties for rent. 

This item has been rated by three separate users in general. 

If user `i` has a rating for house `j` then we have a score or a check mark in the `ij`th spot.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/recommendation_systems_overv/types_of_recommendation_systems/004.jpg
:alt: "4/8 Types of Recommendation Systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

What **features** do you think would be relevant?
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/recommendation_systems_overv/types_of_recommendation_systems/005.jpg
:alt: "5/8 Types of Recommendation Systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Did you think about ways to use properties of the user?**

If so, **what features did you use to describe your users?** 

**Did you consider using properties of the house?** 

**What features did you use to categorize the houses?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/recommendation_systems_overv/types_of_recommendation_systems/006.jpg
:alt: "6/8 Types of Recommendation Systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Maybe you thought to consider a user's previous rentals or to consider the previous renters of a given house.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/recommendation_systems_overv/types_of_recommendation_systems/007.jpg
:alt: "7/8 Types of Recommendation Systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Would it be useful to compare **similar users behavior** to find **new recommendations** or to suggest **similar properties** that a user might like. 

**What does it mean for two users to be similar?** 

**What does it mean for two properties to be similar?** 

**How do you even measure similarity for things like this?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/recommendation_systems_overv/types_of_recommendation_systems/008.jpg
:alt: "8/8 Types of Recommendation Systems"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**What were you trying to model?** that is 

**What label did you think to use?** 

**Did you try to predict a user's rating score for a new property?** 

or perhaps you wanted to simply predict what house they would book next.
</div>
</div>
</div>
</div>
