import { fetchCountries } from './fetchCountries';
import { renderMarkup } from './renderMarkup';
import Notiflix from 'notiflix';

const btnR = document.querySelector('.load-more');
const nextPageHandler = (valueINp, page) => {
  fetchCountries(valueINp, page)
    .then(data => {
      if (data.hits.length === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        form.reset();
        return;
      }
      if (data.totalHits <= 40 * page) {
        Notiflix.Notify.info(
          "We're sorry, but you've reached the end of search results."
        );
        btnR.classList.add('hidden');
        return;
      }
      renderMarkup(data.hits);
    })
    .catch(error => console.log(error));
};

export { nextPageHandler };
