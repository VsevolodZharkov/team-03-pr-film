import { getGeneres } from './createlistcards';
import { getMovieFromLocalStorage } from './getfromlocalstorage';
import { createMarkUpListFilm } from './createlistcards';
import { renderDefalt } from '../library';

const refs = {
  openGallery: document.querySelector('.gallery'),
  closeBtn: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('[data-modal]'),
  modal: document.querySelector('.modal__form'),
  article: document.querySelector('.modal__form-card'),
  body: document.querySelector('body'),
};

let film;
let markUp = '';
let idFilm;
let keyOfLocalStrg;

function showLabModal(key) {
  keyOfLocalStrg = key;
  film = getMovieFromLocalStorage(key);
  refs.openGallery.addEventListener('click', onClickCard);
}

function onClickCard(event) {
  if (event.target.nodeName === event.currentTarget.nodeName) {
    return;
  }
  idFilm = event.target.closest('li').dataset.id;
  console.log(idFilm);
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
            <button class="modal__button__item-watched" type="button">remove from Watched</button>
          </li>
          <li><button class="modal__button__item-queue" type="button">remove from queue</button></li>
        </ul>
      </div>
  `;

  refs.article.innerHTML = markUp;
  const btnWatched = document.querySelector('.modal__button__item-watched');
  const btnQueue = document.querySelector('.modal__button__item-queue');

  if (keyOfLocalStrg === 'queue') {
    btnWatched.textContent = `add to Watched`;
    btnQueue.textContent = `remove from queue`;
    btnQueue.addEventListener('click', deleteFromLS);
    btnWatched.addEventListener('click', addToLS);
  } else {
    btnWatched.textContent = `remove from Watched`;
    btnQueue.textContent = `add to queue`;
    btnWatched.addEventListener('click', deleteFromLS);
    btnQueue.addEventListener('click', addToLS);
  }
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

function deleteFromLS(e) {
  const films = getMovieFromLocalStorage(keyOfLocalStrg);
  const index = films.findIndex(item => item.id === Number(idFilm));

  films.splice(index, 1);

  localStorage.setItem(keyOfLocalStrg, JSON.stringify(films));
  createMarkUpListFilm(1, films);
  refs.backdrop.classList.remove('is-open');
  if (films.length === 0) {
    renderDefalt();
  }
}

function addToLS(e) {
  if (keyOfLocalStrg === 'queue') {
    console.log('here queue');
    const filmsWatched = getMovieFromLocalStorage('watched');
    const isSelectMovie = filmsWatched.find(item => item.id === Number(idFilm));
    //если такой фильм есть
    if (isSelectMovie) {
      return;
    }
    //добавляем
    const filmsQueue = getMovieFromLocalStorage('queue');
    const selectFilm = filmsQueue.find(item => item.id === Number(idFilm));
    filmsWatched.push(selectFilm);
    localStorage.setItem('watched', JSON.stringify(filmsWatched));
    console.log(e.target.textContent);
    e.target.textContent = 'added';
  } else if (keyOfLocalStrg === 'watched') {
    console.log('here watch');
    const filmsQueue = getMovieFromLocalStorage('queue');
    const isSelectMovie = filmsQueue.find(item => item.id === Number(idFilm));
    //если такой фильм есть
    if (isSelectMovie) {
      return;
    }
    //добавляем
    const filmsWatched = getMovieFromLocalStorage('watched');
    const selectFilm = filmsWatched.find(item => item.id === Number(idFilm));
    filmsQueue.push(selectFilm);
    localStorage.setItem('queue', JSON.stringify(filmsQueue));
    e.target.textContent = 'added';
  }
}

// function setToLocalStoregWatched(e) {
//   console.log(e);
//
//   e.target.textContent = 'Dоne!';
//   // e.target.setAttribute('disabled', 'disabled');
// }
// function setToLocalStoregQue(e) {
//   console.log(e);
//   const selectFilm = film.find(item => {
//     return item.id === Number(idFilm);
//   });
//   setItemToLocalStorage('queue', selectFilm);
//   e.target.textContent = 'Dоne!';
//   // e.target.setAttribute('disabled', 'disabled');
// }

// function setItemToLocalStorage(key, objFilm) {
//   if (!localStorage.getItem(key)) {
//     const array = [];
//     array.push(objFilm);
//     localStorage.setItem(key, JSON.stringify(array));
//   } else {
//     const storageValue = localStorage.getItem(key);
//     const dataMovie = JSON.parse(storageValue);

//     const isInLocalStoreg = dataMovie.find(item => item.id === objFilm.id);
//     console.log(isInLocalStoreg);
//     if (!isInLocalStoreg) {
//       dataMovie.push(objFilm);
//       localStorage.setItem(key, JSON.stringify(dataMovie));
//     }
//   }
// }

export { showLabModal };
