(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),o=a.n(r),b=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),p=a("TSYQ"),s=a.n(p),m=a("QH2O"),u=a.n(m),d=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(d.b)("div",{className:s()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.a.text},a)))))},j=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,c=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(d.b)("div",{className:"bx--row "+j.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:j.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),N=a("dI71"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=o()(e,{lower:!0,strict:!0}),r=i===n,c=new RegExp(n+"/?(#.*)?$"),l=a.replace(c,i);return Object(d.b)("li",{key:e,className:s()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(d.b)(b.Link,{className:f.link,to:""+l},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:f.list},i))))))},t}(i.a.Component),x=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,p=void 0===r?{}:r,s=t.relativePagePath,m=t.titleType,u=p.tabs,j=p.title,N=p.theme,f=p.description,T=p.keywords,k=Object(w.a)().interiorTheme,y=Object(b.useStaticQuery)("2456312558").site.pathPrefix,P=y?n.pathname.replace(y,""):n.pathname,M=u?P.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",C=N||k;return Object(d.b)(l.a,{tabs:u,homepage:!1,theme:C,pageTitle:j,pageDescription:f,pageKeywords:T,titleType:m},Object(d.b)(O,{title:i?Object(d.b)(i,null):j,label:"label",tabs:u,theme:C}),u&&Object(d.b)(v,{slug:P,tabs:u,currentTab:M}),Object(d.b)(x.a,{padded:!0},a,Object(d.b)(h,{relativePagePath:s})),Object(d.b)(g.a,{pageContext:t,location:n,slug:P,tabs:u,currentTab:M}),Object(d.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},dK23:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),b=(a("qKvR"),{}),c={_frontmatter:b},l=o.a;function p(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(l,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"Application Modernization")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/modernization-playbook/applications/liberty"}),"Runtime modernization"),"\nmoves an application to a “built for the cloud” runtime with the least amount of effort.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/modernization-playbook/applications/spring/README"}),"Spring runtime modernization"),"\ndescribes the process of upgrading existing Spring Framework and Spring Boot v1 applications to use Spring Boot v2.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/modernization-playbook/applications/was90/README"}),"Operational modernization"),"\nis where the application is made to run in a container without any change."))),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"Cloud-Native Application Development")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloudnativetoolkit.dev/"}),"Cloud Native Toolkit Developer Guide"),"\nprovides introductory information and code samples\nto help you start doing cloud native application development.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/tutorial-tekton-pipeline"}),"Deploying a Node.js application using OpenShift Pipeline (Tekton)"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/tutorial-tekton-argocd-pipeline"}),"Deploying a Node.js application using OpenShift Pipeline (Tekton) and GitOps (ArgoCD)"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/architecture/tutorials/microservices-app-on-kubernetes"}),"Deploying a microservices app on IBM Cloud using Kubernetes")))),Object(r.b)("h3",null,Object(r.b)("strong",{parentName:"h3"},"Integration Modernization")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.ibm.com/integration/blog/2019/10/15/storing-encrypted-security-credentials-in-a-vault-using-app-connect-enterprise-v11-0-0-6/"}),"Storing Encrypted Secuirty Credentials in a Vault using App Connect Enterprise v11.0.0.6"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-messaging/mq-container/blob/master/docs/building.md#building-a-production-image"}),"Building an MQ Container"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ibm-messaging/mq-container/blob/master/docs/internals.md#prometheus-metrics"}),"Providing MQ Stats to Prometheus"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.ibm.com/integration/docs/app-connect-enterprise/videos-for-ibm-app-connect-enterprise/#"}),"Getting Started with IBM App Connect Enterprise"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.ibm.com/integration/docs/app-connect/tutorials-for-ibm-app-connect/"}),"Tutorials for IBM App Connect"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.ibm.com/messaging/learn-mq/mq-tutorials/"}),"Tutorials for MQ"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/architecture/tutorials/manage-api-lifecycle"}),"Automate API lifecycle management by using a DevOps platform"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ibm.com/cloud/architecture/dte/tutorial/tutorial-mq-ibm-cloud"}),"MQ on IBM Cloud")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-index-mdx-8b6b28e1dee3a67f7ac5.js.map