"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3970],{3597:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>h});var o=i(5893),t=i(1151);const a={sidebar_position:1,slug:"/mco",title:"Machine Config Operator"},r=void 0,s={id:"Containers/OpenShift/Operator/machine_config_operator",title:"Machine Config Operator",description:"---",source:"@site/docs/Containers/OpenShift/Operator/machine_config_operator.mdx",sourceDirName:"Containers/OpenShift/Operator",slug:"/mco",permalink:"/zenith/mco",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"AshutoshPatole18",lastUpdatedAt:1706788254,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/mco",title:"Machine Config Operator"},sidebar:"tutorialSidebar",previous:{title:"Service",permalink:"/zenith/service"},next:{title:"Operator Lifecycle Manager",permalink:"/zenith/olm"}},c={},h=[{value:"Machine Config server",id:"machine-config-server",level:3},{value:"Machine Config controller",id:"machine-config-controller",level:3},{value:"Goals",id:"goals",level:4},{value:"Non Goals",id:"non-goals",level:4},{value:"Machine Config Daemon",id:"machine-config-daemon",level:3},{value:"OS update",id:"os-update",level:4},{value:"systemd unit updates",id:"systemd-unit-updates",level:4},{value:"Verification",id:"verification",level:5},{value:"Directory / File updates",id:"directory--file-updates",level:4},{value:"Verification",id:"verification-1",level:5},{value:"Machine reboot",id:"machine-reboot",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",h5:"h5",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"OpenShift 4 is an operator-focused platform, and the Machine Config operator extends that to the  operating system itself, managing updates and configuration changes to essentially everything between the kernel and kubelet."}),"\n",(0,o.jsxs)(n.p,{children:["To repeat for emphasis, this operator manages updates to ",(0,o.jsx)(n.code,{children:"systemd"}),", ",(0,o.jsx)(n.code,{children:"cri-o/kubelet"}),", ",(0,o.jsx)(n.code,{children:"kernel"}),", ",(0,o.jsx)(n.code,{children:"NetworkManager"}),", etc. It also offers a new MachineConfig ",(0,o.jsx)(n.strong,{children:"CRD"})," that can write configuration files onto the host."]}),"\n",(0,o.jsx)(n.p,{children:'The approach here is a "fusion" of code from the original CoreOS as well as some components of Red Hat Enterprise Linux Atomic Host, as well as some fundamentally new design.'}),"\n",(0,o.jsxs)(n.p,{children:["The MCO (for short) interacts closely with both the installer as well as Red Hat CoreOS. See also the ",(0,o.jsx)(n.em,{children:"machine-api-operator"}),' which handles provisioning of new machines - once the machine-api-operator provisions a machine (with a "pristine" base Red Hat CoreOS), the MCO will take care of configuring it.']}),"\n",(0,o.jsxs)(n.p,{children:['One way to view the MCO is to treat the operating system itself as "just another Kubernetes component" that you can inspect and manage with ',(0,o.jsx)(n.code,{children:"oc"}),". The MCO uses ",(0,o.jsx)(n.strong,{children:"CoreOS Ignition"})," as a configuration format. Operating system updates use rpm-ostree, with ostree updates encapsulated inside a container image."]}),"\n",(0,o.jsx)(n.p,{children:"the machine-config-operator pod manages 3 sub-components."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#machine-config-server",children:"machine-config-server"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#machine-config-controller",children:"machine-config-controller"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#machine-config-daemon",children:"machine-config-daemon"})}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"machine-config-server",children:"Machine Config server"}),"\n",(0,o.jsx)(n.p,{children:"All the machines joining the cluster must receive configuration from component running inside the cluster. MachineConfigServer provides the Ignition endpoint that all the new machines can point to receive their machine configuration."}),"\n",(0,o.jsxs)(n.p,{children:["The machine can request specific configuration by pointing Ignition to MachineConfigServer and passing appropriate parameters. For example, to fetch configuration for master the machine can point to ",(0,o.jsx)(n.code,{children:"/config/master"})," whereas, to fetch configuration for worker the machine can point to ",(0,o.jsx)(n.code,{children:"/config/worker"}),". Find the detailed design ",(0,o.jsx)(n.a,{href:"https://github.com/openshift/machine-config-operator/blob/master/docs/MachineConfigServer.md",children:"here"})]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"It is recommended that the MachineConfigServer is run as a DaemonSet on all master machines with the pods running in host network. So machines can access the Ignition endpoint through load balancer setup for control plane"})}),"\n",(0,o.jsx)(n.h3,{id:"machine-config-controller",children:"Machine Config controller"}),"\n",(0,o.jsx)(n.h4,{id:"goals",children:"Goals"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Coordinate upgrade of machines to desired configurations defined by a MachineConfig object."}),"\n",(0,o.jsx)(n.li,{children:"Provide options to control upgrade for sets of machines individually."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"non-goals",children:"Non Goals"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"MachineConfigController is not responsible for updating the machines directly."}),"\n",(0,o.jsx)(n.li,{children:"MachineConfigController is not responsible for serving Ignition configs to new machines trying to join the cluster."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"machine-config-daemon",children:"Machine Config Daemon"}),"\n",(0,o.jsxs)(n.p,{children:["MachineConfigDaemon is scheduled on the machines in a cluster as a ",(0,o.jsx)(n.a,{href:"/daemonset",children:"DaemonSet"}),". This daemon is responsible for performing machine updates in OpenShift 4. The update will include tasks related to the systemd units, files on disk, operating system upgrades etc. The MachineConfigDaemon updates a machine to configuration defined by MachineConfig as instructed by the MachineConfigController."]}),"\n",(0,o.jsx)(n.p,{children:"The MachineConfigDaemon is also responsible for annotating a node with machineconfiguration.openshift.io/ssh=accessed when it detects an SSH access to the machine"}),"\n",(0,o.jsx)(n.h4,{id:"os-update",children:"OS update"}),"\n",(0,o.jsx)(n.p,{children:"In addition to handling Ignition configs, the MachineConfigDaemon also takes care of updating the base operating system."}),"\n",(0,o.jsx)(n.admonition,{type:"important",children:(0,o.jsx)(n.p,{children:"MachineConfigDaemon only supports updating Red Hat CoreOS, which uses rpm-ostree."})}),"\n",(0,o.jsx)(n.p,{children:'Once an update is prepared (in terms of a new bootloader entry which points to a new OSTree "deployment" or filesystem tree), then the MachineConfigDaemon will reboot.'}),"\n",(0,o.jsx)(n.h4,{id:"systemd-unit-updates",children:"systemd unit updates"}),"\n",(0,o.jsx)(n.p,{children:"MachineConfigDaemon replaces the unit service files on disk. The updated systemd services run after machine reboot."}),"\n",(0,o.jsx)(n.p,{children:"The daemon should prune all the systemd units that don't exist in the desiredConfig but existed before. Diff the current config and desired config, then remove the units that were removed."}),"\n",(0,o.jsx)(n.h5,{id:"verification",children:"Verification"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"MachineConfigDaemon verifies that contents and existence of the systemd unit files."}),"\n",(0,o.jsx)(n.li,{children:"MachineConfigDaemon also verifies that the systemd service is enabled when specified in Ignition config."}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"directory--file-updates",children:"Directory / File updates"}),"\n",(0,o.jsx)(n.p,{children:"MachineConfigDaemon replaces the file contents on disk with the contents of the file from the desiredConfig."}),"\n",(0,o.jsx)(n.p,{children:"The daemon should apply any change in permissions on file / directories."}),"\n",(0,o.jsx)(n.p,{children:"The daemon should prune all the files and directories that don't exist in the desiredConfig but existed before. Diff the current config and desired config, then remove the nodes that were removed."}),"\n",(0,o.jsx)(n.h5,{id:"verification-1",children:"Verification"}),"\n",(0,o.jsx)(n.p,{children:'When starting, MachineConfigDaemon verifies that contents and existence of the files and directories match the current configuration. If the MachineConfigDaemon is coming up after applying a "pending" configuration, it will become current, and then verification will proceed.'}),"\n",(0,o.jsx)(n.h4,{id:"machine-reboot",children:"Machine reboot"}),"\n",(0,o.jsxs)(n.p,{children:["Machine Config Daemon is also responsible for rebooting the machine after the update. This is an advanced topic and might not be needed now but ",(0,o.jsx)(n.a,{href:"https://github.com/openshift/machine-config-operator/blob/master/docs/MachineConfigDaemon.md",children:"here"})," is more information about it."]}),"\n",(0,o.jsxs)(n.admonition,{type:"warning",children:[(0,o.jsx)(n.p,{children:"When changes are made to a machine configuration, the Machine Config Operator automatically reboots all corresponding nodes in order for the changes to take effect."}),(0,o.jsxs)(n.p,{children:["To prevent the nodes from automatically rebooting after machine configuration changes, before making the changes, you must pause the autoreboot process by setting the ",(0,o.jsx)(n.code,{children:"spec.paused"})," field to ",(0,o.jsx)(n.code,{children:"true"})," in the corresponding machine config pool. When paused, machine configuration changes are not applied until you set the ",(0,o.jsx)(n.code,{children:"spec.paused"})," field to ",(0,o.jsx)(n.code,{children:"false"})," and the nodes have rebooted into the new configuration."]})]})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>r});var o=i(7294);const t={},a=o.createContext(t);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);