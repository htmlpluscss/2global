( swipe => {

	const swipeNav = document.querySelector('.swiper-pagination'),
		  swipePrev = document.querySelector('.swiper-button-prev'),
		  swipeNext = document.querySelector('.swiper-button-next'),
		  counter = document.querySelector('.swiper-counter__index');

	swipe.addEventListener('swiperJsLoad', () => {

		new Swiper(swipe, {
			loop: true,
			effect: 'fade',
			fadeEffect: {
				crossFade: true
			},
  			pagination: {
				el: swipeNav,
				clickable: true,
				bulletClass: 'button',
				bulletActiveClass: 'is-active'
			},
			navigation: {
				nextEl: swipeNext,
				prevEl: swipePrev
			},
			on: {
				slideChange: () => {
					counter.textContent = swipe.swiper.realIndex + 1;
				}
			}
		});

	});

	const script = document.createElement('script');

	script.src = '/js/swiper.min.js';

	script.onload = () => swipe.dispatchEvent(new Event("swiperJsLoad"));

	setTimeout( () => document.head.appendChild(script), localStorage.getItem('fastLoadScript') ? 0 : 10000);

})(document.querySelector('.swiper-container'));