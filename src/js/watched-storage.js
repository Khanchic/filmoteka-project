import refs from './refs/links.js';
import { currentFilm } from './current-films-storage';
import { save, load } from './storage-methods';
import { createFilmCards } from './markupWatched';

let watchedFilms = [];

refs.addToWatchedBtn.addEventListener('click', toWatchedFilms);

function toWatchedFilms(e) {
  const chooseFilmId = currentFilm.getAttribute('data-film-id');

  if (refs.addToWatchedBtn.textContent !== 'remove from Watched') {
    const currentFilmCard = JSON.parse(load('currentFilmsStorage')).find(
      film => film.id === Number(chooseFilmId)
    );

    if (load('watchedFilmsStorage')) {
      watchedFilms = JSON.parse(load('watchedFilmsStorage'));
    }
    if (currentFilmCard !== null) {
      watchedFilms.push(currentFilmCard);
      try {
        createFilmCards();
      } catch (error) {}
    }

    if (refs.addToQueueBtn.textContent === 'remove from queue') {
      const filmToRemuve = JSON.parse(load('queueFilmsStorage')).findIndex(
        film => film.id === Number(chooseFilmId)
      );
      const newQueueFilmsStorage = JSON.parse(load('queueFilmsStorage'));
      newQueueFilmsStorage.splice(filmToRemuve, 1);
      save('queueFilmsStorage', JSON.stringify(newQueueFilmsStorage));

      refs.addToQueueBtn.textContent = 'add to queue';
      try {
        createFilmCards();
      } catch (error) {}
    }
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
    try {
      createFilmCards();
    } catch (error) {}
  }
}
