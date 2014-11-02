(function($) {
  'use strict';

  // NProgress
  NProgress.start();
  NProgress.configure({
      ease: 'ease',
      speed: 500
  });
  setInterval(function() {
      NProgress.done()
  }, 1500);

  // Toggle Menu
  $('#settings').on('click', function(e) {
    e.preventDefault();
    $('#menu').toggleClass('hidden');
  });

  // Menu Tooltip
  $('.menu-list-link').tooltip();
  
  function centerModal() {
		$(this).css('display', 'block');
		var $dialog = $(this).find(".modal-dialog");
		var offset = ($(window).height() - $dialog.height()) / 2;
		// Center modal vertically in window
		$dialog.css("margin-top", offset);
	}

	$('.modal').on('show.bs.modal', centerModal);
}(jQuery));