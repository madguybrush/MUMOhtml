	
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
		
		$('#loader').css('opacity', '0'); 
		$('#loader').addClass('d-none ');
		
		
		$('header').removeClass('d-none');
		$('#menu').removeClass('d-none');
		$('main').removeClass('d-none');
		$('footer').removeClass('d-none');
	


		//resized();
});


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







   } )( jQuery );
   
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

