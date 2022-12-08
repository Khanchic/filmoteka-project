import refs from './refs/links';

  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal(e) {
    refs.modal.classList.toggle("is-hidden");
    // refs.body.classList.toggle('no-scroll');
    e.preventDefault();
  }

  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && !refs.modal.classList.contains('is-hidden')) {
      toggleModal(e); 
    }
 });


//  (() => {
//   const refs = {
//     openMenuBtn: document.querySelector(".header__button"),
//     closeMenuBtn: document.querySelector(".mob__button"),
//     menu: document.querySelector(".mob__menu"),
//     body: document.querySelector("body"),
//   };

//   refs.openMenuBtn.addEventListener('click', toggleMenu);
//   refs.closeMenuBtn.addEventListener('click', toggleMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle('is-hidden');
//     refs.body.classList.toggle('no-scroll');
//   }
// })();


// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

