import refs from './refs/links';

refs.openFooterModalBtn.addEventListener("click", toggleModal);
refs.closeFooterModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.footerModal.classList.toggle("is-hidden");
}

// $(document).click(function (e) {
//     if ($(e.target).is('.page-footer__backdrop')) {npm
//         closeModal()
//     }
// });