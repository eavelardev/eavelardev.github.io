# Data extraction, analysis, and preparation

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

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/001.jpg
:alt: "1/46 Data extraction, analysis, and preparation"
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

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/002.jpg
:alt: "2/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

After you define the **business use case**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/003.jpg
:alt: "3/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and establish the **success criteria**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/004.jpg
:alt: "4/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

the process of delivering an **ML model** to **production** typically involves several steps,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/005.jpg
:alt: "5/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

which can be completed manually or by an **automated pipeline**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/006.jpg
:alt: "6/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The first three steps deal with **data**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/007.jpg
:alt: "7/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Data** needs to be **ingested**, which means it’s extracted from a **raw data source**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/008.jpg
:alt: "8/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

With **data extraction**, you retrieve **data** from various **sources**. 

Those **sources** can be “**streaming**”, in “**real-time**”, or “**batch**”.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/009.jpg
:alt: "9/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For example, you may **extract data** from a customer relationship management
system, or CRM, to **analyze** customer behavior
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/010.jpg
:alt: "10/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

This data may be
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/011.jpg
:alt: "11/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

“**structured**”, where the file type is a .`csv`, .`txt`. `JSON`, or .`XML`
format, or,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/012.jpg
:alt: "12/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

you may have an “**unstructured**” **data source** where you have images of
your customers, or text comments from chat sessions with your customers.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/013.jpg
:alt: "13/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

You may have to extract “**streaming**” **data** from your company’s transportation
vehicles that are equipped with sensors that transmit **data** in **real time**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/014.jpg
:alt: "14/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If the **data** you want to **train** your **model** on or get **predictions** for is **structured**, you might retrieve it from a **data warehouse** -- such as **BigQuery**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/015.jpg
:alt: "15/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Or, you can use **Apache Beam’s IO module**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/016.jpg
:alt: "16/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this **Dataflow** example we’re loading **data** from **BigQuery**, calling **predict** on every record,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/017.jpg
:alt: "17/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and then writing the results back into **BigQuery**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/018.jpg
:alt: "18/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In **data analysis**, you **analyze** the **data** you’ve extracted.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/019.jpg
:alt: "19/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For example, you can use **exploratory data analysis** (or `EDA`).
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/020.jpg
:alt: "20/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

This involves using graphics and basic sample `statistics` to explore your **data**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/021.jpg
:alt: "21/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

such as looking for **outliers**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/022.jpg
:alt: "22/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

or anomalies,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/023.jpg
:alt: "23/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

trends,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/024.jpg
:alt: "24/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

and data **distributions**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/025.jpg
:alt: "25/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

It may not be apparent how changes in the **distribution** of your **data** could affect your **model**, so let’s consider a scenario.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/026.jpg
:alt: "26/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In this scenario, an **upstream data source** encodes a **categorical feature** using a number, such as a product number
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/027.jpg
:alt: "27/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

One day, the product numbering convention changes and now the customer uses a
totally different mapping, using some old numbers and some new numbers.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/028.jpg
:alt: "28/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**How would you know that this had happened?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/029.jpg
:alt: "29/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**How would you debug your ML model?**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/030.jpg
:alt: "30/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

The **output** of your **model** would tell you if there’s a drop in **performance**, but it won’t tell you why. 

The **raw inputs** themselves would appear valid because we’re still getting numbers.

In order to recognize this change, you would need to look at **changes in the distribution of your inputs**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/031.jpg
:alt: "31/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

In doing so, you might find that while earlier, the most commonly occurring value
might have been a 4, in the new **distribution**, 4 might never even occur and the most commonly occurring value might be a 10
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/032.jpg
:alt: "32/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Depending on how you implemented your **feature columns**, these new values might
be **mapped** to one component of a **one-hot encoded vector** or to many components.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/033.jpg
:alt: "33/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

If, for example, you used a **categorical column** with a **hash bucket**, the new values would be distributed according to the **hash function**, and so one **hash bucket** might now get more and different values than before.

If you used a vocabulary, then the new values would **map** to `OOV` **buckets**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/034.jpg
:alt: "34/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

But what’s important is that, for a given **tensor**, its relationship to the label before, and its relationship to the label now, are likely to be very different.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/035.jpg
:alt: "35/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

So, after you’ve **extracted** and **analyzed** your **data**, the next step in the process is **data preparation**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/036.jpg
:alt: "36/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

**Data preparation** includes **data transformation** and **feature engineering**, which is the process of changing, or converting, the format, structure, or values of data you’ve extracted, into another format or structure.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/037.jpg
:alt: "37/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Most **ML models** require **categorical data**
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/038.jpg
:alt: "38/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

to be in a **numerical format**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/039.jpg
:alt: "39/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

but some **models** work either with **numeric** or **categorical features**,
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/040.jpg
:alt: "40/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

while others can handle **mixed-type features**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/041.jpg
:alt: "41/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

For example, here are three types of **preprocessing** for dates using `SQL` in **BigQuery ML**, where we are:
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/042.jpg
:alt: "42/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Extracting the parts of the date into different columns: Year, month, day, etc.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/043.jpg
:alt: "43/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Extracting the time period between the current date and columns in terms of
years, months, days, etc
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/044.jpg
:alt: "44/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

And extracting some specific **features** from the date: Name of the weekday,
weekend or not, holiday or not, etc.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/045.jpg
:alt: "45/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Now here is an example of the `dayofweek` and `hourofday` queries extracted using
`SQL` and visualized as a table in **Data Studio**.
</div>
</div>
</div>
</div>
<div class="slides">
<div>

```{image} ../../../images/gcp_courses/production_ml_systems/architecting_production_ml_s/data_extraction_analysis_and_preparation/046.jpg
:alt: "46/46 Data extraction, analysis, and preparation"
:class: slide-img
```
<div class="cell tag_remove-input tag_output_scroll docutils container">
<div class="cell_output docutils container">

Please note that for all **non-numeric columns**, other than `TIMESTAMP`, **BigQuery ML** performs a **one-hot encoding transformation**. 

This transformation generates a separate **feature** for each unique value in the column.
</div>
</div>
</div>
</div>
