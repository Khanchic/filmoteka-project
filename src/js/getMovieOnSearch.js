import refs from './refs';
import axios from 'axios';
import { pagination } from './pagination';

export const {
  elements: { query },
} = refs.serchForm;

function normalize(text) {
  query.value = query.value.trim().toLowerCase();
  if (text === ' ') {
    query.value += ' ';
  }
}
query.addEventListener('input', event => {
  normalize(event.data);
});

export async function getMovie() {
  try {
    const searchParams = new URLSearchParams({
      api_key: '10612ebbbeaf2ad5999e09badf85e183',
      query: query.value.split(' ').join('+'),
    });

    const PAGE = 1;
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?${searchParams}&page=${PAGE}`
    );

    if (response.status !== 200) {
      throw new Error(response.status);
    }
    console.log(response.data);
    return response.data;
  } catch (error) {
    error.message;
  }
}

export function clearMarkup() {
  refs.filmCards.innerHTML = '';
}

refs.serchForm.addEventListener('submit', event => {
  event.preventDefault();

  window.scrollTo({
    top: 250,
    behavior: 'smooth',
  });

  clearMarkup();

  getMovie()
    .then(response => {
      const {
        results: film,
        total_pages: TOTAL_PAGES,
        total_results: TOTAL_RESULTS,
      } = response;

      if (film.length == 0) {
        return console.log(
          'Search result not successful. Enter the correct movie name and '
        );
      }
      pagination(TOTAL_PAGES, TOTAL_RESULTS);
      renderPhotos(film);
    })
    .catch(error => {
      error.message;
    });
});

export function renderPhotos(data) {
  let markup = '';

  markup = [...data]
    .map(({ poster_path, title, genre_ids, release_date, id }) => {
      let imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
      let realeseYear = release_date.slice(0, 4);
      return `<a class="film-trending__item" data-film-id=${id}>
        <img class= "film-trending__img" src="${imageUrl}" alt="${title}" loading="lazy" width="280px"
		    height ="402px"/>
            <div class="film-info">
                <p class="film-name">${title}</p>
                <div class="film-description">
                  <p class="film-description__genre">Drama, Action |</p>
                  <p class="film-description__release">${realeseYear}</p>
                </div>
            </div>
        </a>`;
    })
    .join('');

  refs.filmCards.insertAdjacentHTML('beforeend', markup);
}
