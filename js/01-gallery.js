import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galeryContainer = document.querySelector(".gallery");
galeryContainer.insertAdjacentHTML(
  "beforeend",
  createGaleryItems(galleryItems)
);
galeryContainer.addEventListener("click", onGaleryItemClick);

function createGaleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
        </a>
    </div>`;
    })
    .join("");
}

function onGaleryItemClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const currentImageURl = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${currentImageURl}" width="800" height="600">`,
    {
      onShow: (instance) => window.addEventListener("keydown", onEscPress),
      onClose: (instance) => window.removeEventListener("keydown", onEscPress),
    }
  );
  instance.show();

  function onEscPress(event) {
    if (!basicLightbox.visible()) {
      return;
    }
    if (event.key == "Escape" || event.key == "Esc") {
      instance.close();
    }
  }
}
