/**
 * render markup with films
 * @param {array} films
 */
function createMarkUp(films) {
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
        item.title ? item.title : item.original_title
      }" width="280" loading="lazy">
      <div class ="card__desc">
                    <h1 class="article__description">${
                      item.title ? item.title : item.original_title
                    }</h1>
                    <p class="article__description-orange">
                        <span class="pseudo-element">
                            ${
                              getGeneres(item.genre_ids, genresArr).length >= 3
                                ? getGeneres(item.genre_ids, genresArr)
                                    .slice(0, 2)
                                    .join(', ') + ', Others...'
                                : getGeneres(item.genre_ids, genresArr).join(
                                    ', '
                                  )
                                ? getGeneres(item.genre_ids, genresArr).join(
                                    ', '
                                  )
                                : 'NO DATA'
                            }
                        </span>
                        <span>
                            ${
                              item.release_date
                                ? item.release_date.slice(0, 4)
                                : 'OUR ERA'
                            }
                        </span>
                    </p>
                    </div>
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
 * @returns  array
 */
function getGeneres(arr, genres) {
  return arr.map(item => {
    return genres.genres
      .filter(elem => {
        return elem.id === item;
      })
      .flatMap(one => one.name);
  });
}
export { createMarkUp, getGeneres };
