const refs = {
  openModalBtn: document.querySelector('.footer__link'),
  closeModalBtn: document.querySelector('.modal__btn-footer'),
  modal: document.querySelector('[data-modal-footer]'),
  body: document.querySelector('body'),
};

function handlerModalFooter() {
  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);
}
function openModal() {
  refs.modal.classList.add('is-openened');
  refs.body.classList.add('ishidden');
  document.addEventListener('click', onClickBackdrop);
  document.addEventListener('keydown', onEscClick);
}

function closeModal() {
  refs.modal.classList.remove('is-openened');
  refs.body.classList.remove('ishidden');
  removeListener();
}
function onClickBackdrop(event) {
  if (event.target === refs.modal) {
    refs.modal.classList.remove('is-openened');
    refs.body.classList.remove('ishidden');
    removeListener();
  }
}
function onEscClick(event) {
  if (event.code === 'Escape') {
    refs.modal.classList.remove('is-openened');
    refs.body.classList.remove('ishidden');
    removeListener();
  }
}
function removeListener() {
  document.removeEventListener('keydown', onEscClick);
  document.removeEventListener('click', onClickBackdrop);
}
export { handlerModalFooter };
