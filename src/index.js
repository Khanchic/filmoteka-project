import './js/scroll-to-top';

import './js/theme-switch';

import './js/getMovieOnSearch';

import './js/firebase/firebase-config';
import './js/firebase/firebase-user';
import './js/firebase/firebase-modal-reg';
import './js/firebase/firebase-modal-auth';
import './js/firebase/firebase-main';

import { getTrending, getTrendingForDay } from './js/markupTrending';

import './sass/main.scss';

import './js/current-films-storage';
import './js/watched-storage';

getTrending();
getTrendingForDay();
