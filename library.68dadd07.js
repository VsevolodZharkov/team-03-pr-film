!function(){var e={openModalBtn:document.querySelector(".footer__link"),closeModalBtn:document.querySelector(".modal__btn-footer"),modal:document.querySelector("[data-modal-footer]"),body:document.querySelector("body")};function d(d){d.target===e.modal&&(e.modal.classList.remove("is-hidden"),e.body.classList.add("ishidden"),n())}function o(d){"Escape"===d.code&&(e.modal.classList.remove("is-hidden"),e.body.classList.add("ishidden"),n())}function n(){document.removeEventListener("keydown",o),document.removeEventListener("click",d)}console.log(e.body),e.openModalBtn.addEventListener("click",(function(n){n.preventDefault(),e.modal.classList.add("is-hidden"),e.body.classList.add("ishidden"),document.addEventListener("click",d),document.addEventListener("keydown",o)})),e.closeModalBtn.addEventListener("click",(function(d){d.preventDefault(),e.modal.classList.remove("is-hidden"),e.body.classList.add("ishidden"),n()}))}();
//# sourceMappingURL=library.68dadd07.js.map
