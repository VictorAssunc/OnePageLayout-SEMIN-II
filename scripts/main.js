const elements = document.querySelectorAll('[data-animate]');
const animationClass = 'animation';

function animateOnScroll() {
	const pageTop = window.pageYOffset + (3 * window.innerHeight / 4);
	elements.forEach(function(element) {
		if(pageTop > element.offsetTop) {
			element.classList.add(animationClass);
		} else {
			element.classList.remove(animationClass);
		}
	});

}

if(elements.length) {
	window.addEventListener('scroll', function() {
		animateOnScroll();
	})
}
