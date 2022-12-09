import refs from './refs/links';


refs.openFooterModalBtn.addEventListener("click", toggleModal);
refs.closeFooterModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.footerModal.classList.toggle("is-hidden");
  document.body.style.overflow = 'hidden';
}

document.addEventListener('click', function (e) {
  if (refs.footerModal.classList.contains('is-hidden')) {
    document.body.style.overflow = ''
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && !refs.footerModal.classList.contains('is-hidden')) {
    toggleModal()
    document.body.style.overflow = '';
  }
});

document.addEventListener('click', onBackdropClick);

function onBackdropClick(evt) {
  if (evt.target.classList.contains('page-footer__backdrop')) {
    toggleModal();
    document.body.style.overflow = '';
  }
}


