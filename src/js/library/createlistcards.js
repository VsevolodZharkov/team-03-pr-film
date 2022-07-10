/**
 * render markup with films
 * @param {array} films
 */
function createMarkUpListFilm(page, films) {
  let perPage = 20;

  let startEl = (page - 1) * perPage;

  let endEl = startEl + 20;

  const gallery = document.querySelector('.gallery');
  const genresArr = JSON.parse(localStorage.getItem('genres'));

  let markup = '';
  for (let i = startEl; i < endEl; i++) {
    if (i < films.length) {
      markup += `<li class="gallery__item" data-id="${films[i].id}">
                <article>
                    <img class="article__image" src="${
                      !films[i].poster_path
                        ? 'https://img.freepik.com/free-vector/error-404-concept-for-landing-page_52683-20173.jpg?w=2000'
                        : 'https://image.tmdb.org/t/p/w500' +
                          films[i].poster_path
                    }" alt="${
        films[i].title ? films[i].title : films[i].original_title
      }" width="280" loading="lazy">
      <div class ="card__desc">
                    <h1 class="article__description">${
                      films[i].title ? films[i].title : films[i].original_title
                    }</h1>
                    <p class="article__description-orange">
                        <span class="pseudo-element">
                            ${
                              getGeneres(films[i].genre_ids, genresArr)
                                .length >= 3
                                ? getGeneres(films[i].genre_ids, genresArr)
                                    .slice(0, 2)
                                    .join(', ') + ', Others...'
                                : getGeneres(
                                    films[i].genre_ids,
                                    genresArr
                                  ).join(', ')
                                ? getGeneres(
                                    films[i].genre_ids,
                                    genresArr
                                  ).join(', ')
                                : 'NO DATA'
                            }
                        </span>
                        <span class="article__description-year">
                            ${
                              films[i].release_date
                                ? films[i].release_date.slice(0, 4)
                                : 'OUR ERA'
                            }
                        </span>
                        <span class="modal__text-params-vote modal__text-params">
                        ${films[i].vote_average}           
                        </span>
                    </p>
                    </div>
                </article>
            </li>`;
    }
  }

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
export { createMarkUpListFilm, getGeneres };
