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

  const film = `<img class="img__cart" src="${imageUrl}" alt="${title}" loading="lazy" />
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
      <p class="text">${overview}</p>`;

  refs.filmInfoContainer.innerHTML = film;
}

export { createOneFilmCard };
