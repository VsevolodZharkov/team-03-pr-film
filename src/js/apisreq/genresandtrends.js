import { getTrendMovies } from './gettrends';
import { setupGenesToStorage } from './getgenres';
import { createMarkUp } from '../markup/createmarkup';
//-----------------------------------------------------------//

async function getGenresPopfilms() {
  await setupGenesToStorage();
  let trendPage = 1;

  return await getTrendMovies(trendPage);
}

export { getGenresPopfilms };
