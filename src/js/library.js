import { getMovieFromLocalStorage } from './library/getfromlocalstorage';
import { createMarkUpListFilm } from './library/createlistcards';
import { renderBtnPag, handlerPagination } from './library/lab-pag';
import { showLabModal } from './library/lab-modal';
import { openWatched } from './library/openWatched';
import { openQueue } from './library/openQueue';
import { buttonUp } from './button-up/buttton-up';
import { theme, currentTheme } from './switcher/switcher';
import { handlerModalFooter } from './modal-footer/modal-footer';
import { renderDefalt } from './library/renderDefault';
// //----------------------------------------------------------------//
const refs = {
  btnWatched: document.querySelector('.js-watched'),
  btnQueue: document.querySelector('.js-queue'),
  gallery: document.querySelector('.gallery'),
  pagination: document.querySelector('.js-pagination'),
};
currentTheme(theme);

const KEY_QUEUE = 'queue';
const KEY_WATCHED = 'watched';

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

// footer modal
handlerModalFooter();
buttonUp();

export { renderDefalt, renderCards, refs };

