import { getMovieFromLocalStorage } from './getfromlocalstorage';
import { createMarkUpListFilm } from './createlistcards';
import { renderBtnPag, handlerPagination } from './lab-pag';
import { showLabModal } from './lab-modal';
const watched = document.querySelector('.js-watched');
const queue = document.querySelector('.js-queue');

function openQueue () {
	watched.classList.remove('is-active');
	queue.classList.add('is-active');
	const films = getMovieFromLocalStorage('queue');
	let perPage = 20;
	let totalPages = Math.ceil(films.length / perPage);

//рендер карточек
	createMarkUpListFilm(1, films);

//рендер пагинации
	renderBtnPag(1, totalPages);
	handlerPagination(totalPages, 'queue');
	showLabModal(films);
}




export { openQueue };