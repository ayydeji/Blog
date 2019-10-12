document.addEventListener('DOMContentLoaded', () => {

// Get all "navbar-burger" elements
const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

// Check if there are any navbar burgers
if ($navbarBurgers.length > 0) {

// Add a click event on each of them
$navbarBurgers.forEach( el => {
  el.addEventListener('click', () => {

    // Get the target from the "data-target" attribute
    const target = el.dataset.target;
    const $target = document.getElementById(target);

    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    el.classList.toggle('is-active');
    $target.classList.toggle('is-active');

  });
});
}

});

$("#showModal1").click(function() {
$("#modal1").addClass("is-active");
});

$("#modal-close1").click(function() {
$("#modal1").removeClass("is-active");
});

$("#showModal2").click(function() {
$("#modal2").addClass("is-active");
});

$("#modal-close2").click(function() {
$("#modal2").removeClass("is-active");
});

$("#showModal3").click(function() {
$("#modal3").addClass("is-active");
});

$("#modal-close3").click(function() {
$("#modal3").removeClass("is-active");
});

$("#showModal4").click(function() {
$("#modal4").addClass("is-active");
});

$("#modal-close4").click(function() {
$("#modal4").removeClass("is-active");
});

$("#showModal5").click(function() {
$("#modal5").addClass("is-active");
});

$("#modal-close5").click(function() {
$("#modal5").removeClass("is-active");
});

$("#showModal6").click(function() {
$("#modal6").addClass("is-active");
});

$("#modal-close6").click(function() {
$("#modal6").removeClass("is-active");
});
