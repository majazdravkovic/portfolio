    $(document).ready(function() {
	  $(window).scroll(function() {
	    if($(window).scrollTop()) {
		  $("header").addClass("black");
		}
		else {
		  $("header").removeClass("black");
		}
	  });
	});
   
   $(document).ready(function() {
	  $("#nav").click(function() {
	    $(this).toggleClass("open");
	  });	 
	});

   $(window).scroll(function(){
      if($(window).scrollTop()){
        $('.name').addClass('animated slideInLeft');
		$('.position').addClass('animated slideInRight');
      } else {
        $('.name').removeClass('animated slideInLeft');
		$('.position').removeClass('animated slideInRight');
    }
    });
   
 	
	
	
