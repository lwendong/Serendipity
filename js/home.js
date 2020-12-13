$(function() {
	initAnime();
	var threeTop = $(".three").offset().top - 800;
	var fourTop = $(".four").offset().top - 800;
	var fiveTop = $(".five").offset().top - 800;
	var _ymd = $(".ymd");
	var _time = $(".time");
	var _left = $(".left");

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

	_left.click(function() {
		clearInterval(interval);
		start();
	});

	var interval = setInterval(function() {
		var myDate = new Date;
		var year = myDate.getFullYear();
		var mon = myDate.getMonth() + 1;
		var day = myDate.getDate();
		var h = myDate.getHours();
		var m = myDate.getMinutes();
		var s = myDate.getSeconds();
		_ymd.text(year + "." + mon + "." + day);
		if (m <= 9 ) {
			m="0"+m;
		} 
		if(s <= 9){
			s="0"+s;
		}
		_time.text(h + ":" + m + ":" + s);
	}, 1000);

});
