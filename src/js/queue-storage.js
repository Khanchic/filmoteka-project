import refs from './refs/links.js';
import { currentFilm } from './current-films-storage';
import { save, load, remove } from './storage-methods';
import { createFilmCards } from './markupWatched';

let queueFilms = [];

refs.addToQueueBtn.addEventListener('click', toQueueFilms);

// console.log(refs.addToQueueBtn);

function toQueueFilms() {
  const chooseFilmId = currentFilm.getAttribute('data-film-id');

  if (refs.addToQueueBtn.textContent !== 'remove from queue') {
    const currentFilmCard = JSON.parse(load('currentFilmsStorage')).find(
      film => film.id === Number(chooseFilmId)
    );

    if (load('queueFilmsStorage')) {
      queueFilms = JSON.parse(load('queueFilmsStorage'));
    }

    queueFilms.push(currentFilmCard);
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
    createFilmCards();
  }
}
