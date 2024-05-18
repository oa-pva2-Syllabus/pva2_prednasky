---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# apply any unocss classes to the current slide
class: text-white
hideInToc: true
fonts:

  mono: "Fira Code"
author: "AdamFiser"
authorUrl: https://github.com/AdamFiser
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true

# export options
# use export CLI options in camelCase format
# Learn more: https://sli.dev/guide/exporting.html
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false
# controls whether texts in slides are selectable
selectable: false
codeCopy: false
download: true

exportFilename: "01_uvod_do_python"
titleTemplate: "PVA2 %s by Adam Fišer"
title: "01 Úvod do Python"
info: |
  ## PVA2 Programování a vývoj aplikací
  #### 01 {title}

  Určeno pouze pro výukové účely

  Created by [Adam Fišer](https://github.com/AdamFiser)
src: ./pages/header.md
---
layout: default
---

#  Obsah

<Toc :columns="2" minDepth="1" maxDepth="1"></Toc>

---

# Úvod do Python

* Nenaučíme se dost na to, abyste mohli začít přidávat speciální efekty do dalšího velkého filmu o superhrdinech.
* Naučíte se dost na to, abyste mohli začít řešit problémy reálného světa pomocí kódu.
* NEBO se prostě začít bavit


---

# Historie a základní informace

* První zmínky v 1991
* Autor: Guido van Rossum, Math institute Stiching, Holand
* Vychází z jazyka ABC
* Název: Monty Python's Flying Circus
* Operační systémy: Linux, Windows, macOS a další
* Web: python.org
* Python 2 vs Python 3

---

# K čemu se používá Python

* vývoj webových stránek (backend tj. na straně serveru)
* vývoj softwaru
* matematika
* systémové skriptování
* Datové analýzy
* IoT
* Umělá inteligence

---

# IDE
Integrated Development Environment

* PyCharm Community https://www.jetbrains.com/pycharm/
* Visual Studio Code Extension: Python, pylint
* Visual Studio Python Tools for Visual Studio (součást instalátoru)

---

# PyCharm
## Nastavení IDE
praktická ukázka

---

# Na každém znaku záleží
## Česká klávesnice

<img src="/images/klavesnice_cs.png" />

---

## Anglická klávesnice
<img src="/images/klavesnice_en.png" />

---

# První program
```python
print("Hello World")
```
---

# Odsazení
* Odsazení se týká mezer na začátku řádku kódu.
* Zatímco v jiných programovacích jazycích slouží odsazení v kódu pouze ke zlepšení čitelnosti, v jazyce Python je odsazení velmi důležité.
* Odsazení používá k označení bloku kódu.
* Počet mezer záleží na programátorovi, ale musí být minimálně jedna. Standardně 4, resp. tabulátor
    
```python
if 5 > 2:
    print("Pět je větší než dva!")
```

---

# Osvojte si správné návyky ihned!

* Komentáře v kódu pomáhají vám nebo někomu jinému porozumět
  * co váš program dělá
  * Co dělá konkrétní řádek nebo část kódu
  * Proč jste se rozhodli udělat něco určitým způsobem
  * Cokoli, co by mohlo být užitečné vědět, pokud se na kód budu později dívat a snažit se ho pochopit!


---
layout: two-cols-header
---

# Komentáře
* Komentáře slouží pro dokumentování kódu
* Začínají znakem <kbd>#</kbd> (sharp)
* Pravý <kbd>AltGr</kbd> + <kbd>x</kbd>

::left::

## Jednořádkový komentář
* <kbd>#</kbd> před každým komentářem

```python
# Komentář na jeden řádek
# Druhý řádek s komentářem
var = 5 # Komentář za kód
```

::right::

## Víceřádkový komentář 
* na začátku a konci tři dvojité uvozovky <kbd>"""</kbd>
```python
"""
Komentář
rozepsaný na
více
řádků
Hello World
"""
```

