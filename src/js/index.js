import { createMarkUp } from './markup/createmarkup';
import { searchMovies } from './apisreq/getserchquery';
import { getGenresPopfilms } from './apisreq/genresandtrends';
//----------------------------------------------------------------//

getGenresPopfilms();

searchMovies('batman', 1).then(data => console.log(data.results));
