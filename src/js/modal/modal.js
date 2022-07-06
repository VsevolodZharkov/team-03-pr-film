import { getGeneres } from '../markup/createmarkup';

const refs = {
  openGallery: document.querySelector('.gallery'),
  closeBtn: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('[data-modal]'),
  modal: document.querySelector('.modal__form'),
  article: document.querySelector('.modal__form-card'),
  btnWatched: document.querySelector('.modal__button__item-watched'),
  btnQueue: document.querySelector('.modal__button__item-queue'),
};

let film;
let markUp = '';

function showModal(data) {
  film = data.results;
  refs.openGallery.addEventListener('click', onClickCard);
  // console.log(data);
}

function onClickCard(event) {
  if (event.target.nodeName === event.currentTarget.nodeName) {
    return;
  }
  const idFilm = event.target.closest('li').dataset.id;
  createModalMarkup(film, idFilm);
  refs.backdrop.classList.add('is-open');
  document.addEventListener('click', onClickBackdrop);
  document.addEventListener('keydown', onEscClick);
}

function createModalMarkup(film, idFilm) {
  const filteredFilm = film.filter(element => {
    // console.log(element.id);
    return element.id === Number(idFilm);
  });
  // console.log(filteredFilm[0]);

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
        src="https://image.tmdb.org/t/p/w500${poster_path}"
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
              <td class="modal__text-params modal__text-low">${getGeneres(
                filteredFilm[0].genre_ids,
                genresArr
              ).join(', ')}</td>
            </tr>
          </tbody>
        </table>
        <h3 class="modal__descript-titel">About</h3>
        <p class="modal__descript-text">
          ${overview}
        </p>
        <ul class="modal__button__list">
          <li>
            <button class="modal__button__item-watched" type="button">add to Watched</button>
          </li>
          <li><button class="modal__button__item-queue" type="button">add to queue</button></li>
        </ul>
      </div>
  `;
  refs.article.innerHTML = markUp;
}

// refs.btnWatched.addEventListener('click', getData);
// refs.btnQueue.addEventListener('click', getMovieFromLocalStorage);

export { showModal };

const closeBtn = document.querySelector('.modal__btn');

closeBtn.addEventListener('click', onClickCloseBtn);

function onClickCloseBtn(event) {
  event.preventDefault();
  refs.backdrop.classList.remove('is-open');
  removeListener();
}

function onClickBackdrop(event) {
  if (event.target === refs.backdrop) {
    refs.backdrop.classList.remove('is-open');
    removeListener();
  }
}

function onEscClick(event) {
  if (event.code === 'Escape') {
    refs.backdrop.classList.remove('is-open');
    removeListener();
  }
}
function removeListener() {
  document.removeEventListener('keydown', onEscClick);
  document.removeEventListener('click', onClickBackdrop);
}

// локальне сховище
// function getData(event) {
//   console.log(event);
//   setItemToLocalStorage(key, objFilm);
// }

// function setItemToLocalStorage(key, objFilm) {
// console.log(key);
// if (!localStorage.getItem(key)) {
//   // якщо фільма немає у сховищі
//   const array = [];
//   array.push(objFilm);
//   localStorage.setItem(key, JSON.stringify(array));
// } else {
//   //якщо фільм є у сховищі
//   const storageValue = localStorage.getItem(key);
//   const dataMovie = JSON.parse(storageValue);
//   dataMovie.push(objFilm);
// }
// }

// function getMovieFromLocalStorage(key) {
//   //отримуємо фільм зі сховища
//   const storageValue = localStorage.getItem(key);
//   const dataMovie = JSON.parse(storageValue);
//   return dataMovie;
// }
