import refs from './refs/links';

  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal(e) {
    refs.modal.classList.toggle("is-hidden");
    e.preventDefault();
  }

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" ) {
      toggleModal(e); 
    }
 });


 
