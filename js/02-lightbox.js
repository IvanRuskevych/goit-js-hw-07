import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

// Change code below this line
const parentItemsRef = document.body.querySelector('.gallery');
console.log('parentItemsRef:', parentItemsRef);

function galleryItemsMarkup(arrItems, parentRef) {
  const itemsMarkup = arrItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                </a>
             </div>`;
    })
    .join('');

  return (parentRef.innerHTML = itemsMarkup);
}

galleryItemsMarkup(galleryItems, parentItemsRef);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(lightbox);
