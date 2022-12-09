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
  if (overview === '') {
    overview = 'No information';
  }

  const rating = vote_average.toFixed(1);
  const popularityMark = popularity.toFixed(1);
  const filmImg = `<img class="img__cart" src="${imageUrl}" alt="${title}" loading="lazy" />`;
  const filmInfo = `<div class="position" data-film-id=${id}>
      <h1 class="modal__title">${title}</h1>
      <table class="film-info__table">
        <tr class="film-info__item">
          <td>Vote / Votes</td>
          <td><span class="vote_average">${rating}</span> / <span class="vote_count">${vote_count}</span></td>
        </tr>
        <tr class="spacer"><td></td><td></td></tr>
        <tr class="film-info__item">
          <td>Popularity</td>
          <td>${popularityMark}</td>
        </tr>
        <tr class="spacer"><td></td><td></td></tr>

        <tr class="film-info__item">
          <td>Original Title</td>
          <td>${original_title}</td>
        </tr>
        <tr class="spacer"><td></td><td></td></tr>

        <tr class="film-info__item">
          <td>Genre</td>
          <td>${cardGenres}</td>
        </tr>
      </table>
      <h2 class="modal__text">ABOUT</h2>
      <p class="text">${overview}</p>
      
      </div>`;

  refs.filmInfoContainer.innerHTML = filmInfo;
  refs.filmImgContainer.innerHTML = filmImg;
}

export { createOneFilmCard };
