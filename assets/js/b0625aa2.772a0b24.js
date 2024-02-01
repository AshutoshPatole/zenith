"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7045],{6338:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var r=s(5893),i=s(1151);const t={sidebar_position:12,slug:"/samba",title:"Samba"},a=void 0,o={id:"Linux/samba",title:"Samba",description:"---",source:"@site/docs/Linux/samba.mdx",sourceDirName:"Linux",slug:"/samba",permalink:"/zenith/samba",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"AshutoshPatole18",lastUpdatedAt:1706787221,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:12,frontMatter:{sidebar_position:12,slug:"/samba",title:"Samba"},sidebar:"tutorialSidebar",previous:{title:"Network File System",permalink:"/zenith/nfs"},next:{title:"Dynamic Host Configuration Protocol (DHCP)",permalink:"/zenith/dhcp"}},d={},c=[{value:"Samba Daemon and related services",id:"samba-daemon-and-related-services",level:2},{value:"smbd",id:"smbd",level:3},{value:"nmbd",id:"nmbd",level:3},{value:"winbindd",id:"winbindd",level:3},{value:"Configuring a samba server",id:"configuring-a-samba-server",level:2}];function l(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"Samba is an open source implementation of the Server Message Block (SMB) protocol. It allows the networking of Windows, Linux, UNIX, and other operating systems together, enabling access to Windows-based file and printer shares. Samba's use of SMB allows it to appear as a Windows server to Windows clients."}),"\n",(0,r.jsx)(n.h2,{id:"samba-daemon-and-related-services",children:"Samba Daemon and related services"}),"\n",(0,r.jsxs)(n.p,{children:["Samba is comprised of three daemons (",(0,r.jsx)(n.code,{children:"smbd"}),", ",(0,r.jsx)(n.code,{children:"nmbd"}),", and ",(0,r.jsx)(n.code,{children:"winbindd"}),"). Two services (smb and windbind) control how the daemons are started, stopped, and other service-related features."]}),"\n",(0,r.jsx)(n.h3,{id:"smbd",children:"smbd"}),"\n",(0,r.jsxs)(n.p,{children:["The smbd server daemon provides file sharing and printing services to Windows clients. In addition, it is responsible for user authentication, resource locking, and data sharing through the SMB protocol. The default ports on which the server listens for SMB traffic are TCP ports ",(0,r.jsx)(n.strong,{children:"139"})," and ",(0,r.jsx)(n.strong,{children:"445"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The smbd daemon is controlled by the smb service."}),"\n",(0,r.jsx)(n.h3,{id:"nmbd",children:"nmbd"}),"\n",(0,r.jsx)(n.p,{children:"nmbd\nThe nmbd server daemon understands and replies to NetBIOS name service requests such as those produced by SMB/CIFS in Windows-based systems. These systems include Windows 95/98/ME, Windows NT, Windows 2000, Windows XP, and LanManager clients. It also participates in the browsing protocols that make up the Windows Network Neighborhood view. The default port that the server listens to for NMB traffic is UDP port 137."}),"\n",(0,r.jsx)(n.p,{children:"The nmbd daemon is controlled by the smb service."}),"\n",(0,r.jsx)(n.h3,{id:"winbindd",children:"winbindd"}),"\n",(0,r.jsx)(n.p,{children:"The winbind service resolves user and group information on a server running Windows NT 2000 or Windows Server 2003. This makes Windows user / group information understandable by UNIX platforms. This is achieved by using Microsoft RPC calls, Pluggable Authentication Modules (PAM), and the Name Service Switch (NSS). This allows Windows NT domain users to appear and operate as UNIX users on a UNIX machine. Though bundled with the Samba distribution, the winbind service is controlled separately from the smb service."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The Name Service Switch (NSS) framework was designed to let administrators specify which files or directory services to query to obtain information. For example, it's frequently used to specify whether a system should perform hostname lookups in /etc/hosts, NIS, or DNS."}),"\n",(0,r.jsx)(n.li,{children:"CIFS - Common Internet File System"}),"\n"]})}),"\n",(0,r.jsx)(n.p,{children:"The winbindd daemon is controlled by the winbind service and does not require the smb service to be started in order to operate. Winbindd is also used when Samba is an Active Directory member, and may also be used on a Samba domain controller (to implement nested groups and/or interdomain trust)."}),"\n",(0,r.jsx)(n.h2,{id:"configuring-a-samba-server",children:"Configuring a samba server"}),"\n",(0,r.jsxs)(n.p,{children:["The default configuration file ",(0,r.jsx)(n.code,{children:"/etc/samba/smb.conf"})," allows users to view their home directories as a Samba share. It also shares all printers configured for the system as Samba shared printers. In other words, you can attach a printer to the system and print to it from the Windows machines on your network."]}),"\n",(0,r.jsxs)(n.admonition,{type:"important",children:[(0,r.jsx)(n.p,{children:"If you change this configuration file, the changes do not take effect until you restart the Samba daemon with the command"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"service smb restart\n"})}),(0,r.jsx)(n.p,{children:"or"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"systemctl start smb\n"})})]}),"\n",(0,r.jsx)(n.p,{children:"To specify the Windows workgroup and a brief description of the Samba server, edit the following lines in your smb.conf file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"workgroup = WORKGROUPNAME\nserver string = BRIEF COMMENT ABOUT SERVER\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Replace ",(0,r.jsx)(n.em,{children:"WORKGROUPNAME"})," with the name of the Windows workgroup to which this machine should belong. The ",(0,r.jsx)(n.em,{children:"BRIEF COMMENT ABOUT SERVER"})," is optional and is used as the Windows comment about the Samba system."]}),"\n",(0,r.jsx)(n.p,{children:"To create a Samba share directory on your Linux system, add the following section to your smb.conf file."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[sharename]\ncomment = Insert a comment here\npath = /home/share/\nvalid users = thor captain\npublic = no\nwritable = yes\nprintable = no\ncreate mask = 0765\n"})}),"\n",(0,r.jsx)(n.p,{children:"The above example allows the users thor and captain to read and write to the directory /home/share, on the Samba server, from a Samba client."}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"Encrypted passwords are enabled by default because it is more secure to do so. To create a user with an encrypted password, use the command"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"smbpasswd -a <username> \n"})})]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var r=s(7294);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);