---
sidebar_position: 4
slug: /brace-expansion
title: "Brace Expansions"
---

---
## Introduction

Brace expansion is a mechanism by which arbitrary strings may be generated. The specified strings are used to generate all possible combinations with the optional surrounding prefixes and suffixes. Usually it's used to generate mass-arguments for a command, that follows a specific naming-scheme.

Patterns to be brace expanded take the form of an optional **preamble**, followed by either a series of comma-separated strings or a sequence expression between a pair of braces, followed by an optional **postscript**. The preamble is prefixed to each string contained within the braces, and the postscript is then appended to each resulting string, expanding left to right.

```bash
[thor@marvel-studios ~]$ echo {a,b}c
ac bc
```
:::note
The results of each expanded string are **NOT** sorted; left to right order is preserved.
:::

Without the optional prefix and suffix strings, the result is just a space-separated list of the given strings.
```bash
[thor@marvel-studios ~]$ echo {I,want,my,hammer}
I want my hammer
```
With prefix or suffix strings, the result is a space-separated list of **all possible combinations** of prefix or suffix specified strings:

```bash
[thor@marvel-studios ~]$ echo @{I,want,my,hammer}$
@I$ @want$ @my$ @hammer$
```

:::info
A correctly-formed brace expansion must contain **unquoted** opening and closing **braces**, and at least one unquoted comma or a valid sequence expression. Any incorrectly formed brace expansion is left unchanged.
:::

Now this can be really useful in some cases like for loop, making nested directory structures and pattern matching. 

Brace expansion using ranges is written giving the startpoint and the endpoint of the range. This is a **"sequence expression"**. The sequences can be of two types

- integers (optionally zero padded, optionally with a given increment)
- characters
```bash
[thor@marvel-studios ~]$ echo {1..10}
1 2 3 4 5 6 7 8 9 10
[thor@marvel-studios ~]$ echo {a..z}
a b c d e f g h i j k l m n o p q r s t u v w x y z
[thor@marvel-studios ~]$ echo {A..Z}
A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

```

But if you mix them together like 
```bash
[thor@marvel-studios ~]$ echo {1..z}
{1..z}
```
It doesn't work.

## Nested braces
Braces can be nested as well
```bash
[thor@marvel-studios ~]$  echo {A..Z}{0..9}
A0 A1 A2 A3 A4 A5 A6 A7 A8 A9 B0 B1 B2 B3 B4 B5 B6 B7 B8 B9 C0 C1 C2 C3 C4 C5 C6
C7 C8 C9 D0 D1 D2 D3 D4 D5 D6 D7 D8 D9 E0 E1 E2 E3 E4 E5 E6 E7 E8 E9 F0 F1 F2 F3
F4 F5 F6 F7 F8 F9 G0 G1 G2 G3 G4 G5 G6 G7 G8 G9 H0 H1 H2 H3 H4 H5 H6 H7 H8 H9 I0
I1 I2 I3 I4 I5 I6 I7 I8 I9 J0 J1 J2 J3 J4 J5 J6 J7 J8 J9 K0 K1 K2 K3 K4 K5 K6 K7
K8 K9 L0 L1 L2 L3 L4 L5 L6 L7 L8 L9 M0 M1 M2 M3 M4 M5 M6 M7 M8 M9 N0 N1 N2 N3 N4
N5 N6 N7 N8 N9 O0 O1 O2 O3 O4 O5 O6 O7 O8 O9 P0 P1 P2 P3 P4 P5 P6 P7 P8 P9 Q0 Q1
Q2 Q3 Q4 Q5 Q6 Q7 Q8 Q9 R0 R1 R2 R3 R4 R5 R6 R7 R8 R9 S0 S1 S2 S3 S4 S5 S6 S7 S8
S9 T0 T1 T2 T3 T4 T5 T6 T7 T8 T9 U0 U1 U2 U3 U4 U5 U6 U7 U8 U9 V0 V1 V2 V3 V4 V5
V6 V7 V8 V9 W0 W1 W2 W3 W4 W5 W6 W7 W8 W9 X0 X1 X2 X3 X4 X5 X6 X7 X8 X9 Y0 Y1 Y2
Y3 Y4 Y5 Y6 Y7 Y8 Y9 Z0 Z1 Z2 Z3 Z4 Z5 Z6 Z7 Z8 Z9
```
This can probably solve a lot of time in typing in some cases.

:::tip
For generating decimal numbers using expansion use something like this

```bash
[thor@marvel-studios ~]$ echo 1.{0..9}
1.0 1.1 1.2 1.3 1.4 1.5 1.6 1.7 1.8 1.9
```
:::

## mkdir use case
Brace expansion can be so handy in many cases. One of the use case is 
```bash
[thor@marvel-studios ~]$ mkdir -p {outside,outside2}/{inside,inside2}/{room1,room2,room3}
[thor@marvel-studios ~]$ tree
.
├── brace.sh
├── hello.sh
├── outside
│   ├── inside
│   │   ├── room1
│   │   ├── room2
│   │   └── room3
│   └── inside2
│       ├── room1
│       ├── room2
│       └── room3
├── outside2
│   ├── inside
│   │   ├── room1
│   │   ├── room2
│   │   └── room3
│   └── inside2
│       ├── room1
│       ├── room2
│       └── room3
├── pipe.sh
├── sample.sh
├── set.sh
└── variable.sh

18 directories, 6 files
```

:::caution
**DO NOT KEEP SPACE IN BETWEEN VALUES**

```bash
[thor@marvel-studios ~]$ echo {a, b}d  # Note space between a,<space>b
{a, b}d
[thor@marvel-studios ~]$ echo {a,b}d
ad bd
```
:::

## Increment values
Passing an extra field at the end acts as an increment or decrement value
```bash
[thor@marvel-studios ~]$ echo {1..10..2}
1 3 5 7 9
[thor@marvel-studios ~]$ echo {10..1..2}
10 8 6 4 2
```
This also works with characters
```bash
[thor@marvel-studios ~]$  echo {a..z..3}
a d g j m p s v y
```