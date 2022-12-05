import Glide from '@glidejs/glide';
import refs from './refs/';
import { queryToAPI } from './queryToAPI';
import { setCurrentFilmsToLocalStorage } from './current-films-storage';
import { createGenresNamesForCard, saveGenres} from './genre-storage';





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
    const { results } = await querytoapi.fetchTrendingForWeek();

    setCurrentFilmsToLocalStorage(results);

    createMarkupGlideTrending(results);
  } catch (error) {
    console.log(error);
  }
}

function createMarkupGlideTrending(results) {
  const markup = results
    .map(({ poster_path, title}) => {
      let imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
      return /*html*/ `
    <li class="glide__slide">
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

  refs.filmCards.innerHTML = films;
}

export { getTrending, getTrendingForDay};