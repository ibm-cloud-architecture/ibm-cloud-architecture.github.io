(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),c=a.n(o),i=a("Wbzz"),l=a("Xrax"),b=a("k4MR"),s=a("TSYQ"),d=a.n(s),p=a("QH2O"),u=a.n(p),m=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(m.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=o.length,t[u.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},h=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,c=r.subDirectory,l=o+"/edit/"+r.branch+c+"/src/pages"+t;return o?Object(m.b)("div",{className:"bx--row "+h.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:h.link,href:l},"Edit this page on GitHub"))):null},g=a("FCXl"),x=a("dI71"),f=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=c()(e,{lower:!0,strict:!0}),o=r===n,l=new RegExp(n+"/?(#.*)?$"),b=a.replace(l,r);return Object(m.b)("li",{key:e,className:d()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(m.b)(i.Link,{className:f.link,to:""+b},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",null,Object(m.b)("ul",{className:f.list},r))))))},t}(r.a.Component),N=a("MjG9"),T=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,s=void 0===o?{}:o,d=t.relativePagePath,p=t.titleType,u=s.tabs,h=s.title,x=s.theme,f=s.description,w=s.keywords,k=Object(T.a)().interiorTheme,P=Object(i.useStaticQuery)("2456312558").site.pathPrefix,y=P?n.pathname.replace(P,""):n.pathname,C=u?y.split("/").filter(Boolean).slice(-1)[0]||c()(u[0],{lower:!0}):"",I=x||k;return Object(m.b)(b.a,{tabs:u,homepage:!1,theme:I,pageTitle:h,pageDescription:f,pageKeywords:w,titleType:p},Object(m.b)(O,{title:r?Object(m.b)(r,null):h,label:"label",tabs:u,theme:I}),u&&Object(m.b)(v,{slug:y,tabs:u,currentTab:C}),Object(m.b)(N.a,{padded:!0},a,Object(m.b)(j,{relativePagePath:d})),Object(m.b)(g.a,{pageContext:t,location:n,slug:y,tabs:u,currentTab:C}),Object(m.b)(l.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},rg6r:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),c=a("013z"),i=(a("qKvR"),{}),l={_frontmatter:i},b=c.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(b,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",null,Object(o.b)("strong",{parentName:"h3"},"Cloud-Native Application Development")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cloudnative101.dev"}),"IBM Garage Cloud Native Bootcamp"),"\nis a self-study course\ndesigned to enable developers with the latest\ntools and techniques for developing cloud native applications.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Accelerators for Teams")," is IBM’s implementation of an open source\ntechnology called ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://kabanero.io/"}),"Kabanero"),". It is a component of IBM\nCloud Pak for Applications. The\n",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cp4apps.cloudnative101.dev/web/1.0.0/kabanero-overview.html"}),"Learning Cloud Pak for Applications Accelerators for Teams"),"\ncourse introduces you to this technology.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://tracing.cloudnative101.dev/docs/index.html"}),"Learning Distributed Tracing 101")))),Object(o.b)("h3",null,Object(o.b)("strong",{parentName:"h3"},"Cloud Service Management & Operations")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.ibm.com/cloud/architecture/content/course/red-hat-openshift-container-platform-day-2-ops/"}),"OpenShift Cloud Platform Day 2 Operations"),"\ncovers the post deployment management operations that are required for an\nOpenShift Cluster. ")))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-courses-index-mdx-8fba3d71d95a23812e36.js.map