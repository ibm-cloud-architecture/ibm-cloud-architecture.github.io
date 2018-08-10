---
layout: default
title: Private Cloud Platform Management
color-compute: Rainbow
last_updated: 2018-08-10
---

## {{ page.title }}

Updated: {{ page.last_updated | date: "%B %d, %Y" }}

### Code

- [Deploy and Operate IBM Cloud Private](https://github.com/ibm-cloud-architecture/refarch-privatecloud) - master GitHub repository
  - [Install ICP on VMWare with Ubuntu-based Images](https://github.com/ibm-cloud-architecture/refarch-privatecloud/blob/master/Installing_ICp_on_prem_ubuntu.md)
  - [Install ICP on VMWare with Redhat-based Images](https://github.com/ibm-cloud-architecture/refarch-privatecloud/blob/master/rhel_install/Installing_ICP_on_prem_rhel.md)

- [Deploy IBM Cloud Private with Terraform](https://github.com/ibm-cloud-architecture/terraform-module-icp-deploy) - a [Terraform module](https://www.terraform.io/intro/getting-started/modules.html) providing installation and configuration support for IBM Cloud Private.  Can be leveraged in conjunction with Terraform providers to deploy ICP on IBM Cloud, VMware, and Amazon Web Services.
- [Terraform Highly Available IBM Cloud Private Deployment on AWS](https://github.com/ibm-cloud-architecture/terraform-icp-aws) - provides highly-available, highly-tuned deployment of IBM Cloud Private on Amazon Web Services, utilzing the [AWS Terraform provider](https://www.terraform.io/docs/providers/aws/index.html).
- [Terraform Highly Available IBM Cloud Private Deployment on IBM Cloud](https://github.com/ibm-cloud-architecture/terraform-icp-ibmcloud) - provides highly-available, highly-tuned deployment of IBM Cloud Private on IBM Cloud, utilzing the [IBM Cloud Terraform provider](https://ibm-cloud.github.io/tf-ibm-docs/index.html).
- [Terraform Highly Available IBM Cloud Private Deployment on VMware](https://github.com/ibm-cloud-architecture/terraform-icp-vmware) - provides highly-available, highly-tuned deployment of IBM Cloud Private on VMware infrastructure, utilzing the [VMware vSphere Terraform provider](https://www.terraform.io/docs/providers/vsphere/index.html).


### How-To Guides

- [Backup and Restore IBM Cloud Private environment](https://github.com/ibm-cloud-architecture/icp-backup)
- [Deploy Hyperledger fabric on IBM Cloud Private](https://github.com/ibm-cloud-architecture/refarch-privatecloud-blockchain)
- [Deploy Highly-Available MongoDB from IBM Cloud Private](https://github.com/ibm-cloud-architecture/refarch-icp-mongodb)
- [IBM Cloud Private Resiliency Best Practices](https://github.com/ibm-cloud-architecture/refarch-privatecloud/tree/master/Resiliency)
- [IBM Cloud Private Storage Best Practices](https://github.com/ibm-cloud-architecture/refarch-privatecloud/blob/master/ICp-Storage_best_practice.md)
- [IBM Cloud Private DevOps Guidance](https://github.com/ibm-cloud-architecture/refarch-privatecloud/blob/master/Implementing%20DevOps%20for%20IBM%20Cloud.private.md)


### Reference Architectures

- [Private cloud for maximum control with the benefits of cloud](https://www.ibm.com/cloud/garage/content/architecture/private-cloud)


### Tutorials

- [Guided Demo: Deploy an application](https://www.ibm.com/cloud/garage/demo/try-private-cloud-install-an-app)
