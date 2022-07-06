import { returnFilms } from '../markup/createmarkup';

const refs = {
  openGallery: document.querySelector('.gallery'),
  closeBtn: document.querySelector('[data-modal-close]'),
  backdrop: document.querySelector('[data-modal]'),
  modal: document.querySelector('.modal__form'),
};

let film;

function showModal(data) {
  film = data.results;
  refs.openGallery.addEventListener('click', onClickCard);
  // console.log(data);
}

function onClickCard(event) {
  if (event.target.nodeName === event.currentTarget.nodeName) {
    return;
  }
  // console.log(event.target.closest('li').dataset.id);
  const idFilm = event.target.closest('li').dataset.id;

  createModalMarkup(film, idFilm);
  refs.backdrop.classList.add('is-open');
}

function createModalMarkup(film, idFilm) {
  const filteredFilm = film.filter(element => {
    // console.log(element.id);
    return element.id === Number(idFilm);
  });
  console.log(filteredFilm[0]);
  const genresArr = JSON.parse(localStorage.getItem('genres'));
  const {
    title,
    poster_path,
    overview,
    vote_average,
    vote_count,
    popularity,
    original_title,
  } = filteredFilm[0];
  const markUp = `
  <article class="modal__form-card">
      <img
        class="modal__form-img"
        src="https://image.tmdb.org/t/p/w500${poster_path}"
        alt=""
      />
      <div class="modal__descript">
        <h2 class="modal__title">${title}</h2>

        <table class="modal__descript-table">
          <tbody>
            <tr>
              <td class="modal__text-properties">Vote / Votes</td>
              <td class="modal__text-params">
                <span class="modal__text-params-vote">${vote_average}</span> /
                <span class="modal__text-params-votes">${vote_count}</span>
              </td>
            </tr>
            <tr>
              <td class="modal__text-properties">Popularity</td>
              <td class="modal__text-params">${popularity}</td>
            </tr>
            <tr>
              <td class="modal__text-properties">Original Title</td>
              <td class="modal__text-params">${original_title}</td>
            </tr>
            <tr>
              <td class="modal__text-properties">Genre</td>
              <td class="modal__text-params modal__text-low">${returnFilms(
                filteredFilm[0].genre_ids,
                genresArr
              )}</td>
            </tr>
          </tbody>
        </table>
        <h3 class="modal__descript-titel">About</h3>
        <p class="modal__descript-text">
          ${overview}
        </p>
        <ul class="modal__button__list">
          <li>
            <button class="modal__button__item-watched" type="button">add to Watched</button>
          </li>
          <li><button class="modal__button__item-queue" type="button">add to queue</button></li>
        </ul>
      </div>
    </article>
  `;
  refs.modal.insertAdjacentHTML('beforeend', markUp);
}

export { showModal };

// наповнення картки
// const modal = document.querySelector('.modal__form');
// const newCard = createCard(galleryItems);
// let imgOrg;

// modal.insertAdjacentHTML('beforeend', newCard);

// function createCard(galleryItems) {
//   return galleryItems
//     .map(({  }) => {   // ключі по яких буде приходити фільм
//       return `
//     <article class="modal__form-card">
//       <img
//         class="modal__form-img"
//         src="./img/Rectangle 18.jpg"
//         alt=""
//       />
//       <div class="modal__descript">
//         <h2 class="modal__title">Name of the movie</h2>

//         <table class="modal__descript-table">
//           <tbody>
//             <tr>
//               <td class="modal__text-properties">Vote / Votes</td>
//               <td class="modal__text-params">
//                 <span class="modal__text-params-vote">7.3</span> /
//                 <span class="modal__text-params-votes">1260</span>
//               </td>
//             </tr>
//             <tr>
//               <td class="modal__text-properties">Popularity</td>
//               <td class="modal__text-params">100.2</td>
//             </tr>
//             <tr>
//               <td class="modal__text-properties">Original Title</td>
//               <td class="modal__text-params">A FISTFUL OF LEAD</td>
//             </tr>
//             <tr>
//               <td class="modal__text-properties">Genre</td>
//               <td class="modal__text-params modal__text-low">Western</td>
//             </tr>
//           </tbody>
//         </table>
//         <h3 class="modal__descript-titel">About</h3>
//         <p class="modal__descript-text">
//           Four of the West's most infamous outlaws assemble to steal a huge
//           stash of gold from the most corrupt settlement of the gold rush towns.
//           But not all goes to plan one is killed and the other three escapes
//           with bags of gold hide out in the abandoned gold mine where they
//           happen across another gang of three – who themselves were planning to
//           hit the very same bank! As tensions rise, things go from bad to worse
//           as they realise the bags of gold are filled with lead... they've been
//           double crossed – but by who and how?
//         </p>
//         <ul class="modal__button__list">
//           <li>
//             <button class="modal__button__item-watched" type="button">add to Watched</button>
//           </li>
//           <li><button class="modal__button__item-queue" type="button">add to queue</button></li>
//         </ul>
//       </div>
//     </article>
//     })`
//     .join('');
// }

// let imgOrg;
// const closeBtn = document.querySelector('[data-modal-close]');

// closeBtn.addEventListener('click', event => {
//   event.preventDefault();
//   if (event.target.nodeName !== 'IMG') {
//     return;
//   }

// imgOrg = basicLightbox.create(
//   `
//   <img src=${event.target.dataset.source} width="500" height="500">`,
//   {
//     onShow: () => {
//       window.addEventListener('keydown', closeModal);
//     },
//     onClose: () => {
//       window.removeEventListener('keydown', closeModal);
//     },
//   }
// );
// imgOrg.show();
// });

// function closeModal(event) {
//   if (event.code !== 'Escape') {
//     return;
//   }
//   imgOrg.close();
// }
