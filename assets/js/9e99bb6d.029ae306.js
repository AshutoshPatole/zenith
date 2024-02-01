"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4330],{9432:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(5893),o=t(1151);const i={sidebar_position:1,slug:"/shell-basics",title:"Shell Script Basics",tags:["script"]},a=void 0,s={id:"Linux/Script/script_basics",title:"Shell Script Basics",description:"---",source:"@site/docs/Linux/Script/1_script_basics.mdx",sourceDirName:"Linux/Script",slug:"/shell-basics",permalink:"/zenith/shell-basics",draft:!1,unlisted:!1,tags:[{label:"script",permalink:"/zenith/tags/script"}],version:"current",lastUpdatedBy:"AshutoshPatole18",lastUpdatedAt:1706787778,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/shell-basics",title:"Shell Script Basics",tags:["script"]},sidebar:"tutorialSidebar",previous:{title:"SSH Key generation",permalink:"/zenith/ssh-key-generation"},next:{title:"Quotes in bash script",permalink:"/zenith/quotes"}},l={},c=[{value:"Parameter Expansions",id:"parameter-expansions",level:2},{value:"Brace Expansion  ",id:"brace-expansion--",level:2},{value:"Redirection",id:"redirection",level:2},{value:"Functions",id:"functions",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",hr:"hr",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"#!/usr/bin/env bash\n# First line of the script is the shebang which tells the system how to execute\n# the script: https://en.wikipedia.org/wiki/Shebang_(Unix)\n# As you already figured, comments start with #. Shebang is also a comment.\n\n# Simple hello world example:\necho Hello world! # => Hello world!\n\n# Each command starts on a new line, or after a semicolon:\necho 'This is the first line'; echo 'This is the second line'\n# => This is the first line\n# => This is the second line\n\n# Declaring a variable looks like this:\nVariable=\"Some string\"\n\n# But not like this:\nVariable = \"Some string\" # => returns error \"Variable: command not found\"\n# Bash will decide that Variable is a command it must execute and give an error\n# because it can't be found.\n\n# Nor like this:\nVariable= 'Some string' # => returns error: \"Some string: command not found\"\n# Bash will decide that 'Some string' is a command it must execute and give an\n# error because it can't be found. (In this case the 'Variable=' part is seen\n# as a variable assignment valid only for the scope of the 'Some string'\n# command.)\n\n# Using the variable (https://ashutoshpatole.me/quotes):\necho $Variable # => Some string\necho \"$Variable\" # => Some string\necho '$Variable' # => $Variable\n# When you use the variable itself \u2014 assign it, export it, or else \u2014 you write\n# its name without $. If you want to use the variable's value, you should use $.\n# Note that ' (single quote) won't expand the variables!\n"})}),"\n",(0,r.jsx)(n.h2,{id:"parameter-expansions",children:(0,r.jsx)(n.a,{href:"/parameter-expansion",children:"Parameter Expansions"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# Parameter expansion ${ }:\necho ${Variable} # => Some string\n# This is a simple usage of parameter expansion\n# Parameter Expansion gets a value from a variable.\n# It "expands" or prints the value\n# During the expansion time the value or parameter can be modified\n# Below are other modifications that add onto this expansion\n\n# String substitution in variables\necho ${Variable/Some/A} # => A string\n# This will substitute the first occurrence of "Some" with "A"\n\n# Substring from a variable\nLength=7\necho ${Variable:0:Length} # => Some st\n# This will return only the first 7 characters of the value\necho ${Variable: -5} # => tring\n# This will return the last 5 characters (note the space before -5)\n\n# String length\necho ${#Variable} # => 11\n\n# Indirect expansion\nOtherVariable="Variable"\necho ${!OtherVariable} # => Some String\n# This will expand the value of OtherVariable\n\n# Default value for variable\necho ${Foo:-"DefaultValueIfFooIsMissingOrEmpty"}\n# => DefaultValueIfFooIsMissingOrEmpty\n# This works for null (Foo=) and empty string (Foo=""); zero (Foo=0) returns 0.\n# Note that it only returns default value and doesn\'t change variable value.\n\n# Declare an array with 6 elements\narray0=(one two three four five six)\n# Print first element\necho $array0 # => "one"\n# Print first element\necho ${array0[0]} # => "one"\n# Print all elements\necho ${array0[@]} # => "one two three four five six"\n# Print number of elements\necho ${#array0[@]} # => "6"\n# Print number of characters in third element\necho ${#array0[2]} # => "5"\n# Print 2 elements starting from forth\necho ${array0[@]:3:2} # => "four five"\n# Print all elements. Each of them on new line.\nfor i in "${array0[@]}"; do\n    echo "$i"\ndone\n'})}),"\n",(0,r.jsx)(n.h2,{id:"brace-expansion--",children:(0,r.jsx)(n.a,{href:"/brace-expansion",children:"Brace Expansion "})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# Used to generate arbitrary strings\necho {1..10} # => 1 2 3 4 5 6 7 8 9 10\necho {a..z} # => a b c d e f g h i j k l m n o p q r s t u v w x y z\n# This will output the range from the start value to the end value\n\n# Built-in variables:\n# There are some useful built-in variables, like\necho "Last program\'s return value: $?"\necho "Script\'s PID: $$"\necho "Number of arguments passed to script: $#"\necho "All arguments passed to script: $@"\necho "Script\'s arguments separated into different variables: $1 $2..."\n\n# Now that we know how to echo and use variables,\n# let\'s learn some of the other basics of bash!\n\n# Our current directory is available through the command `pwd`.\n# `pwd` stands for "print working directory".\n# We can also use the built-in variable `$PWD`.\n# Observe that the following are equivalent:\necho "I\'m in $(pwd)" # execs `pwd` and interpolates output\necho "I\'m in $PWD" # interpolates the variable\n\n# Reading a value from input:\necho "What\'s your name?"\nread Name # Note that we didn\'t need to declare a new variable\necho Hello, $Name!\n\n# We have the usual if structure:\n# use `man test` for more info about conditionals\nif [ $Name != $USER ]\nthen\n    echo "Your name isn\'t your username"\nelse\n    echo "Your name is your username"\nfi\n# True if the value of $Name is not equal to the current user\'s login username\n\n# NOTE: if $Name is empty, bash sees the above condition as:\nif [ != $USER ]\n# which is invalid syntax\n# so the "safe" way to use potentially empty variables in bash is:\nif [ "$Name" != $USER ] ...\n# which, when $Name is empty, is seen by bash as:\nif [ "" != $USER ] ...\n# which works as expected\n\n# There is also conditional execution\necho "Always executed" || echo "Only executed if first command fails"\n# => Always executed\necho "Always executed" && echo "Only executed if first command does NOT fail"\n# => Always executed\n# => Only executed if first command does NOT fail\n\n\n# To use && and || with if statements, you need multiple pairs of square brackets:\nif [ "$Name" == "Steve" ] && [ "$Age" -eq 15 ]\nthen\n    echo "This will run if $Name is Steve AND $Age is 15."\nfi\n\nif [ "$Name" == "Daniya" ] || [ "$Name" == "Zach" ]\nthen\n    echo "This will run if $Name is Daniya OR Zach."\nfi\n\n# There is also the `=~` operator, which tests a string against a Regex pattern:\nEmail=me@example.com\nif [[ "$Email" =~ [a-z]+@[a-z]{2,}\\.(com|net|org) ]]\nthen\n    echo "Valid email!"\nfi\n# Note that =~ only works within double [[ ]] square brackets,\n# which are subtly different from single [ ].\n# See https://www.gnu.org/software/bash/manual/bashref.html#Conditional-Constructs for more on this.\n\n# Redefine command `ping` as alias to send only 5 packets\nalias ping=\'ping -c 5\'\n# Escape the alias and use command with this name instead\n\\ping 192.168.1.1\n# Print all aliases\nalias -p\n\n# Expressions are denoted with the following format:\necho $(( 10 + 5 )) # => 15\n\n# Unlike other programming languages, bash is a shell so it works in the context\n# of a current directory. You can list files and directories in the current\n# directory with the ls command:\nls # Lists the files and subdirectories contained in the current directory\n\n# This command has options that control its execution:\nls -l # Lists every file and directory on a separate line\nls -t # Sorts the directory contents by last-modified date (descending)\nls -R # Recursively `ls` this directory and all of its subdirectories\n\n# Results of the previous command can be passed to the next command as input.\n# The `grep` command filters the input with provided patterns.\n# That\'s how we can list .txt files in the current directory:\nls -l | grep "\\.txt"\n\n# Use `cat` to print files to stdout:\ncat file.txt\n\n# We can also read the file using `cat`:\nContents=$(cat file.txt)\n# "\\n" prints a new line character\n# "-e" to interpret the newline escape characters as escape characters\necho -e "START OF FILE\\n$Contents\\nEND OF FILE"\n# => START OF FILE\n# => [contents of file.txt]\n# => END OF FILE\n\n# Use `cp` to copy files or directories from one place to another.\n# `cp` creates NEW versions of the sources,\n# so editing the copy won\'t affect the original (and vice versa).\n# Note that it will overwrite the destination if it already exists.\ncp srcFile.txt clone.txt\ncp -r srcDirectory/ dst/ # recursively copy\n\n# Look into `scp` or `sftp` if you plan on exchanging files between computers.\n# `scp` behaves very similarly to `cp`.\n# `sftp` is more interactive.\n\n# Use `mv` to move files or directories from one place to another.\n# `mv` is similar to `cp`, but it deletes the source.\n# `mv` is also useful for renaming files!\nmv s0urc3.txt dst.txt\n\n# Since bash works in the context of a current directory, you might want to\n# run your command in some other directory. We have cd for changing location:\ncd ~    # change to home directory\ncd      # also goes to home directory\ncd ..   # go up one directory\n        # (^^say, from /home/username/Downloads to /home/username)\ncd /home/username/Documents   # change to specified directory\ncd ~/Documents/..    # still in home directory..isn\'t it??\ncd -    # change to last directory\n# => /home/username/Documents\n\n# Use subshells to work across directories\n(echo "First, I\'m here: $PWD") && (cd someDir; echo "Then, I\'m here: $PWD")\npwd # still in first directory\n\n# Use `mkdir` to create new directories.\nmkdir myNewDir\n# The `-p` flag causes new intermediate directories to be created as necessary.\nmkdir -p myNewDir/with/intermediate/directories\n# if the intermediate directories didn\'t already exist, running the above\n# command without the `-p` flag would return an error\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"redirection",children:(0,r.jsx)(n.a,{href:"/redirection-operators",children:"Redirection"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# You can redirect command input and output (stdin, stdout, and stderr).\n# Read from stdin until ^EOF$ and overwrite hello.py with the lines\n# between "EOF":\ncat > hello.py << EOF\n#!/usr/bin/env python\nfrom __future__ import print_function\nimport sys\nprint("#stdout", file=sys.stdout)\nprint("#stderr", file=sys.stderr)\nfor line in sys.stdin:\n    print(line, file=sys.stdout)\nEOF\n# Variables will be expanded if the first "EOF" is not quoted\n\n# Run the hello.py Python script with various stdin, stdout, and\n# stderr redirections:\npython hello.py < "input.in" # pass input.in as input to the script\n\npython hello.py > "output.out" # redirect output from the script to output.out\n\npython hello.py 2> "error.err" # redirect error output to error.err\n\npython hello.py > "output-and-error.log" 2>&1\n# redirect both output and errors to output-and-error.log\n\npython hello.py > /dev/null 2>&1\n# redirect all output and errors to the black hole, /dev/null, i.e., no output\n\n# The output error will overwrite the file if it exists,\n# if you want to append instead, use ">>":\npython hello.py >> "output.out" 2>> "error.err"\n\n# Overwrite output.out, append to error.err, and count lines:\ninfo bash \'Basic Shell Features\' \'Redirections\' > output.out 2>> error.err\nwc -l output.out error.err\n\n# Run a command and print its file descriptor (e.g. /dev/fd/123)\n# see: man fd\necho <(echo "#helloworld")\n\n# Overwrite output.out with "#helloworld":\ncat > output.out <(echo "#helloworld")\necho "#helloworld" > output.out\necho "#helloworld" | cat > output.out\necho "#helloworld" | tee output.out >/dev/null\n\n# Cleanup temporary files verbosely (add \'-i\' for interactive)\n# WARNING: `rm` commands cannot be undone\nrm -v output.out error.err output-and-error.log\nrm -r tempDir/ # recursively delete\n# You can install the `trash-cli` Python package to have `trash`\n# which puts files in the system trash and doesn\'t delete them directly\n# see https://pypi.org/project/trash-cli/ if you want to be careful\n\n# Commands can be substituted within other commands using $( ):\n# The following command displays the number of files and directories in the\n# current directory.\necho "There are $(ls | wc -l) items here."\n\n# The same can be done using backticks `` but they can\'t be nested -\n# the preferred way is to use $( ).\necho "There are `ls | wc -l` items here."\n\n# Bash uses a `case` statement that works similarly to switch in Java and C++:\ncase "$Variable" in\n    # List patterns for the conditions you want to meet\n    0) echo "There is a zero.";;\n    1) echo "There is a one.";;\n    *) echo "It is not null.";;  # match everything\nesac\n\n# `for` loops iterate for as many arguments given:\n# The contents of $Variable is printed three times.\nfor Variable in {1..3}\ndo\n    echo "$Variable"\ndone\n# => 1\n# => 2\n# => 3\n\n\n# Or write it the "traditional for loop" way:\nfor ((a=1; a <= 3; a++))\ndo\n    echo $a\ndone\n# => 1\n# => 2\n# => 3\n\n# They can also be used to act on files..\n# This will run the command `cat` on file1 and file2\nfor Variable in file1 file2\ndo\n    cat "$Variable"\ndone\n\n# ..or the output from a command\n# This will `cat` the output from `ls`.\nfor Output in $(ls)\ndo\n    cat "$Output"\ndone\n\n# Bash can also accept patterns, like this to `cat`\n# all the Markdown files in current directory\nfor Output in ./*.markdown\ndo\n    cat "$Output"\ndone\n\n# while loop:\nwhile [ true ]\ndo\n    echo "loop body here..."\n    break\ndone\n# => loop body here...\n\n'})}),"\n",(0,r.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# You can also define functions\n# Definition:\nfunction foo ()\n{\n    echo "Arguments work just like script arguments: $@"\n    echo "And: $1 $2..."\n    echo "This is a function"\n    returnValue=0    # Variable values can be returned\n    return $returnValue\n}\n# Call the function `foo` with two arguments, arg1 and arg2:\nfoo arg1 arg2\n# => Arguments work just like script arguments: arg1 arg2\n# => And: arg1 arg2...\n# => This is a function\n# Return values can be obtained with $?\nresultValue=$?\n# More than 9 arguments are also possible by using braces, e.g. ${10}, ${11}, ...\n\n# or simply\nbar ()\n{\n    echo "Another way to declare functions!"\n    return 0\n}\n# Call the function `bar` with no arguments:\nbar # => Another way to declare functions!\n\n# Calling your function\nfoo "My name is" $Name\n\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var r=t(7294);const o={},i=r.createContext(o);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);