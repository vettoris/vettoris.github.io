# Sofie Vettori — personal website

A small static GitHub Pages website for Sofie Vettori. HTML and CSS provide the pages; JavaScript reads `data/biblio.bib` and renders publications in the browser. There is no build step.

## Local preview

```bash
python3 -m http.server 8000
```

Visit http://localhost:8000/. Serve over HTTP rather than opening the files directly: browsers normally block the BibTeX fetch on `file://`.

## Updates

- Edit `index.html` for the biography, research and background.
- Edit `data/biblio.bib` to add or update publications. Entries are sorted by year. Use `title`, `author`, `journal` or `booktitle`, `year`, and `doi` or `url`.
- The selected papers at the top of `publications.html` are curated manually.
- Edit the `typedPhrases` array in `js/site.js` to change the hero text.
- The hero portrait is `images/sofie-vettori.jpg`, sourced from Sofie's ETH profile. To replace it, update that file or its path in `index.html`.

## GitHub Pages

The site is intended for the root of the `main` branch in `vettoris/vettoris.github.io`. After reviewing the changes, commit and push them, then choose **Deploy from a branch**, `main` and `/ (root)` in the repository's Pages settings if necessary. The default URL is https://vettoris.github.io/.
