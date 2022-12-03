
import './js/scroll-to-top';

import './js/toggle-headers';
import './js/theme-switch';
import './js/spinner';

import { getTrending } from './js/markupTrending';



import './sass/main.scss';


getTrending();


const apiData = new ApiServiceMarkup();
const auth = new Auth();
auth.init();

const db = new DataBaseFirebase();
db.auth.onAuthStateChanged(user => {
  if (user) {
    db.addFilmToFirebase(user);
    db.pushWatchedToLibrary(user);
    db.pushQueueToLibrary(user);
  }
  auth.setupLoginBtn(user);
});

apiData.getMarkUp();
apiData.addEventListeners();

apiData.paginationListner();
apiData.renderOneMovie();