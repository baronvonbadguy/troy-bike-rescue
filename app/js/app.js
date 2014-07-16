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
	$('.tab a').click(function () {

	  $('a').removeClass('active');
	  $(this).toggleClass('active');

	});

	$('.menu-title').click(function() {
	  $('ul').toggleClass('open-drawer');
	  console.log('fuck honmeless');
	});

	$(document).foundation();

});