# Similarity Measures

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

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/content_based_recommendation/similarity_measures/001.jpg
:alt: "1/7 Similarity Measures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

A new movie like Star Wars might appear to be closer to Harry Potter in this **embedded space** but **how close?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/content_based_recommendation/similarity_measures/002.jpg
:alt: "2/7 Similarity Measures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

To make this precise consider the following **embedding values** for the movies here.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/content_based_recommendation/similarity_measures/003.jpg
:alt: "3/7 Similarity Measures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

A **similarity measure** is just a **metric** that defines exactly **how similar or close two items are in the embedding space**. 

One commonly used **similarity measure** is the **dot product**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/content_based_recommendation/similarity_measures/004.jpg
:alt: "4/7 Similarity Measures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

To compute the **dot product** of two **vectors**, we compute the **sum of the product-wise components of each vector**. 

Because 26 is greater than 19 Star Wars is more similar to Harry Potter than it is to Memento which confirms our intuition.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/content_based_recommendation/similarity_measures/005.jpg
:alt: "5/7 Similarity Measures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **Cosine Similarity** is another popularly used **similarity measure**. 

It's similar to the **dot product** but **scaled by the norm** of the movie **feature vectors**. 

Note that the **similarity** is still greatest between Harry Potter and Star Wars.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/content_based_recommendation/similarity_measures/006.jpg
:alt: "6/7 Similarity Measures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let's have a quick quiz to check our understanding of **similarity measures**. 

Compute the **cosine similarity** between Star Wars and Shrek, and between Harry Potter and The Incredibles.

**Which pair of movies is more similar?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/recommendation_systems_on_gcp/content_based_recommendation/similarity_measures/007.jpg
:alt: "7/7 Similarity Measures"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Star wars and Shrek are more similar because the **Cosine similarity** measure between them is greater.
</div>
</div>
</div>
</div>
