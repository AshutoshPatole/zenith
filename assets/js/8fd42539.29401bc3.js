"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8333],{7672:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=s(5893),o=s(1151);const i={sidebar_position:8,slug:"/lvm",title:"Logic Volume Manager"},a=void 0,l={id:"Linux/lvm",title:"Logic Volume Manager",description:"---",source:"@site/docs/Linux/lvm.md",sourceDirName:"Linux",slug:"/lvm",permalink:"/zenith/lvm",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"AshutoshPatole18",lastUpdatedAt:1706787221,formattedLastUpdatedAt:"Feb 1, 2024",sidebarPosition:8,frontMatter:{sidebar_position:8,slug:"/lvm",title:"Logic Volume Manager"},sidebar:"tutorialSidebar",previous:{title:"Redundant Array of Independent Disks (RAID)",permalink:"/zenith/raid"},next:{title:"Network Interface",permalink:"/zenith/network-interface-files"}},r={},d=[{value:"What is LVM?",id:"what-is-lvm",level:2},{value:"LVM Structure",id:"lvm-structure",level:2},{value:"Use case of LVM",id:"use-case-of-lvm",level:2},{value:"Adding a new logical volume",id:"adding-a-new-logical-volume",level:2},{value:"Install the hard drive",id:"install-the-hard-drive",level:3},{value:"Create a Physical Volume (PV)",id:"create-a-physical-volume-pv",level:3},{value:"Extending Volume Group size",id:"extending-volume-group-size",level:3},{value:"Create a new LV",id:"create-a-new-lv",level:3},{value:"Extending existing LV",id:"extending-existing-lv",level:3},{value:"Format the newly created LV new-lv",id:"format-the-newly-created-lv-new-lv",level:3},{value:"Reducing LV Size",id:"reducing-lv-size",level:2},{value:"Shrinking a root volume",id:"shrinking-a-root-volume",level:3},{value:"Shrinking a non-root volume",id:"shrinking-a-non-root-volume",level:3}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"what-is-lvm",children:"What is LVM?"}),"\n",(0,t.jsx)(n.p,{children:"Managing disk space has always been a significant task for sysadmins. Running out of disk space used to be the start of a long and complex series of tasks to increase the space available to a disk partition. It also required taking the system off-line. This usually involved installing a new hard drive, booting to recovery or single-user mode, creating a partition and a filesystem on the new hard drive, using temporary mount points to move the data from the too-small filesystem to the new, larger one, changing the content of the /etc/fstab file to reflect the correct device name for the new partition, and rebooting to remount the new filesystem on the correct mount point."}),"\n",(0,t.jsxs)(n.p,{children:["LVM allows for very flexible disk space management. It provides features like the ability to add disk space to a logical volume and its filesystem while that filesystem is ",(0,t.jsx)(n.strong,{children:"mounted and active"})," and it allows for the collection of multiple physical hard drives and partitions into a single volume group which can then be divided into logical volumes."]}),"\n",(0,t.jsx)(n.admonition,{type:"important",children:(0,t.jsxs)(n.p,{children:["The EXT2, 3, and 4 filesystems all allow both offline (unmounted) and online (mounted) resizing when increasing the size of a filesystem, and ",(0,t.jsx)(n.strong,{children:"ONLY"})," offline resizing when reducing the size. You should check the details of the filesystems you intend to use in order to verify whether they can be resized at all and especially whether they can be resized while online."]})}),"\n",(0,t.jsx)(n.h2,{id:"lvm-structure",children:"LVM Structure"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:"https://media.springernature.com/original/springer-static/image/chp%3A10.1007%2F978-1-4842-5455-4_1/MediaObjects/489914_1_En_1_Fig1_HTML.jpg",alt:""})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Note: Layer numbering starts from bottom"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Layer 1"})," Physical hard drives : Self explanatory term."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Layer 2"})," Partitioning: This is an optional step and should be performed when you are required to deal with some portion of the physical hard drive."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Layer 3"})," Physical Volumes : This is the first step for LVM which acts as a individual hard drive / partition."]}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"/boot"})})," partition cannot reside on an LVM volume because the GRUB boot loader cannot read it."]})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Layer 4"})," All Physcial Volumes (PV) are combined into one Volume Group (VG)"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Layer 5"})," The VG is then divided into multiple Logic Volumes (LV) containing their own filesystem types."]}),"\n",(0,t.jsx)(n.h2,{id:"use-case-of-lvm",children:"Use case of LVM"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Creating single logical volumes of multiple physical volumes or entire hard disks (somewhat similar to RAID 0, but more similar to JBOD), allowing for dynamic volume resizing."}),"\n",(0,t.jsx)(n.li,{children:"Managing large hard disk farms by allowing disks to be added and replaced without downtime or service disruption, in combination with hot swapping."}),"\n",(0,t.jsx)(n.li,{children:"On small systems (like a desktop), instead of having to estimate at installation time how big a partition might need to be, LVM allows filesystems to be easily resized as needed."}),"\n",(0,t.jsx)(n.li,{children:"Performing consistent backups by taking snapshots of the logical volumes.\nEncrypting multiple physical partitions with one password."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"adding-a-new-logical-volume",children:"Adding a new logical volume"}),"\n",(0,t.jsx)(n.p,{children:"There are times when it is necessary to add a new logical volume to a host. The basic steps for adding a new logical volume are as follows."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"If necessary, install a new hard drive."}),"\n",(0,t.jsx)(n.li,{children:"Optional: Create a partition on the hard drive."}),"\n",(0,t.jsx)(n.li,{children:"Create a physical volume (PV) of the complete hard drive or a partition on the hard drive."}),"\n",(0,t.jsx)(n.li,{children:"Assign the new physical volume to an existing volume group (VG) or create a new volume group."}),"\n",(0,t.jsx)(n.li,{children:"Create a new logical volumes (LV) from the space in the volume group."}),"\n",(0,t.jsx)(n.li,{children:"Create a filesystem on the new logical volume."}),"\n",(0,t.jsxs)(n.li,{children:["Add appropriate entries to ",(0,t.jsx)(n.code,{children:"/etc/fstab"})," for mounting the filesystem."]}),"\n",(0,t.jsx)(n.li,{children:"Mount the filesystem."}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Only the EXT3 and EXT4 filesystems can be resized on the fly on a running, mounted filesystem. Many other filesystems including BTRFS and ZFS cannot be resized."})}),"\n",(0,t.jsx)(n.h3,{id:"install-the-hard-drive",children:"Install the hard drive"}),"\n",(0,t.jsx)(n.p,{children:"If there is not enough space on the existing hard drive(s) in the system to add the desired amount of space it may be necessary to add a new hard drive and create the space to add to the Logical Volume. First, install the physical hard drive and then perform the following steps."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@centos ~]# lsblk\nNAME        MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT\nsda           8:0    0   12G  0 disk\n\u251c\u2500sda1        8:1    0    1G  0 part /boot\n\u2514\u2500sda2        8:2    0   11G  0 part\n  \u251c\u2500cs-root 253:0    0  9.8G  0 lvm  /\n  \u2514\u2500cs-swap 253:1    0  1.2G  0 lvm  [SWAP]\nsdb           8:16   0    4G  0 disk\nsr0          11:0    1 1024M  0 rom\n"})}),"\n",(0,t.jsxs)(n.p,{children:["As you can see here we have sda disk with two partitions. One for ",(0,t.jsx)(n.strong,{children:"boot"})," and other is for ",(0,t.jsx)(n.strong,{children:"LVM"}),". The naming convention for LVM is mostly similar on all major distributions."]}),"\n",(0,t.jsxs)(n.p,{children:["\u251c\u2500cs-root\n|-VG_NAME-LV_NAME\n\u2514\u2500cs-swap\nWe have around 9.8GB disk space for our root partition which is filling up quickly hence we have added a new disk ",(0,t.jsx)(n.strong,{children:"sdb"})," of 4GB. Now here comes 2 scenarios we can either assign the entire disk for PV or create a parition first and then assign it. We are going with the later one for now.\nSo let's create a partition of 2GB on the /dev/sdb."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Note : This is an optional step and if you want to allocate entire disk space then it is not needed."}),"\n"]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@centos ~]# fdisk /dev/sdb\n\nWelcome to fdisk (util-linux 2.32.1).\nChanges will remain in memory only, until you decide to write them.\nBe careful before using the write command.\n\nDevice does not contain a recognized partition table.\nCreated a new DOS disklabel with disk identifier 0x93d8aa54.\n\nCommand (m for help): n                     # n - Create a new partition\nPartition type\n   p   primary (0 primary, 0 extended, 4 free)\n   e   extended (container for logical partitions)\nSelect (default p): p                       # p - primary partition\nPartition number (1-4, default 1): 1        # 1 for naming disk as sdb1\nFirst sector (2048-8388607, default 2048):  # just hit enter\nLast sector, +sectors or +size{K,M,G,T,P} (2048-8388607, default 8388607): +2G      # + is Required\n\nCreated a new partition 1 of type 'Linux' and of size 2 GiB.\n\nCommand (m for help):\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"Until now we have created a partition of 2GB on the disk but do not exit the fdisk utility and continue for changing the filesystem type."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"Command (m for help): t                      # t - change type\nSelected partition 1\nHex code (type L to list all codes): 8e      # 8e is hex code for Linux LVM\nChanged type of partition 'Linux' to 'Linux LVM'.\n\nCommand (m for help): w                      # w - write changes to disk \nThe partition table has been altered.\nCalling ioctl() to re-read partition table.\nSyncing disks.\n\n"})}),"\n",(0,t.jsx)(n.p,{children:"We have got the parition of 2GB"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@centos ~]# lsblk\nNAME        MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT\nsda           8:0    0   12G  0 disk\n\u251c\u2500sda1        8:1    0    1G  0 part /boot\n\u2514\u2500sda2        8:2    0   11G  0 part\n  \u251c\u2500cs-root 253:0    0  9.8G  0 lvm  /\n  \u2514\u2500cs-swap 253:1    0  1.2G  0 lvm  [SWAP]\nsdb           8:16   0    4G  0 disk\n\u2514\u2500sdb1        8:17   0    2G  0 part        # <== sdb1\nsr0          11:0    1 1024M  0 rom\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"})," All commands related to LV Management is ",(0,t.jsx)(n.a,{href:"/logic-volume-commands",children:"here"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create-a-physical-volume-pv",children:"Create a Physical Volume (PV)"}),"\n",(0,t.jsx)(n.p,{children:"As we can see we have only one PV on the machine located at /dev/sda2 and has a size of ~11GB."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@centos ~]# pvscan\n  PV /dev/sda2   VG cs              lvm2 [<11.00 GiB / 0    free]\n  Total: 1 [<11.00 GiB] / in use: 1 [<11.00 GiB] / in no VG: 0 [0   ]\n"})}),"\n",(0,t.jsx)(n.p,{children:"To create a PV use pvcreate command on the disk sdb1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'\n[root@centos ~]# pvcreate /dev/sdb1\nPhysical volume "/dev/sdb1" successfully created.\n\n[root@centos ~]# lsblk -f\nNAME        FSTYPE      LABEL UUID                                   MOUNTPOINT\nsda\n\u251c\u2500sda1      xfs               d153ab14-0930-42cf-bea7-41da3b75f166   /boot\n\u2514\u2500sda2      LVM2_member       rnPx56-D2G4-vL2i-xBMT-b06u-sldD-ffm9Th\n  \u251c\u2500cs-root xfs               20f510f9-31bf-43e8-9b57-b96c80ca82d7   /\n  \u2514\u2500cs-swap swap              b09431d9-6c74-4715-87db-1841802ba5de   [SWAP]\nsdb\n\u2514\u2500sdb1      LVM2_member       hMd1nq-oAmf-MBVI-xPsH-bqFm-wXu3-YJ91Lf\nsr0\n\n[root@centos ~]# pvscan\n  PV /dev/sda2   VG cs              lvm2 [<11.00 GiB / 0    free]\n  PV /dev/sdb1                      lvm2 [2.00 GiB]\n  Total: 2 [<13.00 GiB] / in use: 1 [<11.00 GiB] / in no VG: 1 [2.00 GiB]\n'})}),"\n",(0,t.jsx)(n.h3,{id:"extending-volume-group-size",children:"Extending Volume Group size"}),"\n",(0,t.jsx)(n.p,{children:"Now you can see that PV collectible size is ~13GB but our PV is not connected to the VG (cs). So we have to extend our VG using vgextend command"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'[root@centos ~]# vgscan\n  Found volume group "cs" using metadata type lvm2\n[root@centos ~]# vgextend cs /dev/sdb1\n  Volume group "cs" successfully extended\n'})}),"\n",(0,t.jsx)(n.p,{children:"Now with this 2GB of newly added space we are going to do two things."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Create a new Logical volume of space 1GB."}),"\n",(0,t.jsx)(n.li,{children:"Add 1GB of space to an existing root logical volume."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"create-a-new-lv",children:"Create a new LV"}),"\n",(0,t.jsx)(n.p,{children:"You can verify that we have only 2 LV present on the system."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@centos ~]# lvs\n  LV   VG Attr       LSize Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert\n  root cs -wi-ao---- 9.79g\n  swap cs -wi-ao---- 1.20g\n"})}),"\n",(0,t.jsx)(n.p,{children:"To create a new LV use lvcreate command."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'\n[root@centos ~]# lvcreate --name new-lv -l 50%FREE cs\n  Logical volume "new-lv" created.\n\n[root@centos ~]# lvs\n  LV     VG Attr       LSize    Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert\n  new-lv cs -wi-a----- 1020.00m\n  root   cs -wi-ao----    9.79g\n  swap   cs -wi-ao----    1.20g\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"You can also specify capital -L 1G on the command."}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ lvcreate --name new-lv -L 1G cs\n"})}),(0,t.jsxs)(n.p,{children:["use ",(0,t.jsx)(n.code,{children:"lvcreate --help"})," to learn about it."]})]}),"\n",(0,t.jsx)(n.h3,{id:"extending-existing-lv",children:"Extending existing LV"}),"\n",(0,t.jsx)(n.p,{children:"As you can see the root LV size is around 9.79 GB and we are going to extend it with another 1GB."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@centos ~]# lvs\n  LV     VG Attr       LSize    Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert\n  new-lv cs -wi-a----- 1020.00m\n  root   cs -wi-ao----    9.79g\n  swap   cs -wi-ao----    1.20g\n"})}),"\n",(0,t.jsx)(n.p,{children:"use lvextend to extend the existing LV."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@centos ~]# lvextend -L +1G /dev/cs/root\n  Size of logical volume cs/root changed from 9.79 GiB (2507 extents) to 10.79 GiB (2763 extents).\n  Logical volume cs/root successfully resized.\n[root@centos ~]# lvs\n  LV     VG Attr       LSize    Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert\n  new-lv cs -wi-a----- 1020.00m\n  root   cs -wi-ao----   10.79g\n  swap   cs -wi-ao----    1.20g\n"})}),"\n",(0,t.jsx)(n.p,{children:"You can cross verify the disk UUID of cs-root if you want."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@centos ~]# lsblk -f\nNAME           FSTYPE      LABEL UUID                                   MOUNTPOINT\nsda\n\u251c\u2500sda1         xfs               d153ab14-0930-42cf-bea7-41da3b75f166   /boot\n\u2514\u2500sda2         LVM2_member       rnPx56-D2G4-vL2i-xBMT-b06u-sldD-ffm9Th\n  \u251c\u2500cs-root    xfs               20f510f9-31bf-43e8-9b57-b96c80ca82d7   /\n  \u2514\u2500cs-swap    swap              b09431d9-6c74-4715-87db-1841802ba5de   [SWAP]\nsdb\n\u2514\u2500sdb1         LVM2_member       hMd1nq-oAmf-MBVI-xPsH-bqFm-wXu3-YJ91Lf\n  \u251c\u2500cs-root    xfs               20f510f9-31bf-43e8-9b57-b96c80ca82d7   /\n  \u2514\u2500cs-new--lv\nsr0\n"})}),"\n",(0,t.jsxs)(n.p,{children:["but this hasn't actually increased the disk space. If you check ",(0,t.jsx)(n.code,{children:"df -h"})," output you will see nothing changed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@centos ~]# df -h\nFilesystem           Size  Used Avail Use% Mounted on\ndevtmpfs             887M     0  887M   0% /dev\ntmpfs                907M     0  907M   0% /dev/shm\ntmpfs                907M  8.5M  898M   1% /run\ntmpfs                907M     0  907M   0% /sys/fs/cgroup\n/dev/mapper/cs-root  9.8G  2.4G  7.5G  25% /                        # Same 9.8G\n/dev/sda1           1014M  212M  803M  21% /boot\ntmpfs                182M     0  182M   0% /run/user/0\n"})}),"\n",(0,t.jsxs)(n.p,{children:["We have added the space but we haven't resized it actually. To resize it use ",(0,t.jsx)(n.code,{children:"xfs_growfs"})," command"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@centos ~]# xfs_growfs /dev/cs/new-lv\nmeta-data=/dev/cs/new-lv    isize=512    agcount=4, agsize=641792 blks\n         =                       sectsz=512   attr=2, projid32bit=1\n         =                       crc=1        finobt=1, sparse=1, rmapbt=0\n         =                       reflink=1    bigtime=0 inobtcount=0\ndata     =                       bsize=4096   blocks=2567168, imaxpct=25\n         =                       sunit=0      swidth=0 blks\nnaming   =version 2              bsize=4096   ascii-ci=0, ftype=1\nlog      =internal log           bsize=4096   blocks=2560, version=2\n         =                       sectsz=512   sunit=0 blks, lazy-count=1\nrealtime =none                   extsz=4096   blocks=0, rtextents=0\ndata blocks changed from 2567168 to 2829312\n\n[root@centos ~]# df -h\nFilesystem           Size  Used Avail Use% Mounted on\ndevtmpfs             887M     0  887M   0% /dev\ntmpfs                907M     0  907M   0% /dev/shm\ntmpfs                907M  8.5M  898M   1% /run\ntmpfs                907M     0  907M   0% /sys/fs/cgroup\n/dev/mapper/cs-root   11G  2.4G  8.5G  23% /                      # increased to 11G from 9.8G\n/dev/sda1           1014M  212M  803M  21% /boot\ntmpfs                182M     0  182M   0% /run/user/0\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["This part is specific to the filesystem type, although the ext2/3/4 filesystem types are similar enough that they can all be resized with a single ",(0,t.jsx)(n.strong,{children:"resize2fs"})," tool. For XFS, filesystems, you would use a ",(0,t.jsx)(n.strong,{children:"xfs_growfs"}),' tool instead. Other filesystems may have their own extension tools. And if the logical volume did not contain a filesystem but instead something like a "raw" database or an Oracle ASM volume, a yet another procedure would need to be applied.']})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["You can also use ",(0,t.jsx)(n.code,{children:"-r"})," flag while extending the lvm. This will automatically increase the filesystem space."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@centos ~]# lvextend -L +1G -r /dev/cs/root\n"})})]}),"\n",(0,t.jsx)(n.h3,{id:"format-the-newly-created-lv-new-lv",children:"Format the newly created LV new-lv"}),"\n",(0,t.jsx)(n.p,{children:"The LV in the above examples are formated as xfs but the newly created LV is not formatted yet hence it shows nothing in the above output. To format a disk use mkfs utility."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@centos ~]# mkfs.xfs /dev/cs/new-lv\nmeta-data=/dev/cs/new-lv isize=512    agcount=4, agsize=65280 blks\n         =                       sectsz=512   attr=2, projid32bit=1\n         =                       crc=1        finobt=1, sparse=1, rmapbt=0\n         =                       reflink=1    bigtime=0 inobtcount=0\ndata     =                       bsize=4096   blocks=261120, imaxpct=25\n         =                       sunit=0      swidth=0 blks\nnaming   =version 2              bsize=4096   ascii-ci=0, ftype=1\nlog      =internal log           bsize=4096   blocks=1566, version=2\n         =                       sectsz=512   sunit=0 blks, lazy-count=1\nrealtime =none                   extsz=4096   blocks=0, rtextents=0\n\n[root@centos ~]# lsblk -f\nNAME           FSTYPE      LABEL UUID                                   MOUNTPOINT\nsda\n\u251c\u2500sda1         xfs               d153ab14-0930-42cf-bea7-41da3b75f166   /boot\n\u2514\u2500sda2         LVM2_member       rnPx56-D2G4-vL2i-xBMT-b06u-sldD-ffm9Th\n  \u251c\u2500cs-root    xfs               20f510f9-31bf-43e8-9b57-b96c80ca82d7   /\n  \u2514\u2500cs-swap    swap              b09431d9-6c74-4715-87db-1841802ba5de   [SWAP]\nsdb\n\u2514\u2500sdb1         LVM2_member       hMd1nq-oAmf-MBVI-xPsH-bqFm-wXu3-YJ91Lf\n  \u251c\u2500cs-root    xfs               20f510f9-31bf-43e8-9b57-b96c80ca82d7   /\n  \u2514\u2500cs-new--lv xfs               fa5880d7-2624-4bc1-9d74-0bd49193fbad\nsr0\n"})}),"\n",(0,t.jsx)(n.h2,{id:"reducing-lv-size",children:"Reducing LV Size"}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Please go through full section before attempting anything."})}),"\n",(0,t.jsx)(n.p,{children:"To decrease the size of an LVM partition you must first decrease the file system within in order to avoid possible data corruption. As there is the potential for this to happen if you enter the command incorrectly, it is strongly recommended that you have a full backup of your data before proceeding."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["The first step will depend on if you're looking to shrink a ",(0,t.jsx)(n.strong,{children:"LVM root volume"}),", or ",(0,t.jsx)(n.strong,{children:"non-root volume."})]})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"shrinking-a-root-volume",children:"Shrinking a root volume"}),"\n",(0,t.jsxs)(n.p,{children:["The root volume would typically be the logical volume that is mounted to ",(0,t.jsx)(n.code,{children:"/"}),". You cannot unmount this to shrink it as it's in use by the running operating system meaning that you will have to first boot from a ",(0,t.jsx)(n.strong,{children:"Live CD"})," to complete this. Once booted into the Live CD, you may first need to run the below command to pick up LVM volumes, however this usually happens during boot so may not be required, if in doubt just run it."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'[root@centos ~]# vgchange -a y\n3 logical volume(s) in volume group "cs" now active\n'})}),"\n",(0,t.jsx)(n.h3,{id:"shrinking-a-non-root-volume",children:"Shrinking a non-root volume"}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively if the volume you are shrinking is a non-root volume, that is any other volume not mounted to the root of the file system, you can unmount the volume as shown below to proceed. Please note that when you unmount the volume the data will not be available, so you may need to schedule down time and stop running applications that use data from it prior to unmounting. Unmount by specifying either the logical volume or the location it's currently mounted to, in the below example we specify the logical volume which can be found in ",(0,t.jsx)(n.code,{children:"/dev/(vg-name)/(lv-name)"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@centos ~]# lsblk -f\nNAME           FSTYPE      LABEL UUID                                   MOUNTPOINT\nsda\n\u251c\u2500sda1         xfs               d153ab14-0930-42cf-bea7-41da3b75f166   /boot\n\u2514\u2500sda2         LVM2_member       rnPx56-D2G4-vL2i-xBMT-b06u-sldD-ffm9Th\n  \u251c\u2500cs-root    xfs               20f510f9-31bf-43e8-9b57-b96c80ca82d7   /\n  \u2514\u2500cs-swap    swap              b09431d9-6c74-4715-87db-1841802ba5de   [SWAP]\nsdb\n\u2514\u2500sdb1         LVM2_member       hMd1nq-oAmf-MBVI-xPsH-bqFm-wXu3-YJ91Lf\n  \u251c\u2500cs-root    xfs               20f510f9-31bf-43e8-9b57-b96c80ca82d7   /\n  \u2514\u2500cs-new--lv ext4              6cdb2bc5-9e63-4cd0-8048-50e06c48cacf\nsr0\n\n[root@centos ~]# umount /dev/cs/new-lv\n[root@centos ~]#\n\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"All following steps now apply to both a root or non-root volume."})}),"\n",(0,t.jsxs)(n.p,{children:["Before being able to attempt to shrink the size of an LVM volume, you must first run a file system check on it. If you don't do this, you will get an error message and will not be able to proceed. This is a required step as resizing a file system in a bad state could cause data corruption. The ",(0,t.jsx)(n.code,{children:"-f"})," flag makes the check run even if the file system appears clean, while -y assumes yes to all questions and will respond if asked to fix a problem."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@centos ~]# e2fsck /dev/cs/new-lv\ne2fsck 1.45.6 (20-Mar-2020)\n/dev/cs/new-lv: clean, 11/65280 files, 8843/261120 blocks\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["I have used ",(0,t.jsx)(n.code,{children:"e2fsck"})," since my filesystem is ext4 for ",(0,t.jsx)(n.code,{children:"cs-new--lv"}),". If it is xfs then ",(0,t.jsx)(n.code,{children:"xfs_repair"})," should be used."]})}),"\n",(0,t.jsx)(n.p,{children:"Next you need to shrink the file system, to be safe we're going to shrink the file system lower than what the logical volume will shrink to. This is because we don't want to accidentally shrink the logical volume to a size lower than the file system in the next step, as this can result in corruption and data loss. Don't worry, we'll reclaim the space at the end."}),"\n",(0,t.jsx)(n.p,{children:"The command below will shrink the file system so that it is only 4G in size total, note that what ever size you specify to shrink to you must have in free space within the file system otherwise you must first delete data."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@centos ~]# resize2fs /dev/cs/new-lv 500M\nresize2fs 1.45.6 (20-Mar-2020)\nResizing the filesystem on /dev/cs/new-lv to 128000 (4k) blocks.\nThe filesystem on /dev/cs/new-lv is now 128000 (4k) blocks long.\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Once the file system has been reduced, we can shrink the size of the logical volume with the lvreduce command. Reduce this to the size that you want the volume to be, as specified by the -L flag. Instead if you want to reduce by a specified size, simply put a ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"-"})})," in front of the size."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@centos ~]# lvreduce -L -500M /dev/cs/new-lv\n  WARNING: Reducing active logical volume to 520.00 MiB.\n  THIS MAY DESTROY YOUR DATA (filesystem etc.)\nDo you really want to reduce cs/new-lv? [y/n]: y\n  Size of logical volume cs/new-lv changed from 1020.00 MiB (255 extents) to 520.00 MiB (130 extents).\n  Logical volume cs/new-lv successfully resized.\n"})}),"\n",(0,t.jsx)(n.p,{children:"Once you execute the lvreduce command you will get a warning advising the size you have chosen to reduce to so use this as a chance to confirm you're shrinking the logical volume to a size that is NOT smaller than the size you previously shrunk the file system to. Once you have confirmed it's fine to proceed enter 'y' and press enter."}),"\n",(0,t.jsx)(n.p,{children:"After the logical volume has been lowered to the required size, run resize2fs on the volume as this will extend the file system to use all available space within the logical volume. This makes use of all remaining free space so that none is wasted from when we previously shrunk the file system to a lower size than the logical volume."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@centos ~]# resize2fs /dev/cs/new-lv\nresize2fs 1.45.6 (20-Mar-2020)\nResizing the filesystem on /dev/cs/new-lv to 133120 (4k) blocks.\nThe filesystem on /dev/cs/new-lv is now 133120 (4k) blocks long.\n"})}),"\n",(0,t.jsx)(n.p,{children:"Thus our new lvm is reduced by 500M. Verified."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"[root@centos ~]# lsblk\nNAME           MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT\nsda              8:0    0   12G  0 disk\n\u251c\u2500sda1           8:1    0    1G  0 part /boot\n\u2514\u2500sda2           8:2    0   11G  0 part\n  \u251c\u2500cs-root    253:0    0 10.8G  0 lvm  /\n  \u2514\u2500cs-swap    253:1    0  1.2G  0 lvm  [SWAP]\nsdb              8:16   0    4G  0 disk\n\u2514\u2500sdb1           8:17   0    2G  0 part\n  \u251c\u2500cs-root    253:0    0 10.8G  0 lvm  /\n  \u2514\u2500cs-new--lv 253:2    0  520M  0 lvm\nsr0             11:0    1 1024M  0 rom\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"important",children:[(0,t.jsxs)(n.p,{children:["I have used ext4 example while demonstrating ",(0,t.jsx)(n.code,{children:"lvreduce"}),". The reason is after an XFS file system is created, its size ",(0,t.jsx)(n.strong,{children:"cannot"})," be reduced. However, it can still be enlarged using the ",(0,t.jsx)(n.strong,{children:"xfs_growfs"})," command. Shrinking down an xfs filesystem would be a ",(0,t.jsx)(n.em,{children:"rare"})," case on most of the production systems but just in case you get this scenario, there is a tricky workaround."]}),(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"xfsdump"})," utility and take a snapshot of the LV. Create a new LV and format it as xfs and then use ",(0,t.jsx)(n.code,{children:"xfsrestore"})," command to restore it."]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>a});var t=s(7294);const o={},i=t.createContext(o);function a(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);