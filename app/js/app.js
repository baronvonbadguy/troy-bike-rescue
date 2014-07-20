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
	  $('.active-content').toggleClass('active-content');
	  //switches the content when a new tab is clicked
	  //gets specific content class to call on
	  var thisID = $(this).attr('id');
	  console.log('.content' + '#content-' + thisID);
	  $('#content-' + thisID).toggleClass('active-content');
	  $(this).toggleClass('active-tab');

	  $('.menu').toggleClass('open-drawer');
	  $('#menu-title').text($(this).text());

	  $('html, body').animate({
        scrollTop: $('#content-wrapper').offset().top - $('nav').height()
      }, 500);
	});
	//toggles the menu drawer to open when the menu button is clicked
	$('#menu-icon').click(function() {
	  $('.menu').toggleClass('open-drawer');
	});

	$('#content-wrapper').waypoint(function() {
  		$('#menu-title').toggleClass('fade-in');
	}, {
		offset: function() {
   	 		return -$(this).height();
 	 	}
 	});

	$(document).foundation();
});

