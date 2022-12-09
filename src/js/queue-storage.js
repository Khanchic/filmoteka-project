import refs from './refs/links.js';
import { currentFilm } from './current-films-storage';
import { save, load, remove } from './storage-methods';
import { createFilmCards } from './markupWatched';

let queueFilms = [];

refs.addToQueueBtn.addEventListener('click', toQueueFilms);

function toQueueFilms(e) {
  const chooseFilmId = currentFilm.getAttribute('data-film-id');

  if (refs.addToQueueBtn.textContent !== 'remove from queue') {
    const currentFilmCard = JSON.parse(load('currentFilmsStorage')).find(
      film => film.id === Number(chooseFilmId)
    );

    if (load('queueFilmsStorage')) {
      queueFilms = JSON.parse(load('queueFilmsStorage'));
    }

    if (currentFilmCard !== null) {
      queueFilms.push(currentFilmCard);
      try {
        createFilmCards();
      } catch (error) {}
    }

    if (refs.addToWatchedBtn.textContent === 'remove from Watched') {
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
    save('queueFilmsStorage', JSON.stringify(queueFilms));

    refs.addToQueueBtn.textContent = 'remove from queue';
  } else {
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
}
