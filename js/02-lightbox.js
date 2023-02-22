import { galleryItems } from './gallery-items.js';
console.log(galleryItems);

// Change code below this line

const parentItemsRef = document.body.querySelector('.gallery');

galleryItemsMarkup(galleryItems, parentItemsRef);

function galleryItemsMarkup(arrItems, parentRef) {
  const itemsMarkup = arrItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                <a class="gallery__item" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="rrrr" />
                </a>
             </div>`;
    })
    .join('');

  return (parentRef.innerHTML = itemsMarkup);
}

const gallery = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});
console.log('SimpleLightbox:', SimpleLightbox);
