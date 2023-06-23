# Tokenization

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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/001.jpg
:alt: "1/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You may recall the **end-to-end NLP workflow** and the three major stages in developing an **NLP project**:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/002.jpg
:alt: "2/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**data preparation**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/003.jpg
:alt: "3/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**model training**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/004.jpg
:alt: "4/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**model serving**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/005.jpg
:alt: "5/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In the first stage of **data preparation**, you must **engineer the data for model training**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/006.jpg
:alt: "6/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

As you know, a computer only takes digits
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/007.jpg
:alt: "7/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and you can only feed an **NLP model** with numbers. 

Here, you encounter a significant challenge for `NLP`:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/008.jpg
:alt: "8/58 Tokenization"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/009.jpg
:alt: "9/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

To better understand the challenge of **text representation** in `NLP`, let’s compare **text data** with other **data types** such as tabular, image, and audio.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/010.jpg
:alt: "10/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Tabular data** might be the easiest to feed into an **ML model** because most of them is already numeric, and the columns which are not numbers can be easily converted into numeric values.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/011.jpg
:alt: "11/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**How about image data?** 

**How can you convert an image into numbers?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/012.jpg
:alt: "12/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You can take advantage of pixels. 

Each cell in the matrix of pixels represents the intensity of the corresponding pixel in the image.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/013.jpg
:alt: "13/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**How about audio?** 

**How do you convert a song into numbers?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/014.jpg
:alt: "14/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You can use waves. 

You can sample the wave and record its amplitude (the height). 

The audio then can be represented by an array of amplitude at fixed-time intervals.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/015.jpg
:alt: "15/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**How about text?** 

**Can you think of a way to turn a sentence into numbers?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/016.jpg
:alt: "16/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The answer is not that obvious.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/017.jpg
:alt: "17/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Well, let’s divide the **feature engineering** in `NLP` into smaller steps. 

Please note:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/018.jpg
:alt: "18/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

___ You must call the right functions at the right time. 

The following explanation is to uncover how these libraries work and assumes you might want to build your own **NLP applications** from the beginning.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/019.jpg
:alt: "19/58 Tokenization"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/020.jpg
:alt: "20/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Assuming you already uploaded **raw text**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/021.jpg
:alt: "21/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You’ll then **tokenize** the text, which basically means to divide the text into smaller language units such as words. 

This is how a computer reads text.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/022.jpg
:alt: "22/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

After that, you’ll preprocess the language units, for example, by only keeping the root of each word and removing punctuation.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/023.jpg
:alt: "23/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You’ll then turn the **preprocessed language units** into numbers that represent some meanings. 

This step is often called **text representation**, and it’s where a computer understands text in addition to reading it.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/024.jpg
:alt: "24/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **output** of **text representation** is normally vectors that can be fed into **ML models** to solve specific tasks. 

Before exploring different techniques for **text representation** and various **NLP models**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/025.jpg
:alt: "25/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

let’s start with **tokenization** and explore how a computer reads text.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/026.jpg
:alt: "26/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Tokenization** is the first step to **prepare text** for **ML models**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/027.jpg
:alt: "27/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It aims to ___
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/028.jpg
:alt: "28/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For example, **tokenization** will split the sentence “a dog is chasing a person,”
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/029.jpg
:alt: "29/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

into separate words. 

This step is often overlooked and underappreciated, simply because English is easy to tokenize
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/030.jpg
:alt: "30/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

with a delimiter such as a whitespace. 

However, if you take a moment to think about it,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/031.jpg
:alt: "31/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

you’ll find the problem is not as obvious as it looks.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/032.jpg
:alt: "32/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

First of all, **what about other languages such as Chinese?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/033.jpg
:alt: "33/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this example, 一条狗在追一个人
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/034.jpg
:alt: "34/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

which is the Chinese translation of “A dog is chasing a person”
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/035.jpg
:alt: "35/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

there’s no space between characters, so **how do you split the sentence?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/036.jpg
:alt: "36/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

To solve this problem, people must develop different **tokenization strategies** and tools for different languages.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/037.jpg
:alt: "37/58 Tokenization"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/038.jpg
:alt: "38/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Smaller language units, which are called **tokens** in **tokenization**, can exist at different levels.

For example:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/039.jpg
:alt: "39/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Character tokens** split the text at the character level, for instance,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/040.jpg
:alt: "40/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

dog is split into d-o-g.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/041.jpg
:alt: "41/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Subword tokens split the text at the root word level,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/042.jpg
:alt: "42/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

for example, “chasing” is split into “chase” and “ing.”
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/043.jpg
:alt: "43/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Word tokens** split the text by whitespaces.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/044.jpg
:alt: "44/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Phrase tokens** split the text by phrases, for example, “a dog” and “is chasing.”
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/045.jpg
:alt: "45/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And finally, **sentence tokens** split the text by punctuation.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/046.jpg
:alt: "46/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Word tokenization** is the most commonly used **algorithm** for **splitting text**;
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/047.jpg
:alt: "47/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

however, each **tokenization** has its own advantages and disadvantages.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/048.jpg
:alt: "48/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The choice of the **tokenization type** mainly depends on
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/049.jpg
:alt: "49/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

the **NLP libraries** and the **NLP models** you’re using.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/050.jpg
:alt: "50/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

After **tokenization**, you must further **prepare the text**. 

It’s called **preprocessing**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/051.jpg
:alt: "51/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Different things you can do in this step, for example, ___
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/052.jpg
:alt: "52/58 Tokenization"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/053.jpg
:alt: "53/58 Tokenization"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/054.jpg
:alt: "54/58 Tokenization"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/055.jpg
:alt: "55/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You have various **NLP libraries** to help you complete these **preprocessing tasks** automatically.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/056.jpg
:alt: "56/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For example,TensorFlow provides a new **text preprocessing layer** using **TextVectorization API**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/057.jpg
:alt: "57/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It maps **text features** to integer sequences including the functions such as
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/text_representation/tokenization/058.jpg
:alt: "58/58 Tokenization"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**preprocessing**, **tokenization**, and even the **vectorization**. 

Using this new `API`, you can do all the **text preparation work** in one place.
</div>
</div>
</div>
</div>
