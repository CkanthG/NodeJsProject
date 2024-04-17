## Node.js Project with MySQL DB.

### This project has interaction with MySQL database to manipulate user info.

## Minikube installation.
Follow this link to install the Minikube on your local computer/laptop.

https://minikube.sigs.k8s.io/docs/start/ 

After successful installation use "minikube start" command to start your minikube.

## MySQL Installation on minikube cluster.

Follow this link to install MySQL on your local computer/laptop.

https://bobcares.com/blog/mysql-statefulset-helm-chart/

## Build Docker image and push to DockerHub by below commands.

docker build -t node-js-app:version .

docker tag node-js-app:latest dockerhubuser/node-js-app:latest

docker push dockerhubuser/node-js-app:latest

## Application Deployment on Minikube by using below commands.

kubectl apply -f k8s/deployment.yaml

