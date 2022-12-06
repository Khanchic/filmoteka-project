// import refs from './refs/links.js';
// import { currentFilm } from './current-films-storage';
// import { save, load, remove } from './storage-methods';

// let watchedFilms = [];
// refs.addToWatchedBtn.addEventListener('click', addToWatchedFilms);

// function addToWatchedFilms() {
//   const chooseFilmId = currentFilm.getAttribute('data-film-id');
//   const currentFilmCard = JSON.parse(load('currentFilmsStorage')).find(
//     film => film.id === Number(chooseFilmId)
//   );
//   watchedFilms.push(currentFilmCard);
//   console.log(watchedFilms);
//   save('watchedFilmsStorage', JSON.stringify(watchedFilms));
// }
