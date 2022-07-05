
	const refs = {
		openModalBtn: document.querySelector('.footer__link'),
		// closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal-library]"),
	};
	console.log(refs.openModalBtn, refs.modal);
	refs.openModalBtn.addEventListener("click", toggleModal);
	// refs.closeModalBtn.addEventListener("click", toggleModal);

	function toggleModal(e) {
		e.preventDefault();
		refs.modal.classList.add("is-hidden");
	}
