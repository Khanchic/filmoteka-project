import refs from './refs/links';


    // openModalBtn: document.querySelector('[data-modal-open]'),
    // closeModalBtn: document.querySelector('[data-modal-close]'),
    // modal: document.querySelector('[data-modal]'),
 

  // refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  refs.modal.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && !refs.modal.classList.contains('is-hidden')) {
      closeModal(); 
    }
 });

 function closeModal() {
  refs.modal.classList.toggle("is-hidden")
};

