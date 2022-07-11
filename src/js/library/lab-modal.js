import { getGeneres } from './createlistcards';
import { getMovieFromLocalStorage } from './getfromlocalstorage';
import { createMarkUpListFilm } from './createlistcards';
import { renderDefalt } from '../library';
import { isInLocalstorage } from '../modal/isInLCyet';
import { setItemToLocalStorage } from '../modal/modal';
import { renderBtnPag, handlerPagination } from './lab-pag';
import { renderCards } from '../library';
//----------------------------------------------------//
const refs = {
  openGallery: document.querySelector('.gallery'),
  closeBtn: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('[data-modal]'),
  modal: document.querySelector('.modal__form'),
  article: document.querySelector('.modal__form-card'),
  body: document.querySelector('body'),
};
const KEY_QUEUE = 'queue';
const KEY_WATCHED = 'watched';

let film;
let markUp = '';
let idFilm;

function showLabModal(key) {
  film = getMovieFromLocalStorage(key);
  refs.openGallery.addEventListener('click', onClickCard);
}

function onClickCard(event) {
  if (event.target.nodeName === event.currentTarget.nodeName) {
    return;
  }
  idFilm = event.target.closest('li').dataset.id;

  createModalMarkup(film, idFilm);
  refs.backdrop.classList.add('is-open');
  refs.body.classList.add('ishidden');
  document.addEventListener('click', onClickBackdrop);
  document.addEventListener('keydown', onEscClick);
}

function createModalMarkup(arr, id) {
  const filteredFilm = arr.filter(el => {
    return el.id === Number(id);
  });

  const genresArr = JSON.parse(localStorage.getItem('genres'));
  const {
    title,
    poster_path,
    overview,
    vote_average,
    vote_count,
    popularity,
    original_title,
  } = filteredFilm[0];

  markUp = `
      <img
        class="modal__form-img"
        src="${
          !poster_path
            ? 'https://img.freepik.com/free-vector/error-404-concept-for-landing-page_52683-20173.jpg?w=2000'
            : 'https://image.tmdb.org/t/p/w500' + poster_path
        }"
        alt=""
      />
      <div class="modal__descript">
        <h2 class="modal__title">${title}</h2>

        <table class="modal__descript-table">
          <tbody>
            <tr>
              <td class="modal__text-properties">Vote / Votes</td>
              <td class="modal__text-params">
                <span class="modal__text-params-vote">${vote_average}</span> /
                <span class="modal__text-params-votes">${vote_count}</span>
              </td>
            </tr>
            <tr>
              <td class="modal__text-properties">Popularity</td>
              <td class="modal__text-params">${popularity}</td>
            </tr>
            <tr>
              <td class="modal__text-properties">Original Title</td>
              <td class="modal__text-params">${original_title}</td>
            </tr>
            <tr>
              <td class="modal__text-properties">Genre</td>
              <td class="modal__text-params modal__text-low">${
                getGeneres(filteredFilm[0].genre_ids, genresArr).join(', ')
                  ? getGeneres(filteredFilm[0].genre_ids, genresArr).join(', ')
                  : 'NO DATA'
              }</td>
            </tr>
          </tbody>
        </table>
        <h3 class="modal__descript-titel">About</h3>
        <p class="modal__descript-text">
          ${overview ? overview : 'NO DATA'}
        </p>
        <ul class="modal__button__list">
          <li>
<button class="modal__button__item-watched" type="button" data-action="${
    isInLocalstorage(KEY_WATCHED, id) ? 'remove' : 'add'
  }">
            ${
              isInLocalstorage(KEY_WATCHED, id)
                ? 'remove from watched'
                : 'add to watched'
            }
  </button>
          </li>
          <li>
 <button class="modal__button__item-queue" type="button" data-action="${
   isInLocalstorage(KEY_QUEUE, id) ? 'remove' : 'add'
 }">
${isInLocalstorage(KEY_QUEUE, id) ? 'remove from QUEUE' : 'add to QUEUE'}
  </button>
  </li>
        </ul>
      </div>
  `;

  refs.article.innerHTML = markUp;
  const btnWatched = document.querySelector('.modal__button__item-watched');
  const btnQueue = document.querySelector('.modal__button__item-queue');
  btnWatched.addEventListener('click', actionWatch);
  btnQueue.addEventListener('click', actionQueue);
}

function actionWatch(e) {
  if (e.target.dataset.action === 'add') {
    const selectFilm = film.find(item => {
      return item.id === Number(idFilm);
    });

    setItemToLocalStorage(KEY_WATCHED, selectFilm);

    e.target.textContent = 'Remove from watched';
    e.target.dataset.action = 'remove';
  } else {
    const films = getMovieFromLocalStorage(KEY_WATCHED);
    const index = films.findIndex(item => item.id === Number(idFilm));
    films.splice(index, 1);
    localStorage.setItem(KEY_WATCHED, JSON.stringify(films));
    e.target.textContent = 'Add to watched';
    e.target.dataset.action = 'add';
  }
}
function actionQueue(e) {
  if (e.target.dataset.action === 'add') {
    const selectFilm = film.find(item => {
      return item.id === Number(idFilm);
    });
    setItemToLocalStorage(KEY_QUEUE, selectFilm);

    e.target.textContent = 'Remove from queue';
    e.target.dataset.action = 'remove';
  } else {
    const films = getMovieFromLocalStorage(KEY_QUEUE);
    const index = films.findIndex(item => item.id === Number(idFilm));
    films.splice(index, 1);
    localStorage.setItem(KEY_QUEUE, JSON.stringify(films));
    e.target.textContent = 'Add to queue';
    e.target.dataset.action = 'add';
  }
}

const closeBtn = document.querySelector('.modal__btn');

closeBtn.addEventListener('click', onClickCloseBtn);

function onClickCloseBtn() {
  onCloseModal();
}

function onClickBackdrop(event) {
  if (event.target === refs.backdrop) {
    onCloseModal();
  }
}

function onEscClick(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}

function onCloseModal() {
  refs.backdrop.classList.remove('is-open');
  refs.body.classList.remove('ishidden');
  removeListener();
  const dataInfo = document.querySelector(
    '.filters-row__btn--active.is-active'
  );
  const films = JSON.parse(localStorage.getItem(dataInfo.dataset.info));
  renderDefalt();
  if (!films || films.length === 0) {
    return;
  }
  let perPage = 20;
  let totalPages = Math.ceil(films.length / perPage);
  createMarkUpListFilm(1, films);
  renderBtnPag(1, totalPages);
  handlerPagination(totalPages, dataInfo.dataset.info);
}

function removeListener() {
  document.removeEventListener('keydown', onEscClick);
  document.removeEventListener('click', onClickBackdrop);
}

export { showLabModal };
