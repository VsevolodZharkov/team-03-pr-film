import { createMarkUp } from './markup/createmarkup';
import { getGenresPopfilms } from './apisreq/genresandtrends';
import { renderButtonsPag } from './paginaton/pagination';
import { showModal } from './modal/modal';
import { spiner } from './paginaton/spiner';
import { seachByQuery } from './header/header';
import { getTrendMovies } from './apisreq/gettrends';

//----------------------------------------------------------------//
/// hekekke
/// hekekke1qqqq

let searchData = null;
let currentPage = 1;
if (localStorage.getItem('currentPage')) {
  currentPage = localStorage.getItem('currentPage');
}
// do ligic with seach film by name

getGenresPopfilms()
  .then(data => {
    createMarkUp(data.results);

    renderButtonsPag(currentPage, data.total_pages);

    showModal(data);
  })
  .catch(er => console.log(er))
  .finally(() => {
    spiner.stop();
  });

seachByQuery();
