import './js/scroll-to-top';


import './js/theme-switch';

import './js/getMovieOnSearch';
import './js/pagination';

import './js/firebase/firebase-config'
import './js/firebase/firebase-user';
import './js/firebase/firebase-modal-reg';
import './js/firebase/firebase-modal-auth';
import './js/firebase/firebase-main';


import { getTrending, getTrendingForDay } from './js/markupTrending';

import './sass/main.scss';

import './js/current-films-storage';
import './js/watched-storage';
import { createFilmCards } from './js/markupWatched';

getTrending();
getTrendingForDay();

