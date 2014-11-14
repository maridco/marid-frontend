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
    $('.settings li a').on('click', function() {
        $('.settings li a').each(function(index) {
            $(this).removeClass("active");
        });
        $(this).addClass("active");
    });

    function centerModal() {
        $(this).css('display', 'block');
        var $dialog = $(this).find(".modal-dialog");
        var offset = ($(window).height() - $dialog.height()) / 2;
        // Center modal vertically in window
        $dialog.css("margin-top", offset);
    }

    $('.modal').on('show.bs.modal', centerModal);

    // Following
    $('.js-follow').on('click', function(event) {
        event.preventDefault();
        var $self = $(this);

        $self.find('.unfollow-text').hide();
        $self.find('.following-text').hide();

        if ($self.hasClass('following')) {
            $self.removeClass('following');
        } else {
            $self.find('.following-text').show();
            $self.addClass('following');
        }
    });

    $(document).on({
        mouseenter: function() {
            var $self = $(this);
            $self.find('.following-text').hide();
            $self.find('.unfollow-text').show();
        },
        mouseleave: function() {
            var $self = $(this);
            $self.find('.unfollow-text').hide();
            $self.find('.following-text').show();
        }
    }, '.music-follow.following');

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
                $self.removeClass('sound-pause').addClass('sound-play');
                $self.children().removeClass('fa-pause').addClass('fa-play');
            } else {
                $self.removeClass('sound-play').addClass('sound-pause');
                $self.children().removeClass('fa-play').addClass('fa-pause');
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
    $('#disable_notf_btn').on('click', function(e) {
        if ($('#disable_notf_btn').is(":checked")) {
            $("#notification_form :input").attr("disabled", "disabled");
        } else {
            $("#notification_form :input").removeAttr("disabled");
        }
    });
}(jQuery));