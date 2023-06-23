# GCP notes

Google Cloud CLI [Installation instructions](https://cloud.google.com/sdk/docs/install#installation_instructions)
```
sudo apt-get install -y apt-transport-https

echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list

curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -

sudo apt-get update && sudo apt-get install -y google-cloud-cli
```

Config GCP

```
gcloud auth application-default login --no-launch-browser

PROJECT_ID=my_project_id

gcloud auth application-default set-quota-project $PROJECT_ID

gcloud config set project $PROJECT_ID
```
Optionally you can set the environment variable `GOOGLE_CLOUD_PROJECT`

```
echo "export GOOGLE_CLOUD_PROJECT=$PROJECT_ID" >> ~/.bashrc 
```

Get GCP project
```
gcloud config get-value project
```

Get and Set GCP project in Python.
```python
import os

shell_output = !gcloud config get-value project
PROJECT_ID = shell_output[0]
os.environ['GOOGLE_CLOUD_PROJECT'] = PROJECT_ID
print(PROJECT_ID)
```

or if you previously set the env variable, you can use GCP libs without set the project explicitly, but maybe you want to know it to use it as tag.
```python
import os

PROJECT_ID = os.environ.get("GOOGLE_CLOUD_PROJECT")
print(PROJECT_ID)
```


Python packages to use `BigQuery` with Jupyter Notebooks
```
google-cloud-bigquery
google-cloud-bigquery-storage
pandas
db-dtypes
tqdm
ipywidgets
```

Enable `BigQuery` extension
```python
%load_ext google.cloud.bigquery
```
Create dataset
```python
bigquery_client = bigquery.Client()
dataset = bigquery_client.create_dataset('dataset', exists_ok=True)
```

Define `BigQuery` SQL cell execution

```python
%%bigquery
# My query
```

Delete dataset

```python
bigquery_client.delete_dataset(dataset, delete_contents=True)
```
