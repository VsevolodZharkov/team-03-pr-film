import { getMovieFromLocalStorage } from './getfromlocalstorage';
import { createMarkUpListFilm } from './createlistcards';
import { renderBtnPag, handlerPagination } from './lab-pag';
import { showLabModal } from './lab-modal';
import { renderDefalt } from './renderDefault';

///--------------------------------------------------------------//
const watched = document.querySelector('.js-watched');
const queue = document.querySelector('.js-queue');

function openQueue() {
  watched.classList.remove('is-active');
  queue.classList.add('is-active');
  renderDefalt();
  const films = getMovieFromLocalStorage('queue');

  if (!films || films.length === 0) {
    return;
  }
  let perPage = 20;
  let totalPages = Math.ceil(films.length / perPage);

  //рендер карточек
  createMarkUpListFilm(1, films);

  //рендер пагинации
  renderBtnPag(1, totalPages);
  handlerPagination(totalPages, 'queue');
  showLabModal('queue');
  //
  // watched.removeEventListener(openWatched);
}

export { openQueue };
