import refs from './refs/index.js';
import { createOneFilmCard } from './markupFilm.js';

export function setCurrentFilmsToLocalStorage(results) {
  localStorage.setItem('currentFilmsStorage', JSON.stringify(results));
}

refs.filmCards.addEventListener('click', onFilmClick);
let currentFilm = '';

function onFilmClick(e) {
  e.preventDefault();

  currentFilm = e.target.closest('a');

  if (!currentFilm) return;

  const currentId = currentFilm.getAttribute('data-film-id');
  const currentFilmCard = JSON.parse(
    localStorage.getItem('currentFilmsStorage')
  ).find(film => film.id === Number(currentId));

  refs.modal.classList.remove('is-hidden');

  createOneFilmCard(currentFilmCard);
}

export { currentFilm };
