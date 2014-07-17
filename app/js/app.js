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

})();

$(document).ready(function() {
	'use strict';
	//when each tab is clicked it marks itself as active and marks all other tabs inactive
	$('.tab a').click(function () {

	  $('a').removeClass('active-tab');
	  $('.content').removeClass('slide-from-right');
	  //switches the content when a new tab is clicked
	  var thisClass = $(this).attr("class");
		console.log(thisClass);
	  $('.' + thisClass).toggleClass('slide-from-right');

	  $(this).toggleClass('active-tab');
	  
	});
	//toggles the menu drawer to open when the menu button is clicked
	$('.menu-title').click(function() {
	  $('ul').toggleClass('open-drawer');
	});

	$(document).foundation();

});