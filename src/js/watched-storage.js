import refs from './refs/links.js';
import { currentFilm } from './current-films-storage';
import { save, load, remove } from './storage-methods';
import { createFilmCards } from './markupWatched';

let watchedFilms = [];

refs.addToWatchedBtn.addEventListener('click', toWatchedFilms);

function toWatchedFilms() {
  const chooseFilmId = currentFilm.getAttribute('data-film-id');

  if (refs.addToWatchedBtn.textContent !== 'remove from Watched') {
    const currentFilmCard = JSON.parse(load('currentFilmsStorage')).find(
      film => film.id === Number(chooseFilmId)
    );

    if (load('watchedFilmsStorage')) {
      watchedFilms = JSON.parse(load('watchedFilmsStorage'));
    }

    watchedFilms.push(currentFilmCard);
    save('watchedFilmsStorage', JSON.stringify(watchedFilms));

    refs.addToWatchedBtn.textContent = 'remove from Watched';
  } else {
    const filmToRemuve = JSON.parse(load('watchedFilmsStorage')).findIndex(
      film => film.id === Number(chooseFilmId)
    );
    const newWatchedFilmsStorage = JSON.parse(load('watchedFilmsStorage'));
    newWatchedFilmsStorage.splice(filmToRemuve, 1);
    save('watchedFilmsStorage', JSON.stringify(newWatchedFilmsStorage));

    refs.addToWatchedBtn.textContent = 'add to Watched';
    createFilmCards();
  }
}
