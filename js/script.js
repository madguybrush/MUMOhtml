	
//( function( $ )
//{



    $(window).on('load', function(){ 
		// Animate loader off screen
		//$("#loader").fadeOut("slow");
		setTimeout(function (){
		  $('#loader').addClass('fadeOut');
		  $('#loader').css('opacity', '0'); 
		  setTimeout(function (){
			$('#loader').css("z-index", "-1");
		  }, 1000);
		}, 2000);
			   //$('#loader').addClass('animated fadeOut');
	  });



	$( window ).on('load', function(){ 
		// PAGE IS FULLY LOADED  
		// FADE OUT YOUR OVERLAYING DIV
	 
		//$("img" ).on('load', function(){ 
			 
			/* $('#loader').css('opacity', '0'); 
			 $('#loader').addClass('d-none fadeOut');
			 $('header').removeClass('d-none');
			 $('#menu').removeClass('d-none');
			 $('main').removeClass('d-none');
			 $('footer').removeClass('d-none');*/
		 
	 
			 logoH = $('.navbar-brand').height();
			 console.log(logoH);
			 logoH = 14 + (logoH / 2);
			 //console.log(calc(4rem – logoH));
			 $('#btnmenu').css('margin-top', logoH);
	 
			 //resized();

			 $('.slider').bxSlider({
				auto: false,
			minSlides: 3,
			maxSlides: 3,
		   slideWidth: 300,
		   //slideHeight: 200,
		   //adaptiveHeight: true,
			slideMargin: 20,
			controls: true,
			pager: false,
			infiniteLoop: false,
			hideControlOnEnd: true
		  }); 
		//});
	 });
	 





	function resized(){
		window_width = $( window ).width();
		window_height = $( window ).height();

		logoH = $('.navbar-brand').height();
		//console.log(logoH);
		logoH = 24 + (logoH / 2);
		//console.log(calc(4rem – logoH));
		$('#btnmenu').css('margin-top', logoH);
	}





   	$( window ).resize(	function(){
			resized();
		}
	);
	
	$( window ).on( "orientationchange", function( event ) {
		resized();
	});
	


		var modalState;
		var lineState;
		modalState = 0; // 0 = closed, 1 = menu opened, 2 = search opened
		lineState = "lines";
		


	function linestocross() {
		$( '#btnmenu' ).addClass("change");
		lineState = "cross";
		}
		
		function crosstolines() {
		$( '#btnmenu' ).removeClass("change");
		lineState = "lines";
		}



	$('.navbar-toggler').on('click',function(){
		/*if (!$('.navbar-toggler').hasClass('clicked')){
			$('#menu').addClass('fadeInRight');
			$('.navbar-toggler').addClass('clicked');
			$('#collapsibleNavbar').show();
		}*/

		if ($('.navbar-toggler').hasClass('clicked')){
			//$('#menu').removeClass('fadeInRight');
			//$('#menu').addClass('fadeOutRight');
			$('.navbar').removeClass('fadeInRight');
			$('.navbar').addClass('fadeOutRight');
			$('#collapsibleNavbar').hide();
			$('.navbar-toggler').removeClass('clicked');
			crosstolines();
		}

		else{
			//$('#menu').removeClass('fadeOutRight');
			//$('#menu').addClass('fadeInRight');
			$('.navbar').removeClass('fadeOutRight');
			$('.navbar').addClass('fadeInRight');
			$('.navbar-toggler').addClass('clicked');
			$('#collapsibleNavbar').show();
			//$('#collapsibleNavbar').css('display', 'flex');
			linestocross();
		}
		//$('.toggler-clicked').removeClass('toggler-clicked');
		//$('#collapsibleNavbar').toggle();
	});







  // } )( jQuery );
   
/*
$('.fermercredits').on('click',function(){
    $('.popup.credits').hide();

});
*/
   

function popin(){
    
	$('#popup').show(); 
   //$('#popup').css('display', 'block');
   //popinactive = 1;
}

$('.fermernl').on('click',function(){
    $('#popup').hide(); 
    $('#popupmaps').hide(); 
    $('#popupmentions').hide(); 

});


$('.popup').on('click',function(){
    $('#popup').hide(); 
    $('#popupmaps').hide(); 
    $('#popupmentions').hide(); 
});

$('.popupcontent').on('click',function(e){
    e.stopPropagation();

});

