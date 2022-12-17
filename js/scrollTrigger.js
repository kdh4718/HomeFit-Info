function scrollTrigger(targetArea, typedclass) {
  let isVisible = false;
  $(window).scroll(function () {
    if ($(this).scrollTop() >= Math.ceil($(targetArea).offset().top)) {
      $(typedclass).typed({
        strings: ["앱설명 어떤식으로 할지 정해야 해요."],
        typeSpeed: 10,
        backSpeed: 40,
        backDelay: 200,
        smartBackspace: true,
        fadeOut: true,
        cursorChar: "",
        loop: false,
      });
      isVisible = true;
    } else {
    }
  });
}

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
        startDelay: 1500,
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
