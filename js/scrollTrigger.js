$(function () {
  let isVisible = false;
  $(window).scroll(function () {
    if (
      $(this).scrollTop() >= Math.ceil($(".mainPageSection1").offset().top) &&
      isVisible == false
    ) {
      $(".ExplainTyped").typed({
        strings: ["건강한 삶을 내 손 안에"],
        typeSpeed: 100,
        backSpeed: 1,
        backDelay: 200,
        startDelay: 1300,
        smartBackspace: true,
        fadeOut: true,
        cursorChar: "",
        loop: false,
      });
      isVisible = true;
    } else {
    }
  });
});
