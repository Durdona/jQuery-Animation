/*//**//**//**//**//**//**//**//**//**//** Show, Hide and Toggle Methods //**//**//**//**//**//**//**//**//**//**//**//**
$(document).ready(function(){
	// we grab the jQuery object for input, which is our button up, and we attach a handler-'function()' to the click event.
	$('input').click(function(){ //so essentially our input is going to become a toggle. Our button will toggle 'on' and 'off' the visibility with the 'show' and 'hide' function 
		var anim = $('#animateText');
		if (anim.is(':hidden'))
			anim.show(); // 'show' and 'hide' functions accept several arguments like 
		else
			anim.hide();// 'slow', 'fast' or even milliseconds '3000' - means 3 seconds 
	});
});


// Animating div element 
		$(document).ready(function(){
			$('input').click(function(){
				var divAnim = $('#animateBox');
				if(divAnim.is(':hidden'))
					divAnim.show(1000);
				else
					divAnim.hide(600);
			});
		});

// .toggle() function is a shortcut for the code above
	$(document).ready(function(){
		$('#divButton').click(function(){
		$('div#image').toggle(3000);
	});
});

//**//**//**//**//**//**//**//**//**//** Fade Methods //**//**//**//**//**//**//**//**//**//**//**/

// Example: fadeIn and fadeOut 
$(document).ready(function(){
	$('.divButton2').click(function(){
		var animFade = $('div#image2');
		if(animFade.is(':hidden'))
			animFade.fadeIn(1000)
		else
			animFade.fadeOut(1000)
	});
});

 // .fadeToggle() is a shortcut for the code above 
 $(document).ready(function(){
 	$('.divButton2').click(function(){
 		$('div#image2').fadeToggle('slow');
 	});
 });


 // .fadeTo() will let you fade to a specific opacity 
 $(document).ready(function(){
 	$('.divButton3').click(function(){
 		$('#image3').fadeTo('slow', 0.5);
 	});	
 });

// Now .fadeTo() will fades back in when you click again. However this answer is not accurate keeping it for a record 
$(document).ready(function(){
	$('.divButton3').click(function(){
		if($('#image3').css('opacity')==0.5){
			$('#image3').fadeTo('slow', 1);
		}else {
			$('#image3').fadeTo('slow', 0.5);
		}
	});
});
// OR the same technique can be done with .animate()
$(document).ready(function(){
        $('.divButton3').on('click', function(){
         if($('#image3').css('opacity') == 0.5){
           $('#image3').animate({'opacity': 1}, 1000);
         }else{
           $('#image3').animate({'opacity': 0.5}, 1000);
         }  
     }); 
 });   

// for any opacity use this method. It is the most efficient way 
 $(document).ready(function(){
    $('.divButton2').click(function(){
     if($('#image2').css('opacity') == 1){
       $('#image2').fadeTo('slow', 0.2);
     }else{
       $('#image2').fadeTo('slow', 1);
     }  
    }); 
});
// OR its equivalent  
 $(document).ready(function(){
        $('.divButton2').on('click',function(){
         if($('#image2').css('opacity') == 1){
           $('#image2').animate({'opacity': 0.2}, 1000);
         }else{
           $('#image2').animate({'opacity': 1}, 1000);
         }  
        }); 
    });
    
 // CodeAcademy has slightly similiar approach with mouseenter and mouseleave events 
 $(document).ready(function(){
    $('div').mouseenter(function(){
        $('div').fadeTo('fast', 1);
    });
   $('div').mouseleave(function(){
        $('div').fadeTo('fast', 0.5);
    });
});
// its CSS
 div {
    height: 60px;
    width: 100px;
    border-radius: 5px;
    background-color: #69D2E7;
    text-align: center;
    color: #FFFFFF;
    font-family: Verdana, Arial, Sans-Serif;
    opacity: 0.5;
}

//*/**//**//**//**//**//**//**//**//**  .slide() Methods //**//**//**//**//**//**//**//**//**//**//**//**
	
$(document).ready(function(){
	$('#downded').click(function(){
		var slideVar = $('#slideUp');		
		if(slideVar.is(':hidden'))
			slideVar.slideDown(700);		
		else 
			slideVar.slideUp(600);
	});
});	



// Example: slideToggle() is shortcut for the code above 
 $(document).ready(function(){
 	$('#slideButton').click(function(){
 		$('#willSlide').slideToggle(700);
 	});
 });

//**//**//**//**//**//**//**//**//**//** The .animate() Method //**//**//**//**//**//**//**//**//**//**//**//**

// Animating an image   .animate(properties[,duration][,easing][,complete])
$(document).ready(function(){
	$('#image4').animate({left: '900px', top: '300'}, 2000);

	$('span#text').animate({fontSize: '88px', opacity: '0'}, 2000);
});

