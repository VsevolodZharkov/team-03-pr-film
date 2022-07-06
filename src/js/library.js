// import { createMarkUp } from './markup/createmarkup';
// import { getGenresPopfilms } from './apisreq/genresandtrends';
// import { renderButtonsPag } from './paginaton/pagination';
// import { showModal } from './modal/modal';
// import { spiner } from './paginaton/spiner';
// import { SeachByQuery } from './header/header';
// import { getTrendMovies } from './apisreq/gettrends';

// //----------------------------------------------------------------//
// let searchData = null;
// // do ligic with seach film by name

// getGenresPopfilms()
//   .then(data => {
//     console.log(data);
//     createMarkUp(data.results);
//     renderButtonsPag(1, data.total_pages);
//     showModal(data);
//   })
//   .catch(er => console.log(er))
//   .finally(() => {
//     spiner.stop();
//   });

// SeachByQuery();