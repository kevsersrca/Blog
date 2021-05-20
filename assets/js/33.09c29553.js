(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{258:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"contents"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contents"}},[e._v("#")]),e._v(" Contents")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#definition"}},[e._v("Definition")])]),a("li",[a("a",{attrs:{href:"#kubectl-alias"}},[e._v("Kubectl Alias")])]),a("li",[a("a",{attrs:{href:"#cluster-info"}},[e._v("Cluster Info")])]),a("li",[a("a",{attrs:{href:"#contexts"}},[e._v("Contexts")])]),a("li",[a("a",{attrs:{href:"#get-commands"}},[e._v("Get Commands")])]),a("li",[a("a",{attrs:{href:"#namespaces"}},[e._v("Namespaces")])]),a("li",[a("a",{attrs:{href:"#labels"}},[e._v("Labels")])]),a("li",[a("a",{attrs:{href:"#describe-command"}},[e._v("Describe Command")])]),a("li",[a("a",{attrs:{href:"#delete-command"}},[e._v("Delete Command")])]),a("li",[a("a",{attrs:{href:"#create-vs-apply"}},[e._v("Create vs Apply")])]),a("li",[a("a",{attrs:{href:"#create-pod"}},[e._v("Create Pod")])]),a("li",[a("a",{attrs:{href:"#create-deployment"}},[e._v("Create Deployment")])]),a("li",[a("a",{attrs:{href:"#create-service"}},[e._v("Create Service")])]),a("li",[a("a",{attrs:{href:"#export-yaml-for-new-pod"}},[e._v("Export YAML for New Pod")])]),a("li",[a("a",{attrs:{href:"#export-yaml-for-existing-object"}},[e._v("Export YAML for Existing Object")])]),a("li",[a("a",{attrs:{href:"#logs"}},[e._v("Logs")])]),a("li",[a("a",{attrs:{href:"#port-forward"}},[e._v("Port Forward")])]),a("li",[a("a",{attrs:{href:"#scaling"}},[e._v("Scaling")])]),a("li",[a("a",{attrs:{href:"#autoscaling"}},[e._v("Autoscaling")])]),a("li",[a("a",{attrs:{href:"#rollout"}},[e._v("Rollout")])]),a("li",[a("a",{attrs:{href:"#pod-example"}},[e._v("Pod Example")])]),a("li",[a("a",{attrs:{href:"#deployment-example"}},[e._v("Deployment Example")])]),a("li",[a("a",{attrs:{href:"#dashboard"}},[e._v("Dashboard")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#definition"}},[e._v("#")]),e._v(" Definition")]),e._v(" "),a("p",[e._v("A cheat sheet for Kubernetes commands.")]),e._v(" "),a("p",[a("code",[e._v("Master")]),e._v(": The machine that controls Kubernetes nodes. This is where all task assignments originate.")]),e._v(" "),a("p",[a("code",[e._v("Node")]),e._v(": These machines perform the requested, assigned tasks. The Kubernetes master controls them.")]),e._v(" "),a("p",[a("code",[e._v("Pod")]),e._v(": A group of one or more containers deployed to a single node. All containers in a pod share an IP address, IPC, hostname, and other resources. Pods abstract network and storage away from the underlying container. This lets you move containers around the cluster more easily.")]),e._v(" "),a("p",[a("code",[e._v("Replication controller")]),e._v(":  This controls how many identical copies of a pod should be running somewhere on the cluster.")]),e._v(" "),a("p",[a("code",[e._v("Service")]),e._v(": This decouples work definitions from the pods. Kubernetes service proxies automatically get service requests to the right pod—no matter where it moves to in the cluster or even if it’s been replaced.")]),e._v(" "),a("p",[a("code",[e._v("Kubelet")]),e._v(": This service runs on nodes, reads the container manifests, and ensures the defined containers are started and running.")]),e._v(" "),a("p",[a("code",[e._v("kubectl")]),e._v(": This is the command line configuration tool for Kubernetes.")]),e._v(" "),a("p",[a("img",{attrs:{src:"/kubernetes-diagram.png",alt:"kubernetes",title:"Kubernetes Diagram"}})]),e._v(" "),a("h2",{attrs:{id:"kubectl-alias"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubectl-alias"}},[e._v("#")]),e._v(" Kubectl Alias")]),e._v(" "),a("p",[e._v("Linux and OSX")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ alias k=kubectl\n")])])]),a("p",[e._v("Windows")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ Set-Alias -Name k -Value kubectl\n")])])]),a("h2",{attrs:{id:"cluster-info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster-info"}},[e._v("#")]),e._v(" Cluster Info")]),e._v(" "),a("ul",[a("li",[e._v("Get clusters")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl config get-clusters\n")])])]),a("ul",[a("li",[e._v("Get cluster info.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl cluster-info\nKubernetes master is running at https://172.17.0.58:8443\n")])])]),a("h2",{attrs:{id:"contexts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contexts"}},[e._v("#")]),e._v(" Contexts")]),e._v(" "),a("p",[e._v("A context is a cluster, namespace and user.")]),e._v(" "),a("ul",[a("li",[e._v("Get a list of contexts.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl config get-contexts\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("CURRENT   NAME                 CLUSTER                      AUTHINFO             NAMESPACE\n          docker-desktop       docker-desktop               docker-desktop\n*         foo                  foo                          foo                  bar\n")])])]),a("ul",[a("li",[e._v("Get the current context.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl config current-context\nfoo\n")])])]),a("ul",[a("li",[e._v("Switch current context.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl config use-conext docker-desktop\n")])])]),a("ul",[a("li",[e._v("Set default namesapce")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl config set-context $(kubectl config current-context) --namespace=my-namespace\n")])])]),a("p",[e._v("To switch between contexts, you can also install and use "),a("a",{attrs:{href:"https://github.com/ahmetb/kubectx",target:"_blank",rel:"noopener noreferrer"}},[e._v("kubectx"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"get-commands"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-commands"}},[e._v("#")]),e._v(" Get Commands")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl get all\n$ kubectl get namespaces\n$ kubectl get services\n$ kubectl get replicationcontroller\n$ kubectl get deployments\n$ kubectl get ingress\n$ kubectl get configmaps\n$ kubectl get nodes\n$ kubectl get pods\n$ kubectl get rs\n$ kubectl get svc kuard\n$ kubectl get endpoints kuard\n")])])]),a("p",[e._v("Additional switches that can be added to the above commands:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("-o wide")]),e._v(" - Show more information.")]),e._v(" "),a("li",[a("code",[e._v("--watch")]),e._v(" or "),a("code",[e._v("-w")]),e._v(" - watch for changes.")])]),e._v(" "),a("h2",{attrs:{id:"namespaces"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#namespaces"}},[e._v("#")]),e._v(" Namespaces")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("--namespace")]),e._v(" - Get a resource for a specific namespace.")])]),e._v(" "),a("p",[e._v("You can set the default namespace for the current context like so:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl config set-context $(kubectl config current-context) --namespace=my-namespace\n")])])]),a("p",[e._v("To switch namespaces, you can also install and use "),a("a",{attrs:{href:"https://github.com/ahmetb/kubectx/blob/master/kubens",target:"_blank",rel:"noopener noreferrer"}},[e._v("kubens"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"labels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#labels"}},[e._v("#")]),e._v(" Labels")]),e._v(" "),a("ul",[a("li",[e._v("Get pods showing labels.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl get pods --show-labels\n")])])]),a("ul",[a("li",[e._v("Get pods by label.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl get pods -l environment=production,tier!=frontend\n$ kubectl get pods -l 'environment in (production,test),tier notin (frontend,backend)'\n")])])]),a("h2",{attrs:{id:"describe-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#describe-command"}},[e._v("#")]),e._v(" Describe Command")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl describe nodes [id]\n$ kubectl describe pods [id]\n$ kubectl describe rs [id]\n$ kubectl describe svc kuard [id]\n$ kubectl describe endpoints kuard [id]\n")])])]),a("h2",{attrs:{id:"delete-command"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-command"}},[e._v("#")]),e._v(" Delete Command")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl delete nodes [id]\n$ kubectl delete pods [id]\n$ kubectl delete rs [id]\n$ kubectl delete svc kuard [id]\n$ kubectl delete endpoints kuard [id]\n")])])]),a("p",[e._v("Force a deletion of a pod without waiting for it to gracefully shut down")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl delete pod-name --grace-period=0 --force\n")])])]),a("h2",{attrs:{id:"create-vs-apply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-vs-apply"}},[e._v("#")]),e._v(" Create vs Apply")]),e._v(" "),a("p",[a("code",[e._v("kubectl create")]),e._v(" can be used to create new resources while "),a("code",[e._v("kubectl apply")]),e._v(" inserts or updates resources while maintaining any manual changes made like scaling pods.")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("--record")]),e._v(" - Add the current command as an annotation to the resource.")]),e._v(" "),a("li",[a("code",[e._v("--recursive")]),e._v(" - Recursively look for yaml in the specified directory.")])]),e._v(" "),a("h2",{attrs:{id:"create-pod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-pod"}},[e._v("#")]),e._v(" Create Pod")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl run kuard --generator=run-pod/v1 --image=gcr.io/kuar-demo/kuard-amd64:1 --output yaml --export --dry-run > kuard-pod.yml\n$ kubectl apply -f kuard-pod.yml\n")])])]),a("h2",{attrs:{id:"create-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-deployment"}},[e._v("#")]),e._v(" Create Deployment")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl run kuard --image=gcr.io/kuar-demo/kuard-amd64:1 --output yaml --export --dry-run > kuard-deployment.yml\n$ kubectl apply -f kuard-deployment.yml\n")])])]),a("h2",{attrs:{id:"create-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-service"}},[e._v("#")]),e._v(" Create Service")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl expose deployment kuard --port 8080 --target-port=8080 --output yaml --export --dry-run > kuard-service.yml\n$ kubectl apply -f kuard-service.yml\n")])])]),a("h2",{attrs:{id:"export-yaml-for-new-pod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export-yaml-for-new-pod"}},[e._v("#")]),e._v(" Export YAML for New Pod")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl run my-cool-app —-image=me/my-cool-app:v1 --output yaml --export --dry-run > my-cool-app.yaml\n")])])]),a("h2",{attrs:{id:"export-yaml-for-existing-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#export-yaml-for-existing-object"}},[e._v("#")]),e._v(" Export YAML for Existing Object")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl get deployment my-cool-app --output yaml --export > my-cool-app.yaml\n")])])]),a("h2",{attrs:{id:"logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logs"}},[e._v("#")]),e._v(" Logs")]),e._v(" "),a("ul",[a("li",[e._v("Get logs.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl logs -l app=kuard\n")])])]),a("ul",[a("li",[e._v("Get logs for previously terminated container.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl logs POD_NAME --previous\n")])])]),a("ul",[a("li",[e._v("Watch logs in real time.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl attach POD_NAME\n")])])]),a("ul",[a("li",[e._v("Copy files out of pod (Requires "),a("code",[e._v("tar")]),e._v(" binary in container).")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl cp POD_NAME:/var/log .\n")])])]),a("p",[e._v("You can also install and use "),a("a",{attrs:{href:"https://github.com/boz/kail",target:"_blank",rel:"noopener noreferrer"}},[e._v("kail"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"port-forward"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#port-forward"}},[e._v("#")]),e._v(" Port Forward")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl port-forward deployment/kuard 8080:8080\n")])])]),a("h2",{attrs:{id:"scaling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scaling"}},[e._v("#")]),e._v(" Scaling")]),e._v(" "),a("ul",[a("li",[e._v("Update replicas.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl scale deployment nginx-deployment --replicas=10\n")])])]),a("h2",{attrs:{id:"autoscaling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autoscaling"}},[e._v("#")]),e._v(" Autoscaling")]),e._v(" "),a("ul",[a("li",[e._v("Set autoscaling config.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("vkubectl autoscale deployment nginx-deployment --min=10 --max=15 --cpu-percent=80\n")])])]),a("h2",{attrs:{id:"rollout"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rollout"}},[e._v("#")]),e._v(" Rollout")]),e._v(" "),a("ul",[a("li",[e._v("Get rollout status.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('$ kubectl rollout status deployment/nginx-deployment\nWaiting for rollout to finish: 2 out of 3 new replicas have been updated...\ndeployment "nginx-deployment" successfully rolled out\n')])])]),a("ul",[a("li",[e._v("Get rollout history.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl rollout history deployment/nginx-deployment\n$ kubectl rollout history deployment/nginx-deployment --revision=2\n")])])]),a("ul",[a("li",[e._v("Undo a rollout.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl rollout undo deployment/nginx-deployment\n$ kubectl rollout undo deployment/nginx-deployment --to-revision=2\n")])])]),a("ul",[a("li",[e._v("Pause/resume a rollout")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl rollout pause deployment/nginx-deployment\n$ kubectl rollout resume deploy/nginx-deployment\n")])])]),a("h2",{attrs:{id:"pod-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pod-example"}},[e._v("#")]),e._v(" Pod Example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('apiVersion: v1\nkind: Pod\nmetadata:\n  name: cuda-test\nspec:\n  containers:\n    - name: cuda-test\n      image: "k8s.gcr.io/cuda-vector-add:v0.1"\n      resources:\n        limits:\n          nvidia.com/gpu: 1\n  nodeSelector:\n    accelerator: nvidia-tesla-p100\n')])])]),a("h2",{attrs:{id:"deployment-example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deployment-example"}},[e._v("#")]),e._v(" Deployment Example")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\n  namespace: my-namespace\n  labels:\n    - environment: production,\n    - teir: frontend\n  annotations:\n    - key1: value1,\n    - key2: value2\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.7.9\n        ports:\n        - containerPort: 80\n")])])]),a("h2",{attrs:{id:"dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dashboard"}},[e._v("#")]),e._v(" Dashboard")]),e._v(" "),a("ul",[a("li",[e._v("Enable proxy")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ kubectl proxy\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);