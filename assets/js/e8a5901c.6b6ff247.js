"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1910],{1774:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=t(5893),o=t(1151);const s={sidebar_position:4,slug:"/operators-in-openshift-network",title:"Operators in Openshift Network"},i=void 0,a={id:"Containers/OpenShift/Operator/operators",title:"Operators in Openshift Network",description:"---",source:"@site/docs/Containers/OpenShift/Operator/operators.mdx",sourceDirName:"Containers/OpenShift/Operator",slug:"/operators-in-openshift-network",permalink:"/zenith/operators-in-openshift-network",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"AshutoshPatole18",lastUpdatedAt:1706788254,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/operators-in-openshift-network",title:"Operators in Openshift Network"},sidebar:"tutorialSidebar",previous:{title:"OpenShift Update Service",permalink:"/zenith/osus"},next:{title:"Pod LifeCycle",permalink:"/zenith/pod-lifecycle"}},l={},d=[{value:"Cluster Network Operator",id:"cluster-network-operator",level:2},{value:"Openshift SDN",id:"openshift-sdn",level:3},{value:"DNS Operator",id:"dns-operator",level:2},{value:"Ingress Operator",id:"ingress-operator",level:2}];function c(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"cluster-network-operator",children:"Cluster Network Operator"}),"\n",(0,r.jsxs)(n.p,{children:["The Cluster Network Operator (CNO) deploys and manages the cluster network components on an OpenShift Container Platform cluster, including the ",(0,r.jsx)(n.strong,{children:"Container Network Interface (CNI)"})," default network provider plug-in selected for the cluster during installation."]}),"\n",(0,r.jsx)(n.h3,{id:"openshift-sdn",children:"Openshift SDN"}),"\n",(0,r.jsxs)(n.p,{children:["OpenShift Container Platform uses a ",(0,r.jsx)(n.strong,{children:"software-defined networking (SDN)"})," approach to provide a unified cluster network that enables communication between pods across the OpenShift Container Platform cluster. This pod network is established and maintained by the OpenShift SDN, which configures an overlay network using Open vSwitch (OVS)."]}),"\n",(0,r.jsx)(n.p,{children:"OpenShift SDN provides three SDN modes for configuring the pod network:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Network policy"})," mode allows project administrators to configure their own isolation policies using ",(0,r.jsx)(n.code,{children:"NetworkPolicy"})," objects. Network policy is the default mode from OpenShift Container Platform 4.6."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Multitenant"})," mode provides project-level isolation for pods and services. Pods from different projects cannot send packets to or receive packets from pods and services of a different project. You can disable isolation for a project, allowing it to send network traffic to all pods and services in the entire cluster and receive network traffic from those pods and services."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Subnet"})," mode provides a flat pod network where every pod can communicate with every other pod and service. The network policy mode provides the same functionality as subnet mode."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"dns-operator",children:"DNS Operator"}),"\n",(0,r.jsx)(n.p,{children:"The DNS Operator deploys and manages CoreDNS to provide a name resolution service to pods, enabling DNS-based Kubernetes Service discovery in OpenShift."}),"\n",(0,r.jsx)(n.h2,{id:"ingress-operator",children:"Ingress Operator"}),"\n",(0,r.jsx)(n.p,{children:"When you create your OpenShift Container Platform cluster, pods and services running on the cluster are each allocated their own IP addresses. The IP addresses are accessible to other pods and services running nearby but are not accessible to outside clients. The Ingress Operator implements the IngressController API and is the component responsible for enabling external access to OpenShift Container Platform cluster services."}),"\n",(0,r.jsx)(n.p,{children:"The Ingress Operator makes it possible for external clients to access your service by deploying and managing one or more HAProxy-based Ingress Controllers to handle routing. You can use the Ingress Operator to route traffic by specifying OpenShift Container Platform Route and Kubernetes Ingress resources. Configurations within the Ingress Controller, such as the ability to define endpointPublishingStrategy type and internal load balancing, provide ways to publish Ingress Controller endpoints."})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(7294);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);