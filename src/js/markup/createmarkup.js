function createMarkUp(films) {
  console.log(films);
  const gallery = document.querySelector('.gallery');
  const genresArr = JSON.parse(localStorage.getItem('genres'));
  const markup = films
    .map(item => {
      return `<li class="gallery__item">
                <article>
                    <img class="article__image" src="https://image.tmdb.org/t/p/w500${
                      item.poster_path
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
