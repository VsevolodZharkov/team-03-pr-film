import { searchMovies } from '../apisreq/getserchquery.js';
import { createMarkUp } from '../markup/createmarkup';
import { renderButtonsPag, onClickPagBtn } from '../paginaton/pagination';
import { showModal } from '../modal/modal';
import { renderDefalt } from '../library/renderDefault.js';

//-------------------------------------------------------//
const pagContainer = document.querySelector('.js-pagination');
const formSearch = document.querySelector('.page-header__form');
const gallery = document.querySelector('.gallery');
const popup = document.querySelector('.search');
let query;
let currentPage;

function seachByQuery() {
  formSearch.addEventListener('submit', onSubmit);
}

function onSubmit(evt) {
  evt.preventDefault();


  query = evt.target.elements.text.value.trim();

  pagContainer.removeEventListener('click', onClickPagBtn);
  const validationQuery = evt.target.elements.text.value.trim();


  if (validationQuery === '') {
    popup.textContent =
      'Search result not successful. Enter the correct movie name and try again';
    setTimeout(() => {
      popup.textContent = '';
    }, 2000);

    return;
  } else {
    query = validationQuery;
  }

  currentPage = 1;
  localStorage.setItem('currentPage', currentPage);
  searchMovies(query, currentPage)
    .then(searchData => {
      if (searchData.total_pages === 0) {
        renderDefalt();
        popup.textContent =
          'Search result not successful. Enter the correct movie name and try again';
        setTimeout(() => {
          popup.textContent = '';
        }, 2000);
        renderButtonsPag(1, searchData.total_pages);
        return;
      }
      createMarkUp(searchData.results);
      renderButtonsPag(1, searchData.total_pages);
      pagContainer.removeEventListener('click', onClickPagBtn);
      pagContainer.addEventListener('click', handlerOnPag);
      showModal(searchData);
    })
    .catch(e => console.log(e))
    .finally(() => {});
  evt.target.reset();
}

function handlerOnPag(event) {
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
  /// changes

  searchMovies(query, currentPage)
    .then(d => {
      gallery.innerHTML = '';
      createMarkUp(d.results);
      renderButtonsPag(currentPage, d.total_pages);
      showModal(d);
    })
    .catch(e => console.log(e))
    .finally(() => {});
}

export { seachByQuery };
