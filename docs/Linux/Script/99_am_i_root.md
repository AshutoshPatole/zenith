---
sidebar_position: 10
slug: /misc
title: "Misc"
---

---
## Am I root ?
Well there are technically many ways to find if the user is root. 
### Using whoami
The well known command `whoami` will print the user currently logged in

```bash
[root@marvel-studios ~]$ whoami
root
```
OR
```bash
[thor@marvel-studios ~]$ whoami
thor
```

This can be applied in the script as

```bash

#!/bin/bash
if [ "$(whoami)" != "root" ]
then
  echo "You have to run this script as Superuser!"
  exit 1
fi
echo "You are a root user!
```
### Using UID
Another way to find a root user is using it's UID. Since root user mostly has 0 in all the linux operating systems we can use this fact.
1. The builtin variable EUID contains UID of current user.
```bash

#!/bin/bash
if [ "$EUID" != "0" ]
then
  echo "You have to run this script as Superuser!"
  exit 1
fi
echo "You are a root user!
```
:::danger
Do NOT use EUID if security is a concern.
:::
2. You can also use the `id` command to get the UID
```bash
[thor@marvel-studios ~]$ id
uid=1000(ashu) gid=1000(ashu) groups=1000(ashu),4(adm),10(wheel),11(cdrom)
```
Well we need just user id not group id's. You can pass `-u` flag for getting just UID

```bash
[thor@marvel-studios ~]$ id -u
1000
```
This would have been 0 if I were root user. Now let's use this in script.

```bash

#!/bin/bash
if [ "$(id -u)" != "0" ]; then
   echo "I am not root!"
   exit 1
fi
```

:::tip
Prefer using **`EUID`** variable since it is slightly performant than **`id`**
:::

## Find if the previous command executed successfully.

Use `$?` to get the exit status of the previous command.

```bash title=finddifsuccess.sh

#!/bin/bash
echo -e "1. success - command id -u\n2. failure - command fid -u\n"

read -p "Enter your choice :"  choice

case $choice in
  1) id -u ;;
  2) fid -u ;;
  *) "Please choose right option 1 or 2" exit 1 ;;
esac

if [[ "$?" != "0" ]]; then
  echo "Something went wrong, Command failed ."
  exit 1
fi
echo "Command executed successfully."
```
```bash title="findifsuccess Output"
[thor@marvel-studios ~]$ ./findifsuccess.sh
1. success - command whoami
2. failure - command howami

Enter your choice :1
1000
Command executed successfully.
[thor@marvel-studios ~]$ ./findifsuccess.sh
1. success - command whoami
2. failure - command howami

Enter your choice :2
./findifsuccess.sh: line 8: fid: command not found
Something went wrong, Command failed .
```

## Find number of arguments passed.
There are many times when we have to pass dynamic values to the script through parameters like 1 or 2 parameters most probably and if the parameters are required then we have to validate the number of args passed to the script
This can be done by `$#` 

```bash
#!/bin/bash
if [[ "$#" != "2" ]]; then
  cat <<- EOF
  usage: $0 [arg1] [arg2]
EOF
exit 1
fi
echo -e "param 1: $1\nparam 2: $2"
```
If you run this script without any param then it will cause an error

```bash
[thor@marvel-studios ~]$ ./myScript
usage: ./myScript.sh [arg1] [arg2]
[thor@marvel-studios ~]$ ./myScript hello world
param 1: hello
param 2: world
```
:::tip
Passing arguments to a script like this is not recommended. Use **`getopts`** for passing multiple number of named arguments.

Example :
```bash
[thor@marvel-studios ~]$ ./myScript -h hello -w world
```
:::

## Find if a binary program is present.

### Using bash builtins
```bash
[thor@marvel-studios ~]$ command pwd
/home/thor
[thor@marvel-studios ~]$ command -v pwd
pwd
```
or
```bash
[thor@wetty-terminal ~]$ type ls
ls is aliased to 'ls --color=auto'
[thor@wetty-terminal ~]$ type helo
-bash: type: helo: not found
```
### Using external commands

```bash
[thor@wetty-terminal ~]$ which ls
alias ls='ls --color=auto'
        /usr/bin/ls
[thor@wetty-terminal ~]$ which helo
/usr/bin/which: no helo in (/home/thor/.local/bin:/home/thor/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin:/var/lib/snapd/snap/bin:/usr/local/bin)
```

## HereDoc
When writing shell scripts you may be in a situation where you need to pass a multiline block of text or code to an interactive command, such as `tee`, `cat`, or `sftp`. In Bash and other shells like Zsh, a Here document (Heredoc) is a type of redirection that allows you to pass multiple lines of input to a command.

The general syntax is 
```bash
[COMMAND] <<[-] 'DELIMITER'
  HERE-DOCUMENT
DELIMITER
```
- You can use any string as a delimiting identifier, the most commonly used are EOF(End of File) or END.
- Appending a minus sign to the redirection operator `<<`-, will cause all leading tab characters to be ignored. This allows you to use indentation when writing here-documents in shell scripts. Leading whitespace characters are not allowed, only tab.
```bash
[thor@wetty-terminal ~]$ cat << EOF > doc
hi this is line number 1
hi this is line number 2
hi this is line number 3
hi this is line number 4
hi this is line number 5
hi this is line number 6
EOF

[thor@wetty-terminal ~]$ cat doc
hi this is line number 1
hi this is line number 2
hi this is line number 3
hi this is line number 4
hi this is line number 5
hi this is line number 6

```