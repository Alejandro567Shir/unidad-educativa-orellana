# Unidad Educativa Francisco de Orellana

Página web institucional de **Genesis Shiguango** para Diseño y Desarrollo Web, semanas 10 y 11. El sitio presenta la oferta académica de la Unidad Educativa Francisco de Orellana en El Coca, Ecuador. Usa HTML, CSS y JavaScript sin dependencias de instalación.

## Vista previa

Abre `index.html` en un navegador o ejecuta el siguiente comando en la raíz del repositorio si tienes Python instalado.

```sh
python -m http.server 8000
```

Luego visita [http://localhost:8000](http://localhost:8000).

## Publicación en GitHub Pages

1. Integra el Pull Request en `main`.
2. En GitHub, abre **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Selecciona `main` y `/(root)`, guarda y espera a que el despliegue termine en **Actions**.
5. Abre la dirección que muestra **Settings → Pages**. La URL esperada para este repositorio es `https://alejandro567shir.github.io/unidad-educativa-orellana/`.

[Documentación de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Actualización de contenidos

- **Páginas y navegación.** Cada sección tiene su propio HTML. Los encabezados, las barras de servicios y los pies de página están en el HTML de cada página para que la navegación esté disponible incluso con JavaScript desactivado.
- **Noticias.** Edita la lista en `js/noticias.js`. Usa identificadores únicos, fechas verificadas en formato `AAAA-MM-DD` y fotografías autorizadas en `assets/images/`. Marca como `featured` las noticias que aparecerán en el inicio. Las publicaciones actuales están marcadas como ejemplos académicos.
- **Formularios.** La revisión de matrícula y contacto ocurre en el navegador. Los formularios demostrativos no envían ni almacenan datos. El mapa carga Google Maps al pulsar el botón y muestra la ciudad de El Coca.
- **Datos institucionales por confirmar.** Sustituye el emblema referencial por el logotipo autorizado. Verifica misión, visión, historia, autoridades, organigrama, docentes, currículo, inventario de talleres, prácticas, requisitos y calendario de matrícula, reglamento, dirección exacta, teléfono, correo, plataformas y redes sociales antes de incorporar datos oficiales.
- **Dominio y correo.** La guía plantea `uefranciscodeorellana.edu.ec` como dominio principal, `uefranciscodeorellana.com` como posible redirección y las cuentas `info@` y `secretaria@` en el dominio principal. Son propuestas pendientes de confirmar y configurar.

## Créditos

Las fotografías educativas son referenciales y se usan bajo la [licencia de Pexels](https://www.pexels.com/license/).

- `comunidad.jpg` — [Norma Mortenson](https://www.pexels.com/photo/students-studying-together-8457292/).
- `ciencias.jpg` — [MART PRODUCTION](https://www.pexels.com/photo/two-girls-studying-inside-the-laboratory-8471941/).
- `informatica.jpg` — [Михаил Крамор](https://www.pexels.com/photo/students-studying-in-computer-lab-setting-18265837/).
- `encuentro.jpg` — [mickael ange konan](https://www.pexels.com/photo/engaged-students-in-a-classroom-setting-34526416/).
- `yasuni.jpg` — [Amazonía Ecuador](https://commons.wikimedia.org/wiki/File:Amazon%C3%ADa_Ecuador.jpg), por ALAI - Agencia Latinoamericana de Información, bajo [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Versión redimensionada y comprimida para la web.
- DM Sans se distribuye con la [licencia SIL Open Font License](assets/fonts/OFL-DM-Sans.txt).
