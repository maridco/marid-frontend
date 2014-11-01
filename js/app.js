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
}(jQuery));