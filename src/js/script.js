$(document).ready(function() {
	$('.projects-thumbnail').hover(function() {
		$(this).find('.projects-thumbnail-overlay').slideToggle();
		$(this).find('.projects-categry').slideToggle();
	});
});
