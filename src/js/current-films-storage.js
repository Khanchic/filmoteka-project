import refs from './refs/links.js';
import { createOneFilmCard } from './markupFilm.js';
import { save, load } from './storage-methods';

export function setCurrentFilmsToLocalStorage(results) {
  save('currentFilmsStorage', JSON.stringify(results));
}

export function setGlideFilmsToLocalStorage(results) {
  save('glideFilmsStorage', JSON.stringify(results));
}

refs.filmCards.addEventListener('click', onFilmClick);
refs.glide.addEventListener('click', onGlideClick);

let currentFilm = '';

function onFilmClick(e) {
  e.preventDefault();

 
  document.body.style.overflow = 'hidden'
  currentFilm = e.target.closest('a');

  if (!currentFilm) return;

  const currentId = currentFilm.getAttribute('data-film-id');

  if (
    load('watchedFilmsStorage') &&
    JSON.parse(load('watchedFilmsStorage')).find(
      film => film.id === Number(currentId)
    )
  ) {
    refs.addToWatchedBtn.textContent = 'remove from Watched';
    
  } else {
    refs.addToWatchedBtn.textContent = 'add to Watched';
   
  }

  if (
    load('queueFilmsStorage') &&
    JSON.parse(load('queueFilmsStorage')).find(
      film => film.id === Number(currentId)
    )
  ) {
    refs.addToQueueBtn.textContent = 'remove from queue';
  } else {
    refs.addToQueueBtn.textContent = 'add to queue';
  }

  const currentFilmCard = JSON.parse(load('currentFilmsStorage')).find(
    film => film.id === Number(currentId)
  );

  refs.modal.classList.remove('is-hidden');

  createOneFilmCard(currentFilmCard);
}

function onGlideClick(e) {
  e.preventDefault();
  refs.body.classList.toggle('no-scroll');
  

  currentFilm = e.target.closest('li');

  if (!currentFilm) return;

  const currentId = currentFilm.getAttribute('data-film-id');

  if (
    load('queueFilmsStorage') &&
    JSON.parse(load('queueFilmsStorage')).find(
      film => film.id === Number(currentId)
    )
  ) {
    refs.addToQueueBtn.textContent = 'remove from queue';
  } else {
    refs.addToQueueBtn.textContent = 'add to queue';
  }

  if (
    load('watchedFilmsStorage') &&
    JSON.parse(load('watchedFilmsStorage')).find(
      film => film.id === Number(currentId)
    )
  ) {
    refs.addToWatchedBtn.textContent = 'remove from Watched';
  } else {
    refs.addToWatchedBtn.textContent = 'add to Watched';
  }

  const currentFilmCard = JSON.parse(load('glideFilmsStorage')).find(
    film => film.id === Number(currentId)
  );

  refs.modal.classList.remove('is-hidden');

  createOneFilmCard(currentFilmCard);
}

export { currentFilm };
