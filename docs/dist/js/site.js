$( document ).ready(function() {
	$(window).scroll(function() {
	// 100 = The point you would like to fade the nav in.
	`	console.log("hello")
	if ($(window).scrollTop() > 0 ){

		$('.bg').addClass('.show');

	} else {

		$('.bg').removeClass('.show');

		};   	
	});
});