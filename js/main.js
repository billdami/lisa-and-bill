$(function() {
	//smooth scroll navigation links
	$(document).on('click', '.smooth-scroll', function(e) {
		var hash = this.hash;
		var target = $(hash);
		e.preventDefault();
		
		$('html,body').animate({scrollTop: target.offset().top }, 1000, function() {
			window.location.hash = hash;
		});
	});

	//auto-close mobile nav menu on link click
	$(document).on('click','.navbar-collapse.in',function(e) {
		var target = $(e.target);
		if(target.is('a') && !target.hasClass('dropdown-toggle')) {
			$(this).collapse('hide');
		}
	});
});