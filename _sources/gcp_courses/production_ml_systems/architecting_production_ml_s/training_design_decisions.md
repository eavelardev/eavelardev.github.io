# Training design decisions

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

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/001.jpg
:alt: "1/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

One of the key decisions you'll need to make about your **production ML system**
concerns **training**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/002.jpg
:alt: "2/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Here's a question.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/003.jpg
:alt: "3/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

How is physics
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/004.jpg
:alt: "4/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

unlike fashion?** 

If we assume that science is about discovering relationships that already exist in the world, then the answer is that
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/005.jpg
:alt: "5/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

physics is constant whereas fashion isn't.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/006.jpg
:alt: "6/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

To see some proof, just look at some old pictures of yourself.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/007.jpg
:alt: "7/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Now, you might be asking, **why is this relevant?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/008.jpg
:alt: "8/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Well, when **making decisions** about **training**, you have to decide whether the
phenomenon you're modelling
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/009.jpg
:alt: "9/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

is more like physics,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/010.jpg
:alt: "10/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

or like fashion.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/011.jpg
:alt: "11/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

When **training** your **model**, there are two paradigms; **static training** and **dynamic training**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/012.jpg
:alt: "12/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In **static training**, we gather our **data**, we partition it, we **train** our **model**, and then we **deploy** it.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/013.jpg
:alt: "13/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In **dynamic training**, we do this repeatedly as more **data** arrives. 

This leads to the fundamental trade-off between **static** and **dynamic**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/014.jpg
:alt: "14/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Static** is simpler to build and test,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/015.jpg
:alt: "15/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

but likely to become stale.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/016.jpg
:alt: "16/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Whereas **dynamic** is harder to build and test,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/017.jpg
:alt: "17/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

but will **adapt** to changes. 

And the tendency to become or not become stale is what was being alluded to earlier when we contrasted physics and fashion.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/018.jpg
:alt: "18/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If the relationship you're trying to **model** is one that’s constant, like physics, then a **statically trained model** may be sufficient.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/019.jpg
:alt: "19/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If the relationship you're trying to **model** is one that changes, then the **dynamically trained model** might be more appropriate.

Part of the reason the **dynamic** is harder to build and test is that **new data** may have all sorts of bugs in it. 

And that's something we'll talk about more deeply in a later module on **designing adaptable ML systems**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/020.jpg
:alt: "20/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Engineering might also be harder because we need more
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/021.jpg
:alt: "21/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**monitoring**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/022.jpg
:alt: "22/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

model rollback,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/023.jpg
:alt: "23/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and data quarantine capabilities.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/024.jpg
:alt: "24/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s explore some **use cases** and think about which sort of **training style** would be most appropriate.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/025.jpg
:alt: "25/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The first `use case` concerns **spam detection**, and the question you should ask
yourself is, 

“**how fresh does spam detection need to be?**”
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/026.jpg
:alt: "26/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You could do this as **static**, but spammers are a crafty and determined bunch. 

They will probably discover ways of passing whatever filter you impose within a short time.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/027.jpg
:alt: "27/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

So, **dynamic** is likely to be more effective over time.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/028.jpg
:alt: "28/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**What about Android Voice-to-Text?** 

Note that this question has some subtlety.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/029.jpg
:alt: "29/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For a global model, **training offline** is probably fine.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/030.jpg
:alt: "30/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

But, if you want to personalize the **voice recognition**, you may need to do something online, or at least different, on the phone.

So this could be **static** or **dynamic**, depending on whether you want global or
personalized transcription.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/031.jpg
:alt: "31/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**What about ad conversion rate? **

The interesting subtlety here is that conversions may come in very late. 

For example, if I'm shopping for a car online, I'm unlikely to buy for a very long time.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/032.jpg
:alt: "32/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

This system could use **dynamic training**, then regularly going back at different intervals to catch up on new conversion data that has arrived for the past.

So in practice, most of the time, you'll need to use **dynamic**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/033.jpg
:alt: "33/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

but you might start with **static** because it's simpler.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/034.jpg
:alt: "34/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In a reference **architecture** for **static training**, **models** are **trained** once and then pushed to **AI Platform**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/035.jpg
:alt: "35/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Now, for **dynamic training**, there are three potential **architectures** to explore,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/036.jpg
:alt: "36/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Cloud Functions**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/037.jpg
:alt: "37/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**App Engine**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/038.jpg
:alt: "38/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

or **Cloud Dataflow**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/039.jpg
:alt: "39/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In a general **architecture** for **dynamic training** using **Cloud functions**, a new data file appears in **Cloud storage** and then
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/040.jpg
:alt: "40/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

the **Cloud function** is launched.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/041.jpg
:alt: "41/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

After that, the **Cloud function** starts the **AI Platform training job**, and then
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/042.jpg
:alt: "42/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

the **AI Platform** writes out a new **model**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/043.jpg
:alt: "43/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In a general architecture for **dynamic training** using **App Engine**, when a user makes a web request, perhaps from a dashboard to **App Engine**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/044.jpg
:alt: "44/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

an **AI Platform training job** is launched,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/045.jpg
:alt: "45/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and the **AI Platform job** writes a new model to **Cloud storage**.

From there,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/046.jpg
:alt: "46/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

the **statistics** of the **training job** are displayed to the user when the job is
complete.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/047.jpg
:alt: "47/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It's possible that the **Dataflow pipeline** is also invoking the **model** for **predictions**.

Here, a streaming topic is ingested into **Pub/Sub** from subscribers.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/048.jpg
:alt: "48/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Messages are then aggregated with **Dataflow**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/049.jpg
:alt: "49/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and aggregated **data** is stored into **BigQuery**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/050.jpg
:alt: "50/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**AI Platform** is launched on the arrival of **new data** in **BigQuery**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/training_design_decisions/051.jpg
:alt: "51/51 Training design decisions"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and then an updated **model** is **deployed**.
</div>
</div>
</div>
</div>
