import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import axios from 'axios';
import { clearMarkup } from './getMovieOnSearch';
import refs from './refs/links';

async function btnClickTrendingPagination(currentPage) {
  try {
    const searchParams = new URLSearchParams({
      api_key: '10612ebbbeaf2ad5999e09badf85e183',
    });

    const PAGE = currentPage;
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?${searchParams}&page=${PAGE}`
    );
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    return response.data;
  } catch (error) {
    error.message;
  }
}

export function pagination(TOTAL_PAGES, TOTAL_RESULTS) {
  const options = {
    totalItems: TOTAL_RESULTS,
    itemsPerPage: Math.round(TOTAL_RESULTS / TOTAL_PAGES),
    visiblePages: 5,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };

  const pagination = new Pagination('pagination', options);

  pagination.on('afterMove', event => {
    const currentPage = event.page;

    clearMarkup();
    btnClickTrendingPagination(currentPage)
      .then(response => {
        const { results: film } = response;

        render(film);
      })
      .catch(error => {
        error.message;
      });
  });
}

function render(data) {
  let markup = '';

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  markup = [...data]
    .map(({ poster_path, title, genre_ids, release_date, id }) => {
      let imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
      let realeseYear = release_date.slice(0, 4);
      return `<a href="#" class="film-trending__item" data-film-id=${id}>
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
