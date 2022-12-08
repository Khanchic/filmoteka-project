import refs from './refs/links';

refs.closeModalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleModal();
});

function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  refs.closeModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.code === "Escape" && !refs.modal.classList.contains('is-hidden')) {
      toggleModal(); 
    }
 });


