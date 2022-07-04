const KEY_API = '7a4cd4317772102a9b88ef6a54b71590';
const BASE_URL = 'https://api.themoviedb.org/3/genre/movie/list';

/**
 * get data with genres from APi and set it into the Local storage
 * @returns array with genres
 */
async function getGenres() {
  const params = new URLSearchParams({
    api_key: KEY_API,
  });
  return await fetch(`${BASE_URL}?${params}`).then(r => r.json());
}

/**
 *
 * @param {*} params
 */
function setupGenesToStorage(params) {
  getGenres().then(data => {
    localStorage.setItem('genres', JSON.stringify(data));
  });
}

export { setupGenesToStorage };
