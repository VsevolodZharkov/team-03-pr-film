/**
 * render markup with films
 * @param {array} films
 */
function createMarkUp(films) {
  // console.log(films);
  const gallery = document.querySelector('.gallery');
  const genresArr = JSON.parse(localStorage.getItem('genres'));
  const markup = films
    .map(item => {
      return `<li class="gallery__item" data-id="${item.id}">
                <article>
                    <img class="article__image" src="${
                      !item.poster_path
                        ? 'https://img.freepik.com/free-vector/error-404-concept-for-landing-page_52683-20173.jpg?w=2000'
                        : 'https://image.tmdb.org/t/p/w500' + item.poster_path
                    }" alt="${
        item.original_title ? item.original_title : item.title
      }" width="280" loading="lazy">
                    <h1 class="article__description">${
                      item.original_title ? item.original_title : item.title
                    }</h1>
                    <p class="article__description-orange">
                        <span class="pseudo-element">
                            ${returnFilms(item.genre_ids, genresArr)}
                        </span>
                        <span>
                            ${item.release_date.slice(0, 4)}
                        </span>
                    </p>
                </article>
            </li>`;
    })
    .join('');

  gallery.innerHTML = markup;
}

/**
 * return  string with genres
 * @param {Arr} arr  of genres_ids
 * @param {obj} genres
 * @returns  string
 */
function returnFilms(arr, genres) {
  // console.log('arr', arr);
  // console.log('genres', genres);

  const res = arr.map(item => {
    return genres.genres
      .filter(elem => {
        // console.log(elem.id === item);
        return elem.id === item;
      })
      .flatMap(one => one.name);
  });
  return `${
    res.length >= 3 ? res.slice(0, 2).join(', ') + ', Others' : res.join(', ')
  }`;
}
export { createMarkUp };