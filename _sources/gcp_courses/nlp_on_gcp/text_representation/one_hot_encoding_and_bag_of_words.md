# One-hot encoding and bag-of-words

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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/001.jpg
:alt: "1/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You were introduced to the general steps for **preparing text data** for **model training**. 

You focused on **tokenization**, which aims to divide the text into smaller language units such as words. 

You also briefly explored the different tasks of **preprocessing**. 

The **preprocessing** generates a set of cleaned language units, which serve as the **input** of **text representation**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/002.jpg
:alt: "2/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If **tokenization** is how a computer reads text, the **text representation** solves the problem of how a computer understands text.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/003.jpg
:alt: "3/43 One-hot encoding and bag-of-words"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/004.jpg
:alt: "4/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

This challenge can be further split into two subproblems:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/005.jpg
:alt: "5/43 One-hot encoding and bag-of-words"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/006.jpg
:alt: "6/43 One-hot encoding and bag-of-words"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/007.jpg
:alt: "7/43 One-hot encoding and bag-of-words"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/008.jpg
:alt: "8/43 One-hot encoding and bag-of-words"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/011.jpg
:alt: "9/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Morse code and ASCII can be used to turn text into digits, **why can’t you use them in modern NLP?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/017.jpg
:alt: "10/43 One-hot encoding and bag-of-words"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/019.jpg
:alt: "11/43 One-hot encoding and bag-of-words"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/021.jpg
:alt: "12/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The first idea is called **one-hot encoding**. 

With this technique, you "one-hot" encode each word in your vocabulary.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/023.jpg
:alt: "13/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Consider the sentence "A dog is chasing a person.” 

After **tokenization** and **preprocessing**, the sentence can be represented by three words: dog, chase, person.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/024.jpg
:alt: "14/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

To turn each word to a **vector**, you must first create a **vector** whose length equals the size of the vocabulary. 

Assume you have a vocabulary that includes six words:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/025.jpg
:alt: "15/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

dog, chase, person, my, cat, and run.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/026.jpg
:alt: "16/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Then, place a “1” to the position that corresponds to the word and “0”s to the rest of the positions.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/027.jpg
:alt: "17/43 One-hot encoding and bag-of-words"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/033.jpg
:alt: "18/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In the example, the left represents the words from the sentence and the top represents the vocabulary.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/034.jpg
:alt: "19/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

By conducting **one-hot encoding**, you converted the sentence “A dog is chasing a person” into a matrix that an **ML model** takes.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/035.jpg
:alt: "20/43 One-hot encoding and bag-of-words"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/036.jpg
:alt: "21/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It’s intuitive to understand
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/037.jpg
:alt: "22/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and easy to implement. 

However, let’s also acknowledge the disadvantages.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/038.jpg
:alt: "23/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Recall the two sub-challenges of **text representation**, **one-hot encoding** has two main issues among other.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/039.jpg
:alt: "24/43 One-hot encoding and bag-of-words"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/040.jpg
:alt: "25/43 One-hot encoding and bag-of-words"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/043.jpg
:alt: "26/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The dimensions of each **vector** depend on the size of the vocabulary, which can easily be tens of thousands.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/044.jpg
:alt: "27/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Also, most of the values of each vector are zeros, which means that this is a super **sparse representation**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/051.jpg
:alt: "28/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Another method of **text representation** is called **bag-of-words**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/052.jpg
:alt: "29/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You first collect a “bag” of words from the text in the **NLP project** to build your vocabulary (or dictionary).
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/053.jpg
:alt: "30/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For example, you might have a vocabulary that includes six words: ___
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/055.jpg
:alt: "31/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

To represent the sentence, you must create a vector whose length is equal to the size of the vocabulary, then
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/061.jpg
:alt: "32/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

place a value to represent the frequency in which the word appears in the given document.

Now you get the outcome **vector** as [2,1,0,1,0,0].
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/062.jpg
:alt: "33/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Sometimes you might not care about the frequency, but only the occurrence of the words.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/063.jpg
:alt: "34/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You can simply use 1 and 0 to represent whether this word exists in the text.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/064.jpg
:alt: "35/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

By conducting **bag-of-words**, you can convert the sentence “a dog is chasing a person” to a vector that an **ML model** takes.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/065.jpg
:alt: "36/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Similar to **one-hot encoding**, it’s intuitive to understand and easy to implement. 

Compared to **one-hot encoding**, it has two improvements:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/066.jpg
:alt: "37/43 One-hot encoding and bag-of-words"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/067.jpg
:alt: "38/43 One-hot encoding and bag-of-words"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/068.jpg
:alt: "39/43 One-hot encoding and bag-of-words"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/069.jpg
:alt: "40/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Bag-of-words** still has high-dimensional and **sparse vectors**. 

The dimension of the vector increases with the size of the vocabulary.

Thus sparsity remains a problem.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/070.jpg
:alt: "41/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Although it captures some semantic similarities between sentences, it still far from captures the relationship between words.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/072.jpg
:alt: "42/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Bag-of-words** does not consider the order of the words and that is why it’s called a “bag” of words.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/one_hot_encoding_and_bag_of_words/076.jpg
:alt: "43/43 One-hot encoding and bag-of-words"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **basic vectorization methods** such as **one-hot encoding** and **bag-of-words** are not ideal.

Two major problems that have not been solved include: 
* the high-dimensional and **sparse vectors**; 
* the lack of relationship between words.
</div>
</div>
</div>
</div>
