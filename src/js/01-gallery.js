// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
const galleryItem = createGalleryItemMarkup(galleryItems);

galleryEl.insertAdjacentHTML('afterbegin', galleryItem);

galleryEl.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
    event.preventDefault();
 };


function createGalleryItemMarkup(items) {
    return items.map(({original, description}) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${original}" alt="${description}" />
</a>`
    }).join('');
};

const lightbox = new SimpleLightbox('.gallery a', { captionSelector: 'img', captionPosition: 'bottom', captionsData: "alt", captionDelay: 250});
