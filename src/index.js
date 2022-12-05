import './js/scroll-to-top';


import './js/theme-switch';

import './js/getMovieOnSearch';

import { getTrending, getTrendingForDay } from './js/markupTrending';

import './sass/main.scss';

import './js/current-films-storage';
import './js/watched-storage';
import { createFilmCards } from './js/markupWatched';

getTrending();
getTrendingForDay();

