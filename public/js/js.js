jQuery(document).ready(function ($) {

  var interval;
  interval = setInterval(function () {
    moveRight();
  }, 3000);

  $('.slider').mouseover(function(){
    clearInterval(interval);
  });
  
  $('.slider').mouseleave(function(){
    interval = setInterval(function () {
      moveRight();
      }, 5000);
  });
  
  var slideCount = $('.slider ul li').length;
  var slideWidth = $('.slider ul li').width();
  var slideHeight = $('.slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  
  $('.slider').css({ width: slideWidth, height: slideHeight });
  
  $('.slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  
    $('.slider ul li:last-child').prependTo('.slider ul');

    function moveLeft() {
        $('._slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('.slider ul li:last-child').prependTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('.slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('.slider ul li:first-child').appendTo('.slider ul');
            $('.slider ul').css('left', '');
        });
    };

    // $('.slider-prev').click(function () {
    //     moveLeft();
    //     return false;
    // });

    // $('.slider-next').click(function () {
    //     moveRight();
    //     return false;
    // });

});    

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
