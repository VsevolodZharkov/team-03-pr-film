import { getTrendMovies } from './gettrends';
import { setupGenesToStorage } from './getgenres';
// import { createMarkUp } from '../markup/createmarkup';
//-----------------------------------------------------------//

async function getGenresPopfilms() {
  setupGenesToStorage();
  let trendPage = localStorage.getItem('currentPage');

  if (!localStorage.getItem('currentPage')) {
    trendPage = 1;

  }
  return await getTrendMovies(trendPage);
}

export { getGenresPopfilms };
