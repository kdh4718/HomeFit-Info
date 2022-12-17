function scrollTrigger(targetArea, typedclass) {
    let isVisible = false;
    $(window).scroll(function() {
        if ($(this).scrollTop() >= Math.ceil($(targetArea).offset().top)) {
            $(typedclass).typed({
                strings:["앱설명 어떤식으로 할지 정해야 해요."],
                typeSpeed: 10,
                backSpeed: 40,
                backDelay: 200,
                smartBackspace: true,
                fadeOut: true,
                cursorChar: '',
                loop: false
              });
              isVisible = true;
        } else {
            
        }
    });
};
