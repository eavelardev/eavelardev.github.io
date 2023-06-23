# NLP APIs

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

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/001.jpg
:alt: "1/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Let’s start from the **pre-built APIs** as one of the **NLP development tools**. 

You’ll focus on the **Dialogflow API** and be introduced to the **Natural Language API**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/002.jpg
:alt: "2/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Dialogflow** is a **natural language understanding** (`NLU`) platform to design and integrate a **conversational user interface** ...
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/003.jpg
:alt: "3/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

into your mobile app, web application, device, bot, interactive voice response system, or similar use.

The **Dialogflow API** can be used to build a **human-like agent** to interact with and **engage your customers**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/004.jpg
:alt: "4/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Dialogflow** can **analyze** multiple types of **input** from your customers, including text or audio **inputs** (like from a phone or voice recording).
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/005.jpg
:alt: "5/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It can also respond to your customers in a couple of ways, either through text or with **synthetic speech**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/006.jpg
:alt: "6/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Dialogflow** provides two types of services in terms of the **complexity of the problem** and the **size of the data**:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/007.jpg
:alt: "7/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Dialogflow ES** —ES standing for Essentials— provides the **standard agent type** suitable for small and simple **agents**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/008.jpg
:alt: "8/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

A **Dialogflow agent** is similar to a human call-center agent; 

the only difference is that it’s a virtual (or machinery) **agent**. 

You **train** the **Dialogflow agent** to handle conversation scenarios based on a large amount of **data** such as past conversations or an existing **knowledge database**, the same way you **train** a human call-center agent.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/009.jpg
:alt: "9/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Dialogflow CX** —CX stands for Customer experience— provides an advanced type suitable for large or **complex agents**. 

Let’s compare these two services in more detail:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/010.jpg
:alt: "10/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In terms of the target problems that we just mentioned, **Dialogflow ES** focuses on small and relatively simple problems; 

**Dialogflow CX** targets larger and more **complex problems**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/011.jpg
:alt: "11/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Dialogflow ES** allows one agent per project. 

**CX** has different types of agents, such as sales agents, marketing agents, and customer service agents, and allows up to 100 agents per project.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/012.jpg
:alt: "12/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For the building blocks of a **virtual agent**, **Dialogflow ES** uses a flat structure called intent. **Dialogflow CX** uses a graph structure of flows and pages.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/013.jpg
:alt: "13/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

When you create an **agent** on the **Dialogflow Console**, **Dialogflow ES** provides text forms; 

**Dialogflow CX** gives you a visual representation that shows conversation paths.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/014.jpg
:alt: "14/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And last, the primary benefit of using **Dialogflow ES** is to allow a small company to create an **agent** quickly and affordably. 

Using **Dialogflow CX** instead of **ES** allows a large enterprise to create multiple virtual agents and better scale across multiple development teams.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/015.jpg
:alt: "15/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

With a brief idea of the differences between these two services, let’s focus on **Dialogflow ES**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/016.jpg
:alt: "16/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Dialogflow** handles conversation in almost the same way as a human interaction.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/017.jpg
:alt: "17/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Imagine a conversation: You ask **Google Assistant**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/018.jpg
:alt: "18/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

“**can you send me a reminder?**” 

**Google Assistant** may respond ...
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/019.jpg
:alt: "19/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

“**what do you want to be reminded about?**”

You reply ...
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/020.jpg
:alt: "20/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

“Mom’s birthday is on May 1”.

**Google Assistant** asks a follow-up question:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/021.jpg
:alt: "21/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

“**do you want to add it to Google Calendar?**”

You reply ...
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/022.jpg
:alt: "22/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

“yes, please!
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/023.jpg
:alt: "23/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You might have noticed three major components involved in this conversation.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/024.jpg
:alt: "24/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

First is the **topic**, **what is this conversation about?** 

**What does a customer want?** 

So **what do you think the goal of this conversation?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/025.jpg
:alt: "25/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Right, a reminder.

