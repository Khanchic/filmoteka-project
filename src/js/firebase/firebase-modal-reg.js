export default (() => {
  const refs = {
    openModalBtn: document.querySelector('[data-reg-modal-open]'),
    closeModalBtn: document.querySelector('[data-reg-modal-close]'),
    modal: document.querySelector('[data-reg-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
