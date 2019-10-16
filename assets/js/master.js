$(window).on("scroll", function() {
    if ($(window).scrollTop()) {
        $('nav').addClass('white');
        $('nav').css({
            '-webkit-box-shadow': '0 2px 5px #1C0331',
            '-moz-box-shadow': '0 2px 5px #1C0331',
            'box-shadow': '0 2px 5px #1C0331'
        });
        $('nav ul li a').addClass('nav-a-color-onscroll');

        $('.nav-btn i').css('background-color', '#1C0331');
    } else {
        $('nav').removeClass('white');
        $('nav').css({
            '-webkit-box-shadow': 'none',
            '-moz-box-shadow': 'none',
            'box-shadow': 'none'
        });
        $('nav ul li a').removeClass('nav-a-color-onscroll');

        $('.nav-btn i').css('background-color', '');
    }
});

$(document).ready(function() {

    // $('.carousel').carousel();

    $('.nav-btn').click(function() {
        if ($('.text-block').is(':hidden')) {
            $('.text-block').show();
        } else {
            $('.text-block').hide();
        }
    });

    /* FIXME: not working */
    $('a[href="#"]').on('click', function(e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        /*$('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function() {
            window.location.hash = target;
        });*/

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing');
    });
});