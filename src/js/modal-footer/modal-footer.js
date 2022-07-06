
	const refs = {
		openModalBtn: document.querySelector('.footer__link'),
		closeModalBtn: document.querySelector('[data-modal-close]'),
		modal: document.querySelector("[data-modal-footer]"),
	};

	refs.openModalBtn.addEventListener("click", openModal);
	refs.closeModalBtn.addEventListener("click", closeModal);

	function openModal(e) {
		e.preventDefault();
		refs.modal.classList.add("is-hidden");
	}

	function closeModal (e) {
		e.preventDefault();
		refs.modal.classList.remove("is-hidden");

	}