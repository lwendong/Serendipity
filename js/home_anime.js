function initAnime() {
	var left = anime.timeline({
		easing: 'easeInOutQuad',
		duration: 2000
	});
	left
		.add({
			targets: '.left',
			width: '-=85%',
			duration: 1500,
			complete: function(anim) {
				$('.external').css('display', 'block');
			}
		})
		.add({
			targets: '.external',
			opacity: '1'
		})
}
