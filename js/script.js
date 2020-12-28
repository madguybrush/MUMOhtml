	
( function( $ )
{

	function resized(){
		window_width = $( window ).width();
		window_height = $( window ).height();
	}


$( document ).ready( function() {

//resized();

});

	   
$( window ).on('load', function(){ 
   // PAGE IS FULLY LOADED  
   // FADE OUT YOUR OVERLAYING DIV
		
	/*	$('.container-loader').css('opacity', '0'); 
		$('.container-loader').addClass('d-none ');
		$('.loader').addClass('d-none ');
		
			$('header').removeClass('d-none');
		$('#bienvenue').removeClass('d-none');
		$('.navbar').removeClass('d-none');
		$('footer').removeClass('d-none');
		$('#hp').removeClass('d-none');
*/
		//$('#sousmenuconseils').removeClass('d-none');

		//resized();
});


   	$( window ).resize(	function(){
			resized();
		}
	);
	
	$( window ).on( "orientationchange", function( event ) {
		resized();
	});
	

	$('.navbar-toggler').on('click',function(){
		/*if (!$('.navbar-toggler').hasClass('clicked')){
			$('#menu').addClass('fadeInRight');
			$('.navbar-toggler').addClass('clicked');
			$('#collapsibleNavbar').show();
		}*/

		if ($('.navbar-toggler').hasClass('clicked')){
			$('#menu').removeClass('fadeInRight');
			$('#menu').addClass('fadeOutRight');
			$('#collapsibleNavbar').hide();
			$('.navbar-toggler').removeClass('clicked');
		}

		else{
			$('#menu').removeClass('fadeOutRight');
			$('#menu').addClass('fadeInRight');
			$('.navbar-toggler').addClass('clicked');
			$('#collapsibleNavbar').show();
		}
		//$('.toggler-clicked').removeClass('toggler-clicked');
		//$('#collapsibleNavbar').toggle();
	});
	

   } )( jQuery );
   

$('.fermercredits').on('click',function(){
    $('.popup.credits').hide();

});

   


