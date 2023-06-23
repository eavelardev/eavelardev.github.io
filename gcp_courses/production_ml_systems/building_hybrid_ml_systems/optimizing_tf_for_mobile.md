# Optimizing TensorFlow for mobile

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

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/optimizing_tf_for_mobile/001.jpg
:alt: "1/17 Optimizing TensorFlow for mobile"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s look at a second scenario where **hybrid models** are necessary. 

Earlier we explored how more and more applications are combining **machine learning** with mobile applications.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/optimizing_tf_for_mobile/002.jpg
:alt: "2/17 Optimizing TensorFlow for mobile"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Take **Google Translate**, for example, which is composed of several **models**. 

It uses one **model** to find a sign, another **model** to read the sign using optical character recognition, a third **model** to translate the sign, a fourth **model** to superimpose the translated text, and possibly even a fifth **model** to select the best font to use.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/optimizing_tf_for_mobile/003.jpg
:alt: "3/17 Optimizing TensorFlow for mobile"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

`ML` allows you to add some "intelligence" to your mobile apps, such as
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/optimizing_tf_for_mobile/004.jpg
:alt: "4/17 Optimizing TensorFlow for mobile"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

image and voice recognition
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/optimizing_tf_for_mobile/005.jpg
:alt: "5/17 Optimizing TensorFlow for mobile"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

translation
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/optimizing_tf_for_mobile/006.jpg
:alt: "6/17 Optimizing TensorFlow for mobile"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and **natural language processing**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/optimizing_tf_for_mobile/007.jpg
:alt: "7/17 Optimizing TensorFlow for mobile"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You can also apply **machine learning** to gain smarter **analytics** on **mobile-specific data**. 

For example, to detect certain patterns from motion sensor **data**, or GPS tracking **data**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/optimizing_tf_for_mobile/008.jpg
:alt: "8/17 Optimizing TensorFlow for mobile"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

This is all thanks to the fact that `ML` can **extract meaning from raw data**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/optimizing_tf_for_mobile/009.jpg
:alt: "9/17 Optimizing TensorFlow for mobile"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

So, if you want to perform **image recognition** with your mobile app, the easiest way is to send the **raw image** to the **cloud**, and let the **cloud service** recognize the objects in the image.

However
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/optimizing_tf_for_mobile/010.jpg
:alt: "10/17 Optimizing TensorFlow for mobile"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

if you have a **neural network algorithm** running on your mobile app, you can get **labels** of the objects and send them to the **cloud**. 

It’s a more efficient way to collect the object **labels** on the **cloud service**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/optimizing_tf_for_mobile/011.jpg
:alt: "11/17 Optimizing TensorFlow for mobile"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Now let’s say you perform motion detection with your mobile app.

In this case, you can run a **neural network algorithm** to extract a **feature vector** from the sensor **data**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/optimizing_tf_for_mobile/012.jpg
:alt: "12/17 Optimizing TensorFlow for mobile"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The numbers in the **feature vector** represent the "signatures" of each motion. 

This means you don't have to send the **raw motion data** to a **cloud service**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/optimizing_tf_for_mobile/013.jpg
:alt: "13/17 Optimizing TensorFlow for mobile"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Also, by applying **machine learning** to mobile apps, you can
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/optimizing_tf_for_mobile/014.jpg
:alt: "14/17 Optimizing TensorFlow for mobile"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

reduce **network bandwidth**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/optimizing_tf_for_mobile/015.jpg
:alt: "15/17 Optimizing TensorFlow for mobile"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and get faster response times when communicating with **cloud services**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/optimizing_tf_for_mobile/016.jpg
:alt: "16/17 Optimizing TensorFlow for mobile"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It’s important to note that you often can’t use the **microservices approach** for mobile devices, as they can add unwanted **latency**. 

Since you can’t delegate to a **microservice**, like you can when running in the **cloud**, you’ll now want a library, not a process.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/building_hybrid_ml_systems/optimizing_tf_for_mobile/017.jpg
:alt: "17/17 Optimizing TensorFlow for mobile"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In these types of situations, it's best to **train models** in the **cloud** and do **predictive modeling on a device**. 

This means **embedding the model within the device itself**.
</div>
</div>
</div>
</div>
