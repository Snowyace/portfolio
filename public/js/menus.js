$( document ).ready(function() {
   $('#fullpage').scroll(function(event){
        event.preventDefault();
   });
    $(window).load(function() {
        // Animate loader off screen
        $("#loader").fadeOut(2000);

        $("#fullpage").fadeIn(2000);

        $(".arrow").fadeIn(2000); 
    });



    $('#fullpage').fullpage({
		

        anchors:['home', 'works','writing'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: false,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: true,
        continuousHorizontal: false,
        scrollHorizontally: true,
        interlockedSlides: false,
        resetSliders: false,
        fadingEffect: true,
        normalScrollElements: '.content',
        scrollOverflow: true,
        scrollOverflowOptions: null,
        touchSensitivity: 1,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        
	});
	 console.log( "ready!" );
	$('.arrowUp').click(function(){
    $.fn.fullpage.moveSectionUp();
});

$('.arrowDown').click(function(){
    $.fn.fullpage.moveSectionDown();
});


$('img').click(function(){
   $(this).attr("href", $(this).attr('src' ));
});
$('img').magnificPopup({type:'image'});
});

new Vue({
	el: '#app',
	data: {
		msg: 'Nice meme'
	}
});




 $('.square').click(function(){
	//var test = $('.load').val();
	//if(test == true){
		$('.header').remove();
	//}
	//$('.load').append('hello');
});

