
# Install Kubeflow Pipelines for Local Deployment

Install `kubectl` [[source](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/#install-using-native-package-management)]

Install Docker Desktop and enabled kubernetes


[Deploying Kubeflow Pipelines](https://www.kubeflow.org/docs/components/pipelines/v1/installation/localcluster-deployment/#deploying-kubeflow-pipelines)

[Quickstart](https://www.kubeflow.org/docs/components/pipelines/v2/installation/quickstart/)

```
kubectl port-forward -n kubeflow svc/ml-pipeline-ui 8080:80
```

http://localhost:8080/

