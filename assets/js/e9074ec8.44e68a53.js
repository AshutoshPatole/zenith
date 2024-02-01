"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3257],{7143:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=t(5893),r=t(1151);const i={sidebar_position:10,slug:"/bind",title:"Berkeley Internet Name Domain (BIND)"},o=void 0,a={id:"Linux/bind",title:"Berkeley Internet Name Domain (BIND)",description:"---",source:"@site/docs/Linux/bind.mdx",sourceDirName:"Linux",slug:"/bind",permalink:"/zenith/bind",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"AshutoshPatole18",lastUpdatedAt:1706787221,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:10,frontMatter:{sidebar_position:10,slug:"/bind",title:"Berkeley Internet Name Domain (BIND)"},sidebar:"tutorialSidebar",previous:{title:"Network Interface",permalink:"/zenith/network-interface-files"},next:{title:"Network File System",permalink:"/zenith/nfs"}},h={},d=[{value:"Nameserver Zones",id:"nameserver-zones",level:2},{value:"BIND as a Nameserver",id:"bind-as-a-nameserver",level:2}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"On most modern networks, including the Internet, users locate other computers by name. This frees users from the daunting task of remembering the numerical network address of network resources. The most effective way to configure a network to allow such name-based connections is to set up a Domain Name Service (DNS) or a nameserver, which resolves hostnames on the network to numerical addresses and vice versa."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"BIND is also known as the service named in Red Hat Enterprise Linux."})}),"\n",(0,s.jsx)(n.p,{children:"When a client host requests information from a nameserver, it usually connects to port 53. The nameserver then attempts to resolve the FQDN based on its resolver library, which may contain authoritative information about the host requested or cached data from an earlier query. If the nameserver does not already have the answer in its resolver library, it queries other nameservers, called root nameservers, to determine which nameservers are authoritative for the FQDN in question. Then, with that information, it queries the authoritative nameservers to determine the IP address of the requested host. If a reverse lookup is performed, the same procedure is used, except that the query is made with an unknown IP address rather than a name."}),"\n",(0,s.jsx)(n.h2,{id:"nameserver-zones",children:"Nameserver Zones"}),"\n",(0,s.jsx)(n.p,{children:"On the Internet, the FQDN of a host can be broken down into different sections. These sections are organized into a hierarchy (much like a tree), with a main trunk, primary branches, secondary branches, and so forth. Consider the following FQDN:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"wetty.live.ashutoshpatole.me\n"})}),"\n",(0,s.jsxs)(n.p,{children:["When looking at how an FQDN is resolved to find the IP address that relates to a particular system, read the name from right to left, with each level of the hierarchy divided by periods (.). In this example, ",(0,s.jsx)(n.strong,{children:"me"})," defines the top level domain for this FQDN. The name ",(0,s.jsx)(n.strong,{children:"ashutoshpatole"})," is a sub-domain under ",(0,s.jsx)(n.strong,{children:"me"}),", while ",(0,s.jsx)(n.strong,{children:"live"})," is a sub-domain under ",(0,s.jsx)(n.strong,{children:"ashutoshpatole"}),". The name furthest to the left, ",(0,s.jsx)(n.strong,{children:"live"}),", identifies a specific machine hostname."]}),"\n",(0,s.jsx)(n.p,{children:"Except for the hostname, each section is called a zone, which defines a specific namespace. A namespace controls the naming of the sub-domains to its left. While this example only contains two sub-domains, an FQDN must contain at least one sub-domain but may include many more, depending upon how the namespace is organized."}),"\n",(0,s.jsx)(n.h2,{id:"bind-as-a-nameserver",children:"BIND as a Nameserver"}),"\n",(0,s.jsx)(n.p,{children:"BIND performs name resolution services through the /usr/sbin/named daemon. BIND also includes an administration utility called /usr/sbin/rndc."}),"\n",(0,s.jsx)(n.p,{children:"BIND stores its configuration files in the following locations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"/etc/named.conf"}),"\n",(0,s.jsx)(n.p,{children:"The configuration file for the named daemon"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"/var/named/ directory"}),"\n",(0,s.jsx)(n.p,{children:"The named working directory which stores zone, statistic, and cache files"}),"\n"]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var s=t(7294);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);