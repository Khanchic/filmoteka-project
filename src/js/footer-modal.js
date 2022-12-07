import refs from './refs/links';

function toggleModal() {
  refs.footerModal.classList.toggle("is-hidden");
}

refs.openFooterModalBtn.addEventListener("click", toggleModal);
refs.closeFooterModalBtn.addEventListener("click", toggleModal);


document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    toggleModal()
  }
});

// document.addEventListener('click', function(e) {
//   if (e.key === 'Escape') {
//     refs.footerModal.classList.toggle("is-hidden")
//   }
// });

// document.addEventListener.click(function (e) {
//   if ($(e.target).is('data-footer-modal')) {
//     refs.footerModal.classList.toggle("is-hidden")
//   }
// });

// $(document).click(function (e) {
//     if ($(e.target).is('.modal')) {
//         closeModal();
//     }
// });