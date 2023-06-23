# Vertex AI Vizier hyperparameter tuning

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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/001.jpg
:alt: "1/89 Vertex AI Vizier hyperparameter tuning"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this lesson, we focus on **hyperparameter tuning** using Vertex AI Vizier. As discussed earlier, although machine learning models automatically **learn from data**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/002.jpg
:alt: "2/89 Vertex AI Vizier hyperparameter tuning"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

they still require user-defined knobs to guide the learning process.

These knobs, commonly known as **hyperparameters**, control the **trade-off between training accuracy and generalizability**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/003.jpg
:alt: "3/89 Vertex AI Vizier hyperparameter tuning"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Examples of hyperparameters are the **optimizer**, **epochs**, **regularization parameters**, the **number of hidden layers** in a deep neural network and their sizes.

Setting hyperparameters to their **optimal values** for a given data set can make a huge difference in **model quality**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/004.jpg
:alt: "4/89 Vertex AI Vizier hyperparameter tuning"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Previously, we identified two hyperparameter-tuning methods: **grid search** and **random search**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/005.jpg
:alt: "5/89 Vertex AI Vizier hyperparameter tuning"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Grid search** is a very traditional technique for hyperparameter tuning. 

In the grid search method, we can set up a grid of specific model hyperparameters and then train and test our problem statement model on every combination of values.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/006.jpg
:alt: "6/89 Vertex AI Vizier hyperparameter tuning"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In **random search**, we set up a grid of specific model hyperparameter values, the same as with grid search, but here we select the combination of hyperparameter values randomly.

So a **random search tuning technique is faster than a grid search**. But a **grid search is more effective than a random search** because a random search misses a few combinations.

Both grid search and random search are time-consuming techniques because they roam the full space of available parameter values in an isolated way, without paying attention to past results.

And neither grid, nor random search, uses prior information from the past experiments to select the next set of hyperparameter value combinations.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/007.jpg
:alt: "7/89 Vertex AI Vizier hyperparameter tuning"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Bayesian optimization** is another method of hyperparameter tuning that takes into account past evaluations when choosing which hyperparameter set to evaluate next.

This approach typically requires fewer iterations to get the optimal set of hyperparameter values, most notably because it disregards those areas of the parameter space that it believes won't produce useful results.

This, in turn, limits the number of times a model needs to be trained for validation because only those settings that are expected to generate a higher validation score are passed through for evaluation.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/008.jpg
:alt: "8/89 Vertex AI Vizier hyperparameter tuning"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Vertex Vizier offers
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/009.jpg
:alt: "9/89 Vertex AI Vizier hyperparameter tuning"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**grid search**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/010.jpg
:alt: "10/89 Vertex AI Vizier hyperparameter tuning"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**random search**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/011.jpg
:alt: "11/89 Vertex AI Vizier hyperparameter tuning"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and **Bayesian optimization**.

If you do not specify an algorithm, **Vizier uses the default algorithm, which applies Bayesian optimization** to arrive at the optimal solution, with the more effective search over the parameter space.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/012.jpg
:alt: "12/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/013.jpg
:alt: "13/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/014.jpg
:alt: "14/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/015.jpg
:alt: "15/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/016.jpg
:alt: "16/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/017.jpg
:alt: "17/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/018.jpg
:alt: "18/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/019.jpg
:alt: "19/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/020.jpg
:alt: "20/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/021.jpg
:alt: "21/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/022.jpg
:alt: "22/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/023.jpg
:alt: "23/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/024.jpg
:alt: "24/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/025.jpg
:alt: "25/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/026.jpg
:alt: "26/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/027.jpg
:alt: "27/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/028.jpg
:alt: "28/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/029.jpg
:alt: "29/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/030.jpg
:alt: "30/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/031.jpg
:alt: "31/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/032.jpg
:alt: "32/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/033.jpg
:alt: "33/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/034.jpg
:alt: "34/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/035.jpg
:alt: "35/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/036.jpg
:alt: "36/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/037.jpg
:alt: "37/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/038.jpg
:alt: "38/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/039.jpg
:alt: "39/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/040.jpg
:alt: "40/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/041.jpg
:alt: "41/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/042.jpg
:alt: "42/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/043.jpg
:alt: "43/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/044.jpg
:alt: "44/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/045.jpg
:alt: "45/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/046.jpg
:alt: "46/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/047.jpg
:alt: "47/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/048.jpg
:alt: "48/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/049.jpg
:alt: "49/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/050.jpg
:alt: "50/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/051.jpg
:alt: "51/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/052.jpg
:alt: "52/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/053.jpg
:alt: "53/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/054.jpg
:alt: "54/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/055.jpg
:alt: "55/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/056.jpg
:alt: "56/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/057.jpg
:alt: "57/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/058.jpg
:alt: "58/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/059.jpg
:alt: "59/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/060.jpg
:alt: "60/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/061.jpg
:alt: "61/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/062.jpg
:alt: "62/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/063.jpg
:alt: "63/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/064.jpg
:alt: "64/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/065.jpg
:alt: "65/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/066.jpg
:alt: "66/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/067.jpg
:alt: "67/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/068.jpg
:alt: "68/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/069.jpg
:alt: "69/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/070.jpg
:alt: "70/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/071.jpg
:alt: "71/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/072.jpg
:alt: "72/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/073.jpg
:alt: "73/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/074.jpg
:alt: "74/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/075.jpg
:alt: "75/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/076.jpg
:alt: "76/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/077.jpg
:alt: "77/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/078.jpg
:alt: "78/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/079.jpg
:alt: "79/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/080.jpg
:alt: "80/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/081.jpg
:alt: "81/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/082.jpg
:alt: "82/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/083.jpg
:alt: "83/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/084.jpg
:alt: "84/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/085.jpg
:alt: "85/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/086.jpg
:alt: "86/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/087.jpg
:alt: "87/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/089.jpg
:alt: "88/89 Vertex AI Vizier hyperparameter tuning"
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

```{image} ../../../images/gcp_courses/ml_in_the_enterprise/vertex_vizier_hyperparameter/vertex_ai_vizier_hyperparameter_tuning/090.jpg
:alt: "89/89 Vertex AI Vizier hyperparameter tuning"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">


</div>
</div>
</div>
</div>
