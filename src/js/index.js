import { createMarkUp } from './markup/createmarkup';
import { getGenresPopfilms } from './apisreq/genresandtrends';
import { renderButtonsPag } from './paginaton/pagination';
import { showModal } from './modal/modal';
import { theme, currentTheme } from './switcher/switcher';
import { seachByQuery } from './header/header';
import { buttonUp } from './button-up/buttton-up';
import { handlerModalFooter } from './modal-footer/modal-footer'
//----------------------------------------------------------------//
// get and setup theme color
// go next
currentTheme();

let currentPage = 1;
// set curent page of trend films
if (localStorage.getItem('currentPage')) {
  currentPage = localStorage.getItem('currentPage');
}
// get trend films and genres
getGenresPopfilms()
  .then(data => {
    createMarkUp(data.results);
    renderButtonsPag(currentPage, data.total_pages);
    showModal(data);
  })
  .catch(er => console.log(er))
  .finally(() => {});


// footer modal
handlerModalFooter();
// search films by query
seachByQuery();

//home btn
buttonUp();



