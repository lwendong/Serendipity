function initAnime() {
	anime({
		targets: '.span',
		top: 0,
		duration: 3000,
		delay: function(el, i, l) {
			return i * 200;
		}
	});
}

function start() {
	var left = anime.timeline({
		easing: 'easeInOutQuad',
		duration: 2000
	});
	left
		.add({
			targets: '.span',
			opacity: 0,
			duration: 1500
		})
		.add({
			targets: '.left',
			width: '-=85%',
			duration: 1500,
			complete: function(anim) {
				$('.external').css('display', 'block');
			}
		}, '-=1000')
		.add({
			targets: '.external',
			opacity: '1'
		})
}

function show(className) {

	anime({
		targets: className,
		opacity: 1,
		marginTop: 0,
		duration: 1200
	});
}
