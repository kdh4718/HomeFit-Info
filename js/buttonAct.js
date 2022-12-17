var count=0;

$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    
    /*
    document.getElementsByClassName("#menuPageSection")
    .style.display="block";
    */
  
    if(count==0){
      $(".menuPageSection").fadeIn(1000);
      count++;
    }
    else{
      $(".menuPageSection").fadeOut(1000);
      count--;
    }
  });
});
