function getMovieFromLocalStorage(key) {
  //отримуємо фільм зі сховища
  const storageValue = localStorage.getItem(key);
  const dataMovie = JSON.parse(storageValue);
  return dataMovie;
}

export { getMovieFromLocalStorage };
