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
  // console.log(e.target);

  const instance = basicLightbox.create(
    `<img src="${e.target.getAttribute('data-source')}" alt="${e.target.getAttribute('alt')}">`,
    {
      onShow: (instance) => {
        window.addEventListener('keydown', onEscClick);
        console.log('listen Esc');
      },

      onClose: (instance) => {
        window.removeEventListener('keydown', onEscClick);
        console.log("don't listen Esc");
      },
    }
  );

  function onEscClick(evt) {
    if (evt.code === 'Escape') {
      instance.close();
    }
  }

  instance.show(() => console.log('lightbox now visible'));
}
