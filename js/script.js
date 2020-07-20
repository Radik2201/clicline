
$(document).ready(function(){
    new WOW().init();

    $('.carousel__inner').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
      });
     $('#headingOne').click(function(){$('#icons1').toggleClass('fas fa-angle-down').toggleClass('fas fa-angle-up');});
      
     $('#headingThree').click(function(){$('#icons2').toggleClass('fas fa-angle-down').toggleClass('fas fa-angle-up');});
     $('#headingTwo').click(function(){$('#icons3').toggleClass('fas fa-angle-down').toggleClass('fas fa-angle-up');});
      $('.navbar-brand').click(function(){$('#icons_bar').toggleClass('fas fa-bars').toggleClass('fas fa-times');}); 
	
         $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
            }, {
            duration: 50000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
            });
        });   
      

    
       /*  $('.owl-carousel').owlCarousel({
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            items:1,
            margin:30,
            stagePadding:30,
            smartSpeed:250
        }); */
     
      $('.inst').slick({
        rtl: true
      });        
        
      $(window).scroll(function(){
        if($(this).scrollTop() > 1000){
            $('.bg_phone').fadeIn();
        }else {
            $('.bg_phone').fadeOut();
        }
    });






    $(window).scroll(function(){
        if($(this).scrollTop() > 500){
            $('.pageup').fadeIn();
        }else {
            $('.pageup').fadeOut();
        }
    });
     $("a[href^='#logo']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false; }); 
    $("a[href^='#contact']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false; });    
 $("a[href^='#price']").click(function(){
     var _href = $(this).attr("href");
     $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false; });
    $("a[href^='#otziv']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
       return false; }); 
       $("a[href^='#onas']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
       return false; }); 
       $("a[href^='#vo']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
       return false; });  
       $("a[href^='#job']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
       return false; });            
});