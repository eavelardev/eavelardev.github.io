# Changing distributions

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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/001.jpg
:alt: "1/25 Changing distributions"
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

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/002.jpg
:alt: "2/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Earlier you saw how, in the context of **ingesting** an **upstream model**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/003.jpg
:alt: "3/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

our **model’s performance** would degrade if it expected one **input** but ingested another.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/004.jpg
:alt: "4/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **statistical** term for changes in the likelihood of observed values like **model inputs** is changes in the **distribution**.

And it turns out that the **distribution** of the **data** can change for all sorts of reasons.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/005.jpg
:alt: "5/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For example, sometimes the **distribution** of the **label** changes.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/006.jpg
:alt: "6/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

We've looked at the natality **dataset** in **BigQuery**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/007.jpg
:alt: "7/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and tried to predict baby weight.

Baby weight has actually changed over time. 

It peaked in the 1980s and has since been declining.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/008.jpg
:alt: "8/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In 1969, babies weighed significantly less than they did in 1984. 

When the **distribution** of the **label** changes, it could mean that the relationship between **features** and **labels**
is changing as well.

At the very least, it's likely that our **model's predictions**, which will typically match the **distribution** of the **labels** in the **training set**, will be significantly **less accurate**.

However, sometimes it's not the **labels**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/010.jpg
:alt: "9/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

but the **features**, that change their **distribution**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/011.jpg
:alt: "10/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For example, say you've **trained** your **model** to **predict** population movement patterns
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/013.jpg
:alt: "11/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

using postal code as a **feature**. 

Surprisingly, postal codes aren't fixed. 

Every year, governments release new ones and deprecate old ones.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/015.jpg
:alt: "12/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Now as a **ML practitioner**, you know that postal codes aren't really numbers. 

So you've chosen to represent them as **categorical feature** columns, but this might lead to problems.

If you chose to specify a vocabulary, but set the number of **out of vocab buckets** to 0, and didn’t specify a default, then the distribution may become **skewed** toward the
default value, which is -1.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/017.jpg
:alt: "13/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And this might be problematic because the **model** may be forced to make **predictions** in regions of the **feature space** which were not well represented in the **training data**.

There's another name for when **models** are asked to make **predictions** on points in **feature space** that are far away from the **training data**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/018.jpg
:alt: "14/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and that’s **extrapolation**.

**Extrapolation** means to **generalize outside the bounds** of what we’ve previously seen.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/019.jpg
:alt: "15/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Interpolation** is the opposite. 

It means to **generalize within the bounds** of what we’ve previously seen.

**Interpolation** is always much easier. 

For example, let’s say that the **model** got to see the yellow data and not the gray data. 

The blue line reflects a **linear regression** on the yellow data. 

**Predictions** in the yellow region are **interpolated** and reasonably accurate. 

In contrast, **predictions** in the gray region are **extrapolated** and are increasingly **inaccurate** the farther we get from the yellow region.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/020.jpg
:alt: "16/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You can protect yourself from **changing distributions** using a few different methods.

The first thing you can do is
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/021.jpg
:alt: "17/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

be vigilant through **monitoring**. 

You can look at the **descriptive summaries** of your **inputs**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/022.jpg
:alt: "18/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and compare them to what the **model** has seen.

If, for example, the `mean` or the `variance` has changed substantially,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/023.jpg
:alt: "19/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

then you can **analyze** this new segment of the **input space**, to see if the relationships learned still hold.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/025.jpg
:alt: "20/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You can also look to see whether the **model’s residuals**, that is the
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/026.jpg
:alt: "21/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

difference between its **predictions** and the **labels**, has changed as a function of your **inputs**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/028.jpg
:alt: "22/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If, for example, you used to have small errors at one slice of the input and large in another, and now it’s switched, this could be evidence of a change in the relationship.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/030.jpg
:alt: "23/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Finally, if you have reason to believe that the relationship is changing over time,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/031.jpg
:alt: "24/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

you can force the **model** to treat more recent observations as more important by writing a **custom loss function**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/designing_adaptable_ml_syste/changing_distributions/032.jpg
:alt: "25/25 Changing distributions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

or by **retraining** the **model** on the **most recent data**.
</div>
</div>
</div>
</div>
