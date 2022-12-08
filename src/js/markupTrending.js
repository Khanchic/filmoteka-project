import Glide from '@glidejs/glide';
import refs from './refs/links';
import { queryToAPI } from './queryToAPI';
import {
  setCurrentFilmsToLocalStorage,
  setGlideFilmsToLocalStorage,
} from './current-films-storage';
import { createGenresNamesForCard, saveGenres } from './genre-storage';
import { pagination } from './paginationForTrending';

const querytoapi = new queryToAPI();

const glideTrending = new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 6,
  autoplay: 1700,
  hoverpause: true,
  bound: true,
});

async function getTrending() {
  try {
    const { results, total_pages, total_results } =
      await querytoapi.fetchTrendingForWeek();

    setGlideFilmsToLocalStorage(results);
    createMarkupGlideTrending(results);
    pagination(total_pages, total_results);
  } catch (error) {
    console.log(error);
  }
}

function createMarkupGlideTrending(results) {
  const markup = results
    .map(({ poster_path, title, id }) => {
      let imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
      if (poster_path === null) {
        imageUrl =
          'https://s.studiobinder.com/wp-content/uploads/2019/06/Movie-Poster-Templates-StudioBinder.jpg';
      }

      return /*html*/ `
    <li class="glide__slide" data-film-id=${id}>
        <img
        class="glide-slide__img"
        src="${imageUrl}"
        alt="${title}"
        width="124px"
		    height ="180px"
      />
    </li>`;
    })
    .join('');

  refs.glide.innerHTML = markup;
  glideTrending.mount();
}

async function getTrendingForDay() {
  try {
    const { results } = await querytoapi.fetchTrendingForDay();

    setCurrentFilmsToLocalStorage(results);

    saveGenres(results);
    createFilmCards(results);
  } catch (error) {
    console.log(error);
  }
}

function createFilmCards(results) {
  const films = results
    .map(({ poster_path, title, genre_ids, release_date, id }) => {
      let imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

      if (poster_path === null) {
        imageUrl = '../img/header-home2/no-picture-img-min.png';
      }

      let realeseYear = release_date.slice(0, 4);

      let cardGenres;
      if (!genre_ids) {
        cardGenres = 'Сurrently unavailable';
      } else {
        cardGenres = createGenresNamesForCard(genre_ids);
      }

      return /*html*/ `<li class= "film-trending-container"><a class="film-trending__item" data-film-id=${id}>
        <img class= "film-trending__img" src="${imageUrl}" alt="${title}" loading="lazy" width="280px"
		    height ="402px"/>
            <div class="film-info-for-card film-info">
                <p class="film-name">${title}</p>
                <p class="film-description__genre">${cardGenres} | <span class="film-description__release">${realeseYear}</span></p>
            </div>
        </a>
        </li>`;
    })
    .join('');

  refs.filmCards.innerHTML = films;
}

export { getTrending, getTrendingForDay };
