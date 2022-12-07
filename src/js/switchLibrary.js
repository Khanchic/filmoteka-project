import refs from './refs/links.js';
import { createFilmCards } from './markupWatched';

refs.watchedBtn.addEventListener('click', toWatchedBtnClick);

function toWatchedBtnClick() {
  if (refs.watchedBtn.classList.contains('current-btn')) {
    createFilmCards();
    return;
  }
  refs.watchedBtn.classList.add('current-btn');
  refs.queuedBtn.classList.remove('current-btn');
  createFilmCards();
}

refs.queueBtn.addEventListener('click', toQueueBtnClick);

function toQueueBtnClick() {
  if (refs.queueBtn.classList.contains('current-btn')) {
    createFilmCards();
    return;
  }
  refs.watchedBtn.classList.remove('current-btn');
  refs.queuedBtn.classList.add('current-btn');
  createFilmCards();
}
