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

  // Song
  var $song = $('.song');
  var $sound = $('.sound');
  var $jsSoundAction = $('.js-sound-action');

  if ($song.length) {
    songToggle('.song-like');
  }

  if ($sound.length) {
    songToggle('.sound-star');

    $jsSoundAction.on('click', function(e) {
      e.preventDefault();
      var $self = $(this);

      if ($self.hasClass('sound-pause')) {

        $self
          .removeClass('sound-pause')
          .addClass('sound-play');

        $self
          .children()
          .removeClass('fa-pause')
          .addClass('fa-play');
      } else {
        $self
          .removeClass('sound-play')
          .addClass('sound-pause');

        $self
          .children()
          .removeClass('fa-play')
          .addClass('fa-pause');
      }
    });
  }

  function songToggle(el) {
    var $self = $(el);

    $self.on('click', function(e) {
      e.preventDefault();
      var $that = $(this);

      $that.toggleClass('active');
    });
  }
}(jQuery));