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
title: "08 Funkce"
exportFilename: "08_funkce"
titleTemplate: "PVA2 %s by Adam Fišer"
info: |
  ## PVA2 Programování a vývoj aplikací

  Určeno pouze pro výukové účely

  [Repository](https://github.com/OA-PVA2-Syllabus/prednasky) / [Prezentace](https://oa-pva2-syllabus.github.io/prednasky/)

  Created by [Adam Fišer](https://github.com/AdamFiser)
---
layout: default
---

#  Obsah

<Toc :columns="2" minDepth="1" maxDepth="1"></Toc>
---

# Využití funkce

- Funkce jsou vhodný způsob jak rozdělit kód do užitečných bloků.
- Zlepšuje přehlednost a čitelnost zdrojového kódu.
- Umožňuje opakovaně využít část kódu.
- Umožňuje předávat parametry a získávat návratové hodnoty.

---

# Deklarace funkce

- Pro definici funkce se využitá klíčové slovo `def`,
- následuje název funkce a v závorce seznam formálních parametrů. Parametry mohou být i prázdné.
- Deklarace je ukončena dvojtečkou.
- Příkazy tvoří tělo funkce, začínají na dalším řádku a musí být odsazeny.

```python
# funkce s názvem mojeFunkce
def mojeFunkce():
    # Kód musí být odsazen
    return "Ahoj"
```

---

# Návratová hodnota

- Funkce může vracet hodnotu pomocí klíčového slova `return`.
- Pokud funkce nemá `return`, vrací `None`.
- Po `return` se může vyskytovat pouze jedna hodnota.
- Po `return` se funkce ukončí a další příkazy se nevykonají.
- Vrácenou hodnotu můžete použít k přiřazení do proměnné nebo ji jen vypsat.

```python
# funkce s názvem mojeFunkce
def mojeFunkce():
    # Kód musí být odsazen
    return "Ahoj"
    print("Tento řádek se nevykoná")
```

```python
def sumTwoValues(a, b):
  return a + b

# Do proměnné c přiřazen výsledek funkce sumTwoValues
c = sumTwoValues(3, 12) 
```

---

# Volání funkce

- Funkce se volá pomocí jejího názvu a závorek.
- Pokud funkce přijímá parametry, je nutné je předat v závorkách.
- Pokud funkce vrací hodnotu, je možné ji uložit do proměnné.

```python
# funkce s názvem mojeFunkce
def mojeFunkce():
    # Kód musí být odsazen
    return "Ahoj"
```

```python
# Volání funkce přes název
mojeFunkce() # Volání funkce

var = mojeFunkce() # Volání funkce, výsledek uložen do proměnné var

print( mojeFunkce() ) # Vypíše Ahoj
```

---

# Volání funkce

```python
# funkce s názvem mojeFunkce
def mojeFunkce():
    # Kód musí být odsazen
    return "Ahoj"
```

```python
# zavoláme funkci pětkrát
for i in range(5):
    mojeFunkce() 
```

---

# Parametry funkce

- Parametry jsou hodnoty, které funkce přijímá a jsou nutné pro vykonání funkce.
- Parametry jsou uvedeny v závorce a odděleny čárkou.
- Parametry mají pouze lokální platnost.
- Můžeme nastavit výchozí hodnotu parametru přiřazení hodnoty za `=`

```python
def pozdrav(jmeno):
    return "Ahoj " + jmeno
    
print ( pozdrav("Adam") ) # Ahoj Adam
```

---

# Parametry funkce

```python
def mojeFunkce(parameter, secondParam):
  return parameter + " " + secondParam

mojeFunkce("argument") # vrátí chybu TypeError
```

- Ve výchozím nastavení musí být funkce volána se správným počtem parametrů. Pokud funkce očekává 2 parametry, musíte ji zavolat se 2 argumenty.
- nebo můžeme využít výchozí hodnotu parametru

---

# Výchozí hodnota parametru

- Můžeme nastavit výchozí hodnotu parametru přiřazení hodnoty za `=`
- Pokud není parametr předán, použije se výchozí hodnota.
- Parametry se přebírají v pořadí, není-li určeno jinak.



```python
# Výchozí hodnota parametru
def pozdrav(jmeno = "UN"):
    return "Ahoj " + jmeno
    
print ( pozdrav() ) # Ahoj UN
```

```python
def multiply(a, b=2, c=1):
    return a * b + c

multiply(3, 14, 10) # Všechny argumenty

multiply(3) # Jeden povinný argument a

multiply(3, 14) # Předány dva argumenty a, b
multiply(3, c=10) # Předány dva argumenty a, c
```

---

# Klíčová slova jako argumenty

- Pokud chcete předat argumenty do funkce, ale nechcete si pamatovat pořadí, můžete použít klíčová slova `kwArg = hodnota`
- Klíčová slova musí být uvedena po pozicích argumentů.
- Klíčová slova mohou být v libovolném pořadí.

```python
def cat(food, state='stále hladová', action='mňau'):
    print("-- Tahle kočka by nechtěla", action, end=' ')
    print("kdybyste ji dali", food)
    print("-- krásná srst", breed)
    print("-- To je", state, "!")
    
    
cat('kuře')                         # 1 argument dle pozice
cat(food='kuře')                    # 1 argument klíčové slovo
cat(food='rybu', action='kousat')   # 2 kwarg
cat(action='kousat', food='rybu')   # 2 kwarg
cat('beef', 'šťastná', 'syčet')     # 3 poziční argument
cat('objetí', state='vrní')         # 1 poziční, 1 klíčové slovo
```

---

# Side effect

- Funkce je bez tzv. **vedlejších efektů** (side effect), tj. používá pouze své parametry a nepoužívá žádné proměnné definované mimo ni (např. vstup od uživatele). Stejně tak mimo návratové hodnoty nijak neovlivňuje běh programu. 
- Funkci bez vedlejších efektů se říká čistá funkce (pure function). Její výhodou je, že pro stejný vstup vždy vrací stejný výstup, což například usnadňuje testování nebo hledání chyby.

```python
# Špinavá funkce
# čte proměnnou "zvenku". 
# Může tedy v různých situacích vracet různé výsledky.

exchange_rate = 26
def convert_to_euro(crown):
    return crown * exchange_rate

```

```python
# Takto uvedená funkce je již čistou funkcí.
def convert_to_euro(crown, exchange_rate):
    return crown * exchange_rate
```

---

# Rekurze

- Rekurze je technika, kdy funkce volá sama sebe.
- Rekurze je užitečná pro řešení problémů, které lze rozdělit na menší části.
- Rekurze může být náročná na paměť, pokud je hloubka rekurze příliš velká.
- Rekurze musí mít podmínku ukončení, aby se zabránilo nekonečnému volání.

```python
def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n-1)
```

---
src: '../../pages/thanku.md'
---