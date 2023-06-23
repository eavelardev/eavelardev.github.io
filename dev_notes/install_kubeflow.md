
# Install Kubeflow Pipelines for Local Deployment

Install `kubectl` [[source](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/#install-using-native-package-management)]

```
sudo apt-get install -y apt-transport-https

curl -fsSL https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-archive-keyring.gpg

echo "deb [signed-by=/etc/apt/keyrings/kubernetes-archive-keyring.gpg] https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee /etc/apt/sources.list.d/kubernetes.list

sudo apt-get update && sudo apt-get install -y kubectl
```

Creating a cluster on K3s [[source](https://www.kubeflow.org/docs/components/pipelines/v1/installation/localcluster-deployment/#2-creating-a-cluster-on-k3s-on-wsl)]
```
wget https://github.com/k3s-io/k3s/releases/latest/download/k3s
chmod +x k3s
sudo ./k3s server
```

In other tab
```
mkdir ~/.kube
sudo cp /etc/rancher/k3s/k3s.yaml ~/.kube/config
sudo chown -f -R $USER ~/.kube
```

Get and copy IP and replace it in `~/.kube/config` file
```
ip addr show dev eth0
nano ~/.kube/config
```

[Deploying Kubeflow Pipelines](https://www.kubeflow.org/docs/components/pipelines/v1/installation/localcluster-deployment/#deploying-kubeflow-pipelines)

[Quickstart](https://www.kubeflow.org/docs/components/pipelines/v2/installation/quickstart/)

Next time `Kubeflow Pipelines` will be deploy automatically

```
kubectl port-forward -n kubeflow svc/ml-pipeline-ui 8080:80
```

http://localhost:8080/