The customer needs to set up a reminder.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/026.jpg
:alt: "26/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In **Dialogflow**, we call the **topic** or the goal of a conversation as **intent**, and it indicates the intention from a customer, for example,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/027.jpg
:alt: "27/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

setting up a reminder,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/028.jpg
:alt: "28/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

asking for the weather,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/029.jpg
:alt: "29/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

or checking an account balance.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/030.jpg
:alt: "30/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Based on the **data** from tons of conversations, **Dialogflow** built a **database** that includes the popular **intents**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/031.jpg
:alt: "31/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

When an end user writes or says something, referred to as an end-user expression, **Dialogflow** matches the expression of an end user to the **intent** in the **database**.

Matching an **intent** is also known as **intent matching** or **intent classification**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/032.jpg
:alt: "32/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Two **algorithms** are used to match an **intent**: **rule-based reasoning** and **machine learning matching**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/033.jpg
:alt: "33/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Rule-based reasoning** refers to the traditional **decision tree**.

For example, **do you like dogs or cats?** If cats, **do you like long hair or short hair?** If short hair, here are the three choices.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/034.jpg
:alt: "34/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**ML matching** uses **machine learning models** to teach the machine from a large number of conversations in order to identify **intents** and **matching keywords**. 

**Dialogflow** simultaneously attempts both **algorithms** and chooses the best result.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/035.jpg
:alt: "35/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

After identifying the **intent**, or the topic of a conversation, the next task is
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/036.jpg
:alt: "36/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

identify the **entities**, or the specifics of the topic.

In this conversation, **what would be the specifics of the reminder?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/037.jpg
:alt: "37/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The reminder is about mom’s birthday, and the date is May the first.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/038.jpg
:alt: "38/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You can think of **entities** as
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/039.jpg
:alt: "39/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

related to the details, or the specifics, of an **intent**, such as
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/040.jpg
:alt: "40/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

who,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/041.jpg
:alt: "41/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

what,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/042.jpg
:alt: "42/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

when, and
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/043.jpg
:alt: "43/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

where.

For example,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/044.jpg
:alt: "44/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

this reminder needs to be set to a certain date,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/045.jpg
:alt: "45/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and this reminder is about a birthday.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/046.jpg
:alt: "46/98 NLP APIs"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/047.jpg
:alt: "47/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Dialogflow** provides predefined **system entities** that can match many common **types of data**, such as dates, times, colors, and email addresses.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/048.jpg
:alt: "48/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You can also create your own **custom entities** for **matching custom data**. 

For example, you could define a vegetable **entity** that can match the types of vegetables available for purchase with a grocery store **agent**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/049.jpg
:alt: "49/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

After the **intent** (or the **topic of a conversation**) and the **entities** (or **the specifics of the topic**) are identified,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/050.jpg
:alt: "50/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

the third component is the flow of the conversation.

For example, in this case, **Google Assistant** understands the details of the request
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/051.jpg
:alt: "51/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

then asks a follow-up question if the end user wants to save the reminder on **Google Calendar**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/052.jpg
:alt: "52/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The conversation can continue to ask the users if they want to send flowers a week before the birthday.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/053.jpg
:alt: "53/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Based on the answer, **Google Assistant** might continue to ask which flower shop to call
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/054.jpg
:alt: "54/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

or end the conversation.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/055.jpg
:alt: "55/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

This conversation flow is based on
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/056.jpg
:alt: "56/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**context**.

**Dialogflow contexts** are similar to **natural language context**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/057.jpg
:alt: "57/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If a person says to you "they are orange",
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/058.jpg
:alt: "58/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

you need **context** to understand what "they" refers to.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/060.jpg
:alt: "59/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Similarly, for **Dialogflow** to handle an end-user expression like that,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/061.jpg
:alt: "60/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

it needs to be provided with **context** to correctly understand an **intent**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/062.jpg
:alt: "61/98 NLP APIs"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/063.jpg
:alt: "62/98 NLP APIs"
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

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/064.jpg
:alt: "63/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**input** and **output contexts**.

