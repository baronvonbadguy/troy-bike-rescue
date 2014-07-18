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
	  $('.content').removeClass('effeckt-page-active');
	  //switches the content when a new tab is clicked
	  var thisClass = $(this).attr("class");
	  console.log(thisClass);
	  $('.content' + '.' + thisClass).toggleClass('effeckt-page-active');

	  $(this).toggleClass('active-tab');
	  $('.menu').toggleClass('open-drawer');
	});
	//toggles the menu drawer to open when the menu button is clicked
	$('.menu-title').click(function() {
	  $('.menu').toggleClass('open-drawer');
	});

	$(document).foundation();

});