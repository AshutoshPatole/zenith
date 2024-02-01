"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6096],{1083:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var i=r(5893),s=r(1151);const n={sidebar_position:7,slug:"/stop-signals",title:"Stop Signals",tags:["script"]},d=void 0,l={id:"Linux/Script/stop_signals",title:"Stop Signals",description:"---",source:"@site/docs/Linux/Script/7_stop_signals.mdx",sourceDirName:"Linux/Script",slug:"/stop-signals",permalink:"/zenith/stop-signals",draft:!1,unlisted:!1,tags:[{label:"script",permalink:"/zenith/tags/script"}],version:"current",lastUpdatedBy:"AshutoshPatole18",lastUpdatedAt:1706787778,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:7,frontMatter:{sidebar_position:7,slug:"/stop-signals",title:"Stop Signals",tags:["script"]},sidebar:"tutorialSidebar",previous:{title:"Special Variables in script",permalink:"/zenith/special-variables"},next:{title:"SSH in shell script",permalink:"/zenith/ssh-in-script"}},c={},o=[{value:"Core Action",id:"core-action",level:3}];function h(e){const t={a:"a",h3:"h3",hr:"hr",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/kill",children:"Kill command"})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Signal"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Action"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SIGHUP"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"Term"}),(0,i.jsx)(t.td,{children:"Hangup detected on controlling terminal or death of controlling process"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SIGINT"}),(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:"Term"}),(0,i.jsx)(t.td,{children:"Interrupt from keyboard"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SIGQUIT"}),(0,i.jsx)(t.td,{children:"3"}),(0,i.jsx)(t.td,{children:"Core"}),(0,i.jsx)(t.td,{children:"Quit from keyboard"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SIGILL"}),(0,i.jsx)(t.td,{children:"4"}),(0,i.jsx)(t.td,{children:"Core"}),(0,i.jsx)(t.td,{children:"Illegal Instruction"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SIGABRT"}),(0,i.jsx)(t.td,{children:"6"}),(0,i.jsx)(t.td,{children:"Core"}),(0,i.jsx)(t.td,{children:"Abort signal from abort(3)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SIGFPE"}),(0,i.jsx)(t.td,{children:"8"}),(0,i.jsx)(t.td,{children:"Core"}),(0,i.jsx)(t.td,{children:"Floating-point exception"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SIGKILL"}),(0,i.jsx)(t.td,{children:"9"}),(0,i.jsx)(t.td,{children:"Term"}),(0,i.jsx)(t.td,{children:"Kill signal"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SIGSEGV"}),(0,i.jsx)(t.td,{children:"11"}),(0,i.jsx)(t.td,{children:"Core"}),(0,i.jsx)(t.td,{children:"Invalid memory reference"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SIGPIPE"}),(0,i.jsx)(t.td,{children:"13"}),(0,i.jsx)(t.td,{children:"Term"}),(0,i.jsx)(t.td,{children:"Broken pipe: write to pipe with no readers; see pipe(7)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SIGALRM"}),(0,i.jsx)(t.td,{children:"14"}),(0,i.jsx)(t.td,{children:"Term"}),(0,i.jsx)(t.td,{children:"Timer signal from alarm(2)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SIGTERM"}),(0,i.jsx)(t.td,{children:"15"}),(0,i.jsx)(t.td,{children:"Term"}),(0,i.jsx)(t.td,{children:"Termination signal"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SIGUSR1"}),(0,i.jsx)(t.td,{children:"30,10,16"}),(0,i.jsx)(t.td,{children:"Term"}),(0,i.jsx)(t.td,{children:"User-defined signal 1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SIGUSR2"}),(0,i.jsx)(t.td,{children:"31,12,17"}),(0,i.jsx)(t.td,{children:"Term"}),(0,i.jsx)(t.td,{children:"User-defined signal 2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SIGCHLD"}),(0,i.jsx)(t.td,{children:"20,17,18"}),(0,i.jsx)(t.td,{children:"Ign"}),(0,i.jsx)(t.td,{children:"Child stopped or terminated"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SIGCONT"}),(0,i.jsx)(t.td,{children:"19,18,25"}),(0,i.jsx)(t.td,{children:"Cont"}),(0,i.jsx)(t.td,{children:"Continue if stopped"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SIGSTOP"}),(0,i.jsx)(t.td,{children:"17,19,23"}),(0,i.jsx)(t.td,{children:"Stop"}),(0,i.jsx)(t.td,{children:"Stop process"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SIGTSTP"}),(0,i.jsx)(t.td,{children:"18,20,24"}),(0,i.jsx)(t.td,{children:"Stop"}),(0,i.jsx)(t.td,{children:"Stop typed at terminal"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SIGTTIN"}),(0,i.jsx)(t.td,{children:"21,21,26"}),(0,i.jsx)(t.td,{children:"Stop"}),(0,i.jsx)(t.td,{children:"Terminal input for background process"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"SIGTTOU"}),(0,i.jsx)(t.td,{children:"22,22,27"}),(0,i.jsx)(t.td,{children:"Stop"}),(0,i.jsx)(t.td,{children:"Terminal output for background process"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"core-action",children:"Core Action"}),"\n",(0,i.jsx)(t.p,{children:"The default action of certain signals is to cause a process to terminate and produce a core dump file, a disk file containing an image of the process's memory at the time of termination.  This image can be used in a debugger (e.g., gdb) to inspect the state of the program at the time that it terminated."}),"\n",(0,i.jsx)(t.p,{children:"By default, the core file is called core or core.pid, where pid is the ID of the process that dumped  core,  and is  created  in the current working directory. Writing the core file fails if the directory in which it is to be created is nonwritable, or if a file with the same name exists and is not writable or is not a regular file (e.g, it is a directory or a symbolic link)."})]})}function a(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>d});var i=r(7294);const s={},n=i.createContext(s);function d(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);