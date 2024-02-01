"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7438],{366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=n(5893),a=n(1151);const i={sidebar_position:13,slug:"/dhcp",title:"Dynamic Host Configuration Protocol (DHCP)"},r=void 0,o={id:"Linux/dhcp",title:"Dynamic Host Configuration Protocol (DHCP)",description:"---",source:"@site/docs/Linux/dhcp.mdx",sourceDirName:"Linux",slug:"/dhcp",permalink:"/zenith/dhcp",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"AshutoshPatole18",lastUpdatedAt:1706787221,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:13,frontMatter:{sidebar_position:13,slug:"/dhcp",title:"Dynamic Host Configuration Protocol (DHCP)"},sidebar:"tutorialSidebar",previous:{title:"Samba",permalink:"/zenith/samba"},next:{title:"Email Protocols",permalink:"/zenith/email-protocols"}},d={},l=[{value:"Why use DHCP?",id:"why-use-dhcp",level:2},{value:"Configuring a DHCP server",id:"configuring-a-dhcp-server",level:2},{value:"Configuration File",id:"configuration-file",level:3},{value:"Subnet Declaration",id:"subnet-declaration",level:3},{value:"Lease Database",id:"lease-database",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"Dynamic Host Configuration Protocol (DHCP) is a network protocol that automatically assigns TCP/IP information to client machines. Each DHCP client connects to the centrally located DHCP server, which returns that client's network configuration (including the IP address, gateway, and DNS servers)."}),"\n",(0,s.jsx)(t.h2,{id:"why-use-dhcp",children:"Why use DHCP?"}),"\n",(0,s.jsx)(t.p,{children:"DHCP is useful for automatic configuration of client network interfaces. When configuring the client system, the administrator chooses DHCP instead of specifying an IP address, netmask, gateway, or DNS servers. The client retrieves this information from the DHCP server. DHCP is also useful if an administrator wants to change the IP addresses of a large number of systems. Instead of reconfiguring all the systems, he can just edit one DHCP configuration file on the server for the new set of IP addresses. If the DNS servers for an organization changes, the changes are made on the DHCP server, not on the DHCP clients. When the administrator restarts the network or reboots the clients, the changes will go into effect."}),"\n",(0,s.jsx)(t.h2,{id:"configuring-a-dhcp-server",children:"Configuring a DHCP server"}),"\n",(0,s.jsx)(t.p,{children:"The dhcp package contains an ISC DHCP server. First, install the package as the superuser"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"[captain@marvel-studios ~]$ yum install dhcp\n"})}),"\n",(0,s.jsx)(t.p,{children:"Installing the dhcp package creates a file, /etc/dhcpd.conf, which is merely an empty configuration file:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"[captain@marvel-studios ~]$ cat /etc/dhcpd.conf\n#\n# DHCP Server Configuration file.\n#   see /usr/share/doc/dhcp*/dhcpd.conf.sample\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["The sample configuration file can be found at ",(0,s.jsx)(t.code,{children:"/usr/share/doc/dhcp-<version>/dhcpd.conf.sample"}),". You should use this file to help you configure /etc/dhcpd.conf"]})}),"\n",(0,s.jsx)(t.h3,{id:"configuration-file",children:"Configuration File"}),"\n",(0,s.jsx)(t.p,{children:"The first step in configuring a DHCP server is to create the configuration file that stores the network information for the clients. Use this file to declare options and global options for client systems."}),"\n",(0,s.jsx)(t.p,{children:"The configuration file can contain extra tabs or blank lines for easier formatting. Keywords are case-insensitive and lines beginning with a hash mark (#) are considered comments."}),"\n",(0,s.jsx)(t.p,{children:"Two DNS update schemes are currently implemented"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The ad-hoc DNS update mode."}),"\n",(0,s.jsx)(t.li,{children:"The interim DHCP-DNS interaction draft update mode."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"If and when these two are accepted as part of the Internet Engineering Task Force (IETF) standards process, there will be a third mode \u2014 the standard DNS update method. You must configure the DNS server for compatibility with these schemes.\nAdd this line at top of the configuration file:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"ddns-update-style interim;\n"})}),"\n",(0,s.jsx)(t.admonition,{type:"important",children:(0,s.jsxs)(t.p,{children:["Version 3.0b2pl11 and previous versions used the ad-hoc mode; however, it has been ",(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.em,{children:"deprecated"})}),"."]})}),"\n",(0,s.jsx)(t.p,{children:"There are two types of statements in the configuration file:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Parameters"})," \u2014 State how to perform a task, whether to perform a task, or what network configuration options to send to the client."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Declarations"})," \u2014 Describe the topology of the network, describe the clients, provide addresses for the clients, or apply a group of parameters to a group of declarations."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The parameters that start with the keyword option are referred to as ",(0,s.jsx)(t.strong,{children:"options"}),". These options control DHCP options; whereas, parameters configure values that are not optional or control how the DHCP server behaves."]}),"\n",(0,s.jsxs)(t.p,{children:["Parameters (including options) declared before a section enclosed in curly brackets (",") are considered ",(0,s.jsx)(t.strong,{children:"global parameters"}),". Global parameters apply to all the sections below it."]}),"\n",(0,s.jsx)(t.h3,{id:"subnet-declaration",children:"Subnet Declaration"}),"\n",(0,s.jsx)(t.p,{children:"A subnet declaration must be included for every subnet in the network. If it is not, the DHCP server fails to start."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'subnet 192.168.1.0 netmask 255.255.255.0 {\n        option routers                  192.168.1.254;\n        option subnet-mask              255.255.255.0;\n\n        option domain-name              "example.com";\n        option domain-name-servers       192.168.1.1;\n\n        option time-offset              -18000;     # Eastern Standard Time\n\n\trange 192.168.1.10 192.168.1.100;\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"In this example, there are global options for every DHCP client in the subnet and a range declared. Clients are assigned an IP address within the range."}),"\n",(0,s.jsx)(t.h2,{id:"lease-database",children:"Lease Database"}),"\n",(0,s.jsxs)(t.p,{children:["On the DHCP server, the file ",(0,s.jsx)(t.code,{children:"/var/lib/dhcpd/dhcpd.leases"})," stores the DHCP client lease database. Do ",(0,s.jsx)(t.strong,{children:"NOT"})," change this file. DHCP lease information for each recently assigned IP address is automatically stored in the lease database. The information includes the length of the lease, to whom the IP address has been assigned, the start and end dates for the lease, and the MAC address of the network interface card that was used to retrieve the lease."]}),"\n",(0,s.jsxs)(t.p,{children:["All times in the lease database are in Coordinated Universal Time (UTC), not local time.\nThe lease database is recreated from time to time so that it is not too large. First, all known leases are saved in a temporary lease database. The dhcpd.leases file is renamed ",(0,s.jsx)(t.em,{children:"dhcpd.leases~"})," and the temporary lease database is written to dhcpd.leases."]}),"\n",(0,s.jsx)(t.p,{children:"The DHCP daemon could be killed or the system could crash after the lease database has been renamed to the backup file but before the new file has been written. If this happens, the dhcpd.leases file does not exist, but it is required to start the service. Do not create a new lease file. If you do, all old leases are lost which causes many problems. The correct solution is to rename the dhcpd.leases~ backup file to dhcpd.leases and then start the daemon."}),"\n",(0,s.jsxs)(t.admonition,{type:"important",children:[(0,s.jsxs)(t.p,{children:["When the DHCP server is started for the first time, it fails unless the dhcpd.leases file exists. Use the command touch ",(0,s.jsx)(t.code,{children:"/var/lib/dhcpd/dhcpd.leases"})," to create the file if it does not exist."]}),(0,s.jsxs)(t.p,{children:["If the same server is also running ",(0,s.jsx)(t.a,{href:"/bind",children:"BIND"})," as a DNS server, this step is not necessary, as starting the named service automatically checks for a dhcpd.leases file."]})]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(7294);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);