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
title: "Konstruktor"
exportFilename: "41_konstruktor"
titleTemplate: "PVA2 %s by Adam Fišer"
info: |
  ## PVA2 Programování a vývoj aplikací

  Určeno pouze pro výukové účely

  [Repository](https://github.com/OA-PVA2-Syllabus/pva2_prednasky) / [Prezentace](https://oa-pva2-syllabus.github.io/pva2_prednasky/)

  Created by [Adam Fišer](https://github.com/AdamFiser)
---
layout: default
---

#  Obsah

<Toc :columns="2" minDepth="1" maxDepth="1"></Toc>
---

# Co jsou modifikátory přístupnosti

- Modifikátory přístupnosti jsou klíčová slova, která určují, kdo může přistupovat k danému atributu nebo metodě.
- Python má 4 modifikátory přístupnosti:
  - `public` - veřejný, přístupný zvenčí
  - `protected` - chráněný, přístupný pouze z třídy a dědičných tříd
  - `private` - privátní, přístupný pouze z třídy
  - `static` - statický, přístupný bez vytvoření instance třídy

---

# Modifikátory přístupnosti v Pythonu

- Python nemá striktní modifikátory přístupnosti jako jiné jazyky (např. Java).
- Modifikátory přístupnosti jsou pouze konvencí.
- Python používá tzv. "name mangling" pro privátní atributy.
- Modifikátory přístupnosti se zapisují pomocí podtržítek:
  - `public` - `atribut`
  - `protected` - `_atribut`
  - `private` - `__atribut`
  - `static` - `atribut`

---

# Public

- Veřejný modifikátor přístupnosti.
- Atribut nebo metoda je přístupná zvenčí.
- Přístupná z jakékoliv části programu.
- Syntaxe: `atribut` nebo `metoda()`

```python
class Auto:
    znacka = "Škoda"
    def vypis_znacku(self):
        print(self.znacka)
```

---

# Protected

- Chráněný modifikátor přístupnosti.
- Atribut nebo metoda je přístupná pouze z třídy a dědičných tříd.
- Zapisuje se pomocí prefixu `_` před začátkem názvu atributu nebo metody.
- Syntaxe: `_atribut` nebo `_metoda()`

```python
class Auto:
    _model = "Octavia"
    def _vypis_model(self):
        print(self._model)
```

---

# Private

- Privátní modifikátor přístupnosti.
- Atribut nebo metoda je přístupná pouze z třídy.
- Zapisuje se pomocí prefixu `__` před začátkem názvu atributu nebo metody.
- Syntaxe: `__atribut` nebo `__metoda()`

```python
class Auto:
    __vin = "1234567890"
    def __vypis_vin(self):
        print(self.__vin)
```

---
layout: image-right
image: https://cover.sli.dev
---

# Getter a Setter

---

# Gettery a Settery

- Gettery a settery jsou metody třídy, které slouží k čtení a zápisu hodnot atributů.
- Výhoda je možnost kontroly hodnot při zápisu.
- Čitelnější kód a snadnější údržba.
- Gettery a settery se používají minimálně pro privátní atributy.
- Způsob zápisu závisí na konvencích v Python např
  - Zapisují se s prefixem `get_` a `set_` před název atributu.
  - V python alternativně lze použít dekorátory `@property` a `@atribut.setter`.

---

# Příklad

```python
class Osoba:
    def __init__(self):
        self._vek = 0

    def get_vek(self):
        return self._vek

    # Setter
    def set_vek(self, vek):
        if vek < 18:
            raise ValueError("Omlouváme se, že váš věk je nižší než kritéria způsobilosti.")
        self._vek = vek    
```

```python
otakar = Osoba()
otakar.set_vek(19) # Volání setteru nikoli atributu
print(otakar.get_vek()) # Volání getteru nikoli atributu
```

---

# Alternativní zápis s dekorátory

```python
class Osoba:
    def __init__(self):
        self._vek = 0

    @property
    def vek(self):
        return self._vek

    @vek.setter
    def vek(self, vek):
        if vek < 18:
            raise ValueError("Omlouváme se, že váš věk je nižší než kritéria způsobilosti.")
        self._vek = vek    
```

```python
otakar = Osoba()
otakar.vek = 19 # Volání setteru nikoli atributu
print(otakar.vek) # Volání getteru nikoli atributu
```



---
src: '../../pages/thanku.md'
---