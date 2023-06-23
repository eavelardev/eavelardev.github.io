# Making Recommendations Using a User Vector

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

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/content_based_recommendation/making_recommendations_using_a_user_vector/001.jpg
:alt: "1/7 Making Recommendations Using a User Vector"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Now we can make the best recommendation for our user, based on their **user feature vector** and the **features** of the unrated unseen movies in our **database**.

We'll compute the **dot product** to measure the **similarity** between our user and all the remaining unranked movies in our **database**. 

The movie with the greatest similarity measure is our top recommendation for our user.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/content_based_recommendation/making_recommendations_using_a_user_vector/002.jpg
:alt: "2/7 Making Recommendations Using a User Vector"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **dot product** is found by taking the component **wise product** across each dimension and adding the results. 

That is, we multiply the **user feature vector** component wise with the movie **feature vector** for each movie.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/content_based_recommendation/making_recommendations_using_a_user_vector/003.jpg
:alt: "3/7 Making Recommendations Using a User Vector"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and then **sum row wise** to compute the **dot product**. 

This gives us the **dot product similarity** between our user and each of the four movies.

We'll use these values to make our recommendations.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/content_based_recommendation/making_recommendations_using_a_user_vector/004.jpg
:alt: "4/7 Making Recommendations Using a User Vector"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

because star wars has the **greatest similarity measure**, that will be our top recommendation, followed by the incredibles and then the dark knight and lastly memento.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/content_based_recommendation/making_recommendations_using_a_user_vector/006.jpg
:alt: "5/7 Making Recommendations Using a User Vector"
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

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/content_based_recommendation/making_recommendations_using_a_user_vector/007.jpg
:alt: "6/7 Making Recommendations Using a User Vector"
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

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/content_based_recommendation/making_recommendations_using_a_user_vector/008.jpg
:alt: "7/7 Making Recommendations Using a User Vector"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">


</div>
</div>
</div>
</div>
