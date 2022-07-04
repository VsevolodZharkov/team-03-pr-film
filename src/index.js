import { fetchCountries } from './js/fetchCountries';
import { renderMarkup } from './js/renderMarkup';
import { nextPageHandler } from './js/nextPageHandler';
import Notiflix from 'notiflix';



const form = document.querySelector('.search-form');
const btnR = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');
let page = 1;
let valueINp = '';
btnR.classList.add('hidden');

form.addEventListener('submit', inputHandler);
btnR.addEventListener('click', () => {
  page += 1;
  nextPageHandler(valueINp, page);
});

function inputHandler(e) {
  e.preventDefault();
  gallery.innerHTML = '';
  page = 1;
  let a = e.currentTarget.elements[0].value;
	valueINp = a.trim();
  fetchCountries(valueINp, page)
    .then(data => {
      	if (data.hits.length === 0 || valueINp === ' ' || valueINp === '') {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
       	 form.reset();
       	 return;
     	 }
      renderMarkup(data.hits);
			Notiflix.Notify.info(
				`${data.totalHits} images were found for your query.`
				);
			if(data.totalHits <= 40 ) {
				Notiflix.Notify.info(
					"We're sorry, but you've reached the end of search results."
				);
				btnR.classList.add('hidden');
				return;
			 }
    })
    .catch(error => console.log(error));
}
