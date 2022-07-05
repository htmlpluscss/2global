( lang => {

	const current = lang.querySelector('.lang__current');

	current.addEventListener('click', () => {

		lang.classList.toggle('is-open');

	});

})(document.querySelector('.lang'));