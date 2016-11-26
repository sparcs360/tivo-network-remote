# tivo-network-remote
Control your Virgin Media Tivo box using this Node.js web application.

# Pre-requisites
* **Node.js** must be installed on the machine that will run the web application - https://nodejs.org
* A Tivo box, with network access enabled (see below), that's on a network visible to the web application.

# Tivo Setup
See [this](http://help.virginmedia.com/system/selfservice.controller?CMD=VIEW_ARTICLE&ARTICLE_ID=13730&CURRENT_CMD=SEARCH&CONFIGURATION=1001&PARTITION_ID=1&USERTYPE=1&LANGUAGE=en&COUNTY=us&VM_CUSTOMER_TYPE=Cable) Virgin Media article

# Application Setup and Configuration
* Clone this repository
* Install required node modules (run this from the local repo directory)
```
npm install --global express net
```
  * Omit the ```--global``` argument to install the modules locally

# Run

# As a process
* Start the web application (run this from your local repo directory)
```
node tivo-network-remote.js
```
* Point your browser at http://localhost:10001

## As a Service
I'm using **PM2** (http://pm2.keymetrics.io/) to run the web application as a service.

See the getting started guide (http://pm2.keymetrics.io/docs/usage/quick-start/)

* Start with ```pm2 start tivo-network-remote.js --name remote -i remote```
* Make sure the web application is working ok
* Save the configuration with ```pm2 save``` so that the application is automatically started after a reboot

# Additional Information

Info on Tivo's network protocol: https://www.tivo.com/assets/images/abouttivo/resources/downloads/brochures/TiVo_TCP_Network_Remote_Control_Protocol.pdf
