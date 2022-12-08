import refs from './refs/links';


refs.openFooterModalBtn.addEventListener("click", toggleModal);
refs.closeFooterModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.footerModal.classList.toggle("is-hidden");
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    toggleModal()
  }
});

document.addEventListener('click', onBackdropClick);

function onBackdropClick(evt) {
  if (evt.target.classList.contains('page-footer__backdrop')) {
    toggleModal();
  }
}