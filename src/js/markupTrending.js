import Glide from '@glidejs/glide';
import refs from './refs/';
import { queryToAPI } from './queryToAPI';

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
    const { results } = await querytoapi.fetchTrending();

    createMarkupGlideTrending(results);
    createFilmCards(results);
      
  } catch (error) {
    console.log(error);
  }
}

function createMarkupGlideTrending(results) {
    const markup = results.map(({ poster_path,title, release_date }) => {
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
    </li>`
  ;
        })
        .join('');

  refs.glide.innerHTML = markup;
  glideTrending.mount();

}

function createFilmCards(results) {
  const films = results.map(({ poster_path, title, genre_ids, release_date }) => {
    let imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
    let realeseYear = release_date.slice(0, 4);
    
   
    return /*html*/`<li class="film-trending__item">
        <img class= "film-trending__img" src="${imageUrl}" alt="${title}" loading="lazy" width="280px"
		    height ="402px"/>
            <div class="film-info">
                <p class="film-name">${title}</p>
                <div class="film-description">
                  <p class="film-description__genre">Drama, Action |</p>
                  <p class="film-description__release">${realeseYear}</p>
                </div>
               
            </div>
        </a>`
  }).join('');

  refs.filmCards.innerHTML = films;


}

export { getTrending };
