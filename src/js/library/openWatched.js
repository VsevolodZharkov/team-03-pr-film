import { getMovieFromLocalStorage } from './getfromlocalstorage';
import { createMarkUpListFilm } from './createlistcards';
import { renderBtnPag, handlerPagination } from './lab-pag';
import { showLabModal } from './lab-modal';

const watched = document.querySelector('.js-watched');
const queue = document.querySelector('.js-queue');

function openWatched () {
	watched.classList.add('is-active');
	queue.classList.remove('is-active');
	const films = getMovieFromLocalStorage('watched');
	if (!films) {
		return
	}
	let perPage = 20;
	let totalPages = Math.ceil(films.length / perPage);

//рендер карточек
	createMarkUpListFilm(1, films);

//рендер пагинации
	renderBtnPag(1, totalPages);
	handlerPagination(totalPages, 'watched');
	showLabModal(films);
}


export { openWatched };