"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3332],{5591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var o=n(5893),r=n(1151);const a={sidebar_position:2,sidebar_label:"Foreground and Background jobs",slug:"/fg-and-bg",author:"Ashutosh Patole",tags:["bg","fg","jobs"]},s=void 0,i={id:"Linux/Commands/Foreground-Background",title:"Foreground-Background",description:"---",source:"@site/docs/Linux/Commands/Foreground-Background.mdx",sourceDirName:"Linux/Commands",slug:"/fg-and-bg",permalink:"/zenith/fg-and-bg",draft:!1,unlisted:!1,tags:[{label:"bg",permalink:"/zenith/tags/bg"},{label:"fg",permalink:"/zenith/tags/fg"},{label:"jobs",permalink:"/zenith/tags/jobs"}],version:"current",lastUpdatedBy:"AshutoshPatole18",lastUpdatedAt:1706787778,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Foreground and Background jobs",slug:"/fg-and-bg",author:"Ashutosh Patole",tags:["bg","fg","jobs"]},sidebar:"tutorialSidebar",previous:{title:"AWK",permalink:"/zenith/awk"},next:{title:"Kill Signals",permalink:"/zenith/kill"}},d={},h=[{value:"Understanding Foreground and Background Processes:",id:"understanding-foreground-and-background-processes",level:3}];function u(e){const t={admonition:"admonition",h3:"h3",hr:"hr",p:"p",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h3,{id:"understanding-foreground-and-background-processes",children:"Understanding Foreground and Background Processes:"}),"\n",(0,o.jsx)(t.p,{children:"One of the most basic process-management tasks is to control whether a process is running in the foreground or the background\u2014that is, whether it\u2019s monopolizing the use of the terminal from which it was launched. Normally, when you launch a program, it takes over the terminal, preventing you from doing other work in that terminal. (Some programs, though, release the terminal. This is most common for servers and some GUI programs.) If a program is running but you decide you want to use that terminal for something else, pressing Ctrl+Z normally pauses the program and gives you control of the terminal."}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"An important point is that this procedure suspends the program, so if it\u2019s performing real work, that work stops!"})}),"\n",(0,o.jsx)(t.p,{children:"This can be handy if, say, you\u2019re running a text editor in a text-mode login and you want to check a filename so you can mention it in the file you\u2019re editing. You press Ctrl+Z and type ls to get the file listing. To get back to the text editor, you then type fg, which restores the text editor to the foreground of your terminal. If you\u2019ve suspended several processes, you add a job number, as in fg 2 to restore job 2. You can obtain a list of jobs associated with a terminal by typing jobs, which displays the jobs and their job numbers."}),"\n",(0,o.jsx)(t.p,{children:"A variant on fg is bg. Whereas fg restores a job to the foreground, bg restores a job to running status, but in the background. You can use this command if the process you\u2019re running is performing a CPU-intensive task that requires no human interaction but you want to use the terminal in the meantime. Another use of bg is in a GUI environment\u2014after launching a GUI program from an xterm or similar window, that shell is tied up servicing the GUI program, which probably doesn\u2019t really need the shell. Pressing Ctrl+Z in the xterm window will enable you to type shell commands again, but the GUI program will be frozen. To unfreeze the GUI program, type bg in the shell, which enables the GUI program to run in the background while the shell continues to process your commands."}),"\n",(0,o.jsx)(t.p,{children:"As an alternative to launching a program, using Ctrl+Z, and typing bg to run a program in the background, you can append an ampersand (&) to the command when launching the program. For instance, rather than edit a fi le with the NEdit GUI editor by typing nedit myfile.txt, you can type nedit myfile.txt &. This command launches the gedit program in the background from the start, leaving you able to control your xterm window for other tasks."})]})}function l(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var o=n(7294);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);