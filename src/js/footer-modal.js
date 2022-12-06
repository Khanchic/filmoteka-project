import refs from './refs/index.js';

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);

function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
}

// $(document).click(function (e) {
//     if ($(e.target).is('.page-footer__backdrop')) {npm
//         closeModal()
//     }
// });