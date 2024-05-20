# Přednášky předmětu PVA2

## Obsah
| Přednáška | Odkaz na prezentaci |
|-----------|----------------------|
| 01. Úvod do Python | [Odkaz](./prednasky/01_uvod_do_python.md) |
2. [Úvod do Python](./prednasky/01_uvod_do_python.md)


## Spouštění pro vývoj

```shell
npm install
npm run dev Slides_my_slides.md
npm run dev # pro spuštění všech prezentací
```

Navštívit: <http://localhost:3030>

## Deploy do GitHub Pages

### Poprvé

Pro první deployment:

  1. GitHub Repo > Settings > GitHub Pages
  2. Nastavit **Source** na `gh-pages` branch

### Format Slide Deck

```shell
npm run format Slides_my_slides.md

Příklad:
npm run format Slides_Book_ConnectingParagraphs.md
```

### Upload Slidev via GitHub Actions
Nasazení se odesílají pomocí commit zpráv:

```bash
git add SLIDES_NAME.md

git commit -m "Upload: SLIDES_NAME"

git push
```

## Příkazy

| Příkaz                          | Účel                                 |
|---------------------------------|--------------------------------------|
| `npm run format SLIDES_NAME.md` | Formátování souboru markdown         |
| `npm run build SLIDES_NAME.md`  | Sestavení pro produkční SPA          |
| `npm run dev SLIDES_NAME.md`    | Start dev server                     |
| `npm run export SLIDES_NAME.md` | Exportovat prezentace do formátu pdf |

## Zdroje k vytvíření prezentací s Slidev

* [Slidev documentations](https://sli.dev/)
* [fguisso/talks Repo](https://github.com/fguisso/talks)
* [antfu/talks Repo](https://github.com/antfu/talks)
* [ahandsel/debugging_log/SliDev_LightVue](https://github.com/ahandsel/debugging_log/tree/master/SliDev_LightVue)
* [npx slidev --help](https://github.com/ahandsel/debugging_log/blob/master/SliDev_LightVue/SliDev_Basic/SliDev_Help.md#npx-slidev---help)

## Additional Notes

Image Sizes

* Slide backgrounds: 1600 px by 900 px
* Vertical thin slots: 400 px by 900 px


## Pomocnici a inspirace
- `slidev --entry slides\01_uvod_do_python.md` 
- `monochrome icons`

