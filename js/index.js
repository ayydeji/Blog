// var i = 0;
// var txt = "Hello, World!";
// var speed = 150;
//
// function typeWriter(word){
//     if (i < txt.length){
//         $(".hello").append(txt.charAt(i));
//         i++;
//         setTimeout(typeWriter, speed);
//     }
// }
//
// $(document).ready( function () {
//     typeWriter("hello");
// });

$(window).on('load', function (){
    $('.hello-div').addClass('typewriter');
    setTimeout(function () {
        setTimeout(function () {
            $('.hello-div').removeClass('typewriter');
            $('.hello').addClass('visible');
            $('.world-div').addClass('typewriter');
        }, 1000);
    }, 500);

});


$.fn.isInViewport = function (){
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
}

$(window).on('resize scroll', function () {
    $('.about-me').each(function () {
        if ($(this).isInViewport()) {
            $(this).fadeIn(1500);
        }
    });

});
