questions =
{
  "official": {
    "pro_ml_sample": [
      {
        "id": "pro_ml_sample_1",
        "domain": [],
        "intro": [],
        "body": [
          "You are developing a proof of concept for a real-time fraud detection model. After undersampling the training set to achieve a 50% fraud rate, you train and tune a tree classifier using area under the curve (AUC) as the metric, and then calibrate the model. You need to share metrics that represent your model’s effectiveness with business stakeholders in a way that is easily interpreted. Which approach should you take?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Calculate the AUC on the holdout dataset at a classification threshold of 0.5, and report true positive rate, false positive rate, and false negative rate."],
            "answer": false,
            "explanation": ["You need business directions about the cost of misclassification to define the optimal threshold for both balanced and imbalanced classification."]
          },
          {
            "option": ["Undersample the minority class to achieve a 50% fraud rate in the holdout set. Plot the confusion matrix at a classification threshold of 0.5, and report precision and recall."],
            "answer": false,
            "explanation": ["The holdout dataset needs to represent real-world transactions to have a meaningful model evaluation, and you should never change its distribution."]
          },
          {
            "option": ["Select all transactions in the holdout dataset. Plot the area under the receiver operating characteristic curve (AUC ROC), and report the F1 score for all available thresholds."],
            "answer": false,
            "explanation": ["Classes in the holdout dataset are not balanced, so the ROC curve is not appropriate; also, neither F1 score nor ROC curve is recommended for communicating to business stakeholders. The F1 score aggregates precision and recall, but it is important to look at each metric separately to evaluate the model’s performance when the cost of misclassification is highly unbalanced between labels."]
          },
          {
            "option": ["Select all transactions in the holdout dataset. Plot the precision-recall curve with associated average precision, and report the true positive rate, false positive rate, and false negative rate for all available thresholds."],
            "answer": true,
            "explanation": ["The precision-recall curve is an appropriate metric for imbalanced classification when the output can be set using different thresholds. Presenting the precision-recall curve together with the mentioned rates provides business stakeholders with all the information necessary to evaluate model performance."]
          }
        ],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/classification/roc-and-auc",
          "https://machinelearningmastery.com/threshold-moving-for-imbalanced-classification/",
          "https://colab.research.google.com/github/Fraud-Detection-Handbook/fraud-detection-handbook/blob/main/Chapter_4_PerformanceMetrics/ThresholdBased.ipynb",
          "https://colab.research.google.com/github/Fraud-Detection-Handbook/fraud-detection-handbook/blob/main/Chapter_4_PerformanceMetrics/ThresholdFree.ipynb"
        ],
        "date": ""
      },
      {
        "id": "pro_ml_sample_2",
        "domain": [],
        "intro": [],
        "body": [
          "Your organization’s marketing team wants to send biweekly scheduled emails to customers that are expected to spend above a variable threshold. This is the first machine learning (ML) use case for the marketing team, and you have been tasked with the implementation. After setting up a new Google Cloud project, you use Vertex AI Workbench to develop model training and batch inference with an XGBoost model on the transactional data stored in Cloud Storage. You want to automate the end-to-end pipeline that will securely provide the predictions to the marketing team, while minimizing cost and code maintenance. What should you do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Create a scheduled pipeline on Vertex AI Pipelines that accesses the data from Cloud Storage, uses Vertex AI to perform training and batch prediction, and outputs a file in a Cloud Storage bucket that contains a list of all customer emails and expected spending."],
            "answer": true,
            "explanation": ["Vertex AI Pipelines and Cloud Storage are cost-effective and secure solutions. The solution requires the least number of code interactions because the marketing team can update the pipeline and schedule parameters from the Google Cloud console."]
          },
          {
            "option": ["Create a scheduled pipeline on Cloud Composer that accesses the data from Cloud Storage, copies the data to BigQuery, uses BigQuery ML to perform training and batch prediction, and outputs a table in BigQuery with customer emails and expected spending."],
            "answer": false,
            "explanation": ["Cloud Composer is not a cost-efficient solution for one pipeline because its environment is always active. In addition, using BigQuery is not the most cost-effective solution."]
          },
          {
            "option": ["Create a scheduled notebook on Vertex AI Workbench that accesses the data from Cloud Storage, performs training and batch prediction on the managed notebook instance, and outputs a file in a Cloud Storage bucket that contains a list of all customer emails and expected spending."],
            "answer": false,
            "explanation": ["The marketing team would have to enter the Vertex AI Workbench instance to update a pipeline parameter, which does not minimize code interactions."]
          },
          {
            "option": ["Create a scheduled pipeline on Cloud Composer that accesses the data from Cloud Storage, uses Vertex AI to perform training and batch prediction, and sends an email to the marketing team’s Gmail group email with an attachment that contains an encrypted list of all customer emails and expected spending."],
            "answer": false,
            "explanation": ["Cloud Composer is not a cost-efficient solution for one pipeline because its environment is always active. Also, using email to send personally identifiable information (PII) is not a recommended approach."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/storage/docs/encryption",
          "https://cloud.google.com/vertex-ai/docs/pipelines/run-pipeline",
          "https://cloud.google.com/vertex-ai/docs/workbench/managed/schedule-managed-notebooks-run-quickstart",
          "https://cloud.google.com/architecture/setting-up-mlops-with-composer-and-mlflow"
        ],
        "date": ""
      },
      {
        "id": "pro_ml_sample_3",
        "domain": [],
        "intro": [],
        "body": [
          "You have developed a very large network in TensorFlow Keras that is expected to train for multiple days. The model uses only built-in TensorFlow operations to perform training with high-precision arithmetic. You want to update the code to run distributed training using tf.distribute.Strategy and configure a corresponding machine instance in Compute Engine to minimize training time. What should you do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Select an instance with an attached GPU, and gradually scale up the machine type until the optimal execution time is reached. Add MirroredStrategy to the code, and create the model in the strategy’s scope with batch size dependent on the number of replicas."],
            "answer": false,
            "explanation": ["It is suboptimal in minimizing execution time for model training. MirroredStrategy only supports multiple GPUs on one instance, which may not be as performant as running on multiple instances."]
          },
          {
            "option": ["Create an instance group with one instance with attached GPU, and gradually scale up the machine type until the optimal execution time is reached. Add TF_CONFIG and MultiWorkerMirroredStrategy to the code, create the model in the strategy’s scope, and set up data autosharding."],
            "answer": true,
            "explanation": ["GPUs are the correct hardware for deep learning training with high-precision training, and distributing training with multiple instances will allow maximum flexibility in fine-tuning the accelerator selection to minimize execution time. Note that one worker could still be the best setting if the overhead of synchronizing the gradients across machines is too high, in which case this approach will be equivalent to MirroredStrategy."]
          },
          {
            "option": ["Create a TPU virtual machine, and gradually scale up the machine type until the optimal execution time is reached. Add TPU initialization at the start of the program, define a distributed TPUStrategy, and create the model in the strategy’s scope with batch size and training steps dependent on the number of TPUs."],
            "answer": false,
            "explanation": ["TPUs are not recommended for workloads that require high-precision arithmetic, and are recommended for models that train for weeks or months."]
          },
          {
            "option": ["Create a TPU node, and gradually scale up the machine type until the optimal execution time is reached. Add TPU initialization at the start of the program, define a distributed TPUStrategy, and create the model in the strategy’s scope with batch size and training steps dependent on the number of TPUs."],
            "answer": false,
            "explanation": ["TPUs are not recommended for workloads that require high-precision arithmetic, and are recommended for models that train for weeks or months. Also, TPU nodes are not recommended unless required by the application."]
          }
        ],
        "feedback": [],
        "references": [
          "https://www.tensorflow.org/tutorials/distribute/multi_worker_with_keras",
          "https://cloud.google.com/tpu/docs/intro-to-tpu#cloud_tpus_are_not_suited_to_the_following_workloads",
          "https://www.tensorflow.org/guide/distributed_training",
          "https://www.tensorflow.org/tutorials/distribute/multi_worker_with_ctl"
        ],
        "date": ""
      },
      {
        "id": "pro_ml_sample_4",
        "domain": [],
        "intro": [],
        "body": [
          "You developed a tree model based on an extensive feature set of user behavioral data. The model has been in production for 6 months. New regulations were just introduced that require anonymizing personally identifiable information (PII), which you have identified in your feature set using the Cloud Data Loss Prevention API. You want to update your model pipeline to adhere to the new regulations while minimizing a reduction in model performance. What should you do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Redact the features containing PII data, and train the model from scratch."],
            "answer": false,
            "explanation": ["Removing features from the model does not keep referential integrity by maintaining the original relationship between records, and is likely to cause a drop in performance."]
          },
          {
            "option": ["Mask the features containing PII data, and tune the model from the last checkpoint."],
            "answer": false,
            "explanation": ["Masking does not enforce referential integrity, and a drop in model performance may happen. Also, tuning the existing model is not recommended because the model training on the original dataset may have memorized sensitive information."]
          },
          {
            "option": ["Use key-based hashes to tokenize the features containing PII data, and train the model from scratch."],
            "answer": true,
            "explanation": ["Hashing is an irreversible transformation that ensures anonymization and does not lead to an expected drop in model performance because you keep the same feature set while enforcing referential integrity."]
          },
          {
            "option": ["Use deterministic encryption to tokenize the features containing PII data, and tune the model from the last checkpoint."],
            "answer": false,
            "explanation": ["Deterministic encryption is reversible, and anonymization requires irreversibility. Also, tuning the existing model is not recommended because the model training on the original dataset may have memorized sensitive information."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/dlp/docs/transformations-reference#transformation_methods",
          "https://cloud.google.com/dlp/docs/deidentify-sensitive-data",
          "https://cloud.google.com/blog/products/identity-security/next-onair20-security-week-session-guide",
          "https://cloud.google.com/dlp/docs/creating-job-triggers"
        ],
        "date": ""
      },
      {
        "id": "pro_ml_sample_5",
        "domain": [],
        "intro": [],
        "body": [
          "You set up a Vertex AI Workbench instance with a TensorFlow Enterprise environment to perform exploratory data analysis for a new use case. Your training and evaluation datasets are stored in multiple partitioned CSV files in Cloud Storage. You want to use TensorFlow Data Validation (TFDV) to explore problems in your data before model tuning. You want to fix these problems as quickly as possible. What should you do?"
        ],
        "open": false,
        "options": [
          {
            "option": [
              "1. Use TFDV to generate statistics, and use Pandas to infer the schema for the training dataset that has been loaded from Cloud Storage.",
              "2. Visualize both statistics and schema, and manually fix anomalies in the dataset’s schema and values."],
            "answer": false,
            "explanation": ["You also need to use the evaluation dataset for analysis. If the features do not belong to approximately the same range as the training dataset, the accuracy of the model will be affected."]
          },
          {
            "option": [
              "1. Use TFDV to generate statistics and infer the schema for the training and evaluation datasets that have been loaded from Cloud Storage by using URI.",
              "2. Visualize statistics for both datasets simultaneously to fix the datasets’ values, and fix the training dataset’s schema after displaying it together with anomalies in the evaluation dataset."],
            "answer": true,
            "explanation": ["It takes the minimum number of steps to correctly fix problems in the data with TFDV before model tuning. This process involves installing tensorflow_data_validation, loading the training and evaluation datasets directly from Cloud Storage, and fixing schema and values for both. Note that the schema is only stored for the training set because it is expected to match at evaluation."]
          },
          {
            "option": [
              "1. Use TFDV to generate statistics, and use Pandas to infer the schema for the training dataset that has been loaded from Cloud Storage.",
              "2. Use TFRecordWriter to convert the training dataset into a TFRecord.",
              "3. Visualize both statistics and schema, and manually fix anomalies in the dataset’s schema and values."],
            "answer": false,
            "explanation": ["Transforming into TFRecord is an unnecessary step. Also, you need to use the evaluation dataset for analysis. If the features do not belong to approximately the same range as the training dataset, the accuracy of the model will be affected."]
          },
          {
            "option": [
              "1. Use TFDV to generate statistics and infer the schema for the training and evaluation datasets that have been loaded with Pandas.",
              "2. Use TFRecordWriter to convert the training and evaluation datasets into TFRecords.",
              "3. Visualize statistics for both datasets simultaneously to fix the datasets’ values, and fix the training dataset’s schema after displaying it together with anomalies in the evaluation dataset."],
            "answer": false,
            "explanation": ["Transforming into TFRecord is an unnecessary step."]
          }
        ],
        "feedback": [],
        "references": [
          "https://www.tensorflow.org/tfx/guide/tfdv",
          "https://cloud.google.com/tensorflow-enterprise/docs/overview",
          "https://cloud.google.com/architecture/ml-modeling-monitoring-analyzing-training-server-skew-in-ai-platform-prediction-with-tfdv"
        ],
        "date": ""
      },
      {
        "id": "pro_ml_sample_6",
        "domain": [],
        "intro": [],
        "body": [
          "You have developed a simple feedforward network on a very wide dataset. You trained the model with mini-batch gradient descent and L1 regularization. During training, you noticed the loss steadily decreasing before moving back to the top at a very sharp angle and starting to oscillate. You want to fix this behavior with minimal changes to the model. What should you do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Shuffle the data before training, and iteratively adjust the batch size until the loss improves."],
            "answer": false,
            "explanation": ["divergence due to repetitive behavior in the data typically shows a loss that starts oscillating after some steps but does not jump back to the top."]
          },
          {
            "option": ["Explore the feature set to remove NaNs and clip any noisy outliers. Shuffle the data before retraining."],
            "answer": true,
            "explanation": ["A large increase in loss is typically caused by anomalous values in the input data that cause NaN traps or exploding gradients."]
          },
          {
            "option": ["Switch from L1 to L2 regularization, and iteratively adjust the L2 penalty until the loss improves."],
            "answer": false,
            "explanation": ["L2 is not clearly a better solution than L1 regularization for wide models. L1 helps with sparsity, and L2 helps with collinearity."]
          },
          {
            "option": ["Adjust the learning rate to exponentially decay with a larger decrease at the step where the loss jumped, and iteratively adjust the initial learning rate until the loss improves."],
            "answer": false,
            "explanation": ["A learning rate schedule that is not tuned typically shows a loss that starts oscillating after some steps but does not jump back to the top."]
          }
        ],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/representation/cleaning-data",
          "https://developers.google.com/machine-learning/testing-debugging/metrics/interpretic",
          "https://developers.google.com/machine-learning/crash-course/regularization-for-sparsity/l1-regularization"
        ],
        "date": ""
      },
      {
        "id": "pro_ml_sample_7",
        "domain": [],
        "intro": [],
        "body": [
          "You trained a neural network on a small normalized wide dataset. The model performs well without overfitting, but you want to improve how the model pipeline processes the features because they are not all expected to be relevant for the prediction. You want to implement changes that minimize model complexity while maintaining or improving the model’s offline performance. What should you do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Keep the original feature set, and add L1 regularization to the loss function."],
            "answer": false,
            "explanation": ["Although the approach lets you reduce RAM requirements by pushing the weights for meaningless features to 0, regularization tends to cause the training error to increase. Consequently, the model performance is expected to decrease."]
          },
          {
            "option": ["Use principal component analysis (PCA), and select the first n components that explain 99% of the variance."],
            "answer": false,
            "explanation": ["PCA is an unsupervised approach, and it is a valid method of feature selection only if the most important variables are the ones that also have the most variation. This is usually not true, and disregarding the last few components is likely to decrease model performance."]
          },
          {
            "option": ["Perform correlation analysis. Remove features that are highly correlated to one another and features that are not correlated to the target."],
            "answer": true,
            "explanation": ["Removing irrelevant features reduces model complexity and is expected to boost performance by removing noise."]
          },
          {
            "option": ["Ensure that categorical features are one-hot encoded and that continuous variables are binned, and create feature crosses for a subset of relevant features."],
            "answer": false,
            "explanation": ["This approach can make the model converge faster but it increases model RAM requirements, and it is not expected to boost model performance because neural networks inherently learn feature crosses."]
          }
        ],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/feature-crosses/video-lecture",
          "https://cloud.google.com/blog/products/ai-machine-learning/building-ml-models-with-eda-feature-selection",
          "https://developers.google.com/machine-learning/crash-course/regularization-for-sparsity/l1-regularization"
        ],
        "date": ""
      },
      {
        "id": "pro_ml_sample_8",
        "domain": [],
        "intro": [],
        "body": [
          "You trained a model in a Vertex AI Workbench notebook that has good validation RMSE. You defined 20 parameters with the associated search spaces that you plan to use for model tuning. You want to use a tuning approach that maximizes tuning job speed. You also want to optimize cost, reproducibility, model performance, and scalability where possible if they do not affect speed. What should you do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Set up a cell to run a hyperparameter tuning job using Vertex AI Vizier with val_rmse specified as the metric in the study configuration."],
            "answer": false,
            "explanation": ["Vertex AI Vizier should be used for systems that do not have a known objective function or are too costly to evaluate using the objective function. Neither applies to the specified use case. Vizier requires sequential trials and does not optimize for cost or tuning time."]
          },
          {
            "option": ["Using a dedicated Python library such as Hyperopt or Optuna, configure a cell to run a local hyperparameter tuning job with Bayesian optimization."],
            "answer": false,
            "explanation": ["Bayesian optimization can converge in fewer iterations than the other algorithms but not necessarily in a faster time because trials are dependent and thus require sequentiality. Also, running tuning locally does not optimize for reproducibility and scalability."]
          },
          {
            "option": ["Refactor the notebook into a parametrized and dockerized Python script, and push it to Container Registry. Use the UI to set up a hyperparameter tuning job in Vertex AI. Use the created image and include Grid Search as an algorithm."],
            "answer": false,
            "explanation": ["Grid Search is a brute-force approach and it is not feasible to fully parallelize. Because you need to try all hyperparameter combinations, that is an exponential number of trials with respect to the number of hyperparameters, Grid Search is inefficient for high spaces in time, cost, and computing power."]
          },
          {
            "option": ["Refactor the notebook into a parametrized and dockerized Python script, and push it to Container Registry. Use the command line to set up a hyperparameter tuning job in Vertex AI. Use the created image and include Random Search as an algorithm where maximum trial count is equal to parallel trial count."],
            "answer": true,
            "explanation": ["Random Search can limit the search iterations on time and parallelize all trials so that the execution time of the tuning job corresponds to the longest training produced by your hyperparameter combination. This approach also optimizes for the other mentioned metrics."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/training/hyperparameter-tuning-overview",
          "https://cloud.google.com/vertex-ai/docs/vizier/overview",
          "https://google-cloud-pipeline-components.readthedocs.io/en/google-cloud-pipeline-components-1.0.7/google_cloud_pipeline_components.v1.hyperparameter_tuning_job.html#google_cloud_pipeline_components.v1.hyperparameter_tuning_job.HyperparameterTuningJobRunOp"
        ],
        "date": ""
      },
      {
        "id": "pro_ml_sample_9",
        "domain": [],
        "intro": [],
        "body": [
          "You trained a deep model for a regression task. The model predicts the expected sale price for a house based on features that are not guaranteed to be independent. You want to evaluate your model by defining a baseline approach and selecting an evaluation metric for comparison that detects high variance in the model. What should you do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Use a heuristic that predicts the mean value as the baseline, and compare the trained model’s mean absolute error against the baseline."],
            "answer": false,
            "explanation": ["Always predicting the mean value is not expected to be a strong baseline; house prices could assume a wide range of values. Also, mean absolute error is not the best metric to detect variance because it gives the same weight to all errors."]
          },
          {
            "option": ["Use a linear model trained on the most predictive features as the baseline, and compare the trained model’s root mean squared error against the baseline."],
            "answer": false,
            "explanation": ["A linear model is not expected to perform well with multicollinearity. Also, root mean squared error does not penalize high variance as much as mean squared error because the root operation reduces the importance of higher values."]
          },
          {
            "option": ["Determine the maximum acceptable mean absolute percentage error (MAPE) as the baseline, and compare the model’s MAPE against the baseline."],
            "answer": false,
            "explanation": ["While defining a threshold for acceptable performance is a good practice for blessing models, a baseline should aim to test statistically a model’s ability to learn by comparing it to a less complex data-driven approach. Also, this approach does not detect high variance in the model."]
          },
          {
            "option": ["Use a simple neural network with one fully connected hidden layer as the baseline, and compare the trained model’s mean squared error against the baseline."],
            "answer": true,
            "explanation": ["A one-layer neural network can handle collinearity and is a good baseline. The mean square error is a good metric because it gives more weight to errors with larger absolute values than to errors with smaller absolute values."]
          }
        ],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/testing-debugging/common/model-errors#establish-a-baseline",
          "https://cloud.google.com/vertex-ai/docs/tabular-data/tabular101#evaluate_test_and_deploy_your_model",
          "https://cloud.google.com/vertex-ai/docs/tabular-data/classification-regression/evaluate-model#metrics",
          "https://developers.google.com/machine-learning/glossary#baseline"
        ],
        "date": ""
      },
      {
        "id": "pro_ml_sample_10",
        "domain": [],
        "intro": [],
        "body": [
          "You designed a 5-billion-parameter language model in TensorFlow Keras that used autotuned tf.data to load the data in memory. You created a distributed training job in Vertex AI with tf.distribute.MirroredStrategy, and set the large_model_v100 machine for the primary instance. The training job fails with the following error:",
  
          "“The replica 0 ran out of memory with a non-zero status of 9.”",
  
          "You want to fix this error without vertically increasing the memory of the replicas. What should you do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Keep MirroredStrategy. Increase the number of attached V100 accelerators until the memory error is resolved."],
            "answer": false,
            "explanation": ["MirroredStrategy is a data-parallel approach. This approach is not expected to fix the error because the memory issues in the primary replica are caused by the size of the model itself."]
          },
          {
            "option": ["Switch to ParameterServerStrategy, and add a parameter server worker pool with large_model_v100 instance type."],
            "answer": false,
            "explanation": ["The parameter server alleviates some workload from the primary replica by coordinating the shared model state between the workers, but it still requires the whole model to be shared with workers. This approach is not expected to fix the error because the memory issues in the primary replica are caused by the size of the model itself."]
          },
          {
            "option": ["Switch to tf.distribute.MultiWorkerMirroredStrategy with Reduction Server. Increase the number of workers until the memory error is resolved."],
            "answer": false,
            "explanation": ["MultiWorkerMirroredStrategy is a data-parallel approach. This approach is not expected to fix the error because the memory issues in the primary replica are caused by the size of the model itself. Reduction Server increases throughput and reduces latency of communication, but it does not help with memory issues."]
          },
          {
            "option": ["Switch to a custom distribution strategy that uses TF_CONFIG to equally split model layers between workers. Increase the number of workers until the memory error is resolved."],
            "answer": true,
            "explanation": ["This is an example of a model-parallel approach that splits the model between workers. You can use DTensors to implement this. This approach is expected to fix the error because the memory issues in the primary replica are caused by the size of the model itself."]
          }
        ],
        "feedback": [],
        "references": [
          "https://www.tensorflow.org/guide/dtensor_overview",
          "https://www.tensorflow.org/tutorials/distribute/dtensor_ml_tutorial",
          "https://www.tensorflow.org/tutorials/distribute/dtensor_keras_tutorial"
        ],
        "date": ""
      },
      {
        "id": "pro_ml_sample_11",
        "domain": [],
        "intro": [],
        "body": [
          "You need to develop an online model prediction service that accesses pre-computed near-real-time features and returns a customer churn probability value. The features are saved in BigQuery and updated hourly using a scheduled query. You want this service to be low latency and scalable and require minimal maintenance. What should you do?"
        ],
        "open": false,
        "options": [
          {
            "option": [
              "1. Configure a Cloud Function that exports features from BigQuery to Memorystore.",
              "2. Use Memorystore to perform feature lookup. Deploy the model as a custom prediction endpoint in Vertex AI, and enable automatic scaling."
            ],
            "answer": true,
            "explanation": ["This approach creates a fully managed autoscalable service that minimizes maintenance while providing low latency with the use of Memorystore."]
          },
          {
            "option": [
              "1. Configure a Cloud Function that exports features from BigQuery to Memorystore.",
              "2. Use a custom container on Google Kubernetes Engine to deploy a service that performs feature lookup from Memorystore and performs inference with an in-memory model."
            ],
            "answer": false,
            "explanation": ["Feature lookup and model inference can be performed in Cloud Functions, and using Google Kubernetes Engine increases maintenance."]
          },
          {
            "option": [
              "1. Configure a Cloud Function that exports features from BigQuery to Vertex AI Feature Store.",
              "2. Use the online service API from Vertex AI Feature Store to perform feature lookup. Deploy the model as a custom prediction endpoint in Vertex AI, and enable automatic scaling."
            ],
            "answer": false,
            "explanation": ["Vertex AI Feature Store is not as low-latency as Memorystore."]
          },
          {
            "option": [
              "1. Configure a Cloud Function that exports features from BigQuery to Vertex AI Feature Store.",
              "2. Use a custom container on Google Kubernetes Engine to deploy a service that performs feature lookup from Vertex AI Feature Store’s online serving API and performs inference with an in-memory model."
            ],
            "answer": false,
            "explanation": ["Feature lookup and model inference can be performed in Cloud Functions, and using Google Kubernetes Engine increases maintenance. Also, Vertex AI Feature Store is not as low-latency as Memorystore."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/architecture/ml-on-gcp-best-practices#model-deployment-and-serving",
          "https://cloud.google.com/vertex-ai/docs/featurestore/overview#benefits",
          "https://cloud.google.com/memorystore/docs/redis/redis-overview"
        ],
        "date": ""
      },
      {
        "id": "pro_ml_sample_12",
        "domain": [],
        "intro": [],
        "body": [
          "You are logged into the Vertex AI Pipeline UI and noticed that an automated production TensorFlow training pipeline finished three hours earlier than a typical run. You do not have access to production data for security reasons, but you have verified that no alert was logged in any of the ML system’s monitoring systems and that the pipeline code has not been updated recently. You want to debug the pipeline as quickly as possible so you can determine whether to deploy the trained model. What should you do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Navigate to Vertex AI Pipelines, and open Vertex AI TensorBoard. Check whether the training regime and metrics converge."],
            "answer": true,
            "explanation": ["TensorBoard provides a compact and complete overview of training metrics such as loss and accuracy over time. If the training converges with the model’s expected accuracy, the model can be deployed."]
          },
          {
            "option": ["Access the Pipeline run analysis pane from Vertex AI Pipelines, and check whether the input configuration and pipeline steps have the expected values."],
            "answer": false,
            "explanation": ["Checking input configuration is a good test, but it is not sufficient to ensure that model performance is acceptable. You can access logs and outputs for each pipeline step to review model performance, but it would involve more steps than using TensorBoard."]
          },
          {
            "option": ["Determine the trained model’s location from the pipeline’s metadata in Vertex ML Metadata, and compare the trained model’s size to the previous model."],
            "answer": false,
            "explanation": ["Model size is a good indicator of health but does not provide a complete overview to make sure that the model can be safely deployed. Note that the pipeline’s metadata can also be accessed directly from Vertex AI Pipelines."]
          },
          {
            "option": ["Request access to production systems. Get the training data’s location from the pipeline’s metadata in Vertex ML Metadata, and compare data volumes of the current run to the previous run."],
            "answer": false,
            "explanation": ["Data is the most probable cause of this behavior, but it is not the only possible cause. Also, access requests could take a long time and are not the most secure option. Note that the pipeline’s metadata can also be accessed directly from Vertex AI Pipelines."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/experiments/tensorboard-overview",
          "https://cloud.google.com/vertex-ai/docs/ml-metadata/introduction",
          "https://cloud.google.com/vertex-ai/docs/pipelines/visualize-pipeline"
        ],
        "date": ""
      },
      {
        "id": "pro_ml_sample_13",
        "domain": [],
        "intro": [],
        "body": [
          "You recently developed a custom ML model that was trained in Vertex AI on a post-processed training dataset stored in BigQuery. You used a Cloud Run container to deploy the prediction service. The service performs feature lookup and pre-processing and sends a prediction request to a model endpoint in Vertex AI. You want to configure a comprehensive monitoring solution for training-serving skew that requires minimal maintenance. What should you do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Create a Model Monitoring job for the Vertex AI endpoint that uses the training data in BigQuery to perform training-serving skew detection and uses email to send alerts. When an alert is received, use the console to diagnose the issue."],
            "answer": true,
            "explanation": ["Vertex AI Model Monitoring is a fully managed solution for monitoring training-serving skew that, by definition, requires minimal maintenance. Using the console for diagnostics is recommended for a comprehensive monitoring solution because there could be multiple causes for the skew that require manual review."]
          },
          {
            "option": ["Update the model hosted in Vertex AI to enable request-response logging. Create a Data Studio dashboard that compares training data and logged data for potential training-serving skew and uses email to send a daily scheduled report."],
            "answer": false,
            "explanation": ["This solution does not minimize maintenance. It involves multiple custom components that require additional updates for any schema change."]
          },
          {
            "option": ["Create a Model Monitoring job for the Vertex AI endpoint that uses the training data in BigQuery to perform training-serving skew detection and uses Cloud Logging to send alerts. Set up a Cloud Function to initiate model retraining that is triggered when an alert is logged."],
            "answer": false,
            "explanation": ["A model retrain does not necessarily fix skew. For example, differences in pre-processing logic between training and prediction can also cause skew."]
          },
          {
            "option": ["Update the model hosted in Vertex AI to enable request-response logging. Schedule a daily DataFlow Flex job that uses Tensorflow Data Validation to detect training-serving skew and uses Cloud Logging to send alerts. Set up a Cloud Function to initiate model retraining that is triggered when an alert is logged."],
            "answer": false,
            "explanation": ["This solution does not minimize maintenance. It involves multiple components that require additional updates for any schema change. Also, a model retrain does not necessarily fix skew. For example, differences in pre-processing logic between training and prediction can also cause skew."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/architecture/ml-modeling-monitoring-automating-server-data-skew-detection-in-ai-platform-prediction",
          "https://cloud.google.com/vertex-ai/docs/model-monitoring/overview"
        ],
        "date": ""
      },
      {
        "id": "pro_ml_sample_14",
        "domain": [],
        "intro": [],
        "body": [
          "You have a historical data set of the sale price of 10,000 houses and the 10 most important features resulting from principal component analysis (PCA). You need to develop a model that predicts whether a house will sell at one of the following equally distributed price ranges: 200-300k, 300-400k, 400-500k, 500-600k, or 600-700k. You want to use the simplest algorithmic and evaluative approach. What should you do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Define a one-vs-one classification task where each price range is a categorical label. Use F1 score as the metric."],
            "answer": false,
            "explanation": ["This approach is more complex than the classification approach suggested in response B. F1 score is not useful with equally distributed labels, and one-vs-one classification is used for multi-label classification, but the use case would require only one label to be correct."]
          },
          {
            "option": ["Define a multi-class classification task where each price range is a categorical label. Use accuracy as the metric."],
            "answer": true,
            "explanation": ["The use case is an ordinal classification task which is most simply solved using multi-class classification. Accuracy as a metric is the best match for a use case with discrete and balanced labels."]
          },
          {
            "option": ["Define a regression task where the label is the sale price represented as an integer. Use mean absolute error as the metric."],
            "answer": false,
            "explanation": ["Regression is not the recommended approach when solving an ordinal classification task with a small number of discrete values. This specific regression approach adds complexity in comparison to the regression approach suggested in response D because it uses the exact sale price to predict a range. Finally, the mean absolute error would not be the recommended metric because it gives the same penalty for errors of any magnitude."]
          },
          {
            "option": ["Define a regression task where the label is the average of the price range that corresponds to the house sale price represented as an integer. Use root mean squared error as the metric."],
            "answer": false,
            "explanation": ["Regression is not the recommended approach when solving an ordinal classification task with a small number of discrete values. This specific regression approach would be recommended in comparison to the regression approach suggested in response C because it uses a less complex label and a recommended metric to minimize variance and bias."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/tabular-data/tabular101#data_preparation",
          "https://cloud.google.com/blog/products/gcp/predicting-community-engagement-on-reddit-using-tensorflow-gdelt-and-cloud-dataflow-part-2",
          "https://www.tensorflow.org/tutorials/keras/regression",
          "https://www.tensorflow.org/tutorials/keras/classification"
        ],
        "date": ""
      },
      {
        "id": "pro_ml_sample_15",
        "domain": [],
        "intro": [],
        "body": [
          "You downloaded a TensorFlow language model pre-trained on a proprietary dataset by another company, and you tuned the model with Vertex AI Training by replacing the last layer with a custom dense layer. The model achieves the expected offline accuracy; however, it exceeds the required online prediction latency by 20ms. You want to optimize the model to reduce latency while minimizing the offline performance drop before deploying the model to production. What should you do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Apply post-training quantization on the tuned model, and serve the quantized model."],
            "answer": true,
            "explanation": ["Post-training quantization is the recommended option for reducing model latency when re-training is not possible. Post-training quantization can minimally decrease model performance."]
          },
          {
            "option": ["Use quantization-aware training to tune the pre-trained model on your dataset, and serve the quantized model."],
            "answer": false,
            "explanation": ["Tuning the whole model on the custom dataset only will cause a drop in offline performance."]
          },
          {
            "option": ["Use pruning to tune the pre-trained model on your dataset, and serve the pruned model after stripping it of training variables."],
            "answer": false,
            "explanation": ["Tuning the whole model on the custom dataset only will cause a drop in offline performance. Also, pruning helps in compressing model size, but it is expected to provide less latency improvements than quantization."]
          },
          {
            "option": ["Use clustering to tune the pre-trained model on your dataset, and serve the clustered model after stripping it of training variables."],
            "answer": false,
            "explanation": ["Tuning the whole model on the custom dataset only will cause a drop in offline performance. Also, clustering helps in compressing model size, but it does not reduce latency."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/architecture/best-practices-for-ml-performance-cost",
          "https://www.tensorflow.org/lite/performance/model_optimization",
          "https://www.tensorflow.org/tutorials/images/transfer_learning"
        ],
        "date": ""
      },
      {
        "id": "pro_ml_sample_16",
        "domain": [],
        "intro": [],
        "body": [
          "You developed a model for a classification task where the minority class appears in 10% of the data set. You ran the training on the original imbalanced data set and have checked the resulting model performance. The confusion matrix indicates that the model did not learn the minority class. You want to improve the model performance while minimizing run time and keeping the predictions calibrated. What should you do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Update the weights of the classification function to penalize misclassifications of the minority class."],
            "answer": false,
            "explanation": ["This approach does not guarantee calibrated predictions and does not improve training run time."]
          },
          {
            "option": ["Tune the classification threshold, and calibrate the model with isotonic regression on the validation set."],
            "answer": false,
            "explanation": ["This approach increases run time by adding threshold tuning and calibration on top of model training."]
          },
          {
            "option": ["Upsample the minority class in the training set, and update the weight of the upsampled class by the same sampling factor."],
            "answer": false,
            "explanation": ["Upsampling increases training run time by providing more data samples during training."]
          },
          {
            "option": ["Downsample the majority class in the training set, and update the weight of the downsampled class by the same sampling factor."],
            "answer": true,
            "explanation": ["Downsampling with upweighting improves performance on the minority class while speeding up convergence and keeping the predictions calibrated."]
          }
        ],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/data-prep/construct/sampling-splitting/imbalanced-data",
          "https://colab.research.google.com/github/tensorflow/docs/blob/master/site/en/tutorials/structured_data/imbalanced_data.ipynb",
          "https://colab.research.google.com/github/stellargraph/stellargraph/blob/master/demos/calibration/calibration-node-classification.ipynb",
          "https://developers.google.com/machine-learning/glossary#calibration-layer"
        ],
        "date": ""
      },
      {
        "id": "pro_ml_sample_17",
        "domain": [],
        "intro": [],
        "body": [
          "You have a dataset that is split into training, validation, and test sets. All the sets have similar distributions. You have sub-selected the most relevant features and trained a neural network in TensorFlow. TensorBoard plots show the training loss oscillating around 0.9, with the validation loss higher than the training loss by 0.3. You want to update the training regime to maximize the convergence of both losses and reduce overfitting. What should you do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Decrease the learning rate to fix the validation loss, and increase the number of training epochs to improve the convergence of both losses."],
            "answer": false,
            "explanation": ["Changing the learning rate does not reduce overfitting. Increasing the number of training epochs is not expected to improve the losses significantly."]
          },
          {
            "option": ["Decrease the learning rate to fix the validation loss, and increase the number and dimension of the layers in the network to improve the convergence of both losses."],
            "answer": false,
            "explanation": ["Changing the learning rate does not reduce overfitting."]
          },
          {
            "option": ["Introduce L1 regularization to fix the validation loss, and increase the learning rate and the number of training epochs to improve the convergence of both losses."],
            "answer": false,
            "explanation": ["Increasing the number of training epochs is not expected to improve the losses significantly, and increasing the learning rate could also make the model training unstable. L1 regularization could be used to stabilize the learning, but it is not expected to be particularly helpful because only the most relevant features have been used for training."]
          },
          {
            "option": ["Introduce L2 regularization to fix the validation loss, and increase the number and dimension of the layers in the network to improve the convergence of both losses."],
            "answer": true,
            "explanation": ["L2 regularization prevents overfitting. Increasing the model’s complexity boosts the predictive ability of the model, which is expected to optimize loss convergence when underfitting."]
          }
        ],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/testing-debugging/common/overview",
          "https://developers.google.com/machine-learning/crash-course/regularization-for-simplicity/l2-regularization",
          "https://developers.google.com/machine-learning/crash-course/regularization-for-sparsity/l1-regularization",
          "https://cloud.google.com/bigquery/docs/preventing-overfitting",
          "https://www.tensorflow.org/tutorials/keras/overfit_and_underfit",
          "https://www.tensorflow.org/tensorboard/get_started",
          "https://cloud.google.com/architecture/guidelines-for-developing-high-quality-ml-solutions#guidelines_for_model_quality"
        ],
        "date": ""
      },
      {
        "id": "pro_ml_sample_18",
        "domain": [],
        "intro": [],
        "body": [
          "You recently used Vertex AI Prediction to deploy a custom-trained model in production. The automated re-training pipeline made available a new model version that passed all unit and infrastructure tests. You want to define a rollout strategy for the new model version that guarantees an optimal user experience with zero downtime. What should you do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Release the new model version in the same Vertex AI endpoint. Use traffic splitting in Vertex AI Prediction to route a small random subset of requests to the new version and, if the new version is successful, gradually route the remaining traffic to it."],
            "answer": false,
            "explanation": ["Canary deployments may affect user experience, even if on a small subset of users."]
          },
          {
            "option": ["Release the new model version in a new Vertex AI endpoint. Update the application to send all requests to both Vertex AI endpoints, and log the predictions from the new endpoint. If the new version is successful, route all traffic to the new application."],
            "answer": true,
            "explanation": ["Shadow deployments minimize the risk of affecting user experience while ensuring zero downtime."]
          },
          {
            "option": ["Deploy the current model version with an Istio resource in Google Kubernetes Engine, and route production traffic to it. Deploy the new model version, and use Istio to route a small random subset of traffic to it. If the new version is successful, gradually route the remaining traffic to it."],
            "answer": false,
            "explanation": ["Canary deployments may affect user experience, even if on a small subset of users. This approach is a less managed alternative to response A and could cause downtime when moving between services."]
          },
          {
            "option": ["Install Seldon Core and deploy an Istio resource in Google Kubernetes Engine. Deploy the current model version and the new model version using the multi-armed bandit algorithm in Seldon to dynamically route requests between the two versions before eventually routing all traffic over to the best-performing version."],
            "answer": false,
            "explanation": ["The multi-armed bandit approach may affect user experience, even if on a small subset of users. This approach could cause downtime when moving between services."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning#data_and_model_validation",
          "https://cloud.google.com/architecture/implementing-deployment-and-testing-strategies-on-gke",
          "https://cloud.google.com/architecture/application-deployment-and-testing-strategies#choosing_the_right_strategy",
          "https://cloud.google.com/vertex-ai/docs/general/deployment",
          "https://docs.seldon.io/projects/seldon-core/en/latest/analytics/routers.html"
        ],
        "date": ""
      },
      {
        "id": "pro_ml_sample_19",
        "domain": [],
        "intro": [],
        "body": [
          "You trained a model for sentiment analysis in TensorFlow Keras, saved it in SavedModel format, and deployed it with Vertex AI Predictions as a custom container. You selected a random sentence from the test set, and used a REST API call to send a prediction request. The service returned the error:",
  
          "“Could not find matching concrete function to call loaded from the SavedModel. Got: Tensor(\"inputs:0\", shape=(None,), dtype=string). Expected: TensorSpec(shape=(None, None), dtype=tf.int64, name='inputs')”.",
  
          "You want to update the model’s code and fix the error while following Google-recommended best practices. What should you do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Combine all preprocessing steps in a function, and call the function on the string input before requesting the model’s prediction on the processed input."],
            "answer": false,
            "explanation": ["Duplicating the preprocessing adds unnecessary dependencies between the training and serving code and could cause training-serving skew."]
          },
          {
            "option": ["Combine all preprocessing steps in a function, and update the default serving signature to accept a string input wrapped into the preprocessing function call."],
            "answer": true,
            "explanation": ["This approach efficiently updates the model while ensuring no training-serving skew."]
          },
          {
            "option": ["Create a custom layer that performs all preprocessing steps, and update the Keras model to accept a string input followed by the custom preprocessing layer."],
            "answer": false,
            "explanation": ["This approach adds unnecessary complexity. Because you update the model directly, you will need to re-train the model."]
          },
          {
            "option": ["Combine all preprocessing steps in a function, and update the Keras model to accept a string input followed by a Lambda layer wrapping the preprocessing function."],
            "answer": false,
            "explanation": ["This approach adds unnecessary complexity. Because you update the model directly, you will need to re-train the model. Note that using Lambda layers over custom layers is recommended for simple operations or quick experimentation only."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/blog/topics/developers-practitioners/add-preprocessing-functions-tensorflow-models-and-deploy-vertex-ai",
          "https://www.tensorflow.org/tutorials/customization/custom_layers",
          "https://www.tensorflow.org/api_docs/python/tf/keras/layers/Lambda",
          "https://developers.google.com/machine-learning/guides/rules-of-ml#rule_32_re-use_code_between_your_training_pipeline_and_your_serving_pipeline_whenever_possible"
        ],
        "date": ""
      },
      {
        "id": "pro_ml_sample_20",
        "domain": [],
        "intro": [],
        "body": [
          "You used Vertex AI Workbench user-managed notebooks to develop a TensorFlow model. The model pipeline accesses data from Cloud Storage, performs feature engineering and training locally, and outputs the trained model in Vertex AI Model Registry. The end-to-end pipeline takes 10 hours on the attached optimized instance type. You want to introduce model and data lineage for automated re-training runs for this pipeline only while minimizing the cost to run the pipeline. What should you do?"
        ],
        "open": false,
        "options": [
          {
            "option": [
              "1. Use the Vertex AI SDK to create an experiment for the pipeline runs, and save metadata throughout the pipeline.",
              "2. Configure a scheduled recurring execution for the notebook.",
              "3. Access data and model metadata in Vertex ML Metadata."],
            "answer": false,
            "explanation": ["A managed solution does not minimize running costs, and Vertex AI ML Metadata is more managed than Cloud Storage."]
          },
          {
            "option": [
              "1. Use the Vertex AI SDK to create an experiment, launch a custom training job in Vertex training service with the same instance type configuration as the notebook, and save metadata throughout the pipeline.",
              "2. Configure a scheduled recurring execution for the notebook.",
              "3. Access data and model metadata in Vertex ML Metadata."],
            "answer": false,
            "explanation": ["A managed solution does not minimize running costs, and this approach introduces Vertex training service with Vertex ML Metadata, which are both managed services."]
          },
          {
            "option": [
              "1. Create a Cloud Storage bucket to store metadata.",
              "2. Write a function that saves data and model metadata by using TensorFlow ML Metadata in one time-stamped subfolder per pipeline run.",
              "3. Configure a scheduled recurring execution for the notebook.",
              "4. Access data and model metadata in Cloud Storage."],
            "answer": true,
            "explanation": ["This approach minimizes running costs by being self-managed. This approach is recommended to minimize running costs only for simple use cases such as deploying one pipeline only. When optimizing for maintenance and development costs or scaling to more than one pipeline or performing experimentation, using Vertex ML Metadata and Vertex AI Pipelines are recommended"]
          },
          {
            "option": [
              "1. Refactor the pipeline code into a TensorFlow Extended (TFX) pipeline.",
              "2. Load the TFX pipeline in Vertex AI Pipelines, and configure the pipeline to use the same instance type configuration as the notebook.",
              "3. Use Cloud Scheduler to configure a recurring execution for the pipeline.",
              "4. Access data and model metadata in Vertex AI Pipelines."],
            "answer": false,
            "explanation": ["A managed solution does not minimize running costs, and this approach introduces Vertex AI Pipelines, which is a fully managed service."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/pipelines/lineage",
          "https://cloud.google.com/vertex-ai/docs/ml-metadata/tracking",
          "https://cloud.google.com/vertex-ai/pricing",
          "https://cloud.google.com/architecture/ml-on-gcp-best-practices#operationalized-training",
          "https://cloud.google.com/architecture/ml-on-gcp-best-practices#organize-your-ml-model-artifacts"
        ],
        "date": ""
      }
    ]
  },
  "gdgs": {
    "pro_ml_eng": [
      {
        "id": "pro_ml_stockholm_w1_1",
        "domain": [],
        "intro": [],
        "body": [
          "You work for a manufacturing company that owns a high-value machine which has several machine settings and multiple sensors. A history of the machine’s hourly sensor readings and known failure event data are stored in BigQuery. You need to predict if the machine will fail within the next 3 days in order to schedule maintenance before the machine fails. Which data preparation and model training steps should you take?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Data preparation: Daily max value feature engineering with DataPrep; Model training: AutoML classification with BQML"],
            "answer": false,
            "explanation": ["DataPrep is not appropriate."]
          },
          {
            "option": ["Data preparation: Daily min value feature engineering with DataPrep; Model training: Logistic regression with BQML and AUTO_CLASS_WEIGHTS set to True"],
            "answer": false,
            "explanation": ["DataPrep is not appropriate."]
          },
          {
            "option": ["Data preparation: Rolling average feature engineering with DataPrep; Model training: Logistic regression with BQML and AUTO_CLASS_WEIGHTS set to False"],
            "answer": false,
            "explanation": ["Model training does not balance class labels for unbalanced data sets"]
          },
          {
            "option": ["Data preparation: Rolling average feature engineering with DataPrep; Model training: Logistic regression with BQML and AUTO_CLASS_WEIGHTS set to True"],
            "answer": true,
            "explanation": [
              "Considering the noise and fluctuations of the data, the moving average is more appropriate than min/max to show the trend.",
              "Model training: BQML allows you to create and run machine learning models using standard SQL queries in BigQuery.",
              "The 'auto_class_weights=TRUE' option balances class labels in the training data. By default, the training data is not weighted. If the training data labels are out of balance, the model can train to predict by weighting the most popular label classes more.",
  
              "It is correct because it uses a moving average of the sensor data and balances the weights using the parameters of BQML, AUTO_CLASS_WEIGHTS."
            ]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "pro_ml_stockholm_w1_2",
        "domain": [],
        "intro": [],
        "body": [
          "You work for a large financial institution that is planning to use Dialogflow to create a chatbot for the company’s mobile app. You have reviewed old chat logs and tagged each conversation for intent based on each customer’s stated intention for contacting customer service. About 70% of customer inquiries are simple requests that are solved within 10 intents. The remaining 30% of inquiries require much longer and more complicated requests. Which intents should you automate first?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Automate a blend of the shortest and longest intents to be representative of all intents."],
            "answer": false,
            "explanation": ["You should not automate the higher value requests."]
          },
          {
            "option": ["Automate the more complicated requests first because those require more of the agents’ time."],
            "answer": false,
            "explanation": ["Live agents are better suited to handle these complicated requests."]
          },
          {
            "option": ["Automate the 10 intents that cover 70% of the requests so that live agents can handle the more complicated requests."],
            "answer": true,
            "explanation": ["It enables a machine to handle the most simple requests and gives the live agents more opportunity to handle higher value requests."]
          },
          {
            "option": ["Automate intents in places where common words such as “payment” only appear once to avoid confusing the software."],
            "answer": false,
            "explanation": ["Dialogflow can handle the same word in multiple intents."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "pro_ml_stockholm_w2_1",
        "domain": [],
        "intro": [],
        "body": [
          "You work for a maintenance company and have built and trained a deep learning model that identifies defects based on thermal images of underground electric cables. Your dataset contains 10,000 images, 100 of which contain visible defects. How should you evaluate the performance of the model on a test dataset?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Calculate the Area Under the Curve (AUC) value."],
            "answer": true,
            "explanation": ["It is scale-invariant. AUC measures how well predictions are ranked, rather than their absolute values. AUC is also classification-threshold invariant. It measures the quality of the model’s predictions irrespective of what classification threshold is chosen."]
          },
          {
            "option": ["Calculate the number of true positive results predicted by the model."],
            "answer": false,
            "explanation": ["Calculating the number of true positives without considering false positives can lead to misleading results. For instance, the model could classify nearly every image as a defect. This would result in many true positives, but the model would in fact be a very poor discriminator."]
          },
          {
            "option": ["Calculate the fraction of images predicted by the model to have a visible defect."],
            "answer": false,
            "explanation": ["Merely calculating the fraction of images that contain defects doesn’t indicate whether your model is accurate or not."]
          },
          {
            "option": ["Calculate the Cosine Similarity to compare the model’s performance on the test dataset to the model’s performance on the training dataset."],
            "answer": false,
            "explanation": ["This metric is more commonly used in distance-based models (e.g., K Nearest Neighbors). This isn’t an appropriate metric for checking the performance of an image classification model."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "pro_ml_stockholm_w2_2",
        "domain": [],
        "intro": [],
        "body": [
          "You are an ML engineer at a media company. You need to build an ML model to analyze video content frame by frame, identify objects, and alert users if there is inappropriate content. Which Google Cloud products should you use to build this project?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Pub/Sub, Cloud Functions, and Vision API"],
            "answer": false,
            "explanation": ["There is no tool for alerting and notifying."]
          },
          {
            "option": ["Pub/Sub, Cloud IoT, Dataflow, Vision API, and Cloud Logging"],
            "answer": false,
            "explanation": ["It uses Vision API for processing videos."]
          },
          {
            "option": ["Pub/Sub, Cloud Functions, Video Intelligence API, and Cloud Logging"],
            "answer": true,
            "explanation": ["Video Intelligence API can find inappropriate components and other components satisfy the requirements of real-time processing and notification."]
          },
          {
            "option": ["Pub/Sub, Cloud Functions, AutoML, and Cloud Logging"],
            "answer": false,
            "explanation": ["AutoML is for cases where you wish to customize models with Google’s model and your data."]
          }
        ],
        "feedback": [
          "- Vision API is for images not videos",
          "- They want something generic not specific content/nothing custom (if custom use AutoML)"
        ],
        "references": [
          "https://cloud.google.com/video-intelligence"
        ],
        "date": ""
      },
      {
        "id": "pro_ml_stockholm_w4_1",
        "domain": [],
        "intro": [],
        "body": [
          "You need to write a generic test to verify whether Deep Neural Network (DNN) models automatically released by your team have a sufficient number of parameters to learn the task for which they were built. What should you do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Train the model for a few iterations, and check for NaN values."],
            "answer": false,
            "explanation": ["The test does not check that the model has enough parameters to learn the task."]
          },
          {
            "option": ["Train the model for a few iterations, and verify that the loss is constant."],
            "answer": false,
            "explanation": ["The loss should decrease if you have enough parameters to learn the task."]
          },
          {
            "option": ["Train a simple linear model, and determine if the DNN model outperforms it."],
            "answer": false,
            "explanation": ["Outperforming the linear model does not guarantee that the model has enough parameters to learn tasks with non-linear data representations. The option also doesn’t quantify a metric to give an indication of how well the model performed."]
          },
          {
            "option": ["Train the model with no regularization, and verify that the loss function is close to zero."],
            "answer": true,
            "explanation": ["The test can check that the model has enough parameters to memorize the task."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "pro_ml_stockholm_w4_2",
        "domain": [],
        "intro": [],
        "body": [
          "You work for a textile manufacturer and have been asked to build a model to detect and classify fabric defects. You trained a machine learning model with high recall based on high resolution images taken at the end of the production line. You want quality control inspectors to gain trust in your model. Which technique should you use to understand the rationale of your classifier?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Use K-fold cross validation to understand how the model performs on different test datasets."],
            "answer": false,
            "explanation": ["K-fold cross validation offers no explanation on the predictions made by the model."]
          },
          {
            "option": ["Use the Integrated Gradients method to efficiently compute feature attributions for each predicted image."],
            "answer": true,
            "explanation": ["It identifies the pixel of the input image that leads to the classification of the image itself."]
          },
          {
            "option": ["Use PCA (Principal Component Analysis) to reduce the original feature set to a smaller set of easily understood features."],
            "answer": false,
            "explanation": ["PCA simplifies higher dimensional datasets but offers no added benefit to the scenario."]
          },
          {
            "option": ["Use k-means clustering to group similar images together, and calculate the Davies-Bouldin index to evaluate the separation between clusters."],
            "answer": false,
            "explanation": ["clustering images does not provide any insight into why the classification model made the predictions that it did."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "pro_ml_stockholm_w4_3",
        "domain": [],
        "intro": [],
        "body": [
          "You work for a large retailer. You want to use ML to forecast future sales leveraging 10 years of historical sales data. The historical data is stored in Cloud Storage in Avro format. You want to rapidly experiment with all the available data. How should you build and train your model for the sales forecast?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Load data into BigQuery and use the ARIMA model type on BigQuery ML."],
            "answer": true,
            "explanation": ["BigQuery ML is designed for fast and rapid experimentation and it is possible to use federated queries to read data directly from Cloud Storage. Moreover, ARIMA is considered one of the best in class for time series forecasting."]
          },
          {
            "option": ["Convert the data into CSV format and create a regression model on AutoML."],
            "answer": false,
            "explanation": ["AutoML is not ideal for fast iteration and rapid experimentation. Even if it does not require data cleanup and hyperparameter tuning, it takes at least one hour to create a model."]
          },
          {
            "option": ["Convert the data into TFRecords and create an RNN model on TensorFlow on Vertex AI Workbench."],
            "answer": false,
            "explanation": ["In order to build a custom TensorFlow model, you would still need to do data cleanup and hyperparameter tuning."]
          },
          {
            "option": ["Convert and refactor the data into CSV format and use the built-in XGBoost algorithm on Vertex AI custom training."],
            "answer": false,
            "explanation": ["Using Vertex AI custom training requires preprocessing your data in a particular CSV structure and it is not ideal for fast iteration, as training times can take a long time because it cannot be distributed on multiple machines."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "pro_ml_stockholm_w5_1",
        "domain": [],
        "intro": [],
        "body": [
          "You need to build an object detection model for a small startup company to identify if and where the company’s logo appears in an image. You were given a large repository of images, some with logos and some without. These images are not yet labelled. You need to label these pictures, and then train and deploy the model. What should you do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Use Google Cloud’s Data Labelling Service to label your data. Use AutoML Object Detection to train and deploy the model."],
            "answer": true,
            "explanation": ["This will allow you to easily create a request for a labelling task and deploy a high-performance model."]
          },
          {
            "option": ["Use Vision API to detect and identify logos in pictures and use it as a label. Use Vertex AI to build and train a convolutional neural network."],
            "answer": false,
            "explanation": ["Vision API is not guaranteed to work with any company logos, and in the statement it explicitly mentions a small startup, which will further decrease the chance of success."]
          },
          {
            "option": ["Create two folders: one where the logo appears and one where it doesn’t. Manually place images in each folder. Use Vertex AI to build and train a convolutional neural network."],
            "answer": false,
            "explanation": ["The task of manually labelling the data is time consuming and should be avoided if possible."]
          },
          {
            "option": ["Create two folders: one where the logo appears and one where it doesn’t. Manually place images in each folder. Use Vertex AI to build and train a real time object detection model."],
            "answer": false,
            "explanation": ["The task of labelling object detection data is very tedious, and real time object detection is designed detecting objects in videos rather than in images."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "pro_ml_stockholm_w5_2",
        "domain": [],
        "intro": [],
        "body": [
          "You work for a gaming company that develops and manages a popular massively multiplayer online (MMO) game. The game’s environment is open-ended, and a large number of positions and moves can be taken by a player. Your team has developed an ML model with TensorFlow that predicts the next move of each player. Edge deployment is not possible, but low-latency serving is required. How should you configure the deployment?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Use a Cloud TPU to optimize model training speed."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Use Vertex AI Endpoint with an NVIDIA GPU."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Use Vertex AI Endpoint with a high-CPU machine type to get a batch prediction for the players."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Use Vertex AI Endpoint with a high-memory machine type to get a batch prediction for the players."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "pro_ml_stockholm_w6_3",
        "domain": [],
        "intro": [],
        "body": [
          "Your team is using a TensorFlow Inception-v3 CNN model pretrained on ImageNet for an image classification prediction challenge on 10,000 images. You will use Vertex AI to perform the model training. What TensorFlow distribution strategy and Vertex AI custom training job configuration should you use to train the model and optimize for wall-clock time?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Default Strategy; Custom tier with a single master node and four v100 GPUs."],
            "answer": false,
            "explanation": ["Default Strategy does not distribute training across multiple devices."]
          },
          {
            "option": ["One Device Strategy; Custom tier with a single master node and four v100 GPUs."],
            "answer": false,
            "explanation": ["One Device Strategy does not distribute training across multiple devices."]
          },
          {
            "option": ["One Device Strategy; Custom tier with a single master node and eight v100 GPUs."],
            "answer": false,
            "explanation": ["One Device Strategy does not distribute training across multiple devices."]
          },
          {
            "option": ["MirroredStrategy; Custom tier with a single master node and four v100 GPUs."],
            "answer": true,
            "explanation": ["This is the only strategy that can perform distributed training; albeit there is only a single copy of the variables on the CPU host."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "pro_ml_stockholm_w6_8",
        "domain": [],
        "intro": [],
        "body": [
          "You work on a team where the process for deploying a model into production starts with data scientists training different versions of models in a Kubeflow pipeline. The workflow then stores the new model artifact into the corresponding Cloud Storage bucket. You need to build the next steps of the pipeline after the submitted model is ready to be tested and deployed in production on Vertex AI. How should you configure the architecture before deploying the model to production?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Deploy model in test environment -> Evaluate and test model -> Create a new Vertex AI model version"],
            "answer": true,
            "explanation": ["The model can be validated after it is deployed to the test environment, and the release version is established before the model is deployed in production."]
          },
          {
            "option": ["Validate model -> Deploy model in test environment -> Create a new Vertex AI model version"],
            "answer": false,
            "explanation": ["The model cannot be validated before being deployed to the test environment."]
          },
          {
            "option": ["Create a new Vertex AI model version -> Evaluate and test model -> Deploy model in test environment"],
            "answer": false,
            "explanation": ["The model version is being set up for the release candidate before the model is validated. Moreover, the model cannot be validated before being deployed to the test environment."]
          },
          {
            "option": ["Create a new Vertex AI model version - > Deploy model in test environment -> Validate model"],
            "answer": false,
            "explanation": ["The model version is being set up for the release candidate before the model is validated."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      }
    ]
  },
  "ml_path": {
    "gcloud_big_data_and_ml_fundamentals": [
      {
        "id": "gcloud_big_data_and_ml_fundamentals_1_1",
        "domain": [],
        "intro": [],
        "body": [
          "AutoML, Vertex AI Workbench, and TensorFlow align to which stage of the data-to-AI workflow?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Ingestion and process"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Analytics"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Storage"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Machine learning"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_1_2",
        "domain": [],
        "intro": [],
        "body": [
          "Compute Engine, Google Kubernetes Engine, App Engine, and Cloud Functions represent which type of services?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Database and storage"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Networking"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Compute"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Machine learning"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_1_3",
        "domain": [],
        "intro": [],
        "body": [
          "Which data storage class is best for storing data that needs to be accessed less than once a year, such as online backups and disaster recovery?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Standard storage"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Coldline storage"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Nearline storage"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Archive storage"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_1_4",
        "domain": [],
        "intro": [],
        "body": [
          "Which Google hardware innovation tailors architecture to meet the computation needs on a domain, such as the matrix multiplication in machine learning?"
        ],
        "open": false,
        "options": [
          {
            "option": ["CPUs (central processing units)"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["TPUs (Tensor Processing Units)"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["GPUs (graphic processing units)"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["DPUs (data processing units)"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_1_5",
        "domain": [],
        "intro": [],
        "body": [
          "Pub/Sub, Dataflow, Dataproc, and Cloud Data Fusion align to which stage of the data-to-AI workflow?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Ingestion and process"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Analytics"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Storage"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Machine learning"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_1_6",
        "domain": [],
        "intro": [],
        "body": [
          "Cloud Storage, Cloud Bigtable, Cloud SQL, Cloud Spanner, and Firestore represent which type of services?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Machine learning"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Database and storage"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Networking"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Compute"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_2_1",
        "domain": [],
        "intro": [],
        "body": [
          "Due to several data types and sources, big data often has many data dimensions. This can introduce data inconsistencies and uncertainties. Which type of challenge might this present to data engineers?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Volume"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Veracity"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Velocity"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Variety"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_2_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which Google Cloud product acts as an execution engine to process and implement data processing pipelines?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Looker"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Dataflow"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Looker Studio"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Apache Beam"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_2_3",
        "domain": [],
        "intro": [],
        "body": [
          "Select the correct streaming data workflow."
        ],
        "open": false,
        "options": [
          {
            "option": ["Visualize the data, process the data, and ingest the streaming data."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Process the data, visualize the data, and ingest the data."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Ingest the streaming data, visualize the data, and process the data."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Ingest the streaming data, process the data, and visualize the results."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_2_4",
        "domain": [],
        "intro": [],
        "body": [
          "When you build scalable and reliable pipelines, data often needs to be processed in near-real time, as soon as it reaches the system. Which type of challenge might this present to data engineers?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Volume"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Veracity"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Velocity"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Variety"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_2_5",
        "domain": [],
        "intro": [],
        "body": [
          "Which Google Cloud product is a distributed messaging service that is designed to ingest messages from multiple device streams such as gaming events, IoT devices, and application streams?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Pub/Sub"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Apache Beam"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Looker Studio"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Looker"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_3_1",
        "domain": [],
        "intro": [],
        "body": [
          "In a supervised machine learning model, what provides historical data that can be used to predict future data?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Data points"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Labels"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Features"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Examples"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_3_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which BigQuery feature leverages geography data types and standard SQL geography functions to analyze a data set?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Building machine learning models"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Ad hoc analysis"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Building business intelligence dashboards"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Geospatial analysis"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_3_3",
        "domain": [],
        "intro": [],
        "body": [
          "BigQuery is a fully managed data warehouse. What does \u201cfully managed\u201d refer to?"
        ],
        "open": false,
        "options": [
          {
            "option": ["BigQuery manages the cost for you."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["BigQuery manages the data quality for you."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["BigQuery manages the data source for you."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["BigQuery manages the underlying structure for you."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_3_4",
        "domain": [],
        "intro": [],
        "body": [
          "Which two services does BigQuery provide?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Application services and storage"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Storage and compute"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Storage and analytics"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Application services and analytics"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_3_5",
        "domain": [],
        "intro": [],
        "body": [
          "You want to use machine learning to identify whether an email is spam. Which should you use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Supervised learning, logistic regression"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Unsupervised learning, cluster analysis"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Unsupervised learning, dimensionality reduction"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Supervised learning, linear regression"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_3_6",
        "domain": [],
        "intro": [],
        "body": [
          "You want to use machine learning to group random photos into similar groups. Which should you use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Supervised learning, logistic regression"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Unsupervised learning, cluster analysis"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Unsupervised learning, dimensionality reduction"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Supervised learning, linear regression"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_3_7",
        "domain": [],
        "intro": [],
        "body": [
          "Which pattern describes source data that is moved into a BigQuery table in a single operation?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Spot load"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Batch load"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Generated data"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Streaming"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_3_8",
        "domain": [],
        "intro": [],
        "body": [
          "Data has been loaded into BigQuery, and the features have been selected and preprocessed. What should happen next when you use BigQuery ML to develop a machine learning model?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Evaluate the performance of the trained ML model."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Use the ML model to make predictions."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Classify labels to train on historical data."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Create the ML model inside BigQuery."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_4_1",
        "domain": [],
        "intro": [],
        "body": [
          "You work for a video production company and want to use machine learning to categorize event footage, but don\u2019t want to train your own ML model. Which option can help you get started?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Custom training"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Pre-built APIs"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["AutoML"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["BigQuery ML"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_4_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which Google Cloud product lets users create, deploy, and manage machine learning models in one unified platform?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Vertex AI"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["TensorFlow"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["AI Platform"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Document AI"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_4_3",
        "domain": [],
        "intro": [],
        "body": [
          "You work for a global hotel chain that has recently loaded some guest data into BigQuery. You have experience writing SQL and want to leverage machine learning to help predict guest trends for the next few months. Which option is best?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Custom training"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Pre-built APIs"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["AutoML"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["BigQuery ML"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_4_4",
        "domain": [],
        "intro": [],
        "body": [
          "Which code-based solution offered with Vertex AI gives data scientists full control over the development environment and process?"
        ],
        "open": false,
        "options": [
          {
            "option": ["AI Solutions"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Custom training"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["AI Platform"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["AutoML"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_4_5",
        "domain": [],
        "intro": [],
        "body": [
          "Your company has a lot of data, and you want to train your own machine model to see what insights ML can provide. Due to resource constraints, you require a codeless solution. Which option is best?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Custom training"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Pre-built APIs"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["AutoML"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["BigQuery ML"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_5_1",
        "domain": [],
        "intro": [],
        "body": [
          "Which stage of the machine learning workflow includes model evaluation?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Model training"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Model serving"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Data preparation"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_5_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which Vertex AI tool automates, monitors, and governs machine learning systems by orchestrating the workflow in a serverless manner?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Vertex AI console"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Vertex AI Feature Store"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Vertex AI Pipelines"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Vertex AI Workbench"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_5_3",
        "domain": [],
        "intro": [],
        "body": [
          "A hospital uses Google\u2019s machine learning technology to help pre-diagnose cancer by feeding historical patient medical data to the model. The goal is to identify as many potential cases as possible. Which metric should the model focus on?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Recall"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Confusion matrix"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Feature importance"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Precision"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_5_4",
        "domain": [],
        "intro": [],
        "body": [
          "Which stage of the machine learning workflow includes feature engineering?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Model training"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Model serving"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Data preparation"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_5_5",
        "domain": [],
        "intro": [],
        "body": [
          "A farm uses Google\u2019s machine learning technology to detect defective apples in their crop, such as those that are irregular in size or have scratches. The goal is to identify only the apples that are actually bad so that no good apples are wasted. Which metric should the model focus on?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Recall"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Confusion matrix"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Feature importance"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Precision"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "gcloud_big_data_and_ml_fundamentals_5_6",
        "domain": [],
        "intro": [],
        "body": [
          "Select the correct machine learning workflow."
        ],
        "open": false,
        "options": [
          {
            "option": ["Data preparation, model serving, model training"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Data preparation, model training, model serving"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Model serving, data preparation, model training"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Model training, data preparation, model serving"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      }
    ],
    "how_google_does_ml": [
      {
        "id": "how_google_does_ml_1_1",
        "domain": [],
        "intro": [],
        "body": [
          "What would you use to replace user input by machine learning?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Neural networks."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Labeled data."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Pre-trained models."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["All of the options."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_1_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following is not part of the ML training phase?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Evaluating the models"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Create the models"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Connecting Neural Networks"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Data management"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_1_3",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following are best practices for Data preparation?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Avoid target leakage"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Provide a time signal"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Avoid training-serving skew"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_1_4",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following refers to the type of data used in ML models?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Unlabeled data"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Flagged data"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Labeled data"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Both Labeled & Unlabeled data"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_1_5",
        "domain": [],
        "intro": [],
        "body": [
          "What\u2019s the most efficient way to transcribe speech?"
        ],
        "open": false,
        "options": [
          {
            "option": ["You can collect audio data, train it and predict with it."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Use a Dictionary website for a partial transcription, then using ML to fill in what\u2019s missing."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["You can use a speech API."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["All of the options."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_2_1",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following are facets that differentiate deep learning networks in multilayer networks?"
        ],
        "open": false,
        "options": [
          {
            "option": ["More complex ways of connecting layers"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Automatic feature extraction"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Cambrian explosion of computing power to train"],
            "answer": false,
            "explanation": ["Partially correct."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_2_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following statement is incorrect?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Machine learning performs some core and numerical tasks"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Machine learning doesn't have unit tests of its own."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["None of the options are correct."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Machine learning doesn't serve that task in a website."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_2_3",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following statement is true about ML systems?"
        ],
        "open": false,
        "options": [
          {
            "option": ["It generates a lot of value for the organization, for customers and for end users."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Almost every single one has a team of people reviewing the algorithms, reviewing their responses and doing random sub-samples and it generates a lot of value for the organization, for customers and for end users."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Almost every single one has a team of people reviewing the algorithms, reviewing their responses and doing random sub-samples."],
            "answer": false,
            "explanation": ["Partially correct."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_2_4",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following networks is used in identifying faces, objects, and traffic signs?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Convolutional Neural Networks"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Recurrent Neural Networks"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Deep Neural Networks"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_3_1",
        "domain": [],
        "intro": [],
        "body": [
          "Vertex AI is flexible. You choose your training method. _____________ lets you create a training application optimized for your targeted outcome. You have complete control over training application functionality; you can target any objective, use any algorithm, develop your own loss functions or metrics, or do any other customization."
        ],
        "open": false,
        "options": [
          {
            "option": ["Containerized training"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["AutoML"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Custom training"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Custom training and AutoML"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_3_2",
        "domain": [],
        "intro": [],
        "body": [
          "What is a managed dataset in Vertex AI?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Data loaded into Python - whether it be from Google Cloud Storage or BigQuery. This means, for example, that it can be linked to a model."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Data loaded into AutoML Tables - whether it be from Google Cloud Storage or BigQuery. This means, for example, that it can be linked to a model."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Data loaded into Vertex AI - whether it be from Google Cloud Storage or BigQuery. This means, for example, that it can be linked to a model."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Data loaded into a Pandas Dataframe - whether it be from Google Cloud Storage or BigQuery. This means, for example, that it can be linked to a model."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_3_3",
        "domain": [],
        "intro": [],
        "body": [
          "Typically, ML practitioners train models using different architectures, input data sets, hyperparameters, and hardware. What architectural type would you use for cyber-security, pattern recognition, self-driving cars, and reinforced learning?"
        ],
        "open": false,
        "options": [
          {
            "option": ["GANS or Generative Adversarial Networks"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["RNNs or Recurrent Neural Networks"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Sorting/Clustering"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["CNNs or Convolutional Neural Networks"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [
          "https://www.bmc.com/blogs/machine-learning-architecture/"
        ],
        "date": ""
      },
      {
        "id": "how_google_does_ml_3_4",
        "domain": [],
        "intro": [],
        "body": [
          "The way you deploy a TensorFlow model is different from how you deploy a PyTorch model, and even TensorFlow models might differ based on whether they were created using AutoML or by means of code. True or False: In the unified set of APIs that Vertex AI provides, you can treat all these models in the same way."
        ],
        "open": false,
        "options": [
          {
            "option": ["False"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["True"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_3_5",
        "domain": [],
        "intro": [],
        "body": [
          "Which Vertex AI service lets you access data, process data in a Dataproc cluster, train a model, share your results, and more, all without leaving the JupyterLab interface?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Models"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Datasets"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Workbench"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Pipelines"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_3_6",
        "domain": [],
        "intro": [],
        "body": [
          "Moving from experimentation to production requires packaging, deploying and monitoring your model - which can give you confidence that your model is making useful predictions in production. Monitoring measures key model performance metrics and includes:"
        ],
        "open": false,
        "options": [
          {
            "option": ["TPU drift, RNN performance, CPU outliers and data quality."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Architectural drift, TPU performance, zone outliers and RNNs."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Model drift, model performance, model outliers and data quality."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Architectural drift, TPU hyperparameter performance, zone outliers and RNNs and CNNS."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_3_7",
        "domain": [],
        "intro": [],
        "body": [
          "In Machine learning development, which phase identifies your use case?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Evaluating the Model"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Experimenting"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Prepare training Data"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Framing the problem"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_4_1",
        "domain": [],
        "intro": [],
        "body": [
          "Vertex AI Workbench provides two Jupyter notebook-based options for your data science workflow. __________________are Deep Learning VM Images instances that are heavily customizable and are therefore ideal for users who need a lot of control over their environment."
        ],
        "open": false,
        "options": [
          {
            "option": ["User-Managed notebook instances"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Managed notebook instances"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["UnManaged notebooks and User-defined notebooks"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Managed notebooks and already created notebooks"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_4_2",
        "domain": [],
        "intro": [],
        "body": [
          "Vertex AI Workbench provides two Jupyter notebook-based options for your data science workflow. __________________ are Google-managed environments with integrations and features that help you set up and work in an end-to-end notebook-based production environment."
        ],
        "open": false,
        "options": [
          {
            "option": ["Managed notebook instances"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["User Managed notebook instances"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["UnManaged notebooks and User-defined notebooks"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Managed notebooks and already created notebooks"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_4_3",
        "domain": [],
        "intro": [],
        "body": [
          "Which statement is correct regarding Vertex AI Workbench Notebooks?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Both options are pre-packaged with JupyterLab and have a pre-installed suite of deep learning packages, including support for the TensorFlow and PyTorch frameworks."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Both options support GPU accelerators and the ability to sync with a GitHub repository."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Both options are protected by Google Cloud authentication and authorization."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_4_4",
        "domain": [],
        "intro": [],
        "body": [
          "True or False. In a Vertex AI Workbench Jupyter Notebook, you can access your data without leaving the JupyterLab interface."
        ],
        "open": false,
        "options": [
          {
            "option": ["True"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["False"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_4_5",
        "domain": [],
        "intro": [],
        "body": [
          "Where can you find the Cloud Storage and Bigquery extension to browse data?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Left side-bar"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Top menu-bar"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Bottom"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["In the notebook"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_4_6",
        "domain": [],
        "intro": [],
        "body": [
          "For users who have specific networking and security needs, ______ can be the best option. You can use VPC Service Controls to set up a ______ within a service perimeter and implement other built-in networking and security features. You can also configure user-managed notebooks instances manually to satisfy some specific networking and security needs."
        ],
        "open": false,
        "options": [
          {
            "option": ["User-Managed notebook instances"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Managed notebook instances"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["UnManaged notebooks and User-defined notebooks"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Managed notebooks and already created notebooks"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_5_1",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following statements is correct for Explainable AI?"
        ],
        "open": false,
        "options": [
          {
            "option": ["It helps you better understand your model's data."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["It offers feature attributions to provide insights into why models generate predictions."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["It details the importance of one feature that a model uses as input to make predictions."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["It supports only pre-trained models based on tabular and image data."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_5_2",
        "domain": [],
        "intro": [],
        "body": [
          "Your dataset is considered small, less than 5,000 rows and around 10MB. You are not using AutoML but a Jupyter Notebook instance. Which of the following is a Best Practice for Training a model with a small dataset?"
        ],
        "open": false,
        "options": [
          {
            "option": ["For small datasets, train the model using the Vertex AI training service."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["For small datasets, train the model within the notebook instance."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["For small datasets, train the model within the notebook instance, the Vertex AI training service, and the containerized training service."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["For small datasets, train the model within the notebook instance and use the Vertex AI training service."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_5_3",
        "domain": [],
        "intro": [],
        "body": [
          "True or False: Use BigQuery to process tabular data and use Dataflow to process unstructured data."
        ],
        "open": false,
        "options": [
          {
            "option": ["False"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["True"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_5_4",
        "domain": [],
        "intro": [],
        "body": [
          "The data used to train a model can originate from any number of systems, for example, logs from an online service system, images from a local device, or documents scraped from the web. Which of the following is a Best Practice for Preparing and Storing unstructured data such as images, audio, and video?"
        ],
        "open": false,
        "options": [
          {
            "option": ["In BigQuery"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["In Cloud storage"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["In Cloud SQL"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["In BigTable"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_6_1",
        "domain": [],
        "intro": [],
        "body": [
          "Which approach is followed to achieve a better performance across subgroups?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Evaluation metrics"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Equality of opportunity"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Confusion matrix"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_6_2",
        "domain": [],
        "intro": [],
        "body": [
          "Human biases lead to bias in machine learning models. Unconscious biases exist in our data and exist in two forms. What are the two forms of unconscious biases in data?"
        ],
        "open": false,
        "options": [
          {
            "option": ["There are the human biases that exist in data because data found in \u201cdata silos\u201d has existing biases with regard to properties like gender, race, and sexual orientation. We can also run into human biases which arise as part of our data collection and labeling procedures."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["All of the options."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["There are the human biases that exist in data because data found in \u201cthe world\u201d has existing biases with regard to properties like gender, race, and sexual orientation. For example, there may be reporting bias by our subjects because they only choose to reveal certain aspects about themselves or their opinions. We can also run into human biases which arise as part of our data collection and labeling procedures."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["First, there is human bias as a result of reporting, data collection, and labeling. Second, there is human bias as a result of data visualization and analysis."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_6_3",
        "domain": [],
        "intro": [],
        "body": [
          "One of the key tools to help in understanding inclusion and how to introduce inclusion across different kinds of groups across your data is by understanding the __________________________."
        ],
        "open": false,
        "options": [
          {
            "option": ["Evaluation regression matrix"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Equality of opportunity matrix"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Confusion matrix"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Sigmoid matrix"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_6_4",
        "domain": [],
        "intro": [],
        "body": [
          "The confusion matrix helps which of the following?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Evaluating performance in machine learning"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Understanding inclusion and how to introduce inclusion across different subgroups within your data"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Both of the options are correct."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_6_5",
        "domain": [],
        "intro": [],
        "body": [
          "Datasets can contain hundreds of millions of data points, each consisting of hundreds (or even thousands) of features, making it nearly impossible to understand an entire dataset in an intuitive fashion. The key here is to utilize visualizations that help unlock nuances and insights in large datasets. Which tool would be most appropriate?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Firebase"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Pandas"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["SQL"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Facets"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_6_6",
        "domain": [],
        "intro": [],
        "body": [
          "The impact of biases in collecting data and labeling data affects the entire machine learning pipeline. The biases in the original data are going to be reflected downstream in our models and consequently are going to result in potentially biased outcomes. You need to create a checklist for situations where you should watch out for bias-related issues. What questions should this checklist include?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Does your use case or product use data that is likely to be highly correlated with any personal characteristics (for example, zip code or other geospatial data is often correlated with socioeconomic status and/or income; image/video data can reveal information about race, gender, and age)?"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Does your use case or product specifically use any of the following data: biometrics, race, skin color, religion, sexual orientation, socioeconomic status, income, country, location, health, language, or dialect?"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Could your use case or product negatively affect individuals\u2019 economic or other important life opportunities?"],
            "answer": false,
            "explanation": ["Partially correct."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_6_7",
        "domain": [],
        "intro": [],
        "body": [
          "What is it called when the label says something doesn't exist, but the model says it exists?"
        ],
        "open": false,
        "options": [
          {
            "option": ["False positive"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["False negative"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["True positive"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "how_google_does_ml_6_8",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following is an example of a \u201cfalse negative\u201d?"
        ],
        "open": false,
        "options": [
          {
            "option": ["When the label says something exists and the model doesn\u2019t predict it\u2014that\u2019s a false negative. So, in the face detection example in this lesson, the model says that there is no face in the image\u2014when the image\u2019s label says there *is* a face."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["The label says there is no face, and the model finds no face."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["The label says there is no face, but the model finds a face. Perhaps there is a statue in the image and the model falsely identifies it as a face."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["The label says there is a face, and the model finds a face."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      }
    ],
    "launching_into_ml": [
      {
        "id": "launching_into_ml_1_1",
        "domain": [],
        "intro": [],
        "body": [
          "What are the features of low data quality?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Duplicated data"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Unreliable info"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Incomplete data"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_1_2",
        "domain": [],
        "intro": [],
        "body": [
          "Exploratory Data Analysis is majorly performed using the following methods:"
        ],
        "open": false,
        "options": [
          {
            "option": ["Both Univariate and Bivariate"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Univariate"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Bivariate"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["None of the options"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_1_3",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following is not a component of Exploratory Data Analysis?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Statistical Analysis and Clustering"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Accounting and Summarizing"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Anomaly Detection"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Hyperparameter tuning"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_1_4",
        "domain": [],
        "intro": [],
        "body": [
          "What are the objectives of exploratory data analysis?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Uncover a parsimonious model, one which explains the data with a minimum number of predictor variables."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Check for missing data and other mistakes."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Gain maximum insight into the data set and its underlying structure."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_1_5",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following are categories of data quality tools?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Both \u2018Cleaning tools\u2019 and \u2018Monitoring tools\u2019"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Cleaning tools"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Monitoring tools"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["None of the options"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_2_1",
        "domain": [],
        "intro": [],
        "body": [
          "Why is regularization important in logistic regression?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Finds errors in the algorithm"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Avoids overfitting"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Keeps training time down by regulating the time allowed"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Encourages the use of large weights"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_2_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which model would you use if your problem required a discrete number of values or classes?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Supervised Model"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Regression Model"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Unsupervised Model"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Classification Model"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_2_3",
        "domain": [],
        "intro": [],
        "body": [
          "What is the most essential metric a regression model uses?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Both \u2018Mean squared error as their loss function\u2019 & \u2018Cross entropy\u2019"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Mean squared error as their loss function"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Cross entropy"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["None of the options"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_2_4",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following machine learning models have labels, or in other words, the correct answers to whatever it is that we want to learn to predict?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Reinforcement Model"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Unsupervised Model"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Supervised Model"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["None of the options"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_2_5",
        "domain": [],
        "intro": [],
        "body": [
          "To predict the continuous value of our label, which of the following algorithms is used?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Unsupervised"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Classification"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Regression"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["None of the options"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_3_1",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following are stages of the Machine Learning workflow that can be managed with Vertex AI?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Train an ML model on your data."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Create a dataset and upload data."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Deploy your trained model to an endpoint for serving predictions."],
            "answer": false,
            "explanation": ["Partially correct."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_3_2",
        "domain": [],
        "intro": [],
        "body": [
          "What is the main benefit of using an automated Machine Learning workflow?"
        ],
        "open": false,
        "options": [
          {
            "option": ["It makes the model run faster."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["It makes the model perform better."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["It reduces the time it takes to develop trained models and assess their performance."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["It deploys the model into production."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_3_3",
        "domain": [],
        "intro": [],
        "body": [
          "What does the Feature Importance attribution in Vertex AI display?"
        ],
        "open": false,
        "options": [
          {
            "option": ["How much each feature impacts the model, expressed as a ratio"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["How much each feature impacts the model, expressed as a percentage"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["How much each feature impacts the model, expressed as a decimal"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["How much each feature impacts the model, expressed as a ranked list"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_3_4",
        "domain": [],
        "intro": [],
        "body": [
          "MAE, MAPE, RMSE, RMSLE and R2 are all available as test examples in the Evaluate section of Vertex AI and are common examples of what type of metric?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Linear Regression Metrics"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Forecasting Regression Metrics"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Decision Trees Progression Metrics"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Clustering Regression Metrics"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_3_5",
        "domain": [],
        "intro": [],
        "body": [
          "For a user who can use SQL, has little Machine Learning experience and wants a \u2018Low-Code\u2019 solution, which Machine Learning framework should they use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["BigQuery ML"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Scikit-Learn"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Python"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["AutoML"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_3_6",
        "domain": [],
        "intro": [],
        "body": [
          "If the business case is to predict fraud detection, which is the correct Objective to choose in Vertex AI?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Forecasting"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Clustering"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Segmentation"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Regression/Classification"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_3_7",
        "domain": [],
        "intro": [],
        "body": [
          "What is the default setting in AutoML Tables for the data split in model evaluation?"
        ],
        "open": false,
        "options": [
          {
            "option": ["80% Training, 15% Validation, 5% Testing"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["70% Training, 20% Validation, 10% Testing"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["80% Training 10% Validation, 10% Testing"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["80% Training, 5% Validation, 15% Testing"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_3_8",
        "domain": [],
        "intro": [],
        "body": [
          "If a dataset is presented in a Comma Separated Values (CSV) file, which is the correct data type to choose in Vertex AI?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Tabular"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Image"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Video"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Text"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_3_9",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following metrics can be used to find a suitable balance between precision and recall in a model?"
        ],
        "open": false,
        "options": [
          {
            "option": ["ROC AUC"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["PR AUC"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["F1 Score"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Log Loss"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_4_1",
        "domain": [],
        "intro": [],
        "body": [
          "For Classification or Regression problems with decision trees, which of the following models is most relevant?"
        ],
        "open": false,
        "options": [
          {
            "option": ["XGBoost"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["AutoML Tables"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Wide and Deep NNs"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Linear Regression"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_4_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which of these BigQuery supported classification models is most relevant for predicting binary results, such as True/False?"
        ],
        "open": false,
        "options": [
          {
            "option": ["DNN Classifier (TensorFlow)"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["AutoML Tables"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["XGBoost"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Logistic Regression"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_4_3",
        "domain": [],
        "intro": [],
        "body": [
          "What are the 3 key steps for creating a Recommendation System with BigQuery ML?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Prepare training data in BigQuery, specify the model options in BigQuery ML, export the predictions to Google Analytics"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Import training data to BigQuery, train a recommendation system with BigQuery ML, tune the hyperparameters"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Prepare training data in BigQuery, train a recommendation system with BigQuery ML, use the predicted recommendations in production"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Prepare training data in BigQuery, select a recommendation system from BigQuery ML, deploy and test the model"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_4_4",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following are advantages of BigQuery ML when compared to Python based ML frameworks?"
        ],
        "open": false,
        "options": [
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["BigQuery ML automates multiple steps in the ML workflow"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["BigQuery ML custom models can be created without the use of multiple tools"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Moving and formatting large amounts of data takes longer with Python based models compared to model training in BigQuery"],
            "answer": false,
            "explanation": ["Partially correct."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_4_5",
        "domain": [],
        "intro": [],
        "body": [
          "Where labels are not available, for example where customer segmentation is required, which of the following BigQuery supported models is useful?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Time Series Anomaly Detection"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Recommendation - Matrix Factorization"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Time Series Forecasting"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["K-Means Clustering"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_5_1",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following loss functions is used for classification problems?"
        ],
        "open": false,
        "options": [
          {
            "option": ["MSE"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Both MSE & Cross entropy"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Cross entropy"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_5_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following gradient descent methods is used to compute the entire dataset?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Batch gradient descent"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Mini-batch gradient descent"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Gradient descent"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_5_3",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following are benefits of Performance metrics over loss functions?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Performance metrics are easier to understand."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Performance metrics are easier to understand and are directly connected to business goals."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Performance metrics are directly connected to business goals."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_5_4",
        "domain": [],
        "intro": [],
        "body": [
          "For the formula used to model the relationship i.e. y = mx + b, what does \u2018m\u2019 stand for?"
        ],
        "open": false,
        "options": [
          {
            "option": ["It captures the amount of change we've observed in our label in response to a small change in our feature."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["It refers to a bias term which can be used for regression and it captures the amount of change we've observed in our label in response to a small change in our feature."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["It refers to a bias term which can be used for regression."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_5_5",
        "domain": [],
        "intro": [],
        "body": [
          "What are the basic steps in an ML workflow (or process)?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Collect data"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Perform statistical analysis and initial visualization"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Check for anomalies, missing data and clean the data"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_6_1",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following allows you to split the dataset based upon a field in your data?"
        ],
        "open": false,
        "options": [
          {
            "option": ["FARM_FINGERPRINT, an open-source hashing algorithm that is implemented in BigQuery SQL."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["BUCKETIZE, an open-source hashing algorithm that is implemented in BigQuery SQL."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["ML_FEATURE FINGERPRINT, an open-source hashing algorithm that is implemented in BigQuery SQL."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_6_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following actions can you perform on your model when it is trained and validated?"
        ],
        "open": false,
        "options": [
          {
            "option": ["You can write it once, and only once, against the independent test dataset."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["You can write it once, and only once against the dependent test dataset."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["You can write it multiple times against the independent test dataset."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["You can write it multiple times against the dependent test dataset."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_6_3",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following allows you to create repeatable samples of your data?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Use the last few digits of a hash function on the field that you're using to split or bucketize your data."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Use the first few digits of a hash function on the field that you're using to split or bucketize your data."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Use the first few digits or the last few digits of a hash function on the field that you're using to split or bucketize your data."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_6_4",
        "domain": [],
        "intro": [],
        "body": [
          "How do you decide when to stop training a model?"
        ],
        "open": false,
        "options": [
          {
            "option": ["When your loss metrics start to increase"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["When your loss metrics start to decrease"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["When your loss metrics start to both increase and decrease"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["None of the options are correct"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "launching_into_ml_6_5",
        "domain": [],
        "intro": [],
        "body": [
          "Which is the best way to assess the quality of a model?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Observing how well a model performs against a new dataset that it hasn't seen before."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Observing how well a model performs against an existing known dataset."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Observing how well a model performs against a new dataset that it hasn't seen before and observing how well a model performs against an existing known dataset."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      }
    ],
    "tf_on_gcloud": [
      {
        "id": "tf_on_gcloud_1_1",
        "domain": [],
        "intro": [],
        "body": [
          "How does TensorFlow represent numeric computations?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Using a Directed Acyclic Graph (or DAG)"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["None of the options are correct"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Both Using a Directed Acyclic Graph (or DAG) and Flow chart"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Flow chart"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_1_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which are useful components when building custom Neural Network models?"
        ],
        "open": false,
        "options": [
          {
            "option": ["tf.losses"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["tf.optimizers"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["tf.metrics"],
            "answer": false,
            "explanation": ["Partially correct."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_1_3",
        "domain": [],
        "intro": [],
        "body": [
          "Which API is used to build performant, complex input pipelines from simple, re-usable pieces that will feed your model's training or evaluation loops."
        ],
        "open": false,
        "options": [
          {
            "option": ["tf.Tensor"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["All of the options."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["tf.device"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["tf.data.Dataset"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_1_4",
        "domain": [],
        "intro": [],
        "body": [
          "What operations can be performed on tensors?"
        ],
        "open": false,
        "options": [
          {
            "option": ["They can be reshaped"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["They can be both reshaped and sliced"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["They can be sliced"],
            "answer": false,
            "explanation": ["Partially correct."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_1_5",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following is true when we compute a loss gradient?"
        ],
        "open": false,
        "options": [
          {
            "option": ["TensorFlow records all operations executed inside the context of a tf.GradientTape onto a tape."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["The computed gradient of a recorded computation will be used in reverse mode differentiation."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["It uses tape and the gradients associated with each recorded operation to compute the gradients."],
            "answer": false,
            "explanation": ["Partially correct."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_1_6",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following statements is true of TensorFlow?"
        ],
        "open": false,
        "options": [
          {
            "option": ["TensorFlow is a scalable and single-platform programming interface for implementing and running machine learning algorithms, including convenience wrappers for deep learning."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["TensorFlow is a scalable and multi platform programming interface for implementing and running machine learning algorithms, including convenience wrappers for deep learning."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Although able to run on other processing platforms, TensorFlow 2.0 is not yet able to run on Graphical Processing Units (or GPU's)."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Although able to run on other processing platforms, TensorFlow 2.0 is not yet able to run on Tensor Processing Units (or TPU's)."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_2_1",
        "domain": [],
        "intro": [],
        "body": [
          "What are distinct ways to create a dataset?"
        ],
        "open": false,
        "options": [
          {
            "option": ["A data transformation constructs a dataset from one or more tf.data.Dataset objects."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["A data source constructs a Dataset from data stored in memory or in one or more files and a data transformation constructs a dataset from one or more tf.data.Dataset objects."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["A data source constructs a Dataset from data stored in memory or in one or more files."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_2_2",
        "domain": [],
        "intro": [],
        "body": [
          "What is the use of tf.keras.layers.TextVectorization?"
        ],
        "open": false,
        "options": [
          {
            "option": ["It turns continuous numerical features into bucket data with discrete ranges."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["It turns raw strings into an encoded representation that can be read by an Embedding layer or Dense layer."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["It performs feature-wise normalization of input features."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["It turns string categorical values into encoded representations that can be read by an Embedding layer or Dense layer."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_2_3",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following is true about embedding?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Embedding is a handy adapter that allows a network to incorporate spores or categorical data."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["The number of embeddings is the hyperparameter to your machine learning model."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["An embedding is a weighted sum of the feature crossed values."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_2_4",
        "domain": [],
        "intro": [],
        "body": [
          "Which is true regarding feature columns?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Feature columns describe how the model should use raw output data from your TPU's."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Feature columns describe how the model should use raw input data from your features dictionary."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Feature columns describe how the model should use raw output data from your features dictionary."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Feature columns describe how the model should use a graph to plot a line."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_2_5",
        "domain": [],
        "intro": [],
        "body": [
          "When should you avoid using the Keras function adapt()?"
        ],
        "open": false,
        "options": [
          {
            "option": ["When using TextVectorization while training on a TPU pod"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["When using StringLookup while training on multiple machines via ParameterServerStrategy"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["When working with lookup layers with very large vocabularies"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["When working with lookup layers with very small vocabularies"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_2_6",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following is a part of Keras preprocessing layers?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Image preprocessing"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Numerical features preprocessing"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Image data augmentation"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_2_7",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following layers is non-trainable?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Hashing"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Normalization"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Discretization"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["StringLookup"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [
          "The original question confused adaptable layers with trainable layers.",
          "\"All of the options are correct.\" option was added."
        ],
        "references": [
          "https://www.tensorflow.org/guide/keras/preprocessing_layers#the_adapt_method"
        ],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_2_8",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following is not a part of Categorical features preprocessing?"
        ],
        "open": false,
        "options": [
          {
            "option": ["tf.keras.layers.Hashing"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["tf.keras.layers.IntegerLookup"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["tf.keras.layers.CategoryEncoding"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["tf.keras.layers.Discretization"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [
          "https://www.tensorflow.org/guide/keras/preprocessing_layers#categorical_features_preprocessing"
        ],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_3_1",
        "domain": [],
        "intro": [],
        "body": [
          "Select the correct statement regarding the Keras Functional API."
        ],
        "open": false,
        "options": [
          {
            "option": ["The Keras Functional API does not provide a more flexible way for defining models."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Unlike the Keras Sequential API, we do not have to provide the shape of the input to the model."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Unlike the Keras Sequential API, we have to provide the shape of the input to the model."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_3_2",
        "domain": [],
        "intro": [],
        "body": [
          "The Keras Functional API can be characterized by having:"
        ],
        "open": false,
        "options": [
          {
            "option": ["Multiple inputs and outputs and models with non-shared layers."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Multiple inputs and outputs and models with shared layers."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Single inputs and outputs and models with shared layers."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_3_3",
        "domain": [],
        "intro": [],
        "body": [
          "What is the significance of the Fit method while training a Keras model?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Defines the validation steps"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Defines the number of steps per epochs"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Defines the number of epochs"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Defines the batch size"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_3_4",
        "domain": [],
        "intro": [],
        "body": [
          "The predict function in the tf.keras API returns what?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Both numpy array(s) of predictions & input_samples of predictions"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Numpy array(s) of predictions"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Input_samples of predictions"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_3_5",
        "domain": [],
        "intro": [],
        "body": [
          "During the training process, each additional layer in your network can successively reduce signal vs. noise. How can we fix this?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Use sigmoid or tanh activation functions."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Use non-saturating, linear activation functions."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Use non-saturating, nonlinear activation functions such as ReLUs."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_3_6",
        "domain": [],
        "intro": [],
        "body": [
          "Non-linearity helps in training your model at a much faster rate and with more accuracy without the loss of your important information?"
        ],
        "open": false,
        "options": [
          {
            "option": ["True"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["False"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_3_7",
        "domain": [],
        "intro": [],
        "body": [
          "How does Adam (optimization algorithm) help in compiling the Keras model?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Both by updating network weights iteratively based on training data by diagonal rescaling of the gradients"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["By updating network weights iteratively based on training data"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["By diagonal rescaling of the gradients"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_3_8",
        "domain": [],
        "intro": [],
        "body": [
          "How does regularization help build generalizable models ?"
        ],
        "open": false,
        "options": [
          {
            "option": ["By adding dropout layers to our neural networks and by using image processing APIS to find out accuracy"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["By adding dropout layers to our neural networks"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["By using image processing APIS to find out accuracy"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_3_9",
        "domain": [],
        "intro": [],
        "body": [
          "The L2 regularization provides which of the following?"
        ],
        "open": false,
        "options": [
          {
            "option": ["It adds a sum of the squared parameter weights term to the loss function."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["It subtracts a sum of the squared parameter weights term to the loss function."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["It multiplies a sum of the squared parameter weights term to the loss function."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_4_1",
        "domain": [],
        "intro": [],
        "body": [
          "When sending training jobs to Vertex AI, it is common to split most of the logic into a _________ and a ___________ file."
        ],
        "open": false,
        "options": [
          {
            "option": ["task.py, model.py"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["task.xml, model.xml"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["task.json, model.json"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["task.avro, model.avro"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_4_2",
        "domain": [],
        "intro": [],
        "body": [
          "When you package up a TensorFlow model as a Python Package, what statement should every Python module contain in every folder?"
        ],
        "open": false,
        "options": [
          {
            "option": ["model.py"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["an __init__.py"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["tmodel.json"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["tmodel.avro"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/training/create-python-pre-built-container"
        ],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_4_3",
        "domain": [],
        "intro": [],
        "body": [
          "To make your code compatible with Vertex AI, there are three basic steps that must be completed in a specific order. Choose the answer that best describes those steps."
        ],
        "open": false,
        "options": [
          {
            "option": ["First, upload data to Google Cloud Storage. Then submit your training job with gcloud to train on Vertex AI. Next, move code into a trainer Python package."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["First, move code into a trainer Python package. Next, upload data to Google Cloud Storage. Then submit your training job with gcloud to train on Vertex AI."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["First, download data from Google Cloud Storage. Then submit your training job with gcloud to train on Vertex AI. Next, move code into a trainer Python package."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["First, upload data to Google Cloud Storage. Next, move code into a trainer Python package. Then submit your training job with gcloud to train on Vertex AI."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_4_4",
        "domain": [],
        "intro": [],
        "body": [
          "You can use either pre-built containers or custom containers to run training jobs. Both containers require you specify settings that Vertex AI needs to run your training code, including __________, ____________, and ________."
        ],
        "open": false,
        "options": [
          {
            "option": ["Source distribution name, job name, worker pool"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Cloud storage bucket name, display-name, worker-pool-spec"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Region, source distribution, custom URI"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Region, display-name, worker-pool-spec"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "tf_on_gcloud_4_5",
        "domain": [],
        "intro": [],
        "body": [
          "Which file is the entry point to your code that Vertex AI will start and contains details such as \u201chow to parse command-line arguments and where to write model outputs?"
        ],
        "open": false,
        "options": [
          {
            "option": ["model.py"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["task.py"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["tmodel.json"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["tmodel.avro"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      }
    ],
    "feature_engineering": [
      {
        "id": "feature_engineering_1_1",
        "domain": [],
        "intro": [],
        "body": [
          "Where are the features registered?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Feature registry"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Online Store"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Feature Monitoring"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Offline Store"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_1_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following is an instance of an entity type?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Feature"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Online Store"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Featurestore"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Entity"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_1_3",
        "domain": [],
        "intro": [],
        "body": [
          "What is one definition of a feature in machine learning?"
        ],
        "open": false,
        "options": [
          {
            "option": ["A value that you receive from a model as an output"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["A method of feature store"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["A place to store any data"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["A value that is passed as input to a model"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_1_4",
        "domain": [],
        "intro": [],
        "body": [
          "Vertex AI Feature Store provides a centralized repository for organizing, storing, and serving ML features. Using a central featurestore, enables an organization to efficiently share, discover, and re-use ML features at scale, which can increase the velocity of developing and deploying new ML applications. What are the key challenges that Vertex AI Feature Store solves?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Mitigate data storage silos, which occurs when you might have built and managed separate solutions for storage and the consumption of feature values."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Detect drift, as a result of significant changes to your feature data distribution over time."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Mitigate training-serving skew, which occurs when the feature data distribution that you use in production differs from the feature data distribution that was used to train your model."],
            "answer": false,
            "explanation": ["Partially correct."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_1_5",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following is the process of importing feature values computed by your feature engineering jobs into a featurestore?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Feature store"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Feature Monitoring"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Feature ingestion"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Feature serving"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_1_6",
        "domain": [],
        "intro": [],
        "body": [
          "What are the two methods feature store offers for serving features?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Online serving and Offline serving"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Batch serving and Online serving"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Batch serving and Stream serving"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Offline serving and Stream serving"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_2_1",
        "domain": [],
        "intro": [],
        "body": [
          "In what form can raw data be used inside ML models?"
        ],
        "open": false,
        "options": [
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["After turning your raw data into a useful feature matrix"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["After turning your raw data into a useful feature vectors"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["After turning your raw data into multidimensional vectors"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_2_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following statements is true about preprocessing?"
        ],
        "open": false,
        "options": [
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Preprocessing without the context of Cloud ML allows you to do it at scale."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Preprocessing within the context of Cloud ML allows you to do it at scale."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Both options are correct."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_2_3",
        "domain": [],
        "intro": [],
        "body": [
          "A good feature has which of the following characteristics?"
        ],
        "open": false,
        "options": [
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["It should be known at prediction time."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["It should be related to the objective."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["It should be numeric with meaningful magnitude."],
            "answer": false,
            "explanation": ["Partially correct."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_2_4",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following are the requirements to build an effective machine learning model?"
        ],
        "open": false,
        "options": [
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["It should find good features."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["It should scale to a large dataset."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["It should be able to preprocess with Vertex AI Platform."],
            "answer": false,
            "explanation": ["Partially correct."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_2_5",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following statements is true?"
        ],
        "open": false,
        "options": [
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Different problems in the same domain may need different features."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Same problems in the same domain may need different features."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Different problems in different domains may need the same features."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_3_1",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following statements are true regarding the ML.BUCKETIZE function?"
        ],
        "open": false,
        "options": [
          {
            "option": ["ML.BUCKETIZE is a pre-processing function that creates buckets by returning a STRING as the bucket name after numerical_expression is split into buckets by array_split_points.."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Both options are correct."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["It bucketizes a continuous numerical feature into a string feature with bucket names as the value."],
            "answer": false,
            "explanation": ["Partially correct."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_3_2",
        "domain": [],
        "intro": [],
        "body": [
          "True or False: <br> Feature Engineering is often one of the most valuable tasks a data scientist can do to improve model performance, for three main reasons: <br> 1. You can isolate and highlight key information, which helps your algorithms \"focus\" on what\u2019s important. <br> 2. You can bring in your own <strong>domain expertise</strong>. <br> 3. Once you understand the \"vocabulary\" of feature engineering, you can bring in other people\u2019s domain expertise."
        ],
        "open": false,
        "options": [
          {
            "option": ["True"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["False"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_3_3",
        "domain": [],
        "intro": [],
        "body": [
          "What is one-hot encoding?"
        ],
        "open": false,
        "options": [
          {
            "option": ["One-hot encoding is a process by which categorical variables are converted into a form that could be provided to neural networks to do a better job in prediction."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["One-hot encoding is a process by which only the hottest numeric variable is retained for use by the neural network."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["One-hot encoding is a process by which numeric variables are converted into a categorical form that could be provided to neural networks to do a better job in prediction."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["One-hot encoding is a process by which numeric variables are converted into a form that could be provided to neural networks to do a better job in prediction."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_3_4",
        "domain": [],
        "intro": [],
        "body": [
          "What is a feature cross?"
        ],
        "open": false,
        "options": [
          {
            "option": ["A feature cross is a synthetic feature formed by adding (crossing) two or more features. Crossing combinations of features can provide predictive abilities beyond what those features can provide individually."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["A feature cross is a synthetic feature formed by dividing (crossing) two or more features. Crossing combinations of features can provide predictive abilities beyond what those features can provide individually."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["A feature cross is a synthetic feature formed by multiplying (crossing) two or more features. Crossing combinations of features can provide predictive abilities beyond what those features can provide individually."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_3_5",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following is true about Feature Cross?"
        ],
        "open": false,
        "options": [
          {
            "option": ["It is a process of combining features into a single feature."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Both options are correct."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Feature Cross enables a model to learn separate weights for each combination of features."],
            "answer": false,
            "explanation": ["Partially correct."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_3_6",
        "domain": [],
        "intro": [],
        "body": [
          "What do you use the tf.keras.layers.Discretization function for?"
        ],
        "open": false,
        "options": [
          {
            "option": ["To compute the hash buckets needed to one-hot encode categorical values"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["To discretize floating point values into a smaller number of categorical bins"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["To count the number of unique buckets the input values falls into"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_3_7",
        "domain": [],
        "intro": [],
        "body": [
          "What is the significance of ML.FEATURE_CROSS?"
        ],
        "open": false,
        "options": [
          {
            "option": ["ML.FEATURE_CROSS generates a STRUCT feature with all combinations of crossed categorical features except for 1-degree items."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["ML.FEATURE_CROSS generates a STRUCT feature with all combinations of crossed categorical features including 1-degree items."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["ML.FEATURE_CROSS generates a STRUCT feature with few combinations of crossed categorical features except for 1-degree items."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_3_8",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following statements are true regarding the ML.EVALUATE function?"
        ],
        "open": false,
        "options": [
          {
            "option": ["The ML.EVALUATE function can be used with linear regression, logistic regression, k-means, matrix factorization, and ARIMA-based time series models."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["You can use the ML.EVALUATE function to evaluate model metrics."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["The ML.EVALUATE function evaluates the predicted values against the actual data."],
            "answer": false,
            "explanation": ["Partially correct."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_4_1",
        "domain": [],
        "intro": [],
        "body": [
          "True or False: <br> A ParDo acts on all items at once (like a Map in MapReduce)."
        ],
        "open": false,
        "options": [
          {
            "option": ["True"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["False. A ParDo acts on one item at a time (like a Map in MapReduce)"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_4_2",
        "domain": [],
        "intro": [],
        "body": [
          "To run a pipeline you need something called a ______________."
        ],
        "open": false,
        "options": [
          {
            "option": ["pipeline"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["runner"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Apache Beam"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["executor"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_4_3",
        "domain": [],
        "intro": [],
        "body": [
          "What is the purpose of a Cloud Dataflow connector? <strong>.apply(TextIO.write().to(\u201cgs://\u2026\u201d));</strong>"
        ],
        "open": false,
        "options": [
          {
            "option": ["Connectors allow you to authenticate your pipeline as specific users who may have greater access to datasets."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Connectors allow you to output the results of a pipeline to a specific data sink like Bigtable, Google Cloud Storage, flat file, BigQuery, and more."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Connectors allow you to chain multiple data-processing steps together automatically so they process in parallel."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_4_4",
        "domain": [],
        "intro": [],
        "body": [
          "Which of these accurately describes the relationship between Apache Beam and Cloud Dataflow?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Cloud Dataflow is the proprietary version of the Apache Beam API and the two are not compatible."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Cloud Dataflow is the API for data pipeline building in java or python and Apache Beam is the implementation and execution framework."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["They are the same."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_4_5",
        "domain": [],
        "intro": [],
        "body": [
          "True or False: <br> The Filter method can be carried out in parallel and autoscaled by the execution framework: <br> <img src=\"https://cdn.qwiklabs.com/tdbwGpro8kEkyktN5xcKaRAuBLvobRVzfXMbD2Eurrc%3D\">"
        ],
        "open": false,
        "options": [
          {
            "option": ["True: Anything in Map or FlatMap can be parallelized by the Beam execution framework."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["False: Anything in Map or FlatMap can be parallelized by the Beam execution framework."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_4_6",
        "domain": [],
        "intro": [],
        "body": [
          "Your development team is about to execute this code block. What is your team about to do? <br> <img src=\"https://cdn.qwiklabs.com/JO8HBQJzlpCeB94ge9iMBDFsqRqVSCJIRc5kHNHd4zk%3D\">"
        ],
        "open": false,
        "options": [
          {
            "option": ["We are preparing a staging area in Google Cloud Storage for the output of our Cloud Dataflow pipeline and will be submitting our BigQuery job with a later command."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["We are compiling our Cloud Dataflow pipeline written in Java and are submitting it to the cloud for execution. Notice that we are calling mvn compile and passing in --runner=DataflowRunner."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["We are compiling our Cloud Dataflow pipeline written in Python and are loading the outputs of the executed pipeline inside of Google Cloud Storage (gs://)"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_4_7",
        "domain": [],
        "intro": [],
        "body": [
          "What is one key advantage of preprocessing your features using Apache Beam?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Apache Beam code is often harder to maintain and run at scale than BigQuery preprocessing pipelines."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["The same code you use to preprocess features in training and evaluation can also be used in serving."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Apache Beam transformations are written in Standard SQL which is scalable and easy to author."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_5_1",
        "domain": [],
        "intro": [],
        "body": [
          "In the __________ layers, the lines are colored by the __________ of the connections between neurons. Blue shows a _________ weight, which means the network is using that _________ of the neuron as given. An orange line shows that the network is assigning a __________ weight."
        ],
        "open": false,
        "options": [
          {
            "option": ["Hidden, weights, positive, output, negative"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Output, weights, negative, hidden, positive"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Weights, hidden, negative, output, positive"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Hidden, weights, negative, output, positive"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_5_2",
        "domain": [],
        "intro": [],
        "body": [
          "True or False: <br> We can create many different kinds of feature crosses. <br> For example: <br> \u2022 [A X B]: a feature cross formed by multiplying the values of two features. <br> \u2022 [A x B x C x D x E]: a feature cross formed by multiplying the values of five features.<br> \u2022 [A x A]: a feature cross formed by squaring a single feature."
        ],
        "open": false,
        "options": [
          {
            "option": ["False"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["True"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_5_3",
        "domain": [],
        "intro": [],
        "body": [
          "True or False: <br> In TensorFlow Playground, the data points (represented by small circles) are initially colored orange or blue, which correspond to zero and negative one."
        ],
        "open": false,
        "options": [
          {
            "option": ["False"],
            "answer": true,
            "explanation": ["The answer is positive one to negative one."]
          },
          {
            "option": ["True"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_5_4",
        "domain": [],
        "intro": [],
        "body": [
          "True or False: <br> In TensorFlow Playground, orange and blue are used throughout the visualization in slightly different ways, but in general orange shows negative values while blue shows positive values."
        ],
        "open": false,
        "options": [
          {
            "option": ["False"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["True"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_5_5",
        "domain": [],
        "intro": [],
        "body": [
          "Why might you create an embedding of a feature cross?"
        ],
        "open": false,
        "options": [
          {
            "option": ["To identify similar sets of inputs for clustering"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["To reuse weights learned in one problem in another problem"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["To create a lower-dimensional representation of the input space"],
            "answer": false,
            "explanation": ["Partially correct."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_5_6",
        "domain": [],
        "intro": [],
        "body": [
          "True or False: <br> In TensorFlow Playground, in the output layer, the dots are colored orange or blue depending on their original values. The background color shows what the network is predicting for a particular area. The intensity of the color shows how confident that prediction is."
        ],
        "open": false,
        "options": [
          {
            "option": ["False"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["True"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_6_1",
        "domain": [],
        "intro": [],
        "body": [
          "What is Tensorflow Transform a hybrid of?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Apache Beam and TensorFlow"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Both options are correct."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Dataflow and Tensorflow"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_6_2",
        "domain": [],
        "intro": [],
        "body": [
          "What does tf.Transform do during the training and serving phase?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Provides a TensorFlow graph for preprocessing"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Provides a transformation polynomial to train the data"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Provides computation over the entire dataset, including on both internal and external data sources"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["None of the options are correct."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_6_3",
        "domain": [],
        "intro": [],
        "body": [
          "True or False: <br> One of the goals of tf.Transform is to provide a TensorFlow graph for preprocessing that can be incorporated into the serving graph (and, optionally, the training graph)."
        ],
        "open": false,
        "options": [
          {
            "option": ["True"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["False"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "feature_engineering_6_4",
        "domain": [],
        "intro": [],
        "body": [
          "The ______________ _______________ is the most important concept of tf.Transform. The ______________ _______________ is a logical description of a transformation of the dataset. The ______________ _______________ accepts and returns a dictionary of tensors, where a tensor means Tensor or 2D SparseTensor."
        ],
        "open": false,
        "options": [
          {
            "option": ["Preprocessing function"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Preprocessing method"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Preprocessing variable"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      }
    ],
    "ml_in_the_enterprise": [
      {
        "id": "ml_in_the_enterprise_1_1",
        "domain": [],
        "intro": [],
        "body": [
          "If the model needs to be repeatedly retrained in the future, an automated training pipeline is also developed. Which task do we use for this?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Training operationalization"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Training formalization"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Experimentation & prototyping"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Training implementation"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_1_2",
        "domain": [],
        "intro": [],
        "body": [
          "What is the correct process that data scientists use to develop the models on an experimentation platform?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Problem definition > Data selection > Data exploration > Model prototyping > Feature engineering > Model validation"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Problem definition > Data exploration > Data selection > Feature engineering > Model prototyping > Model validation"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Problem definition > Data selection > Data exploration > Model prototyping > Model validation > Feature engineering"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Problem definition > Data selection > Data exploration > Feature engineering > Model prototyping > Model validation"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_1_3",
        "domain": [],
        "intro": [],
        "body": [
          "Which two activities are involved in ML development?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Experimentation and version control"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Training formalization and training operationalization"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Experimentation and training operationalization"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Version control and training operationalization"],
            "answer": false,
            "explanation": ["Partially correct."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_1_4",
        "domain": [],
        "intro": [],
        "body": [
          "Which process covers algorithm selection, model training, hyperparameter tuning, and model evaluation in the Experimentation and Prototyping activity?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Model validation"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Data exploration"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Feature engineering"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Model prototyping"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_2_1",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following is correct for Online serving?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Online serving is for high-latency data retrieval of small batches of data for real-time processing."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Online serving is for high throughput and serving large volumes of data for offline processing."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Online serving is for low-latency data retrieval of small batches of data for real-time processing."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Online serving is for low throughput and serving large volumes of data for offline processing."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_2_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following is not a part of Google\u2019s enterprise data management and governance tool?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Data Catalog"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Dataplex"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Feature Store"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Analytics Catalog"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_2_3",
        "domain": [],
        "intro": [],
        "body": [
          "Which Data processing option can be used for transforming large unstructured data in Google Cloud?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Dataflow"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Beam proc"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Hadoop proc"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Apache prep"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_2_4",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following statements is not a feature of Analytics Hub?"
        ],
        "open": false,
        "options": [
          {
            "option": ["You can create and access a curated library of internal and external assets, including unique datasets like Google Trends, backed by the power of BigQuery."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Analytics Hub requires batch data pipelines that extract data from databases, store it in flat files, and transmit them to the consumer where they are ingested into another database."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Analytics Hub efficiently and securely exchanges data analytics assets across organizations to address challenges of data reliability and cost."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["There are three roles in Analytics Hub - A Data Publisher, Exchange Administrator, and a Data Subscriber."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_2_5",
        "domain": [],
        "intro": [],
        "body": [
          "What does the Aggregation Values contain in any feature?"
        ],
        "open": false,
        "options": [
          {
            "option": ["The min, zeros, and Std.dev values for each features"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["The min, median, and max values for each features"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["The min, median, and Std.dev values for each features"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["The Count, median, and max values for each features"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_3_1",
        "domain": [],
        "intro": [],
        "body": [
          "The learning rate is a hyperparameter that controls how much to change the model in response to the estimated error each time the model weights are updated. Choosing the learning rate is challenging. What can happen if the value is too large?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Training may take a long time."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["A large learning rate value may result in the model learning a sub-optimal set of weights too fast or an unstable training process."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["If the learning rate value is too large, then the model will converge."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["The model will not train.."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_3_2",
        "domain": [],
        "intro": [],
        "body": [
          "The learning rate is a hyperparameter that controls how much to change the model in response to the estimated error each time the model weights are updated. Choosing the learning rate is challenging. What can happen if the value is too small?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Training may take a long time."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Smaller learning rates require less <a href=https://machinelearningmastery.com/difference-between-a-batch-and-an-epoch/>training epochs</a> given the smaller changes made to the weights each update."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["If the learning rate value is too small, then the model will diverge."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["The model will train more quickly."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_3_3",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following is true?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Larger batch sizes require smaller learning rates."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Smaller batch sizes require larger learning rates."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Smaller batch sizes require smaller learning rates."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Larger batch sizes require larger learning rates."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_3_4",
        "domain": [],
        "intro": [],
        "body": [
          "What is \"data parallelism\u201d in distributed training?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Run the same model & computation on every device, but train each of them using the same training samples."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Run different models & computation on a single device, but train each of them using different training samples."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Run different models & computation on every device, but train each of them using only one training sample."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Run the same model & computation on every device, but train each of them using different training samples."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_3_5",
        "domain": [],
        "intro": [],
        "body": [
          "Model complexity often refers to the number of features or terms included in a given predictive model. What happens when the complexity of the model increases?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Model is more likely to overfit."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Model will not figure out general relationships in the data."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Model performance on a test set is going to be poor."],
            "answer": false,
            "explanation": ["Partially correct."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_3_6",
        "domain": [],
        "intro": [],
        "body": [
          "The learning rate is a configurable hyperparameter used in the training of neural networks that has a small positive value, often in the range between _______"
        ],
        "open": false,
        "options": [
          {
            "option": ["1.0 and 3.0."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["< 0.0 and > 1.00."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["0.0 and 1.0."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["> 0.0 and < 1.00."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_4_1",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following can make a huge difference in model quality?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Increasing the training time."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Setting hyperparameters to their optimal values for a given dataset."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Decreasing the number of epochs."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Increasing the learning rate."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_4_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following algorithms is useful, if you want to specify a quantity of trials that is greater than the number of points in the feasible space?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Manual Search"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Bayesian Optimization"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Random Search"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Grid Search"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_4_3",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following is a black-box optimization service?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Early stopping"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Vertex Vizier"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["AutoML"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Manual Search"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_4_4",
        "domain": [],
        "intro": [],
        "body": [
          "Black box optimization algorithms find the best operating parameters for any system whose ______________?"
        ],
        "open": false,
        "options": [
          {
            "option": ["number of iterations is limited to train a model for validation."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["execution time is less."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["performance can be measured as a function of adjustable parameters."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["iterations to get to the optimal set of hyperparameter values are less."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_4_5",
        "domain": [],
        "intro": [],
        "body": [
          "Bayesian optimization takes into account past evaluations when choosing the hyperparameter set to evaluate next. By choosing its parameter combinations in an informed way, it enables itself to focus on those areas of the parameter space that it believes will bring the most promising validation scores. Therefore it _____________________."
        ],
        "open": false,
        "options": [
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["requires less iterations to get to the optimal set of hyperparameter values."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["limits the number of times a model needs to be trained for validation."],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["enables itself to focus on those areas of the parameter space that it believes will bring the most promising validation scores."],
            "answer": false,
            "explanation": ["Partially correct."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_5_1",
        "domain": [],
        "intro": [],
        "body": [
          "Which statements are correct for serving predictions using Pre-built containers?"
        ],
        "open": false,
        "options": [
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Vertex AI provides Docker container images that you run as pre-built containers for serving predictions."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Pre-built containers provide HTTP prediction servers that you can use to serve prediction using minimal configurations."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Pre-built containers are organized by Machine learning framework and framework version."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_5_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following statements is invalid for a data source file in batch prediction?"
        ],
        "open": false,
        "options": [
          {
            "option": ["You must use a regional BigQuery dataset."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["The first line of the data source CSV file must contain the name of the columns."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["If the Cloud Storage bucket is in a different project than where you use Vertex AI, you must provide the Storage Object Creator role to the Vertex AI service account in that project."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["BigQuery data source tables must be no larger than 100 GB."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_5_3",
        "domain": [],
        "intro": [],
        "body": [
          "What are the features of Vertex AI model monitoring?"
        ],
        "open": false,
        "options": [
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Drift in data quality"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Skew in training vs. serving data"],
            "answer": false,
            "explanation": ["Partially correct."]
          },
          {
            "option": ["Feature Attribution and UI visualizations"],
            "answer": false,
            "explanation": ["Partially correct."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_5_4",
        "domain": [],
        "intro": [],
        "body": [
          "For which, the baseline is the statistical distribution of the feature's values seen in production in the recent past."
        ],
        "open": false,
        "options": [
          {
            "option": ["Skew detection"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Categorical features"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Numerical features"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Drift detection"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_5_5",
        "domain": [],
        "intro": [],
        "body": [
          "Which statement is correct regarding the maximum size for a CSV file during batch prediction?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Each data source file must include multiple files, up to a maximum amount of 50 GB."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["The data source file must be no larger than 100 GB."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Each data source file must not be larger than 10 GB. You can include multiple files, up to a maximum amount of 100 GB."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["The data source file must be no larger than 50 GB. You can not include multiple files."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_5_6",
        "domain": [],
        "intro": [],
        "body": [
          "What should be done if the source table is in a different project?"
        ],
        "open": false,
        "options": [
          {
            "option": ["You should provide the BigQuery Data Viewer role to the Vertex AI service account in your project."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["You should provide the BigQuery Data Editor role to the Vertex AI service account in that project."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["You should provide the BigQuery Data Viewer role to the Vertex AI service account in that project."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["You should provide the BigQuery Data Editor role to the Vertex AI service account in your project."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_6_1",
        "domain": [],
        "intro": [],
        "body": [
          "How can you define the pipeline's workflow as a graph?"
        ],
        "open": false,
        "options": [
          {
            "option": ["By using the outputs of a component as an input of another component"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Use the previous pipeline's output as an input for the current pipeline."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["By using predictive input for each component."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["By using different inputs for each component."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_6_2",
        "domain": [],
        "intro": [],
        "body": [
          "What can you use to compile the pipeline?"
        ],
        "open": false,
        "options": [
          {
            "option": ["kfp.Compiler"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["kfp.v2.compiler"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["kfp.v2.compiler.Compiler"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["compiler.Compiler"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_6_3",
        "domain": [],
        "intro": [],
        "body": [
          "Which package is used to define and interact with pipelines and components?"
        ],
        "open": false,
        "options": [
          {
            "option": ["kfp.components"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["kfp.compiler"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["kfp.containers"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["kfp.dsl package"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_in_the_enterprise_6_4",
        "domain": [],
        "intro": [],
        "body": [
          "What can you use to create a pipeline run on Vertex AI Pipelines?"
        ],
        "open": false,
        "options": [
          {
            "option": ["kfp.v2.compiler.Compiler"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Pipeline root path"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Service account"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Vertex AI python client"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      }
    ],
    "production_ml_systems": [
      {
        "id": "production_ml_systems_1_1",
        "domain": [],
        "intro": [],
        "body": [
          "Vertex AI has a unified data preparation tool that supports image, tabular, text, and video content. Where are uploaded datasets stored in Vertex AI?"
        ],
        "open": false,
        "options": [
          {
            "option": ["A Google Cloud Storage bucket that acts as an output for both AutoML, custom training jobs, serialized training jobs."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["A Google Cloud Storage bucket that acts as an input for both AutoML and custom training jobs."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["A Google Cloud database that acts as an output for both AutoML and custom training jobs."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["A Google Cloud database that acts as an input for both AutoML and custom training jobs."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "production_ml_systems_1_2",
        "domain": [],
        "intro": [],
        "body": [
          "When you use the data to train a model, Vertex AI examines the source data type and feature values and infers how it will use that feature in model training. This is called the ________________for that feature."
        ],
        "open": false,
        "options": [
          {
            "option": ["Transmutation"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Translation"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Duplication"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Transformation"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "production_ml_systems_1_3",
        "domain": [],
        "intro": [],
        "body": [
          "Match the three types of data ingest with an appropriate source of training data."
        ],
        "open": false,
        "options": [
          {
            "option": ["Streaming (BigQuery), structured batch (Pub/Sub), unstructured batch (Cloud Storage)"],
            "answer": false,
            "explanation": ["You wouldn't ingest streaming data from BigQuery, although you could stream to it. Pub/Sub is a poor place to store your batch data, although you might use it to replay events."]
          },
          {
            "option": ["Streaming batch (Dataflow), structured batch (BigQuery), stochastic (App Engine)"],
            "answer": false,
            "explanation": ["These are just made up terms."]
          },
          {
            "option": ["Streaming (Pub/Sub), structured batch (BigQuery), unstructured batch (Cloud Storage)"],
            "answer": true,
            "explanation": ["On Google Cloud, the three types of data ingestion map to three different products. If you are ingesting streaming data, use Pub/Sub. If you are ingesting structured data directly into your ML model, use BigQuery, and if you are transforming data from training so that you can train on it later, read from Cloud Storage."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "production_ml_systems_1_4",
        "domain": [],
        "intro": [],
        "body": [
          "Which type of training do you use if your data set doesn\u2019t change over time?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Dynamic training"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Real-time training"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Static training"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Online training"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "production_ml_systems_1_5",
        "domain": [],
        "intro": [],
        "body": [
          "Which type of logging should be enabled in the online prediction that logs the stderr and stdout streams from your prediction nodes to Cloud Logging and can be useful for debugging?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Request-response logging"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Container logging"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Access logging"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Cloud logging"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "production_ml_systems_1_6",
        "domain": [],
        "intro": [],
        "body": [
          "What is the responsibility of model evaluation and validation components?"
        ],
        "open": false,
        "options": [
          {
            "option": ["To ensure that the models are not good before moving them into a staging environment."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["To ensure that the models are good after moving them into a production/staging environment."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["To ensure that the models are good before moving them into a production/staging environment."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["To ensure that the models are not good after moving them into a staging environment."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "production_ml_systems_1_7",
        "domain": [],
        "intro": [],
        "body": [
          "In the featurestore, the timestamps are an attribute of the feature values, not a separate resource type."
        ],
        "open": false,
        "options": [
          {
            "option": ["False"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["True"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "production_ml_systems_1_8",
        "domain": [],
        "intro": [],
        "body": [
          "What percent of system code does the ML model account for?"
        ],
        "open": false,
        "options": [
          {
            "option": ["25%"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["50%"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["5%"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["90%"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "production_ml_systems_2_1",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following tools help software users manage dependency issues?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Monolithic programs"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Polylithic programs"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Modular programs"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Maven, Gradle, and Pip"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "production_ml_systems_2_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which component identifies anomalies in training and serving data and can automatically create a schema by examining the data?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Data validation"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Data identifier"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Data ingestion"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Data transform"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "production_ml_systems_2_3",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following models are susceptible to a feedback loop? Check all that apply."
        ],
        "open": false,
        "options": [
          {
            "option": ["A book-recommendation model that suggests novels its users may like based on their popularity (i.e., the number of times the books have been purchased)."],
            "answer": true,
            "explanation": ["Book recommendations are likely to drive purchases, and these additional sales will be fed back into the model as input, making it more likely to recommend these same books in the future."]
          },
          {
            "option": ["A housing-value model that predicts house prices, using size (area in square meters), number of bedrooms, and geographic location as features."],
            "answer": false,
            "explanation": ["A house's location, size, or number of bedrooms cannot be quickly changed in response to price forecasts, which makes a feedback loop unlikely. However, there is potentially a correlation between size and number of bedrooms (larger homes are likely to have more rooms) that may need to be analyzed."]
          },
          {
            "option": ["A face-attributes model that detects whether a person is smiling in a photo, which is regularly trained on a database of stock photography that is automatically updated monthly."],
            "answer": false,
            "explanation": ["There is no feedback loop here, because model predictions don't have any impact on the photo database. However, versioning of the input data is a concern here, because these monthly updates could potentially have unforeseen effects on the model."]
          },
          {
            "option": ["An election-results model that forecasts the winner of a mayoral race by surveying 2% of voters after the polls have closed."],
            "answer": false,
            "explanation": ["If the model does not publish its forecast until after the polls have closed, its predictions cannot affect voter behavior."]
          },
          {
            "option": ["A traffic-forecasting model that predicts congestion at highway exits near the beach, using beach crowd size as one of its features."],
            "answer": true,
            "explanation": ["Some beachgoers are likely to base their plans on the traffic forecast. If there is a large beach crowd and traffic is forecast to be heavy, many people may make alternative plans. This may depress beach turnout, resulting in a lighter traffic forecast, which then may increase attendance, and the cycle repeats."]
          },
          {
            "option": ["A university-ranking model that rates schools in part by their selectivity (the percentage of students who applied that were admitted)."],
            "answer": true,
            "explanation": ["The model's rankings may drive additional interest to top-rated schools, increasing the number of applications they receive. If these schools continue to admit the same number of students, selectivity will increase (the percentage of students admitted will go down). This will boost these schools' rankings, which will further increase prospective student interest, and so on\u2026"]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "production_ml_systems_2_4",
        "domain": [],
        "intro": [],
        "body": [
          "What is training skew caused by?"
        ],
        "open": false,
        "options": [
          {
            "option": ["The Cloud Storage you load your data from in the training environment is physically closer than the Cloud Storage you load your data from in the production environment."],
            "answer": false,
            "explanation": ["The distance of where the data is stored to the processing device does not impact prediction performance."]
          },
          {
            "option": ["Starting and stopping of the processing when training the model."],
            "answer": false,
            "explanation": ["Starting and stopping the processing makes no difference to the training."]
          },
          {
            "option": ["Your development and production environments are different, or different code is used in the training environment than in the development environment."],
            "answer": true,
            "explanation": ["Different versions may cause predictions to be significantly slower or consume more memory in the training environment  than in the development environment. Different code may result in different performance."]
          },
          {
            "option": ["The prediction environment is slower than the training environment."],
            "answer": false,
            "explanation": ["Training may take longer in development than in production, but the training is the same."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "production_ml_systems_2_5",
        "domain": [],
        "intro": [],
        "body": [
          "Suppose you are building an ML-based system to predict the likelihood that a customer will leave a positive review. The user interface that customers leave reviews on changed a few months ago, but you don't know about this. Which of these is a potential consequence of mismanaging this data dependency?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Change in ability of model to be part of a streaming ingest"],
            "answer": false,
            "explanation": ["Your model structure doesn't change just because it's easier or harder to leave reviews."]
          },
          {
            "option": ["Losses in prediction quality"],
            "answer": true,
            "explanation": ["For example, a review might be easier to write, and so your prediction of whether someone will leave a review (whether good or bad) is too low because it was trained on reviews that resulted from the older, harder-to-use user interface"]
          },
          {
            "option": ["Change in model serving signature"],
            "answer": false,
            "explanation": ["Your model structure doesn't change just because it's easier or harder to leave reviews."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "production_ml_systems_2_6",
        "domain": [],
        "intro": [],
        "body": [
          "Gradual drift is used for which of the following?"
        ],
        "open": false,
        "options": [
          {
            "option": ["An old concept that incrementally changes to a new concept over a period of time"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["An old concept that may reoccur after some time"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["A new concept that occurs within a short time"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["A new concept that rapidly replaces an old one over a short period of time"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "production_ml_systems_2_7",
        "domain": [],
        "intro": [],
        "body": [
          "What is the shift in the actual relationship between the model inputs and the output called?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Prediction drift"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Label drift"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Data drift"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Concept drift"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "production_ml_systems_3_1",
        "domain": [],
        "intro": [],
        "body": [
          "If each of your examples is large in terms of size and requires parsing, and your model is relatively simple and shallow, your model is likely to be:"
        ],
        "open": false,
        "options": [
          {
            "option": ["I/O bound, so you should look for ways to store data more efficiently and ways to parallelize the reads."],
            "answer": true,
            "explanation": ["Your ML training will be I/O bound if the number of inputs is large or  heterogeneous (requires parsing) or if the model is so small that the compute requirements are trivial. This also tends to be the case if the input data is on a storage system with low throughput. If you are I/O bound, look at storing the data more efficiently, storing the data on a storage system with higher throughput, or parallelizing the reads. Although it is not ideal, you might consider reducing the batch size so that you are reading less data in each step."]
          },
          {
            "option": ["CPU-bound, so you should use GPUs or TPUs."],
            "answer": false,
            "explanation": ["This doesn't sound like computational power is your limiting factor."]
          },
          {
            "option": ["Latency-bound, so you should use faster hardware"],
            "answer": false,
            "explanation": ["Review I/O-bound, CPU-bound and memory-bound models."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "production_ml_systems_3_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following indicates that ML training is CPU bound?"
        ],
        "open": false,
        "options": [
          {
            "option": ["If you are running a model on accelerated hardware."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["If I/O is complex, but the model involves lots of complex/expensive computations."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["If you are running a model on powered hardware."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["If I/O is simple, but the model involves lots of complex/expensive computations."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "production_ml_systems_3_3",
        "domain": [],
        "intro": [],
        "body": [
          "What does high-performance machine learning determine?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Training a model"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Time taken to train a model"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Reliability of a model"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Deploying a model"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "production_ml_systems_3_4",
        "domain": [],
        "intro": [],
        "body": [
          "For the fastest I/O performance in TensorFlow\u2026"
        ],
        "open": false,
        "options": [
          {
            "option": ["Prefetch the data"],
            "answer": true,
            "explanation": ["dataset.prefetch decouples the time data is produced from the time it is consumed. It prefetches the data into a buffer in parallel with the training step. This means that we have input data for the next training step before the current one is completed."]
          },
          {
            "option": ["Read TF records into your model."],
            "answer": true,
            "explanation": ["dataset  tf.data.TFRecordDataset(...) TF Records are set for fast, efficient, batch reads, without the overhead of having to parse the data in Python."]
          },
          {
            "option": ["Read in parallel threads."],
            "answer": true,
            "explanation": ["dataset  tf.data.TFRecordDataset(files, num_parallel_reads40) When you're dealing with a large dataset sharded across Cloud Storage, you can speed up by reading multiple files in parallel to increase the effective throughput. You can use this feature with a single option to the TFRecordDataset constructor called num_parallel_reads."]
          },
          {
            "option": ["Optimize TensorFlow performance using the Profiler."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "production_ml_systems_4_1",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following determines the correct property of Tensorflow Lite?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Increased code footprint"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Lower precision arithmetic"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Higher precision arithmetic"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Quantization"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "production_ml_systems_4_2",
        "domain": [],
        "intro": [],
        "body": [
          "To copy the input data into TensorFlow, which of the following syntaxes is correct?"
        ],
        "open": false,
        "options": [
          {
            "option": ["inferenceInterface.feed(floatValues, 1, inputSize, inputSize, 3);"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["inferenceInterface.feed(inputName, floatValues, 1, inputSize, 3);"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["inferenceInterface.feed(inputName, floatValues, 1, inputSize, inputSize, 3);"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["inferenceInterface.feed(inputName, floatValues, 1, inputSize; inputSize, 3);"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "production_ml_systems_4_3",
        "domain": [],
        "intro": [],
        "body": [
          "A key principle behind Kubeflow is portability so that you can:"
        ],
        "open": false,
        "options": [
          {
            "option": ["Move your model from on-premises to Google Cloud."],
            "answer": true,
            "explanation": ["Portability is at the container level, and you can move to any environment that offers Kubernetes."]
          },
          {
            "option": ["Convert your model from CUDA to XLA."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Migrate your model from TensorFlow to PyTorch."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "production_ml_systems_4_4",
        "domain": [],
        "intro": [],
        "body": [
          "Which of these are reasons that you may not be able to perform machine learning solely on Google Cloud? Check all that apply."
        ],
        "open": false,
        "options": [
          {
            "option": ["You are tied to on-premises or multi-cloud infrastructure due to business reasons."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["TensorFlow is not supported on Google Cloud."],
            "answer": false,
            "explanation": ["of course Google Cloud supports TensorFlow."]
          },
          {
            "option": ["You need to run inference on the edge."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      }
    ],
    "cv_fundamentals_with_gcloud": [
      {
        "id": "cv_fundamentals_with_gcloud_1_1",
        "domain": [],
        "intro": [],
        "body": [
          "How does OCR (optical character recognition) transform images into an electronic form?"
        ],
        "open": false,
        "options": [
          {
            "option": ["OCR analyzes the color of the letters and numbers to turn the scanned image into text."],
            "answer": false,
            "explanation": ["OCR analyzes the patterns of light and dark that make up the letters and numbers to turn the scanned image into text. Review the module \u201cIntroduction to Computer Vision and Pre-built ML Models with Vision API\u201d."]
          },
          {
            "option": ["OCR uses a magnetic ink for the letters and numbers to turn the scanned image into text."],
            "answer": false,
            "explanation": ["OCR analyzes the patterns of light and dark that make up the letters and numbers to turn the scanned image into text. Review the module \u201cIntroduction to Computer Vision and Pre-built ML Models with Vision API\u201d."]
          },
          {
            "option": ["OCR analyzes the patterns of light and dark that make up the letters and numbers to turn the scanned image into text."],
            "answer": true,
            "explanation": ["OCR examines the text of a document and translates the characters into code that can be used for data processing."]
          },
          {
            "option": ["OCR analyzes the size of the letters and numbers to turn the scanned image into text."],
            "answer": false,
            "explanation": ["OCR analyzes the patterns of light and dark that make up the letters and numbers to turn the scanned image into text. Review the module \u201cIntroduction to Computer Vision and Pre-built ML Models with Vision API\u201d."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_1_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which pre-built ML API is used for language translations?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Natural Language Processing API"],
            "answer": false,
            "explanation": ["Review the module \u201cIntroduction to Computer Vision and Pre-built ML Models with Vision API\u201d."]
          },
          {
            "option": ["Speech API"],
            "answer": false,
            "explanation": ["Review the module \u201cIntroduction to Computer Vision and Pre-built ML Models with Vision API\u201d."]
          },
          {
            "option": ["Vision API"],
            "answer": false,
            "explanation": ["Review the module \u201cIntroduction to Computer Vision and Pre-built ML Models with Vision API\u201d."]
          },
          {
            "option": ["Translation API"],
            "answer": true,
            "explanation": ["Translation API is built on parallel texts from language translations. It translates texts into more than one hundred languages."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_1_3",
        "domain": [],
        "intro": [],
        "body": [
          "What are the possible consequences for an ML model being trained with high resolution photos with high color depth?"
        ],
        "open": false,
        "options": [
          {
            "option": ["It will increase the input size for an ML model but will reduce the training time."],
            "answer": false,
            "explanation": ["If the ML model is trained with high resolution photos with high color depth, the input size will increase with longer training time for an ML model. Review the module \u201cIntroduction to Computer Vision and Pre-built ML Models with Vision API\u201d."]
          },
          {
            "option": ["Performance issues such as insufficient computing power will not occur."],
            "answer": false,
            "explanation": ["If the ML model is trained with high resolution photos with high color depth, performance issues such as insufficient computing power will occur. Review the module \u201cIntroduction to Computer Vision and Pre-built ML Models with Vision API\u201d."]
          },
          {
            "option": ["It will increase the input size with longer training time for an ML model."],
            "answer": true,
            "explanation": ["If the ML model is trained with high resolution photos with high color depth, there will be performance issues and an increase in input size with longer training time for the ML model."]
          },
          {
            "option": ["It may lead to performance issues like insufficient computing power."],
            "answer": true,
            "explanation": ["If the ML model is trained with high resolution photos with high color depth, there will be performance issues and an increase in input size with longer training time for the ML model."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_1_4",
        "domain": [],
        "intro": [],
        "body": [
          "How does instance segmentation help in classifying the images?"
        ],
        "open": false,
        "options": [
          {
            "option": ["It identifies which objects are present in an image by outputting the class labels and class probabilities of objects present in that image."],
            "answer": false,
            "explanation": ["Identifying which objects are present in an image by inputting the class labels and class probabilities of the objects present in that image is performed by object recognition. Review the module \u201cIntroduction to Computer Vision and Pre-built ML Models with Vision API\u201d."]
          },
          {
            "option": ["It partitions an image into multiple regions and segments all pixels in the image into different categories. Then it labels each pixel in the image, including the background and different colors."],
            "answer": false,
            "explanation": ["Partitioning an image into multiple regions and segmenting all pixels in the image into different categories is done by semantic segmentation. Review the module \u201cIntroduction to Computer Vision and Pre-built ML Models with Vision API\u201d."]
          },
          {
            "option": ["It identifies the boundaries of an object and labels pixels with different colors."],
            "answer": true,
            "explanation": ["Instance segmentation identifies the boundaries of an object and labels pixels with different colors. The exact outline of the object within an image is provided by image segmentation."]
          },
          {
            "option": ["It assigns a class label to an image and creates a bounding box around a single object in an image."],
            "answer": false,
            "explanation": ["Creation of a bounding box around a single object in an image is used in image classification with localization. Review the module \u201cIntroduction to Computer Vision and Pre-built ML Models with Vision API\u201d."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_1_5",
        "domain": [],
        "intro": [],
        "body": [
          "What does the Vision API do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["It only extracts the edges from an image by identifying the boundaries of objects within an image."],
            "answer": false,
            "explanation": ["Review the module \u201cIntroduction to Computer Vision and Pre-built ML Models with Vision API\u201d."]
          },
          {
            "option": ["It compares the features of images, which may be different in orientation, perspective, lighting, size, and color."],
            "answer": false,
            "explanation": ["Review the module \u201cIntroduction to Computer Vision and Pre-built ML Models with Vision API\u201d."]
          },
          {
            "option": ["It assigns labels to images and quickly classifies them into millions of predefined categories. It detects objects and faces, reads printed and handwritten text, and builds valuable metadata into the image catalog."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["The API identifies labels within a video instead of images."],
            "answer": false,
            "explanation": ["Review the module \u201cIntroduction to Computer Vision and Pre-built ML Models with Vision API\u201d."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_2_1",
        "domain": [],
        "intro": [],
        "body": [
          "What method do you use to create and train a model with minimal technical effort to quickly prototype models and explore new datasets before investing in development?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Managed dataset"],
            "answer": false,
            "explanation": ["Managed dataset manages your datasets with training applications and models. Review the module \u201cVertex AI and AutoML Vision on Vertex AI\u201d."]
          },
          {
            "option": ["Endpoints"],
            "answer": false,
            "explanation": ["Endpoints promises to improve privacy and reduce latency for online prediction tasks by eliminating the need for data to go through any public networks before making it back into VPCs. Review the module \u201cVertex AI and AutoML Vision on Vertex AI\u201d."]
          },
          {
            "option": ["AutoML"],
            "answer": true,
            "explanation": ["AutoML lets you create and train a model with minimal technical effort. Even if you want the flexibility of a custom training application, you can use AutoML to quickly prototype models and explore new datasets before investing in development."]
          },
          {
            "option": ["Unmanaged dataset"],
            "answer": false,
            "explanation": ["Review the module \u201cVertex AI and AutoML Vision on Vertex AI\u201d."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_2_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which AutoML model type analyzes your video data and returns a list of shots and segments where objects are detected?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Image classification model"],
            "answer": false,
            "explanation": ["An image classification model analyzes image data and returns a list of content categories that apply to the image. Review the module \u201cVertex AI and AutoML Vision on Vertex AI\u201d."]
          },
          {
            "option": ["Video object tracking model"],
            "answer": true,
            "explanation": ["A video object tracking model analyzes video data and returns a list of shots and segments where certain objects were detected. For example, if it analyzes video data from a soccer game, it can identify and track the ball."]
          },
          {
            "option": ["Video classification model"],
            "answer": false,
            "explanation": ["A video classification model analyzes video data to classify shots and segments or detect and track multiple objects. Review the module \u201cVertex AI and AutoML Vision on Vertex AI\u201d."]
          },
          {
            "option": ["Video action recognition model"],
            "answer": false,
            "explanation": ["A video action recognition model analyzes video data and returns a list of categorized actions with the moments the actions occurred. Review the module \u201cVertex AI and AutoML Vision on Vertex AI\u201d."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_2_3",
        "domain": [],
        "intro": [],
        "body": [
          "What is true about batch prediction?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Batch prediction is optimized to minimize the latency of serving predictions."],
            "answer": false,
            "explanation": ["Review the module \u201cVertex AI and AutoML Vision on Vertex AI\u201d."]
          },
          {
            "option": ["Predictions returned in the response message."],
            "answer": false,
            "explanation": ["Review the module \u201cVertex AI and AutoML Vision on Vertex AI\u201d."]
          },
          {
            "option": ["Batch prediction is a synchronous, or real-time, prediction, which means that it quickly returns a prediction."],
            "answer": false,
            "explanation": ["Review the module \u201cVertex AI and AutoML Vision on Vertex AI\u201d."]
          },
          {
            "option": ["Batch prediction is useful for making several prediction requests at the same time and is optimized to handle a high volume of instances in a job."],
            "answer": true,
            "explanation": ["Requesting a batch prediction is an asynchronous request, which means that the model waits until it processes all of the prediction requests before returning a response in JSON files in Cloud Storage buckets."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_2_4",
        "domain": [],
        "intro": [],
        "body": [
          "What prediction method do you use for synchronous or real-time prediction that quickly returns a prediction but only accepts one prediction request per API call?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Online prediction"],
            "answer": true,
            "explanation": ["Vertex AI online prediction is optimized to run your data through hosted models with as little latency as possible."]
          },
          {
            "option": ["AutoML prediction"],
            "answer": false,
            "explanation": ["Review the module \u201cVertex AI and AutoML Vision on Vertex AI\u201d."]
          },
          {
            "option": ["Batch prediction"],
            "answer": false,
            "explanation": ["Batch prediction is useful for making several prediction requests at the same time. Requesting a batch prediction is an asynchronous request. Review the module \u201cVertex AI and AutoML Vision on Vertex AI\u201d."]
          },
          {
            "option": ["Online and batch prediction"],
            "answer": false,
            "explanation": ["Review the module \u201cVertex AI and AutoML Vision on Vertex AI\u201d."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_2_5",
        "domain": [],
        "intro": [],
        "body": [
          "What does Vertex AI offer to achieve your ML goals?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Fast experimentation, accelerated deployment, and simplified model management"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Fast experimentation, decelerated deployment, and simplified model management"],
            "answer": false,
            "explanation": ["Vertex AI offers fast experimentation, accelerated deployment, and simplified model management to achieve your ML goals. Review the module \u201cVertex AI and AutoML Vision on Vertex AI\u201d."]
          },
          {
            "option": ["Slow experimentation, accelerated deployment, and simplified model management"],
            "answer": false,
            "explanation": ["Vertex AI offers fast experimentation, accelerated deployment, and simplified model management to achieve your ML goals. Review the module \u201cVertex AI and AutoML Vision on Vertex AI\u201d."]
          },
          {
            "option": ["Slow experimentation, accelerated training, and simplified model management"],
            "answer": false,
            "explanation": ["Vertex AI offers fast experimentation, accelerated deployment, and simplified model management to achieve your ML goals. Review the module \u201cVertex AI and AutoML Vision on Vertex AI\u201d."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_3_1",
        "domain": [],
        "intro": [],
        "body": [
          "When is the dropout technique used?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Dropout is a technique used to prevent a model from underfitting."],
            "answer": false,
            "explanation": ["Dropout is a technique used to prevent a model from overfitting. Review the module \u201cCustom Training with Linear, Neural Network and Deep Neural Network models\u201d."]
          },
          {
            "option": ["Dropout is a technique used to prevent a model from overfitting."],
            "answer": true,
            "explanation": ["Dropout is a regularization technique that prevents neural networks from overfitting. During training, dropout randomly discards a portion of the neurons to avoid overfitting."]
          },
          {
            "option": ["Dropout is a technique used to remove a small percentage of weights at each iteration. So weights will never be equal to zero."],
            "answer": false,
            "explanation": ["Dropout is a technique used to prevent a model from overfitting. Review the module \u201cCustom Training with Linear, Neural Network and Deep Neural Network models\u201d."]
          },
          {
            "option": ["Dropout is a feature added between the layers of the neural network, and it continuously takes the output from the previous layer and normalizes it before sending it to the next layer."],
            "answer": false,
            "explanation": ["Dropout is a technique used to prevent a model from overfitting. Review the module \u201cCustom Training with Linear, Neural Network and Deep Neural Network models\u201d."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_3_2",
        "domain": [],
        "intro": [],
        "body": [
          "How does the batch normalization work?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Batch normalization applies a transformation that maintains the mean output close to 0 and the output standard deviation close to 0."],
            "answer": false,
            "explanation": ["Batch normalization applies a transformation that maintains the mean output close to 0 and the output standard deviation close to 1. Review the module \u201cCustom Training with Linear, Neural Network and Deep Neural Network models\u201d."]
          },
          {
            "option": ["Batch normalization applies a transformation that maintains the mean output close to 0 and the output standard deviation close to 1."],
            "answer": true,
            "explanation": ["Batch normalization normalizes the outputs using a mean equal to 0 and a standard deviation equal to 1 (\u03bc0,\u03c31)."]
          },
          {
            "option": ["Batch normalization applies a transformation that maintains the mean output close to 1 and the output standard deviation close to 0."],
            "answer": false,
            "explanation": ["Batch normalization applies a transformation that maintains the mean output close to 0 and the output standard deviation close to 1. Review the module \u201cCustom Training with Linear, Neural Network and Deep Neural Network models\u201d."]
          },
          {
            "option": ["Batch normalization applies a transformation that maintains the mean output close to 1 and the output standard deviation close to 1."],
            "answer": false,
            "explanation": ["Batch normalization applies a transformation that maintains the mean output close to 0 and the output standard deviation close to 1. Review the module \u201cCustom Training with Linear, Neural Network and Deep Neural Network models\u201d."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_3_3",
        "domain": [],
        "intro": [],
        "body": [
          "When can a sequential model be used?"
        ],
        "open": false,
        "options": [
          {
            "option": ["A sequential model is appropriate for a plain stack of layers where each layer has exactly one input tensor and multiple output tensors."],
            "answer": false,
            "explanation": ["A sequential model is appropriate for a plain stack of layers where each layer has exactly one input tensor and one output tensor. Review the module \u201cCustom Training with Linear, Neural Network and Deep Neural Network models\u201d."]
          },
          {
            "option": ["A sequential model is appropriate for a plain stack of layers where each layer has multiple input tensors and one output tensor."],
            "answer": false,
            "explanation": ["A sequential model is appropriate for a plain stack of layers where each layer has exactly one input tensor and one output tensor. Review the module \u201cCustom Training with Linear, Neural Network and Deep Neural Network models\u201d."]
          },
          {
            "option": ["A sequential model is appropriate for a plain stack of layers where each layer has multiple input tensors and multiple output tensors."],
            "answer": false,
            "explanation": ["A sequential model is appropriate for a plain stack of layers where each layer has exactly one input tensor and one output tensor. Review the module \u201cCustom Training with Linear, Neural Network and Deep Neural Network models\u201d."]
          },
          {
            "option": ["A sequential model is appropriate for a plain stack of layers where each layer has exactly one input tensor and one output tensor."],
            "answer": true,
            "explanation": ["A sequential model is not appropriate when the model has multiple inputs or multiple outputs."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_3_4",
        "domain": [],
        "intro": [],
        "body": [
          "What function can be used for a model to do prediction?"
        ],
        "open": false,
        "options": [
          {
            "option": ["model.compile()"],
            "answer": false,
            "explanation": ["The model.compile() function configures the model with losses and metrics. Review the module \u201cCustom Training with Linear, Neural Network and Deep Neural Network models\u201d."]
          },
          {
            "option": ["model.fit()"],
            "answer": false,
            "explanation": ["The model.fit() function measures how well a machine learning model generalizes to data similar to the data it was trained on. Review the module \u201cCustom Training with Linear, Neural Network and Deep Neural Network models\u201d."]
          },
          {
            "option": ["model.evaluate()"],
            "answer": false,
            "explanation": ["The model.evaluate() function predicts the output for the given input and then computes the metrics function specified in the model. Review the module \u201cCustom Training with Linear, Neural Network and Deep Neural Network models\u201d."]
          },
          {
            "option": ["model.predict()"],
            "answer": true,
            "explanation": ["The model.predict() function is used for a model to do prediction."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_3_5",
        "domain": [],
        "intro": [],
        "body": [
          "What does the loss function do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["The loss function computes the updated model based on the data being observed."],
            "answer": false,
            "explanation": ["The loss function measures how accurate the model is during training. Review the module \u201cCustom Training with Linear, Neural Network and Deep Neural Network models\u201d."]
          },
          {
            "option": ["The loss function groups layers into an object with training and inference features."],
            "answer": false,
            "explanation": ["The loss function measures how accurate the model is during training. Review the module \u201cCustom Training with Linear, Neural Network and Deep Neural Network models\u201d."]
          },
          {
            "option": ["The loss function measures how accurate the model is during training."],
            "answer": true,
            "explanation": ["The loss function is a measure of how accurately your prediction model predicts the expected outcome (or value)."]
          },
          {
            "option": ["The loss function computes the average value of the cost function over all the training samples."],
            "answer": false,
            "explanation": ["The loss function measures how accurate the model is during training. Review the module \u201cCustom Training with Linear, Neural Network and Deep Neural Network models\u201d."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_4_1",
        "domain": [],
        "intro": [],
        "body": [
          "What kind of padding methods are available in Keras?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Same padding and valid padding"],
            "answer": true,
            "explanation": ["Keras has two padding methods available: one is called \u201csame\u201d and the other is called \u201cvalid.\u201d  In general, when small, square, and odd-numbered sizes are used for the kernels, the differences are not very meaningful. Also, Keras provides built-in support for padding."]
          },
          {
            "option": ["Casual padding and valid padding"],
            "answer": false,
            "explanation": ["Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          },
          {
            "option": ["Casual padding"],
            "answer": false,
            "explanation": ["Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          },
          {
            "option": ["Same padding and casual padding"],
            "answer": false,
            "explanation": ["Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_4_2",
        "domain": [],
        "intro": [],
        "body": [
          "What does the max-pooling operation do in a convolutional neural network?"
        ],
        "open": false,
        "options": [
          {
            "option": ["It returns the maximum value out of all the input data values passed to a kernel."],
            "answer": true,
            "explanation": ["A pooling layer that relies on max-pooling does not require any weights, because the operation only cares about the largest of the input values evaluated by the kernel. This means that during training none of the parameters of the pooling layer need to change."]
          },
          {
            "option": ["It returns the average value out of all the input data values passed to a kernel."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          },
          {
            "option": ["It returns the minimum value out of all the input data values passed to a kernel."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          },
          {
            "option": ["It calculates the ratio for each patch of the feature map."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_4_3",
        "domain": [],
        "intro": [],
        "body": [
          "Which factor does not affect the accuracy of the deep neural network, or DNN?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Inadequate data"],
            "answer": false,
            "explanation": ["Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          },
          {
            "option": ["Transfer function"],
            "answer": false,
            "explanation": ["Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          },
          {
            "option": ["Network architecture"],
            "answer": false,
            "explanation": ["Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          },
          {
            "option": ["Pixel randomization"],
            "answer": true,
            "explanation": ["The accuracy of the deep neural network, or DNN, is not affected by the pixel randomization because the data is not structured hierarchically."]
          }
        ],
        "feedback": [
          "It doesn't matter which neuron is trained to process which input values in a dense layer.",
          "If you randomly reshuffle the order of the pixels in the images, the classification performance stays the same, because the corresponding weights are also reshuffled.",
          "However, when human beings look at an image where the pixels are randomly reshuffled, the image looks like noise.",
          "This phenomenon happens because the concept of hierarchy plays a significant role in the human brain.",
          "Information is stored in sequence of patterns, in sequential order.",
          "Similarly, you can expect the CNNs to perform poorly in contrast to DNN models if the image pixels are randomly permitted.",
          "This is because hierarchy, or how pixels are placed next to each other, is a vital part of the CNN model design."
        ],
        "references": [
          "https://youtu.be/4pcqScI1jhA?t=206"
        ],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_4_4",
        "domain": [],
        "intro": [],
        "body": [
          "What is true about strides?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Stride refers to the number of pixels by which the input matrix slides over the filter matrix."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          },
          {
            "option": ["Larger strides will produce a larger feature map."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          },
          {
            "option": ["Strides are the size of the step by which the filter slides across the input image."],
            "answer": true,
            "explanation": ["Using a larger step will skip input pixels and produce fewer output values."]
          },
          {
            "option": ["Using a stride with a value greater than 1 will reduce the shape produced by the convolutional layer."],
            "answer": true,
            "explanation": ["The size of the output will be divided along every dimension by the size of the stride step."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_4_5",
        "domain": [],
        "intro": [],
        "body": [
          "What is a kernel in a convolutional neural network?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Kernels are the size of the step by which the filter slides across the input image."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          },
          {
            "option": ["Kernels are the building blocks of CNNs because they are used to extract the right and relevant features from the input data using the convolution operation."],
            "answer": true,
            "explanation": ["A kernel is only a filter that is used to extract the features from the images."]
          },
          {
            "option": ["A kernel is a parameter that depends on the number of channels in the input image."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          },
          {
            "option": ["A kernel is the area of an image in which a convolutional neural network processes."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_4_6",
        "domain": [],
        "intro": [],
        "body": [
          "What is convolution?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Convolution is a table that is often used to describe the performance of a classification model (or \"classifier\") on a set of test data for which the true values are known."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          },
          {
            "option": ["Convolution is a function that is used to reduce the spatial size of a representation and increase the number of parameters and amount of computation in a network."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          },
          {
            "option": ["Convolution is a parameter that helps to maintain the same size across the input and the output."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          },
          {
            "option": ["Convolution is the process of \"sliding\" a kernel across an image."],
            "answer": true,
            "explanation": ["A convolution is the mathematical combination of two functions to produce a third function."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_4_7",
        "domain": [],
        "intro": [],
        "body": [
          "Which CNN model parameter helps to maintain the same size across the input and the output of the convolutional layer?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Kernel size"],
            "answer": false,
            "explanation": ["The kernel size is the size or dimension of each filter and can be a single number, like 3 for a 3x3 filter, or a pair like (3,5) for a rectangular 3x5 filter. It doesn't help to maintain the same size across the input and the output of the convolutional layer. Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          },
          {
            "option": ["Input channels"],
            "answer": false,
            "explanation": ["The input channels parameter depends on the number of channels in the input image. For example, for an input image of 256x256x3, the input channels are 3. It doesn't help to maintain the same size across the input and the output of the convolutional layer. Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          },
          {
            "option": ["Padding"],
            "answer": true,
            "explanation": ["Padding extends the area of an image in which a convolutional neural network processes. The approach adds a border around the input values in the original image. Therefore, it helps you maintain the same size across the input and the output of the convolutional layer."]
          },
          {
            "option": ["Strides"],
            "answer": false,
            "explanation": ["Strides are the size of the step by which the filter slides across the input image. The default step size is 1 pixel in both directions. Using a larger step will skip input pixels and produce fewer output values. It doesn't help to maintain the same size across the input and the output of the convolutional layer. Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_4_8",
        "domain": [],
        "intro": [],
        "body": [
          "How many learnable parameters does a pooling layer have?"
        ],
        "open": false,
        "options": [
          {
            "option": ["One"],
            "answer": false,
            "explanation": ["Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          },
          {
            "option": ["Zero"],
            "answer": true,
            "explanation": ["The pooling layer doesn't have learnable parameters because it only calculates a specific number. Thus, the number of parameters in this layer is zero."]
          },
          {
            "option": ["Four"],
            "answer": false,
            "explanation": ["Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          },
          {
            "option": ["Two"],
            "answer": false,
            "explanation": ["Please refer to the module \u201cConvolutional Neural Networks\u201d."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_5_1",
        "domain": [],
        "intro": [],
        "body": [
          "What is data augmentation?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Data augmentation is the amount of pixels added to an image when it is being processed by the kernel of a CNN."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cDealing with Image Data\u201d."]
          },
          {
            "option": ["Data augmentation is a set of techniques that enhance the size and quality of training datasets with the goal of creating more accurate ML models that generalize better."],
            "answer": true,
            "explanation": ["Data augmentation improves the model's resilience and accuracy by creating more data."]
          },
          {
            "option": ["Data augmentation is a technique where randomly selected neurons are ignored during training."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cDealing with Image Data\u201d."]
          },
          {
            "option": ["Data augmentation is the grouping together of resources for the purposes of maximizing advantage or minimizing risk to the users."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cDealing with Image Data\u201d."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_5_2",
        "domain": [],
        "intro": [],
        "body": [
          "What is the proportion of the number of parameters in the entire network while computing?"
        ],
        "open": false,
        "options": [
          {
            "option": ["A large number of parameters comes from the dense layers at the end, and the convolutional layers contain far fewer parameters."],
            "answer": true,
            "explanation": ["To compute the number of parameters in a convolutional layer, multiply the number of parameters per filter by the number of filters and divide by the stride, and then finally add bias terms for each filter."]
          },
          {
            "option": ["The number of parameters from dense layers and convolutional layers has the same proportion."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cDealing with Image Data\u201d."]
          },
          {
            "option": ["A small number of parameters comes from the dense layers at the end, and the convolutional layers also contain far fewer parameters."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cDealing with Image Data\u201d."]
          },
          {
            "option": ["A large number of parameters comes from the dense layers at the end, along with the convolutional layers."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cDealing with Image Data\u201d."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_5_3",
        "domain": [],
        "intro": [],
        "body": [
          "What is negative transfer learning in computer vision?"
        ],
        "open": false,
        "options": [
          {
            "option": ["When labeled data for a specific target task is scarce, the target performance is enhanced."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cDealing with Image Data\u201d."]
          },
          {
            "option": ["When labeled data for a specific target task is abundant, target performance is not degraded."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cDealing with Image Data\u201d."]
          },
          {
            "option": ["When knowledge is transferred from a less related source, the target performance is not degraded."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cDealing with Image Data\u201d."]
          },
          {
            "option": ["When knowledge is transferred from a less related source, the target performance might be degraded."],
            "answer": true,
            "explanation": ["When labeled data is scarce for a specific target task, the target performance is affected."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_5_4",
        "domain": [],
        "intro": [],
        "body": [
          "How does transfer learning deal with the data scarcity problem?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Transfer learning boosts the need for data by initializing the parameters with better values."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cDealing with Image Data\u201d."]
          },
          {
            "option": ["Transfer learning transfers knowledge across tasks so, instead of creating more data, transfer learning decreases the need for data by initializing the parameters with better values."],
            "answer": true,
            "explanation": ["Transfer learning uses knowledge acquired for one task to solve related tasks."]
          },
          {
            "option": ["Transfer learning takes the pre-existing samples and changes them in some way to create new samples and also increase the number of training samples, and is typically used with image data."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cDealing with Image Data\u201d."]
          },
          {
            "option": ["Transfer learning increases the number of parameters to deal with data scarcity."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cDealing with Image Data\u201d."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "cv_fundamentals_with_gcloud_5_5",
        "domain": [],
        "intro": [],
        "body": [
          "How does preprocessing help to improve the quality of the image?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Preprocessing increases unwanted noise and controls the quality of the image."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cDealing with Image Data\u201d."]
          },
          {
            "option": ["Preprocessing improves the image data by inducing missing values, noisy data, and other inconsistencies before executing it to the algorithm."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cDealing with Image Data\u201d."]
          },
          {
            "option": ["Preprocessing increases unwanted distortions and enhances the required features that are essential for the application."],
            "answer": false,
            "explanation": ["Please refer to the module \u201cDealing with Image Data\u201d."]
          },
          {
            "option": ["Preprocessing suppresses unwanted distortions and enhances the required features that are essential for the application."],
            "answer": true,
            "explanation": ["Before raw images can be fed into an image model, they usually have to be preprocessed. These preprocessing operations can include resizing, converting between color spaces, cropping, flipping, rotating and transposing for shape transformation or image adjustments, segmentation, and compression for quality enhancement."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      }
    ],
    "nlp_on_gcloud": [
      {
        "id": "nlp_on_gcloud_1_1",
        "domain": [],
        "intro": [],
        "body": [
          "What are the options to create a processor for Document AI?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Choose an existing processor created for general purposes."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Choose an existing processor created for a specialized task."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Create a custom processor and build it on your own."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "nlp_on_gcloud_1_2",
        "domain": [],
        "intro": [],
        "body": [
          "What is NOT an application of NLP?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Text classification"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Machine translation"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Image recognition"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Interactive conversation"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "nlp_on_gcloud_1_3",
        "domain": [],
        "intro": [],
        "body": [
          "What are the three major components that the Dialogflow API helps to identify in a conversation?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Intent (the topic), entity (the details), and context (the flow of the conversation)."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Questions, answers, and feedback"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["End-user, Dialogflow, and fulfillment"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Time, location, and participants"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "nlp_on_gcloud_1_4",
        "domain": [],
        "intro": [],
        "body": [
          "What are the three options provided by Google Cloud to develop an NLP project?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Pre-built APIs, AutoML, and custom training"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["BigQuery, Dataflow, and Looker"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Dialogflow API, Contact Center AI, and Cloud Healthcare API"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Dataflow, Dialogflow API, and Google Data Studio"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "nlp_on_gcloud_2_1",
        "domain": [],
        "intro": [],
        "body": [
          "What are the NLP tasks solved by AutoML?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Text classification"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Entity extraction"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Sentiment analysis"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "nlp_on_gcloud_2_2",
        "domain": [],
        "intro": [],
        "body": [
          "Vertex AI provides two solutions to build an NLP project. Which of the following is correct about these two solutions?"
        ],
        "open": false,
        "options": [
          {
            "option": ["AutoML, which is a no-code solution, and custom training, which is a code-based solution"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Document AI and the Dialogflow API"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["AutoML, which is a code-based solution, and custom training, which is a no-code solution"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["CCAI, which stands for Contact Center AI, and Document AI"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "nlp_on_gcloud_2_3",
        "domain": [],
        "intro": [],
        "body": [
          "What are the major stages of an end-to-end workflow to build an NLP project with Vertex AI?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Data preparation, model training, and model serving"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Model deployment, model monitoring, and model serving"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Dataset upload, feature engineering, and model training"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Model training, model evaluation, and model deployment"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "nlp_on_gcloud_3_1",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following is NOT a major step of feature engineering in NLP?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Text representation"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Tokenization"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Preprocessing"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Model testing"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "nlp_on_gcloud_3_2",
        "domain": [],
        "intro": [],
        "body": [
          "What is the difference between continuous bag-of-words (CBOW) and skip-gram, the two primary techniques of word2vec?"
        ],
        "open": false,
        "options": [
          {
            "option": ["CBOW uses the next word to predict previous words, whereas skip-gram uses previous words to predict the next word."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["CBOW uses a center word to predict surrounding words, whereas skip-gram uses surrounding words to predict a center word."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["CBOW uses previous words to predict the next word, whereas skip-gram uses the next word to predict previous words."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["CBOW uses surrounding words to predict a center word, whereas skip-gram uses a center word to predict surrounding words."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "nlp_on_gcloud_3_3",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following is correct about one-hot encoding when you represent text with basic vectorization?"
        ],
        "open": false,
        "options": [
          {
            "option": ["One-hot encoding divides a sentence to character-level."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["One-hot encoding encodes the word to a vector where one corresponds to its position in the vocabulary and zeros to the rest."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["One-hot encoding converts a sentence to a dense vector that retains the meaning of the sentence."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["One-hot encoding encodes the word to the frequency it occurs in a sentence."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "nlp_on_gcloud_3_4",
        "domain": [],
        "intro": [],
        "body": [
          "What are the benefits of using word embedding (such as word2vec) compared to basic vectorization (such as one-hot encoding) when you convert text to vectors?"
        ],
        "open": false,
        "options": [
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Compared to basic vectorization, which converts text to sparse vectors, word embedding converts text to dense vectors."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["You can use pre-trained word-embedding to represent text."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Compared to basic vectorization, which converts text to vectors without semantic meaning, word embeddings represent words in a vector space where the distance between them indicates semantic similarity and difference."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "nlp_on_gcloud_4_1",
        "domain": [],
        "intro": [],
        "body": [
          "What are the major gates in a standard LSTM (long short-term memory) cell?"
        ],
        "open": false,
        "options": [
          {
            "option": ["A standard LSTM cell includes two gates: the input gate to input information and the output gate to output information."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["A standard LSTM cell includes two gates: the remember gate to remember relevant information and the forget gate to forget irrelevant information."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["A standard LSTM cell includes three gates: the input gate to input information, the hidden gate to remember information, and the output gate to output information."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["A standard LSTM cell includes three gates: the forget gate to forget irrelevant information, the input gate to remember relevant information, and the update gate to update new information."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "nlp_on_gcloud_4_2",
        "domain": [],
        "intro": [],
        "body": [
          "What is the key feature to enable a \u201cmemory\u201d of an RNN (recurrent neural network)?"
        ],
        "open": false,
        "options": [
          {
            "option": ["An RNN uses a mechanism called hidden state to carry the previous information to the next learning iteration."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["An RNN has a single lambda layer."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["An RNN has multiple hidden layers."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["An RNN has one hidden layer."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "nlp_on_gcloud_4_3",
        "domain": [],
        "intro": [],
        "body": [
          "What is the coding in Keras to build the hidden layer of a GRU (gated recurrent unit) model?"
        ],
        "open": false,
        "options": [
          {
            "option": ["gru_model = build_gru_model(embed_dim=EMBED_DIM)"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["GRU(units)"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Lambda(lambda x: tf.reduce_mean(x, axis=1))"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Dense(N_CLASSES, activation=\"softmax\")"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "nlp_on_gcloud_5_1",
        "domain": [],
        "intro": [],
        "body": [
          "What is the major improvement of BERT (Bidirectional Encoder Representations) compared to transformers?"
        ],
        "open": false,
        "options": [
          {
            "option": ["BERT considers the order of the words in a sentence, whereas a transformer doesn\u2019t."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["BERT doesn\u2019t consider the order of the words in a sentence, whereas a transformer does."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["BERT is a sequence-to-one model, whereas a transformer is a sequence-to-sequence model."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["BERT is a sequence-to-sequence model, whereas a transformer is a sequence-to-one model."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "nlp_on_gcloud_5_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following is correct about large language models?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Large in large language models refers to both huge training datasets and many parameters."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["All of the options."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Transformers and BERT are examples of large language models."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Large language models can be pre-trained for general purpose and then fine-tuned for specific tasks"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "nlp_on_gcloud_5_3",
        "domain": [],
        "intro": [],
        "body": [
          "What is the problem that an encoder-decoder mainly solves?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Sequence-to-one problems such as email spam detection, where you use sequence of text to predict if an email is a spam"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["None of the above."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Sequence-to-sequence problems such as machine translation where you translate sentences to another language"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["One-to-sequence problems such as image captioning, where you generate a few sentences based on one image"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      }
    ],
    "recommendation_systems_on_gcloud": [
      {
        "id": "recommendation_systems_on_gcloud_1_1",
        "domain": [],
        "intro": [],
        "body": [
          "What are some ways you can address the cold-start problem that can occur for new users of a collaborative filter recommendation system?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Rely on a content-based method instead for new users."],
            "answer": true,
            "explanation": ["Content-based systems require that we either base our recommendations solely on the properties of the items, by looking for similar items for example, or that we have representations of our users in the same embedding space of our items. For a trivial example, by asking users which genres they prefer, we could make content-based recommendations using representations of items with genres as features."]
          },
          {
            "option": ["Ask the user for some basic preferences."],
            "answer": true,
            "explanation": ["With only a few preferences, we could classify users into different personas we've derived across our user-base and base our recommendations on the preferences of this entire group."]
          },
          {
            "option": ["Give up and ask new users to make their own recommendations."],
            "answer": false,
            "explanation": ["Power users may be willing to help but their capacity won't scale with your service."]
          },
          {
            "option": ["Ask the new user's friends to recommend items they think would be relevant."],
            "answer": false,
            "explanation": ["Our friends are not always the best product recommenders, as anyone who has ever gotten a weird gift knows. Additionally, it means your service would have little value to users who don't already have friends on the site, which might very likely be the case when the product launches in a new country."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "recommendation_systems_on_gcloud_1_2",
        "domain": [],
        "intro": [],
        "body": [
          "Suppose you want to build a collaborative filter to suggest new hiking trails for users. The problem is you don't have any good explicit user ratings for trails. What feature might be useful for creating an implicit measure of a user's rating for a trail instead?"
        ],
        "open": false,
        "options": [
          {
            "option": ["The length of the trail."],
            "answer": false,
            "explanation": ["The length of the trail is constant across all users so it can't be a measure of an individual user's rating of a particular trail."]
          },
          {
            "option": ["The number of times the user hiked that trail"],
            "answer": true,
            "explanation": ["The decision to hike a trail can be reasonably interpreted as an implicit measure of user preference."]
          },
          {
            "option": ["The distance of the trail to the user's home."],
            "answer": false,
            "explanation": ["Distance to the trail better captured using a knowledge-based recommendation system."]
          },
          {
            "option": ["The number of times all users hiked that trail."],
            "answer": false,
            "explanation": ["The number of times all users hiked a trail would be a useful measure of objective or consensus quality but it would not be able to capture an individual users' preference."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "recommendation_systems_on_gcloud_2_1",
        "domain": [],
        "intro": [],
        "body": [
          "What are some potential techniques to determine how similar two items are?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Plot the two items in the embedding space and simply visually inspect to see how close they are on a graph by looking briefly."],
            "answer": false,
            "explanation": ["Visual inspection is great for quick decisions but is not rigorous enough or scalable for anything formal."]
          },
          {
            "option": ["Measure the cosine similarity between the two items in an embedding space."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Compare the norms (which are directionless) of the two items in an embedding space to see if they are similar."],
            "answer": false,
            "explanation": ["Because norms are directionless scalars, two vectors can have identical norms and sit in completely different parts of the vector space."]
          },
          {
            "option": ["Count how many features the two items have in common."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Compute the inner product between the two items in an embedding space."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "recommendation_systems_on_gcloud_2_2",
        "domain": [],
        "intro": [],
        "body": [
          "When building a content-based recommender system, it's important to express both your items and users using the same embedding space (that is. the same dimensions and features)."
        ],
        "open": false,
        "options": [
          {
            "option": ["True."],
            "answer": true,
            "explanation": ["We calculate our recommendation using the product of the user embedding and the item embedding, so it's critical that the dimensions of these two embeddings are the same."]
          },
          {
            "option": ["False"],
            "answer": false,
            "explanation": ["Think again about the computation we perform to generate predictions for a given user: we multiply a user-feature vector by an item-feature vector to get a prediction. In order for this multiplication to make sense, the shape of the vectors and the meaning of each dimension need to be the same."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "recommendation_systems_on_gcloud_3_1",
        "domain": [],
        "intro": [],
        "body": [
          "ALS and WALS create embedding tables for both users and items. Because these are held in memory, it's important to plan for their size. How big would you expect the embedding table for the users to be?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Proportional to the number of users squared."],
            "answer": false,
            "explanation": ["The embeddings table has a number of rows equal to the number of users and a number of columns equal to the embedding size, which is a hyper parameter. While the embedding size could theoretically be the same as the number of users, in practice, this number is never that big."]
          },
          {
            "option": ["Proportional to k, the number of dimensions in your embedding space."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Proportional to the number of users."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Proportional to the number of users multiplied by the number of items."],
            "answer": false,
            "explanation": ["The original sparse rating matrix has these dimensions, not the embeddings."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "recommendation_systems_on_gcloud_4_1",
        "domain": [],
        "intro": [],
        "body": [
          "You want to create a hybrid recommendation system to suggest music for new users on your music streaming app that just launched. New users are asked to rate a few bands they like. You have reliable data for artist name, song name, album name, etc. Each song is labeled for genre at a coarse level (rock, pop, etc.). Which component of your recommendation system will likely perform the best?"
        ],
        "open": false,
        "options": [
          {
            "option": ["The collaborative filtering component."],
            "answer": false,
            "explanation": ["The performance of the collaborative filtering component is determined by the density of the ratings matrix. Because our app just launched, and because explicit feedback is so rare, our collaborative filtering recommendations will likely be poor."]
          },
          {
            "option": ["The knowledge-based component."],
            "answer": true,
            "explanation": ["Because the user has entered some basic preferences, and because we have reliable metadata for each song, we can recommend songs with the same metadata or allow users to find such songs on their own."]
          },
          {
            "option": ["The content-based component."],
            "answer": false,
            "explanation": ["The performance of the content-based component is determined by the quality of the representations of the content. In this case, we know very little about each song. Our genre labels are coarse and we have no representations of the raw audio itself."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "recommendation_systems_on_gcloud_5_1",
        "domain": [],
        "intro": [],
        "body": [
          "In which of the following use cases is it recommended to go with a contextual bandit system?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Training two agents to cooperate with each other to win a multi-agent strategy game."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Forecasting demand for various products in a supermarket in a given time horizon."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Training a robot to walk."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Tailoring the results of a search engine to a specific user."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "recommendation_systems_on_gcloud_5_2",
        "domain": [],
        "intro": [],
        "body": [
          "You would like to train an agent to drive a car. The action space consists of the following variables: the acceleration (between 0 and 300), the angular degree of turn or tilt (between 0 and 180 degrees), and the direction (either forward or reverse). Select the three algorithms which are appropriate."
        ],
        "open": false,
        "options": [
          {
            "option": ["Deep Q Networks"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Proximal Policy Optimization (PPO)"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Deep deterministic policy gradient (DDPG)"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["REINFORCE"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "recommendation_systems_on_gcloud_5_3",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following would make for suitable good value functions?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Scenario: You have a tennis video game. The reward is the negated value of the final score."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Scenario: You want to train an agent to win a race. The reward is the total time taken to run the race."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Scenario: You have a movie recommender system. The reward is the count of clicks."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Scenario: You want to train an agent to win a race. The reward is the negative value of the total time taken to run the race."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "recommendation_systems_on_gcloud_5_4",
        "domain": [],
        "intro": [],
        "body": [
          "In which scenarios is reinforcement learning preferable over supervised learning?"
        ],
        "open": false,
        "options": [
          {
            "option": ["When you have optimization or control problems with scarce data points and trial and error is impossible."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["When you have predictive modeling problems with an offline static dataset."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["When you have optimization or control problems where simulation trial and error is possible."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["When you have predictive modeling with scarce data and a differentiable metric to be optimized."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "recommendation_systems_on_gcloud_5_5",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following is not a motivating rationale to use replay buffers?"
        ],
        "open": false,
        "options": [
          {
            "option": ["For achieving data efficiency."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["For de-correlating experience trajectories."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["For repeating rare experiences."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["To keep the model policy well aligned with the newest experience"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      }
    ],
    "ml_operations_mlops_getting_started": [
      {
        "id": "ml_operations_mlops_getting_started_1_1",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following steps is part of continuous integration and delivery (CI/CD) but not continuous training (CT)?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Measuring the model"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Retraining the model"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Building the model"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Monitoring the model"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_operations_mlops_getting_started_1_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following characteristics of delivering an ML model is considered as a characteristic of maturity level 0?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Manual, script-driven, and interactive process"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Feature store integration"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Pipeline continuous integration"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Source control automation"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_operations_mlops_getting_started_1_3",
        "domain": [],
        "intro": [],
        "body": [
          "What is the process of monitoring, measuring, retraining, and serving ML models automatically and continuously to adapt to changes in the data before they\u2019re redeployed?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Continuous training"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Continuous deployment"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Continuous integration"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Continuous delivery"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_operations_mlops_getting_started_1_4",
        "domain": [],
        "intro": [],
        "body": [
          "What is the important aspect of MLOps which differs from DevOps?"
        ],
        "open": false,
        "options": [
          {
            "option": ["MLOps constantly monitors, retrains, and serves the model."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["MLOps focuses on a single software package or service."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["MLOps deploys code and moves to another task."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["MLOps tests and validates only the code and components."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_operations_mlops_getting_started_2_1",
        "domain": [],
        "intro": [],
        "body": [
          "What is the MLOps life cycle iterative process that retrains your production models with the new data?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Predictive serving"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Continuous delivery"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Continuous training"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["ML development"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_operations_mlops_getting_started_2_2",
        "domain": [],
        "intro": [],
        "body": [
          "What component of an ML pipeline is responsible for deploying the model to any edge devices?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Analyze and transform"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Upload model and deploy endpoint"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Upload and track"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Evaluate"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "ml_operations_mlops_getting_started_2_3",
        "domain": [],
        "intro": [],
        "body": [
          "How does end-to-end MLOps help ML practitioners with the machine learning life cycle?"
        ],
        "open": false,
        "options": [
          {
            "option": ["End-to-end MLOps helps ML practitioners efficiently and responsibly manage, monitor, govern, and explain ML projects throughout the entire development lifecycle."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["End-to-end MLOps lets ML practitioners only perform exploratory data analysis (EDA) and prototyping."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["End-to-end MLOPs lets ML practitioners only monitor ML models."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["End-to-end MLOPs lets ML practitioners only train and tune ML models."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      }
    ]
  },
  "google_ml": {
    "google_ml_crash": [
      {
        "id": "google_ml_crash_framing_1",
        "domain": [],
        "intro": [],
        "body": [
          "Suppose you want to develop a supervised machine learning model to predict whether a given email is \"spam\" or \"not spam.\" Which of the following statements are true?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Emails not marked as \"spam\" or \"not spam\" are unlabeled examples."],
            "answer": true,
            "explanation": [
              "Because our label consists of the values \"spam\" and \"not spam\", any email not yet marked as spam or not spam is an unlabeled example."
            ]
          },
          {
            "option": ["Words in the subject header will make good labels."],
            "answer": false,
            "explanation": [
              "Words in the subject header might make excellent features, but they won't make good labels."
            ]
          },
          {
            "option": ["We'll use unlabeled examples to train the model."],
            "answer": false,
            "explanation": [
              "We'll use <b>labeled</b> examples to train the model. We can then run the trained model against unlabeled examples to infer whether the unlabeled email messages are spam or not spam."
            ]
          },
          {
            "option": ["The labels applied to some examples might be unreliable."],
            "answer": true,
            "explanation": [
              "Definitely. It's important to check how reliable your data is. The labels for this dataset probably come from email users who mark particular email messages as spam. Since most users do not mark every suspicious email message as spam, we may have trouble knowing whether an email is spam. Furthermore, spammers could intentionally poison our model by providing faulty labels."
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/framing/check-your-understanding"
        ],
        "date": "2022-07-18"
      },
      {
        "id": "google_ml_crash_framing_2",
        "domain": [],
        "intro": [],
        "body": [
          "Suppose an online shoe store wants to create a supervised ML model that will provide personalized shoe recommendations to users. That is, the model will recommend certain pairs of shoes to Marty and different pairs of shoes to Janet. The system will use past user behavior data to generate training data. Which of the following statements are true?"
        ],
        "open": false,
        "options": [
          {
            "option": ["\"Shoe size\" is a useful feature."],
            "answer": true,
            "explanation": [
              "\"Shoe size\" is a quantifiable signal that likely has a strong impact on whether the user will like the recommended shoes. For example, if Marty wears size 9, the model shouldn't recommend size 7 shoes."
            ]
          },
          {
            "option": ["\"Shoe beauty\" is a useful feature."],
            "answer": false,
            "explanation": [
              "Good features are concrete and quantifiable. Beauty is too vague a concept to serve as a useful feature. Beauty is probably a blend of certain concrete features, such as style and color. Style and color would each be better features than beauty."
            ]
          },
          {
            "option": ["\"The user clicked on the shoe's description\" is a useful label."],
            "answer": true,
            "explanation": [
              "Users probably only want to read more about those shoes that they like. Clicks by users is, therefore, an observable, quantifiable metric that could serve as a good training label. Since our training data derives from past user behavior, our labels need to derive from objective behaviors like clicks that strongly correlate with user preferences"
            ]
          },
          {
            "option": ["\"Shoes that a user adores\" is a useful label."],
            "answer": false,
            "explanation": [
              "Adoration is not an observable, quantifiable metric. The best we can do is search for observable proxy metrics for adoration."
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/framing/check-your-understanding"
        ],
        "date": "2022-07-18"
      },
      {
        "id": "google_ml_crash_descending_1",
        "domain": [],
        "intro": ["<table> <tr> <td> <img src=\"images/MCEDescendingIntoMLLeft.png\" alt=\"A plot of 10 points. A line runs through 6 of the points. 2 points are 1 \"unit\" above the line; 2 other points are 1 \"unit\" below the line.\"></td> <td> <img src=\"images/MCEDescendingIntoMLRight.png\" alt=\"A plot of 10 points. A line runs through 8 of the points. 1 point is 2 \"units\" above the line; 1 other point is 2 \"units\" below the line.\" < td> </tr> </table>"],
        "body": [
          "Which of the two data sets shown in the preceding plots has the <b>higher</b> Mean Squared Error (MSE)?"
        ],
        "open": false,
        "options": [
          {
            "option": ["The dataset on the left."],
            "answer": false,
            "explanation": [
              "The six examples on the line incur a total loss of 0. The four examples not on the line are not very far off the line, so even squaring their offset still yields a low value: $$ MSE = \\frac{0^2 + 1^2 + 0^2 + 1^2 + 0^2 + 1^2 + 0^2 + 1^2 + 0^2 + 0^2} {10} = 0.4$$"
            ]
          },
          {
            "option": ["The dataset on the right."],
            "answer": true,
            "explanation": [
              "The eight examples on the line incur a total loss of 0. However, although only two points lay off the line, both of those points are <i>twice</i> as far off the line as the outlier points in the left figure. Squared loss amplifies those differences, so an offset of two incurs a loss four times as great as an offset of one. $$ MSE = \\frac{0^2 + 0^2 + 0^2 + 2^2 + 0^2 + 0^2 + 0^2 + 2^2 + 0^2 + 0^2} {10} = 0.8$$"
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/descending-into-ml/check-your-understanding"
        ],
        "date": "2022-07-18"
      },
      {
        "id": "google_ml_crash_reducing_1",
        "domain": [],
        "intro": [],
        "body": [
          "When performing gradient descent on a large data set, which of the following batch sizes will likely be more efficient?"
        ],
        "open": false,
        "options": [
          {
            "option": ["The full batch."],
            "answer": false,
            "explanation": [
              "Computing the gradient from a full batch is inefficient. That is, the gradient can usually be computed far more efficiently (and just as accurately) from a smaller batch than from a vastly bigger full batch."
            ]
          },
          {
            "option": ["A small batch or even a batch of one example (SGD)."],
            "answer": true,
            "explanation": [
              "Amazingly enough, performing gradient descent on a small batch or even a batch of one example is usually more efficient than the full batch. After all, finding the gradient of one example is far cheaper than finding the gradient of millions of examples. To ensure a good representative sample, the algorithm scoops up another random small batch (or batch of one) on every iteration."
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/reducing-loss/check-your-understanding"
        ],
        "date": "2022-07-18"
      },
      {
        "id": "google_ml_crash_validation_1",
        "domain": [],
        "intro": [],
        "body": [
          "We looked at a process of using a test set and a training set to drive iterations of model development. On each iteration, we'd train on the training data and evaluate on the test data, using the evaluation results on test data to guide choices of and changes to various model hyperparameters like learning rate and features. Is there anything wrong with this approach?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Totally fine, we're training on training data and evaluating on separate, held-out test data."],
            "answer": false,
            "explanation": [
              "Actually, there's a subtle issue here. Think about what might happen if we did many, many iterations of this form."
            ]
          },
          {
            "option": ["Doing many rounds of this procedure might cause us to implicitly fit to the peculiarities of our specific test set."],
            "answer": true,
            "explanation": [
              "Yes indeed! The more often we evaluate on a given test set, the more we are at risk for implicitly overfitting to that one test set."
            ]
          },
          {
            "option": ["This is computationally inefficient. We should just pick a default set of hyperparameters and live with them to save resources."],
            "answer": false,
            "explanation": [
              "Although these sorts of iterations are expensive, they are a critical part of model development. Hyperparameter settings can make an enormous difference in model quality, and we should always budget some amount of time and computational resources to ensure we're getting the best quality we can."
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/validation/check-your-intuition"
        ],
        "date": "2022-07-18"
      },
      {
        "id": "google_ml_crash_feature_1",
        "domain": [],
        "intro": [],
        "body": [
          "Different cities in California have markedly different <a href=\"https://developers.google.com/machine-learning/crash-course/california-housing-data-description\">housing prices</a>. Suppose you must create a model to predict housing prices. Which of the following sets of features or feature crosses could learn <i>city-specific</i> relationships between <code translate=\"no\" dir=\"ltr\">roomsPerPerson</code> and housing price?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Three separate binned features: <tt>[binned latitude], [binned longitude], [binned roomsPerPerson]</tt>"],
            "answer": false,
            "explanation": [
              "Binning is good because it enables the model to learn nonlinear relationships within a single feature. However, a city exists in more than one dimension, so learning city-specific relationships requires crossing latitude and longitude."
            ]
          },
          {
            "option": ["One feature cross: <tt> [latitude X longitude X roomsPerPerson]</tt>"],
            "answer": false,
            "explanation": [
              "In this example, crossing real-valued features is not a good idea. Crossing the real value of, say, latitude with roomsPerPerson enables a 10% change in one feature (say, latitude) to be equivalent to a 10% change in the other feature (say, roomsPerPerson)."
            ]
          },
          {
            "option": ["One feature cross: <tt>[binned latitude X binned longitude X binned roomsPerPerson]</tt>"],
            "answer": true,
            "explanation": [
              "Crossing binned latitude with binned longitude enables the model to learn city-specific effects of roomsPerPerson. Binning prevents a change in latitude producing the same result as a change in longitude. Depending on the granularity of the bins, this feature cross could learn city-specific or neighborhood-specific or even block-specific effects."
            ]
          },
          {
            "option": ["Two feature crosses: <tt>[binned latitude X binned roomsPerPerson] </tt> and <tt>[binned longitude X binned roomsPerPerson]</tt>"],
            "answer": false,
            "explanation": [
              "Binning is a good idea; however, a city is the conjunction of latitude and longitude, so separate feature crosses prevent the model from learning city-specific prices."
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/feature-crosses/check-your-understanding"
        ],
        "date": "2022-07-18"
      },
      {
        "id": "google_ml_crash_regularization_simplicity_1",
        "domain": [],
        "intro": [],
        "body": [
          "Imagine a linear model with 100 input features: <li> 10 are highly informative.</li> <li> 90 are non-informative.</li> Assume that all features have values between -1 and 1. Which of the following statements are true?"
        ],
        "open": false,
        "options": [
          {
            "option": ["L<sub>2</sub> regularization will encourage many of the non-informative weights to be nearly (but not exactly) 0.0. </div> <div> Yes, L<sub>2</sub> regularization encourages weights to be near 0.0, but not exactly 0.0."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["L<sub>2</sub> regularization will encourage most of the non-informative weights to be exactly 0.0."],
            "answer": false,
            "explanation": [
              "L<sub>2</sub> regularization does not tend to force weights to exactly 0.0. L<sub>2</sub> regularization penalizes larger weights more than smaller weights. As a weight gets close to 0.0, L<sub>2</sub> \"pushes\" less forcefully toward 0.0."
            ]
          },
          {
            "option": ["L<sub>2</sub> regularization may cause the model to learn a moderate weight for some <b>non-informative</b> features."],
            "answer": true,
            "explanation": [
              "Surprisingly, this can happen when a non-informative feature happens to be correlated with the label. In this case, the model incorrectly gives such non-informative features some of the \"credit\" that should have gone to informative features."
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/regularization-for-simplicity/check-your-understanding"
        ],
        "date": "2022-07-18"
      },
      {
        "id": "google_ml_crash_regularization_simplicity_2",
        "domain": [],
        "intro": [],
        "body": [
          "Imagine a linear model with two strongly correlated features; that is, these two features are nearly identical copies of one another but one feature contains a small amount of random noise. If we train this model with L<sub>2</sub> regularization, what will happen to the weights for these two features?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Both features will have roughly equal, moderate weights."],
            "answer": true,
            "explanation": [
              "L<sub>2</sub> regularization will force the features towards roughly equivalent weights that are approximately half of what they would have been had only one of the two features been in the model."
            ]
          },
          {
            "option": ["One feature will have a large weight; the other will have a weight of <strong>almost</strong> 0.0."],
            "answer": false,
            "explanation": [
              "L<sub>2</sub> regularization penalizes large weights more than small weights. So, even if one weight started to drop faster than the other, L<sub>2</sub> regularization would tend to force the bigger weight to drop more quickly than the smaller weight."
            ]
          },
          {
            "option": ["One feature will have a large weight; the other will have a weight of <strong>exactly</strong> 0.0."],
            "answer": false,
            "explanation": [
              "L<sub>2</sub> regularization rarely forces weights to exactly 0.0. By contrast, L<sub>1</sub> regularization <i>does</i> force weights to exactly 0.0."
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/regularization-for-simplicity/check-your-understanding"
        ],
        "date": "2022-07-18"
      },
      {
        "id": "google_ml_crash_classification1_1",
        "domain": [],
        "intro": [],
        "body": [
          "In which of the following scenarios would a high accuracy value suggest that the ML model is doing a good job?"
        ],
        "open": false,
        "options": [
          {
            "option": ["A deadly, but curable, medical condition afflicts .01% of the population. An ML model uses symptoms as features and predicts this affliction with an accuracy of 99.99%."],
            "answer": false,
            "explanation": [
              "Accuracy is a poor metric here. After all, even a \"dumb\" model that always predicts \"not sick\" would still be 99.99% accurate. Mistakenly predicting \"not sick\" for a person who actually is sick could be deadly."
            ]
          },
          {
            "option": ["An expensive robotic chicken crosses a very busy road a thousand times per day. An ML model evaluates traffic patterns and predicts when this chicken can safely cross the street with an accuracy of 99.99%."],
            "answer": false,
            "explanation": [
              "A 99.99% accuracy value on a very busy road strongly suggests that the ML model is far better than chance. In some settings, however, the cost of making even a small number of mistakes is still too high. 99.99% accuracy means that the expensive chicken will need to be replaced, on average, every 10 days. (The chicken might also cause extensive damage to cars that it hits.)"
            ]
          },
          {
            "option": ["In the game of roulette, a ball is dropped on a spinning wheel and eventually lands in one of 38 slots. Using visual features (the spin of the ball, the position of the wheel when the ball was dropped, the height of the ball over the wheel), an ML model can predict the slot that the ball will land in with an accuracy of 4%."],
            "answer": true,
            "explanation": [
              "This ML model is making predictions far better than chance; a random guess would be correct 1/38 of the time—yielding an accuracy of 2.6%. Although the model's accuracy is \"only\" 4%, the benefits of success far outweigh the disadvantages of failure."
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/classification/check-your-understanding-accuracy-precision-recall"
        ],
        "date": "2022-07-18"
      },
      {
        "id": "google_ml_crash_classification1_2",
        "domain": [],
        "intro": [],
        "body": [
          "Consider a classification model that separates email into two categories: \"spam\" or \"not spam.\" If you raise the classification threshold, what will happen to precision?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Definitely increase."],
            "answer": false,
            "explanation": [
              "Raising the classification threshold typically increases precision; however, precision is not guaranteed to increase monotonically as we raise the threshold."
            ]
          },
          {
            "option": ["Probably increase."],
            "answer": true,
            "explanation": [
              "In general, raising the classification threshold reduces false positives, thus raising precision."
            ]
          },
          {
            "option": ["Probably decrease."],
            "answer": false,
            "explanation": [
              "In general, raising the classification threshold reduces false positives, thus raising precision."
            ]
          },
          {
            "option": ["Definitely decrease."],
            "answer": false,
            "explanation": [
              "In general, raising the classification threshold reduces false positives, thus raising precision."
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/classification/check-your-understanding-accuracy-precision-recall"
        ],
        "date": "2022-07-18"
      },
      {
        "id": "google_ml_crash_classification1_3",
        "domain": [],
        "intro": [],
        "body": [
          "Consider a classification model that separates email into two categories: \"spam\" or \"not spam.\" If you raise the classification threshold, what will happen to recall?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Always increase."],
            "answer": false,
            "explanation": [
              "Raising the classification threshold will cause both of the following: <ul> <li>The number of true positives will decrease or stay the same.</li> <li>The number of false negatives will increase or stay the same.</li> </ul> Thus, recall will never increase."
            ]
          },
          {
            "option": ["Always decrease or stay the same."],
            "answer": true,
            "explanation": [
              "Raising our classification threshold will cause the number of true positives to decrease or stay the same and will cause the number of false negatives to increase or stay the same. Thus, recall will either stay constant or decrease."
            ]
          },
          {
            "option": ["Always stay constant."],
            "answer": false,
            "explanation": [
              "Raising our classification threshold will cause the number of true positives to decrease or stay the same and will cause the number of false negatives to increase or stay the same. Thus, recall will either stay constant or decrease."
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/classification/check-your-understanding-accuracy-precision-recall"
        ],
        "date": "2022-07-18"
      },
      {
        "id": "google_ml_crash_classification1_4",
        "domain": [],
        "intro": [],
        "body": [
          "Consider two models—A and B—that each evaluate the same dataset. Which one of the following statements is true?"
        ],
        "open": false,
        "options": [
          {
            "option": ["If Model A has better precision than model B, then model A is better."],
            "answer": false,
            "explanation": [
              "While better precision is good, it might be coming at the expense of a large reduction in recall. In general, we need to look at both precision and recall together, or summary metrics like AUC which we'll talk about next."
            ]
          },
          {
            "option": ["If model A has better recall than model B, then model A is better."],
            "answer": false,
            "explanation": [
              "While better recall is good, it might be coming at the expense of a large reduction in precision. In general, we need to look at both precision and recall together, or summary metrics like AUC, which we'll talk about next."
            ]
          },
          {
            "option": ["If model A has better precision and better recall than model B, then model A is probably better."],
            "answer": true,
            "explanation": [
              "In general, a model that outperforms another model on both precision and recall is likely the better model. Obviously, we'll need to make sure that comparison is being done at a precision / recall point that is useful in practice for this to be meaningful. For example, suppose our spam detection model needs to have at least 90% precision to be useful and avoid unnecessary false alarms. In this case, comparing one model at {20% precision, 99% recall} to another at {15% precision, 98% recall} is not particularly instructive, as neither model meets the 90% precision requirement. But with that caveat in mind, this is a good way to think about comparing models when using precision and recall."
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/classification/check-your-understanding-accuracy-precision-recall"
        ],
        "date": "2022-07-18"
      },
      {
        "id": "google_ml_crash_classification2_1",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following ROC curves produce AUC values greater than 0.5?"
        ],
        "open": false,
        "options": [
          {
            "option": ["<figure> <img alt=\"An ROC curve with a vertical line running from (0,0) to (0,1), and a horizontal from (0,1) to (1,1). The TP rate is 1.0 for all FP rates.\" src=\"images/mc_roc1.svg\"> </figure>"],
            "answer": true,
            "explanation": [
              "<p>This is the best possible ROC curve, as it ranks all positives above all negatives. It has an AUC of 1.0.</p> <p class=\"note\">In practice, if you have a \"perfect\" classifier with an AUC of 1.0, you should be suspicious, as it likely indicates a bug in your model. For example, you may have overfit to your training data, or the label data may be replicated in one of your features.</p>"
            ]
          },
          {
            "option": ["<figure> <img alt=\"An ROC curve with a horizontal line running from (0,0) to (1,0), and a vertical line from (1,0) to (1,1). The FP rate is 1.0 for all TP rates\" src=\"images/mc_roc2.svg\"> </figure>"],
            "answer": false,
            "explanation": [
              "This is the worst possible ROC curve; it ranks all negatives above all positives, and has an AUC of 0.0. If you were to reverse every prediction (flip negatives to positives and positives to negatives), you'd actually have a perfect classifier!"
            ]
          },
          {
            "option": ["<figure> <img alt=\"An ROC curve with one diagonal line running from (0,0) to (1,1). TP and FP rates increase linearly at the same rate.\" src=\"images/mc_roc3.svg\"> </figure>"],
            "answer": false,
            "explanation": [
              "This ROC curve has an AUC of 0.5, meaning it ranks a random positive example higher than a random negative example 50% of the time. As such, the corresponding classification model is basically worthless, as its predictive ability is no better than random guessing."
            ]
          },
          {
            "option": ["<figure> <img alt=\"An ROC curve that arcs up and right from (0,0) to (1,1). TP rate increases at a faster rate than FP rate.\" src=\"images/mc_roc4.svg\"> </figure>"],
            "answer": true,
            "explanation": [
              "This ROC curve has an AUC between 0.5 and 1.0, meaning it ranks a random positive example higher than a random negative example more than 50% of the time. Real-world binary classification AUC values generally fall into this range."
            ]
          },
          {
            "option": ["<figure> <img alt=\"An ROC curve that arcs right and up from (0,0) to (1,1). FP rate increases at a faster rate than TP rate.\" src=\"images/mc_roc5.svg\"> </figure>"],
            "answer": false,
            "explanation": [
              "This ROC curve has an AUC between 0 and 0.5, meaning it ranks a random positive example higher than a random negative example less than 50% of the time. The corresponding model actually performs worse than random guessing! If you see an ROC curve like this, it likely indicates there's a bug in your data."
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/classification/check-your-understanding-roc-and-auc"
        ],
        "date": "2022-07-18"
      },
      {
        "id": "google_ml_crash_classification2_2",
        "domain": [],
        "intro": [],
        "body": [
          "How would multiplying all of the predictions from a given model by 2.0 (for example, if the model predicts 0.4, we multiply by 2.0 to get a prediction of 0.8) change the model's performance as measured by AUC?"
        ],
        "open": false,
        "options": [
          {
            "option": ["No change. AUC only cares about relative prediction scores."],
            "answer": true,
            "explanation": [
              "Yes, AUC is based on the relative predictions, so any transformation of the predictions that preserves the relative ranking has no effect on AUC. This is clearly not the case for other metrics such as squared error, log loss, or prediction bias."
            ]
          },
          {
            "option": ["It would make AUC terrible, since the prediction values are now way off."],
            "answer": false,
            "explanation": [
              "Interestingly enough, even though the prediction values are different (and likely farther from the truth), multiplying them all by 2.0 would keep the relative ordering of prediction values the same. Since AUC only cares about relative rankings, it is not impacted by any simple scaling of the predictions."
            ]
          },
          {
            "option": ["It would make AUC better, because the prediction values are all farther apart."],
            "answer": false,
            "explanation": [
              "The amount of spread between predictions does not actually impact AUC. Even a prediction score for a randomly drawn true positive is only a tiny epsilon greater than a randomly drawn negative, that will count that as a success contributing to the overall AUC score."
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/classification/check-your-understanding-roc-and-auc"
        ],
        "date": "2022-07-18"
      },
      {
        "id": "google_ml_crash_regularization_sparsity_1",
        "domain": [],
        "intro": [],
        "body": [
          "Imagine a linear model with 100 input features: <li> 10 are highly informative.</li> <li> 90 are non-informative.</li> Assume that all features have values between -1 and 1. Which of the following statements are true?"
        ],
        "open": false,
        "options": [
          {
            "option": ["L1 regularization will encourage many of the non-informative weights to be nearly (but not exactly) 0.0."],
            "answer": false,
            "explanation": [
              "In general, L1 regularization of sufficient lambda tends to encourage non-informative features to weights of exactly 0.0. Unlike L2 regularization, L1 regularization \"pushes\" just as hard toward 0.0 no matter how far the weight is from 0.0."
            ]
          },
          {
            "option": ["L1 regularization will encourage most of the non-informative weights to be exactly 0.0."],
            "answer": true,
            "explanation": [
              "L1 regularization of sufficient lambda tends to encourage non-informative weights to become exactly 0.0. By doing so, these non-informative features leave the model."
            ]
          },
          {
            "option": ["L1 regularization may cause informative features to get a weight of exactly 0.0."],
            "answer": true,
            "explanation": [
              "Be careful--L1 regularization may cause the following kinds of features to be given weights of exactly 0: <li>Weakly informative features.</li> <li>Strongly informative features on different scales. </li> <li>Informative features strongly correlated with other similarly informative features.</li>"
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/regularization-for-sparsity/l1-regularization",
          "https://developers.google.com/machine-learning/crash-course/regularization-for-sparsity/check-your-understanding"
        ],
        "date": "2022-07-18"
      },
      {
        "id": "google_ml_crash_regularization_sparsity_2",
        "domain": [],
        "intro": [],
        "body": [
          "Imagine a linear model with 100 input features, all having values between -1 and 1: <li>10 are highly informative.</li> <li>90 are non-informative.</li> Which type of regularization will produce the smaller model?"
        ],
        "open": false,
        "options": [
          {
            "option": ["L<sub>2</sub> regularization."],
            "answer": false,
            "explanation": [
              "L<sub>2</sub> regularization rarely reduces the number of features. In other words, L<sub>2</sub> regularization rarely reduces the model size."
            ]
          },
          {
            "option": ["L<sub>1</sub> regularization."],
            "answer": true,
            "explanation": [
              "L<sub>1</sub> regularization tends to reduce the number of features. In other words, L<sub>1</sub> regularization often reduces the model size."
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/regularization-for-sparsity/check-your-understanding"
        ],
        "date": "2022-07-18"
      },
      {
        "id": "google_ml_crash_static_dynamic_training_1",
        "domain": [],
        "intro": [],
        "body": [
          "Which one of the following statements is true of dynamic (online) training?"
        ],
        "open": false,
        "options": [
          {
            "option": ["The model stays up to date as new data arrives."],
            "answer": true,
            "explanation": [
              "This is the primary benefit of online training—we can avoid many staleness issues by allowing the model to train on new data as it comes in."
            ]
          },
          {
            "option": ["Very little monitoring of training jobs needs to be done."],
            "answer": false,
            "explanation": [
              "Actually, you must continuously monitor training jobs to ensure that they are healthy and working as intended. You'll also need supporting infrastructure like the ability to roll a model back to a previous snapshot in case something goes wrong in training, such as a buggy job or corruption in input data."
            ]
          },
          {
            "option": ["Very little monitoring of input data needs to be done at inference time."],
            "answer": false,
            "explanation": [
              "Just like a static, offline model, it is also important to monitor the inputs to the dynamically updated models. We are likely not at risk for large seasonality effects, but sudden, large changes to inputs (such as an upstream data source going down) can still cause unreliable predictions."
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/static-vs-dynamic-training/check-your-understanding"
        ],
        "date": "2022-07-18"
      },
      {
        "id": "google_ml_crash_static_dynamic_training_2",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following statements are true about static (offline) training?"
        ],
        "open": false,
        "options": [
          {
            "option": ["The model stays up to date as new data arrives."],
            "answer": false,
            "explanation": [
              "Actually, if we train offline, then the model has no way to incorporate new data as it arrives. This can lead to model staleness, if the distribution we are trying to learn from changes over time."
            ]
          },
          {
            "option": ["You can verify the model before applying it in production."],
            "answer": true,
            "explanation": [
              "Yes, offline training gives ample opportunity to verify model performance before introducing the model in production."
            ]
          },
          {
            "option": ["Offline training requires less monitoring of training jobs than online training."],
            "answer": true,
            "explanation": [
              "In general, monitoring requirements at training time are more modest for offline training, which insulates us from many production considerations. However, the more frequently you train your model, the higher the investment you'll need to make in monitoring. You'll also want to validate regularly to ensure that changes to your code (and its dependencies) don't adversely affect model quality."
            ]
          },
          {
            "option": ["Very little monitoring of input data needs to be done at inference time."],
            "answer": false,
            "explanation": [
              "Counterintuitively, you do need to monitor input data at serving time. If the input distributions change, then our model's predictions may become unreliable. Imagine, for example, a model trained only on summertime clothing data suddenly being used to predict clothing buying behavior in wintertime."
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/static-vs-dynamic-training/check-your-understanding"
        ],
        "date": "2022-07-18"
      },
      {
        "id": "google_ml_crash_static_dynamic_inference_1",
        "domain": [],
        "intro": [],
        "body": [
          "In offline inference, we make predictions on a big batch of data all at once. We then put those predictions in a look-up table for later use. Which of the following are true of offline inference?"
        ],
        "open": false,
        "options": [
          {
            "option": ["We must create predictions for all possible inputs."],
            "answer": true,
            "explanation": [
              "Yes, we will have to make predictions for all possible inputs and store them into a cache or lookup table to use offline inference. This is one of the drawbacks of offline inference. We will only be able to serve a prediction for those examples that we already know about. This is fine if the set of things that we're predicting is limited, like all world cities or all items in a database table. But for freeform inputs like user queries that have a long tail of unusual or rare items, we would not be able to provide full coverage with an offline-inference system."
            ]
          },
          {
            "option": ["After generating the predictions, we can verify them before applying them."],
            "answer": true,
            "explanation": [
              "This is indeed one useful thing about offline inference. We can sanity check and verify all of our predictions before they are used."
            ]
          },
          {
            "option": ["For a given input, we can serve a prediction more quickly than with <i>online</i> inference."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["We will need to carefully monitor our input signals over a long period of time."],
            "answer": false,
            "explanation": [
              "This is the one case where we don't actually need to monitor input signals over a long period of time. This is because once the predictions have been written to a look-up table, we're no longer dependent on the input features. Note that any subsequent update of the model will require a new round of input verification."
            ]
          },
          {
            "option": ["We will be able to react quickly to changes in the world."],
            "answer": false,
            "explanation": [
              "No, this is a drawback of offline inference. We'll need to wait until a new set of predictions have been written to the look-up table before we can respond differently based on any changes in the world."
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/static-vs-dynamic-inference/check-your-understanding"
        ],
        "date": "2022-08-02"
      },
      {
        "id": "google_ml_crash_static_dynamic_inference_2",
        "domain": [],
        "intro": [],
        "body": [
          "Dynamic (online) inference means making predictions on demand. That is, in online inference, we put the trained model on a server and issue inference requests as needed. Which of the following are true of dynamic inference?"
        ],
        "open": false,
        "options": [
          {
            "option": ["You can provide predictions for all possible items."],
            "answer": true,
            "explanation": [
              "Yes, this is a strength of online inference. Any request that comes in will be given a score. Online inference handles long-tail distributions (those with many rare items), like the space of all possible sentences written in movie reviews."
            ]
          },
          {
            "option": ["You can do post-verification of predictions before they are used."],
            "answer": false,
            "explanation": [
              "In general, it's not possible to do a post-verification of all predictions before they get used because predictions are being made on demand. You can, however, potentially monitor <i>aggregate</i> prediction qualities to provide some level of sanity checking, but these will signal fire alarms only after the fire has already spread."
            ]
          },
          {
            "option": ["You must carefully monitor input signals."],
            "answer": true,
            "explanation": [
              "Yes. Signals could change suddenly due to upstream issues, harming our predictions."
            ]
          },
          {
            "option": ["When performing online inference, you do not need to worry about prediction latency (the lag time for returning predictions) as much as when performing offline inference."],
            "answer": false,
            "explanation": [
              "Prediction latency is often a real concern in online inference. Unfortunately, you can't necessarily fix prediction latency issues by adding more inference servers."
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/static-vs-dynamic-inference/check-your-understanding"
        ],
        "date": "2022-08-02"
      },
      {
        "id": "google_ml_crash_data_1",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following models are susceptible to a feedback loop?"
        ],
        "open": false,
        "options": [
          {
            "option": ["A traffic-forecasting model that predicts congestion at highway exits near the beach, using beach crowd size as one of its features."],
            "answer": true,
            "explanation": [
              "Some beachgoers are likely to base their plans on the traffic forecast. If there is a large beach crowd and traffic is forecast to be heavy, many people may make alternative plans. This may depress beach turnout, resulting in a lighter traffic forecast, which then may increase attendance, and the cycle repeats."
            ]
          },
          {
            "option": ["A book-recommendation model that suggests novels its users may like based on their popularity (i.e., the number of times the books have been purchased)."],
            "answer": true,
            "explanation": [
              "Book recommendations are likely to drive purchases, and these additional sales will be fed back into the model as input, making it more likely to recommend these same books in the future."
            ]
          },
          {
            "option": ["A university-ranking model that rates schools in part by their selectivity—the percentage of students who applied that were admitted."],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["An election-results model that forecasts the winner of a mayoral race by surveying 2% of voters after the polls have closed."],
            "answer": false,
            "explanation": [
              "If the model does not publish its forecast until after the polls have closed, it is not possible for its predictions to affect voter behavior."
            ]
          },
          {
            "option": ["A housing-value model that predicts house prices, using size (area in square meters), number of bedrooms, and geographic location as features."],
            "answer": false,
            "explanation": [
              "It is not possible to quickly change a house's location, size, or number of bedrooms in response to price forecasts, making a feedback loop unlikely. However, there is potentially a correlation between size and number of bedrooms (larger homes are likely to have more rooms) that may need to be teased apart."
            ]
          },
          {
            "option": ["A face-attributes model that detects whether a person is smiling in a photo, which is regularly trained on a database of stock photography that is automatically updated monthly."],
            "answer": false,
            "explanation": [
              "There is no feedback loop here, as model predictions don't have any impact on our photo database. However, versioning of our input data is a concern here, as these monthly updates could potentially have unforeseen effects on the model."
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/data-dependencies/check-your-understanding"
        ],
        "date": "2022-07-18"
      },
      {
        "id": "google_ml_crash_fairness_1",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following model's predictions have been affected by selection bias?"
        ],
        "open": false,
        "options": [
          {
            "option": ["A German handwriting recognition smartphone app uses a model that frequently incorrectly classifies <a href=\"https://wikipedia.org/wiki/%C3%9F\">ß</a> (Eszett) characters as <a href=\"https://wikipedia.org/wiki/B\">B</a> characters, because it was trained on a corpus of American handwriting samples, mostly written in English."],
            "answer": true,
            "explanation": [
              "This model was affected by a type of selection bias called <strong>coverage bias</strong>: the training data (American English handwriting) was not representative of the type of data provided by the model's target audience (German handwriting)."
            ]
          },
          {
            "option": ["Engineers built a model to predict the likelihood of a person developing diabetes based on their daily food intake. The model was trained on 10,000 \"food diaries\" collected from a randomly chosen group of people worldwide representing a variety of different age groups, ethnic backgrounds, and genders. However, when the model was deployed, it had very poor accuracy. Engineers subsequently discovered that food diary participants were reluctant to admit the true volume of unhealthy foods they ate, and were more likely to document consumption of nutritious food than less healthy snacks."],
            "answer": false,
            "explanation": [
              "There is no selection bias in this model; participants who provided training data were a representative sampling of users and were chosen randomly. Instead, this model was affected by <strong>reporting bias</strong>. Ingestion of unhealthy foods was reported at a much lower frequency than true real-world occurrence."
            ]
          },
          {
            "option": ["Engineers at a company developed a model to predict staff turnover rates (the percentage of employees quitting their jobs each year) based on data collected from a survey sent to all employees. After several years of use, engineers determined that the model underestimated turnover by more than 20%. When conducting exit interviews with employees leaving the company, they learned that more than 80% of people who were dissatisfied with their jobs chose not to complete the survey, compared to a company-wide opt-out rate of 15%."],
            "answer": true,
            "explanation": [
              "This model was affected by a type of selection bias called <strong>non-response bias</strong>. People who were dissatisfied with their jobs were underrepresented in the training data set because they opted out of the company-wide survey at much higher rates than the entire employee population."
            ]
          },
          {
            "option": ["Engineers developing a movie-recommendation system hypothesized that people who like horror movies will also like science-fiction movies. When they trained a model on 50,000 users' watchlists, however, it showed no such correlation between preferences for horror and for sci-fi; instead it showed a strong correlation between preferences for horror and for documentaries. This seemed odd to them, so they retrained the model five more times using different hyperparameters. Their final trained model showed a 70% correlation between preferences for horror and for sci-fi, so they confidently released it into production."],
            "answer": false,
            "explanation": [
              "There is no evidence of selection bias, but this model may have instead been affected by <strong>experimenter's bias</strong>, as the engineers kept iterating on their model until it confirmed their preexisting hypothesis."
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/fairness/check-your-understanding"
        ],
        "date": "2022-07-18"
      },
      {
        "id": "google_ml_crash_fairness_2",
        "domain": [],
        "intro": ["<p>A <a href=\"https://wikipedia.org/wiki/Sarcasm\">sarcasm</a>-detection model was trained on 80,000 text messages: 40,000 messages sent by adults (18 years and older) and 40,000 messages sent by minors (less than 18 years old). The model was then evaluated on a test set of 20,000 messages: 10,000 from adults and 10,000 from minors. The following confusion matrices show the results for each group (a positive prediction signifies a classification of \"sarcastic\"; a negative prediction signifies a classification of \"not sarcastic\"):</p> <div> <div style=\"display: inline-block; width: 45%; margin: 10px\"> <h4 style=\"text-align: center\" id=\"adults\" data-text=\"Adults\">Adults</h4> <table border=\"1\"> <tr> <td class=\"mlcc-good\"> <b>True Positives (TPs): 512</b> </td> <td class=\"mlcc-bad\"> <b>False Positives (FPs): 51</b> </td> </tr> <tr> <td class=\"mlcc-bad\"> <b>False Negatives (FNs): 36</b> </td> <td class=\"mlcc-good\"> <b>True Negatives (TNs): 9401</b> </td> </tr> <tr> <td colspan=\"2\"> $$\\text{Precision} = \\frac{TP}{TP+FP} = 0.909$$ </td> </tr> <tr> <td colspan=\"2\"> $$\\text{Recall} = \\frac{TP}{TP+FN} = 0.934$$ </td> </tr> </table> </div> <div style=\"float: right; width: 45%; display: inline-block; margin: 10px;\"> <h4 style=\"text-align: center\" id=\"minors\" data-text=\"Minors\">Minors</h4> <table border=\"1\"> <tr> <td class=\"mlcc-good\"> <b>True Positives (TPs): 2147</b> </td> <td class=\"mlcc-bad\"> <b>False Positives (FPs): 96</b> </td> </tr> <tr> <td class=\"mlcc-bad\"> <b>False Negatives (FNs): 2177</b> </td> <td class=\"mlcc-good\"> <b>True Negatives (TNs): 5580</b> </td> </tr> <tr> <td colspan=\"2\"> $$\\text{Precision} = \\frac{TP}{TP+FP} = 0.957$$ </td> </tr> <tr> <td colspan=\"2\"> $$\\text{Recall} = \\frac{TP}{TP+FN} = 0.497$$ </td> </tr> </table> </div> </div>"],
        "body": [
          "Which of the following statements about the model's test-set performance are true?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Overall, the model performs better on examples from adults than on examples from minors."],
            "answer": true,
            "explanation": [
              "The model achieves both precision and recall rates over 90% when detecting sarcasm in text messages from adults.</p> <p>While the model achieves a slightly higher precision rate for minors than adults, the recall rate is substantially lower for minors, resulting in less reliable predictions for this group."
            ]
          },
          {
            "option": ["The model fails to classify approximately 50% of minors' sarcastic messages as \"sarcastic.\""],
            "answer": true,
            "explanation": [
              "The recall rate of 0.497 for minors indicates that the model predicts \"not sarcastic\" for approximately 50% of minors' sarcastic texts."
            ]
          },
          {
            "option": ["Approximately 50% of messages sent by minors are classified as \"sarcastic\" incorrectly."],
            "answer": false,
            "explanation": [
              "The precision rate of 0.957 indicates that over 95% of minors' messages classified as \"sarcastic\" are actually sarcastic."
            ]
          },
          {
            "option": ["The 10,000 messages sent by adults are a <a target=\"G\" href=\"https://developers.google.com/machine-learning/glossary#class_imbalanced_data_set\"> class-imbalanced</a> dataset."],
            "answer": true,
            "explanation": [
              "If we compare the number of messages from adults that are actually sarcastic (TP+FN = 548) with the number of messages that are actually not sarcastic (TN + FP = 9452), we see that \"not sarcastic\" labels outnumber \"sarcastic\" labels by a ratio of approximately 17:1."
            ]
          },
          {
            "option": ["The 10,000 messages sent by minors are a <a target=\"G\" href=\"https://developers.google.com/machine-learning/glossary#class_imbalanced_data_set\"> class-imbalanced</a> dataset."],
            "answer": false,
            "explanation": [
              "If we compare the number of messages from minors that are actually sarcastic (TP+FN = 4324) with the number of messages that are actually not sarcastic (TN + FP = 5676), we see that there is a 1.3:1 ratio of \"not sarcastic\" labels to \"sarcastic\" labels. Given that the distribution of labels between the two classes is quite close to 50/50, this is not a class-imbalanced dataset."
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/fairness/check-your-understanding"
        ],
        "date": "2022-07-18"
      },
      {
        "id": "google_ml_crash_fairness_3",
        "domain": [],
        "intro": ["<p>A <a href=\"https://wikipedia.org/wiki/Sarcasm\">sarcasm</a>-detection model was trained on 80,000 text messages: 40,000 messages sent by adults (18 years and older) and 40,000 messages sent by minors (less than 18 years old). The model was then evaluated on a test set of 20,000 messages: 10,000 from adults and 10,000 from minors. The following confusion matrices show the results for each group (a positive prediction signifies a classification of \"sarcastic\"; a negative prediction signifies a classification of \"not sarcastic\"):</p> <div> <div style=\"display: inline-block; width: 45%; margin: 10px\"> <h4 style=\"text-align: center\" id=\"adults\" data-text=\"Adults\">Adults</h4> <table border=\"1\"> <tr> <td class=\"mlcc-good\"> <b>True Positives (TPs): 512</b> </td> <td class=\"mlcc-bad\"> <b>False Positives (FPs): 51</b> </td> </tr> <tr> <td class=\"mlcc-bad\"> <b>False Negatives (FNs): 36</b> </td> <td class=\"mlcc-good\"> <b>True Negatives (TNs): 9401</b> </td> </tr> <tr> <td colspan=\"2\"> $$\\text{Precision} = \\frac{TP}{TP+FP} = 0.909$$ </td> </tr> <tr> <td colspan=\"2\"> $$\\text{Recall} = \\frac{TP}{TP+FN} = 0.934$$ </td> </tr> </table> </div> <div style=\"float: right; width: 45%; display: inline-block; margin: 10px;\"> <h4 style=\"text-align: center\" id=\"minors\" data-text=\"Minors\">Minors</h4> <table border=\"1\"> <tr> <td class=\"mlcc-good\"> <b>True Positives (TPs): 2147</b> </td> <td class=\"mlcc-bad\"> <b>False Positives (FPs): 96</b> </td> </tr> <tr> <td class=\"mlcc-bad\"> <b>False Negatives (FNs): 2177</b> </td> <td class=\"mlcc-good\"> <b>True Negatives (TNs): 5580</b> </td> </tr> <tr> <td colspan=\"2\"> $$\\text{Precision} = \\frac{TP}{TP+FP} = 0.957$$ </td> </tr> <tr> <td colspan=\"2\"> $$\\text{Recall} = \\frac{TP}{TP+FN} = 0.497$$ </td> </tr> </table> </div> </div>"],
        "body": [
          "Engineers are working on retraining this model to address inconsistencies in sarcasm-detection accuracy across age demographics, but the model has already been released into production. Which of the following stopgap strategies will help mitigate errors in the model's predictions?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Restrict the model's usage to text messages sent by adults."],
            "answer": true,
            "explanation": [
              "<p>The model performs well on text messages from adults (with precision and recall rates both above 90%), so restricting its use to this group will sidestep the systematic errors in classifying minors' text messages.</p>"
            ]
          },
          {
            "option": ["When the model predicts \"not sarcastic\" for text messages sent by minors, adjust the output so the model returns a value of \"unsure\" instead."],
            "answer": true,
            "explanation": [
              "<p>The precision rate for text messages sent by minors is high, which means that when the model predicts \"sarcastic\" for this group, it is nearly always correct.</p> <p>The problem is that recall is very low for minors; The model fails to identify sarcasm in approximately 50% of examples. Given that the model's negative predictions for minors are no better than random guesses, we can avoid these errors by not providing a prediction in these cases.</p>"
            ]
          },
          {
            "option": ["Restrict the model's usage to text messages sent by minors."],
            "answer": false,
            "explanation": [
              "<p>The systematic errors in this model are specific to text messages sent by minors. Restricting the model's use to the group more susceptible to error would not help.</p>"
            ]
          },
          {
            "option": ["Adjust the model output so that it returns \"sarcastic\" for all text messages sent by minors, regardless of what the model originally predicted."],
            "answer": false,
            "explanation": [
              "<p>Always predicting \"sarcastic\" for minors' text messages would increase the recall rate from 0.497 to 1.0, as the model would no longer fail to identify any messages as sarcastic. However, this increase in recall would come at the expense of precision. All the true negatives would be changed to false positives:</p> <table border=\"1\"> <tr> <td class=\"mlcc-good\"> <b>True Positives (TPs): 4324</b> </td> <td class=\"mlcc-bad\"> <b>False Positives (FPs): 5676</b> </td> </tr> <tr> <td class=\"mlcc-bad\"> <b>False Negatives (FNs): 0</b> </td> <td class=\"mlcc-good\"> <b>True Negatives (TNs): 0</b> </td> </tr> </table> <p>which would decrease the precision rate from 0.957 to 0.432. So, adding this calibration would change the type of error but would not mitigate the magnitude of the error. </p>"
            ]
          }
        ],
        "answers": [],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/fairness/check-your-understanding"
        ],
        "date": "2022-07-18"
      }
    ]
  },
  "whizlabs": {
    "whizlabs1": [
      {
        "id": "whizlabs1_1",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "An industrial company wants to improve its quality system. It has developed its own deep neural network model with Tensorflow to identify the semi-finished products to be discarded with images taken from the production lines in the various production phases. During training, your custom model converges, but the tests are giving unsatisfactory results.",
          "",
          "What do you think might be the problem, and how could you proceed to fix it?"
        ],
        "open": false,
        "options": [
          {
            "option": ["You have used too few examples, you need to re-train with a larger set of images"],
            "answer": false,
            "explanation": ["When you have a different trend between training and validation, you have an overfitting problem. More data may help you, but you have to simplify the model first."]
          },
          {
            "option": ["You have to change the type of algorithm and use XGBoost"],
            "answer": false,
            "explanation": ["The problem is not with the algorithm but is within feature management."]
          },
          {
            "option": ["You have an overfitting problem"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Decrease your Learning Rate hyperparameter"],
            "answer": false,
            "explanation": ["Decreasing the Learning Rate hyperparameter is useless. The model converges in training."]
          },
          {
            "option": ["The model is too complex, you have to regularize the model and then make it simpler"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Use L2 Ridge Regression"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": ["ml1.png"],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/regularization-for-simplicity/l2-regularization",
          "https://developers.google.com/machine-learning/crash-course/images/RegularizationTwoLossFunctions.svg"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_2",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "You need to develop and train a model capable of analyzing snapshots taken from a moving vehicle and detecting if obstacles arise. Your work environment is Vertex AI.",
          "",
          "Which technique or algorithm do you think is best to use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["TabNet algorithm with TensorFlow"],
            "answer": false,
            "explanation": ["TabNet is used with tabular data, not images. It is a neural network that chooses the best features at each decision step in such a way that the model is optimized simpler."]
          },
          {
            "option": ["A linear learner with Tensorflow Estimator API"],
            "answer": false,
            "explanation": ["A linear learner is not suitable for images too. It can be applied to regression and classification predictions."]
          },
          {
            "option": ["XGBoost with BigQuery ML"],
            "answer": false,
            "explanation": ["BigQuery ML is designed for structured data, not images."]
          },
          {
            "option": ["TensorFlow Object Detection API"],
            "answer": true,
            "explanation": [
              "TensorFlow Object Detection API is designed to identify and localize multiple objects within an image. So it is the best solution.",
              "ml2.png"]
          }
        ],
        "feedback": [],
        "references": [
          "https://github.com/tensorflow/models/tree/master/research/object_detection",
          "https://cloud.google.com/vertex-ai/docs/training/training",
          "https://github.com/tensorflow/models/blob/master/research/object_detection/g3doc/img/kites_detections_output.jpg"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_3",
        "domain": ["Frame ML problems"],
        "intro": [],
        "body": [
          "Your team works on a smart city project with wireless sensor networks and a set of gateways for transmitting sensor data. You have to cope with many design choices. You want, for each of the problems under study, to find the simplest solution.",
          "For example, it is necessary to decide on the placement of nodes so that the result is the most economical and inclusive. An algorithm without data tagging must be used.",
          "",
          "Which of the following choices do you think is the most suitable?"
        ],
        "open": false,
        "options": [
          {
            "option": ["K-means"],
            "answer": false,
            "explanation": ["K-means is an unsupervised learning algorithm used for clustering problems. It is useful when you have to create similar groups of entities. So, even if there is no need to label data, it is not suitable for our scope."]
          },
          {
            "option": ["Q-learning"],
            "answer": true,
            "explanation": [
              "Q-learning is an RL Reinforcement Learning algorithm. RL provides a software agent that evaluates possible solutions through a progressive reward in repeated attempts. It does not need to provide labels. But it requires a lot of data and several trials and the possibility to evaluate the validity of each attempt.",
              "The main RL algorithms are deep Q-network (DQN) and deep deterministic policy gradient (DDPG).",
              "ml3.png"]
          },
          {
            "option": ["K-Nearest Neighbors"],
            "answer": false,
            "explanation": ["K-NN is a supervised classification algorithm, therefore, labeled. New classifications are made by finding the closest known examples."]
          },
          {
            "option": ["Support Vector Machine(SVM)"],
            "answer": false,
            "explanation": ["SVM is a supervised ML algorithm, too. K-NN distances are computed. These distances are not between data points, but with a hyper-plane, that better divides different classifications."]
          }
        ],
        "feedback": [],
        "references": [
          "https://www.vebuso.com/2020/05/a-practical-application-of-k-nearest-neighbours-analysis-i/",
          "https://towardsdatascience.com/reinforcement-learning-101-e24b50e1d292"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_4",
        "domain": ["Frame ML problems"],
        "intro": [],
        "body": [
          "The purpose of your current project is the recognition of genuine or forged signatures on checks and documents against regular signatures already stored by the Bank. There is obviously a very low incidence of fake signatures. The system must recognize which customer the signature belongs to and whether the signature is identified as genuine or skilled forged.",
          "",
          "What kind of ML model do you think is best to use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Binary logistic regression"],
            "answer": false,
            "explanation": ["Binary logistic regression deals with a classification problem that may result in true or false, like with spam emails. The issue here is far more complex."]
          },
          {
            "option": ["Matrix Factorization"],
            "answer": false,
            "explanation": ["Matrix Factorization is used in recommender systems, like movies on Netflix. It is based on a user-item (movie) interaction matrix and the problem of reducing dimensionality."]
          },
          {
            "option": ["Convolutional Neural Networks"],
            "answer": true,
            "explanation": ["A Convolutional Neural Network is a Deep Neural Network in which the layers are made up of processed sections of the source image. This technique allows you to simplify images and highlight shapes and features regardless of the physical position in which they may be found.",
              "For example, if we have the same signature in the center or at the bottom right of an image, the object will be different. But the signature is the same. A neural network that compares these derived features and can simplify the model achieves the best results.",
              "ml4.png"]
          },
          {
            "option": ["Multiclass logistic regression"],
            "answer": false,
            "explanation": ["Multiclass logistic regression deals with a classification problem with multiple solutions, fixed and finite classes. It is an extension of binary logistic regression with basically the same principles with the assumption of several independent variables. But in image recognition problems, the best results are achieved with CNN because they are capable of finding and relating patterns positioned in different ways on the images."]
          }
        ],
        "feedback": [],
        "references": [
          "https://towardsdatascience.com/convolution-neural-networks-a-beginners-guide-implementing-a-mnist-hand-written-digit-8aa60330d022",
          "https://research.google.com/pubs/archive/42455.pdf"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_5",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "The purpose of your current project is the recognition of genuine or forged signatures on checks and documents against regular signatures already stored by the Bank. There is obviously a very low incidence of fake signatures. The system must recognize which customer the signature belongs to and whether the signature is identified as genuine or skilled forged.",
          "",
          "Which of the following technical specifications can't you use with CNN?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Kernel Selection"],
            "answer": false,
            "explanation": ["Filters or kernels are a computation on a sub-matrix of pixels."]
          },
          {
            "option": ["Feature Cross"],
            "answer": true,
            "explanation": ["A cross of functions is a dome that creates new functions by multiplying (crossing) two or more functions.",
              "It has proved to be an important technique and is also used to introduce non-linearity to the model. We don't need it in our case."]
          },
          {
            "option": ["Stride "],
            "answer": false,
            "explanation": ["Stride is obtained by sliding the kernel by 1 pixel."]
          },
          {
            "option": ["Max pooling layer"],
            "answer": false,
            "explanation": ["A Max pooling layer is created taking the max value of a small region. It is used for simplification."]
          }
        ],
        "feedback": ["Dropout is also for simplification or regularization. It randomly zeroes some of the matrix values in order to find out what can be discarded with minor loss (and no overfitting)",
          "ml5.png"
        ],
        "references": [
          "https://towardsdatascience.com/convolution-neural-networks-a-beginners-guide-implementing-a-mnist-hand-written-digit-8aa60330d022"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_6",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "Your client has a large e-commerce Website that sells sports goods and especially scuba diving equipment. It has a seasonal business and has collected many sales data from its structured ERP and market trend databases. It wants to predict the demand of its customers both to increase business and improve logistics processes.",
          "",
          "Which of the following types of models and techniques should you focus on to obtain results quickly and with minimum effort?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Custom Tensorflow model with an autoencoder neural network"],
            "answer": false,
            "explanation": ["A custom Tensorflow model needs more time and effort. Moreover, an autoencoder is a type of artificial neural network that is used in the case of unlabeled data (unsupervised learning). The autoencoder is an excellent system for generalization and therefore to reduce dimensionality, training the network to ignore insignificant data (\"noise\") is not our scope."]
          },
          {
            "option": ["Bigquery ML ARIMA"],
            "answer": true,
            "explanation": ["We need to manage time-series data. Bigquery ML ARIMA_PLUS can manage time-series forecasts. The model automatically handles anomalies, seasonality, and holidays."]
          },
          {
            "option": ["BigQuery Boosted Tree"],
            "answer": false,
            "explanation": ["Boosted Tree is an ensemble of Decision Trees, so not suitable for time series."]
          },
          {
            "option": ["BigQuery Linear regression"],
            "answer": false,
            "explanation": ["Linear Regression cuts off seasonality. It is not what the customer wants."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/bigquery/docs/arima-single-time-series-forecasting-tutorial",
          "https://cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-time-series",
          "https://cloud.google.com/bigquery/docs/introduction"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_7",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "Your team is designing a fraud detection system for a major Bank. The requirements are:",
          ["Various banking applications will send transactions to the new system in real-time and in standard/normalized format.",
            "The data will be stored in real-time with some statistical aggregations.",
            "An ML model will be periodically trained for outlier detection.",
            "The ML model will issue the probability of fraud for each transaction.",
            "It is preferable to have no labeling and as little software development as possible."],
          "",
          "Which products would you choose?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Dataprep"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Dataproc"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Dataflow Flex"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Pub/Sub"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Composer"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["BigQuery"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["BigTable"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [
          "The Optimal procedure to achieve the goal is:",
          ["Pub / Sub to capture the data stream",
            "Dataflow Flex to aggregate and extract insights in real-time in BigQuery",
            "BigQuery ML to create the models"],
          "",
          "All the other solutions' usage will be sub-optimal and will need more effort."
        ],
        "references": [
          "https://cloud.google.com/solutions/building-anomaly-detection-dataflow-bigqueryml-dlp",
          "https://cloud.google.com/architecture/detecting-anomalies-in-financial-transactions"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_8",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "Your team is designing a fraud detection system for a major Bank. The requirements are:",
          ["Various banking applications will send transactions to the new system in real-time and in standard/normalized format.",
            "The data will be stored in real-time with some statistical aggregations.",
            "An ML model will be periodically trained for outlier detection.",
            "The ML model will issue the probability of fraud for each transaction.",
            "It is preferable to have no labeling and as little software development as possible."],
          "",
          "Which kinds of ML model could be used?"
        ],
        "open": false,
        "options": [
          {
            "option": ["K-means"],
            "answer": true,
            "explanation": ["The k-means clustering is a mathematical and statistical method on numerical vectors that divides and observes k clusters. Each example belongs to the cluster with the closest mean (cluster centroid).",
              "In ML, it is an unsupervised classification method and is widely used to detect unusual or outlier movements. For these reasons, it is one of the main methods for fraud detection.",
              "But it is not the only method because not all frauds are linked to strange movements. There may be other factors."]
          },
          {
            "option": ["Decision Tree"],
            "answer": false,
            "explanation": ["Decision Tree is suboptimal because of just Decision Trees."]
          },
          {
            "option": ["Random Forest"],
            "answer": false,
            "explanation": ["Random Forest is suboptimal because of just Decision Trees."]
          },
          {
            "option": ["Matrix Factorization"],
            "answer": false,
            "explanation": ["Matrix Factorization is for recommender systems. So, it predicts the preference of an item based on the experience of other users. Not suitable for us."]
          },
          {
            "option": ["Boosted Tree - XGBoost"],
            "answer": true,
            "explanation": ["XGBoost, which as you can see from the figure, is an evolution of the decision trees, has recently been widely used in this field and has had many positive results.",
              "ml8.png",
              "It is an open-source project and this is the description from its Github page:",
              "XGBoost is an optimized distributed gradient boosting library designed to be highly efficient, flexible and portable. It implements machine learning algorithms under the Gradient Boosting framework. XGBoost provides a parallel tree boosting (also known as GBDT, GBM) that solves many data science problems in a fast and accurate way. The same code runs on major distributed environments (Kubernetes, Hadoop, SGE, MPI, Dask) and can solve problems beyond billions of examples."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/solutions/building-anomaly-detection-dataflow-bigqueryml-dlp",
          "https://cloud.google.com/architecture/detecting-anomalies-in-financial-transactions",
          "https://medium.com/@adityakumar24jun/xgboost-algorithm-the-new-king-c4a64ea677bf"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_9",
        "domain": ["Automate & orchestrate ML pipelines"],
        "intro": [],
        "body": [
          "In your company, you train and deploy several ML models with Tensorflow. You use on-prem servers, but you often find it challenging to manage the most expensive training and control and update the models. You are looking for a system that can handle all these tasks.",
          "",
          "Which solutions can you adopt?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Kubeflow to run on Google Kubernetes Engine"],
            "answer": true,
            "explanation": ["Kubeflow Pipelines is an open-source platform designed specifically for creating and deploying ML workflows based on Docker containers.",
              "Their main features:",
              ["Using packaged templates in Docker images in a K8s environment",
                "Manage your various tests/experiments",
                "Simplifying the orchestration of ML pipelines",
                "Reuse components and pipelines"]]
          },
          {
            "option": ["Vertex AI"],
            "answer": true,
            "explanation": ["Vertex AI is an integrated suite of ML services that:",
              ["Train an ML model both without code (AutoML) and with custom",
                "Evaluate and tune a model",
                "Deploy models",
                "Manage prediction: Batch, Online and monitoring",
                "Manage model versions: workflows and retraining",
                "Manage the complete model maintenance cycle"],
              "ml9.png"]
          },
          {
            "option": ["Use Scikit-Learn that is simple and powerful"],
            "answer": false,
            "explanation": ["Scikit-learn is an ML platform with many standard algorithms easy and immediate to use. TensorFlow (from the official doc) is an end-to-end open-source platform for machine learning. It has a comprehensive, flexible ecosystem of tools, libraries, and community resources that lets researchers push the state-of-the-art into ML, and developers easily build and deploy ML-powered applications.",
              "So, there are 2 different platforms, even if there is Scikit Flow that integrates the two.",
              "Scikit-learn doesn't manage ML Pipelines."]
          },
          {
            "option": ["Use SageMaker managed services"],
            "answer": false,
            "explanation": ["SageMaker is an AWS ML product."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/vertex-ai"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_10",
        "domain": ["Frame ML problems"],
        "intro": [],
        "body": [
          "You have an NLP model for your company's Customer Care and Support Office. This model evaluates the general satisfaction of customers on the main categories of services offered and has always provided satisfactory performances.",
          "",
          "You have recently expanded the range of your services and want to refine / update your model. You also want to activate procedures that automate these processes.",
          "",
          "Which choices among the following do you prefer in the Cloud GCP?"
        ],
        "open": false,
        "options": [
          {
            "option": ["You don't need to change anything. If the model is well made and has no overfitting, it will be able to handle anything."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Retrain using information from the last week of work only."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Add examples with new product data and still regularly re-train and evaluate new models."],
            "answer": true,
            "explanation": ["Creating and using templates is not a one-shot activity. But, like most processes, it is an ongoing one, because the underlying factors can vary over time.",
              "Therefore, you need to continuously monitor the processes and retrain the model also on newer data, if you find that the frequency distributions of the data vary from the original configuration. It may also be necessary or desirable to create a new model.",
              "Generally, a periodic schedule is adopted every month or week.",
              "For this very reason, all the other answers are not exact."]
          },
          {
            "option": ["Make a separate model with new product data and create the model ensemble."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [
          "https://medium.com/kubeflow/automated-model-retraining-with-kubeflow-pipelines-691a5f211701"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_11",
        "domain": ["Monitor, optimize, and maintain ML solutions"],
        "intro": [],
        "body": [
          "Your company is designing a series of models aimed at optimal customer care management.",
          "",
          "For this purpose, all written and voice communications with customers are recorded so that they can be classified and managed.",
          "The problem is that Clients often provide private information that cannot be distributed and disclosed.",
          "",
          "Which of the following techniques can you use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Cloud Data Loss Prevention API (DLP)"],
            "answer": true,
            "explanation": ["Cloud Data Loss Prevention is a managed service specially designed to discover sensitive data automatically that may be protected. It could be used for personal codes, credit card numbers, addresses and any private contact details, etc.",
              "ml11.png"]
          },
          {
            "option": ["CNN - Convolutional Neural Network"],
            "answer": false,
            "explanation": ["A Convolutional Neural Network is a Deep Neural Network in which the layers are made up of processed sections of the source image. So, it is a successful method for image and shape classification."]
          },
          {
            "option": ["Cloud Speech API"],
            "answer": true,
            "explanation": ["Cloud Speech API is useful if you have audio recordings as it is a speech-to-text service."]
          },
          {
            "option": ["Vision API"],
            "answer": true,
            "explanation": ["Vision API has a built-in text-detection service. So you can get text from images."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/architecture/sensitive-data-and-ml-datasets"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_12",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "Your team is working for a major apparel company that is developing an online business with significant investments.",
          "",
          "The company adopted Analytics-360. So, it can achieve a lot of data on the activities of its customers and on the interest of the various commercial initiatives of the websites, such as (from Google Analytics-360):",
          ["Average bounce rate per dimension",
            "Average number of product page views by purchaser type",
            "Average number of transactions per purchaser",
            "Average amount of money spent per session",
            "Sequence of hits (pathing analysis)",
            "Multiple custom dimensions at hit or session level",
            "Average number of user interactions before purchase"],
          "The first thing management wants is to categorize customers to determine which types are more likely to buy.",
          "",
          "Subsequently, further models will be created to incentivize the most interesting customers better and boost sales.",
          "",
          "You have a lot of work to do and you want to start quickly.",
          "",
          "What techniques do you use in this first phase?"
        ],
        "open": false,
        "options": [
          {
            "option": ["BigQuery e BigQuery ML"],
            "answer": true,
            "explanation": ["It is necessary to create different groups of customers based on purchases and their characteristics for these requirements.",
              "We are in the field of unsupervised learning. BigQuery is already set up both for data acquisition and for training, validation and use of this kind of model."]
          },
          {
            "option": ["Cloud Storage con AVRO"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Vertex AI TensorBoard"],
            "answer": false,
            "explanation": ["Vertex AI TensorBoard is suitable to set up visualizations for ML experiments."]
          },
          {
            "option": ["Binary Classification"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["K-means"],
            "answer": true,
            "explanation": ["The K-means model in BigQuery ML uses a technique called clustering. Clustering is a statistical technique that allows, in our case, to classify customers with similar behaviors for marketing automatically."]
          },
          {
            "option": ["KNN"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Deep Neural Network"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [
          "All the other answers address more complex and more cumbersome solutions.",
          "Furthermore, while the others are all supervised, we do not have ready-made solutions, but we want the model to provide us with the required categories."
        ],
        "references": [
          "https://cloud.google.com/bigquery/docs/kmeans-tutorial",
          "https://cloud.google.com/architecture/building-k-means-clustering-model"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_13",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "Your team prepared a custom model with Tensorflow that forecasts, based on diagnostic images, which cases need more analysis and medical support.",
          "",
          "The accuracy of the model is very high. But when it is deployed in production, the medical staff is very dissatisfied.",
          "",
          "What is the most likely motivation?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Logistic regression with a classification threshold too high"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["DNN Model with overfitting"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["DNN Model with underfitting"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["You have to perform feature crosses"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [
          "When there is an imbalance between true and false ratios in binary classification, it is necessary to modify the classification threshold so that the most probable errors are those with minor consequences. In our case, it is better to be wrong with a healthy person than with a sick one.",
          "Accuracy is the number of correct predictions on the total of predictions done.",
          "Let’s imagine that we have 100 predictions, and 95 of them are correct. That is 95%. It looks almost perfect.",
          "But we assume that the system has foreseen 94 true negative cases and only one true positive case, and one case of false positive, and 4 cases of false negative.",
          "So, the model predicted 98 healthy when they were 95 and 2 suspected cases when they were 5.",
          "The problem is that sick patients are, luckily, a minimal percentage. But it is important that they are intercepted. So, our model failed because it correctly identified only 1 case out of the total of 5 real positives that is 20% (recall). It also identified 2 positives, one of which was negative, i.e. 50% (precision).",
          "It's not good at all.",
          "<b>Precision</b>: Rate of correct positive identifications",
          "<b>Recall</b>: Rate of real positives correctly identified",
          "To calibrate the result, we need to change the threshold we use to decide between positive and negative. The model does not return 0 and 1 but a value between 0 and 1 (sigmoid activation function). In our case, we have to choose a threshold lower than 0.5 to classify it as positive. In this way, we risk carrying out further investigations on the healthy but being able to treat more sick patients. It is definitely the desired result."
        ],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/classification/precision-and-recall"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_14",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "You work in a company that has acquired an advanced consulting services company. Management wants to analyze all past important projects and key customer relationships. The consulting company does not have an application that manages this data in a structured way but is certified for the quality of its services. All its documents follow specific rules.",
          "",
          "It was decided to acquire structured information on projects, areas of expertise and customers through the analysis of these documents.",
          "",
          "You're looking for ML methodologies that make this process quicker and easier.",
          "",
          "What is the better choice in GCP?"
        ],
        "open": true,
        "options": [
          {
            "option": ["Vision API"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Cloud Natural Language API"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Document AI"],
            "answer": true,
            "explanation": ["Document AI is the ideal broad-spectrum solution. It is a service that gives a complete solution with computer vision and OCR, NLP and data management. It allows you to extract and structure information automatically from documents. It can also enrich them with the Google Knowledge Graph to verify company names, addresses, and telephone numbers to draw additional or updated information.",
              "All other answers are incorrect because their functions are already built into Document AI."]
          },
          {
            "option": ["AutoML Natural Language"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/document-ai",
          "https://cloud.google.com/vision/pricing",
          "https://cloud.google.com/natural-language/pricing",
          "https://cloud.google.com/natural-language/automl/pricing"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_15",
        "domain": ["Automate & orchestrate ML pipelines"],
        "intro": [],
        "body": [
          "Your customer has an online dating platform that, among other things, analyzes the degree of affinity between the various people. Obviously, it already uses ML models and uses, in particular, XGBoost, the gradient boosting decision tree algorithm, and is obtaining excellent results.",
          "",
          "All its development processes follow CI / CD specifications and use Docker containers. The requirement is to classify users in various ways and update models frequently, based on new parameters entered into the platform by the users themselves.",
          "",
          "So, the problem you are called to solve is how to optimize frequently re-trained operations with an optimized workflow system.",
          "",
          "Which solution among these proposals can best solve your needs?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Deploy the model on BigQuery ML and setup a job"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Use Kubeflow Pipelines to design and execute your workflow"],
            "answer": true,
            "explanation": [
              "Kubeflow Pipelines is the ideal solution because it is a platform designed specifically for creating and deploying ML workflows based on Docker containers. So, it is the only answer that meets all requirements.",
              "The main functions of Kubeflow Pipelines are:",
              ["Using packaged templates in Docker images in a K8s environment",
                "Manage your various tests/experiments",
                "Simplifying the orchestration of ML pipelines",
                "Reuse components and pipelines"],
              "ml15.1.png",
              "It is within the Kubeflow ecosystem, which is the machine learning toolkit for Kubernetes",
              "ml15.2.png",
              "Vertex AI Model Monitoring is useful for detecting if the model is no longer suitable for your needs.",
              "Creating ML workflows is possible with Vertex AI Pipelines.",
              "The other answers may be partially correct but do not resolve all items or need to add more coding."]
          },
          {
            "option": ["Use Vertex AI Monitoring"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Orchestrate activities with Google Cloud Workflows"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Develop procedures with Pub/Sub and Cloud Run"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Schedule processes with Cloud Composer"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [
        ],
        "references": [
          "https://www.kubeflow.org/docs/components/pipelines/overview/pipelines-overview/",
          "https://www.kubeflow.org/docs/started/kubeflow-overview/"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_16",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "You have an ML model designed for an industrial company that provides the correct price to buy goods based on a series of elements, such as the quantity requested, the level of quality and other specific variables for different types of products.",
          "",
          "You have built a linear regression model that works well but whose performance you want to optimize.",
          "",
          "Which of these techniques could you use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Clipping"],
            "answer": false,
            "explanation": ["Feature clipping eliminates outliers that are too high or too low."]
          },
          {
            "option": ["Log scaling"],
            "answer": false,
            "explanation": [
              "When you don't have a fairly uniform distribution, you can instead use Log Scaling which can compress the data range: x1 = log (x)"]
          },
          {
            "option": ["Z-score"],
            "answer": false,
            "explanation": ["Z-Score is similar to scaling, but uses the deviation from the mean divided by the standard deviation, which is the classic index of variability. So, it gives how many standard deviations each value is away from the mean."]
          },
          {
            "option": ["Scaling to a range"],
            "answer": false,
            "explanation": ["Scaling means transforming feature values into a standard range, from 0 and 1 or sometimes -1 to +1. It's okay when you have an even distribution between minimum and maximum."]
          },
          {
            "option": ["All of them"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": ["All these methods maintain the differences between values, but limit the range. So the computation is lighter.",
          "ml16.png"
        ],
        "references": [
          "https://developers.google.com/machine-learning/data-prep/transform/normalization"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_17",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "You are starting to operate as a Data Scientist and are working on a deep neural network model with Tensorflow to optimize customer satisfaction for after-sales services to create greater client loyalty.",
          "You are doing Feature Engineering, and your focus is to minimize bias and increase accuracy. Your coordinator has told you that by doing so you risk having problems. He explained to you that, in addition to the bias, you must consider another factor to be optimized. Which one?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Blending"],
            "answer": false,
            "explanation": ["Blending indicates an ensemble of ML models."]
          },
          {
            "option": ["Learning Rate"],
            "answer": false,
            "explanation": ["Learning Rate is a hyperparameter in neural networks."]
          },
          {
            "option": ["Feature Cross"],
            "answer": false,
            "explanation": ["Feature Cross is the method for obtaining new features by multiplying other ones."]
          },
          {
            "option": ["Bagging"],
            "answer": false,
            "explanation": ["Bagging is an ensemble method like Blending."]
          },
          {
            "option": ["Variance"],
            "answer": true,
            "explanation": ["The variance indicates how much function f (X) can change with a different training dataset. Obviously, different estimates will correspond to different training datasets, but a good model should reduce this gap to a minimum.",
              "The bias-variance dilemma is an attempt to minimize both bias and variance.",
              "The bias error is the non-estimable part of the learning algorithm. The higher it is, the more underfitting there is.",
              "Variance is the sensitivity to differences in the training set. The higher it is, the more overfitting there is."]
          }
        ],
        "feedback": [],
        "references": [
          "https://en.wikipedia.org/wiki/Bias%E2%80%93variance_tradeoff"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_18",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "Your company supplies environmental management services and has a network of sensors that acquire information uploaded to the Cloud to be pre-processed and managed with some ML models with dynamic dashboards used by customers.",
          "",
          "Periodically, the models are retrained and re-deployed, with a rather complex pipeline on VM clusters:",
          ["New data is streamed from Dataflow",
            "Data is transformed through aggregations and normalizations (z-scores)",
            "The model is periodically retrained and evaluated",
            "New Docker images are created and stored"],
          "You want to simplify the pipeline as much as possible and use fully managed or even serverless services as far as you can.",
          "",
          "Which do you choose from the following services?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Kubeflow"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Vertex AI custom training"],
            "answer": false,
            "explanation": ["With Vertex AI you can use AutoML training and custom training in the same environment.",
              "It's a managed but not a serverless service, especially for custom training.",
              "It obviously has a rich set of features for managing ML pipelines."]
          },
          {
            "option": ["BigQuery and BigQuery ML"],
            "answer": true,
            "explanation": ["BigQuery and BigQuery ML are powerful services for data analysis and machine learning.",
              "They are fully serverless services that can process petabytes of data in public and private datasets and even data stored in files.",
              "BigQuery works with standard SQL and has a CLI interface: bq.",
              "You can use BigQuery jobs to automate and schedule tasks and operations.",
              "With BigQuery ML, you can train models with a rich set of algorithms with data already stored in the Cloud. You may perform feature engineering and hyperparameter tuning and export a BigQuery ML model to a Docker image as required."]
          },
          {
            "option": ["TFX"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": ["All other services are useful in ML pipelines, but they aren't that easy and ready to use.",
          "ml18.png"
        ],
        "references": [
          "https://cloud.google.com/bigquery/docs/export-model-tutorial",
          "https://cloud.google.com/bigquery/docs/jobs-overview",
          "https://cloud.google.com/bigquery/",
          "https://cloud.google.com/vertex-ai/docs/training/custom-training"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_19",
        "domain": ["Automate & orchestrate ML pipelines"],
        "intro": [],
        "body": [
          "Your company runs an e-commerce site. You produced static deep learning models with Tensorflow that process Analytics-360 data. They have been in production for some time. Initially, they gave you excellent results, but gradually, the accuracy has progressively decreased. You retrained the models with the new data and solved the problem.",
          "",
          "At this point, you want to automate the process using the Google Cloud environment.",
          "",
          "Which of these solutions allows you to quickly reach your goal?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Cluster Compute Engine and KubeFlow"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["GKE and TFX"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["GKE and KubeFlow"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Vertex AI Pipelines and TensorFlow Extended TFX"],
            "answer": true,
            "explanation": ["TFX is a platform that allows you to create scalable production ML pipelines for TensorFlow projects, therefore Kubeflow.",
              "It, therefore, allows you to manage the entire life cycle seamlessly from modeling, training, and validation, up to production start-up and management of the inference service.",
              "Vertex AI Pipelines can run pipelines built using TFX:",
              ["You can configure a Cluster",
                "Select basic parameters and click create",
                "You get your Kubeflow and Kubernetes launched"],
              "ml19.png",
              "All the other answers are correct, but not optimal for a quick and managed solution."]
          }
        ],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/production-ml-systems",
          "https://www.tensorflow.org/tfx/guide",
          "https://www.youtube.com/watch?v=Mxk4qmO_1B4"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_20",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "You have a Linear Regression model for the optimal management of supplies to a sales network based on a large number of different driving factors. You want to simplify the model to make it more efficient and faster. Your first goal is to synthesize the features without losing the information content that comes from them.",
          "",
          "Which of these is the best technique?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Feature Crosses"],
            "answer": false,
            "explanation": ["Feature Crosses are for the same objective, but they add non-linearity."]
          },
          {
            "option": ["Principal component analysis (PCA)"],
            "answer": true,
            "explanation": ["Principal component analysis is a technique to reduce the number of features by creating new variables obtained from linear combinations or mixes of the original variables, which can then replace them but retain most of the information useful for the model. In addition, the new features are all independent of each other.",
              "The new variables are called principal components.",
              "A linear model is assumed as a basis. Therefore, the variables are independent of each other."]
          },
          {
            "option": ["Embeddings"],
            "answer": false,
            "explanation": ["Embeddings, which transform large sparse vectors into smaller vectors are used for categorical data."]
          },
          {
            "option": ["Functional Data Analysis"],
            "answer": false,
            "explanation": ["Functional Data Analysis has the goal to cope with complexity, but it is used when it is possible to substitute features with functions- not our case."]
          }
        ],
        "feedback": ["ml20.png"],
        "references": [
          "https://builtin.com/data-science/step-step-explanation-principal-component-analysis",
          "https://en.wikipedia.org/wiki/Principal_component_analysis"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_21",
        "domain": ["Design data preparation and processing systems"],
        "intro": [],
        "body": [
          "TerramEarth is a company that builds heavy equipment for mining and agriculture.",
          "",
          "During maintenance services for vehicles produced by TerramEarth at the service centers, information relating to their use is downloaded. Every evening, this data flows into the data center, is consolidated and sent to the Cloud.",
          "",
          "TerramEarth has an ML model that predicts component failures and optimizes the procurement of spare parts for service centers to offer customers the highest level of service. TerramEarth wants to automate the redevelopment and distribution process every time it receives a new file.",
          "",
          "What is the best service to start the process?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Cloud Storage trigger with Cloud Functions"],
            "answer": true,
            "explanation": ["Files are received from Cloud Storage, which has native triggers for all the events related to its file management.",
              "So, we may start a Cloud Function that may activate any Cloud Service as soon as the file is received.",
              "Cloud Storage triggers may also activate a Pub/Sub notification, just a little more complex.",
              "It is the simplest and most direct solution of all the answers.",
              "ml21.png"]
          },
          {
            "option": ["Cloud Scheduler every night"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Pub/Sub"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Cloud Run and Cloud Build"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/functions/docs/calling/storage",
          "https://cloud.google.com/blog/products/gcp/cloud-storage-introduces-cloud-pub-sub-notifications"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_22",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "You work in a major banking institution. The Management has decided to rapidly launch a bank loan service, as the Government has created a series of “first home” facilities for the younger population.",
          "",
          "The goal is to carry out the automatic management of the required documents (certificates, origin documents, legal information) so that the practice can be built and verified automatically using the data and documents provided by customers and can be managed in a short time and with the minimum contribution of the scarce specialized personnel.",
          "",
          "Which of these GCP services can you use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Dialogflow"],
            "answer": false,
            "explanation": ["Dialogflow is for speech Dialogs, not written documents."]
          },
          {
            "option": ["Document AI"],
            "answer": true,
            "explanation": ["Document AI is the perfect solution because it is a complete service for the automatic understanding of documents and their management.",
              "It integrates computer natural language processing, OCR, and vision and can create pre-trained templates aimed at intelligent document administration.",
              "ml22.png"]
          },
          {
            "option": ["Cloud Natural Language API"],
            "answer": false,
            "explanation": ["NLP is integrated into Document AI."]
          },
          {
            "option": ["AutoML"],
            "answer": false,
            "explanation": ["functions like AutoML are integrated into Document AI, too."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/document-ai",
          "https://cloud.google.com/solutions/lending-doc-ai",
          "https://www.qwiklabs.com/focuses/12733?&parent=catalog",
          "https://cloud.google.com/automl",
          "https://cloud.google.com/blog/products/ai-machine-learning/google-cloud-announces-document-ai-platform"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_23",
        "domain": ["Frame ML problems"],
        "intro": [],
        "body": [
          "Your company does not have an excellent ML experience. They want to start with a service that is as smooth, simple and managed as possible. The idea is to use BigQuery ML. Therefore, you are considering whether it can cover all the functionality you need.",
          "",
          "Which of the following features are not present in BigQuery ML natively?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Exploratory data analysis"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Feature selection"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Model building"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Training"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Hyperparameter tuning"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Automatic deployment and serving"],
            "answer": true,
            "explanation": ["BigQuery is perfect for Analytics. So, exploratory data analysis and feature selection are simple and very easy to perform with the power of SQL and the ability to query petabytes of data.",
              "BigQuery ML offers all other features except automatic deployment and serving.",
              "BigQuery ML can simply export a model (packaged in a container image) to Cloud Storage."]
          }
        ],
        "feedback": ["ml23.png"],
        "references": [
          "https://cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-export-model",
          "https://cloud.google.com/blog/products/data-analytics/automl-tables-now-generally-available-bigquery-ml"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_24",
        "domain": ["Frame ML problems"],
        "intro": [],
        "body": [
          "Your client has an e-commerce site for commercial spare parts for cars with competitive prices. It started with the small car sector but is continually adding products. Since 80% of them operate in a B2B market, he wants to ensure that his customers are encouraged to use the new products that he gradually offers on the site quickly and profitably.",
          "",
          "Which GCP service can be valuable in this regard and in what way?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Create a Tensorflow model using Matrix factorization"],
            "answer": false,
            "explanation": ["Create a Tensorflow model using Matrix factorization could be OK, but it needs a lot of work."]
          },
          {
            "option": ["Use Recommendations AI"],
            "answer": true,
            "explanation": ["Recommendations AI is a ready-to-use service for all the requirements shown in the question. You don’t need to create models, tune, train, all that is done by the service with your data. Also, the delivery is automatically done, with high-quality recommendations via web, mobile, email. So, it can be used directly on websites during user sessions."]
          },
          {
            "option": ["Import the Product Catalog"],
            "answer": false,
            "explanation": ["Import the Product Catalog deal only with data management, not creating recommendations."]
          },
          {
            "option": ["Record / Import User events"],
            "answer": false,
            "explanation": ["Record / Import User events deal only with data management, not creating recommendations."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/retail/recommendations-ai/docs/create-models",
          "https://cloud.google.com/recommendations%C2%A0"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_25",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "Your client has an e-commerce site for commercial spare parts for cars with competitive prices. It started with the small car sector but is continually adding products. Since 80% of them operate in a B2B market, he wants to ensure that his customers are encouraged to use the new products that he gradually offers on the site quickly and profitably.",
          "",
          "You decided on Recommendations AI.",
          "",
          "What specific recommendation model type is not useful for new products?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Others You May Like"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Frequently Bought Together"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Recommended for You"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Recently Viewed"],
            "answer": true,
            "explanation": ["The \"Recently Viewed\" recommendation is not for new products, and it is not a recommendation either.",
              "It provides the list of products the user has recently viewed, starting with the last."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/retail/recommendations-ai/docs/placements#oyml",
          "https://cloud.google.com/retail/recommendations-ai/docs/placements#fbt",
          "https://cloud.google.com/retail/recommendations-ai/docs/placements#rfy",
          "https://cloud.google.com/retail/recommendations-ai/docs/placements#rv"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_26",
        "domain": ["Monitor, optimize, and maintain ML solutions"],
        "intro": [],
        "body": [
          "Your business makes excellent use of ML models. Many of these were developed with Tensorflow. But lately, you've been making good use of AutoML to make your design work leaner, faster, and more efficient.",
          "",
          "You are looking for an environment that organizes and manages training, validation and tuning, and updating models with new data, distribution and monitoring in production.",
          "",
          "Which of these do you think is the best solution?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Deploy Tensorflow on Kubernetes"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Leverage Kubeflow Pipelines"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Adopt Vertex AI: custom tooling and pipelines"],
            "answer": true,
            "explanation": ["Vertex AI combines AutoML, custom models and ML pipeline management through to production.",
              "Vertex AI integrates many GCP ML services, especially AutoML and custom training, and includes many different tools to help you in every step of the ML workflow.",
              "So, Vertex AI offers two strategies for model training: AutoML and Personalized training.",
              "ml26.png",
              "Machine learning operations (<b>MLOps</b>) is the practice of using DevOps for machine learning (ML).",
              "DevOps strategies automate the release of code changes and control of systems, resulting in greater security and less time to get systems up and running.",
              "All the other solutions are suitable for production. But, given these requirements, Vertex AI, with the AutoML solution's strong inclusion, is the best and the most productive one."]
          },
          {
            "option": ["Migrate all models to BigQuery ML with AutoML"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Migrate all models to AutoML"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/vertex-ai/docs",
          "https://cloud.google.com/vertex-ai/docs/pipelines/introduction",
          "https://codelabs.developers.google.com/codelabs/vertex-ai-custom-models#1"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_27",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "You are a junior Data Scientist. You need to create a multi-class classification Machine Learning model with Keras Sequential model API. In particular, your model must indicate the main categories of a text.",
          "",
          "Which of the following techniques should not be used?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Feedforward Neural Network"],
            "answer": false,
            "explanation": ["Feedforward Neural Network is a kind of DNN, widely used for many applications."]
          },
          {
            "option": ["N-grams for tokenize text"],
            "answer": false,
            "explanation": ["N-grams for tokenizing text is a contiguous sequence of items (usually words) in NLP."]
          },
          {
            "option": ["K-means"],
            "answer": true,
            "explanation": ["The only unsuitable element is K-means clustering, one of the most popular unsupervised machine learning algorithms. Therefore, it is out of this scope."]
          },
          {
            "option": ["Softmax function"],
            "answer": false,
            "explanation": ["Softmax is an activation function for multi-class classification."]
          },
          {
            "option": ["Pre-trained embeddings"],
            "answer": false,
            "explanation": ["Embeddings are used for reducing high-dimensional tensors, so categories, too."]
          },
          {
            "option": ["Dropout layer"],
            "answer": false,
            "explanation": ["The Dropout layer is used for regularization, eliminating input features randomly."]
          },
          {
            "option": ["Categorical cross-entropy"],
            "answer": false,
            "explanation": ["Categorical cross-entropy is a loss function for multi-class classification."]
          }
        ],
        "feedback": [
          "The answers identify the main techniques to be used for a multi-class classification Machine Learning model.",
          "ml27.png"],
        "references": [
          "https://developers.google.com/machine-learning/guides/text-classification/",
          "https://en.wikipedia.org/wiki/N-gram",
          "https://en.wikipedia.org/wiki/K-means_clustering",
          "https://en.wikipedia.org/wiki/Multilayer_perceptron",
          "https://developers.google.com/machine-learning/crash-course/images/RegularizationTwoLossFunctions.svg"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_28",
        "domain": ["Design data preparation and processing systems"],
        "intro": [],
        "body": [
          "You work for a digital publishing website with an excellent technical and cultural level, where you have both famous authors and unknown experts who express ideas and insights.",
          "",
          "You, therefore, have an extremely demanding audience with strong interests that can be of various types.",
          "",
          "Users have a small set of articles that they can read for free every month. Then they need to sign up for a paid subscription.",
          "",
          "You have been asked to prepare an ML training model that processes user readings and article preferences. You need to predict trends and topics that users will prefer.",
          "",
          "But when you train your DNN with Tensorflow, your input data does not fit into RAM memory.",
          "",
          "What can you do in the simplest way?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Use tf.data.Dataset"],
            "answer": true,
            "explanation": ["The tf.data.Dataset allows you to manage a set of complex elements made up of several inner components.", "It is designed to create efficient input pipelines and to iterate over the data for their processing.",
              "These iterations happen in streaming. So, they work even if the input matrix is very large and doesn’t fit in memory.",
              "ml28.png"]
          },
          {
            "option": ["Use a queue with tf.train.shuffle_batch"],
            "answer": false,
            "explanation": ["A queue with tf.train.shuffle_batch is far more complex, even if it is feasible."]
          },
          {
            "option": ["Use pandas.DataFrame"],
            "answer": false,
            "explanation": ["A pandas.DataFrame works in real memory, so they don’t solve the problem at all."]
          },
          {
            "option": ["Use a NumPy array"],
            "answer": false,
            "explanation": ["A NumPy array works in real memory, so they don’t solve the problem at all."]
          }
        ],
        "feedback": [],
        "references": [
          "https://www.tensorflow.org/api_docs/python/tf/data/Dataset",
          "https://www.kaggle.com/jalammar/intro-to-data-input-pipelines-with-tf-data"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_29",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "TerramEarth is a company that builds heavy equipment for mining and agriculture.",
          "",
          "It is developing a series of ML models for different activities: manufacturing, procurement, logistics, marketing, customer service and vehicle tracking.",
          "",
          "TerramEarth uses Google Vertex AI and wants to scale training and inference processes in a managed way.",
          "",
          "It is necessary to forecast whether a vehicle, based on the data collected during the maintenance service, has risks of failures in the next six months in order to recommend an extraordinary service operation.",
          "",
          "Which kind of technology/model should you advise using?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Feedforward Neural Network"],
            "answer": true,
            "explanation": ["Feedforward neural networks are the classic example of neural networks. In fact, they were the first and most elementary type of artificial neural network. Feedforward neural networks are mainly used for supervised learning when the data, mainly numerical, to be learned is neither time-series nor sequential (such as NLP).",
              "These networks do not have any loops or loops in the network. Information moves in one direction only, forward, from the input nodes, through the hidden nodes (if any) and to the output nodes.",
              "ml29.png",
              "All the other techniques are more complex and suitable for different applications (images, NLP, recommendations)."]
          },
          {
            "option": ["Convolutional Neural Network"],
            "answer": false,
            "explanation": ["The convolutional neural network (CNN) is a type of artificial neural network extensively used for image recognition and classification. It uses the convolutional layers, that is, the reworking of sets of pixels by running filters on the input pixels."]
          },
          {
            "option": ["Recurrent Neural Network"],
            "answer": false,
            "explanation": ["A recurrent neural network (RNN) is a class of artificial neural networks where connections between nodes form a directed graph along a temporal sequence."]
          },
          {
            "option": ["Transformers"],
            "answer": false,
            "explanation": ["A transformer is a deep learning model that can give different importance to each part of the input data."]
          },
          {
            "option": ["Reinforcement Learning"],
            "answer": false,
            "explanation": ["Reinforcement Learning provides a software agent that evaluates possible solutions through a progressive reward in repeated attempts. It does not need to provide labels. But it requires a lot of data and several trials, and the possibility to evaluate the validity of each attempt."]
          },
          {
            "option": ["GAN Generative Adversarial Network"],
            "answer": false,
            "explanation": ["GAN is a special class of machine learning frameworks used for the automatic generation of facial images."]
          },
          {
            "option": ["Autoencoder and self-encoder"],
            "answer": false,
            "explanation": ["Autoencoder is a neural network aimed to transform and learn with a compressed representation of raw data."]
          }
        ],
        "feedback": [],
        "references": [
          "https://en.wikipedia.org/wiki/Feedforward_neural_network"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_30",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "You work for a large retail company. You are preparing a marketing model. The model will have to make predictions based on the historical and analytical data of the e-commerce site (analytics-360). In particular, customer loyalty and remarketing possibilities should be studied. You work on historical tabular data. You want to quickly create an optimal model, both from the point of view of the algorithm used and the tuning and life cycle of the model.",
          "",
          "What are the two best services you can use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["AutoML"],
            "answer": true,
            "explanation": ["AutoML can select the best model for your needs without having to experiment.",
              "The architectures currently used (they are added at the same time) are:",
              ["Linear",
                "Feedforward deep neural network",
                "Gradient Boosted Decision Tree",
                "AdaNet",
                "Ensembles of various model architectures"],
              "In addition, AutoML automatically performs feature engineering tasks, too, such as:",
              ["Normalization",
                "Encoding and embeddings for categorical features.",
                "Timestamp columns management (important in our case)"],
              "So, it has special features for time columns: for example, it can correctly split the input data into training, validation and testing."]
          },
          {
            "option": ["BigQuery ML"],
            "answer": false,
            "explanation": ["Other option has additional automated feature engineering."]
          },
          {
            "option": ["Vertex AI custom training"],
            "answer": true,
            "explanation": ["With Vertex AI you can use both AutoML training and custom training in the same environment."]
          },
          {
            "option": ["GKE"],
            "answer": false,
            "explanation": ["GKE doesn’t supply all the ML features of Vertex AI. It is an advanced K8s managed environment"]
          }
        ],
        "feedback": ["ml30.png"],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/tabular-data/overview",
          "https://cloud.google.com/vertex-ai/docs/pipelines/introduction",
          "https://cloud.google.com/vertex-ai/docs/tabular-data/tabular101"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_31",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "TerramEarth is a company that builds heavy equipment for mining and agriculture.",
          "",
          "It is developing a series of ML models for different activities: manufacturing, procurement, logistics, marketing, customer service and vehicle tracking. TerramEarth uses Google Cloud Vertex AI and wants to scale training and inference processes in a managed way.",
          "",
          "During the maintenance service, snapshots of the various components of the vehicle will be taken. Your new model should be able to determine both the degree of deterioration and any breakages or possible failures.",
          "",
          "Which kind of technology/model should you advise using?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Feedforward Neural Network"],
            "answer": false,
            "explanation": ["Feedforward neural networks are the classic example of neural networks. In fact, they were the first and most elementary type of artificial neural network. Feedforward neural networks are mainly used for supervised learning when the data, mainly numerical, to be learned is neither time-series nor sequential (such as NLP)."]
          },
          {
            "option": ["Convolutional Neural Network"],
            "answer": true,
            "explanation": ["The convolutional neural network (CNN) is a type of artificial neural network extensively used for image recognition and classification. It uses the convolutional layers, that is, the reworking of sets of pixels by running filters on the input pixels.",
              "ml31.png"]
          },
          {
            "option": ["Recurrent Neural Network"],
            "answer": false,
            "explanation": ["A recurrent neural network (RNN) is a class of artificial neural networks where connections between nodes form a directed graph along a temporal sequence."]
          },
          {
            "option": ["Transformers"],
            "answer": false,
            "explanation": ["A transformer is a deep learning model that can give different importance to each part of the input data."]
          },
          {
            "option": ["Reinforcement Learning"],
            "answer": false,
            "explanation": ["Reinforcement Learning provides a software agent that evaluates possible solutions through a progressive reward in repeated attempts. It does not need to provide labels. But it requires a lot of data and several trials, and the possibility to evaluate the validity of each attempt."]
          },
          {
            "option": ["GAN Generative Adversarial Network"],
            "answer": false,
            "explanation": ["GAN is a special class of machine learning frameworks used for the automatic generation of facial images."]
          },
          {
            "option": ["Autoencoder and self-encoder"],
            "answer": false,
            "explanation": ["Autoencoder is a neural network aimed to transform and learn with a compressed representation of raw data."]
          }
        ],
        "feedback": [],
        "references": [
          "https://en.wikipedia.org/wiki/Convolutional_neural_network"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_32",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "You work for a video game company. Your management came up with the idea of creating a game in which the characteristics of the characters were taken from those of the human players. You have been asked to generate not only the avatars but also various visual expressions during the game actions.",
          "",
          "Which kind of technology/model should you advise using?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Feedforward Neural Network"],
            "answer": false,
            "explanation": ["Feedforward neural networks are mainly used for supervised learning when the data, mainly numerical, to be learned is neither time-series nor sequential (such as NLP)."]
          },
          {
            "option": ["Convolutional Neural Network"],
            "answer": false,
            "explanation": ["The convolutional neural network (CNN) is a type of artificial neural network extensively used for image recognition and classification. It uses the convolutional layers, that is, the reworking of sets of pixels by running filters on the input pixels."]
          },
          {
            "option": ["Recurrent Neural Network"],
            "answer": false,
            "explanation": ["A recurrent neural network (RNN) is a class of artificial neural networks where connections between nodes form a directed graph along a temporal sequence."]
          },
          {
            "option": ["Transformers"],
            "answer": false,
            "explanation": ["A transformer is a deep learning model that can give different importance to each part of the input data."]
          },
          {
            "option": ["Reinforcement Learning"],
            "answer": false,
            "explanation": ["Reinforcement Learning provides a software agent that evaluates possible solutions through a progressive reward in repeated attempts. It does not need to provide labels. But it requires a lot of data and several trials, and the possibility to evaluate the validity of each attempt."]
          },
          {
            "option": ["GAN Generative Adversarial Network"],
            "answer": true,
            "explanation": ["GAN is a special class of machine learning frameworks used for the automatic generation of facial images.",
              "GAN can create new characters from the provided images.",
              "It is also used with photographs and can generate new photos that look authentic.",
              "ml32.png",
              "It is a kind of model highly specialized for this task. So, it is the best solution.",
              "Feedforward neural networks are the classic example of neural networks. In fact, they were the first and most elementary type of artificial neural network."]
          },
          {
            "option": ["Autoencoder and self-encoder"],
            "answer": false,
            "explanation": ["Autoencoder is a neural network aimed to transform and learn with a compressed representation of raw data."]
          }
        ],
        "feedback": [],
        "references": [
          "https://en.wikipedia.org/wiki/Generative_adversarial_network",
          "https://developer.nvidia.com/blog/photo-editing-generative-adversarial-networks-2/"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_33",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "You work for a digital publishing website with an excellent technical and cultural level, where you have both famous authors and unknown experts who express ideas and insights. You, therefore, have an extremely demanding audience with strong interests of various types. Users have a small set of articles that they can read for free every month; they need to sign up for a paid subscription.",
          "",
          "You aim to provide your audience with pointers to articles that they will indeed find of interest to themselves.",
          "",
          "Which of these models can be useful to you?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Hierarchical Clustering"],
            "answer": false,
            "explanation": ["Hierarchical Clustering creates clusters using a hierarchical tree. It may be effective, but it is heavy with lots of data, like in our example."]
          },
          {
            "option": ["Autoencoder and self-encoder"],
            "answer": false,
            "explanation": ["Autoencoder and self-encoder are useful when you need to reduce the number of variables under consideration for the model, therefore for dimensionality reduction."]
          },
          {
            "option": ["Convolutional Neural Network"],
            "answer": false,
            "explanation": ["Convolutional Neural Network is used for image classification."]
          },
          {
            "option": ["Collaborative filtering using Matrix Factorization"],
            "answer": true,
            "explanation": ["Collaborative filtering works on the idea that a user may like the same things of the people with similar profiles and preferences.",
              "So, exploiting the choices of other users, the recommendation system makes a guess and can advise people on things not yet been rated by them.",
              "ml33.png"]
          }
        ],
        "feedback": [],
        "references": [
          "https://en.wikipedia.org/wiki/Collaborative_filtering",
          "https://www.youtube.com/playlist?list=PLQY2H8rRoyvy2MiyUBz5RWZr5MPFkV3qz"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_34",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "You work for a video game company. Your management came up with the idea of creating a game in which the characteristics of the characters were taken from those of the human players. You have been asked to generate not only the avatars but also the various visual expressions during the game actions. You are working with GAN - Generative Adversarial Network models, but the training is intensive and time-consuming.",
          "You want to increase the power of your training quickly, but your management wants to keep costs down.",
          "",
          "What solutions could you adopt?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Use preemptible Cloud TPU"],
            "answer": true,
            "explanation": ["You may use preemptible Cloud TPU (70% cheaper) for your fault-tolerant machine learning workloads."]
          },
          {
            "option": ["Use Vertex AI with TPUs"],
            "answer": true,
            "explanation": ["You may use TPUs in the Vertex AI Platform using <a href=\"https://cloud.google.com/vertex-ai/docs/training/configure-compute\">machine types</a>."]
          },
          {
            "option": ["Use the Cloud TPU Profiler TensorBoard plugin"],
            "answer": true,
            "explanation": ["You may optimize your workload using the Profiler with TensorBoard.",
              "<a href=\"https://www.tensorflow.org/tensorboard\">TensorBoard </a> is a visual tool for ML experimentation for Tensorflow"]
          },
          {
            "option": ["Use one Compute Engine Cloud TPU VM and install TensorFlow"],
            "answer": false,
            "explanation": ["There are <a href=\"https://cloud.google.com/deep-learning-vm\">Deep Learning VM Image</a> types. So, you don't have to install your own ML tools and libraries and you can use managed services that help you with more productivity and savings"]
          }
        ],
        "feedback": ["ml34.png"],
        "references": []
      },
      {
        "id": "whizlabs1_35",
        "domain": ["Monitor, optimize, and maintain ML solutions"],
        "intro": [],
        "body": [
          "TerramEarth is a company that builds heavy equipment for mining and agriculture. During maintenance services for vehicles produced by TerramEarth at the service centers, information relating to their use is collected together with administrative and billing data. All this information goes through a data pipeline process that you are asked to automate in the fastest and most managed way, possibly without code.",
          "",
          "Which service do you advise?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Cloud Dataproc"],
            "answer": false,
            "explanation": ["Cloud Dataproc is the managed Hadoop service. So, it could manage data pipelines but in a non-serverless and complex way."]
          },
          {
            "option": ["Cloud Dataflow"],
            "answer": false,
            "explanation": ["Dataflow is more complex, too, even though it has more functionality, such as batch and stream data processing with the same code."]
          },
          {
            "option": ["Cloud Data Fusion"],
            "answer": true,
            "explanation": ["Cloud Data Fusion is a managed service for quickly building data pipelines and ETL processes. It is based on the open-source CDAP project and therefore is portable to any environment.",
              "It has a visual interface that allows you to create codeless data pipelines as required.",
              "ml35.png"]
          },
          {
            "option": ["Cloud Dataprep"],
            "answer": false,
            "explanation": ["Cloud Dataprep is for cleaning, exploration and preparation, and is used primarily for ML processes."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/data-fusion",
          "https://www.youtube.com/watch?v=kehG0CJw2wo"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_36",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "You are starting to operate as a Data Scientist and are working on a model of prizes optimization with products with a lot of categorical features. You don’t know how to deal with them. Your manager told you that you had to encode them in a limited set of numbers.",
          "",
          "Which of the following methods will not help you with this task?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Ordinal Encoding"],
            "answer": false,
            "explanation": ["Ordinal encoding simply creates a correspondence between each unique category with an integer."]
          },
          {
            "option": ["One-Hot Encoding"],
            "answer": false,
            "explanation": ["One-hot encoding creates a sparse matrix with values (0 and 1, see the picture) that indicate the presence (or absence) of each possible value.",
              "36.png"]
          },
          {
            "option": ["Sigmoids"],
            "answer": true,
            "explanation": ["Sigmoids are the most common activation functions (logistic function) for binary classification. There is nothing to do with categorical variables."]
          },
          {
            "option": ["Embeddings"],
            "answer": false,
            "explanation": ["Embeddings are often used with texts and in Natural Language Processing (NLP) and address the problem of complex categories linked together."]
          },
          {
            "option": ["Feature Crosses"],
            "answer": false,
            "explanation": ["Feature crosses creates a new feature created by joining or multiplying multiple variables to add further predictive capabilities, such as transforming the geographic location of properties into a region of interest."]
          }
        ],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/embeddings/categorical-input-data",
          "https://developers.google.com/machine-learning/crash-course/feature-crosses/crossing-one-hot-vectors",
          "https://www.kaggle.com/alexisbcook/categorical-variables"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_37",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "Your company operates an innovative auction site for furniture from all times. You have to create a series of ML models that allow you, starting from the photos, to establish the period, style and type of the piece of furniture depicted.",
          "",
          "Furthermore, the model must be able to determine whether the furniture is interesting and require it to be subject to a more detailed estimate. You want Google Cloud to help you reach this ambitious goal faster.",
          "",
          "Which of the following services do you think is the most suitable?"
        ],
        "open": false,
        "options": [
          {
            "option": ["AutoML Edge"],
            "answer": false,
            "explanation": ["AutoML Edge is for local devices"]
          },
          {
            "option": ["Vision API"],
            "answer": false,
            "explanation": ["Vision API uses pre-trained models trained by Google. This is powerful, but not enough."]
          },
          {
            "option": ["Video Intelligence API"],
            "answer": false,
            "explanation": ["Video Intelligence API manages videos, not pictures. It can extract metadata from any streaming video, get insights in a far shorter time, and let trigger events."]
          },
          {
            "option": ["AutoML"],
            "answer": true,
            "explanation": ["AutoML lets you train models to classify your images with your own characteristics and labels. So, you can tailor your work as you want."]
          }
        ],
        "feedback": ["37.png"],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/export/export-edge-model",
          "https://cloud.google.com/vertex-ai/docs/beginner/beginners-guide",
          "https://cloud.google.com/automl"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_38",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "You are a junior Data Scientist, and you need to create a new classification Machine Learning model with Tensorflow. You have a limited set of data on which you build your model. You know the rule to create training, test and validation datasets, but you're afraid you won't have enough to make something satisfying.",
          "",
          "Which solution is the best one?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Use Cross-Validation"],
            "answer": true,
            "explanation": ["Cross-validation involves running our modeling process on various subsets of data, called \"folds\".",
              "Obviously, this creates a computational load. Therefore, it can be prohibitive in very large datasets, but it is great when you have small datasets.",
              "38.png"]
          },
          {
            "option": ["All data for learning"],
            "answer": false,
            "explanation": ["All data for learning is the best way to obtain overfitting."]
          },
          {
            "option": ["Split data between Training and Test"],
            "answer": false,
            "explanation": ["Split data between Training and Test is wrong because with small datasets other option achieves far better results."]
          },
          {
            "option": ["Split data between Training and Test and Validation"],
            "answer": false,
            "explanation": ["Split data between Training and Test and Validation is wrong because with small datasets other option achieves far better results."]
          }
        ],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/glossary?hl=en#cross-validation",
          "https://www.kaggle.com/alexisbcook/cross-validation"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_39",
        "domain": ["Frame ML problems"],
        "intro": [],
        "body": [
          "You are a Data Scientist, and you work in a large organization. A fellow programmer, who is working on a project with Dataflow, asked you what the GCP techniques support the computer's ability to entertain almost human dialogues and if these techniques can be used individually.",
          "",
          "Which of the following choices do you think is wrong?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Speech to Text"],
            "answer": false,
            "explanation": ["Speech to Text can convert voice to written text."]
          },
          {
            "option": ["Polly"],
            "answer": true,
            "explanation": ["Amazon Polly is a text-to-speech service from AWS, not GCP."]
          },
          {
            "option": ["Cloud NLP"],
            "answer": false,
            "explanation": ["Cloud Natural Language API can understand text meanings such as syntax, feelings, content, entities and can create classifications."]
          },
          {
            "option": ["Text to Speech"],
            "answer": false,
            "explanation": ["Text to Speech can convert written text to voice."]
          },
          {
            "option": ["Speech Synthesis Markup Language (SSML) "],
            "answer": false,
            "explanation": ["Speech Synthesis Markup Language (SSML) is not a service but a language used in Text-to-Speech requests. It gives you the ability to indicate how you want to format the audio, pauses, how to read acronyms, dates, times, abbreviations and so on. Really, it is useful for getting closer to human dialogue."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/speech-to-text",
          "https://cloud.google.com/text-to-speech/docs/basics",
          "https://cloud.google.com/text-to-speech/docs/ssml",
          "https://cloud.google.com/natural-language/"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_40",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "You are working on a deep neural network model with Tensorflow on a cluster of VMs for a Bank. Your model is complex, and you work with huge datasets with complex matrix computations.",
          "You have a big problem: your training jobs last for weeks. You are not going to deliver your project in time.",
          "",
          "Which is the best solution that you can adopt?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Cloud TPU"],
            "answer": true,
            "explanation": ["Given these requirements, it is the best solution.",
              "GCP documentation states that the use of TPUs is advisable with models that:",
              ["use TensorFlow",
                "need training for weeks or months",
                "have huge matrix computations",
                "have deals with big datasets and effective batch sizes"]]
          },
          {
            "option": ["Nvidia GPU"],
            "answer": false,
            "explanation": ["Cloud TPU is better than Nvidia GPU"]
          },
          {
            "option": ["Intel CPU"],
            "answer": false,
            "explanation": ["CPUs turned out to be inadequate for our purpose"]
          },
          {
            "option": ["AMD CPU"],
            "answer": false,
            "explanation": ["CPUs turned out to be inadequate for our purpose"]
          }
        ],
        "feedback": ["5.gif"],
        "references": [
          "https://cloud.google.com/tpu/docs/tpus",
          "https://cloud.google.com/tpu/docs/how-to"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_41",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "You are working with a Linear Regression model for an important Financial Institution. Your model has many independent variables. You discovered that you could not achieve good results because many variables are correlated. You asked for advice from an experienced Data scientist that explains what you can do.",
          "",
          "Which techniques or algorithms did he advise to use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Multiple linear regression with MLE"],
            "answer": false,
            "explanation": [
              "Multiple linear regression is an OLS Ordinary Least Square method."]
          },
          {
            "option": ["Partial Least Squares"],
            "answer": true,
            "explanation": ["Partial Least Squares create new variables that are uncorrelated and uses projected new variables using functions."]
          },
          {
            "option": ["Principal components"],
            "answer": true,
            "explanation": ["The main PCA components reduce the variables while maintaining their variance. Hence, the amount of variability contained in the original characteristics."]
          },
          {
            "option": ["Maximum Likelihood Estimation"],
            "answer": false,
            "explanation": ["Maximum Likelihood Estimation requires independence for variables. It finds model parameter values with probability, maximizing the likelihood of seeing the examples given the model."]
          },
          {
            "option": ["Multivariate Multiple Regression"],
            "answer": true,
            "explanation": ["Multivariate regression finds out ways to explain how different elements in variables react together to changes."]
          }
        ],
        "feedback": ["If you have many independent variables, some of which are correlated with each other. You have multicollinearity; therefore, you cannot use classical linear regression."],
        "references": [
          "https://towardsdatascience.com/partial-least-squares-f4e6714452a",
          "https://en.wikipedia.org/wiki/Partial_least_squares_regression",
          "https://towardsdatascience.com/maximum-likelihood-estimation-984af2dcfcac",
          "https://en.wikipedia.org/wiki/Partial_least_squares_regression",
          "https://www.mygreatlearning.com/blog/introduction-to-multivariate-regression/",
          "https://colab.research.google.com/github/kaustubholpadkar/Predicting-House-Price-using-Multivariate-Linear-Regression/blob/master/Multivariate_Linear_Regression_Python.ipynb",
          "https://en.wikipedia.org/wiki/Polynomial_regression"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_42",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "You are using Vertex AI, with a series of demanding training jobs. So, you want to use TPUs instead of CPUs.",
          "",
          "What is the simplest configuration to indicate it?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Set machineType to cloud-tpu"],
            "answer": true,
            "explanation": ["machineType: cloud-tpu"]
          },
          {
            "option": ["Set replica as master"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Set replica as worker"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Set replica as paramter server (ps)"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [
          "Vertex AI lets you perform distributed training and serving with accelerators (TPUs and GPUs).",
          "You usually must specify the number and types of machines you need for master and worker VMs.",
          "7.gif"
        ],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/training/configure-compute",
          "https://cloud.google.com/vertex-ai/docs/training/distributed-training"
        ]
      },
      {
        "id": "whizlabs1_43",
        "domain": ["Design data preparation and processing systems"],
        "intro": [],
        "body": [
          "You are training a set of modes that should be simple, using regression techniques. During training, your model seems to work. But the tests are giving unsatisfactory results. You discover that you have several wrongs and missing data. You need a tool that helps you cope with them.",
          "",
          "Which of the following problems is not related to Data Validation?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Omitted values."],
            "answer": false,
            "explanation": ["Omitted values are a problem because they may change fundamental statistics like average, for example."]
          },
          {
            "option": ["Categories"],
            "answer": true,
            "explanation": ["Categories are not related to Data Validation. Usually, they are categorical, string variables that in ML usually are mapped in a numerical set before training."]
          },
          {
            "option": ["Duplicate examples."],
            "answer": false,
            "explanation": ["Duplicate examples may change fundamental statistics, too.",
              "For example, we may have duplicates when a program loops and creates the same data several times."]
          },
          {
            "option": ["Bad labels."],
            "answer": false,
            "explanation": ["Having bad labels (with supervised learning) means obtaining a bad model."]
          },
          {
            "option": ["Bad feature values"],
            "answer": false,
            "explanation": ["Having bad features means obtaining a bad model."]
          }
        ],
        "feedback": ["43.png"],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/representation/cleaning-data"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_44",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "You are a junior Data Scientist, and you are being interviewed for a new job.",
          "A senior Data Scientist asked you:",
          "Which metric for classification models evaluation gives you the percentage of real spam email that was recognized correctly?",
          "",
          "What was the exact answer to this question?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Precision"],
            "answer": false,
            "explanation": ["Precision is the metric that shows the percentage of true positives related to all your positive class predictions."]
          },
          {
            "option": ["Recall"],
            "answer": true,
            "explanation": ["Recall indicates how true positives were recalled (found)."]
          },
          {
            "option": ["Accuracy"],
            "answer": false,
            "explanation": ["Accuracy is the percentage of correct predictions on all outcomes."]
          },
          {
            "option": ["F-Score"],
            "answer": false,
            "explanation": ["F1 score is the harmonic mean between precision and recall."]
          }
        ],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/classification/precision-and-recall",
          "https://en.wikipedia.org/wiki/F-score",
          "https://en.wikipedia.org/wiki/Precision_and_recall#/media/File:Precisionrecall.svg"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_45",
        "domain": ["Frame ML problems"],
        "intro": [],
        "body": [
          "You are working on an NLP model. So, you are dealing with words and sentences, not numbers. Your problem is to categorize these words and make sense of them. Your manager told you that you have to use embeddings.",
          "",
          "Which of the following techniques is not related to embeddings?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Count Vector"],
            "answer": false,
            "explanation": ["A Count Vector gives a matrix with the count of every single word in every example. 0 if no occurrence. It is okay for small vocabularies."]
          },
          {
            "option": ["TF-IDF Vector"],
            "answer": false,
            "explanation": ["TF-IDF vectorization counts words in the entire experiment, not a single example or sentence."]
          },
          {
            "option": ["Co-Occurrence Matrix"],
            "answer": false,
            "explanation": ["Co-Occurrence Matrix puts together words that occur together. So, it is more useful for text understanding."]
          },
          {
            "option": ["CoVariance Matrix"],
            "answer": true,
            "explanation": ["Covariance matrices are square matrices with the covariance between each pair of elements.",
              "It measures how much the change of one with respect to another is related.",
              "45.png"]
          }
        ],
        "feedback": [],
        "references": [
          "https://www.analyticsvidhya.com/blog/2017/06/word-embeddings-count-word2veec/",
          "https://developers.google.com/machine-learning/crash-course/embeddings/categorical-input-data",
          "https://developers.google.com/machine-learning/crash-course/feature-crosses/crossing-one-hot-vectors",
          "https://www.wikiwand.com/en/Covariance_matrix",
          "https://towardsdatascience.com/5-things-you-should-know-about-covariance-26b12a0516f1"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_46",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "Your company operates an innovative auction site for furniture from all times. You have to create a series of ML models that allow you to establish the period, style and type of the piece of furniture depicted starting from the photos. Furthermore, the model must be able to determine whether the furniture is interesting and require it to be subject to a more detailed estimate. You created the model, but your manager said that he wants to supply this service to mobile users when they go to the fly markets.",
          "",
          "Which of the following services do you think is the most suitable?"
        ],
        "open": false,
        "options": [
          {
            "option": ["AutoML Edge"],
            "answer": true,
            "explanation": ["AutoML Edge lets your model be deployed on edge devices and, therefore, mobile phones, too.",
              "All the other answers refer to Cloud solutions; so, they are wrong."]
          },
          {
            "option": ["Vision API"],
            "answer": false,
            "explanation": ["Vision API uses pre-trained models trained by Google."]
          },
          {
            "option": ["Video Intelligence API"],
            "answer": false,
            "explanation": ["Video Intelligence API manages videos, not pictures. It can extract metadata from any streaming video, get insights in a far shorter time, and let trigger events."]
          },
          {
            "option": ["AutoML"],
            "answer": false,
            "explanation": ["AutoML lets you train models to classify your images with your own characteristics and labels; so, you can tailor your work as you want."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/export/export-edge-model",
          "https://cloud.google.com/vertex-ai/docs/beginner/beginners-guide"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_47",
        "domain": ["Design data preparation and processing systems"],
        "intro": [],
        "body": [
          "You are training a set of modes that should be simple, using regression techniques. During training, your model seems to work. But the tests are giving unsatisfactory results. You discover that you have several missing data. You need a tool that helps you cope with them.",
          "",
          "Which GCP product would you choose?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Dataproc"],
            "answer": false,
            "explanation": ["Dataproc is a managed Spark and Hadoop service. Therefore, it is for BigData processing."]
          },
          {
            "option": ["Dataprep"],
            "answer": true,
            "explanation": ["Dataprep is a serverless service that lets you examine clean and correct structured and unstructured data.",
              "So, it is fully compliant with our requirements.",
              "47.png"]
          },
          {
            "option": ["Dataflow"],
            "answer": false,
            "explanation": ["Cloud Dataflow is a managed service to run Apache Beam-based data pipeline, both batch and streaming."]
          },
          {
            "option": ["Data Fusion"],
            "answer": false,
            "explanation": ["Data Fusion is for data pipelines too. But it is visual and simpler, and it integrates multiple data sources to produce new data."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/dataprep",
          "https://docs.trifacta.com/display/dp/",
          "https://developers.google.com/machine-learning/crash-course/representation/cleaning-data"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_48",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "In your company you use Tensorflow and Keras as main libraries for Machine Learning and your data is stored in disk files, so block storage.",
          "",
          "Recently there has been the migration of all the management computing systems to Google Cloud and management has requested that the files should be stored in Cloud Storage and that the tabular data should be stored in BigQuery and pre-processed with Dataflow.",
          "",
          "Which of the following techniques is NOT suitable for accessing tabular data as required?"
        ],
        "open": false,
        "options": [
          {
            "option": ["BigQuery Python client library"],
            "answer": false,
            "explanation": ["Python BigQuery client library allows you to get BigQuery data in Panda, so it's definitely useful in this environment."]
          },
          {
            "option": ["BigQuery I/O Connector"],
            "answer": false,
            "explanation": ["BigQuery I/O Connector is used by Dataflow (Apache Beam) for reading Data for transformation and processing, as required."]
          },
          {
            "option": ["tf.data.Iterator"],
            "answer": true,
            "explanation": ["tf.data.Iterator is used for enumerating elements in a Dataset, using Tensorflow API, so it is not suitable for accessing tabular data."]
          },
          {
            "option": ["tf.data.dataset reader"],
            "answer": false,
            "explanation": ["tf.data.dataset reader is wrong because you must first access the data using the tf.data.dataset reader for BigQuery."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/architecture/ml-on-gcp-best-practices#store-tabular-data-in-bigquery",
          "https://cloud.google.com/bigquery/docs/bigquery-storage-python-pandas",
          "https://beam.apache.org/documentation/io/built-in/google-bigquery/"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_49",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "You are a <b>junior Data Scientist</b>. You are working with a linear regression model with sklearn.",
          "",
          "Your outcome model presented a good R-square - coefficient of determination, but the final results were poor.",
          "",
          "When you asked for advice, your mentor laughed and said that you failed because of the Anscombe Quartet problem.",
          "",
          "What are the other possible problems described by the famous Anscombe Quartet?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Not linear relation between independent and dependent variables"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Outliers that change the result"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Correlation among variables"],
            "answer": false,
            "explanation": ["Correlation prevent the model from working, but they do not give good theoretical results."]
          },
          {
            "option": ["Uncorrect Data"],
            "answer": false,
            "explanation": ["Incorrect data prevent the model from working, but they do not give good theoretical results."]
          }
        ],
        "answers": ["A", "B"],
        "feedback": [
          "The most common problems are:",
          ["Not linear relation and",
            "Outliers"]
        ],
        "references": [
          "https://en.wikipedia.org/wiki/Anscombe%27s_quartet",
          "https://www.r-bloggers.com/2015/01/k-means-clustering-is-not-a-free-lunch/"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_50",
        "domain": ["Design data preparation and processing systems"],
        "intro": [],
        "body": [
          "You are working on a deep neural network model with Tensorflow. Your model is complex, and you work with very large datasets full of numbers.",
          "You want to increase performances. But you cannot use further resources.",
          "You are afraid that you are not going to deliver your project in time.",
          "Your mentor said to you that normalization could be a solution.",
          "",
          "Which of the following choices do you think is not for data normalization?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Scaling to a range"],
            "answer": false,
            "explanation": ["Scaling to a range converts numbers into a standard range ( 0 to 1 or -1 to 1)."]
          },
          {
            "option": ["Feature Clipping"],
            "answer": false,
            "explanation": ["Feature Clipping caps all numbers outside a certain range."]
          },
          {
            "option": ["Z-test"],
            "answer": true,
            "explanation": ["z-test is not correct because it is a statistic that is used to prove if a sample mean belongs to a specific population. For example, it is used in medical trials to prove whether a new drug is effective or not."]
          },
          {
            "option": ["log scaling"],
            "answer": false,
            "explanation": ["Log Scaling uses the logarithms instead of your values to change the shape. This is possible because the log function preserves monotonicity."]
          },
          {
            "option": ["Z-score"],
            "answer": false,
            "explanation": ["Z-score is a variation of scaling: the resulting number is divided by the standard deviations. It is aimed at obtaining distributions with mean = 0 and std = 1."]
          }
        ],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/data-prep/transform/transform-numeric",
          "https://developers.google.com/machine-learning/crash-course/images/RegularizationTwoLossFunctions.svg"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_51",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "Your team is designing a financial analysis model for a major Bank.",
          "",
          "The requirements are:",
          ["Various banking applications will send transactions to the new system both in real-time and in batch in standard/normalized format",
            "The data will be stored in a repository",
            "Structured Data will be trained and retrained",
            "Labels are drawn from the data."],
          "You need to prepare the model quickly and decide to use AutoML for structured Data.",
          "",
          "Which GCP Services could you use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["AutoML"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Tensorflow Extended"],
            "answer": false,
            "explanation": ["Tensorflow Extended is for deploying production ML pipelines, and it doesn't have any AutoML Services"]
          },
          {
            "option": ["BigQuery ML"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Vertex AI"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [
          "AutoML Tables is aimed to automatically build and deploy models on your data in the fastest way possible.",
          "It is integrated within BigQuery ML and is available in the unified Vertex AI."
        ],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/tabular-data/tabular101",
          "https://cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-automl",
          "https://cloud.google.com/vertex-ai/docs/beginner/beginners-guide"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_52",
        "domain": ["Automate & orchestrate ML pipelines"],
        "intro": [],
        "body": [
          "You are starting to operate as a Data Scientist and are working on a deep neural network model with Tensorflow to optimize the level of customer satisfaction for after-sales services with the goal of creating greater client loyalty.",
          "You have to follow the entire lifecycle: model development, design, and training, testing, deployment, and retraining.",
          "You are looking for UI tools that can help you work and solve all issues faster.",
          "",
          "Which solutions can you adopt?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Tensorboard"],
            "answer": true,
            "explanation": ["Tensorboard is aimed at model creation and experimentation:",
              ["Profiling",
                "Monitoring metrics, weights, biases",
                "Examine model graph",
                "Working with embeddings"]]
          },
          {
            "option": ["Jupyter notebooks"],
            "answer": true,
            "explanation": ["Jupyter notebooks are a wonderful tool to develop, experiment, and deploy. You may have the latest data science and machine learning frameworks with them."]
          },
          {
            "option": ["KFServing"],
            "answer": false,
            "explanation": ["KFServing is an open-source library for Kubernetes that enables serverless inferencing. It works with TensorFlow, XGBoost, scikit-learn, PyTorch, and ONNX to solve issues linked to production model serving. So, no UI."]
          },
          {
            "option": ["Kubeflow UI"],
            "answer": true,
            "explanation": [
              "The Kubeflow UIs is for ML pipelines and includes visual tools for:",
              ["Pipelines dashboards",
                "Hyperparameter tuning",
                "Artifact Store",
                "Jupyter notebooks"]]
          },
          {
            "option": ["Vertex AI"],
            "answer": false,
            "explanation": ["With Vertex AI you can use AutoML training and custom training in the same environment."]
          }
        ],
        "feedback": [],
        "references": [
          "https://www.tensorflow.org/tensorboard",
          "https://www.kubeflow.org/docs/components/kfserving/kfserving/",
          "https://cloud.google.com/vertex-ai/docs/pipelines/visualize-pipeline",
          "https://www.kubeflow.org/docs/components/central-dash/overview/"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_53",
        "domain": ["Design data preparation and processing systems"],
        "intro": [],
        "body": [
          "You work for an industrial company that wants to improve its quality system. It has developed its own deep neural network model with Tensorflow to identify the semi-finished products to be discarded with images taken from the production lines in the various production phases.",
          "You work on this project. You need to deal with input data that is binary (images) and made by CSV files.",
          "You are looking for the most convenient way to import and manage this type of data.",
          "",
          "Which is the best solution that you can adopt?"
        ],
        "open": false,
        "options": [
          {
            "option": ["tf.RaggedTensor"],
            "answer": false,
            "explanation": ["RaggedTensor is a tensor with ragged dimensions, that is with different lengths like this: [[6, 4, 7, 4], [], [8, 12, 5], [9], []]"]
          },
          {
            "option": ["Tf.quantization"],
            "answer": false,
            "explanation": ["Quantization is aimed to reduce CPU and TPU GCP latency, processing, and power."]
          },
          {
            "option": ["tf.train.Feature"],
            "answer": false,
            "explanation": ["tf.train is a feature for Graph-based Neural Structured model training"]
          },
          {
            "option": ["tf.TFRecordReader"],
            "answer": true,
            "explanation": ["The TFRecord format is efficient for storing a sequence of binary and not-binary records using Protocol buffers for serialization of structured data."]
          }
        ],
        "feedback": [],
        "references": [
          "https://www.tensorflow.org/tutorials/load_data/tfrecord"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_54",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "You work for an industrial company that wants to improve its quality system. It has developed its own deep neural network model with Tensorflow to identify the semi-finished products to be discarded with images taken from the production lines in the various production phases.",
          "",
          "You need to monitor the performance of your models and let them go faster.",
          "",
          "Which is the best solution that you can adopt?"
        ],
        "open": false,
        "options": [
          {
            "option": ["TF Profiler"],
            "answer": true,
            "explanation": ["TensorFlow Profiler is a tool for checking the performance of your TensorFlow models and helping you to obtain an optimized version.",
              "In TensorFlow 2, the default is eager execution. So, one-off operations are faster, but recurring ones may be slower. So, you need to optimize the model.",
              "54.png"]
          },
          {
            "option": ["TF function"],
            "answer": false,
            "explanation": ["TF function is a transformation tool used to make graphs out of your programs. It helps to create performant and portable models but is not a tool for optimization."]
          },
          {
            "option": ["TF Trace"],
            "answer": false,
            "explanation": ["TF tracing lets you record TensorFlow Python operations in a graph."]
          },
          {
            "option": ["TF Debugger"],
            "answer": false,
            "explanation": ["TF debugging is for Debugger V2 and creates a log of debug information."]
          },
          {
            "option": ["TF Checkpoint"],
            "answer": false,
            "explanation": ["Checkpoints catch the value of all parameters in a serialized SavedModel format."]
          }
        ],
        "feedback": [],
        "references": [
          "https://www.tensorflow.org/guide/profiler",
          "https://cloud.google.com/tpu/docs/cloud-tpu-tools#capture_profile",
          "https://www.tensorflow.org/tensorboard/debugger_v2",
          "https://www.tensorflow.org/guide/checkpoint"
        ],
        "date": ""
      },
      {
        "id": "whizlabs1_55",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "You work for an important Banking group.",
          "",
          "The purpose of your current project is the automatic and smart acquisition of data from documents and modules of different types.",
          "",
          "You work on big datasets with a lot of private information that cannot be distributed and disclosed.",
          "",
          "You are asked to replace sensitive data with specific surrogate characters.",
          "",
          "Which of the following techniques do you think is best to use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Format-preserving encryption"],
            "answer": false,
            "explanation": ["Format-preserving encryption (FPE) encrypts in the same format as the plaintext data.",
              "For example, a 16-digit credit card number becomes another 16-digit number."]
          },
          {
            "option": ["K-anonymity"],
            "answer": false,
            "explanation": ["k-anonymity is a way to anonymize data in such a way that it is impossible to identify person-specific information. Still, you maintain all the information contained in the record."]
          },
          {
            "option": ["Replacement"],
            "answer": false,
            "explanation": ["Replacement just substitutes a sensitive element with a specified value."]
          },
          {
            "option": ["Masking"],
            "answer": true,
            "explanation": ["Masking replaces sensitive values with a given surrogate character, like hash (#) or asterisk (*)."]
          }
        ],
        "feedback": ["55.png"],
        "references": [
          "https://en.wikipedia.org/wiki/Data_masking",
          "https://en.wikipedia.org/wiki/K-anonymity",
          "https://www.mysql.com/it/products/enterprise/masking.html"
        ],
        "date": ""
      }
    ],
    "whizlabs2": [
      {
        "id": "whizlabs2_1",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "You have a customer ranking ML model in production for an e-commerce site; the model used to work very well.",
          "",
          "You use GCP managed services, specifically Vertex AI.",
          "",
          "Suddenly, there is a sensible degradation in the quality of the inferences. You perform various checks, but the model seems to be perfectly fine.",
          "",
          "Finally, you control the input data and notice that the frequency distributions have changed for a specific feature.",
          "",
          "Which GCP service can be helpful for you to manage features in a more organized way?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Regularization against overfitting"],
            "answer": false,
            "explanation": ["Regularization against overfitting is wrong because the model is OK"]
          },
          {
            "option": ["Feature Store"],
            "answer": true,
            "explanation": ["Feature engineering means transforming input data, often strings, into a feature vector.",
              "Lots of effort is spent in mapping categorical values in the best way: we have to convert strings to numeric values. We have to define a vocabulary of possible values, usually mapped to integer values.",
              "We remember that in an ML model everything must be translated into numbers. Therefore it is easy to run into problems of this type.",
              "Vertex Feature Store is a service to organize and store ML features through a central store.",
              "This allows you to share and optimize ML features important for the specific environment and to reuse them at any time.",
              "All these translate into the greater speed of the creation of ML services. But these also allow minimizing problems such as processing skew, which occurs when the distribution of data in production is different from that of training, often due to errors in the organization of the features.",
              "For example, Training-serving skew may happen when your training data uses a different unit of measure than prediction requests.",
              "So, Training-serving skew happens when you generate your training data differently than you generate the data you use to request predictions. For example, if you use an average value, and for training purposes, you average over 10 days, but you average over the last month when you request prediction."]
          },
          {
            "option": ["Hyperparameters tuning"],
            "answer": false,
            "explanation": ["Hyperparameters tuning is wrong because the model is OK. So both Regularization against overfitting and Hyperparameters are tuned."]
          },
          {
            "option": ["Model Monitoring"],
            "answer": false,
            "explanation": ["Monitor is suitable for Training-serving skew prevention, not organization."]
          }
        ],
        "feedback": ["ml2-1.png"],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/representation/feature-engineering",
          "https://cloud.google.com/architecture/ml-on-gcp-best-practices#use-vertex-feature-store-with-structured-data",
          "https://cloud.google.com/blog/topics/developers-practitioners/kickstart-your-organizations-ml-application-development-flywheel-vertex-feature-store"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_2",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "You have a customer ranking ML model in production for an e-commerce site; the model used to work very well. You use GCP managed services, specifically Vertex AI. Suddenly there is a sensible degradation in the quality of the inferences. You perform various checks, but the model seems to be perfectly fine.",
          "",
          "Which of the following methods could you use to avoid such problems?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Regularization against overfitting"],
            "answer": false,
            "explanation": ["Regularization against overfitting is wrong because the model is OK."]
          },
          {
            "option": ["Feature Store"],
            "answer": false,
            "explanation": ["Feature Store is suitable for feature organization, not for data skew prevention."]
          },
          {
            "option": ["Hyperparameters tuning"],
            "answer": false,
            "explanation": ["Hyperparameters tuning is wrong because the model is OK."]
          },
          {
            "option": ["Model Monitoring"],
            "answer": true,
            "explanation": ["Input data to ML models may change over time. This can be a serious problem, as performance will obviously degrade.",
              "To avoid this, it is necessary to monitor the quality of the forecasts continuously.",
              "Vertex Model Monitoring has been designed just for this.",
              "The main goal is to cope with feature skew and drift detection.",
              "For skew detection, it looks at and compares the feature's values distribution in the training data.",
              "For drift detection, it looks at and compares the feature's values distribution in the production data.",
              "It uses two main methods:",
              ["<a href=\"https://en.wikipedia.org/wiki/Jensen%E2%80%93Shannon_divergence\">Jensen-Shannon divergence</a> for numerical features.",
                "<a href=\"https://en.wikipedia.org/wiki/Chebyshev_distance\">L-infinity distance</a> for categorical features. More details can be found <a href=\"https://github.com/tensorflow/data-validation/blob/master/g3doc/anomalies.md\">here</a>"],
              "ml2-2.png"]
          }
        ],
        "feedback": [],
        "references": [
          "https://en.wikipedia.org/wiki/Jensen%E2%80%93Shannon_divergence",
          "https://en.wikipedia.org/wiki/Chebyshev_distance",
          "https://github.com/tensorflow/data-validation/blob/master/g3doc/anomalies.md",
          "https://cloud.google.com/vertex-ai/docs/model-monitoring/overview"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_3",
        "domain": ["Automate & orchestrate ML pipelines"],
        "intro": [],
        "body": [
          "Your company runs an e-commerce site. You produced static deep learning models with Tensorflow that process Analytics-360 data. They have been in production for some time. Initially, they gave you excellent results, but then gradually, the accuracy has decreased.",
          "",
          "You are using Compute Engine and GKE. You decided to use a library that lets you have more control over all processes, from development up to production.",
          "",
          "Which tool is the best one for your needs?"
        ],
        "open": false,
        "options": [
          {
            "option": ["TFX"],
            "answer": true,
            "explanation": ["TensorFlow Extended (TFX) is a set of open-source libraries to build and execute ML pipelines in production. Its main functions are:",
              ["Metadata management",
                "Model validation",
                "Deployment",
                "Production execution.",
                "The libraries can also be used individually."],
              "ml2-3.png"
            ]
          },
          {
            "option": ["Vertex AI"],
            "answer": false,
            "explanation": ["Vertex AI is an integrated suite of ML managed products, and you are looking for a library.",
              "Vertex AI's main functions are:",
              ["Train custom and AutoML models",
                "Evaluate and tune models",
                "Deploy models",
                "Manage prediction: Batch, Online and monitoring",
                "Manage model versions: <b>workflows and retraining</b>"]]
          },
          {
            "option": ["SageMaker"],
            "answer": false,
            "explanation": ["Sagemaker is a managed product in AWS, not GCP."]
          },
          {
            "option": ["Kubeflow"],
            "answer": false,
            "explanation": ["Kubeflow Pipelines don’t deal with production control.",
              "Kubeflow Pipelines is an open-source platform designed specifically for creating and deploying ML workflows based on Docker containers.",
              "Their main features:",
              ["Using packaged templates in Docker images in a K8s environment",
                "Manage your various tests / experiments",
                "Simplifying the orchestration of ML pipelines",
                "Reuse components and pipelines"]]
          }
        ],
        "feedback": [
        ],
        "references": [
          "https://www.tensorflow.org/tfx"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_4",
        "domain": ["Design data preparation and processing systems"],
        "intro": [],
        "body": [
          "Your company runs a big retail website. You develop many ML models for all the business activities. You migrated to Google Cloud when you were using Vertex AI. Your models are developed with PyTorch, TensorFlow and BigQuery ML.",
          "",
          "You also use BigTable and CloudSQL, and of course Cloud Storage. In many cases, the same data is used for multiple models and projects. And your data is continuously updated, sometimes in streaming mode.",
          "",
          "Which is the best way to organize the input data?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Dataflow per Data Transformation sia in streaming che batch"],
            "answer": false,
            "explanation": ["Dataflow deals with Data Pipelines and is not a way to access and organize data."]
          },
          {
            "option": ["CSV"],
            "answer": false,
            "explanation": ["CSV is just a data format, and an ML Dataset is made with data and metadata dealing with many different formats."]
          },
          {
            "option": ["BigQuery"],
            "answer": false,
            "explanation": ["BigQuery and BigTable are just one of the ways in which you can store data. Moreover, BigTable is not currently supported for data store for Vertex datasets."]
          },
          {
            "option": ["Datasets"],
            "answer": true,
            "explanation": ["Vertex AI integrates the following elements:",
              ["Datasets: data, metadata and annotations, structured or unstructured. For all kinds of libraries.",
                "Training pipelines to build an ML model",
                "ML models, imported or created in the environment",
                "Endpoints for inference"],
              "Because Datasets are suitable for all kinds of libraries, it is a useful abstraction for this requirement.",
              "ml2-4.png"]
          },
          {
            "option": ["BigTable"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/datasets/datasets",
          "https://cloud.google.com/vertex-ai/docs/training/using-managed-datasets",
          "https://codelabs.developers.google.com/codelabs/vertex-ai-custom-code-training"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_5",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "You are a Data Scientist and working on a project with PyTorch. You need to save the model you are working on because you have to cope with an urgency. You, therefore, need to resume your work later.",
          "",
          "What command will you use for this operation?"
        ],
        "open": false,
        "options": [
          {
            "option": ["callbacks.ModelCheckpoint (keras)"],
            "answer": false,
            "explanation": ["ModelCheckpoint is used with keras."]
          },
          {
            "option": ["save"],
            "answer": true,
            "explanation": ["PyTorch is a popular library for deep learning that you can leverage using GPUs and CPUs.",
              "When you have to save a model for resuming training, you have to record both models and updated buffers and parameters in a checkpoint.",
              "A checkpoint is an intermediate dump of a model’s entire internal state (its weights, current learning rate, etc.) so that the framework can resume the training from that very point.",
              "In other words, you train for a few iterations, then evaluate the model, checkpoint it, then fit some more. When you are done, save the model and deploy it as normal.",
              "To save checkpoints, you must use torch.save() to serialize the dictionary of all your state data,",
              "In order to reload, the command is torch.load().",
              "ml2-5.png"]
          },
          {
            "option": ["model.fit"],
            "answer": false,
            "explanation": ["model.fit is used to fit a model in scikit-learn best."]
          },
          {
            "option": ["train.Checkpoint TF"],
            "answer": false,
            "explanation": ["train.Checkpoint is used with Tensorflow."]
          }
        ],
        "feedback": [],
        "references": [
          "https://pytorch.org/tutorials/recipes/recipes/saving_and_loading_a_general_checkpoint.html",
          "https://towardsdatascience.com/ml-design-pattern-2-checkpoints-e6ca25a4c5fe"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_6",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "You are a Data Scientist. You are going to develop an ML model with Python. Your company adopted GCP and Vertex AI, but you need to work with your developing tools.",
          "",
          "What are you going to do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Use an Emulator"],
            "answer": false,
            "explanation": ["Use an Emulator is wrong because there isn’t a specific Emulator for using the SDK"]
          },
          {
            "option": ["Work with the Console"],
            "answer": false,
            "explanation": ["Work with the Console is wrong because it was asked to create a local work environment."]
          },
          {
            "option": ["Create a service account key"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Set the environment variable named GOOGLE_APPLICATION_CREDENTIALS"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [
          "Client libraries are used by developers for calling the Vertex AI API in their code.",
          "The client libraries reduce effort and boilerplate code.",
          "The correct procedure is:",
          ["Enable the Vertex AI API & Prediction and Compute Engine APIs.",
            "Enable the APIs",
            "Create/Use a Service account and a service account key",
            "Set the environment variable named GOOGLE_APPLICATION_CREDENTIALS"]
        ],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/start/client-libraries#python"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_7",
        "domain": ["Automate & orchestrate ML pipelines"],
        "intro": [],
        "body": [
          "You are working with Vertex AI, the managed ML Platform in GCP. You are dealing with custom training and you are looking and studying the job progresses during the training service lifecycle.",
          "",
          "Which of the following states is not correct?"
        ],
        "open": false,
        "options": [
          {
            "option": ["JOB_STATE_ACTIVE"],
            "answer": true,
            "explanation": [],
          },
          {
            "option": ["JOB_STATE_RUNNING"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["JOB_STATE_QUEUED"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["JOB_STATE_SUCCEEDED"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": ["Queueing a new job",
          "When you create a CustomJob or HyperparameterTuningJob, the job is in the <b>JOB_STATE_QUEUED</b>.",
          "When a training job starts, Vertex AI schedules as many workers according to configuration, in parallel.",
          "So Vertex AI starts running code as soon as a worker becomes available.",
          "When all the workers are available, the job state will be: <b>JOB_STATE_RUNNING</b>.",
          "A training job ends successfully when its primary replica exits with exit code 0.",
          "Therefore all the other workers will be stopped. The state will be: <b>JOB_STATE_SUCCEEDED</b>.",
          "So <b>JOB_STATE_ACTIVE</b> is wrong simply because this state doesn’t exist. All the other answers are correct.",
          "Each replica in the training cluster is given a single role or task in distributed training. For example:",
          "Primary replica: Only one replica, whose main task is to manage the workers.",
          "Worker(s): Replicas that do part of the work.",
          "Parameter server(s): Replicas that store model parameters (optional).",
          "Evaluator(s): Replicas that evaluate your model (optional)."
        ],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/reference/rest/v1/JobState"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_8",
        "domain": ["Monitor, optimize, and maintain ML solutions"],
        "intro": [],
        "body": [
          "You work as a Data Scientist for a major banking institution that recently completed the first phase of migration in GCP.",
          "",
          "You now have to work in the GCP Managed Platform for ML. You need to deploy a custom model with Vertex AI so that it will be available for online predictions.",
          "",
          "Which is the correct procedure?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Save the model in a Docker container"],
            "answer": true,
            "explanation": ["Vertex AI Prediction can serve prediction deploying custom or pre-built containers on N1 Compute Engine Instances.",
              "You create an \"endpoint object\" for your model and then you can deploy the various versions of your model.",
              "Its main elements are given below:",
              "Custom or Pre-built containers",
              "Model",
              "Vertex AI Prediction uses an architectural paradigm that is based on immutable instances of models and model versions.",
              "Regional endpoint"]
          },
          {
            "option": ["Set a VM with a GPU processor"],
            "answer": false,
            "explanation": ["You don’t need to set any specific VM. You will point out the configuration and Vertex will manage everything."]
          },
          {
            "option": ["Use TensorFlow Serving"],
            "answer": false,
            "explanation": ["TensorFlow Serving is used under the hood, but you don’t need to call their functions explicitly."]
          },
          {
            "option": ["Create an endpoint and deploy to that endpoint"],
            "answer": true,
            "explanation": ["The endpoint is the object that will be equipped with all the resources needed for online predictions and it is the target for your model deployments."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/predictions/use-custom-container",
          "https://www.tensorflow.org/tfx/guide/serving",
          "https://cloud.google.com/vertex-ai/docs/general/deployment"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_9",
        "domain": ["Monitor, optimize, and maintain ML solutions"],
        "intro": [],
        "body": [
          "You work as a Data Scientist in a Startup. You want to create an optimized input pipeline to increase the performance of training sessions, avoiding GPUs and TPUs as much as possible because they are expensive.",
          "",
          "Which technique or algorithm do you think is best to use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Caching"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Prefetching"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Parallelizing data"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["All of the above"],
            "answer": true,
            "explanation": ["GPUs and TPUs can greatly increase the performance of training sessions, but an optimized input pipeline is likewise important.",
              "The tf.data API provides these functions:",
              "Prefetching",
              "tf.data.Dataset.prefetch: while the execution of a training pass, the data for the next pass is read.",
              "Parallelizing data transformation",
              "The tf.data API offers the map function for the tf.data.Dataset.map transformation.",
              "This transformation can be parallelized across multiple cores with the num_parallel_calls option.",
              "Sequential and parallel interleave",
              "tf.data.Dataset.interleave offers the possibility of interleaving and allowing multiple datasets to execute in parallel (num_parallel_calls).",
              "Caching",
              "tf.data.Dataset.cache allows you to cache a dataset increasing performance."]
          }
        ],
        "feedback": [],
        "references": [
          "https://www.tensorflow.org/guide/data_performance"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_10",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "You are working on a new model together with your client, a large financial institution. The data you are dealing with contains PII (Personally Identifiable Information) contents.",
          "",
          "You face 2 different sets of problems:",
          ["Transform data to hide personal information you don't need",
            "Protect your work environment because certain combinations of personal data are useful for your model and you need to keep them"
          ],
          "What are the solutions offered by GCP that it is advisable to use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Cloud Armor security policies"],
            "answer": false,
            "explanation": ["Cloud Armor is a security service at the edge against attacks like DDoS."]
          },
          {
            "option": ["Cloud HSM"],
            "answer": false,
            "explanation": ["Cloud HSM is a service for cryptography based on special and certified hardware and software"]
          },
          {
            "option": ["Cloud Data Loss Prevention"],
            "answer": true,
            "explanation": ["Cloud Data Loss Prevention is a service that can discover, conceal and mask personal information in data."]
          },
          {
            "option": ["Network firewall rules"],
            "answer": false,
            "explanation": ["Network firewall rules are a set of rules that deny or block network traffic in a VPC, just network rules. VPC service-controls lets you define control at a more granular level, with context-aware access, suitable for multi-tenant environments like this one."]
          },
          {
            "option": ["VPC service-controls"],
            "answer": true,
            "explanation": ["VPC service-controls is a service that lets you build a security perimeter that is not accessible from outside; in this way data exfiltration dangers are greatly mitigated. It is a network security service that helps protect data in a Virtual Private Cloud (VPC) in a multi-tenant environment."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/vpc-service-controls",
          "https://cloud.google.com/dlp"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_11",
        "domain": ["Frame ML problems"],
        "intro": [],
        "body": [
          "You are a junior Data Scientist and working on a deep neural network model with Tensorflow to optimize the level of customer satisfaction for after-sales services to create greater client loyalty.",
          "",
          "You are struggling with your model (learning rates, hidden layers and nodes selection) for optimizing processing and letting it converge in the fastest way.",
          "",
          "What is your problem in ML language?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Cross Validation"],
            "answer": false,
            "explanation": ["Cross Validation is related to the input data organization for training, test and validation."]
          },
          {
            "option": ["Regularization"],
            "answer": false,
            "explanation": ["Regularization is related to feature management and overfitting."]
          },
          {
            "option": ["Hyperparameter tuning"],
            "answer": true,
            "explanation": ["ML training Manages three main data categories:",
              ["<b>Training data</b> is also called examples or records. It is the main input for model configuration and, in supervised learning, presents labels, that are the correct answers based on past experience. Input data is used to build the model but will not be part of the model.",
                "<b>Parameters</b> are instead the variables to be found to solve the riddle. They are part of the final model and they make the difference among similar models of the same type.",
                "<b>Hyperparameters</b> are configuration variables that influence the training process itself: Learning rate, hidden layers number, number of epochs, regularization, batch size are all examples of hyperparameters."],
              "Hyperparameters tuning is made during the training job and used to be a manual and tedious process, made by running multiple trials with different values.",
              "The time required to train and test a model can depend upon the choice of its hyperparameters.",
              "With Vertex AI you just need to prepare a simple YAML configuration without coding."]
          },
          {
            "option": ["drift detection management"],
            "answer": false,
            "explanation": ["Drift management is when data distribution changes and you have to adjust the model."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/training/hyperparameter-tuning-overview",
          "https://cloud.google.com/blog/products/ai-machine-learning/hyperparameter-tuning-cloud-machine-learning-engine-using-bayesian-optimization"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_12",
        "domain": ["Monitor, optimize, and maintain ML solutions"],
        "intro": [],
        "body": [
          "You work for an important organization. Your manager tasked you with a new classification model with lots of data drawn from the company Data Lake.",
          "",
          "The big problem is that you don’t have the labels for all the data, but you have very little time to complete the task for only a subset of it.",
          "",
          "Which of the following services could help you?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Vertex Data Labeling"],
            "answer": true,
            "explanation": ["In supervised learning, the correctness of label data, together with the quality of all your training data, is utterly important for the resulting model and the quality of the future predictions.",
              "If you cannot have your data correctly labeled, you may request professional people to complete your training data.",
              "GCP has a service for this: Vertex AI data labeling. Human labelers will prepare correct labels following your directions.",
              "You have to set up a data labeling job with:",
              ["The dataset",
                "A list, vocabulary of the possible labels",
                "An instructions document for the professional people"]]
          },
          {
            "option": ["Mechanical Turk"],
            "answer": false,
            "explanation": ["Mechanical Turk is an Amazon service."]
          },
          {
            "option": ["GitLab ML"],
            "answer": false,
            "explanation": ["GitLab is a DevOps lifecycle tool."]
          },
          {
            "option": ["Tag Manager"],
            "answer": false,
            "explanation": ["Tag Manager is in the Google Analytics ecosystem."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/datasets/data-labeling-job"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_13",
        "domain": ["Automate & orchestrate ML pipelines"],
        "intro": [],
        "body": [
          "Your company runs an e-commerce site. You manage several deep learning models with Tensorflow that process Analytics-360 data, and they have been in production for some time. The modeling is made essentially with customers and orders data. You need to classify many business outcomes.",
          "",
          "Your Manager realized that different teams in different projects used to deal with the same features based on the same data differently. The problem arose when models drifted unexpectedly over time.",
          "",
          "You have to advise your Manager on the best strategy. Which of the following do you choose?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Each group classifies their features and sends them to the other teams"],
            "answer": false,
            "explanation": ["It creates confusion and doesn't solve the problem."]
          },
          {
            "option": ["For each model of the different features store them in Cloud Storage"],
            "answer": false,
            "explanation": ["It will not avoid feature definition overlapping. Cloud Storage is not enough for identifying different features."]
          },
          {
            "option": ["Search for features in Cloud Storage and reuse them"],
            "answer": false,
            "explanation": ["It will not avoid feature definition overlapping. Cloud Storage is not enough for identifying different features."]
          },
          {
            "option": ["Search the Vertex Feature Store for features that are the same"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Insert or update the features in Vertex Feature Store accordingly"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [
          "The best strategy is to use the Vertex Feature Store.",
          "Vertex Feature Store is a service to organize and store ML features through a central store.",
          "This allows you to share and optimize ML features important for the specific environment and to reuse them at any time.",
          "Here is the typical procedure for using the Feature Store:",
          ["Check out the Vertex Feature Store for Features that you can reuse or use as a template.",
            "If you don't find a Feature that fits perfectly, create or modify an existing one.",
            "Update or insert features of your work in the Vertex Feature Store.",
            "Use them in training work.",
            "Sets up a periodic job to generate feature vocabulary data and optionally updates the Vertex Feature Store"],
          "2-13.png"
        ],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/representation/feature-engineering",
          "https://cloud.google.com/architecture/ml-on-gcp-best-practices#use-vertex-feature-store-with-structured-data",
          "https://cloud.google.com/blog/topics/developers-practitioners/kickstart-your-organizations-ml-application-development-flywheel-vertex-feature-store"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_14",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "You are <b>starting</b> to operate as a Data Scientist. You speak with your mentor who asked you to prepare a simple model with a nonparametric Machine Learning algorithm of your choice. The problem is that you don’t know the difference between parametric and nonparametric algorithms. So you looked for it.",
          "",
          "Which of the following methods are nonparametric?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Simple Neural Networks"],
            "answer": false,
            "explanation": ["With Neural Networks you have to figure out the parameters of a specific function that best fit the data"]
          },
          {
            "option": ["K-Nearest Neighbors"],
            "answer": true,
            "explanation": ["K-nearest neighbor is a simple supervised algorithm for both classification and regression problems.",
              "You begin with data that is already classified. A new example will be set by looking at the k nearest classified points. Number k is the most important hyperparameter."]
          },
          {
            "option": ["Decision Trees"],
            "answer": true,
            "explanation": ["A decision tree has a series of tests inside a flowchart-like structure. So, no mathematical functions to solve."]
          },
          {
            "option": ["Logistic Regression"],
            "answer": false,
            "explanation": ["With Logistic Regression you have to figure out the parameters of a specific function that best fit the data."]
          }
        ],
        "feedback": [
          "The non-parametric method refers to a method that does not assume any distribution with any function with parameters."],
        "references": [
          "https://towardsdatascience.com/all-machine-learning-algorithms-you-should-know-in-2021-2e357dd494c7",
          "https://towardsdatascience.com/k-nearest-neighbors-knn-algorithm-23832490e3f4",
          "https://machinelearningmastery.com/parametric-and-nonparametric-machine-learning-algorithms/"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_15",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "As a Data Scientist, you are involved in various projects in an important retail company. You prefer to use, whenever possible, simple and easily explained algorithms. Where you can't get satisfactory results, you adopt more complex and sophisticated methods. Your manager told you that you should try ensemble methods. Intrigued, you are documented.",
          "",
          "Which of the following are ensemble-type algorithms?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Random Forests"],
            "answer": true,
            "explanation": ["Random forests are made with multiple decision trees, random sampling, a subset of variables and optimization techniques at each step (voting the best models).",
              "AdaBoost is built with multiple decision trees, too, with the following differences:",
              ["It creates stumps, that is, trees with only one node and two leaves.",
                "Stumps with less error win.",
                "Ordering is built in such a way as to reduce errors."]]
          },
          {
            "option": ["DCN"],
            "answer": false,
            "explanation": ["Deep and Cross Networks are a new kind of Neural Networks."]
          },
          {
            "option": ["Decision Tree"],
            "answer": false,
            "explanation": ["Decision Trees are flowchart like with a series of tests on the nodes."]
          },
          {
            "option": ["XGBoost"],
            "answer": true,
            "explanation": ["XGBoost is currently very popular. It is similar to Gradient Boost with the following differences:",
              ["Leaf nodes pruning, that is regularization in order to keep the best ones for generalization",
                "Newton Boosting instead of gradient descent, so math-based and faster",
                "Correlation between trees reduction with an additional randomization parameter",
                "Optimized algorithm for tree penalization"]]
          },
          {
            "option": ["Gradient Boost"],
            "answer": true,
            "explanation": ["Gradient Boost is built with multiple decision trees, too, with the following differences from AdaBoost;",
              ["Trees instead stumps",
                "It uses a loss function to minimize errors.",
                "Trees are selected to predict the difference from actual values"]]
          }
        ],
        "feedback": [
          "Ensemble learning is performed by multiple learning algorithms working together for higher predictive performance.",
          "Examples of Ensemble learning are: Random forests, AdaBoost, gradient boost, and XGBoost.",
          "Two main concepts for combining algorithms;",
          ["Bootstrap sampling uses random samples and selects the best of them.",
            "Bagging when you put together selected random samples to achieve a better result"],
        ],
        "references": [
          "https://towardsdatascience.com/all-machine-learning-algorithms-you-should-know-in-2021-2e357dd494c7"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_16",
        "domain": ["Automate & orchestrate ML pipelines"],
        "intro": [],
        "body": [
          "Your team works for an international company with Google Cloud, and you develop, train and deploy several ML models with Tensorflow. You use many tools and techniques and you want to make your work leaner, faster, and more efficient.",
          "",
          "You would like engineer-to-engineer assistance from both Google Cloud and Google’s TensorFlow teams.",
          "Which of the following services can be used to achieve the above requirement?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Vertex AI"],
            "answer": false,
            "explanation": ["Vertex AI is a managed service"]
          },
          {
            "option": ["Kubeflow"],
            "answer": false,
            "explanation": ["Kubeflow is an open source library with standard support from the community"]
          },
          {
            "option": ["Tensorflow Enterprise"],
            "answer": true,
            "explanation": ["The TensorFlow Enterprise is a distribution of the open-source platform for ML, linked to specific versions of TensorFlow, tailored for enterprise customers.",
              "It is free but only for big enterprises with a lot of services in GCP. it is prepackaged and optimized for usage with containers and VMs.",
              "It works in Google Cloud, from VM images to managed services like GKE and Vertex AI.",
              "The TensorFlow Enterprise library is integrated in the following products:",
              ["Deep Learning VM Images",
                "Deep Learning Containers",
                "Notebooks",
                "Vertex AI Training"],
              "It is ready for automatic provisioning and scaling with any kind of processor.",
              "It has a premium level of support from Google."]
          },
          {
            "option": ["TFX"],
            "answer": false,
            "explanation": ["TFX is an open source library with standard support from the community"]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/tensorflow-enterprise/docs/overview"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_17",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "Your team works for a startup company with Google Cloud. You develop, train and deploy several ML models with Tensorflow. You use data in Parquet format and need to manage it both in input and output. You want the smoothest solution without adding infrastructure and keeping costs down.",
          "",
          "Which one of the following options do you follow?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Cloud Dataproc"],
            "answer": false,
            "explanation": ["Cloud Dataproc is the managed Hadoop service in GCP. It uses Parquet but not Tensorflow out of the box. Furthermore, it’d be an additional cost."]
          },
          {
            "option": ["TensorFlow I/O"],
            "answer": true,
            "explanation": ["TensorFlow I/O is a set of useful file formats, Dataset, streaming, and file system types management not available in TensorFlow's built-in support, like Parquet.",
              "So the integration will be immediate without any further costs or data transformations.",
              "Apache Parquet is an open-source column-oriented data storage format born in the Apache Hadoop environment but supported in many tools and used for data analysis."]
          },
          {
            "option": ["Dataflow Flex Template"],
            "answer": false,
            "explanation": ["There will be an additional cost and additional data transformations."]
          },
          {
            "option": ["BigQuery to TFRecords"],
            "answer": false,
            "explanation": ["There will be an additional cost and additional data transformations."]
          }
        ],
        "feedback": [],
        "references": [
          "https://www.tensorflow.org/io",
          "https://towardsdatascience.com/data-formats-for-training-in-tensorflow-parquet-petastorm-feather-and-more-e55179eeeb72"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_18",
        "domain": ["Frame ML problems"],
        "intro": [],
        "body": [
          "You are <b>starting</b> to operate as a Data Scientist and speaking with your mentor who asked you to prepare a simple model with a lazy learning algorithm.",
          "",
          "The problem is that you don’t know the meaning of lazy learning; so you looked for it.",
          "",
          "Which of the following methods uses lazy learning?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Naive Bayes"],
            "answer": true,
            "explanation": ["Naive Bayes is a classification algorithm. The features have to be independent. It requires a small amount of training data."]
          },
          {
            "option": ["K-Nearest Neighbors"],
            "answer": true,
            "explanation": ["K-nearest neighbor is a simple supervised algorithm for both classification and regression problems.",
              "You begin with data that is already classified. A new example will be set by looking at the k nearest classified points. Number k is the most important hyperparameter."]
          },
          {
            "option": ["Logistic Regression"],
            "answer": false,
            "explanation": ["With Logistic Regression you have to train the model and figure out the parameters of a specific function that best fit the data before the inference."]
          },
          {
            "option": ["Simple Neural Networks"],
            "answer": false,
            "explanation": ["With Neural Networks you have to train the model and figure out the parameters of a specific function that best fit the data before the inference."]
          },
          {
            "option": ["Semi-supervised learning"],
            "answer": false,
            "explanation": ["Semi-supervised learning is a family of classification algorithms with labeled and unlabeled data and methods to organize examples based on similarities and clustering. They have to set up a model and find parameters with training jobs."]
          }
        ],
        "feedback": [
          "Lazy learning means that the algorithm only stores the data of the training part without learning a function. The stored data will then be used for the evaluation of a new query point."],
        "references": [
          "https://towardsdatascience.com/all-machine-learning-algorithms-you-should-know-in-2021-2e357dd494c7",
          "https://towardsdatascience.com/k-nearest-neighbors-knn-algorithm-23832490e3f4",
          "https://machinelearningmastery.com/parametric-and-nonparametric-machine-learning-algorithms/",
          "https://en.wikipedia.org/wiki/Lazy_learning"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_19",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "Your company traditionally deals with the statistical analysis of data. The services have been integrated with ML models for forecasting for some years, but analyzes and simulations of all kinds are carried out.",
          "",
          "So you are using two types of tools. But you have been told that it is possible to have more levels of integration between traditional statistical methodologies and those more related to AI / ML processes.",
          "",
          "Which tool is the best one for your needs?"
        ],
        "open": false,
        "options": [
          {
            "option": ["TensorFlow Hub"],
            "answer": false,
            "explanation": ["It doesn’t deal with traditional statistical methodologies."]
          },
          {
            "option": ["TensorFlow Probability"],
            "answer": true,
            "explanation": ["TensorFlow Probability is a Python library for statistical analysis and probability, which can be processed on TPU and GPU.",
              "TensorFlow Probability main features are:",
              ["Probability distributions and differentiable and injective (one to one) functions.",
                "Tools for deep probabilistic models building.",
                "Inference and Simulation methods support: Markov chain, Monte Carlo.",
                "Optimizers such as Nelder-Mead, BFGS, and SGLD."]]
          },
          {
            "option": ["TensorFlow Enterprise"],
            "answer": false,
            "explanation": ["It doesn’t deal with traditional statistical methodologies."]
          },
          {
            "option": ["TensorFlow Statistics"],
            "answer": false,
            "explanation": ["It doesn’t deal with traditional statistical methodologies."]
          }
        ],
        "feedback": [],
        "references": [
          "https://www.tensorflow.org/probability"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_20",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "Your team works for an international company with Google Cloud. You develop, train and deploy different ML models. You use a lot of tools and techniques and you want to make your work leaner, faster and more efficient.",
          "",
          "Now you have the problem that you have to create a model for recognizing photographic images related to collaborators and consultants. You have to do it quickly, and it has to be an R-CNN model. You don't want to start from scratch. So you are looking for something that can help you and that can be optimal for the GCP platform.",
          "",
          "Which of these tools do you think can help you?"
        ],
        "open": false,
        "options": [
          {
            "option": ["TensorFlow-hub"],
            "answer": true,
            "explanation": ["TensorFlow Hub is ready to use repository of trained machine learning models.",
              "It is available for reusing advanced trained models with minimal code.",
              "The ML models are optimized for GCP.",
              "2-20.png"]
          },
          {
            "option": ["GitHub"],
            "answer": false,
            "explanation": ["GitHub is public and for any kind of code."]
          },
          {
            "option": ["GCP Marketplace Solutions"],
            "answer": false,
            "explanation": ["GCP Marketplace Solutions is a solution that lets you select and deploy software packages from vendors."]
          },
          {
            "option": ["BigQuery ML Open"],
            "answer": false,
            "explanation": ["BigQuery ML Open is related to Open Data."]
          }
        ],
        "feedback": [],
        "references": [
          "https://www.tensorflow.org/hub"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_21",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "You work in a large company that produces luxury cars. The following models will have a control unit capable of collecting data on mileage and technical status to allow intelligent management of maintenance by both the customer and the service centers.",
          "",
          "Every day a small batch of data will be sent that will be collected and processed in order to provide customers with the management of their vehicle health and push notifications in case of important messages.",
          "",
          "Which GCP products are the most suitable for this project?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Pub/Sub"],
            "answer": true,
            "explanation": ["Pub/Sub for technical data messages"]
          },
          {
            "option": ["DataFlow"],
            "answer": true,
            "explanation": ["DataFlow for data management both in streaming and in batch mode",
              "DataFlow manages data pipelines directed acyclic graphs (DAG) of transformations (PTransforms) on data (PCollections).",
              "The same pipeline can activate multiple PTransforms.",
              "All the processing can be performed both in batch and in streaming mode.",
              "So, in our case of streaming data, Dataflow can:",
              ["Serialize input data",
                "Preprocess and transform data",
                "Call the inference function",
                "Get the results and postprocess them"],
              "2-21.png"]
          },
          {
            "option": ["Dataproc"],
            "answer": false,
            "explanation": ["Dataproc is the managed Apache Hadoop environment for big data analysis usually for batch processing."]
          },
          {
            "option": ["Firebase Messaging"],
            "answer": true,
            "explanation": ["Firebase Messaging for push notifications"]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/architecture/processing-streaming-time-series-data-overview",
          "https://cloud.google.com/blog/products/data-analytics/ml-inference-in-dataflow-pipelines",
          "https://github.com/GoogleCloudPlatform/dataflow-sample-applications/tree/master/timeseries-streaming"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_22",
        "domain": ["Frame ML problems"],
        "intro": [],
        "body": [
          "Your company does not have a great ML experience. Therefore they want to start with a service that is as smooth, simple and managed as possible.",
          "",
          "The idea is to use BigQuery ML. Therefore you are considering whether it can cover all the functionality you need. Various projects start with the design and set up various models using various techniques and algorithms in your company.",
          "",
          "Which of these techniques/algorithms is not supported by BigQuery ML?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Wide-and-Deep DNN models"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["ARIMA"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Ensamble Boosted Model"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["CNN"],
            "answer": true,
            "explanation": ["The convolutional neural network (CNN) is a type of artificial neural network extensively used especially for image recognition and classification. It uses the convolutional layers, that is, the reworking of sets of pixels by running filters on the input pixels.",
              "It is not supported because it is specialized for images."]
          }
        ],
        "feedback": [
          "The other answers are wrong because they are all supported by BigQuery ML.",
          "Following the list of the current models and techniques.",
          ["<a href=\"https://cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-glm\">Linear regression</a>",
            "<a href=\"https://cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-glm\">Binary logistic regression</a>",
            "<a href=\"https://cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-glm\">Multiclass logistic regression</a>",
            "<a href=\"https://cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-kmeans\">K-means clustering</a>",
            "<a href=\"https://cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-matrix-factorization\">Matrix Factorization</a>",
            "<a href=\"https://cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-time-series\">Time series</a>",
            "<a href=\"https://cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-boosted-tree\">Boosted Tree</a>",
            "<a href=\"https://cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-dnn-models\">Deep Neural Network (DNN)</a>",
            "<a href=\"https://cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-automl\">AutoML Tables</a>",
            "<a href=\"https://cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-tensorflow\">TensorFlow model importing</a>",
            "<a href=\"https://cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-autoencoder\">Autoencoder</a>"],
          "MODEL_TYPE = { 'LINEAR_REG' | 'LOGISTIC_REG' | 'KMEANS' | 'PCA' | 'MATRIX_FACTORIZATION' | 'AUTOENCODER' | 'TENSORFLOW' | 'AUTOML_REGRESSOR' | 'AUTOML_CLASSIFIER' | 'BOOSTED_TREE_CLASSIFIER' | 'BOOSTED_TREE_REGRESSOR' | 'DNN_CLASSIFIER' | 'DNN_REGRESSOR' | 'DNN_LINEAR_COMBINED_CLASSIFIER' | 'DNN_LINEAR_COMBINED_REGRESSOR' | 'ARIMA_PLUS' }"
        ],
        "references": [
          "https://cloud.google.com/bigquery/docs/introduction"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_23",
        "domain": ["Design data preparation and processing systems"],
        "intro": [],
        "body": [
          "Your team is working on a great number of ML projects.",
          "",
          "You need to appropriately collect and transform data and then create and tune your ML models.",
          "",
          "In a second moment, these procedures will be inserted in an MLOps flow and therefore will have to be automated and be as simple as possible.",
          "",
          "What are the methodologies / services recommended by Google?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Dataflow"],
            "answer": true,
            "explanation": ["Dataflow is an optimal solution for compute-intensive preprocessing operations because it is a fully managed autoscaling service for batch and streaming data processing."]
          },
          {
            "option": ["BigQuery"],
            "answer": true,
            "explanation": ["BigQuery is a strategic tool for GCP. BigData at scale, machine learning, preprocessing with plain SQL are all important factors."]
          },
          {
            "option": ["Tensorflow"],
            "answer": true,
            "explanation": ["TensorFlow has many tools for data preprocessing and transformation operations.",
              "Main techniques are aimed to feature engineering (crossed_column, embedding_column, bucketized_column) and data transformation (tf.Transform library)."]
          },
          {
            "option": ["Cloud Fusion"],
            "answer": false,
            "explanation": ["Cloud Fusion is for ETL with a GUI, so with limited programming."]
          },
          {
            "option": ["Dataprep"],
            "answer": false,
            "explanation": ["Dataprep is a tool for visual data cleaning and preparation."]
          }
        ],
        "feedback": ["2-23.png"],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/datasets/datasets",
          "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1",
          "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1#where_to_do_preprocessing",
          "https://cloud.google.com/blog/topics/developers-practitioners/architect-your-data-lake-google-cloud-data-fusion-and-composer"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_24",
        "domain": ["Frame ML problems"],
        "intro": [],
        "body": [
          "Your team is preparing a Deep Neural Network custom model with Tensorflow in Vertex AI that forecasts, based on diagnostic images, medical diagnoses. It is a complex and demanding job. You want to get help from GCP for hyperparameter tuning.",
          "",
          "What are the parameters that you must indicate?"
        ],
        "open": false,
        "options": [
          {
            "option": ["learning_rate"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["parameterServerType"],
            "answer": false,
            "explanation": ["parameterServerType is a parameter for infrastructure set up for a training job."]
          },
          {
            "option": ["machineType"],
            "answer": false,
            "explanation": ["machineType is a parameter for infrastructure set up for a training job."]
          },
          {
            "option": ["num_hidden_layers"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [
          "With Vertex AI, it is possible to create a hyperparameter tuning job for LINEAR_REGRESSION and DNN.",
          "You can choose many parameters. But in the case of DNN, you have to use a hyperparameter named learning_rate.",
          "The <a href=\"https://cloud.google.com/vertex-ai/docs/reference/rest/v1/projects.locations.hyperparameterTuningJobs#ConditionalParameterSpec\">ConditionalParameterSpec</a> object lets you add hyperparameters to a trial when the value of its parent hyperparameter matches a condition that you specify (added automatically) and the number of hidden layers, that is num_hidden_layers."
        ],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/training/hyperparameter-tuning-overview",
          "https://youtu.be/8hZ_cBwNOss"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_25",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "Your team needs to create a model for managing security in restricted areas of campus.",
          "",
          "Everything that happens in these areas is filmed. Instead of having a physical surveillance service, the videos must be managed by a model capable of intercepting unauthorized people and vehicles, especially at particular times.",
          "",
          "What are the GCP services that allow you to achieve all this with minimal effort?"
        ],
        "open": false,
        "options": [
          {
            "option": ["AI Infrastructure"],
            "answer": false,
            "explanation": ["AI Infrastructure allows you to manage hardware configurations for ML systems and, in particular, the processors used to accelerate machine learning workloads."]
          },
          {
            "option": ["Video Intelligence API"],
            "answer": false,
            "explanation": ["Video Intelligence API is a pre-configured and ready-to-use service, therefore not configurable for specific needs."]
          },
          {
            "option": ["AutoML"],
            "answer": true,
            "explanation": ["AutoML allows you to customize the pre-trained Video GCP system according to your specific needs.",
              "In particular, AutoML object tracking allows you to identify and locate particular entities of interest to you with your specific tags.",
              "2-25.png"]
          },
          {
            "option": ["Vision API"],
            "answer": false,
            "explanation": ["Vision API is for images and not video."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/beginner/beginners-guide",
          "https://cloud.google.com/vertex-ai/docs/training-overview#video_data"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_26",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "Your client has a large e-commerce Website that sells sports goods and especially scuba diving equipment.",
          "",
          "It has a seasonal business and has collected a lot of sales data from its structured ERP and market trend databases.",
          "",
          "It wants to predict the demand of its customers both to increase business and improve logistics processes.",
          "",
          "What managed and fast-to-use GCP products can be used for these types of models?"
        ],
        "open": false,
        "options": [
          {
            "option": ["AutoML"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["BigQuery ML"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["KubeFlow"],
            "answer": false,
            "explanation": ["KubeFlow is an open-source libraries that work with Tensorflow. So, they are not managed and so simple.",
              "Moreover, it can work in an environment outside GCP that is a big advantage, but it is not in our requirements.",
              "Kubeflow is a system for deploying, scaling and managing complex Tensorflow systems on Kubernetes."]
          },
          {
            "option": ["TFX"],
            "answer": false,
            "explanation": ["TFX is an open-source libraries that work with Tensorflow. So, they are not managed and so simple.",
              "Moreover, it can work in an environment outside GCP that is a big advantage, but it is not in our requirements.",
              "TFX is a platform that allows you to create scalable production ML pipelines for TensorFlow projects."]
          }
        ],
        "feedback": [
          "We have in GCP the possibility to use a large number of models and platforms. But the fastest and most immediate modes are with AutoML and BigQuery ML; both support quick creation and fine-tuning of templates."],
        "references": [
          "https://cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create#model_type",
          "https://ai.googleblog.com/2020/12/using-automl-for-time-series-forecasting.html"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_27",
        "domain": ["Monitor, optimize, and maintain ML solutions"],
        "intro": [],
        "body": [
          "You are consulting a CIO of a big firm regarding organization and cost optimization for his company's ML projects in GCP.",
          "",
          "He asked: “How can I get the most from ML services and the least costs?”",
          "",
          "What are the best practices recommended by Google in this regard?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Use Notebooks as ephemeral instances"],
            "answer": false,
            "explanation": ["It's incomplete"]
          },
          {
            "option": ["Set up an automatic shutdown routine"],
            "answer": false,
            "explanation": ["It's incomplete"]
          },
          {
            "option": ["Use Preemptible VMs per long-running interrumpible tasks"],
            "answer": false,
            "explanation": ["It's incomplete"]
          },
          {
            "option": ["Get monitoring alerts about GPU usage"],
            "answer": false,
            "explanation": ["It's incomplete"]
          },
          {
            "option": ["All of the above"],
            "answer": true,
            "explanation": [
              "Notebooks are used for a limited time, but they reserve VM and other resources. So you have to treat them as ephemeral instances, not as long-living ones.",
              "You can configure an <a href=\"https://medium.com/kovalevskyi-viacheslav/aiplatform-notebooks-and-vms-auto-shutdown-on-idle-dd94ed3d4724\">automatic shutdown routine</a> when your instance is idle, saving money.",
              "<a href=\"https://cloud.google.com/compute/docs/instances/preemptible\">Preemptible VMs</a> are far cheaper than normal instances and are OK for long-running (batch) large experiments.",
              "You can <a href=\"https://cloud.google.com/compute/docs/gpus/monitor-gpus#setup-script\">set up the GPU metrics reporting script</a>; it is important because GPU is expensive."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/solutions/machine-learning/best-practices-for-ml-performance-cost"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_28",
        "domain": ["Monitor, optimize, and maintain ML solutions"],
        "intro": [],
        "body": [
          "Your team is working with a great number of ML projects, especially with Tensorflow.",
          "",
          "You have to prepare a demo for the Manager and Stakeholders. You are certain that they will ask you about the understanding of the classification and regression mechanism. You’d like to show them an interactive demo with some cool interference.",
          "",
          "Which of these tools is best for all of this?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Tensorboard"],
            "answer": false,
            "explanation": ["Tensorboard provides visualization and tooling needed for experiments, not for explaining inference. You can access the What-If Tool from Tensorboard."]
          },
          {
            "option": ["Tableau"],
            "answer": false,
            "explanation": ["Tableau is a graphical tool for data reporting."]
          },
          {
            "option": ["What-If Tool"],
            "answer": true,
            "explanation": ["The What-If Tool (WIT) is an open-source tool that lets you visually understand classification and regression ML models.",
              "It lets you see data points distributions with different shapes and colors and interactively try new inferences.",
              "Moreover, it shows which features affect your model the most, together with many other characteristics.",
              "All without code.",
              "2-28.png"]
          },
          {
            "option": ["Looker"],
            "answer": false,
            "explanation": ["Looker is a graphical tool for data reporting."]
          },
          {
            "option": ["LIT"],
            "answer": false,
            "explanation": ["LIT is for NLP models."]
          }
        ],
        "feedback": [],
        "references": [
          "https://www.tensorflow.org/tensorboard/what_if_tool"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_29",
        "domain": ["Monitor, optimize, and maintain ML solutions"],
        "intro": [],
        "body": [
          "Your team is working with a great number of ML projects, especially with Tensorflow.",
          "",
          "You recently prepared an NLP model that works well and is about to be rolled out in production.",
          "",
          "You have to prepare a demo for the Manager and Stakeholders for your new system of text and sentiment interpretation. You are certain that they will ask you for explanations and understanding about how a software may capture human feelings. You’d like to show them an interactive demo with some cool interference.",
          "",
          "Which of these tools is best for all of this?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Tensorboard"],
            "answer": false,
            "explanation": ["Tensorboard provides visualization and tooling needed for experiments, not for explaining inference. You can access the What-If Tool from Tensorboard."]
          },
          {
            "option": ["Tableau"],
            "answer": false,
            "explanation": ["Tableau is a graphical tool for data reporting."]
          },
          {
            "option": ["What-If Tool"],
            "answer": false,
            "explanation": ["What-If Tool is for classification and regression models with structured data."]
          },
          {
            "option": ["Looker"],
            "answer": false,
            "explanation": ["Looker is a graphical tool for data reporting."]
          },
          {
            "option": ["LIT"],
            "answer": true,
            "explanation": ["The Language Interpretability Tool (LIT) is an open-source tool developed specifically to explain and visualize NLP natural language processing models.",
              "It is similar to the What-If tool, which instead targets classification and regression models with structured data.",
              "It offers visual explanations of the model's predictions and analysis with metrics, tests and validations.",
              "2-29.png"]
          }
        ],
        "feedback": [],
        "references": [
          "https://pair-code.github.io/lit/",
          "https://www.tensorflow.org/tensorboard/what_if_tool"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_30",
        "domain": ["Monitor, optimize, and maintain ML solutions"],
        "intro": [],
        "body": [
          "Your team is working with a great number of ML projects, especially with Tensorflow.",
          "",
          "You recently prepared a DNN model for image recognition that works well and is about to be rolled out in production.",
          "",
          "Your manager asked you to demonstrate the inner workings of the model.",
          "",
          "It is a big problem for you because you know that it is working well but you don’t have the explainability of the model.",
          "",
          "Which of these techniques could help you?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Integrated Gradient"],
            "answer": true,
            "explanation": ["Integrated Gradient is an explainability technique for deep neural networks which gives info about what contributes to the model’s prediction.",
              "Integrated Gradient works highlight the feature importance. It computes the gradient of the model’s prediction output regarding its input features without modification to the original model."]
          },
          {
            "option": ["LIT"],
            "answer": false,
            "explanation": ["LIT is only for NLP models"]
          },
          {
            "option": ["WIT"],
            "answer": false,
            "explanation": ["What-If Tool is only for classification and regression models with structured data."]
          },
          {
            "option": ["PCA"],
            "answer": false,
            "explanation": ["Principal component analysis (PCA) transforms and reduces the number of features by creating new variables, from linear combinations of the original variables.",
              "The new features will be all independent of each other."]
          }
        ],
        "feedback": [],
        "references": [
          "https://towardsdatascience.com/understanding-deep-learning-models-with-integrated-gradients-24ddce643dbf"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_31",
        "domain": ["Design data preparation and processing systems"],
        "intro": [],
        "body": [
          "You are working on a linear regression model with data stored in BigQuery. You have a view with many columns. You want to make some simplifications for your work and avoid overfitting. You are planning to use regularization. You are working with Bigquery ML and preparing the query for model training. You need an SQL statement that allows you to have all fields in the view apart from the label.",
          "",
          "Which one do you choose?"
        ],
        "open": false,
        "options": [
          {
            "option": ["ROLLUP"],
            "answer": false,
            "explanation": ["ROLLUP is a group function for subtotals."]
          },
          {
            "option": ["UNNEST"],
            "answer": false,
            "explanation": ["UNNEST gives the elements of a structured file."]
          },
          {
            "option": ["EXCEPT"],
            "answer": true,
            "explanation": ["SQL and Bigquery are powerful tools for querying and manipulating structured data.",
              "EXCEPT gives all rows or fields on the left side except the one coming from the right side of the query.",
              "Example:",
              "SELECT",
              "EXCEPT(mylabel) myvalue AS label"]
          },
          {
            "option": ["LAG"],
            "answer": false,
            "explanation": ["LAG returns the field value on a preceding row."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-hyperparameter-tuning",
          "https://cloud.google.com/bigquery/docs/hyperparameter-tuning-tutorial"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_32",
        "domain": ["Design data preparation and processing systems"],
        "intro": [],
        "body": [
          "Your team is preparing a multiclass logistic regression model with tabular data.",
          "",
          "The environment is Vertex AI with AutoML, and your data is stored in a CSV file in Cloud Storage.",
          "",
          "AutoML can perform transformations on the data to make the most of it.",
          "",
          "Which of the following types of transformations are you not allowed, based on your requirements?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Categorical"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Text"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Timestamp"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Array"],
            "answer": true,
            "explanation": ["With complex data like Arrays and Structs, transformations are available only by using BigQuery, which supports them natively.",
              "All the other kinds of data are also supported for CSV files, as stated in the referred documentation."]
          },
          {
            "option": ["Number"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/datasets/data-types-tabular",
          "https://cloud.google.com/vertex-ai/docs/datasets/data-types-tabular#compound_data_types"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_33",
        "domain": ["Design data preparation and processing systems"],
        "intro": [],
        "body": [
          "You are a junior Data Scientist, and you work in a Governmental Institution.",
          "",
          "You are preparing data for a linear regression model for Demographic research. You need to choose and manage the correct feature.",
          "",
          "Your input data is in BigQuery.",
          "",
          "You know very well that you have to avoid multicollinearity and optimize categories. So you need to group some features together and create macro categories.",
          "",
          "In particular, you have to join country and language in one variable and divide data between 5 income classes.",
          "",
          "Which ones of the following options can you use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["FEATURE_CROSS"],
            "answer": true,
            "explanation": ["A feature cross is a new feature that joins two or more input features together. (The term cross comes from cross product.) Usually, numeric new features are created by multiplying two or more other features."]
          },
          {
            "option": ["ARRAY_CONCAT"],
            "answer": false,
            "explanation": ["ARRAY_CONCAT joins one or more arrays (number or strings) into a single array."]
          },
          {
            "option": ["QUANTILE_BUCKETIZE"],
            "answer": true,
            "explanation": ["QUANTILE_BUCKETIZE groups a continuous numerical feature into categories with the bucket name as the value based on quantiles.",
              "Example: ML.FEATURE_CROSS STRUCT(country,  language) AS origin)",
              " and ML.QUANTILE_BUCKETIZE → income_class"]
          },
          {
            "option": ["ST_AREA"],
            "answer": false,
            "explanation": ["ST_AREA returns the number of square meters covered by a GEOGRAPHY area."]
          }
        ],
        "feedback": [],
        "references": [
          "https://towardsdatascience.com/assumptions-of-linear-regression-fdb71ebeaa8b",
          "https://cloud.google.com/bigquery/docs/bigqueryml-transform"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_34",
        "domain": ["Frame ML problems"],
        "intro": [],
        "body": [
          "You are a junior Data Scientist and you need to create a multi-class classification Machine Learning model with Keras Sequential model API.",
          "",
          "You have been asked which activation function to use.",
          "",
          "Which of the following do you choose?"
        ],
        "open": false,
        "options": [
          {
            "option": ["ReLU"],
            "answer": false,
            "explanation": ["ReLU (Rectified Linear Unit): half rectified. f(z) is zero when z is less than zero and f(z) is equal to z when z. It returns one value"]
          },
          {
            "option": ["Softmax"],
            "answer": true,
            "explanation": ["Softmax is for multi-class classification what Sigmoid is for logistic regression. Softmax assigns decimal probabilities to each class so that their sum is 1.",
              "2-34.png"]
          },
          {
            "option": ["SIGMOID"],
            "answer": false,
            "explanation": ["Sigmoid is for logistic regression and therefore returns one value from 0 to 1."]
          },
          {
            "option": ["TANH"],
            "answer": false,
            "explanation": ["Tanh or hyperbolic tangent is like sigmoid but returns one value from -1 to 1."]
          }
        ],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/multi-class-neural-networks/softmax?hl=en",
          "https://developers.google.com/machine-learning/crash-course/multi-class-neural-networks/softmax"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_35",
        "domain": ["Design data preparation and processing systems"],
        "intro": [],
        "body": [
          "Your team is working on a great number of ML projects for an international consulting firm.",
          "",
          "The management has decided to store most of the data to be used for ML models in BigQuery.",
          "",
          "The motivation is that BigQuery allows for preprocessing and transformations easily and with standard SQL. It is highly structured; so it offers efficiency, integration and security.",
          "",
          "Your team must create and modify code to directly access BigQuery data for building models in different environments.",
          "",
          "What are the tools you can use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Tf.data.dataset"],
            "answer": true,
            "explanation": ["<a href=\"https://towardsdatascience.com/how-to-read-bigquery-data-from-tensorflow-2-0-efficiently-9234b69165c8\">tf.data.dataset reader for BigQuery</a> is the way to connect directly to BigQuery from TensorFlow or Keras."]
          },
          {
            "option": ["BigQuery Omni"],
            "answer": false,
            "explanation": ["BigQuery Omni is a multi-cloud analytics solution. You can access from BigQuery data across Google Cloud, Amazon Web Services (AWS), and Azure."]
          },
          {
            "option": ["BigQuery Python client library"],
            "answer": true,
            "explanation": ["For any other framework, you can use <a href=\"https://cloud.google.com/bigquery/docs/bigquery-storage-python-pandas\">BigQuery Python client library</a>"]
          },
          {
            "option": ["BigQuery I/O Connector"],
            "answer": true,
            "explanation": ["<a href=\"https://beam.apache.org/documentation/io/built-in/google-bigquery/\">BigQuery I/O Connector</a> is the way to connect directly to BigQuery from Dataflow."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/training/using-managed-datasets",
          "https://cloud.google.com/bigquery/docs/bigquery-storage-python-pandas",
          "https://beam.apache.org/documentation/io/built-in/google-bigquery/",
          "https://cloud.google.com/vertex-ai/docs/training/using-managed-datasets"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_36",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "Your team has prepared a Multiclass logistic regression model with tabular data in the Vertex AI with AutoML environment. Everything went very well. You appreciated the convenience of the platform and AutoML.",
          "",
          "What other types of models can you implement with AutoML?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Image Data"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Text Data"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Cluster Data"],
            "answer": false,
            "explanation": ["Cluster Data may be related to unsupervised learning; that is not supported by AutoML."]
          },
          {
            "option": ["Video Data"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [
          "AutoML on Vertex AI can let you build a code-free model. You have to provide training data.",
          "The types of models that AutoML on Vertex AI can build are created with image data, tabular data, text data, and video data."
  
        ],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/beginner/beginners-guide",
          "https://cloud.google.com/vertex-ai/docs/start/automl-model-types"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_37",
        "domain": ["Architect ML solutions"],
        "intro": [],
        "body": [
          "With your team, you have to decide the strategy for implementing an online forecasting model in production. This template needs to work with both a web interface as well as DialogFlow and Google Assistant. A lot of requests are expected.",
          "",
          "You are concerned that the final system is not efficient and scalable enough. You are looking for the simplest and most managed GCP solution.",
          "",
          "Which of these can be the solution?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Vertex AI online prediction"],
            "answer": true,
            "explanation": ["The Vertex AI prediction service is fully managed and automatically scales machine learning models in the cloud.",
              "The service supports both online prediction and batch prediction.",
              "2-37.png"]
          },
          {
            "option": ["GKE e TensorFlow"],
            "answer": false,
            "explanation": ["GKE e TensorFlow are not managed services."]
          },
          {
            "option": ["VMs and Autoscaling Groups with Application LB"],
            "answer": false,
            "explanation": ["VMs and Autoscaling Groups with Application LB are not managed services."]
          },
          {
            "option": ["Kubeflow"],
            "answer": false,
            "explanation": ["Kubeflow is not a managed service. It is used in Vertex AI and lets you deploy ML systems in various environments."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/predictions/online-predictions-custom-models",
          "https://cloud.google.com/vertex-ai/docs/predictions/configure-compute"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_38",
        "domain": ["Automate & orchestrate ML pipelines"],
        "intro": [],
        "body": [
          "You work in a medium-sized company as a developer and data scientist and use the managed ML platform, Vertex AI.",
          "",
          "You have updated an AutoML model and want to deploy it to production. But you want to maintain both the old and the new version at the same time. The new version should only serve a small portion of the traffic.",
          "",
          "What can you do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Save the model in a Docker container image"],
            "answer": false,
            "explanation": ["You don’t have to create a Docker container image with AutoML."]
          },
          {
            "option": ["Deploy on the same endpoint"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Update the Traffic split percentage"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Create a Canary Deployment with Cloud Build"],
            "answer": false,
            "explanation": ["Canary Deployment with Cloud Build is a procedure used in CI/CD pipelines. There is no need in such a managed environment."]
          }
        ],
        "feedback": [
          "The correct procedure is:",
          ["Deploy your model to an existing endpoint.",
            "Update the Traffic split percentage in such a way that all of the percentages add up to 100%."]
        ],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/predictions/deploy-model-console"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_39",
        "domain": ["Design data preparation and processing systems"],
        "intro": [],
        "body": [
          "You and your team are working for a large consulting firm. You are preparing an NLP ML model to classify customer support needs and to assess the degree of satisfaction. The texts of the various communications are stored in different storage.",
          "",
          "What types of storage should you avoid in the managed environment of GCP ML, such as Vertex AI?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Cloud Storage"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["BigQuery"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Filestore"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Block Storage"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [
          "Google advises avoiding data storage for ML in block storage, like persistent disks or NAS like Filestore.",
          "They are more difficult to manage than Cloud Storage or BigQuery.",
          "Likewise, it is strongly discouraged to read data directly from databases such as Cloud SQL. So, it is strongly recommended to store data in BigQuery and Cloud Storage.",
          "Similarly, avoid reading data directly from databases like Cloud SQL."
        ],
        "references": [
          "https://cloud.google.com/architecture/ml-on-gcp-best-practices#avoid-storing-data-in-block-storage",
          "https://cloud.google.com/bigquery/docs/loading-data",
          "https://cloud.google.com/blog/products/ai-machine-learning/google-cloud-launches-vertex-ai-unified-platform-for-mlops"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_40",
        "domain": ["Frame ML problems"],
        "intro": [],
        "body": [
          "You are working with Vertex AI, the managed ML Platform in GCP.",
          "",
          "You want to leverage Explainable AI to understand which are the most essential features and how they influence the model.",
          "",
          "For what kind of model may you use Vertex Explainable AI?"
        ],
        "open": false,
        "options": [
          {
            "option": ["AutoML"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Image Classification"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["DNN"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Decision Tree"],
            "answer": false,
            "explanation": ["Decision Tree Models are explainable without any sophisticated tool for enlightenment."]
          }
        ],
        "feedback": [
          "Deep Learning is known to give little comprehension about how a model works in detail.",
          "Vertex Explainable AI helps to detect it, both for classification and regression tasks. So these functions are useful for testing, tuning, finding biases and thus improving the process.",
          "You can get explanations from Vertex Explainable AI both for online and batch inference but only regarding these ML models:",
          ["Structured data models (AutoML, classification and regression)",
            "Custom-trained models with tabular data and images"],
          "20.png",
        ],
        "references": [
          "https://cloud.google.com/resources/mlops-whitepaper",
          "https://cloud.google.com/vertex-ai/docs/explainable-ai/overview"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_41",
        "domain": ["Monitor, optimize, and maintain ML solutions"],
        "intro": [],
        "body": [
          "You work as a Data Scientist in a Startup and you work with several project with Python and Tensorflow;",
          "",
          "You need to increase the performance of the training sessions and you already use caching and prefetching.",
          "",
          "So now you want to use GPUs, but in a single machine, for cost reduction and experimentations.",
          "",
          "Which of the following is the correct strategy?"
        ],
        "open": false,
        "options": [
          {
            "option": ["tf.distribute.MirroredStrategy"],
            "answer": true,
            "explanation": ["<b>tf.distribute.Strategy</b> is an API explicitly for training distribution among different processors and machines.",
              "<b>tf.distribute.MirroredStrategy</b> lets you use multiple GPUs in a single VM, with a replica for each CPU.",
              "2-41.png"]
          },
          {
            "option": ["tf.distribute.TPUStrategy"],
            "answer": false,
            "explanation": ["tf.distribute.TPUStrategy let you use TPUs, not GPUs"]
          },
          {
            "option": ["tf.distribute.MultiWorkerMirroredStrategy"],
            "answer": false,
            "explanation": ["tf.distribute.MultiWorkerMirroredStrategy is for multiple machines"]
          },
          {
            "option": ["tf.distribute.OneDeviceStrategy"],
            "answer": false,
            "explanation": ["tf.distribute.OneDeviceStrategy, like the default strategy, is for a single device, so a single virtual CPU."]
          }
        ],
        "feedback": [],
        "references": [
          "https://www.tensorflow.org/guide/distributed_training",
          "https://www.tensorflow.org/guide/intro_to_graphs",
          "https://blog.tensorflow.org/2019/09/tensorflow-20-is-now-available.html"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_42",
        "domain": ["Monitor, optimize, and maintain ML solutions"],
        "intro": [],
        "body": [
          "You work as a junior Data Scientist in a Startup and work with several projects with Python and Tensorflow in Vertex AI. You deployed a new model in the test environment and detected some problems that are puzzling you.",
          "",
          "An experienced colleague of yours asked for the logs. You found out that there is no logging information available. What kind of logs do you need and how do you get them?"
        ],
        "open": false,
        "options": [
          {
            "option": ["You need to Use Container logging"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["You need to Use Access logging"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["You can enable logs dynamically"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["You have to undeploy and redeploy"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [
          "In Vertex AI, you may enable or avoid logs for prediction. When you want to change, you must undeploy and redeploy.",
          "There are two types of logs:",
          ["Container logging, which logs data from the containers hosting your model; so these logs are essential for problem solving and debugging.",
            "Access logging, which logs accesses and latency information."],
          "Therefore, you need Container logging."
        ],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/predictions/online-prediction-logging"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_43",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "You are a junior Data Scientist working on a logistic regression model to break down customer text messages into two categories: important / urgent and unimportant / non-urgent.",
          "",
          "You want to find a metric that allows you to evaluate your model for how well it separates the two classes. You are interested in finding a method that is scale invariant and classification threshold invariant.",
          "",
          "Which of the following is the optimal methodology?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Log Loss"],
            "answer": false,
            "explanation": ["Log Loss is a loss function used especially for logistic regression; it measures loss. So it is highly dependent on threshold values."]
          },
          {
            "option": ["One-hot encoding"],
            "answer": false,
            "explanation": ["One-hot encoding is a method used in feature engineering for obtaining better regularization and independence."]
          },
          {
            "option": ["ROC- AUC"],
            "answer": true,
            "explanation": ["The ROC curve (receiver operating characteristic curve) is a graph showing the behavior of the model with positive guesses at different classification thresholds.",
              "It plots and relates each others two different values:",
              ["TPR: true positives / all actual positives",
                "FPR: false positives / all actual negatives"],
              "The AUC (Area Under the Curve) index is the area under the ROC curve and indicates the capability of a binary classifier to discriminate between two categories. Being a probability, it is always a value between 0 and 1. Hence it is a scale invariant.",
              "It provides divisibility between classes. So it is independent of the chosen threshold value; in other words, it is threshold-invariant.",
              "When it is equal, it is 0.5 indicating that the model randomly foresees the division between two classes, similar to what happens with heads and tails when tossing coins.",
              "2-43.png"]
          },
          {
            "option": ["Mean Square Error"],
            "answer": false,
            "explanation": ["Mean Square Error is the most frequently used loss function used for linear regression. It takes the square of the difference between predictions and real values."]
          },
          {
            "option": ["Mean Absolute Error"],
            "answer": false,
            "explanation": ["Mean Absolute Error is a loss function, too. It takes the absolute value of the difference between predictions and actual outcomes."]
          }
        ],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/classification/roc-and-auc"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_44",
        "domain": ["Monitor, optimize, and maintain ML solutions"],
        "intro": [],
        "body": [
          "You work as a junior Data Scientist in a consulting company and work with several projects with Tensorflow. You prepared and tested a new model, and you are optimizing it before deploying it in production. You asked for advice from an experienced colleague of yours. He said that it is not advisable to deploy the model in eager mode.",
          "",
          "What can you do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Configure eager_execution=no"],
            "answer": false,
            "explanation": ["There is no such parameter as eager_execution = no. Using graphs instead of eager execution is more complex than that."]
          },
          {
            "option": ["Use graphs"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Use tf.function decoration function"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Create a new tf.Graph"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [
          "When you develop and test a model, the eager mode is really useful because it lets you execute operations one by one and facilitate debugging.",
          "But when in production, it is better to use graphs, which are data structures with Tensors and integrated computations Python independent. In this way, they can be deployed on different devices (like mobiles) and are optimizable.",
          "To do that, you have to use tf.function decoration function for a new tf.Graph creation."
        ],
        "references": [
          "https://www.tensorflow.org/guide/function",
          "https://colab.research.google.com/github/zaidalyafeai/Notebooks/blob/master/Eager_Execution_Enabled.ipynb"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_45",
        "domain": ["Automate & orchestrate ML pipelines"],
        "intro": [],
        "body": [
          "In your company, you train and deploy several ML models with Tensorflow. You use on-prem servers, but you often find it challenging to manage the most expensive training.",
          "",
          "Checking and updating models create additional difficulties. You are undecided whether to use Vertex Pipelines and Kubeflow Pipelines. You wonder if starting from Kubeflow, you can later switch to a more automated and managed system like Vertex AI.",
          "",
          "Which of these answers are correct?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Kubeflow pipelines and Vertex Pipelines are incompatible"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["You may use Kubeflow Pipelines written with DSL in Vertex AI"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Kubeflow pipelines work only in GCP"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Kubeflow pipelines may work in any environment"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Kubeflow pipelines may use Kubernetes persistent volume claims (PVC)"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Vertex Pipelines can use Cloud Storage FUSE"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [
          "Vertex AI Pipelines is a managed service in GCP.",
          "Kubeflow Pipelines is an open-source tool based on Kubernetes and Tensorflow for any environment.",
          "Vertex AI support code written with Kubeflow Pipelines SDK v2 domain-specific language (DSL).",
          "Like any workflow in Kubernetes, access to persistent data is performed with Volumes and Volume Claims.",
          "Vertex Pipelines can use Cloud Storage FUSE. So Vertex AI can leverage Cloud Storage buckets like file systems on Linux or macOS.",
          "2-45.png"
        ],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/pipelines/build-pipeline#compare",
          "https://cloud.google.com/storage/docs/gcs-fuse",
          "https://cloud.google.com/vertex-ai"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_46",
        "domain": ["Design data preparation and processing systems"],
        "intro": [],
        "body": [
          "Your company runs a big retail website. You develop many ML models for all the business activities.",
          "",
          "You migrated to Google Cloud. Your models are developed with PyTorch, TensorFlow, and BigQuery ML. You also use BigTable and CloudSQL, and Cloud Storage, of course. You need to use input tabular data in CSV format. You are working with Vertex AI.",
          "",
          "How do you manage them in the best way?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Vertex AI manage any CSV automatically, no operations needed"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["You have to setup an header and column names may have only alphanumeric character and underscore"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Vertex AI cannot handle CSV files"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Delimiter must be a comma"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["You can import only a file max 10GB"],
            "answer": false,
            "explanation": ["You can import multiple files, each one max 10GB."]
          }
        ],
        "feedback": [
          "Vertex AI manages CSV files automatically. But you need to have headers only with alphanumeric characters and underscores with commas as delimiters.",
  
        ],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/datasets/prepare-tabular#csv",
          "https://cloud.google.com/vertex-ai/docs/datasets/datasets"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_47",
        "domain": ["Automate & orchestrate ML pipelines"],
        "intro": [],
        "body": [
          "Your company is a Financial Institution. You develop many ML models for all the business activities. You migrated to Google Cloud. Your models are developed with PyTorch, TensorFlow, and BigQuery ML.",
          "",
          "You are now working on an international project with other partners. You need to use the Vertex AI. You are asking experts which the capabilities of this managed suite of services are.",
          "",
          "Which elements are integrated into Vertex AI?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Training environments and MLOps"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Training Pipelines, Datasets, Custom tooling, AutoML, Models Management and inference environments (endpoints)"],
            "answer": true,
            "explanation": ["Vertex AI covers all the activities and functions listed: from Training Pipelines (so MLOps), to Data Management (Datasets), custom models and AutoML models management, custom tooling and libraries deployment and monitoring.",
              "So, all the other answers are wrong because they cover only a subset of Vertex functionalities.",
              "Q-7.png"]
          },
          {
            "option": ["Deployment environments"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Training Pipelines and Datasets for data sources"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/vertex-ai",
          "https://codelabs.developers.google.com/codelabs/vertex-ai-custom-code-training"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_48",
        "domain": ["Develop ML models"],
        "intro": [],
        "body": [
          "You are a junior data scientist working on a logistic regression model to break down customer text messages into important/urgent and important / not urgent. You want to use the best loss function that you can use to determine your model's performance.",
          "",
          "Which of the following is the optimal methodology?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Log Loss"],
            "answer": true,
            "explanation": ["With a logistic regression model, the optimal loss function is the log loss.",
              "The intuitive explanation is that when you want to emphasize the loss of bigger mistakes, you need to find a way to penalize such differences.",
              "In this case, it is often used the square loss. But in the case of probabilistic values (between 0 and 1), the squaring decreases the values; it does not make them bigger.",
              "On the other hand, with a logarithmic transformation, the process is reversed: decimal values get bigger.",
              "In addition, logarithmic transformations do not modify the minimum and maximum characteristics (monotonic functions).",
              "These are some of the reasons why they are widely used in ML.",
              "Pay attention to the difference between loss function and ROC/AUC, which is useful as a measure of how well the model can discriminate between two categories.",
              "You may have two models with the same AUC but different losses.",
              "8.1.png",
              "8.2.png"]
          },
          {
            "option": ["Mean Square Error"],
            "answer": false,
            "explanation": ["Mean Square Error, as explained, would penalize higher errors."]
          },
          {
            "option": ["Mean Absolute Error"],
            "answer": false,
            "explanation": ["Mean Absolute Error takes the absolute value of the difference between predictions and actual outcomes. So, it would not empathize higher errors."]
          },
          {
            "option": ["Mean Bias Error"],
            "answer": false,
            "explanation": ["Mean Bias Error takes just the value of the difference between predictions and actual outcomes. So, it compensates positive and negative differences between predicted/actual values. It is used to calculate the average bias in the model."]
          },
          {
            "option": ["Softmax"],
            "answer": false,
            "explanation": ["softmax is used in multi-class classification models which is clearly not suitable in the case of a binary-class logarithmic loss."]
          }
        ],
        "feedback": [],
        "references": [
          "https://www.kaggle.com/dansbecker/what-is-log-loss",
          "https://developers.google.com/machine-learning/crash-course/logistic-regression/model-training",
          "https://en.wikipedia.org/wiki/Monotonic_function",
          "https://datawookie.dev/blog/2015/12/making-sense-of-logarithmic-loss/"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_49",
        "domain": ["Automate & orchestrate ML pipelines"],
        "intro": [],
        "body": [
          "You have just started working as a junior Data Scientist in a Startup. You are involved in several projects with Python and Tensorflow in Vertex AI.",
          "You are starting to get interested in MLOps and are trying to understand the different processes involved.",
          "You have prepared a checklist, but inside there is a service that has nothing to do with MLOps.",
          "",
          "Which one?"
        ],
        "open": false,
        "options": [
          {
            "option": ["CI/CD"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Source Control Tools"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Data Pipelines"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["CDN"],
            "answer": true,
            "explanation": ["Cloud CDN is the service that caches and delivers static content from the closest locations (edge locations) to customers to accelerate web and mobile applications. This is a very important service for the Cloud but out of scope for MLOps.",
              "MLOps covers all processes related to ML models; experimentation, preparation, testing, deployment and above all continuous integration and delivery.",
              "The MLOps environment is designed to provide (some of) the following:",
              ["Environment for testing and experimentation",
                "Source control, like Github",
                "CI/CD Continuous integration/continuous delivery",
                "Container registry: custom Docker images management",
                "Feature Stores",
                "Training services",
                "Metadata repository",
                "Artifacts repository",
                "ML pipelines orchestrators",
                "Data warehouse/ storage and scalable data processing for batch and streaming data.",
                "Prediction service both batch and online."],
              "2-49.png",
              "So, all the other answers describe MLOps functionalities."]
          },
          {
            "option": ["Artifact Registry, Container Registry"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/architecture/setting-up-mlops-with-composer-and-mlflow",
          "https://mlflow.org/",
          "https://cloud.google.com/composer/docs"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_50",
        "domain": ["Monitor, optimize, and maintain ML solutions"],
        "intro": [],
        "body": [
          "You are working with Vertex AI, the managed ML Platform in GCP.",
          "",
          "You want to leverage Vertex Explainable AI to understand the most important features and how they influence the model.",
          "",
          "Which three methods does Vertex AI leverage for feature attributions?"
        ],
        "open": false,
        "options": [
          {
            "option": ["sampled Shapley"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["integrated gradients"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Maximum Likelihood"],
            "answer": false,
            "explanation": ["Maximum Likelihood is a probabilistic method for determining the parameters of a statistical distribution."]
          },
          {
            "option": ["XRAI"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [
          "Deep Learning is known to give little comprehension about how a model works in detail.",
          "Vertex Explainable AI helps to detect it, both for classification and regression tasks. So, these functions are useful for testing, tuning, finding biases and thus improving the process.",
          "It uses three methods for feature attributions:",
          ["sampled Shapley: Uses scores for each feature and their permutations",
            "integrated gradients: computes the gradient of the features at different points, integrates them and computes the relative weights",
            "XRAI is an optimization of the integrated gradients method"],
        ],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/explainable-ai/overview",
          "https://storage.googleapis.com/cloud-ai-whitepapers/AI%20Explainability%20Whitepaper.pdf"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_51",
        "domain": ["Frame ML problems"],
        "intro": [],
        "body": [
          "Your company produces and sells a lot of different products.",
          "",
          "You work as a Data Scientist. You train and deploy several ML models.",
          "",
          "Your manager just asked you to find a simple method to determine affinities between different products and categories to give sellers and applications a wider range of suitable offerings for customers.",
          "",
          "The method should give good results even without a great amount of data.",
          "",
          "Which of the following different techniques may help you better?"
        ],
        "open": false,
        "options": [
          {
            "option": ["One-hot encoding"],
            "answer": false,
            "explanation": ["One-hot encoding is a method used in feature engineering for obtaining better regularization and independence."]
          },
          {
            "option": ["Cosine Similarity"],
            "answer": true,
            "explanation": ["In a recommendation system (like with the Netflix movies) it is important to discover similarities between products so that you may recommend a movie to another user because the different users like similar objects.",
              "So, the problem is to find similar products as a first step.",
              "You take two products and their characteristics (all transformed in numbers). So, you have two vectors.",
              "You may compute differences between vectors in the euclidean space. Geometrically, that means that they have different lengths and different angles.",
              "2-51.2.png"]
          },
          {
            "option": ["Matrix Factorization"],
            "answer": false,
            "explanation": ["Matrix Factorization is correctly used in recommender systems. Still, it is used with a significant amount of data, and there is the problem of reducing dimensionality."]
          },
          {
            "option": ["PCA"],
            "answer": false,
            "explanation": ["Principal component analysis is a technique to reduce the number of features by creating new variables."]
          }
        ],
        "feedback": [],
        "references": [
          "https://wikipedia.org/wiki/Principal_component_analysis",
          "https://en.wikipedia.org/wiki/Cosine_similarity",
          "https://cloud.google.com/architecture/recommendations-using-machine-learning-on-compute-engine"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_52",
        "domain": ["Monitor, optimize, and maintain ML solutions"],
        "intro": [],
        "body": [
          "Your company runs a big retail website. You develop many ML models for all the business activities.",
          "",
          "You migrated to Google Cloud. Your models are developed with PyTorch, TensorFlow and BigQuery ML.",
          "",
          "You are now working on an international project with other partners.",
          "",
          "You need to let them use your Vertex AI dataset in Cloud Storage for a different organization.",
          "",
          "What can you do?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Let them use your GCP Account"],
            "answer": false,
            "explanation": ["It is wrong mainly for security reasons."]
          },
          {
            "option": ["Exporting metadata and annotations in a JSONL file"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Exporting metadata and annotations in a CSV file"],
            "answer": false,
            "explanation": ["Annotations are written in JSON files."]
          },
          {
            "option": ["Give access (Service account or signed URL) to the Cloud Storage file"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Copy the data in a removable storage"],
            "answer": false,
            "explanation": ["It is wrong mainly for security reasons."]
          }
        ],
        "feedback": [
          "You can export a Dataset; when you do that, no additional copies of data are generated. The result is only JSONL files with all the useful information, including the Cloud Storage files URIs.",
          "But you have to grant access to these Cloud Storage files with a Service account or a signed URL, if to be used outside GCP.",
          "2-52.png",
  
        ],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/datasets/export-metadata-annotations",
          "https://cloud.google.com/vertex-ai/docs/datasets/datasets",
          "https://codelabs.developers.google.com/codelabs/vertex-ai-custom-code-training"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_53",
        "domain": ["Design data preparation and processing systems"],
        "intro": [],
        "body": [
          "You work as a junior Data Scientist in a consulting company, and you work with several ML projects.",
          "",
          "You need to properly collect and transform data and then work on your ML models. You want to identify the services for data transformation that are most suitable for your needs. You need automatic procedures triggered before training.",
          "",
          "What are the methodologies / services recommended by Google?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Dataflow"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["BigQuery"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Tensorflow"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Cloud Composer"],
            "answer": false,
            "explanation": ["Cloud Composer is often used in ML processes, but as a workflow tool, not for data transformation."]
          }
        ],
        "feedback": [
          "Google primarily recommends BigQuery, because this service allows you to efficiently perform both data and feature engineering operations with SQL standard.",
          "In other words, it is suitable both to correct, divide and aggregate the data, and to process the features (fields) merging, normalizing and categorizing them in an easy way.",
          "In order to transform data in advanced mode, for example, with window-aggregation feature transformations in streaming mode, the solution is Dataflow.",
          "It is also possible to perform transformations on the data with Tensorflow (tf.transform), such as creating new features: crossed_column, embedding_column, bucketized_column.",
          "It is important to note that with Tensorflow these transformations become part of the model and will be integrated into the graph that will be produced when the SavedModel is created.",
          "Look at the summary table <a href=\"https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1#preprocessing_options_summary\">at this link</a> for a complete overview.",
          "2-53.png"
        ],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/datasets/datasets",
          "https://cloud.google.com/composer",
          "https://cloud.google.com/architecture/setting-up-mlops-with-composer-and-mlflow"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_54",
        "domain": ["Design data preparation and processing systems"],
        "intro": [],
        "body": [
          "You just started working as a junior Data Scientist in a consulting Company. You are in a project team that is building a new model and you are experimenting. But the results are absolutely unsatisfactory because your data is dirty and needs to be modified.",
          "In particular, you have various fields that have no value or report NaN. Your expert colleague told you that you need to carry out a procedure that modifies them at the time of acquisition. What kind of functionalities do you need to provide?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Delete all records that have a null/NaN value in any field"],
            "answer": false,
            "explanation": ["The common practice is to delete records / examples that are completely wrong or completely lacking information (all null values)."]
          },
          {
            "option": ["Compute Mean / Median for numeric measures"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Replace Categories with the most frequent one"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Use another ML model for missing values guess"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [
          "The most frequent methodologies have been listed.",
          "In the case of numerical values, substituting the mean generally does not distort the model (it depends on the underlying statistical distribution).",
          "In the case of categories, the most common method is to replace them with the more frequent values.",
          "There are often multiple categories in the data. So, in this way, the effect of the missing category is minimized, but the additional values of the current example are used."
        ],
        "references": [
          "https://towardsdatascience.com/7-ways-to-handle-missing-values-in-machine-learning-1a6326adf79e",
          "https://cloud.google.com/architecture/data-preprocessing-for-ml-with-tf-transform-pt1"
        ],
        "date": ""
      },
      {
        "id": "whizlabs2_55",
        "domain": ["Design data preparation and processing systems"],
        "intro": [],
        "body": [
          "You just started working as a junior Data Scientist in a consulting Company.",
          "",
          "The job they gave you is to perform Data cleaning and correction so that they will later be used in the best possible way for creating and updating ML models.",
          "",
          "Data is stored in files of different formats.",
          "",
          "Which GCP service is best to help you with this business?"
        ],
        "open": false,
        "options": [
          {
            "option": ["BigQuery"],
            "answer": false,
            "explanation": ["BigQuery could obviously query and update data. But you need to preprocess data and prepare queries and procedures."]
          },
          {
            "option": ["Dataprep"],
            "answer": true,
            "explanation": ["Dataprep is an end-user service that allows you to explore, clean and prepare structured and unstructured data for many purposes, especially for machine learning.",
              "It is completely serverless. You don’t need to write code or procedures.",
              "2-55.png"]
          },
          {
            "option": ["Cloud Compose"],
            "answer": false,
            "explanation": ["Cloud Compose is for workflow management, not for Data preparation."]
          },
          {
            "option": ["Dataproc"],
            "answer": false,
            "explanation": ["Dataproc is a fully managed service for the Apache Hadoop environment."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      }
    ]
  },
  "udemy": {
    "udemy_ml_cert_prep": [
      {
        "id": "udemy_ml_cert_prep_1",
        "domain": [],
        "intro": [],
        "body": [
          "You are supporting a group of data analysts who want to build ML models using a managed service. They also want the ability to customize their models and tune hyperparameters. What managed service in Google Cloud would you recommend?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Vertex AI custom training"],
            "answer": true,
            "explanation": ["Vertex AI custom training allows for tuning hyperparameters."]
          },
          {
            "option": ["Vertex AI AutoML"],
            "answer": false,
            "explanation": ["Vertex AI AutoML training tunes hyperparameters for you."]
          },
          {
            "option": ["Cloud TPUs"],
            "answer": false,
            "explanation": ["Cloud TPUs are accelerators you can use to train large deep learning models."]
          },
          {
            "option": ["Cloud GPUs"],
            "answer": false,
            "explanation": ["Cloud GPUs are accelerators you can use to train large deep learning models."]
          }
        ],
        "feedback": [
          "BigQuery ML does not allow for hyperparameter tuning. "
        ],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform"
        ],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_2",
        "domain": [],
        "intro": [],
        "body": [
          "You have created a Compute Engine instance with an attached GPU but the GPU is not used when you train a Tensorflow model. What might you do to ensure the GPU can be used for training your models?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Install GPU drivers"],
            "answer": true,
            "explanation": ["GPU drivers need to be installed if they are not installed already when using GPUs.",
              "Deep Learning VM images have GPU drivers installed but if you don't use an image with GPU drivers installed, you will need to install them."]
          },
          {
            "option": ["Use Pytorch instead of Tensorflow"],
            "answer": false,
            "explanation": ["Using Pytorch instead of Tensorflow will require work to recode and Pytorch would not be able to use GPUs either if the drivers are not installed."]
          },
          {
            "option": ["Grant the Editor basic role to the VM service account"],
            "answer": false,
            "explanation": ["Granting a new role to the service account of the VM will not address the need to install GPU drivers."]
          },
          {
            "option": ["Update Python 2.7 on the VM"],
            "answer": false,
            "explanation": ["Updating Python will not address the problem of missing drivers."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/compute/docs/gpus/install-drivers-gpu"
        ],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_3",
        "domain": [],
        "intro": [],
        "body": [
          "A financial services company wants to implement a chatbot service to help direct customers to the best customer support team for their questions. What GCP service would you recommend?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Text-to-Speech API"],
            "answer": false,
            "explanation": ["Text-to-Speech converts text words to human voice-like sound."]
          },
          {
            "option": ["Speech-to-Text API"],
            "answer": false,
            "explanation": ["Speech-to-Text converts spoken words to written words."]
          },
          {
            "option": ["AutoML"],
            "answer": false,
            "explanation": ["AutoML is a machine learning service."]
          },
          {
            "option": ["Dialogflow"],
            "answer": true,
            "explanation": ["Dialogflow is a service for creating conversational user interfaces."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/dialogflow/docs"
        ],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_4",
        "domain": [],
        "intro": [],
        "body": [
          "You lead a team of machine learning engineers working for an IoT startup. You need to create a machine learning model to predict the likelihood of a device failure in manufacturing environments. The device generates a stream of metrics every 60 seconds. The metrics include 2 categorical values, 7 integer values, and 1 floating point value. The floating point value ranges from 0 to 100. For the purposes of the model, the floating point value is more precise than needed. Mapping that value to a feature with possible values \"high\", \"medium\", and \"low\" is sufficient. What feature engineering technique would you use to transform the floating point value to high, medium, or low?"
        ],
        "open": false,
        "options": [
          {
            "option": ["L1 Regularization"],
            "answer": false,
            "explanation": ["Regularization is the limiting of information captured by a model to prevent overfishing;", "L1 and L2 are two examples of regularization techniques."]
          },
          {
            "option": ["Normalization"],
            "answer": false,
            "explanation": ["Normalization is a transformation that scales numeric values to the range 0 to 1."]
          },
          {
            "option": ["Bucketing"],
            "answer": true,
            "explanation": ["In this case, values from 0 to 33 could be low, 34 to 66 could be medium, and values greater than 66 could be high."]
          },
          {
            "option": ["L2 Regularization"],
            "answer": false,
            "explanation": ["Regularization is the limiting of information captured by a model to prevent overfishing;",
              "L1 and L2 are two examples of regularization techniques."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_5",
        "domain": [],
        "intro": [],
        "body": [
          "You have trained a machine learning model. After training is complete, the model scores high on accuracy and F1 score when measured using training data; however, when validation data is used, the accuracy and F1 score are much lower. What is the likely cause of this problem?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Overfitting"],
            "answer": true,
            "explanation": ["This is an example of overfitting because the model has not generalized from the training data."]
          },
          {
            "option": ["Underfitting"],
            "answer": false,
            "explanation": ["Underfitting would have resulted in poor performance with training data."]
          },
          {
            "option": ["Insufficiently complex model"],
            "answer": false,
            "explanation": ["Insufficiently complex models can lead to underfitting but not overfitting."]
          },
          {
            "option": ["The learning rate is too small"],
            "answer": false,
            "explanation": ["A small learning rate will lead to longer training times but would not cause the described problem."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_6",
        "domain": [],
        "intro": [],
        "body": [
          "You are building a machine learning model using random forests. You haven't achieved the precision and recall you would like. What hyperparameter or hyperparameters would you try adjusting to improve accuracy?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Number of trees only"],
            "answer": false,
            "explanation": ["It's incomplete"]
          },
          {
            "option": ["Number of trees and depth of trees"],
            "answer": true,
            "explanation": ["Both are hyperparameters that could be adjusted to improve accuracy."]
          },
          {
            "option": ["Number of clusters"],
            "answer": false,
            "explanation": ["Random forests do not use the concept of clusters."]
          },
          {
            "option": ["Learning rate"],
            "answer": false,
            "explanation": ["Random forest algorithms does not use a learning rate hyperparameter."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_7",
        "domain": [],
        "intro": [],
        "body": [
          "A logistics analyst wants to build a machine learning model to predict the number of units of a product that will need to be shipped to stores over the next 30 days. The features they will use are all stored in a relational database. The business analyst is familiar with reporting tools but not programming in general. What service would you recommend the analyst use to build a model?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Spark ML"],
            "answer": false,
            "explanation": ["Spark ML is suitable for modelers with programming skills."]
          },
          {
            "option": ["AutoML"],
            "answer": true,
            "explanation": ["It uses structured data to build models with little input from users."]
          },
          {
            "option": ["Bigtable ML"],
            "answer": false,
            "explanation": ["There is no Bigtable ML but BigQuery ML is a managed service for building machine learning models in BigQuery using SQL."]
          },
          {
            "option": ["TensorFlow"],
            "answer": false,
            "explanation": ["Tensorflow is suitable for modelers with programming skills."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_8",
        "domain": [],
        "intro": [],
        "body": [
          "When testing a regression model to predict the selling price of houses. After several iterations of model building, you note that small changes in a few features can lead to large differences in the output. This is an example of what kind of problem?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Low variance"],
            "answer": false,
            "explanation": ["Low variance is desired in ML models and is not a problem."]
          },
          {
            "option": ["High variance"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Low bias"],
            "answer": false,
            "explanation": ["Low bias is desired in ML models and is not a problem."]
          },
          {
            "option": ["High bias"],
            "answer": false,
            "explanation": ["High bias occurs when relationships are missed."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_9",
        "domain": [],
        "intro": [],
        "body": [
          "You are an ML engineer with a startup building machine learning models for the pharmaceutical industry. You are currently developing a deep learning machine learning model to predict the toxicity of drug candidates. The training data set consists of a large number of chemical and physical attributes and there is a large number of instances. Training takes several days on an n2 type Compute Engine virtual machine. What would you recommend to reduce the training time without compromising the quality of the model?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Use TPUs"],
            "answer": true,
            "explanation": ["TPUs are designed to accelerate the dominant computation in deep learning model training."]
          },
          {
            "option": ["Randomly sample 20% of the training set and train on that smaller data set"],
            "answer": false,
            "explanation": ["Using a smaller data set by sampling would reduce training time but would likely compromise the quality of the model."]
          },
          {
            "option": ["Increase the machine size to make more memory available"],
            "answer": false,
            "explanation": ["Increasing memory may reduce training time if memory is constrained but it will not decrease training time as much as other option."]
          },
          {
            "option": ["Increase the machine size to make more CPUs available"],
            "answer": false,
            "explanation": ["Increasing CPUs would improve performance but not as much or as other option."]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/tpu/docs/intro-to-tpu#TPU"
        ],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_10",
        "domain": [],
        "intro": [],
        "body": [
          "You want to evaluate a classification model using the True Positive Rate and the False Positive Rate. You want to view a graph showing the performance of the model at all classification thresholds. What evaluation metric would you use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Area under the ROC curve (AUC)"],
            "answer": true,
            "explanation": ["Area under the ROC curve (AUC) is a graph of True Positive and False Positive rates."]
          },
          {
            "option": ["Precision"],
            "answer": false,
            "explanation": ["Precision is a measure of the quality of positive predictions."]
          },
          {
            "option": ["F1 Score"],
            "answer": false,
            "explanation": ["F1 Score is a harmonic mean of precision and recall."]
          },
          {
            "option": ["L2 Regularization"],
            "answer": false,
            "explanation": ["L2 Regularization is a technique to prevent overfitting."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_11",
        "domain": [],
        "intro": [],
        "body": [
          "You are building a machine learning model and during the data preparation stage, you preform normalization and standardization using the full data set. You then split the full data set into training, validation, and testing data sets. What problem could be introduced by performing the steps in the order described?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Regularization"],
            "answer": false,
            "explanation": ["Regularization is a technique to prevent overfitting."]
          },
          {
            "option": ["Data leakage"],
            "answer": true,
            "explanation": ["This is an example of data leakage because you are making additional data available during training that would not be available when running predictions, in this case, additional information is used to perform normalization and standardization."]
          },
          {
            "option": ["Introduction of bias"],
            "answer": false,
            "explanation": ["No bias is introduced"]
          },
          {
            "option": ["Imbalanced classes"],
            "answer": false,
            "explanation": ["There is no indication that classes are imbalanced"]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_12",
        "domain": [],
        "intro": [],
        "body": [
          "A simple model based on hand-coded heuristics or a simple algorithms such as a linear model is often built early in the model training process. What is the purpose of such as model?"
        ],
        "open": false,
        "options": [
          {
            "option": ["It provides a baseline for the minimum performance to expect in an ML model"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["It provides the maximum expected performance in an ML model"],
            "answer": false,
            "explanation": ["Simple models do not provide indication of maximum performance."]
          },
          {
            "option": ["It provides a measure of the likelihood of underfitting"],
            "answer": false,
            "explanation": ["A simple model could underfit and would be expected."]
          },
          {
            "option": ["It provides a measure of the likelihood of overfitting"],
            "answer": false,
            "explanation": ["Simple models are not likely to overfit."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_13",
        "domain": [],
        "intro": [],
        "body": [
          "What characteristics of feature values do we try to find when using descriptive statistics for data exploration?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Central tendency only"],
            "answer": false,
            "explanation": ["It's incomplete"]
          },
          {
            "option": ["Spread of values only"],
            "answer": false,
            "explanation": ["It's incomplete"]
          },
          {
            "option": ["Central tendency and spread of values"],
            "answer": true,
            "explanation": ["Descriptive statistics are used to measure both central tendency and the spread of values."]
          },
          {
            "option": ["Likelihood to contribute to a prediction"],
            "answer": false,
            "explanation": ["The likelihood of contributing to a prediction is not measured until after a model is created."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_14",
        "domain": [],
        "intro": [],
        "body": [
          "You are building a classification model to detect fraud in credit card transactions. When exploring the training data set you notice that 2% of instances are examples of fraudulent transactions and 98% are legitimate transactions. This is an example of what kind of data set?"
        ],
        "open": false,
        "options": [
          {
            "option": ["An imbalanced data set"],
            "answer": true,
            "explanation": ["This is an imbalanced data set because one class has significantly more instances than the others."]
          },
          {
            "option": ["A standardized data set"],
            "answer": false,
            "explanation": ["Standardization is a technique for preparing the data set."]
          },
          {
            "option": ["A normalized data set"],
            "answer": false,
            "explanation": ["Normalization is a technique for preparing the data set."]
          },
          {
            "option": ["A marginalized data set"],
            "answer": false,
            "explanation": ["There is no such thing as a marginalized data set in machine learning."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_15",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following techniques can be used when working with imbalanced data sets?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Collecting more data"],
            "answer": false,
            "explanation": ["It's incomplete"]
          },
          {
            "option": ["Resampling"],
            "answer": false,
            "explanation": ["It's incomplete"]
          },
          {
            "option": ["Generating synthetic data using an algorithm such as SMOTE"],
            "answer": false,
            "explanation": ["It's incomplete"]
          },
          {
            "option": ["All of the above"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_16",
        "domain": [],
        "intro": [],
        "body": [
          "A team of machine learning engineers is training an image recognition model to detect defects in manufactured parts. The team has a data set of 10,000 images but wants to train with at least 30,000 images. They do not have time to wait for an additional set of 20,000 images to be collected on the factory floor. What type of technique could they use to produce a data set with 30,000 images?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Normalization"],
            "answer": false,
            "explanation": ["Normalization is a data preparation technique."]
          },
          {
            "option": ["Data augmentation"],
            "answer": true,
            "explanation": ["Data augmentation is a set of techniques for artificially increasing the number of instances in a data set by manipulating other instances."]
          },
          {
            "option": ["Data leakage"],
            "answer": false,
            "explanation": ["Data leakage is the use of data in training that is not available during prediction and is unwanted."]
          },
          {
            "option": ["Imbalanced classes"],
            "answer": false,
            "explanation": ["Imbalanced classes is not a technique for expanding the size of a dataset."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_17",
        "domain": [],
        "intro": [],
        "body": [
          "You are using distributed training with TensorFlow. What type of server stores parameters and coordinates shared model state across workers?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Parameter servers"],
            "answer": true,
            "explanation": ["Parameter servers store model parameters and share state."]
          },
          {
            "option": ["State servers"],
            "answer": false,
            "explanation": ["There is no state servers."]
          },
          {
            "option": ["Evaluators"],
            "answer": false,
            "explanation": ["Evaluators evaluate models."]
          },
          {
            "option": ["Primary replica"],
            "answer": false,
            "explanation": ["Primary replicas manage other nodes."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_18",
        "domain": [],
        "intro": [],
        "body": [
          "A dataset includes multiple categorical values. You want to train a deep learning neural network using the data set. Which of the following would be an appropriate data encoding scheme?"
        ],
        "open": false,
        "options": [
          {
            "option": ["One-hot encoding"],
            "answer": true,
            "explanation": ["One-hot encoding is an appropriate encoding technique to map categorical values to a bit vector."]
          },
          {
            "option": ["Categorical encoding"],
            "answer": false,
            "explanation": ["Categorical values themselves are not suitable input to a deep learning network."]
          },
          {
            "option": ["Regularization"],
            "answer": false,
            "explanation": ["Regularization is is used to prevent overfitting."]
          },
          {
            "option": ["Normalization"],
            "answer": false,
            "explanation": ["Normalization is a data preparation operation."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_19",
        "domain": [],
        "intro": [],
        "body": [
          "A dataset you are using has categorical values mapped to integer values, such as red to 1, blue to 2, and green to 3. What kind of encoding scheme is this?"
        ],
        "open": false,
        "options": [
          {
            "option": ["One-hot encoding"],
            "answer": false,
            "explanation": ["One-hot encoding maps to a bit vector with only one bit set to one."]
          },
          {
            "option": ["Feature hashing"],
            "answer": false,
            "explanation": ["Feature hashing applies a hash function to compute a representation."]
          },
          {
            "option": ["Ordinal encoding"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Data augmentation"],
            "answer": false,
            "explanation": ["Data augmentation is not an encoding scheme, it is a set of techniques for increasing the size of a data set."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_20",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following are ways bias can be introduced in a machine learning model?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Biased data distribution"],
            "answer": true,
            "explanation": ["Biased data can introduce bias in a machine model."]
          },
          {
            "option": ["Proxy variables"],
            "answer": true,
            "explanation": ["Proxy variables can introduce bias in a machine model."]
          },
          {
            "option": ["Data leakage"],
            "answer": false,
            "explanation": ["Data leakage can cause problems but is not likely to introduce bias that isn't already in the data set."]
          },
          {
            "option": ["Data augmentation"],
            "answer": false,
            "explanation": ["Data augmentation can continue to represent bias in a data set but does not introduce new bias."]
          },
          {
            "option": ["Normalization"],
            "answer": false,
            "explanation": ["Normalization is a data preparation operations."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_21",
        "domain": [],
        "intro": [],
        "body": [
          "A machine learning engineer detects non-linear relationships between two variables in a dataset. The dataset is relatively small and it is expensive to acquire new examples. What can the machine learning engineer do to increase the performance of the model with respect to the non-linear relationship detected?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Use a deep learning network"],
            "answer": false,
            "explanation": ["A deep learning network can also learn non-linear relationships but they require large volumes of data."]
          },
          {
            "option": ["Use regularization"],
            "answer": false,
            "explanation": ["Regularization is a set of techniques for preventing overfitting."]
          },
          {
            "option": ["Create a feature cross"],
            "answer": true,
            "explanation": ["A feature cross could capture the non-linear relationship."]
          },
          {
            "option": ["Use data leakage"],
            "answer": false,
            "explanation": ["Data leakage is unwanted in a machine learning model."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_22",
        "domain": [],
        "intro": [],
        "body": [
          "You have a dataset with more features than you believe you need to train a model. You would like to measure how well two numerical values linearly correlate so you can eliminate one of them if they highly correlate. What statistical test would you use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Pearson's Correlation"],
            "answer": true,
            "explanation": ["The Pearson's Correlation is used for measuring the linear correlation between two variables."]
          },
          {
            "option": ["ANOVA"],
            "answer": false,
            "explanation": ["ANOVA is used to measure the difference among means."]
          },
          {
            "option": ["Kendall's Rank Coefficient"],
            "answer": false,
            "explanation": ["Kendall's Rank Coefficient is used for measuring numeric and categorical correlations."]
          },
          {
            "option": ["Chi-Squared Test"],
            "answer": false,
            "explanation": ["The Chi-Squared test is used for measuring the correlation between categorical values."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_23",
        "domain": [],
        "intro": [],
        "body": [
          "You have a dataset with more features than you believe you need to train a model. You would like to measure how well two categorical values linearly correlate so you can eliminate one of them if they highly correlate. What statistical test would you use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Pearson's Correlation"],
            "answer": false,
            "explanation": ["Pearson's Correlation is used for measuring the linear correlation between two variables."]
          },
          {
            "option": ["ANOVA"],
            "answer": false,
            "explanation": ["ANOVA is used to measure the difference among means."]
          },
          {
            "option": ["Chi-Squared Test"],
            "answer": true,
            "explanation": ["The Chi-Squared test is used for measuring the correlation between categorical values."]
          },
          {
            "option": ["Kendall's Rank Coefficient"],
            "answer": false,
            "explanation": ["Kendall's Rank Coefficient is used for measuring numeric and categorical correlations."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_24",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following types of pre-built containers are available in Vertex AI?"
        ],
        "open": false,
        "options": [
          {
            "option": ["TensorFlow Optimized Runtime"],
            "answer": true,
            "explanation": ["TensorFlow Optimized Runtime is available in Vertex AI pre-built containers."]
          },
          {
            "option": ["Theano"],
            "answer": false,
            "explanation": ["Theano is a machine learning platforms but not available as pre-built containers."]
          },
          {
            "option": ["Hadoop Mahout"],
            "answer": false,
            "explanation": ["Hadoop Mahout is a machine learning platforms but not available as pre-built containers."]
          },
          {
            "option": ["XGBoost"],
            "answer": true,
            "explanation": ["XGBoost is available in Vertex AI pre-built containers."]
          },
          {
            "option": ["Scikit-Learn"],
            "answer": true,
            "explanation": ["Scikit-Learn is available in Vertex AI pre-built containers."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_25",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following are required of a custom container used with Vertex AI?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Support for health checks and liveliness checks"],
            "answer": true,
            "explanation": ["Custom container images running in Vertex AI must have support health checks and liveliness checks."]
          },
          {
            "option": ["Request and response message size may be no more than 10 MB"],
            "answer": false,
            "explanation": ["Request and response message sizes must be 1.5MB or less."]
          },
          {
            "option": ["Running an HTTP server"],
            "answer": true,
            "explanation": ["Custom container images running in Vertex AI must have an HTTP server"]
          },
          {
            "option": ["Include GPU drivers"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Include support for TPUs or GPUs"],
            "answer": false,
            "explanation": ["Support for GPUs or TPUs is not required."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_26",
        "domain": [],
        "intro": [],
        "body": [
          "You are training large deep learning networks in Kubernetes Engine and want to use a cost-effective accelerator. You do not need high precision floating point operations. What would you choose?"
        ],
        "open": false,
        "options": [
          {
            "option": ["GPUs"],
            "answer": false,
            "explanation": ["GPUs are high precision accelerators."]
          },
          {
            "option": ["TPUs"],
            "answer": true,
            "explanation": ["Tensor processing units (TPUs) are lower precision accelerators designed for TensorFlow operations and cost less than GPUs."]
          },
          {
            "option": ["ASICs"],
            "answer": false,
            "explanation": ["ASICs are a general class of application specific integrated circuits."]
          },
          {
            "option": ["CPUs"],
            "answer": false,
            "explanation": ["CPUs are central processing units and are not considered accelerators."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_27",
        "domain": [],
        "intro": [],
        "body": [
          "Several datasets you use for training ML models have missing data. You consider deleting rows with missing data. In which case would you not want to delete instances with missing data?"
        ],
        "open": false,
        "options": [
          {
            "option": ["When a significant portion of the instances are missing data"],
            "answer": true,
            "explanation": ["You would not want to delete instance with missing data when a significant portion of the instances are missing data because you would lose many instances."]
          },
          {
            "option": ["When a small number of instances are missing data"],
            "answer": false,
            "explanation": ["When a small number of instance are missing data, removing those instances would not adversely affect results."]
          },
          {
            "option": ["When instances are missing data for more than one feature"],
            "answer": false,
            "explanation": ["Since all data for all features are removed when removing a row with any missing data, the number of features with missing data does not impact the final results."]
          },
          {
            "option": ["when instances are missing data for more than three features"],
            "answer": false,
            "explanation": ["Since all data for all features are removed when removing a row with any missing data, the number of features with missing data does not impact the final results."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_28",
        "domain": [],
        "intro": [],
        "body": [
          "When is it appropriate to use the Last Observed Value Carried Forward strategy for missing data?"
        ],
        "open": false,
        "options": [
          {
            "option": ["When working with time series data"],
            "answer": true,
            "explanation": ["The Last Observed Value Carried Forward strategy works well with time series data."]
          },
          {
            "option": ["When working with categorical data and a small number of values"],
            "answer": false,
            "explanation": ["Categorical values with a small number of possible values is not a good candidate since the previous value may have not relation to next instance in the data set."]
          },
          {
            "option": ["When overfitting is a high risk"],
            "answer": false,
            "explanation": ["The technique is irrelevant to overfitting."]
          },
          {
            "option": ["When underfitting is a high risk"],
            "answer": false,
            "explanation": ["The technique is irrelevant to underfitting."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_29",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following are examples of hyperparameters?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Maximum depth of a decision tree only"],
            "answer": false,
            "explanation": ["It's incomplete"]
          },
          {
            "option": ["Number of layers in a deep learning network only"],
            "answer": false,
            "explanation": ["It's incomplete"]
          },
          {
            "option": ["Learning rate of gradient descent"],
            "answer": false,
            "explanation": ["It's incomplete"]
          },
          {
            "option": ["All of the above"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_30",
        "domain": [],
        "intro": [],
        "body": [
          "You are validating a machine learning model and have decided you need to further tune hyperparamets. You would like to try analyze multiple hyperparameter combinations in parallel. Which of the following techniques could you use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Grid search and Bayesian search"],
            "answer": false,
            "explanation": ["Bayesian search is a sequential method for searching hyperparameter combinations."]
          },
          {
            "option": ["Random search and Grid search"],
            "answer": true,
            "explanation": ["Random search and grid search can both be applied in parallel."]
          },
          {
            "option": ["Bayesian search only"],
            "answer": false,
            "explanation": ["Bayesian search is a sequential method for searching hyperparameter combinations."]
          },
          {
            "option": ["Random search only"],
            "answer": false,
            "explanation": ["It's incomplete"]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_31",
        "domain": [],
        "intro": [],
        "body": [
          "You spend a lot of time tuning hyperparameters by manually testing combinations of hyperparameters. You want to automate the process and use a technique that can learn from previous evaluations of other hyperparameter combinations. What algorithm would you use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Grid search"],
            "answer": false,
            "explanation": ["Grid search is used for hyperparameter tuning but do not use prior knowledge."]
          },
          {
            "option": ["Data augmentation"],
            "answer": false,
            "explanation": ["Data augmentation is not used for searching hyperparameters."]
          },
          {
            "option": ["Bayesian search"],
            "answer": true,
            "explanation": ["Bayesian search uses knowledge from previous evaluations when selecting new hyperparameter values."]
          },
          {
            "option": ["Random search"],
            "answer": false,
            "explanation": ["Random search is used for hyperparameter tuning but do not use prior knowledge."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_32",
        "domain": [],
        "intro": [],
        "body": [
          "A dataset has been labeled by a crowd-sourced group of labelers. You want to evaluate the quality of the labeling process. You randomly select a group of labeled instances and find several are mislabled. You want to find other instances that are similar to the mislabeled instances. What kind of algorithm would you use to find similar instances?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Approximate Nearest Neighbor"],
            "answer": true,
            "explanation": ["Approximate Nearest Neighbor algorithms use clustering to group similar instances and would be the correct choice."]
          },
          {
            "option": ["XGBoost"],
            "answer": false,
            "explanation": ["XGBoost is not clustering algorithms and would not be as good a choice as a clustering algorithm."]
          },
          {
            "option": ["Random Forest"],
            "answer": false,
            "explanation": ["Random Forest is not clustering algorithms and would not be as good a choice as a clustering algorithm."]
          },
          {
            "option": ["Gradient descent"],
            "answer": false,
            "explanation": ["Gradient descent is a technique used to optimize weights in deep learning."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_33",
        "domain": [],
        "intro": [],
        "body": [
          "A company is migrating a machine learning model that is currently being served on premises to Google Cloud. The model runs in Spark ML. You have been asked to recommend a way to migrate the service with the least disruption in service and minimal effort. The company does not want to manage infrastructure if possible and prefers to use managed services. What would you recommend?"
        ],
        "open": false,
        "options": [
          {
            "option": ["BigQuery ML"],
            "answer": false,
            "explanation": ["BigQuery supports BigQuery ML but that would require re-implmenting the model."]
          },
          {
            "option": ["Cloud Dataproc"],
            "answer": true,
            "explanation": ["Cloud Dataproc is a managed Spark/Hadoop service and would be a good choice."]
          },
          {
            "option": ["Cloud Dataflow"],
            "answer": false,
            "explanation": ["Cloud Dataflow is a managed service for batch and stream processing."]
          },
          {
            "option": ["Cloud Data Studio"],
            "answer": false,
            "explanation": ["Cloud Data Studio is a visualization tool."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_34",
        "domain": [],
        "intro": [],
        "body": [
          "A group of data analysts know SQL and want to build machine learning models using data stored on premises in relational databases. They want to load the data into the cloud and use a cloud-based service for machine learning. They want to build models as quickly as possible and use them for problems in classification, forecasting, and recommendations. They do not want to program in Python or Java. What Google Cloud service would you recommend?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Cloud Dataproc"],
            "answer": false,
            "explanation": ["Cloud Dataproc could be used for machine learning but requires programming in Java, Python or other programming languages."]
          },
          {
            "option": ["Cloud Dataflow"],
            "answer": false,
            "explanation": ["Cloud Dataflow is for data processing, not machine learning."]
          },
          {
            "option": ["BigQuery ML"],
            "answer": true,
            "explanation": ["BigQuery ML uses SQL to create and serve machine learning models and dose not require programming in a language such as Python or Java."]
          },
          {
            "option": ["Bigtable"],
            "answer": false,
            "explanation": ["Bigtable does not support machine learning directly in the service."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_35",
        "domain": [],
        "intro": [],
        "body": [
          "What feature representation is used when training machine learning models using text or image data?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Feature vectors"],
            "answer": true,
            "explanation": ["Feature vectors are the standard way of inputting data to a machine learning algorithm."]
          },
          {
            "option": ["Lists of categorical values"],
            "answer": false,
            "explanation": ["Lists of categorical values are not accessible to many machine learning algorithms."]
          },
          {
            "option": ["2-dimensional arrays"],
            "answer": false,
            "explanation": ["2-dimensional arrays are mapped to 1-dimensional feature vectors before submitting data to the machine learning training algorithm."]
          },
          {
            "option": ["3-dimensional arrays"],
            "answer": false,
            "explanation": ["3-dimensional arrays are mapped to 1-dimensional feature vectors before submitting data to the machine learning training algorithm."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_36",
        "domain": [],
        "intro": [],
        "body": [
          "An IoT company has developed a TensorFlow deep learning model to detect anomalies in machine sensor readings. The model will be deployed to edge devices. Machine learning engineers want to reduce the model size without significantly reducing the quality of the model. What technique could they use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["ANOVA"],
            "answer": false,
            "explanation": ["ANOVA is a statistical test for comparing the means of two or more populations."]
          },
          {
            "option": ["Quantization"],
            "answer": true,
            "explanation": ["Quantization is a technique for reducing model size without reducing quality."]
          },
          {
            "option": ["Data augmentation"],
            "answer": false,
            "explanation": ["Data augmentation is used to create new training instances based on existing instances."]
          },
          {
            "option": ["Bucketing"],
            "answer": false,
            "explanation": ["Bucketing is a technique of mapping feature values into a smaller set of values."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_37",
        "domain": [],
        "intro": [],
        "body": [
          "You have created a machine learning model to identify defective parts in an image. Users will send images to an endpoint used to serve the model. You want to follow Google Cloud recommendations. How would you encode the image when making a request of the prediction service?"
        ],
        "open": false,
        "options": [
          {
            "option": ["CSV"],
            "answer": false,
            "explanation": ["CSV is a file formats for structured data."]
          },
          {
            "option": ["Avro"],
            "answer": false,
            "explanation": ["Avro is a file formats for structured data."]
          },
          {
            "option": ["base64"],
            "answer": true,
            "explanation": ["Base64 is the recommended encoding for images."]
          },
          {
            "option": ["Capacitor format"],
            "answer": false,
            "explanation": ["Capacitor format is used by BigQuery to store data in compressed, columnar format."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_38",
        "domain": [],
        "intro": [],
        "body": [
          "You are making a large number of predictions using an API endpoint. Several of the services making requests could send batches of requests instead of individual requests to the endpoint. How could you improve the efficiency of serving predictions?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Use batches with a large batch size to take advantage of vectorization"],
            "answer": true,
            "explanation": ["Using batches with large batch size will take advantage of vectorization and improve efficiency."]
          },
          {
            "option": ["Vertically scale the API server"],
            "answer": false,
            "explanation": ["Vertically scaling will increase throughput but using the API and single requests will still use more compute resources than using batch processing."]
          },
          {
            "option": ["Train with additional data to improve accuracy"],
            "answer": false,
            "explanation": ["Training with additional data will not change serving efficiency."]
          },
          {
            "option": ["Release re-trained models more frequently"],
            "answer": false,
            "explanation": ["Re-training more frequently will not change serving efficiency."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_39",
        "domain": [],
        "intro": [],
        "body": [
          "Which component of the Vertex AI platform provides for the orchestration of machine learning operations in Vertex AI?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Vertex AI Prediction"],
            "answer": false,
            "explanation": ["Vertex AI Prediction is for serving models"]
          },
          {
            "option": ["Vertex AI Pipelines"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Vertex AI Experiments"],
            "answer": false,
            "explanation": ["Vertex AI Experiments is for tracking training experiments"]
          },
          {
            "option": ["Vertex AI Workbench"],
            "answer": false,
            "explanation": ["Vertex Workbench provides managed and user managed notebooks for development."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_40",
        "domain": [],
        "intro": [],
        "body": [
          "A team of researchers have built a TensorFlow model for predicting near-term weather changes. They are using TPUs but are not achieving the throughput they would like. Which of the following might improve the efficiency of processing?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Using the tf.data API to maximize the efficiency of data pipelines using GPUs and TPUs"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Use distributed XGBoost"],
            "answer": false,
            "explanation": ["XGBoost is a machine learning platform and will not improve the efficiency of a TensorFlow model."]
          },
          {
            "option": ["Use early stopping"],
            "answer": false,
            "explanation": ["Early stopping is an optimization for training, not serving."]
          },
          {
            "option": ["Scale up CPUs before scaling out the number of CPUs"],
            "answer": false,
            "explanation": ["Scaling up CPUs or adding more CPUs will not significantly change the efficiency of using GPUs or TPUs."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_41",
        "domain": [],
        "intro": [],
        "body": [
          "Managed data sets in Vertex AI provided which of the following benefits?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Manage data sets in a central location only"],
            "answer": false,
            "explanation": ["There are no enhanced predefined roles for Vertex AI datasets."]
          },
          {
            "option": ["Managed data sets in a central location and create labels and annotations only"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Managed data sets in a central location, create labels and annotations, and apply enhanced predefined IAM roles only"],
            "answer": false,
            "explanation": ["There are no enhanced predefined roles for Vertex AI datasets."]
          },
          {
            "option": ["Managed data sets in a central location, create labels and annotations, apply enhanced predefined IAM roles, and track the lineage of models"],
            "answer": false,
            "explanation": ["There are no enhanced predefined roles for Vertex AI datasets."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_42",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following are options for tabular datasets in Vertex AI Datasets?"
        ],
        "open": false,
        "options": [
          {
            "option": ["CSV files only"],
            "answer": false,
            "explanation": ["It's incomplete"]
          },
          {
            "option": ["CSV files and BigQuery tables and views"],
            "answer": true,
            "explanation": ["Vertex AI Datasets support CSV files and BigQuery tables and views for tabular data."]
          },
          {
            "option": ["CSv files, BigQuery tables and views, and Bigtable tables"],
            "answer": false,
            "explanation": ["Bigtable tables are not supported."]
          },
          {
            "option": ["CSV files, BigQuery tables and views, and Avro files"],
            "answer": false,
            "explanation": ["Avro files are not supported."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_43",
        "domain": [],
        "intro": [],
        "body": [
          "A team of reviewers is analyzing a training data set for sensitive information that should not be used when training models. Which of the following are types of sensitive information that should be removed from the training set?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Credit card numbers"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Government ID numbers"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Purchase history"],
            "answer": false,
            "explanation": ["Purchase history is not sensitive information."]
          },
          {
            "option": ["Faces in images"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Customer segment identifier"],
            "answer": false,
            "explanation": ["Customer segment identifiers are not sensitive information."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_44",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the follwoing techniques can be used to mask sensitive data?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Substitution cipher"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Tokenization"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Data augmentation"],
            "answer": false,
            "explanation": ["Data augmentation is used to increase the size of training sets."]
          },
          {
            "option": ["Regularization"],
            "answer": false,
            "explanation": ["Regularization is used to prevent overfitting."]
          },
          {
            "option": ["Principal component analysis"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_45",
        "domain": [],
        "intro": [],
        "body": [
          "Which of the following is a type of security risk to machine learning models?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Data poisoning"],
            "answer": true,
            "explanation": ["Data poisoning is a security risk associated with an attacker compromising the training process in order to train the model to behave in ways the attacker wants."]
          },
          {
            "option": ["Missing data"],
            "answer": false,
            "explanation": ["Missing data and inconsistent data are data risks that can compromise a model but they are not security risks."]
          },
          {
            "option": ["Inconsistent labeling"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Insufficiently agreed upon objectives"],
            "answer": false,
            "explanation": ["Insufficiently agreed upon objectives is a process risk but not a security risk."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_46",
        "domain": [],
        "intro": [],
        "body": [
          "You are training a classifier using XGBoost in Vertex AI. Training is proceeding slower than expected so you add GPUs to your training server. There is no noticeable difference in the training time. Why is this?"
        ],
        "open": false,
        "options": [
          {
            "option": ["GPUs are only useful for improving serving efficiency"],
            "answer": false,
            "explanation": ["GPUs are useful for improving training performance."]
          },
          {
            "option": ["TPUs should have been used instead"],
            "answer": false,
            "explanation": ["Using TPUs would not improve performance."]
          },
          {
            "option": ["GPUs are not used with XGBoost in Vertex AI"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["You did not install GPU drivers on the server"],
            "answer": false,
            "explanation": ["Vertex AI manages images used for training and serving so there is no need to manually install GPU drivers."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_47",
        "domain": [],
        "intro": [],
        "body": [
          "Aerospace engineers are building a model to predict turbulence and impact on a new airplane wing design. They have large, multi-dimensional data sets. What file format would you recommend they use for training data?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Parquet"],
            "answer": false,
            "explanation": ["Parquet is a columnar format and could be used but there is a better option."]
          },
          {
            "option": ["Petastorm"],
            "answer": true,
            "explanation": ["Petastorm is designed for multi-dimensional data."]
          },
          {
            "option": ["ORC"],
            "answer": false,
            "explanation": ["ORC is a columnar format and could be used but there is a better option."]
          },
          {
            "option": ["CSV"],
            "answer": false,
            "explanation": ["CSV is inefficient for large data sets."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_48",
        "domain": [],
        "intro": [],
        "body": [
          "You would like to use a nested file format for training data that will be used with TensorFlow. You would like to use the most efficient format. Which of the following would you choose?"
        ],
        "open": false,
        "options": [
          {
            "option": ["JSON"],
            "answer": false,
            "explanation": ["JSON is a plain text format and not as efficient as other option."]
          },
          {
            "option": ["XML"],
            "answer": false,
            "explanation": ["XML is a plain text format and not as efficient as other option."]
          },
          {
            "option": ["CSV"],
            "answer": false,
            "explanation": ["CSV is not a nested file format."]
          },
          {
            "option": ["TFRecords"],
            "answer": true,
            "explanation": ["TFRecords is based on protobuf, a binary nested file format and optimized for TensorFlow."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_49",
        "domain": [],
        "intro": [],
        "body": [
          "A robotics developer has created a machine learning model to detect unripe apples in images. Robots use this information to remove unripe apples from a conveyor belt. The engineers who developed this model are using it as a starting model for training a model to detect unripe pears. This is an example of what kind of learning?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Unsupervised learning"],
            "answer": false,
            "explanation": ["Unsupervised learning uses data sets without labels."]
          },
          {
            "option": ["Regression"],
            "answer": false,
            "explanation": ["Regression models predict a continuous value."]
          },
          {
            "option": ["Reinforcement learning"],
            "answer": false,
            "explanation": ["Reinforcement learning uses feedback from the environment to learn."]
          },
          {
            "option": ["Transfer learning"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      },
      {
        "id": "udemy_ml_cert_prep_50",
        "domain": [],
        "intro": [],
        "body": [
          "A retailer has deployed a machine learning model to predict when a customer is likely to abandon a shopping cart. A MLOps engineer notices that the feature data distribution in production deviates from feature data distribution in the latest training data set. This is an example of what kind of problem?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Skew"],
            "answer": true,
            "explanation": ["Skew is the problem of feature data distribution in production deviating from feature data distribution in training data."]
          },
          {
            "option": ["Drift"],
            "answer": false,
            "explanation": ["Drift occurs when feature data distribution in production changes significantly over time."]
          },
          {
            "option": ["Data leakage"],
            "answer": false,
            "explanation": ["Data leakage is a problem in training when data not available when making predictions is used in training."]
          },
          {
            "option": ["Underfitting"],
            "answer": false,
            "explanation": ["Underfitting occurs when a model does not perform well even on training data set because the model is unable to learn."]
          }
        ],
        "feedback": [],
        "references": [],
        "date": ""
      }
    ]
  },
  "books": {
    "packt_ml_journey": [
      {
        "id": "packt_ml_journey_1",
        "domain": [],
        "intro": [],
        "body": [
          "Space Y is launching its hundredth satellite to build its StarSphere network. They have designed an accurate orbit (launching speed/time/and so on) for it based on the existing 99 satellite orbits to cover the Earth’s scope. What’s the best solution to forecast the position of the 100 satellites after the hundredth launch?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Use ML algorithms and train ML models to forecast"],
            "answer": false,
            "explanation": ["To decide whether ML is the best method for a problem, we need to see whether traditional science modeling would be very difficult or impossible to solve the problem and whether plenty of data exists."]
          },
          {
            "option": ["Use neural networks to train the model to forecast"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Use physical laws and actual environmental data to model and forecast"],
            "answer": true,
            "explanation": [
              "When we start, science modeling will be our first choice since it builds the most accurate model based on science and natural laws.",
              "For example, given the initial position and speed of an object, as well as its mass and the forces acting on it, we can precisely predict its position at any time. For this case, the mathematical model works much better than any ML model!"
            ]
          },
          {
            "option": ["Use a linear regression model to forecast"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": ["This is an ML problem framing question."],
        "references": [
          "Journey to Become a Google Cloud Machine Learning Engineer [book]. Section Is ML the best solution? in Chapter 3, Preparing for ML Development"
        ],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_2",
        "domain": [],
        "intro": [],
        "body": [
          "A financial company is building an ML model to detect credit card fraud based on their historical dataset, which contains 20 positives and 4,990 negatives.",
          "Due to the imbalanced classes, the model training is not working as desired. What’s the best way to resolve this issue?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Data augmentation"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Early stopping"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Downsampling and upweighting"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["Regularization"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [
          "This question is about class imbalance when preparing data for classification problems.",
          "",
          "When the data is imbalanced, it will be very difficult to train the ML model and get good forecasts"
        ],
        "references": [
          "Journey to Become a Google Cloud Machine Learning Engineer [book]. Section Data sampling and balancing in Chapter 3, Preparing for ML Development"
        ],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_3",
        "domain": [],
        "intro": [],
        "body": [
          "A chemical manufacturer is using a GCP ML pipeline to detect real-time sensor anomalies by queuing the inputs and analyzing and visualizing the data. Which one will you choose for the pipeline?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Dataproc | Vertex AI | BQ"],
            "answer": false,
            "explanation": ["Check feedback section"]
          },
          {
            "option": ["Dataflow | AutoML | Cloud SQL"],
            "answer": false,
            "explanation": ["Check feedback section"]
          },
          {
            "option": ["Dataflow | Vertex AI | BQ"],
            "answer": true,
            "explanation": ["Check feedback section"]
          },
          {
            "option": ["Dataproc | AutoML | Bigtable"],
            "answer": false,
            "explanation": ["Check feedback section"]
          }
        ],
        "feedback": [
          "This is an ML pipeline question.",
  
          "Dataproc and Dataflow are GCP data processing services, and both can process batch or streaming data.",
  
          "Dataproc is designed to run on clusters for jobs that are compatible with MapReduce (Apache Hadoop, Hive, and Spark).",
  
          "Dataflow is based on parallel data processing and works better if your data has no implementation with Spark or Hadoop.",
  
          "AutoML is “automated” ML training with Google’s model and your own data, with no coding.",
  
          "Vertex AI custom training involves “human-performed” ML training – using your own data and model.",
  
          "Cloud SQL is for relational data online transaction processing.",
  
          "Bigtable is more for NoSQL transaction processing.",
  
          "BQ is great for analyzing and visualizing data (integrating with Data Studio)."
        ],
        "references": [],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_4",
        "domain": [],
        "intro": [],
        "body": [
          "A real estate company, Zeellow, does great business buying and selling properties in the United States. Over the past few years, they have accumulated a big amount of historical data for US houses.",
          "Zeellow is using ML training to predict housing prices, and they retrain the models every month by integrating new data. The company does not want to write any code in the ML process. What method best suits their needs?"
        ],
        "open": false,
        "options": [
          {
            "option": ["AutoML"],
            "answer": true,
            "explanation": ["AutoML serves the purpose of no coding during the ML process"]
          },
          {
            "option": ["BigQuery ML"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Vertex AI Custom training"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [
          "This question is about the difference between AutoML and Vertex AI custom training.",
        ],
        "references": [],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_5",
        "domain": [],
        "intro": [],
        "body": [
          "The data scientist team is building a deep learning model for a customer support center of a big Enterprise Resource Planning (ERP) company, which has many ERP products and modules. The DL model will input customers’ chat texts and categorize them into products before routing them to the corresponding team. The company wants to minimize the model development time and data preprocessing time. What strategy/platform should they choose?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Vertex AI custom training"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["AutoML"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["NLP API"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Vertex AI Custom notebooks"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_6",
        "domain": [],
        "intro": [],
        "body": [
          "A real estate company, Zeellow, does great business buying and selling properties in the United States. Over the past few years, they have accumulated a big amount of historical data for US houses.",
          "Zeellow wants to use ML to forecast future sales by leveraging their historical sales data. The historical data is stored in cloud storage. You want to rapidly experiment with all the available data. How should you build and train your model?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Load data into BigQuery and use BigQuery ML"],
            "answer": true,
            "explanation": ["BQ and BQML are the best options here since all the others will take a long time to build and train the model."]
          },
          {
            "option": ["Convert the data into CSV and use AutoML"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Convert the data into TFRecords and use TensorFlow"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Convert and refactor the data into CSV format and use the built-in XGBoost library"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_7",
        "domain": [],
        "intro": [],
        "body": [
          "A real estate company, Zeellow, uses ML to forecast future sales by leveraging their historical data. New data is coming in every week, and Zeellow needs to make sure the model is continually retrained to reflect the marketing trend. What should they do with the historical data and new data?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Only use the new data for retraining"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Update the datasets weekly with new data"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Update the datasets with new data when model evaluation metrics do not meet the required criteria"],
            "answer": true,
            "explanation": ["We need to retrain the model when the performance metrics do not meet the requirements using the integrated datasets, including existing and new data."]
          },
          {
            "option": ["Update the datasets monthly with new data"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_8",
        "domain": [],
        "intro": [],
        "body": [
          "A real estate company, Zeellow, uses ML to forecast future sales by leveraging their historical data. Their data science team trained and deployed a DL model in production half a year ago. Recently, the model is suffering from performance issues due to data distribution changes.",
          "The team is working on a strategy for model retraining. What is your suggestion?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Monitor data skew and retrain the model"],
            "answer": true,
            "explanation": [
              "Model retraining is based on data value skews, which are significant changes in the statistical properties of data.",
              "When data skew is detected, this means that data patterns are changing, and we need to retrain the model to capture these changes."
            ]
          },
          {
            "option": ["Retrain the model with fewer model features"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Retrain the model to fix overfitting"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Retrain the model with new data coming in every month"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/guides/rules-of-ml/#rule_37_measure_trainingserving_skew"
        ],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_9",
        "domain": [],
        "intro": [],
        "body": [
          "Recent research has indicated that when a certain kind of cancer, X, is developed in a human liver, there are usually other symptoms that can be identified as objects Y and Z from CT scan images. A hospital is using this research to train ML models with a label map of (X, Y, Z) on CT images. What cost functions should be used in this case?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Binary cross-entropy"],
            "answer": false,
            "explanation": ["Binary cross-entropy is used for binary classification problems."]
          },
          {
            "option": ["Categorical cross-entropy"],
            "answer": true,
            "explanation": ["Categorical entropy is better to use when you want to prevent the model from giving more importance to a certain class – the same as the one-hot encoding idea."
            ]
          },
          {
            "option": ["Sparse categorical cross-entropy"],
            "answer": false,
            "explanation": ["Sparse categorical entropy is more optimal when your classes are mutually exclusive (for example, when each sample belongs exactly to one class)"]
          },
          {
            "option": ["Dense categorical cross-entropy"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_10",
        "domain": [],
        "intro": [],
        "body": [
          "The data science team in your company has built a DNN model to forecast the sales value for an automobile company, based on historical data. As a Google ML Engineer, you need to verify that the features selected are good enough for the ML model"
        ],
        "open": false,
        "options": [
          {
            "option": ["Train the model with L1 regularization and verify that the loss is constant"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Train the model with no regularization and verify that the loss is constant"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Train the model with L2 regularization and verify that the loss is decreasing"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Train the model with no regularization and verify that the loss is close to zero"],
            "answer": true,
            "explanation": ["The loss function is the measurement for model prediction accuracy and is used as an index for the ML training process."]
          }
        ],
        "feedback": [],
        "references": [
          "Journey to Become a Google Cloud Machine Learning Engineer [book]. Section Regularization in Chapter 4, Developing and Deploying ML Models"
        ],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_11",
        "domain": [],
        "intro": [],
        "body": [
          "The data science team in your company has built a DNN model to forecast the sales value for a real estate company, based on historical data. As a Google ML Engineer, you find that the model has over 300 features and that you wish to remove some features that are not contributing to the target. What will you do?"
        ],
        "open": true,
        "options": [
          {
            "option": ["Use Explainable AI to understand the feature contributions and reduce the non-contributing ones."],
            "answer": true,
            "explanation": ["Explainable AI is one of the ways to understand which features are contributing and which ones are not"]
          },
          {
            "option": ["Use L1 regularization to reduce features."],
            "answer": false,
            "explanation": ["L1 is a method for resolving model overfitting issues and not feature selection in data engineering."]
          },
          {
            "option": ["Use L2 regularization to reduce features."],
            "answer": false,
            "explanation": ["L2 is a method for resolving model overfitting issues and not feature selection in data engineering."]
          },
          {
            "option": ["Drop a feature at a time, train the model, and verify that it does not degrade the model. Remove these features."],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_12",
        "domain": [],
        "intro": [],
        "body": [
          "The data science team in your company has built a DNN model to forecast the sales value for a real estate company, based on historical data. They found that the model fits the training dataset well, but not the validation dataset. What would you do to improve the model?"
        ],
        "open": true,
        "options": [
          {
            "option": ["Apply a dropout parameter of 0.3 and decrease the learning rate by a factor of 10"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Apply an L2 regularization parameter of 0.3 and decrease the learning rate by a factor of 10"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Apply an L1 regularization parameter of 0.3 and increase the learning rate by a factor of 10"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Tune the hyperparameters to optimize the L2 regularization and dropout parameters"],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [
          "The correct answer would be fitting to the general case"
        ],
        "references": [],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_13",
        "domain": [],
        "intro": [],
        "body": [
          "You are building a DL model for a customer service center. The model will input customers’ chat text and analyze their sentiments. What algorithm should be used for the model?"
        ],
        "open": true,
        "options": [
          {
            "option": ["MLP"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Regression"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["CNN"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["RNN"],
            "answer": true,
            "explanation": ["Text processing for sentiment analysis needs to process sequential data (time series)"]
          }
        ],
        "feedback": [],
        "references": [],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_14",
        "domain": [],
        "intro": [],
        "body": [
          "A health insurance company scans customers' hand-filled claim forms and stores them in Google Cloud Storage buckets in real time. They use ML models to recognize the handwritten texts. Since the claims may contain Personally Identifiable Information (PII), company policies require only authorized persons to access the information. What’s the best way to store and process this streaming data?"
        ],
        "open": true,
        "options": [
          {
            "option": ["Create two buckets and label them as sensitive and non-sensitive. Store data in the non-sensitive bucket first. Periodically scan it using the DLP API and move the sensitive data to the sensitive bucket."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Create one bucket to store the data. Only allow the ML service account access to it."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Create three buckets – quarantine, sensitive, and non-sensitive. Store all the data in the quarantine bucket first. Then, periodically scan it using the DLP API and move the data to either the sensitive or non-sensitive bucket."],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Create three buckets – quarantine, sensitive, and non-sensitive. Store all the data in the quarantine bucket first. Then, once the file has been uploaded, trigger the DLP API to scan it, and move the data to either the sensitive or non-sensitive bucket."],
            "answer": true,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_15",
        "domain": [],
        "intro": [],
        "body": [
          "A real estate company, Zeellow, uses ML to forecast future sales by leveraging their historical data. The recent model training was able to achieve the desired forecast accuracy objective, but it took the data science team a long time. They want to decrease the training time without affecting the achieved model accuracy. What hyperparameter should the team adjust?"
        ],
        "open": true,
        "options": [
          {
            "option": ["Learning rate"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Epochs"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Machine type"],
            "answer": true,
            "explanation": ["Changing the other three parameters will change the model’s prediction accuracy."]
          },
          {
            "option": ["Batch size"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_16",
        "domain": [],
        "intro": [],
        "body": [
          "The data science team has built a DNN model to monitor and detect defective products using the images from the assembly line of an automobile manufacturing company. As a Google ML Engineer, you need to measure the performance of the ML model for the test dataset/images. Which of the following would you choose?"
        ],
        "open": false,
        "options": [
          {
            "option": ["The AUC value"],
            "answer": true,
            "explanation": ["It measures how well the predictions are ranked rather than their absolute values. It is a classification threshold invariant and thus is the best way to measure the model’s performance."]
          },
          {
            "option": ["The recall value"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["The precision value"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["The TP value"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_17",
        "domain": [],
        "intro": [],
        "body": [
          "The data science team has built a DL model to monitor and detect defective products using the images from the assembly line of an automobile manufacturing company. Over time, the team has built multiple model versions in Vertex AI. As a Google ML Engineer, how will you compare the model versions?"
        ],
        "open": true,
        "options": [
          {
            "option": ["Compare the mean average precision for the model versions"],
            "answer": true,
            "explanation": ["It measures how well the different model versions perform over time: deploy your model as a model version and then create an evaluation job for that version. By comparing the mean average precision across the model versions, you can find the best performer."]
          },
          {
            "option": ["Compare the model loss functions on the training dataset"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Compare the model loss functions on the validation dataset"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Compare the model loss functions on the testing dataset"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_18",
        "domain": [],
        "intro": [],
        "body": [
          "The data science team is building a recommendation engine for an e-commerce website using ML models to increase its business revenue, based on users’ similarities. What model would you choose?"
        ],
        "open": true,
        "options": [
          {
            "option": ["Collaborative filtering"],
            "answer": true,
            "explanation": ["Collaborative filtering uses similarities between users to provide recommendations."]
          },
          {
            "option": ["Regression"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Classification"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Content-based filtering"],
            "answer": false,
            "explanation": ["Content-based filtering uses the similarity between items to recommend items that are similar to what the user likes."]
          }
        ],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/recommendation/overview/candidate-generation"
        ],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_19",
        "domain": [],
        "intro": [],
        "body": [
          "The data science team is building a fraud-detection model for a credit card company, whose objective is to detect as much fraud as possible and avoid as many false alarms as possible. What confusion matrix index would you maximize for this model performance evaluation?"
        ],
        "open": true,
        "options": [
          {
            "option": ["Precision"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Recall"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["The area under the PR curve"],
            "answer": true,
            "explanation": [
              "In this fraud-detection problem, it asks you to focus on detecting fraudulent transactions - maximize True Positive rate and minimize False Negative - maximize recall (Recall = TruePositives / (TruePositives + FalseNegatives))",
  
              "It also asks you to minimize false alarms (false positives) - maximize precision (Precision = TruePositives / (TruePositives + FalsePositives)).",
  
              "So, you want to maximize both precision and recall."
            ]
          },
          {
            "option": ["The area under the ROC curve"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [
          "https://machinelearningmastery.com/roc-curves-andprecision-recall-curves-for-imbalanced-classification/"
        ],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_20",
        "domain": [],
        "intro": [],
        "body": [
          "The data science team is building a data pipeline for an auto manufacturing company, whose objective is to integrate all the data sources that exist in their on-premise facilities, via a codeless data ETL interface. What GCP service will you use?"
        ],
        "open": true,
        "options": [
          {
            "option": ["Dataproc"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Dataflow"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Dataprep"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Data Fusion"],
            "answer": true,
            "explanation": ["Data Fusion is the best choice for data integration with a codeless interface"]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/data-fusion/docs/concepts/overview#using_the_code-free_web_ui"
        ],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_21",
        "domain": [],
        "intro": [],
        "body": [
          "The data science team has built a TensorFlow model in BigQuery for a real estate company, whose objective is to integrate all their data models into the new Google Vertex AI platform. What’s the best strategy?"
        ],
        "open": true,
        "options": [
          {
            "option": ["Export the model from BigQuery ML"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Register the BQML model to Vertex AI"],
            "answer": true,
            "explanation": ["Vertex AI allows you to register a BQML model in it."]
          },
          {
            "option": ["Import the model into Vertex AI"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Use Vertex AI as the middle stage"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/bigquery/docs/managing-models-vertex"
        ],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_22",
        "domain": [],
        "intro": [],
        "body": [
          "A real estate company, Zeellow, uses ML to forecast future house sale prices by leveraging their historical data. The data science team needs to build a model to predict US house sale prices based on the house location (US city-specific) and house type. What strategy is the best for feature engineering in this case?"
        ],
        "open": false,
        "options": [
          {
            "option": ["One feature cross: [latitude X longitude X housetype]"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Two feature crosses: [binned latitude X binned housetype] and [binned longitude X binned housetype]"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Three separate binned features: [binned latitude], [binned longitude], [binned housetype]"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["One feature cross: [binned latitude X binned longitude X binned housetype]"],
            "answer": true,
            "explanation": ["Crossing binned latitude with binned longitude enables the model to learn city-specific effects on house types. It prevents a change in latitude from producing the same result as a change in longitude",
              "Depending on the granularity of the bins, this feature cross could learn city-specific housing effects."]
          }
        ],
        "feedback": [],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/feature-crosses/check-your-understanding"
        ],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_23",
        "domain": [],
        "intro": [],
        "body": [
          "A health insurance company scans customer’s hand-filled claim forms and stores them in Google Cloud Storage buckets in real time. The data scientist team has developed an AI documentation model to digitize the images. By the end of each day, the submitted forms need to be processed automatically. The model is ready for deployment. What strategy should the team use to process the forms?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Vertex AI batch prediction"],
            "answer": true,
            "explanation": ["We need to run the process at the end of each day, which implies batch processing"]
          },
          {
            "option": ["Vertex AI online prediction"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Vertex AI ML pipeline prediction"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Cloud Run to trigger prediction"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_24",
        "domain": [],
        "intro": [],
        "body": [
          "A real estate company, Zeellow, uses GCP ML to forecast future house sale prices by leveraging their historical data. Their data science team has about 30 members and each member has developed multiple versions of models using Vertex AI custom notebooks. What’s the best strategy to manage these different models and different versions developed by the team members?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Set up IAM permissions to allow each member access to their notebooks, models, and versions"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Create a GCP project for each member for clean management"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Create a map from each member to their GCP resources using BQ"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Apply label/tags to the resources when they’re created for scalable inventory/cost/access management"],
            "answer": true,
            "explanation": ["Resource tagging/labeling is the best way to manage ML resources for medium/big data science teams"]
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing"
        ],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_25",
        "domain": [],
        "intro": [],
        "body": [
          "Starbucks is an international coffee shop selling multiple products A, B, C… at different stores (1, 2, 3… using one-hot encoding and location binning). They are building stores and want to leverage ML models to predict product sales based on historical data (A1 is the data for product A sales at store 1). Following the best practices of splitting data into a training subset, validation subset, and testing subset, how should the data be distributed into these subsets?"
        ],
        "open": false,
        "options": [
          {
            "option": ["Distribute data randomly across the subsets:",
              ["Training set: [A1, B2, F1, E2, ...]",
                "Testing set: [A2, C3, D2, F4, ...]",
                "Validation set: [B1, C1, D9, C2...]"]],
            "answer": false,
            "explanation": ["If we distribute the data randomly into the training, validation, and test sets, the model will be able to learn specific qualities about the products."]
          },
          {
            "option": ["Distribute products randomly across the subsets:",
              ["Training set: [A1, A2, A3, E1, E2, ...]",
                "Testing set: [B1, B2, C1, C2, C3, ...]",
                "Validation set: [D1, D2, F1, F2, F3, ...]"]],
            "answer": true,
            "explanation": ["If we divided things up at the product level so that the given products were only in the training subset, the validation subset, or the testing subset, the model would find it more difficult to get high accuracy on the validation since it would need to focus on the product characteristics/qualities"]
          },
          {
            "option": ["Distribute stores randomly across subsets:",
              ["Training set: [A1, B1, C1, ...]",
                "Testing set: [A2, C2, F2, ...]",
                "Validation set: [D3, A3, C3, ...]"]],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Aggregate the data groups by the cities where the stores are allocated and distribute cities randomly across subsets"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": ["This question is about dataset splitting to avoid data leakage."],
        "references": [
          "https://developers.google.com/machine-learning/crash-course/18th-century-literature"
        ],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_26",
        "domain": [],
        "intro": [],
        "body": [
          "You are building a DL model with Keras that looks as follows:",
          "",
          "model = tf.keras.Sequential()",
          "model.add(tf.keras.layers.Dense(128, activation='relu', input_shape=(200,)))",
          "model.add(tf.keras.layers.Dropout(rate=0.25))",
          "model.add(tf.keras.layers.Dense(4, activation='relu'))",
          "model.add(tf.keras.layers.Dropout(rate=0.25))",
          "model.add(tf.keras.layers.Dense(2))",
          "",
          "How many trainable weights does this model have?"
        ],
        "open": true,
        "options": [
          {
            "option": ["200x128+128x4+4x2"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["200x128+128x4+2"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["200x128+129x4+5x2"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["200x128x0.25+128x4x0.25+4x2"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["200x128+128+128x4+4+4x2+2"],
            "answer": true,
            "explanation": ["Trainable params: 26,254"]
          }
        ],
        "feedback": [],
        "references": [],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_27",
        "domain": [],
        "intro": [],
        "body": [
          "The data science team is building a DL model for a customer support center of a big ERP company, which has many ERP products and modules. The company receives over a million customer service calls every day and stores them in GCS. The call data must not leave the region in which the call originated and no PII can be stored/analyzed. The model will analyze calls for customer sentiments. How should you design a data pipeline for call processing, analyzing, and visualizing?"
        ],
        "open": false,
        "options": [
          {
            "option": ["GCS -> Speech2Text -> DLP -> BigQuery"],
            "answer": true,
            "explanation": []
          },
          {
            "option": ["GCS -> Pub/Sub -> Speech2Text -> DLP -> Datastore"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["GCS -> Speech2Text -> DLP -> BigTable"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["GCS -> Speech2Text -> DLP -> Cloud SQL"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [
          "BigQuery is the best tool here to analyze and visualize"
        ],
        "references": [],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_28",
        "domain": [],
        "intro": [],
        "body": [
          "The data science team is building an ML model to monitor and detect defective products using the images from the assembly line of an automobile manufacturing company, which does not have reliable Wi-Fi near the assembly line. As a Google ML Engineer, you need to reduce the amount of time spent by quality control inspectors utilizing the model’s fast defect detection. Your company wants to implement the new ML model as soon as possible. Which model should you use?"
        ],
        "open": false,
        "options": [
          {
            "option": ["AutoML"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["AutoML Edge mobile-versatile-1"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["AutoML Edge mobile-low-latency-1"],
            "answer": true,
            "explanation": ["The question asks for a quick inspection time and prioritizes latency reduction"]
          },
          {
            "option": ["AutoML Edge mobile-high-accuracy-1"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [
          "https://cloud.google.com/vertex-ai/docs/export/export-edge-model"
        ],
        "date": "September 2022"
      },
      {
        "id": "packt_ml_journey_29",
        "domain": [],
        "intro": [],
        "body": [
          "A national hospital is leveraging Google Cloud and a cell phone app to build an ML model to forecast heart attacks based on age, gender, exercise, heart rate, blood pressure, and more. Since the health data is highly sensitive personal information and cannot be stored in cloud databases, how should you train and deploy the ML model?"
        ],
        "open": true,
        "options": [
          {
            "option": ["IoT with data encryption"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["Federated learning"],
            "answer": true,
            "explanation": ["With federated learning, all the data is collected, and the model is trained with algorithms across multiple decentralized edge devices such as cell phones or websites, without exchanging them."]
          },
          {
            "option": ["Encrypted BQML"],
            "answer": false,
            "explanation": []
          },
          {
            "option": ["DLP API"],
            "answer": false,
            "explanation": []
          }
        ],
        "feedback": [],
        "references": [],
        "date": "September 2022"
      }
    ]
  }
}

const fs = require('fs')
let file_path = '/home/eavelar/dev/eavelardev.github.io/data/ml_questions_tmp.json'

fs.writeFileSync(file_path, JSON.stringify(questions, null, 2));
