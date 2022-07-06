import { searchMovies } from '../apisreq/getserchquery.js';

const formSearch = document.querySelector('.page-header__form');
const gallery = document.querySelector('.gallery');
const popap = document.querySelector('.search');
// formSearch.addEventListener('submit', onSubmit);
function x() {
  formSearch.addEventListener('submit', onSubmit);
}
//
function onSubmit(evt) {
  //   console.log(evt.target.elements.text.value);
  evt.preventDefault();
  //   gallery.innerHTML = '';

  //   page = 1;

  const query = evt.target.elements.text.value.trim();

  if (query === '') {
    // console.log(
    //   'Search result not successful. Enter the correct movie name and'
    // );
    popap.textContent =
      'Search result not successful. Enter the correct movie name and';
    return;
  }

  searchMovies(query, 1).then(data => console.log(data));

  //   fetchPhotos(query, page)
  //     .then(response => {
  //       console.log(response);
  //       if (response.data.totalHits === 0) {
  //         console.log(
  //           'Search result not successful. Enter the correct movie name and'
  //         );
  //       } else if (response) {
  //         Notiflix.Notify.success('Search result successful ${response} images.');
  //       }
  //       renderPosts(response.data.hits);
  //       //
  //     })
  //     .catch(error => console.log(error));
  // }

  //
  // function renderPosts(images) {
  //   const markup = images
  //     .map(element => {
  //       return ``;
  //     })
  //     .join('');
  //   gallery.insertAdjacentHTML('beforeend', markup);
  //   //
  //   const lightbox = new SimpleLightbox('.gallery a', {
  //     //
  //   });
  //   lightbox.refresh();
}
export { x };
