const btn = document.querySelector('.button__up');
const target = document.querySelector('header')

function buttonUp () {
	const observer = new IntersectionObserver((end, observer) => {

		end.forEach(item => {
			if(item.isIntersecting) {
				btn.classList.add('is-hidden');
			} else {
				btn.classList.remove('is-hidden');
			}
		})
	}, {
		rootMargin: '1000px',
		threshold: 1.0
	})
	observer.observe(target);
}



export { buttonUp };