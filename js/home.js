$(function() {
	initAnime();


	var threeTop = $(".three").offset().top - 800;
	var fourTop = $(".four").offset().top - 800;
	var fiveTop = $(".five").offset().top - 800;
	$(window).scroll(function() {
		var scrollTop = $(this).scrollTop();
		if (scrollTop > threeTop) {
			show('.three');
		}
		if (scrollTop > fourTop) {
			show('.four');
		}
		if (scrollTop > fiveTop) {
			show('.five');
		}
	});
});
