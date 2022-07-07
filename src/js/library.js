import { getMovieFromLocalStorage } from './library/getfromlocalstorage';
import { createMarkUpListFilm } from './library/createlistcards';
import { renderBtnPag, handlerPagination } from './library/lab-pag';
import { showLabModal } from './library/lab-modal';

// //----------------------------------------------------------------//
const refs = {
  btnWatched: document.querySelector('.js-watched'),
  btnQueue: document.querySelector('.js-queue'),
  gallery: document.querySelector('.gallery'),
  pagination: document.querySelector('.js-pagination'),
};

//фильми из локалстораге
const films = getMovieFromLocalStorage('queue');
let perPage = 20;
let totalPages = Math.ceil(films.length / perPage);
//активная кнопка
refs.btnQueue.classList.add('is-active');
//рендер карточек
createMarkUpListFilm(1, films);

//рендер пагинации
renderBtnPag(1, totalPages);
handlerPagination(totalPages);
showLabModal(films);
