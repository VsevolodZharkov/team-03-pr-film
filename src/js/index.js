import { createMarkUp } from './markup/createmarkup';
import { searchMovies } from './apisreq/getserchquery';
import { getGenresPopfilms } from './apisreq/genresandtrends';
import { renderButtonsPag } from './paginaton/pagination';
//----------------------------------------------------------------//

getGenresPopfilms()
  .then(data => {
    console.log(data);
    createMarkUp(data.results);
    renderButtonsPag(1, data.total_pages);
  })
  .catch(er => console.log(er))
  .finally(() => console.log('Some logic'));

searchMovies('batman', 1).then(data => console.log(data));