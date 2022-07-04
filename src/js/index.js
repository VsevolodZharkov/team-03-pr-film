import { createMarkUp } from './markup/createmarkup';
import { searchMovies } from './apisreq/getserchquery';
import { getGenresPopfilms } from './apisreq/genresandtrends';
//----------------------------------------------------------------//

getGenresPopfilms();

console.log('hello i go home');

searchMovies('batman', 1).then(data => console.log(data.results));
