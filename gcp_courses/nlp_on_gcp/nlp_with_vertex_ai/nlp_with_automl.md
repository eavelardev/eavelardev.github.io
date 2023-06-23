# NLP with AutoML

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

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/002.jpg
:alt: "1/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this section, you’ll focus on `AutoML` and explore how it automates the **ML workflow**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/005.jpg
:alt: "2/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

To understand `AutoML`, which is short for **automated machine learning**, let’s briefly look at how it was built.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/006.jpg
:alt: "3/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If you've worked with **ML models** before, you know that **training** and **deploying ML models** can be time consuming, because you need to
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/007.jpg
:alt: "4/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

repeatedly add **new data** and **features**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/008.jpg
:alt: "5/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

try different **models**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/009.jpg
:alt: "6/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and **tune parameters** to achieve the best result.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/011.jpg
:alt: "7/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

To solve this problem, you have `AutoML`. 

When `AutoML` was first announced in January of 2018, the goal was to **automate machine learning pipelines** to save **data scientists** from manual work, such as **tuning hyperparameters** and comparing against multiple **models**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/012.jpg
:alt: "8/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

But **how does AutoML accomplish this?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/017.jpg
:alt: "9/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Two technologies are vital behind the scenes.

The first is known as **transfer learning**.

With **transfer learning**, you build a knowledge base in the field. 

You can think of this like gathering lots of books to create a library.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/018.jpg
:alt: "10/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Transfer learning** is a powerful technique that allows people with smaller **datasets**, or less **computational power**, to achieve **state-of-the-art results** by taking advantage of **pre-trained models** that have already been **trained** on similar, larger **datasets**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/019.jpg
:alt: "11/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Because the **model** learns through **transfer learning**, it doesn’t have to learn from scratch,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/020.jpg
:alt: "12/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

so it can reach higher **accuracy** with much less **data** and computation time than **models** that don’t use **transfer learning**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/025.jpg
:alt: "13/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In addition to **transfer learning**, the second technology is **Vertex AI neural architecture search**. 

The goal of **neural architecture search** is to find the **optimal model** by comparing against multiple models. 

Think of this like searching the best book in the library to help you learn what you need.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/026.jpg
:alt: "14/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

`AutoML` is powered by the latest **machine-learning technology**. 

When a new **model** is **trained**, `AutoML` actually **trains** it on top of **pre-trained models** and compares the **hyperparameters** against multiple models to find the optimal one. 

All these happen automatically behind the scenes.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/027.jpg
:alt: "15/30 NLP with AutoML"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/028.jpg
:alt: "16/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

One of the biggest benefits is that it’s a **no-code solution**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/029.jpg
:alt: "17/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

That means it can train high-quality **custom machine learning models** with minimal effort and requires little **machine learning expertise**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/030.jpg
:alt: "18/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

This allows **data scientists** to focus their time on tasks like **defining business problems in NLP** or **evaluating and improving model results**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/031.jpg
:alt: "19/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Others might find `AutoML` useful as a tool to quickly **prototype models**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/032.jpg
:alt: "20/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and explore new **features** of a **dataset** before investing in development. 

So, **what NLP problems does AutoML solve?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/033.jpg
:alt: "21/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

`AutoML` supports four types of **data**: image, tabular, text, and video.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/034.jpg
:alt: "22/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And Text is normally the **data type** used for `NLP`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/035.jpg
:alt: "23/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For each **data type**, `AutoML` solves different types of problems, called objectives.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/036.jpg
:alt: "24/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For **text data**, `AutoML` solves three major problems: 

You can use a **classification model** to **analyze text data** and return a list of **categories** that apply to the text found in the data. 

For example, you can **classify** customer questions and comments to different **categories** and then redirect them to the corresponding departments.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/037.jpg
:alt: "25/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

An **entity extraction model** can be used to inspect **text data** for known **entities** referenced in the **data** and **label** those **entities** in the text. 

For example, you can **label** a social media post in terms of predefined **entities** such as time, location, and topic.

This can help with online search. 

It’s similar to the concept of a hashtag, but created by machine.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/038.jpg
:alt: "26/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And a **sentiment analysis model** can be used to inspect **text data** and identify the prevailing emotional opinion within it, especially to determine the comments of a writer as positive, negative, or neutral.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/039.jpg
:alt: "27/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In reality, you might not be restricted to just one **data type** or one objective.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/042.jpg
:alt: "28/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Instead, you need to combine multiple **data types** and different objectives to solve a **business problem**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/043.jpg
:alt: "29/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For example, for a **translation job**, you may first need to upload either image or video data and turn them into text, and then translate the text to different languages.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_with_vertex_ai/nlp_with_automl/044.jpg
:alt: "30/30 NLP with AutoML"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

`AutoML` is a powerful tool that can help across these different data types and objectives.
</div>
</div>
</div>
</div>
