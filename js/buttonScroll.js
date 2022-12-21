$(document).ready(function() {
	$(".menu-scrollToFunction").click(function(){
		$('.hamburger').click();
		document.querySelector('.mainPageSection4').scrollIntoView({behavior:"smooth", block:"start"});
	});
});

$(document).ready(function() {
	$(".menu-scrollToUse").click(function(){
		$('.hamburger').click();
		document.querySelector('.mainPageSection5').scrollIntoView({behavior:"smooth", block:"start"});
	});
});