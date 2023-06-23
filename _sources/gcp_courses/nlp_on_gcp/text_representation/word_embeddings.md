# Word embeddings

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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word_embeddings/003.jpg
:alt: "1/19 Word embeddings"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word_embeddings/004.jpg
:alt: "2/19 Word embeddings"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You’ll learn how **word embeddings encode text** to numbers that convey **meanings**.

Let’s start with intuition.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word_embeddings/010.jpg
:alt: "3/19 Word embeddings"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**How would you describe a dog?** 

You might mention its breed, age, size, color, owner, and friendliness.

You can easily think of at least ten different **dimensions**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word_embeddings/019.jpg
:alt: "4/19 Word embeddings"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**How would you describe a person?**

You can again, easily think of at least 20 different **dimensions** to describe a person.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word_embeddings/026.jpg
:alt: "5/19 Word embeddings"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You might now guess the direction. 

**How would you describe a word then?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word_embeddings/027.jpg
:alt: "6/19 Word embeddings"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You can use **dimensions**, and in math, a **vector space**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word_embeddings/028.jpg
:alt: "7/19 Word embeddings"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You can now generate an idea: **how about representing a word in a vector space with dimensions to describe its properties?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word_embeddings/029.jpg
:alt: "8/19 Word embeddings"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Not only that, you want the distance between the words to indicate the similarities between them.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word_embeddings/032.jpg
:alt: "9/19 Word embeddings"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You want this representation to capture the analogy between words. 

For example, the distance between king and queen is similar to the distance between man and woman.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word_embeddings/034.jpg
:alt: "10/19 Word embeddings"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Now you have King - Man + Woman = Queen

**Isn't it amazing to play with words in the same way you play with numbers?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word_embeddings/035.jpg
:alt: "11/19 Word embeddings"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Word embedding** is technique to **encode text** into **meaningful vectors**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word_embeddings/036.jpg
:alt: "12/19 Word embeddings"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The technique lets you represent text with low-dimensional, dense vectors.

Each **dimension** is supposed to capture a **feature** of a word.

A higher dimensional **embedding** captures detailed relationships between words. 

However, it takes more **data** and resources to **train**.

You don’t have **sparse vectors** anymore.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word_embeddings/037.jpg
:alt: "13/19 Word embeddings"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **vectors** capture the relationships between words where similar words have a similar **encoding**.

**Word embedding** is sometimes called a technique of **distributed representation**, indicating that the **meanings** of a word are **distributed across dimensions**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word_embeddings/038.jpg
:alt: "14/19 Word embeddings"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Instead of specifying the values for the **embedding** manually, you train a **neural network** to learn those numbers.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word_embeddings/041.jpg
:alt: "15/19 Word embeddings"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**How do word embeddings do the magic to convert words such as king, queen, man, and woman to vectors that convey the semantic similarities?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word_embeddings/042.jpg
:alt: "16/19 Word embeddings"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Word embedding** is an abstract term or a technique that includes a few concrete **algorithms** or **models** such as
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word_embeddings/043.jpg
:alt: "17/19 Word embeddings"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**word2vec** by Google, which is considered a breakthrough for applying **neural networks** to **text representations**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word_embeddings/044.jpg
:alt: "18/19 Word embeddings"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**GloVe** by Stanford,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word_embeddings/045.jpg
:alt: "19/19 Word embeddings"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**FastText** by Facebook, etc.
</div>
</div>
</div>
</div>
