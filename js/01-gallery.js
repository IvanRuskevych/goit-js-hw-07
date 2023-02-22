import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');
console.log('galleryRef:', galleryRef);

function createGalleryMarkup(arrItems) {
  return arrItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`;
    })
    .join('');
}

galleryRef.innerHTML = createGalleryMarkup(galleryItems);
// console.log(createGalleryMarkup(galleryItems));

galleryRef.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
  e.preventDefault();

  if (!e.target.hasAttribute('data-source')) {
    return;
  }
  console.log(e.target);

  const instance = basicLightbox.create(
    `
    <img src="${e.target.getAttribute('data-source')}">
`
  );

  instance.show(() => console.log('lightbox now visible'));
}
