import refs from './refs/links';

  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  refs.modal.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && !refs.modal.classList.contains('is-hidden')) {
      toggleModal(); 
    }
 });


