import { getGeneres } from '../markup/createmarkup';
import { getMovieFromLocalStorage } from '../library/getfromlocalstorage';
import { isInLocalstorage } from './isInLCyet';

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

function showModal(data) {
  film = data.results;
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

function createModalMarkup(film, idFilm) {
  const filteredFilm = film.filter(element => {
    return element.id === Number(idFilm);
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
              isInLocalstorage(KEY_WATCHED, idFilm) ? 'remove' : 'add'
            }">${
    isInLocalstorage(KEY_WATCHED, idFilm)
      ? 'remove from watched'
      : 'add to watched'
  }</button>
          </li>
          <li><button class="modal__button__item-queue" type="button"  data-action="${
            isInLocalstorage(KEY_QUEUE, idFilm) ? 'remove' : 'add'
          }">${
    isInLocalstorage(KEY_QUEUE, idFilm) ? 'remove from QUEUE' : 'add to QUEUE'
  }</button></li>
        </ul>
      </div>
  `;
  refs.article.innerHTML = markUp;
  // функция для рендера атрибута и контента
  const btnWatched = document.querySelector('.modal__button__item-watched');
  const btnQueue = document.querySelector('.modal__button__item-queue');

  btnWatched.addEventListener('click', setToLocalStoregWatched);
  btnQueue.addEventListener('click', setToLocalStoregQue);
}

const closeBtn = document.querySelector('.modal__btn');

closeBtn.addEventListener('click', onClickCloseBtn);

function onClickCloseBtn(event) {
  event.preventDefault();
  refs.backdrop.classList.remove('is-open');
  refs.body.classList.remove('ishidden');
  removeListener();
}

function onClickBackdrop(event) {
  if (event.target === refs.backdrop) {
    refs.backdrop.classList.remove('is-open');
    refs.body.classList.remove('ishidden');
    removeListener();
  }
}

function onEscClick(event) {
  if (event.code === 'Escape') {
    refs.backdrop.classList.remove('is-open');
    refs.body.classList.remove('ishidden');
    removeListener();
  }
}

function removeListener() {
  document.removeEventListener('keydown', onEscClick);
  document.removeEventListener('click', onClickBackdrop);
}

function setToLocalStoregWatched(e) {
  if (e.target.dataset.action === 'add') {
    const selectFilm = film.find(item => {
      return item.id === Number(idFilm);
    });
    setItemToLocalStorage('watched', selectFilm);
    e.target.textContent = 'Remove from watched';
    e.target.dataset.action = 'remove';
  } else {
    const films = getMovieFromLocalStorage('watched');

    let index = films.findIndex(item => item.id === Number(idFilm));
    films.splice(index, 1);
    localStorage.setItem('watched', JSON.stringify(films));
    e.target.textContent = 'Add to watched';
    e.target.dataset.action = 'add';
  }
}

function setToLocalStoregQue(e) {
  if (e.target.dataset.action === 'add') {
    const selectFilm = film.find(item => {
      return item.id === Number(idFilm);
    });
    setItemToLocalStorage('queue', selectFilm);
    e.target.textContent = 'Remove from queue';
    e.target.dataset.action = 'remove';
  } else {
    const films = getMovieFromLocalStorage('queue');
    const index = films.findIndex(item => item.id === Number(idFilm));
    films.splice(index, 1);
    localStorage.setItem('queue', JSON.stringify(films));
    e.target.textContent = 'Add to queue';
    e.target.dataset.action = 'add';
  }
}
/**
 *
 * @param {*} key
 * @param {*} objFilm
 */
function setItemToLocalStorage(key, objFilm) {
  if (!localStorage.getItem(key)) {
    const array = [];
    array.push(objFilm);
    localStorage.setItem(key, JSON.stringify(array));
  } else {
    const storageValue = localStorage.getItem(key);
    const dataMovie = JSON.parse(storageValue);

    const isInLocalStoreg = dataMovie.find(item => item.id === objFilm.id);

    if (!isInLocalStoreg) {
      dataMovie.push(objFilm);
      localStorage.setItem(key, JSON.stringify(dataMovie));
    }
  }
}

export { showModal, setItemToLocalStorage };
