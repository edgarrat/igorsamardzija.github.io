/* Hidden class */
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#brand-big').removeClass('hidden');
    } else {
        $('#brand-big').addClass('hidden');
    }
});

/* top nav collapse */
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('nav').addClass('top-nav-collapse');
    } else {
        $('nav').removeClass('top-nav-collapse');
    }
});

/* Menu items */
var mywindow = $(window);
var mypos = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function () {
    newscroll = mywindow.scrollTop();
    if (newscroll > mypos && !up) {
        $('#menu').stop().fadeOut();
        up = !up;
        console.log(up);
    } else if (newscroll < mypos && up) {
        $('#menu').stop().fadeIn();
        up = !up;
    }
    mypos = newscroll;
});

/* Carousel */
$('#myCarousel').carousel({
    interval: 10000
})

$('.carousel .item').each(function () {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length > 0) {
        next.next().children(':first-child').clone().appendTo($(this));
    } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
});

/* Smooth Scroll */

$('a').smoothScroll();

/* Animation */
$('.animation').each(function () {

    var waypoint = new Waypoint({
        element: this,
        handler: function (direction) {
            var animation = $(this.element).attr('data-animation');
            $(this.element).css('opacity', '1');
            $(this.element).addClass("animated " + animation);
        },
        offset: '75%'
    })
});

/* Typed */
$(function () {
    $(".element").typed({
        strings: ["Because Ma(n)chines", "Can(`t) Do", "Everything", "Because Ma(n)chines Can(`t) Do Everything"],
        typeSpeed: 0
    });
});