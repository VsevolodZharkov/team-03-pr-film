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
// let KEY_QUEUE = 'queue';
// let KEY_WATCHED = 'watched';

refs.btnQueue.classList.add('is-active');
//активная кнопка
refs.btnWatched.addEventListener('click', openWatched)
refs.btnQueue.addEventListener('click', openQueue)

//фильми из локалстораге
const films = getMovieFromLocalStorage('queue');
	let perPage = 20;
	let totalPages = Math.ceil(films.length / perPage);
//рендер карточек
createMarkUpListFilm(1, films);

//рендер пагинации
renderBtnPag(1, totalPages);
handlerPagination(totalPages);
showLabModal(films);

