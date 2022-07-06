import { spiner } from '../paginaton/spiner';
// //----------------------------------------------//
const KEY_API = '7a4cd4317772102a9b88ef6a54b71590';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/day';

/**
 * Function get data from API with trend movies/day
 * @param {Number} page of pagination
 * @returns promisse with object
 */
async function getTrendMovies(page) {
  spiner.spin(document.querySelector('.gallery'));
  const params = new URLSearchParams({
    api_key: KEY_API,
    page: page,
  });
  return await fetch(`${BASE_URL}?${params}`).then(r => r.json());
}

export { getTrendMovies };
