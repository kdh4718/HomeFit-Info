var count=0;

$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    
    if(count==0){
      $(".menu").fadeIn(1000);
      count++;
    }
    else{
      $(".menu").fadeOut(1000);
      count--;
    }
  });
});

