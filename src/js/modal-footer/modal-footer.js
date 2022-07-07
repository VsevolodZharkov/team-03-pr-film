
	const refs = {
		openModalBtn: document.querySelector('.footer__link'),
		closeModalBtn: document.querySelector('.modal__btn-footer'),
		modal: document.querySelector("[data-modal-footer]"),
		
	};
	refs.openModalBtn.addEventListener("click", openModal);
	refs.closeModalBtn.addEventListener("click", closeModal);

	function openModal(e) {
		e.preventDefault();
		refs.modal.classList.add("is-hidden");
		document.addEventListener('click', onClickBackdrop);
		document.addEventListener('keydown', onEscClick);
	}

	function closeModal (e) {
		e.preventDefault();
		refs.modal.classList.remove("is-hidden");
		removeListener();
	}
	function onClickBackdrop(event) {
		if (event.target === refs.modal) {
			refs.modal.classList.remove('is-hidden');
			removeListener();
		}
	}
	function onEscClick(event) {
		if (event.code === 'Escape') {
			refs.modal.classList.remove('is-hidden');
			removeListener();
		}
	}
	function removeListener() {
		document.removeEventListener('keydown', onEscClick);
		document.removeEventListener('click', onClickBackdrop);
	}