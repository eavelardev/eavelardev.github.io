# Word2vec

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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/001.jpg
:alt: "1/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Now you might agree that representing text with **vectors** is a good idea.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/002.jpg
:alt: "2/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

But **how exactly does it work?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/003.jpg
:alt: "3/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s look at `word2vec` and walk you through the neural **network training process**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/004.jpg
:alt: "4/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

`Word2vec` was created by a team of Google researchers led by **Tomas Mikolov** in `2013`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/005.jpg
:alt: "5/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s start with intuition.

Think about how you learn new vocabulary while reading back in elementary schools.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/006.jpg
:alt: "6/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You read,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/007.jpg
:alt: "7/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

guess,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/008.jpg
:alt: "8/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and you remember.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/009.jpg
:alt: "9/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**How do you guess the meaning of a new word?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/011.jpg
:alt: "10/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

normally through the **context**, meaning the words surrounding that missing word.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/012.jpg
:alt: "11/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For example, look at this sentence. ___
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/013.jpg
:alt: "12/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

As an eight-year-old, you don’t recognize the word acumen, but you might guess through the **context** that this word probably means intelligence and sharp judgment.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/014.jpg
:alt: "13/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The idea of using **context** to predict words applies to `word2vec`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/015.jpg
:alt: "14/68 Word2vec"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/016.jpg
:alt: "15/68 Word2vec"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/017.jpg
:alt: "16/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You’ll explore two major variants of `word2vec`: continuous **bag-of-words** (`CBOW`) and **skip-gram**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/018.jpg
:alt: "17/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Both **algorithms** rely on the same idea of using relationships between the surrounding context and the center word to make **predictions**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/019.jpg
:alt: "18/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

but in opposite directions.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/020.jpg
:alt: "19/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Continuous **bag-of-words** predicts the center word given the **context words**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/021.jpg
:alt: "20/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and **skip-gram** predicts the **context words** given the center word.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/022.jpg
:alt: "21/68 Word2vec"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/023.jpg
:alt: "22/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Assume you miss the center word chasing
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/026.jpg
:alt: "23/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and `CBOW` tries to use the **context words**, dog, is, a, and person to predict the missing word.

**How does it work technically?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/027.jpg
:alt: "24/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s walk through the two primary steps: 
* **preparing the datase**t and 
* **training the neural network**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/029.jpg
:alt: "25/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Prepare the **training data**. 

You run a **sliding window** of size 2K+1
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/030.jpg
:alt: "26/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

over the entire text corpus.

You might hear the word corpus often in `NLP`. It basically means a collection of words or a body of words.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/031.jpg
:alt: "27/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

To put simply, let’s say `K` equals to 2.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/032.jpg
:alt: "28/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You start with the first word `A`. 

To run a **2K+1** window and `K` equals to `2`,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/033.jpg
:alt: "29/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You have two words before and after the center word `A`.

No words before `A` but two words after `A`.

Therefore, the two words after `A`, `dog` and `is`, will be used to **predict** `A`, which is sometimes called the **label word**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/034.jpg
:alt: "30/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Then the window shifts to the second word dog as the center word.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/035.jpg
:alt: "31/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

`Dog` will be predicted by the word `A` before it and the words `is` and `chasing` after it.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/036.jpg
:alt: "32/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Therefore, three words: `a`, `is`, and `chasing` will be used to **predict** the **label word** `“dog`.”
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/040.jpg
:alt: "33/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The same process continues till the last word person is the center word.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/041.jpg
:alt: "34/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Now you get the **training data** ready.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/042.jpg
:alt: "35/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**train the neural network**

specifically a **narrow neural network** to learn the **embedding matrix**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/043.jpg
:alt: "36/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Narrow means there’s only **one hidden layer** in this **model**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/044.jpg
:alt: "37/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

instead of **multiple hidden layers**, as in a **deep neural network**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/047.jpg
:alt: "38/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

___ (for example, from `TensorFlow`) without needing to know the details.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/048.jpg
:alt: "39/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In case you’re curious and want to **train** your own **word2vec model** instead of using a **pre-trained** one, here is what happens in the backend.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/049.jpg
:alt: "40/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The goal is to learn the embedding matrix `E_v*d`,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/050.jpg
:alt: "41/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

where `v` is the size of the vocabulary
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/051.jpg
:alt: "42/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and `d` is the number of dimensions.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/052.jpg
:alt: "43/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For example in the sentence “A dog is chasing a person,” you have five different words:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/057.jpg
:alt: "44/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Therefore, `v` equals to 5.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/058.jpg
:alt: "45/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The value of `d` depends on the number of **features** that you want the **neural work** to learn to represent each word.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/059.jpg
:alt: "46/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It can be anywhere between one to four digits. 

