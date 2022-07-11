import { getMovieFromLocalStorage } from './getfromlocalstorage';
import { createMarkUpListFilm } from './createlistcards';
// //----------------------------------------------------------------//
const refsPag = {
  pagContainer: document.querySelector('.js-pagination'),
};

let currentPage;

function renderBtnPag(page, totalPages) {
  refsPag.pagContainer.innerHTML = '';
  if (!page || !totalPages || totalPages === 1) {
    return;
  }
  let markup = '';

  const beforeOnePage = page - 1;
  const beforeTwoPage = page - 2;
  const afterOnePage = Number(page) + 1;
  const afterTwoPage = Number(page) + 2;
  currentPage = page;

  if (page > 1) {
    markup += `<li class="pagination__item"><button class="previos">
        &larr;</button>
      </li>`;
  }
  if (page > 3) {
    markup += `<li class="pagination__item"><button class="pagination__btn">1</button></li>`;
  }
  if (page > 4) {
    markup += `<li class="pagination__item"><button class="pagination__dottes">...</button></li>`;
  }
  if (page > 2) {
    markup += `<li class="pagination__item"><button class="pagination__btn">${beforeTwoPage}</button></li>`;
  }
  if (page > 1) {
    markup += `<li class="pagination__item"><button class="pagination__btn">${beforeOnePage}</button></li>`;
  }
  markup += `<li class="pagination__item"><button class="pagination__btn active__btn">${page}</button></li>`;

  if (afterOnePage <= totalPages) {
    markup += `<li class="pagination__item"><button class="pagination__btn">${afterOnePage}</button></li>`;
  }
  if (afterTwoPage <= totalPages) {
    markup += `<li class="pagination__item"><button class="pagination__btn">${afterTwoPage}</button></li>`;
  }

  if (totalPages > page + 3) {
    markup += `<li class="pagination__item"><button class="pagination__dottes">...</button></li>`;
  }
  if (totalPages > page + 2) {
    markup += `<li class="pagination__item"><button class="pagination__btn">${totalPages}</button></li>`;
  }
  if (totalPages > page) {
    markup += `<li class="pagination__item"><button class="next">&rarr;</button></li>`;
  }
  refsPag.pagContainer.innerHTML = markup;
}

/////////////////////////////////////////////////////////////////

function handlerPagination(totalPages, key) {
  refsPag.pagContainer.addEventListener('click', onClickPagBtn);
  function onClickPagBtn(event) {
    if (
      event.target.nodeName !== 'BUTTON' ||
      event.target.textContent === '...'
    ) {
      return;
    }

    if (event.target.classList.contains('previos')) {
      currentPage = Number(currentPage) - 1;
    } else if (event.target.classList.contains('next')) {
      currentPage = Number(currentPage) + 1;
    } else {
      currentPage = Number(event.target.textContent);
    }

    const films = getMovieFromLocalStorage(key);
    renderBtnPag(currentPage, totalPages);
    createMarkUpListFilm(currentPage, films);
  }
}

// function removeListenerFromBtnPag() {
//   refsPag.pagContainer.removeEventListener('click', onClickPagBtn);
// }

export { renderBtnPag, handlerPagination };
