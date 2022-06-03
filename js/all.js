$(document).ready(function () {
  $('.feedbackList').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
})

function moveTop() {
  $("html, body").scrollTop(0, 500);
}