// Animating an image with append function 
$(document).ready(function(){
	$('#image4').animate({left: '800px', top: '400px', opacity: '0'}, 2000, 'swing',  
		function(){
			$('#divButtonn').append(" We are done !");
		});
});


// Animating another way .animate(properties, options) 
// specialEasing()
	$(document).ready(function(){
		$('#image5').animate({
			left: '300px',
			top: '200px'
		},
		{duration: 2000,
			specialEasing: {
				left: 'linear',
				top: 'swing'
			}
		}
	);
});


// step: function 	
$(document).ready(function(){
		$('#image6').animate({
			left: '800px',
			// top: '200px'
		},
		{duration: 5000,
			step: function(now, tween){
				$('p#empty').text(now);
			// if(tween.pos > 0.5) //'tween' has a value between 0 and 1. If we are more than halfway done this position will be greater than 0.5. when we're halfway done we'll stop animating 
				// 	$(this).stop();
			}
		}
	);
});

// progress: function 
$(document).ready(function(){
		$('#image6').animate({
			left: '800px',
			// top: '200px'
		},
		{duration: 5000,
			progress: function(animation, progress, remainingMs){
				$('p#empty').text(progress);  //pass remainingMs to see remaining milliseconds. It will be counting down from 5000 till 0
			}
		}
	);
});


// Chaining Animation 
// 1.	
$(document).ready(function(){
	$('#image7').hide(1000).show(1000); 
});

// 2.
$(document).ready(function(){
	$('#image7').hide(1000).show(1000); 
});

// 3.
$(document).ready(function(){
	$('#image7').hide(1000).show(1000)
	.animate({left: '400', opacity: 0.5}, 3000)
	.animate({left: '-400', opacity: 1}, 300); // it will animate all the way to the left and disappear 
});

// 4.
$(document).ready(function(){
	$('#image7').hide(1000).show(1000)
	.animate({left: '400', opacity: 0.5}, 3000)
	.animate({left: '-=400', opacity: 1}, 300); // it will move back to the left but stays 
});

// 5.
$(document).ready(function(){
	$('#image7').hide(1000).show(1000)
	.animate({left: '400', opacity: 0.5}, 3000)
	.delay(2000) // it will pause the animation between these two 
	.animate({left: '-400', opacity: 1}, 3000); 
});


// Sudden idea :) 
$(document).ready(function(){
	$('#image7').hide(1000).show(1000)
	.animate({left: '400', opacity: 0.5}, 3000)
	.delay(2000) // it will pause the animation between these two 
	.animate({left: '-=400', opacity: 1}, 3000)
	.fadeToggle('slow')
	.delay(5000)
	.fadeIn(1000)
	.animate({left: '200', opacity: 0.5}, 3000)
	.fadeToggle('slow'); 
});


// animation with queue(function(){}) method
$(document).ready(function(){
	$('#image7')
	.hide(1000)
	.show(1000)
	.animate({left: '200'}, 500)
	.queue(function(){ // what queue does is it introduces a function into the middle of your chain 
		$('p#empty').text("here is some text");
		$(this).dequeue(); // dequeue will allow us to continue run the next line of codes and complete the animation. Comment this out you will see that it hangs up right here. 
	})
	.delay(2000)
	.animate({left: '-=200'}, 500);
});



// stopping the animation with stop() method 
// 1. 
$(document).ready(function(){
	$('#image7')
	.hide(1000)
	.show(1000)
	.animate({left: '200'}, 500)
	.delay(2000)
	.animate({left: '-=200'}, 500);

	$('#stopButton').click(function(){
		$('#image7').stop(); // without passing boolean value into stop() method we let animation run after clicking stop button
	})
});

// 2.
$(document).ready(function(){
	$('#image7')
	.hide(1000)
	.show(1000)
	.animate({left: '200'}, 500)
	.delay(2000)
	.animate({left: '-=200'}, 500);

	$('#stopButton').click(function(){
		$('#image7').stop(true); // passing boolean 'true' value into the stop() method will cleared out the queue and it stops the animation.
	})
});

// 3.
$(document).ready(function(){
	$('#image7')
	.hide(1000)
	.show(1000)
	.animate({left: '200'}, 500)
	.delay(2000)
	.animate({left: '-=200'}, 500);

	$('#stopButton').click(function(){
		$('#image7').stop(true, true); // passing boolean two 'true' values will let to jump to the end of the animation.
	})
});

// 4.
$(document).ready(function(){
	$('#image7')
	.hide(1000)
	.show(1000)
	.animate({left: '200'}, 500)
	.delay(2000)
	.animate({left: '-=200'}, 500);

	$('#stopButton').click(function(){
		$('#image7').finish(); // what finish does is it also clears out the queue, but before it clears out the queue it will move the animation to its final position. Depending upon if you want to clear out the queue or go to its final position, you can use either the stop method or finish. 
	})
});


