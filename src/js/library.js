import { getMovieFromLocalStorage } from './library/getfromlocalstorage';
import { createMarkUpListFilm } from './library/createlistcards';
import { renderBtnPag, handlerPagination } from './library/lab-pag';
import { showLabModal } from './library/lab-modal';
import { openWatched } from './library/openWatched';
import { openQueue } from './library/openQueue';

// //----------------------------------------------------------------//
const refs = {
  btnWatched: document.querySelector('.js-watched'),
  btnQueue: document.querySelector('.js-queue'),
  gallery: document.querySelector('.gallery'),
  pagination: document.querySelector('.js-pagination'),
};

let KEY_QUEUE = 'queue';
let KEY_WATCHED = 'watched';

refs.btnQueue.classList.add('is-active');
//активная кнопка
refs.btnWatched.addEventListener('click', openWatched);
refs.btnQueue.addEventListener('click', openQueue);

// фильми из локалстораге
const films = getMovieFromLocalStorage('queue');
if (!films || films.length === 0) {
  renderDefalt();
} else {
  renderCards(films);
}

// если пусто в локал сторедж
function renderDefalt() {
  refs.gallery.innerHTML = `<li class="default">
        <p class="message">Sorry, there is nothing here yet.</p>
        <img
          src="https://img.freepik.com/free-photo/awkward-girl-shrugging-shoulders-with-apologizing-face-expression-looking-clueless-say-sorry-showing-empty-hands-has-nothing-standing-over-white-background_176420-48867.jpg"
          alt="Empty"
        />
      </li>`;
}

// если есть данные в локал сторедж по ключу "queue"
function renderCards(films) {
  let perPage = 20;
  let totalPages = Math.ceil(films.length / perPage);
  // рендер карточек
  createMarkUpListFilm(1, films);

  // рендер пагинации
  renderBtnPag(1, totalPages);
  handlerPagination(totalPages, KEY_QUEUE);
  showLabModal(KEY_QUEUE);
}

export { renderDefalt };
