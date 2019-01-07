window.onload = function() {
	var menuLink = document.querySelectorAll(".nav li a");

	for(var i = 0; i < menuLink.length; i++) {
		menuLink[i].onclick = function(e) {
			e.preventDefault();
			var targetId = document.querySelectorAll(this.getAttribute('href'))[0];

			smoothScroll(targetId.offsetTop, 600);
		}
	}

	window.addEventListener('scroll', function() {
		
		if(window.pageYOffset > 60) {
			document.querySelectorAll(".header")[0].classList.add('scrolled');
		} else {
			document.querySelectorAll(".header")[0].classList.remove('scrolled');		
		}

	});

	// line below menu 

	// function menuLine(activeLink) {
	// 	var menuLine = document.querySelectorAll('.menu-line')[0];
		
	// 	var activeLinkWidth = activeLink.offsetWidth;

	// 	menuLine.style.width = activeLinkWidth + 'px';
	// }

	// function changeMenuItemClass() {
	// 	var menuItems = 1;
	// 	var activeLink = document.querySelectorAll('.nav a.active')[0];
	// 	var targetLinkOffset = document.querySelectorAll(activeLink.getAttribute('href'))[0].pageYOffset;
	// 	console.log(targetLinkOffset);
	// 	if(window.pageYOffset >= targetLinkOffset) {

	// 	}

	// 	menuLine(activeLink);

	// }


	function smoothScroll(target, duration) {

		  var targetPosition = target - 100;
		  var startPosition = window.pageYOffset || window.scrollY;
		  var distance = targetPosition - startPosition;
		  var startTime = null;

		  function loop(currentTime) {
		    if (startTime === null) startTime = currentTime;
		    var timeElapsed = currentTime - startTime;
		    var run = ease(timeElapsed, startPosition, distance, duration);
		    window.scrollTo(0, run);
		    if (timeElapsed < duration) requestAnimationFrame(loop);
		  }
		  function ease(t, b, c, d) {
		    t /= d / 2;
		    if (t < 1) return c / 2 * t * t + b;
		    t--;
		    return -c / 2 * (t * (t - 2) - 1) + b;
		  }
		  requestAnimationFrame(loop);
		}

}