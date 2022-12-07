import refs from './refs/links';
import './scroll-to-top';

import './theme-switch';

// import './pagination';

// import './js/firebase/firebase-config';
// import './js/firebase/firebase-user';
// import './js/firebase/firebase-modal-reg';
// import './js/firebase/firebase-modal-auth';
// import './js/firebase/firebase-main';

import { getTrending } from './markupTrending';
import { createFilmCards } from './markupWatched';

import './current-films-storage';
import './watched-storage';

import './footer-modal';

getTrending();
createFilmCards();
