import refs from './refs/links';
import { createGenresNamesForCard } from './genre-storage';

function createOneFilmCard({
  poster_path,
  title,
  genre_ids,
  vote_average,
  vote_count,
  original_title,
  popularity,
  overview,
  id,
}) {
  let imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;

  let cardGenres;
  if (!genre_ids) {
    cardGenres = 'Сurrently unavailable';
  } else {
    cardGenres = createGenresNamesForCard(genre_ids);
  }

  const film = `<div class="modal container">

  <button type="button" class="modal__close" data-modal-close>
      <a href="" class="" data-modal-close>
        <svg class="modal__icon" width="11" height="11">
          <use width="14" heigth="14" href="./img/close-btn.svg#icon-cross"></use>
        </svg>
      </a>
    </button>
   
  <div class="film-info"></div>
 

  <img class="img__cart" src="${imageUrl}" alt="${title}" loading="lazy" />
    <div class="position" data-film-id=${id}>
      <h1 class="modal__title">${title}</h1>
      <table>
        <tr>
          <td>Vote / Votes</td>
          <td>${vote_average} / ${vote_count}</td>
        </tr>
        <tr>
          <td>Popularity</td>
          <td>${popularity}</td>
        </tr>
        <tr>
          <td>Original Title</td>
          <td>${original_title}</td>
        </tr>
        <tr>
          <td>Genre</td>
          <td>${cardGenres}</td>
        </tr>
      </table>
      <h2 class="modal__text">ABOUT</h2>
      <p class="text">${overview}</p>
      <div class="modal__btn">
      <button type="button" class="btn--modal current-btn add-watched">
        add to Watched
      </button>
      <button type="button" class="btn--modal queue add-queue">
        add to queue
      </button>
    </div>
      </div>
      </div>`;

  refs.filmInfoContainer.innerHTML = film;
}

export { createOneFilmCard };
