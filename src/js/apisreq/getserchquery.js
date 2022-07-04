// //----------------------------------------------//
const KEY_API = '7a4cd4317772102a9b88ef6a54b71590';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';

/**
 * Get data from API with query snd page pagination
 * @param {String} query
 * @param {Number} page
 * @returns  object with data
 */
async function searchMovies(query, page) {
  const params = new URLSearchParams({
    api_key: KEY_API,
    page,
    query,
  });
  return await fetch(`${BASE_URL}?${params}`).then(r => r.json());
}

export { searchMovies };
