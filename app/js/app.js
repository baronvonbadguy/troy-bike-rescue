var app = (function(document, $) {

	'use strict';
	var docElem = document.documentElement,

		_userAgentInit = function() {
			docElem.setAttribute('data-useragent', navigator.userAgent);
		},
		_init = function() {
			$(document).foundation();
			_userAgentInit();
		};

	return {
		init: _init
	};

})(document, jQuery);

(function() {

	'use strict';
	app.init();

	//initializes with the menu title visible on mobile
	$('#menu-title--default').toggleClass('fade-in');
})();
function switchToContent(contentID, delay) {
	'use strict';

	if (contentID !== 'troy-bike-rescue') {
		$('#logo-info-container').parent().addClass('large-uncentered');
	}
	else {
		$('#logo-info-container').parent().removeClass('large-uncentered');
	}
	//unselects all other tabs and content
	$('.active-tab').toggleClass('active-tab');
	$('.active-content').toggleClass('active-content');
	//switches the content when a new tab is clicked
	//matches content id with tab id
	$('#content-' + contentID).toggleClass('active-content');
	$('#' + contentID).toggleClass('active-tab');
	//closes menu and sets the title to the active content title
	$('.menu').removeClass('open-drawer');
	$('#menu-title').text($('#' + contentID).text());
	//scrolls down to the active content
	setTimeout(function (){
		$('html, body').animate({
			scrollTop: $('#content-container').offset().top - $('nav').height()
		}, 750);
	}, delay);
}
$(document).ready(function() {
	'use strict';
	//when each tab is clicked it marks itself as active and marks all other tabs inactive
	$('.tab a').click(function () {
		switchToContent($(this).parent().attr('id'), 300);
	});
	//opens the about content when the logo is clicked on
	$('#logo-container').click(function () {
		switchToContent('about', 0);
	});
	//toggles the menu drawer to open when the menu button is clicked
	$('#menu-icon').click(function() {
		$('.menu').toggleClass('open-drawer');
	});
	//sets a waypoint at the active content position offset by 
	//the menu so that when the menu passes the content title
	//the menu title fades in or out
	$('#content-container').waypoint(function() {
		$('#menu-title--default').toggleClass('fade-in');
  		$('#menu-title').toggleClass('fade-in');
	});
});

