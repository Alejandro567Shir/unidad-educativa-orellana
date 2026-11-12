"use strict";

const nav = document.getElementById("navegacion");
const menuButton = document.querySelector(".menu-toggle");
const compactLayout = window.matchMedia("(max-width: 60rem)");
const disclosures = [...document.querySelectorAll("details[data-disclosure]")];

function setMenu(open) {
  menuButton.setAttribute("aria-expanded", String(open));
  nav.hidden = compactLayout.matches && !open;
  if (!open) nav.querySelector("details").open = false;
}

menuButton.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") === "false");
});

compactLayout.addEventListener("change", () => setMenu(false));
setMenu(false);
document.documentElement.classList.add("js");

document.addEventListener("click", (event) => {
  for (const disclosure of disclosures) {
    if (!disclosure.contains(event.target)) disclosure.open = false;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  const current = disclosures.find((item) => item.open && item.contains(document.activeElement));
  if (current) {
    current.open = false;
    current.querySelector("summary").focus();
  } else if (compactLayout.matches && !nav.hidden) {
    setMenu(false);
    menuButton.focus();
  }
});

const demoMessages = {
  admission: "Ficha de ejemplo revisada. Tus selecciones no se guardaron ni se enviaron.",
  contact: "Mensaje de ejemplo revisado. No se ha enviado ningún mensaje.",
};

for (const form of document.querySelectorAll("[data-demo]")) {
  const button = form.querySelector("[data-validate]");
  const status = form.querySelector(".form-status");
  button.hidden = false;

  form.addEventListener("submit", (event) => event.preventDefault());
  form.addEventListener("input", () => { status.textContent = ""; });
  button.addEventListener("click", () => {
    if (!form.reportValidity()) return;
    status.textContent = demoMessages[form.dataset.demo];
  });
}

const mapButton = document.querySelector("[data-map-toggle]");
if (mapButton) {
  const mapTarget = document.querySelector("[data-map-target]");
  mapButton.hidden = false;
  mapButton.addEventListener("click", () => {
    const frame = document.createElement("iframe");
    frame.className = "map-frame";
    frame.title = "Mapa de El Coca, Orellana, Ecuador";
    frame.src = "https://www.google.com/maps?q=El+Coca%2C+Orellana%2C+Ecuador&z=12&output=embed";
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    frame.allowFullscreen = true;
    mapTarget.append(frame);
    mapTarget.hidden = false;
    frame.focus();
    mapButton.hidden = true;
  }, { once: true });
}
