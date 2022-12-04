import refs from './refs/index.js';

export function setCurrentFilmsToLocalStorage(results) {
  localStorage.setItem('currentFilmsStorage', JSON.stringify(results));
}

refs.filmCards.addEventListener('click', onFilmClick);

function onFilmClick(e) {
  e.preventDefault();

  let currentFilm = e.target.closest('a');

  if (!currentFilm) return;

  const currentId = currentFilm.getAttribute('data-film-id');
  const currentFilmCard = JSON.parse(
    localStorage.getItem('currentFilmsStorage')
  ).find(film => film.id === Number(currentId));

  console.log(currentFilmCard);
}
