import refs from './refs/links.js';
import { currentFilm } from './current-films-storage';

refs.addToWatchedBtn.addEventListener('click', addToWatchedFilms);
let watchedFilms = [];

function addToWatchedFilms() {
  const chooseFilmId = currentFilm.getAttribute('data-film-id');
  const currentFilmCard = JSON.parse(
    localStorage.getItem('currentFilmsStorage')
  ).find(film => film.id === Number(chooseFilmId));
  watchedFilms.push(currentFilmCard);
  localStorage.setItem('watchedFilmsStorage', JSON.stringify(watchedFilms));
}
