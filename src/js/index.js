import { createMarkUp } from './markup/createmarkup';
import { getGenresPopfilms } from './apisreq/genresandtrends';
import { renderButtonsPag } from './paginaton/pagination';
import { showModal } from './modal/modal';
import { spiner } from './paginaton/spiner';
import { SeachByQuery } from './header/header';
import { getTrendMovies } from './apisreq/gettrends';
import { getVotes } from './library/createlistcards';

//----------------------------------------------------------------//
/// hekekke
let searchData = null;

// do ligic with seach film by name

getGenresPopfilms()
  .then(data => {
    createMarkUp(data.results);
    // if (localStorage.getItem('currentPage')) {

    // }
    renderButtonsPag(1, data.total_pages);
    // localStorage.setItem('currentPage', page)
    showModal(data);
  })
  .catch(er => console.log(er))
  .finally(() => {
    spiner.stop();
  });

SeachByQuery();
// searchMovies('batman', 1).then(data => console.log(data));
