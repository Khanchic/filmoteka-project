import refs from './refs/links';
import { scrollModal } from './footer-modal';

refs.closeModalBtn.addEventListener('click', e => {
  e.preventDefault();
  toggleModal();
});

function toggleModal(e) {
  refs.modal.classList.add('is-hidden');
  // document.body.style.position = '';
  scrollModal();
}

document.addEventListener('keydown', e => {
  if (e.code === 'Escape' && !refs.modal.classList.contains('is-hidden')) {
    toggleModal(e);
    // document.body.style.position = '';
    scrollModal();
  }
});

document.addEventListener('click', onBackdropClick);

function onBackdropClick(evt) {
  if (evt.target.classList.contains('backdrop')) {
    toggleModal();
    // document.body.style.position = '';
    scrollModal();
  }
}
