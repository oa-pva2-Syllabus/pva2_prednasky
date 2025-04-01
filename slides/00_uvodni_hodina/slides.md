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

* Výhradně jen Teamsy
* přes bakaláře **nepište**
* Email: adam.fiser@wanex.cz
* Tel: +420 777 052 248
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

Role: Projektový manažer, architekt, analytik a občasný vývojář

- **Systémy a procesy pro DevOps**  
  *Vybudování odd a zavedení procesů a systémů pro vývoj a nasazení aplikací.* Docker, Elastic, Sentry, Git/GitHub, Grafana, ... 

- **TAF TSI Implementation**  
  *Implementace TAF TSI (Technická specifikace pro interoperabilitu týkající se telematických aplikací pro nákladní dopravu.).*

- **Mzdový a personální systémy**  
  *Implementace systémů KS, Pema, Pers, Abra pro správu mezd a personálních dat.*

- **Business Intelligence a reporting**  
  *Systémy pro analýzu a výměny dat, automatizace reportů*

- **Řídicí systémy železniční dopravy**  
  *Vývoj operačních a kontrolních systémů pro železniční dopravu.* LWP, Eval, isdl, ...

- **Customer Relationship Management (CRM)**  
  *Systémy pro správu vztahů se zákazníky a kalkulační systém.* kaplan, plusKlub

- **Systém správy dokumentů**  
  *Implementace DMS pro správu smluv, faktur, atd.* Sharepoint, Nintex, Treeinfo, Alfresco

- **Systém pro seznámení s předpisy**  
  *Nástroj pro obeznámení zaměstnanců s interními směrnicemi a předpisy.* Doku, Manes, Alfresco

- **Systém správy oprav**  
  *Řízení oprav a údržby kolejových vozidel.*

- **Container Terminal Management System**  
  *Řízení provozu kontejnerových terminálů.* Konti

- **Mobilní terminály a MDM**  
  *Aplikace pro řízení personálu v terénu* Workspace One, Airwatch, MobiDriver

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
* Cvičení na sebe obsahově anebo výukově navazují
* Výukové materiály a úkoly jsou na Moodle: www.oa-opava.net
* Zdrojové kódy odevzdáváme výhradně přes GitHub
* Absence - Po návratu dopracovat chybějící cvičení


---

# Hodnocení a pravidla

Známky získáváte za:

- Průběžná práce a aktivita v hodinách
- Vypracované cvičení a úkoly (Cvičení na sebe navazují)
- Testy
  - Výukové materiály dovoleny, není-li uvedeno jinak.
  - Kopírování, opisování a AI nikoli.
  - Každý zahájený test znamená jeho známkování (ikdyž není určen pro Vás).
- Absance testu
  - Není-li psán test v řádném termínu, po návratu do dvou vyučovacích hodin požádat o náhradní termín.
  - Žádáme minimálně 2 pracovní dny předem.
  - U delší objektivní absence dle domluvy.
  - Svou klasifikaci si hlídáte sami.
- Opravy a zlepšení známky 
  - Komu se nepovede známka, může si vylepšit opravou. (původní známka zůstává)
  - Domluvě a vlastní iniciativě se meze nekladou.

---

# Pravidla

- Jídlo a pití máte povoleno, ale v rámci mezí slušného chování
- Na toaletu v průběhu hodin, neptáme se, oznámíme, ale vždy jen jednotlivě
- Všechny židle budou vždy dole
- Na konci hodiny, židle nahoru, zavřená okna - odpovídá služba.

---

# Hodnotící škála

| Rozsah  | Známka | Rozsah | Známka |
|---------|-------|--------|-------|
| 88-100% | 1     | 86-87% | 1-    |
| 73-85%  | 2     | 71-72% | 2-    |
| 56-70%  | 3     | 54-55% | 3-    |
| 40-53%  | 4     | 38-39% | 4-    |
| 0-37%   | 5     |        |       |

Celkové hodnocení
86–100 %: Výborný kód, plně funkční, čitelný, efektivní a bezpečný.
71–85 %: Velmi dobrý kód, drobné chyby nebo nedostatky v čitelnosti či optimalizaci.
54–70 %: Průměrný kód, obsahuje chyby nebo má špatnou strukturu.
38–53 %: Nedokončený nebo špatně napsaný kód, neplní zadání.
0–37 %: Neodevzdáno nebo zcela nefunkční řešení.

---

# Kritéria hodnocení

1. Technická správnost:
- Správná syntaxe
- Funkčnost všech částí kódu
- Bez zbytečných částí kódu

2. Splnění zadání
- Implementace všech požadovaných funkcionalit

3. Styl kódu:
- Přehledné odsazení
- Použití komentářů

4. Bonusové body:
- Originální a efektivní řešení

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