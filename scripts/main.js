const elements = document.querySelectorAll('[data-animate]');
const animationClass = 'animation';

function animateOnScroll() {
	const pageTop = window.pageYOffset + (2 * window.innerHeight / 5);
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
	});
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
