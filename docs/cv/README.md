# CV

Fuente editable de `public/cv-es.pdf` y `public/cv-en.pdf`. Reproduce el
diseño del CV original: tamaño Carta, Arial, una sola página.

Para cambiar algo, editá `cv-es.html` o `cv-en.html` (y `cv.css` si es de
formato) y regenerá los PDF con Chrome desde la raíz del repo:

```bash
for l in es en; do "/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf="public/cv-$l.pdf" "file:///$PWD/docs/cv/cv-$l.html"; done
```

Si un cambio de texto agrega líneas, revisá que el PDF siga en una sola página.
