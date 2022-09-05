import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galeryContainer = document.querySelector(".gallery");
const galeryMarkUp = createGaleryItems(galleryItems);

galeryContainer.insertAdjacentHTML("beforeend", galeryMarkUp);

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
    `<img class="modal__image" scr="assets/images/image.png" width="800" height="600">`
  );

  instance.show();

  const modalEL = document.querySelector(".modal__image");
  modalEL.src = currentImageURl;

  window.addEventListener("keydown", modalClose);

  function modalClose(event) {
    if (!basicLightbox.visible()) {
      return;
    }
    if (event.key == "Escape" || event.key == "Esc") {
      instance.close();
    }
  }
}
