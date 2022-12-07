import refs from './refs/links';
import { createGenresNamesForCard, saveGenres } from './genre-storage';
import { save, load, remove } from './storage-methods';

function createFilmCards() {
  let currentBtnStorage = '';
  if (refs.watchedBtn.classList.contains('current - btn')) {
    currentBtnStorage = 'watchedFilmsStorage';

    // queuedBtn;

    // current - btn;
  } else {
    currentBtnStorage = 'queueFilmsStorage';
  }

  const results = JSON.parse(load(currentBtnStorage));
  console.log(results);
  const films = results
    .map(({ poster_path, title, genre_ids, release_date, id }) => {
      let imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
      let realeseYear = release_date.slice(0, 4);

      let cardGenres;
      if (!genre_ids) {
        cardGenres = 'Сurrently unavailable';
      } else {
        cardGenres = createGenresNamesForCard(genre_ids);
      }

      return /*html*/ `<a class="film-trending__item" data-film-id=${id}>
        <img class= "film-trending__img" src="${imageUrl}" alt="${title}" loading="lazy" width="280px"
		    height ="402px"/>
            <div class="film-info">
                <p class="film-name">${title}</p>
                <div class="film-description">
                  <p class="film-description__genre">${cardGenres} |</p>
                  <p class="film-description__release">${realeseYear}</p>
                </div>
            </div>
        </a>`;
    })
    .join('');

  refs.libraryInfo.innerHTML = films;
}

export { createFilmCards };
createFilmCards();
