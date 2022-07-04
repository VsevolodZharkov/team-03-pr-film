import axios from "axios";
const KEY_USER = '28344913-175486e0517d92fb48d77b40d';
const URL = 'https://pixabay.com/api/';

const fetchCountries = (name, page) => {
  return axios(
		{
			url: `${URL}`,
			params: {
				key: KEY_USER,
				q: name,
				image_type: 'photo',
				orientation: 'horizontal',
				safesearch: true,
				per_page: 40,
				page: page,
			}
			}
  	)
    .then(response => {
      return response;
    })
};

export { fetchCountries };
