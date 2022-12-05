import refs from './refs';
import axios from 'axios';

const {
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

async function getMovie() {
  try {
    const searchParams = new URLSearchParams({
      api_key: '10612ebbbeaf2ad5999e09badf85e183',
      query: query.value.split(' ').join('+'),
    });

    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?${searchParams}`
    );

    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  } catch (error) {
    error.message;
  }
}

function clearMarkup() {
  refs.filmCards.innerHTML = '';
}

refs.serchForm.addEventListener('submit', event => {
  event.preventDefault();
  clearMarkup();

  getMovie()
    .then(response => {
      const { results: film } = response;
      if (film.length === 0) {
        return console.log('мало слів');
      }

      setCurrentFilmsToLocalStorage(response.results);

      renderPhotos(film);
      console.log(film);
    })
    .catch(error => {
      error.message;
    });
});

async function renderPhotos(data) {
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
