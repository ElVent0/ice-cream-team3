(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    listItemHome: document.querySelector('[data-modal-home]'),
    listItemAbout: document.querySelector('[data-modal-about]'),
    listItemHow: document.querySelector('[data-modal-how]'),
    listItemProducts: document.querySelector('[data-modal-products]'),
    listItemContacts: document.querySelector('[data-modal-contacts]'),

    modal: document.querySelector('[data-modal]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.listItemHome.addEventListener('click', toggleModal);
  refs.listItemAbout.addEventListener('click', toggleModal);
  refs.listItemHow.addEventListener('click', toggleModal);
  refs.listItemProducts.addEventListener('click', toggleModal);
  refs.listItemContacts.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
