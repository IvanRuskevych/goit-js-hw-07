import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

// Change code below this line

const parentItemsRef = document.querySelector('.gallery');
console.log('parentItemsRef:', parentItemsRef);

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

parentItemsRef.innerHTML = createGalleryMarkup(galleryItems);
// console.log(createGalleryMarkup(galleryItems));

parentItemsRef.addEventListener('click', onGalleryItemClick);

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
