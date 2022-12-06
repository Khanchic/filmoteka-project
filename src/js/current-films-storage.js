import refs from './refs/links.js';
import { createOneFilmCard } from './markupFilm.js';
import { save, load, remove } from './storage-methods';

// let currentFilmsStorage = [];

export function setCurrentFilmsToLocalStorage(results) {
  // currentFilmsStorage.push(results).flatMap();
  // console.log(currentFilmsStorage);
  save('currentFilmsStorage', JSON.stringify(results));
}

refs.filmCards.addEventListener('click', onFilmClick);
let currentFilm = '';

function onFilmClick(e) {
  e.preventDefault();

  currentFilm = e.target.closest('a');

  if (!currentFilm) return;

  const currentId = currentFilm.getAttribute('data-film-id');
  const currentFilmCard = JSON.parse(load('currentFilmsStorage')).find(
    film => film.id === Number(currentId)
  );

  refs.modal.classList.remove('is-hidden');

  createOneFilmCard(currentFilmCard);
}

export { currentFilm };
