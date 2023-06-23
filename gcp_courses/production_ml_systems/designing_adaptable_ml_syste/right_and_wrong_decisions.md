# Right and wrong decisions

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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/001.jpg
:alt: "1/32 Right and wrong decisions"
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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/002.jpg
:alt: "2/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Some decisions about **data** are a matter of weighing
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/003.jpg
:alt: "3/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

cost vs. benefit, like short-term
**performance goals** against long-term maintainability. 

Others, though, are about
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/004.jpg
:alt: "4/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

right and wrong.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/005.jpg
:alt: "5/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For example, let’s say that you’ve **trained** a **model** to **predict** “probability a patient has cancer” from medical records and
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/006.jpg
:alt: "6/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

that you’ve selected patient age, gender, prior medical conditions, hospital name, vital signs, and test results as **features**. 

Your model had excellent performance on held-out **test data** but performed terribly on new patients.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/007.jpg
:alt: "7/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Any guesses as to why?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/008.jpg
:alt: "8/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It turns out the **model** was **trained** using a **feature**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/009.jpg
:alt: "9/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

that wasn’t legitimately available at decision time, and so, when the **model** was **deployed** into **production**, the **distribution** of this **feature** changed and it was no longer
a reliable **predictor**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/010.jpg
:alt: "10/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this case, that **feature** was ‘hospital name’. 

You might think, ‘hospital name’... 

**How could that be predictive?** 

Well, remember that there are some hospitals that focus on
diseases like cancer. 

So, the **model learned** that ‘hospital name’ was very important.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/011.jpg
:alt: "11/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

However, at decision time, this **feature** wasn’t available to the **model**, because patients hadn't yet been assigned to a hospital, but rather than throwing an error, the **model** simply interpreted the hospital name as an empty string, which it was still
capable of handling thanks to out-of-vocabulary buckets in its representations of words.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/012.jpg
:alt: "12/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

We refer to this idea where the **label** is somehow leaking into the **training data** as **data leakage**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/013.jpg
:alt: "13/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Data leakage** is related to a broader class of problems.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/014.jpg
:alt: "14/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

where we talked about **models** learning unacceptable strategies.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/015.jpg
:alt: "15/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Previously, we learned that when there’s **class imbalances**, a **model** might learn to
**predict** the **majority class**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/016.jpg
:alt: "16/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this case, the **model** has learned to use a **feature** that wouldn’t actually be known
and which cannot be plausibly causally related to the **label**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/017.jpg
:alt: "17/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Here’s a similar case.

A professor of 18th century literature believed that there was a relationship between
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/018.jpg
:alt: "18/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

how an author thought about the mind
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/019.jpg
:alt: "19/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and their political affiliation.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/020.jpg
:alt: "20/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

So, for example, perhaps authors who used language like
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/021.jpg
:alt: "21/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

“the mind is a garden”
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/022.jpg
:alt: "22/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

had one political affiliation
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/023.jpg
:alt: "23/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and authors who used language like
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/024.jpg
:alt: "24/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

“the mind is a steel trap”
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/025.jpg
:alt: "25/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

another. Here’s what they did.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/026.jpg
:alt: "26/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**What if we were to naively test this hypothesis with machine learning?** 

Some people tried that and they got some unexpected results.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/027.jpg
:alt: "27/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

They took all of the sentences in all of the works by a number of 18th century authors,
extracted just the mind metaphors and set those as their **features**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/028.jpg
:alt: "28/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and set those as their **features** and then used the political affiliations of the authors who wrote them as **labels**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/029.jpg
:alt: "29/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Then, they randomly assigned sentences to each of the **training, validation**, and **test sets**. 

And because they divided the **data** in this way, some sentences from each author were distributed to each of those three sets. 

And the resulting **model** was amazing! … But suspiciously amazing.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/030.jpg
:alt: "30/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**What might have gone wrong?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/031.jpg
:alt: "31/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

One way to think about it is that political affiliation is linked to that person. 

And if we wouldn't include ‘person name’ in the **feature set**, we should not include it implicitly either
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/right_and_wrong_decisions/032.jpg
:alt: "32/32 Right and wrong decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

When the researchers changed the way they partition the data and instead partitioned it by author instead of by sentence, the **model's accuracy** dropped to something more reasonable.
</div>
</div>
</div>
</div>
