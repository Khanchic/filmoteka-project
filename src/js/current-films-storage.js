import refs from './refs/';
import { queryToAPI } from './queryToAPI';

refs.filmCards.addEventListener('click', onFilmClick);

function onFilmClick(e) {
  e.preventDefault();
  //   if (e.target.nodeName !== 'A') {
  //     return;
  //   }
  const selectedFilm = e.target.dataset.color;
  console.log(e);
}
