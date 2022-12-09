import refs from './refs/links';
import { createGenresNamesForCard } from './genre-storage';
import { save, load, remove } from './storage-methods';

function createFilmCards() {
  let currentBtnStorage = '';
  if (refs.watchedBtn.classList.contains('current-btn')) {
    currentBtnStorage = 'watchedFilmsStorage';
  } else {
    currentBtnStorage = 'queueFilmsStorage';
  }

  const results = JSON.parse(load(currentBtnStorage));
  const films = results
    .map(
      ({ poster_path, title, genre_ids, release_date, id, vote_average }) => {
        let imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
        let realeseYear = release_date.slice(0, 4);
        if (poster_path === null) {
          imageUrl =
            'https://s.studiobinder.com/wp-content/uploads/2019/06/Movie-Poster-Templates-StudioBinder.jpg';
        }
        let cardGenres;
        if (!genre_ids) {
          cardGenres = 'Currently unavailable';
        } else {
          cardGenres = createGenresNamesForCard(genre_ids);
        }
        const rating = vote_average.toFixed(1);

        return /*html*/ `<li class= "film-trending-container"><a class="film-trending__item" data-film-id=${id}>
        <img class= "film-trending__img" src="${imageUrl}" alt="${title}" loading="lazy" width="280px"
		    height ="402px"/>
            <div class="film-info-for-card film-info">
                <p class="film-name">${title}</p>
                <p class="film-description__genre">${cardGenres} | <span class="film-description__release">${realeseYear}</span> <span class="vote_average">${rating}</span></p>
            </div>
        </a>
        </li>`;
      }
    )
    .join('');

  refs.libraryInfo.innerHTML = films;
}

export { createFilmCards };
