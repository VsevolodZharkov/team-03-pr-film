import { getTrendMovies } from './gettrends';
import { setupGenesToStorage } from './getgenres';
import { createMarkUp } from '../markup/createmarkup';
//-----------------------------------------------------------//

async function getGenresPopfilms() {
  await setupGenesToStorage();
  let trendPage = 1;

  getTrendMovies(trendPage)
    .then(data => {
      createMarkUp(data.results);
    })
    .catch(er => console.log(er))
    .finally(() => console.log('Some logic'));
}

export { getGenresPopfilms };
