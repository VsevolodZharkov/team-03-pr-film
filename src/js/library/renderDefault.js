const gallery = document.querySelector('.gallery');

function renderDefalt() {
  gallery.innerHTML = `<li class="default">
        <p class="message">Sorry, there is nothing here yet.</p>
        <img
          src="https://img.freepik.com/free-photo/awkward-girl-shrugging-shoulders-with-apologizing-face-expression-looking-clueless-say-sorry-showing-empty-hands-has-nothing-standing-over-white-background_176420-48867.jpg"
          alt="Empty"
        />
      </li>`;
}
export { renderDefalt };
