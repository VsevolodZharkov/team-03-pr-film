import { createMarkUp } from './markup/createmarkup';
// import { searchMovies } from './apisreq/getserchquery';
import { getGenresPopfilms } from './apisreq/genresandtrends';
import { renderButtonsPag } from './paginaton/pagination';
import { showModal } from './modal/modal';
import { spiner } from './paginaton/spiner';
import { x } from './header/header';

//----------------------------------------------------------------//

getGenresPopfilms()
  .then(data => {
    console.log(data);
    createMarkUp(data.results);
    renderButtonsPag(1, data.total_pages);
    showModal(data);
  })
  .catch(er => console.log(er))
  .finally(() => {
    spiner.stop();
  });

// searchMovies('batman', 1).then(data => console.log(data));
x();