Normally, when the number is larger, the **model** will be more refined; although it costs more computational resources.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/060.jpg
:alt: "47/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

`d` is also a **hyperparameter** that you can **tune** when using **Google’s pre-trained word2vec embedding**, which means that you can try different numbers to see which one produces the best result. 

To make the visual simple,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/061.jpg
:alt: "48/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

let’s say `d` equals to 3 here.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/062.jpg
:alt: "49/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Therefore, the matrix in this example is `5` by `3` and it looks like this. 

Each `w` represents a **weight** that you want to **train** the **neural network** to learn.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/063.jpg
:alt: "50/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

A simplified version to explain the process is to take the **vectors** of the surrounding 2000 words as **input**, sum them up, and **output** a **vector** to represent the **center word**.

This version is not very informative. 

Let’s discuss this in more detail.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/064.jpg
:alt: "51/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

First is the **input layer**.

The **Input layer** consists of 2000 words, each is represented by a **one-hot encoder vector**.

If you recall from the previous lesson, a **one-hot encoder** is a one by `v` vector and `v` is the size of the vocabulary. 

You’ll place a `1` in the position corresponding to the word and zeros in the rest positions.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/065.jpg
:alt: "52/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Then you embed these **vectors** with the **embedding matrix** `Ev*d`, which means you multiply each vector by the **embedding matrix** `E`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/066.jpg
:alt: "53/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

To illustrate this, let’s assume you have an input vector of a one-hot encoder as [0,1,0,0,0].

You multiply it with the **embedding matrix**, which in the case is the `word2vec`, by using the CBOW technique. And then you get the embedded 1*d vector as [10,12,23].

You can imagine the **embedding matrix** as a **lookup table** to turn the original word into a vector that has **semantic meaning**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/067.jpg
:alt: "54/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

To begin this process, all the values (`weights`) in the **embedding matrix** `E` are randomly assigned.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/068.jpg
:alt: "55/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Once you get the **embedded vector** for each **context word**, sum all the vectors and get a **hidden layer** `H`, a one by `d` vector.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/069.jpg
:alt: "56/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You multiply `H` with another matrix `E’` and feed the result to a **softmax function** to get the probability `y`. 

`y` is a one-by-`v` vector and each value shows the probability of the word in that position being the **center word**. 

This is the **output layer** and the **predicted result**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/070.jpg
:alt: "57/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

However, this is actually the beginning of the iteration. 

You must compare the **output vector** with the actual result,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/071.jpg
:alt: "58/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And use **backpropagation** to adjust the **weights** in the **embedding matrices** `E` and `E’`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/072.jpg
:alt: "59/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Iterate this process until the difference between the **predicted result** and the actual result is minimum. 

Now you get the `E`, the `word2vec` **embedding matrix** that you aimed to learn at the beginning.

The **training process** depicts how a **neural network** learns.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/073.jpg
:alt: "60/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Opposite to **continuous bag-of-words** (`CBOW`), **skip-gram** uses the **center word** to **predict** **context words**.

For example, given chasing, **what are the probabilities of other words such as a, dog, and person occur in the surrounding context?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/074.jpg
:alt: "61/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The process is similar to `CBOW`, though.

First, you prepare the **training data** by running a sliding window of size `2K+1`. 

For example, let `k` equals to `2`.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/075.jpg
:alt: "62/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You start with the first word A.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/076.jpg
:alt: "63/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You have no word before `A` but two words after it.

Therefore, you use `A` to **predict** `dog` and `is` respectively.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/077.jpg
:alt: "64/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And then the window shifts to the second word dog as the center word. 

You use `dog` to **predict** the word a before it and the words is and chasing after it.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/078.jpg
:alt: "65/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The same process continues till the last word person is the center word.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/079.jpg
:alt: "66/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Now your **training data** is ready.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/080.jpg
:alt: "67/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Next, you **train** the **neural network** to learn the **embedding matrix** `E`. 

Compared to `CBOW`, `E` here is based on the **skip-gram technique**. 

You start with the **input layer** which consists of the **one-hot encoder vector** of the center word. 

Embed this vector with **embedding matrix** `E`, and feed the **embedded vectors** to one **hidden layer**. 

After another `E’` and the **softmax function**, you finally generate the **output layer** which consists of **vectors** to **predict** 2000 surrounding context words.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/word2vec/081.jpg
:alt: "68/68 Word2vec"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Now that you understand how `wrod2vec` works, let’s look at the coding.

Fortunately, you don’t have to train `wrod2vec` yourself. 

**Keras** in **TensorFlow** packages all the details and you only need to call the **pre-trained models** and **tune** the **hyperparameters**.
</div>
</div>
</div>
</div>
