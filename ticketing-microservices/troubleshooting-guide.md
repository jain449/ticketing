1. ingress controller should be intall 

 - kubectl get ingress 
  address field was missing

  run the following command and address come.

  kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.41.2/deploy/static/provider/cloud/deploy.yaml

  - https://stackoverflow.com/questions/65193758/enable-ingress-controller-on-docker-desktop-with-wls2

--- --- --- ---

 2.  Create Secret

 kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf

 --- --- --- --- 

 3. Issue next js with node docker 

# solution

https://github.com/vercel/next.js/discussions/30468

If you are looking for an image with a smaller size, node:14-buster-slim worked for me