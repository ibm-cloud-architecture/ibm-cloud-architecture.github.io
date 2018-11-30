---
layout: default
title:  Data & Analytics
color-compute: Green
last_updated: 2018-09-17
---

## {{ page.title }}

Updated: {{ page.last_updated | date: "%B %d, %Y" }}

- [Data Analytics](https://github.com/ibm-cloud-architecture/refarch-analytics) - master GitHub repository

### Industry Solution Reference Implementation
  - [Telecom Churn With Cognitive and analytics in hybrid cloud end-to-end solution](https://github.com/ibm-cloud-architecture/refarch-cognitive-analytics)
  - [Manufacturing Asset Predictive Maintenance end-to-end solution](https://github.com/ibm-cloud-architecture/refarch-asset-analytics)

### Code 
- [Customer Churn Analysis Jupyter notebook](https://github.com/ibm-cloud-architecture/refarch-cognitive-analytics/blob/master/docs/ml/CustomerChurnAnalysisDSXICP.md) and [Python notebook codes](https://github.com/ibm-cloud-architecture/refarch-cognitive-analytics/blob/master/src/dsx)
- [Churn demo webapp with a chatbot user interface](https://github.com/ibm-cloud-architecture/refarch-cognitive-analytics/tree/master/src/client)
- [BFF microservice in nodejs to support Watson Conversation, Tone Analysis, Customer microservice proxy..](https://github.com/ibm-cloud-architecture/refarch-cognitive-analytics/tree/master/src/server)
- [Watson Conversation workspace for the demonstration](https://github.com/ibm-cloud-architecture/refarch-cognitive-analytics/tree/master/src/wcs)
- [Customer management microservice in JAXRS and Liberty](https://github.com/ibm-cloud-architecture/refarch-integration-services)
- [Kafka consumer and Cassandra injector to deploy to ICP](https://github.com/ibm-cloud-architecture/refarch-asset-analytics/tree/master/asset-consumer)
- [Serverless Kafka consumer and Cassandra injector to deploy to ICP](https://github.com/ibm-cloud-architecture/refarch-asset-analytics/tree/master/asset-consumer-function)
- [Smart Electric Pump Simulator](https://github.com/ibm-cloud-architecture/refarch-asset-analytics/tree/master/asset-event-producer)
- [Real time dashboard with Angular and websocket UI](https://github.com/ibm-cloud-architecture/refarch-asset-analytics/tree/master/asset-dashboard-ui)
- [Real time dashboard BFF with websocket server and kafka consumer](https://github.com/ibm-cloud-architecture/refarch-asset-analytics/tree/master/asset-dashboard-bff)
<!-- - [Asset manager microservice as access layer on top of Cassandra using Springboot](https://github.com/ibm-cloud-architecture/refarch-asset-analytics/tree/master/asset-mgr-ms) -->
- [Java Microservice integration with Cassandra](https://github.com/ibm-cloud-architecture/refarch-asset-manager-microservice)

### How-To Guides
- [Deploy Data Science Experience to IBM Cloud Private](https://github.com/ibm-cloud-architecture/refarch-analytics/tree/master/docs/ICP)
- [DB2 Warehouse deployment on IBM Cloud Private](https://github.com/ibm-cloud-architecture/refarch-analytics/tree/master/docs/db2warehouse)
- [Guidance on Install for glusterfs for DB2HA ICP Cluster Setup](https://github.com/ibm-cloud-architecture/refarch-privatecloud/blob/master/Resiliency/Configure_HA_ICP_cluster.md)
- [Deploy Kafka on ICP](https://github.com/ibm-cloud-architecture/refarch-analytics/blob/master/docs/kafka/readme.md#install-kafka-on-icp)
- [Deploy IBM Event Streams (Based on Kafka) on ICP](https://github.com/ibm-cloud-architecture/refarch-analytics/blob/master/docs/kafka/readme.md#install-ibm-event-streams-on-icp)
- [Deploy Cassandra on ICP](https://github.com/ibm-cloud-architecture/refarch-asset-analytics/blob/master/docs/cassandra/readme.md#deployment-on-icp)
- [Apache Kafka deployment on Kubernetes for resiliency](https://github.com/ibm-cloud-architecture/refarch-analytics/tree/master/docs/kafka)
- [Use Case: Short-term Data Analysis](https://github.com/ibm-cloud-architecture/refarch-analytics/tree/master/docs/taxi_scenario)
- [Develop Customer API with API Connect](https://github.com/ibm-cloud-architecture/refarch-cognitive-analytics/blob/master/docs/apim/README.md)
- [Customer Data Ingestion](https://github.com/ibm-cloud-architecture/refarch-cognitive-analytics/blob/master/docs/apim/README.md)
- [How to persist a Watson Assistant chatbot transcript](https://github.com/ibm-cloud-architecture/refarch-cognitive-analytics/blob/master/docs/persist/chattranscripts.md)
- [How to implement a support conversation with tone analysis, and customer context](https://github.com/ibm-cloud-architecture/refarch-cognitive-analytics/blob/master/docs/wcs)
- [How to integrate Watson tone analyzer in a chatbot](https://github.com/ibm-cloud-architecture/refarch-cognitive-analytics/blob/master/docs/w-tone-analyzer.md)
- [How to develop a JAXRS microservice and deploy to ICP](https://github.com/ibm-cloud-architecture/refarch-integration-services)
- [Monitoring Kafka with Prometheus and Grafana](https://github.com/ibm-cloud-architecture/refarch-analytics/blob/master/docs/kafka/monitoring.md)


### Reference Architectures

- [Data and analytics for insights and visualization](https://www.ibm.com/cloud/garage/architectures/dataAnalyticsArchitecture)


### Webinars

- [Develop a Hybrid Cloud Machine Learning Solution with Data Science Experience on IBM Cloud Private](https://github.com/ibm-cloud-architecture/refarch-analytics/blob/master/7977_v3.pdf) - an end-to-end solution built on IBM Cloud Private
