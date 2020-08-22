$(window).on("load", function () {
    $(".hello-div").addClass("typewriter"),
        setTimeout(function () {
            setTimeout(function () {
                $(".hello-div").removeClass("typewriter"), $(".hello").addClass("visible"), $(".world-div").addClass("typewriter");
            }, 1e3);
        }, 500);
}),
    ($.fn.isInViewport = function () {
        var i = $(this).offset().top,
            e = i + $(this).outerHeight(),
            o = $(window).scrollTop(),
            t = o + $(window).height();
        return e > o && i < t;
    }),
    // $(window).on("scroll resize", function () {
    //     $(".about-me").each(function () {
    //         $(this).isInViewport() && $(this).fadeIn(1500);
    //     });
    // });

$(".more-button").on("click", function(){
  $(".proj-more").toggleClass("invisible");
  $(this).css("background-color", "#D1A075");
  if ($(".proj-more").hasClass("invisible")){
    $(".more-button").html("More Projects");
  }else{
    $(".more-button").html("Less Projects");
  }
});
