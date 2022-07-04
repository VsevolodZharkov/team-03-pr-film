const renderMarkup = images => {
  const gallery = document.querySelector('.gallery');

  const murkup = images
    .map(element => {
      const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = element;
      return `
		<div class="photo-card">
			<img src="${webformatURL}" alt="${tags}" loading="lazy"/>
				<div class="info">
					<p class="info-item"><b>Likes: </b>${likes}</p>
					<p class="info-item"><b>Views: </b>${views}</p>
					<p class="info-item"><b>Comments: </b>${comments}</p>
					<p class="info-item"><b>Downloads: </b>${downloads}</p>
				</div>
		</div>`;
    })
    .join('');
	gallery.innerHTML += murkup;

  const btnR = document.querySelector('.load-more');
  btnR.classList.remove('hidden');
};

export { renderMarkup };
