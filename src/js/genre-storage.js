import { save, load, remove } from './storage-methods';
import { queryToAPI } from './queryToAPI';

const GENRES = 'genre';

const querytoapi = new queryToAPI();

export function saveGenres() {
  return querytoapi
    .fetchQueryResultsForGenres()
    .then(genresData => {
      save(GENRES, genresData);
    })
    .catch(error => console.log(error));
}

export function createGenresNamesForCard(genresId) {
  if (genresId.length === 0) {
    return 'No information';
  }
  
  else {
    let genresList;
    const genresInStorage = load(GENRES);
    const genresArray = [];
    const selectedGenres = genresId.map(id => {
      return genresInStorage.filter(idGenre => idGenre.id === id);
    });

    selectedGenres.map(genre => {
      genresArray.push(genre[0].name);
    });

    if (genresArray.length > 0 && genresArray.length <= 3) {
      genresList = genresArray.join(', ');
    } else {
      genresList = `${genresArray[0]}, ${genresArray[1]}, Other`;
    }
    return genresList;
    }

 
}