**Input** and **output contexts** are applied to **intents**. 

They work together to control conversation flow:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/065.jpg
:alt: "64/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Output contexts** control **active contexts**.

When an **intent** is matched, any configured **output contexts** for that **intent** become active.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/066.jpg
:alt: "65/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Input contexts** control **intent matching**. 

While **contexts** are active, **Dialogflow** is more likely to match **intents** with the currently **active contexts**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/067.jpg
:alt: "66/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Use the same reminder example, you asks to set up a reminder.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/068.jpg
:alt: "67/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Dialogflow** matches your expression to the **SendReminder intent**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/069.jpg
:alt: "68/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

This **intent** has a Reminder **output context** and it becomes active.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/070.jpg
:alt: "69/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Based on the Reminder **output context**, **Google Assistant** asks what the reminder is.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/071.jpg
:alt: "70/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You responds with "Mom’s birthday on May 1".
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/072.jpg
:alt: "71/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Dialogflow** matches your expression to the **AddtoCalendar intent**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/073.jpg
:alt: "72/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

which is also a match to the Reminder **input context**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/074.jpg
:alt: "73/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

At the same time, the AddtoCalendar **intent** activates another **output context** called Calendar.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/075.jpg
:alt: "74/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Based on the Calendar **output context**, **Google Assistant** asks whether you want to add the reminder to **Google Calendar**, and the conversation goes on.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/076.jpg
:alt: "75/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

To put all the pieces together, let’s look at **how Dialogflow works**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/077.jpg
:alt: "76/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Please note that, by default, your **agent** responds to a **matched intent** with a **static response**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/078.jpg
:alt: "77/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If you use one of the integration options,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/079.jpg
:alt: "78/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

you can provide a more **dynamic response** by using fulfillment,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/080.jpg
:alt: "79/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

meaning self-defined actions.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/081.jpg
:alt: "80/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

1. An end user starts a conversation by either typing or speaking.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/082.jpg
:alt: "81/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

2. **Dialogflow** matches the expression of the end user to an **intent** and extracts **entities**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/083.jpg
:alt: "82/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

3/4/5. 

If you have self-defined fulfillments, **Dialogflow** sends a message to the **webhook service**, queries the **database**, and gets a **response**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/084.jpg
:alt: "83/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

6. **Dialogflow** sends the response to the end user.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/085.jpg
:alt: "84/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

7. The end user sees or hears the **response**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/086.jpg
:alt: "85/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In addition to the **Dialogflow API**, **Google** also provides the **Natural Language API** and the **Healthcare Natural Language API**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/087.jpg
:alt: "86/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Natural Language API** uses powerful **pre-trained models** and allow developers to easily apply **natural language understanding** (`NLU`) to their applications.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/088.jpg
:alt: "87/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The key features include
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/089.jpg
:alt: "88/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**sentiment analysis**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/090.jpg
:alt: "89/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**entity analysis**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/091.jpg
:alt: "90/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**entity sentiment analysis**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/092.jpg
:alt: "91/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

content **classification**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/093.jpg
:alt: "92/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and syntax **analysis**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/094.jpg
:alt: "93/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **Healthcare Natural Language API** helps you gain **real-time analysis** of insights stored in **unstructured medical text**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/095.jpg
:alt: "94/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It lets you distill machine-readable medical insights from medical documents,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/096.jpg
:alt: "95/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and **AutoML Entity Extraction** for Healthcare makes it simple to build **custom knowledge extraction models** for healthcare and life sciences apps and doesn’t require coding skills.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/097.jpg
:alt: "96/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Try the demo yourself to better understand what the **Natural Language API** can do.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/098.jpg
:alt: "97/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In addition to the **pre-built APIs**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/nlp_on_gcp/nlp_on_gcp/nlp_apis/099.jpg
:alt: "98/98 NLP APIs"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Google** offers two other ways to develop an **NLP project**.
</div>
</div>
</div>
</div>
