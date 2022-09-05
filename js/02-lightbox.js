import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galeryContainer = document.querySelector(".gallery");

function createGaleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" href="${original}">
      <img class="gallery__image"
      src="${preview}" 
      alt="${description}" />
      </a> `;
    })
    .join("");
}

galeryContainer.insertAdjacentHTML(
  "beforeend",
  createGaleryItems(galleryItems)
);

new SimpleLightbox(".gallery a", {
  animationSpeed: 250,
  captionsData: "alt",
  captionDelay: 250,
});
