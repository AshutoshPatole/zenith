"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[972],{6776:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var t=r(5893),s=r(1151);const a={sidebar_position:3,sidebar_label:"Parameter Expansion",slug:"/parameter-expansion",author:"Ashutosh Patole"},i=void 0,o={id:"Linux/Commands/Parameter expansion",title:"Parameter expansion",description:"We often use $ everywhere in our scripts just to extract values from  a variable like",source:"@site/docs/Linux/Commands/Parameter expansion.mdx",sourceDirName:"Linux/Commands",slug:"/parameter-expansion",permalink:"/zenith/parameter-expansion",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"AshutoshPatole18",lastUpdatedAt:1706524646,formattedLastUpdatedAt:"Jan 29, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Parameter Expansion",slug:"/parameter-expansion",author:"Ashutosh Patole"},sidebar:"tutorialSidebar",previous:{title:"Kill Signals",permalink:"/zenith/kill"},next:{title:"What are certs?",permalink:"/zenith/certs"}},l={},h=[{value:"Simple Use",id:"simple-use",level:2},{value:"Finding length of the variable value",id:"finding-length-of-the-variable-value",level:2},{value:"Case modification",id:"case-modification",level:2},{value:"Convert first letter to upper case ^",id:"convert-first-letter-to-upper-case-",level:3},{value:"Convert first letter to lower case ,",id:"convert-first-letter-to-lower-case-",level:3},{value:"Convert all letter to upper case ^^",id:"convert-all-letter-to-upper-case-",level:3},{value:"Convert all letter to lower case ,,",id:"convert-all-letter-to-lower-case-",level:3},{value:"Search and Replace",id:"search-and-replace",level:2},{value:"Slicing a String",id:"slicing-a-string",level:2},{value:"Default values",id:"default-values",level:2},{value:"Use a default value",id:"use-a-default-value",level:3},{value:"Assign a default value",id:"assign-a-default-value",level:3}];function c(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"We often use $ everywhere in our scripts just to extract values from  a variable like"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[thor@marvel-studios ~]$ echo $USER\r\nthor\n"})}),"\n",(0,t.jsxs)(n.p,{children:["but it can be more than just this. Everything you pass to the $ is called a ",(0,t.jsx)(n.code,{children:"parameter"})," and we can expand it with many ways like"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Converting to upper case"}),"\n",(0,t.jsx)(n.li,{children:"Converting to lower case"}),"\n",(0,t.jsx)(n.li,{children:"Slicing the string"}),"\n",(0,t.jsx)(n.li,{children:"Remove specific parts from parameter value"}),"\n",(0,t.jsx)(n.li,{children:"Search and Replace"}),"\n",(0,t.jsx)(n.li,{children:"Finding length of the string"}),"\n",(0,t.jsx)(n.li,{children:"Assigning default values\r\nand so on and on."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["These many things are possible with ",(0,t.jsx)(n.code,{children:"${}"})," but we use it for just one purpose most of the time."]}),"\n",(0,t.jsx)(n.h2,{id:"simple-use",children:"Simple Use"}),"\n",(0,t.jsxs)(n.p,{children:["The easiest way of using parameter name as we did in above snippet ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"$USER"})})," but using it with braces (",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"${USER}"})}),") has one advantage, it can be immediately followed by characters that would be interpreted as part of the parameter name otherwise."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'[thor@marvel-studios ~]$ who="student"\r\n[thor@marvel-studios ~]$ echo "$whos are playing in the garden"\r\n are playing in the garden\r\n[thor@marvel-studios ~]$ echo "${who}s are playing in the garden"\r\nstudents are playing in the garden\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Also you have to use $"," for ",(0,t.jsx)(n.strong,{children:"positional arguments > $9"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",metastring:'title="param_expansion.sh"',children:"[thor@marvel-studios ~]$ cat param_expansion.sh \r\n#!/bin/bash\r\n\r\necho $1\r\necho $2\r\necho $3\r\necho $4 \r\necho $5\r\necho $6\r\necho $7\r\necho $8\r\necho $9\r\necho $10\r\necho $11\r\n\r\n[thor@marvel-studios ~]$ ./param_expansion.sh one 2 three four 5 6 seven 8 9 ten eleven\r\none\r\n2\r\nthree\r\nfour\r\n5\r\n6\r\nseven\r\n8\r\n9\r\none0      # $10 is interpreted as $1 => one and 0 => one0\r\none1      # same for $11 => one1\n"})}),"\n",(0,t.jsx)(n.p,{children:"Change the 10th and 11th line in param_expansion.sh file"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"echo ${10}\r\necho ${11}\n"})}),"\n",(0,t.jsx)(n.p,{children:"and now it works as expected"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[thor@marvel-studios ~]$ ./param_expansion.sh one 2 three four 5 6 seven 8 9 ten eleven\r\none\r\n2\r\nthree\r\nfour\r\n5\r\n6\r\nseven\r\n8\r\n9\r\nten\r\neleven\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["$"," is parameter expansion and $() is ",(0,t.jsx)(n.strong,{children:"command substitution"}),". Both are entirely _different"]})]}),"\n",(0,t.jsx)(n.h2,{id:"finding-length-of-the-variable-value",children:"Finding length of the variable value"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'[thor@marvel-studios ~]$ who="thor"\r\n[thor@marvel-studios ~]$ echo ${#who}\r\n4    # t h o r\n'})}),"\n",(0,t.jsx)(n.h2,{id:"case-modification",children:"Case modification"}),"\n",(0,t.jsx)(n.h3,{id:"convert-first-letter-to-upper-case-",children:"Convert first letter to upper case ^"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'[thor@marvel-studios ~]$ who="thor"\r\n[thor@marvel-studios ~]$ echo ${who}\r\nthor\r\n[thor@marvel-studios ~]$ echo ${who^}\r\nThor\n'})}),"\n",(0,t.jsx)(n.h3,{id:"convert-first-letter-to-lower-case-",children:"Convert first letter to lower case ,"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'[thor@marvel-studios ~]$ who="THOR"\r\n[thor@marvel-studios ~]$ echo ${who}\r\nTHOR\r\n[thor@marvel-studios ~]$ echo ${who,}\r\ntHOR\n'})}),"\n",(0,t.jsx)(n.h3,{id:"convert-all-letter-to-upper-case-",children:"Convert all letter to upper case ^^"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'[thor@marvel-studios ~]$ who="thor"\r\n[thor@marvel-studios ~]$ echo ${who}\r\nthor\r\n[thor@marvel-studios ~]$ echo ${who^^}\r\nTHOR\n'})}),"\n",(0,t.jsx)(n.h3,{id:"convert-all-letter-to-lower-case-",children:"Convert all letter to lower case ,,"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'[thor@marvel-studios ~]$ who="THOR"\r\n[thor@marvel-studios ~]$ echo ${who}\r\nTHOR\r\n[thor@marvel-studios ~]$ echo ${who,,}\r\nthor\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"A small script to change all files in current directory to lower case letters."})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\r\n\r\nfor i in $(ls); do\r\n        echo "Converting ${i} -> ${i,,}"\r\n        mv ${i} ${i,,}\r\ndone\n'})}),"\n",(0,t.jsx)(n.p,{children:"This script will throw warnings saying that files are similar if they are already lower case named. So tweak it."}),"\n",(0,t.jsx)(n.h2,{id:"search-and-replace",children:"Search and Replace"}),"\n",(0,t.jsx)(n.p,{children:"Consider String as a parameter now which contains.."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'String="I am writing scripts. I am going to ececute it."\n'})}),"\n",(0,t.jsxs)(n.p,{children:["To replace a word ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"{parameter/pattern/replaceString}"})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[thor@marvel-studios ~]$ echo ${String/I/You}\r\nYou am writing scripts. I am going to ececute it.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This only replaces the first occurenece. If you want to replace all occurences ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"{parameter//pattern/replaceString}"})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[thor@marvel-studios ~]$ echo ${String//I/You}\r\nYou am writing scripts. You am going to ececute it.\n"})}),"\n",(0,t.jsx)(n.h2,{id:"slicing-a-string",children:"Slicing a String"}),"\n",(0,t.jsxs)(n.p,{children:["Syntax ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"{String:OffsetNumber}"})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[thor@marvel-studios ~]$ echo $String\r\nI am writing scripts. I am going to ececute it.\r\n[thor@marvel-studios ~]$ echo ${String:15}\r\nripts. I am going to ececute it.\r\n[thor@marvel-studios ~]$ echo ${String:10}\r\nng scripts. I am going to ececute it.\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also use length along with offset number\r\n",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"{String:OffsetNumber:length}"})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[thor@marvel-studios ~]$ echo $String\r\nI am writing scripts. I am going to ececute it.\r\n[thor@marvel-studios ~]$ echo ${String:10:5}\r\nng sc\r\n[thor@marvel-studios ~]$ echo ${String:10:8}\r\nng scrip\r\n[thor@marvel-studios ~]$ echo ${String:15:10}\r\nripts. I a\n"})}),"\n",(0,t.jsx)(n.h2,{id:"default-values",children:"Default values"}),"\n",(0,t.jsx)(n.h3,{id:"use-a-default-value",children:"Use a default value"}),"\n",(0,t.jsx)(n.p,{children:"Syntax"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"${Parameter:-Default}"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"${Parameter-Default}"})})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If the Parameter is ",(0,t.jsx)(n.strong,{children:"unset"})," (never was defined) or ",(0,t.jsx)(n.strong,{children:"null"})," (empty), this one expands to Default, otherwise it expands to the value of Parameter, as if it just was ",(0,t.jsx)(n.code,{children:"${Parameter}"}),". If you ",(0,t.jsx)(n.strong,{children:"omit the :"})," (colon), like shown in the second form, the default value is only used when the Parameter was ",(0,t.jsx)(n.strong,{children:"unset"}),", not when it was empty."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'echo "Your home directory is: ${HOME:-/home/$USER}."\r\necho "${HOME:-/home/$USER} will be used to store your personal data."\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsx)(n.p,{children:"If HOME is unset or empty, everytime you want to print something useful, you need to put that parameter syntax in."})]}),"\n",(0,t.jsx)(n.h3,{id:"assign-a-default-value",children:"Assign a default value"}),"\n",(0,t.jsxs)(n.admonition,{type:"caution",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Assign and Use of default values is entirely different. Read them carefully (",(0,t.jsx)(n.strong,{children:"-"})," not equal to ",(0,t.jsx)(n.strong,{children:"="}),")."]})]}),"\n",(0,t.jsx)(n.p,{children:"Syntax"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"${Parameter:=Default}"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"${Parameter=Default}"})})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["This one works like the using default values, but the default text you give is not only expanded, but also assigned to the parameter, if it was ",(0,t.jsx)(n.strong,{children:"unset or null"}),". Equivalent to using a default value, when you omit the : (colon), as shown in the second form, the default value will only be assigned when the parameter was ",(0,t.jsx)(n.strong,{children:"unset"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'echo "Your home directory is: ${HOME:=/home/$USER}."\r\necho "$HOME will be used to store your personal data."\n'})}),"\n",(0,t.jsxs)(n.p,{children:["After the first expansion on line 1 ",(0,t.jsx)(n.code,{children:"${HOME:=/home/$USER}"}),", HOME is ",(0,t.jsx)(n.strong,{children:"set and usable"}),". */}"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var t=r(7294);const s={},a=t.createContext(s);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);