---
#== Layout
theme: default
background: https://cover.sli.dev # https://unsplash.com/collections/94734566/slidev
transition: slide-left #https://sli.dev/guide/animations#slide-transitions
mdc: true # https://sli.dev/guide/syntax#mdc-syntax
selectable: false
codeCopy: false
download: true
hideInToc: true

#== Code Highlighter
highlighter: shiki
lineNumbers: true

#== Dravings https://sli.dev/guide/drawing
drawings:
  persist: false

#== Export Configuration
# use export CLI options in camelCase format https://sli.dev/guide/exporting.html
export:
  format: pdf
  timeout: 30000
  dark: false
  withClicks: false

#== Slide Info
src: '../../pages/index.md'
title: "00 Úvodní hodina"
exportFilename: "00_uvodni_hodina"
titleTemplate: "PVA2 %s by Adam Fišer"
info: |
  ## PVA2 Programování a vývoj aplikací

  Určeno pouze pro výukové účely
  
  [Repository](https://github.com/OA-PVA2-Syllabus/pva2_prednasky) / [Prezentace](https://oa-pva2-syllabus.github.io/pva2_prednasky/)

  Created by [Adam Fišer](https://github.com/AdamFiser)
---
layout: default
---

<img src="/dev_head.jpg" />
# Programování a vývoj aplikací

---

#  Obsah

<Toc :columns="2" minDepth="1" maxDepth="1"></Toc>
---

# Lektor

## Adam Fišer
Software & solutions architect, analyst and occasional teacher with a passion for 🪴plants, IoT, FVE and economy

* Senior Software architect
* PKP CARGO INTERNATIONAL, a. s.
* IT Freelancer a příležitostný lektor



## Kontakt
* Teamsy
* Email: adam.fiser@wanex.cz
* Konzultace: místnost 217, kdykoli po domluvě
---

# Lektor ve zkratkách

* SDLC, OpenRUP, Prince 3, Agile, UML
* BI, BI Tibco, Jasper, Grafana, ETL
* DB servery (MSSQL, PostgreSQL, MySQL)
* SQL, PHP, Python, HTML, CSS, dev patterns, CD/CI, docker
* ERP, DMS, CMS, LMS
* SCM (Git, Github, svn)
* MDM Airwatch, SDN Unifi, IoT a HW obecně
* MS 365, Eset, GA, SEO, marketing a další
---

# Realizované projekty

* Projects for implementation of TAF TSI (Technical Specification for Interoperability relating to Telematics Applications for Freight Services)
* Payroll and HR systém / Mzdový a personální systém KS, Pema, Pers, Abra
* Operational and control systems of railway transport
* Container Terminal Management System
* System for familiarising employees with the directives
* Loco and wagon repair management system
* Document management system with workflows
* Customer relationship management
* Business intelligence and Multi-reporting system

<!--
Specializace HRM a rail logi systems
-->

---
layout: image-right
image: https://cover.sli.dev
---
# PVA2 Programování a vývoj aplikací


## Cíle předmětu 

* Čelit problémům a hledat řešení
* Formulovat problém a jeho řešení počítačovým program
* Získat zkušenost s programováním
* Osvojit si schopnost číst, psát a porozumět programům
* Získat programovací návyky jak programy psát


---
layout: two-cols-header
---
# Co nás čeká

::left::

## Známe z PVA1
* Co je algoritmus, Pojmy, Rozdělení
* Efektivita algoritmu
* Způsoby zápisu, Vývojové diagramy
* Strukturované programování
* Datové typy
* Řídící struktury (cykly, podmínky, funkce)
* Algoritmizace
  * Význam, prvky algoritmu

::right::

<v-click>

## Software development
* IDE, příprava prostředí
* SCM Git, GitHub a Markdown
* Softwarový vývoj
  * Životní cyklus SW
  * Metodiky a procesy vývoje
* Datová výměna
* Exceptions
* Datum a čas
* OOP (Třída, objekt, metody, property)
* Tkinter

</v-click>
---

# Organizace předmětu

* Výuka probíhá formou přednášek a cvičení
* Cvičení na sebe navazují
* Výukové materiály a úkoly jsou na Moodle: www.oa-opava.net
* Zdrojové kódy odevzdáváme výhradně přes GitHub
* Absence - Po návratu dopracovat chybějící cvičení


---

# Hodnocení

Známky získáváte za:

* Průběžná práce a aktivita v hodinách
* Vypracované cvičení a úkoly (Cvičení na sebe navazují)
* Testy
  * Není-li psán test v řádném termínu, po návratu do dvou vyučovacích hodin požádat o náhradní termín.
  * U delší objektivní absence dle domluvy.
  * Výukové materiály dovoleny, není-li uvedeno jinak.
  * Kopírování, opisování a AI nikoli.
  * Komu se nepovede známka, může si vylepšit opravou.
* Domluvě a vlastní iniciativě se meze nekladou.


---

# Hodnotící škála

| Rozsah  | Známka | Rozsah | Známka |
|---------|-------|--------|-------|
| 88-100% | 1     | 86-87% | 1-    |
| 73-85%  | 2     | 71-72% | 2-    |
| 56-70%  | 3     | 54-55% | 3-    |
| 40-53%  | 4     | 38-39% | 4-    |
| 0-37%   | 5     |        |       |


---

# Zdroje a literatura

* Hodiny, slidy, poznámky a vlastní poznámky
* Cvičení na GitHubu
* Edice CZ.NIC
  * Ponořme se do python(u) 3, Mark Pilgrim
  * PRO GIT, Scott Chacon
* O'Reilly – Learning Python
* https://www.umimeprogramovat.cz/programovani-programovani-v-pythonu
* https://www.youtube.com/cs50
* https://github.com/EbookFoundation/free-programming-books/blob/master/books/free-programming-books.md#python  
* https://www.codewars.com/

---
layout: image-right
image: /predstaveni.jpg
---


# Představujeme se 

* Kdo jsem?
* Kdo a co mě dovedlo k IT?
* Mám zkušenosti s programováním?
* Jaké mám očekávání od předmětu?
* Co mě na IT baví nebo naopak nebaví?
* Zajímavá informace o mě?
* Co chcete abych se o Vás dozvěděl?

---

# První kroky

Registrace kurzu na Moodle:

* Přejděte na www.oa-opava.net
* Zapište se do kurzu PVA2 2024/2025 - Programování a vývoj aplikací
  (sekce Informační technologie\Adam Fišer\)
* Nastavte si profilovou fotku.

---
src: '../../pages/thanku.md'
---