"use strict";

// Para añadir una publicación, usa un id único y una imagen de assets/images.
// Escribe una fecha verificada en formato AAAA-MM-DD o deja null.
const noticias = [
  {
    id: "informatica-y-desarrollo",
    category: "Casas abiertas",
    title: "Proyectos de Informática y Desarrollo Tecnológico",
    summary: "Una propuesta de casa abierta para presentar páginas web, aplicaciones y soluciones técnicas.",
    image: "informatica.jpg",
    imageAlt: "Estudiantes trabajan con un portátil en un laboratorio de computación",
    date: null,
    featured: true,
    example: true,
    sections: [
      {
        heading: "Una muestra de proyectos",
        text: "En una casa abierta de ejemplo, cada equipo podría presentar una solución digital para una necesidad de la comunidad. La demostración incluiría el problema, un recorrido por la interfaz y un resumen de las pruebas realizadas.",
      },
      {
        heading: "Lo que compartirían los equipos",
        text: "Cada grupo prepararía una ficha con el objetivo, las herramientas utilizadas y una mejora pendiente. Los visitantes podrían probar el proyecto y dejar sugerencias para una segunda versión.",
      },
    ],
  },
  {
    id: "proyectos-cientificos",
    category: "Actividades académicas",
    title: "Actividades y Proyectos Científicos",
    summary: "Ideas de investigación escolar para observar, medir y explicar fenómenos del entorno.",
    image: "ciencias.jpg",
    imageAlt: "Estudiantes examinan una muestra con un microscopio",
    date: null,
    featured: true,
    example: true,
    sections: [
      {
        heading: "Una pregunta para empezar",
        text: "Una actividad de ejemplo podría comparar la germinación de semillas en condiciones distintas. Los equipos formularían una pregunta, definirían una variable y registrarían los cambios en una tabla.",
      },
      {
        heading: "Presentar los resultados",
        text: "Un póster resumiría el método, mostraría los datos e incluiría las limitaciones del ejercicio. Las conclusiones se discutirían con los compañeros para identificar otras preguntas de investigación.",
      },
    ],
  },
  {
    id: "participacion-estudiantil",
    category: "Logros estudiantiles",
    title: "Participación Estudiantil en Eventos Académicos",
    summary: "Un ejemplo de cómo documentar el trabajo de un equipo en un encuentro estudiantil.",
    image: "encuentro.jpg",
    imageAlt: "Estudiantes colaboran durante una actividad en el aula",
    date: null,
    featured: true,
    example: true,
    sections: [
      {
        heading: "Preparar una presentación",
        text: "Para un encuentro de ejemplo, los equipos podrían preparar una explicación breve de su proyecto y asignar responsabilidades para la demostración y la sesión de preguntas.",
      },
      {
        heading: "Documentar la experiencia",
        text: "Una publicación sobre un evento confirmado podría reunir el propósito del encuentro, el trabajo presentado y los aprendizajes del equipo, con información e imágenes autorizadas.",
      },
    ],
  },
];

const dateFormat = new Intl.DateTimeFormat("es-EC", { dateStyle: "long", timeZone: "UTC" });

function setDate(element, date) {
  element.dateTime = date;
  element.textContent = dateFormat.format(new Date(date + "T00:00:00Z"));
}

function createElement(tag, className, value) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (value) element.textContent = value;
  return element;
}

function newsCard(post) {
  const card = createElement("article", "card");
  const image = createElement("img", "card-photo");
  image.src = "assets/images/" + post.image;
  image.alt = post.imageAlt;
  image.loading = "lazy";
  image.decoding = "async";

  const content = createElement("div", "card-content");
  const label = post.example ? post.category + " · Ejemplo académico" : post.category;
  content.append(createElement("span", "tag tag--neutral", label));
  if (post.date) {
    const time = createElement("time", "small muted");
    setDate(time, post.date);
    content.append(time);
  }
  content.append(createElement("h3", "", post.title), createElement("p", "", post.summary));

  const read = createElement("a", "text-link", "Leer más →");
  read.href = "publicacion.html?id=" + encodeURIComponent(post.id);
  read.setAttribute("aria-label", "Leer más sobre " + post.title);
  content.append(read);
  card.append(image, content);
  return card;
}

const list = document.querySelector("[data-news-list]");
const filter = document.querySelector("[data-news-filter]");
const status = document.querySelector("[data-news-status]");

function renderList() {
  const posts = noticias.filter((post) => {
    if (list.hasAttribute("data-featured")) return post.featured;
    return !filter.value || post.category === filter.value;
  });
  list.replaceChildren(...posts.map(newsCard));
  if (status) {
    status.textContent = posts.length
      ? posts.length + (posts.length === 1 ? " publicación" : " publicaciones")
      : "Aún no hay publicaciones en esta categoría.";
  }
}

if (list) renderList();
if (filter) {
  document.querySelector("[data-news-controls]").hidden = false;
  status.hidden = false;
  filter.addEventListener("change", renderList);
}

const articleTitle = document.querySelector("[data-article-title]");
if (articleTitle) {
  const id = new URLSearchParams(window.location.search).get("id");
  const post = noticias.find((item) => item.id === id);
  const description = document.querySelector("[data-article-description]");

  if (!post) {
    articleTitle.textContent = "Publicación no disponible";
    description.textContent = "Puedes elegir otra publicación desde la sección de noticias.";
  } else {
    document.title = post.title + " | Unidad Educativa Francisco de Orellana";
    articleTitle.textContent = post.title;
    description.textContent = post.summary;
    const label = document.querySelector("[data-article-label]");
    label.textContent = post.category + (post.example ? " · Ejemplo académico" : "");
    label.hidden = false;

    if (post.date) {
      const time = document.querySelector("[data-article-date]");
      setDate(time, post.date);
      time.hidden = false;
    }

    const photo = document.querySelector("[data-article-photo]");
    const image = createElement("img");
    image.src = "assets/images/" + post.image;
    image.alt = post.imageAlt;
    image.decoding = "async";
    photo.prepend(image);
    photo.querySelector("[data-article-caption]").hidden = !post.example;
    photo.hidden = false;

    const body = document.querySelector("[data-article-body]");
    for (const section of post.sections) {
      body.append(createElement("h2", "", section.heading), createElement("p", "", section.text));
    }
  }
}
