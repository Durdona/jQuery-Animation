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

//**//**//**//**//**//**//**//**//** Advanced Animation Techniques //**//**//**//**//**//**//**//**//**//**//**//**//**
// working with non-numeric CSS properties since Advanced Animation is a bit more complex and requires using CSS Functions 

						// Transforming DOM Elements in 2D


// CSS Transform Functions:
// translate(x, y) // x - horizontal, y - vertical axis 
// scale(x, y)
// rotate(deg)
// Example CSS: transform: translate(100px, 100px)scale(2, 2)rotate(30deg) - scaling the element is twice as big in the X and Y directions 

// CSS Transform 'translate' Function 
// Example in jQuery 
	$(document).ready(function(){
		var logoVar = $('#logo');

		$({t: 0}).animate( // instead of passing it the DOM object logo, we're passing it a dummy jQuery object. The reason for doing this is that we want to animate a non-numeric CSS value. 
		{
			t: 200  // animate method will know that we are going from zero to 200
		},// we are moving our logo in the Y direction from 0 to 200 all the way down 
		{ // animate method options below 
			duration: 3000,  // 3 seconds for the entire animation
			step: function(now){  // step option is going to get called as the animation progresses. 
				logoVar.css('transform', 'translate(0px, ' + now + 'px)'); // this is where we actually look at the DOM element logo 
			}
		});
	});

// sudden idea: What it does is it will fade in and out on the page 
$(document).ready(function(){

	var logoVar = $('#logo');

	$({d: 0}).animate(
	{
		d: 200 // if I set it up to zero like 'd:0' after some period of time it stops fading and logo remains on the page otherwise with d:200 it will disappear 
	},
	{
		// duration: 3000,
		step: function(now){
			logoVar.fadeToggle(500);
			}
		}
	)
});


// Another sudden idea: what it does is it fades down from 0 to 200 and remains fading. an image after long time disappears
$(document).ready(function(){

	var logoVar = $('#logo');

	$({d: 0}).animate(
	{
		d: 200 // if I set it up to zero like 'd:0' after some period of time it stops fading and logo remains on the page otherwise with d:200 it will disappear 
	},
		{
		duration: 8000,
		step: function(now){
			logoVar.fadeToggle(3000)
			logoVar.css('transform', 'translate(0px, ' + now + 'px)');
			} // remember that this CSS property is a function call. It is not a numeric value.
		}
	)
});

// CSS Transform 'scale' function 
$(document).ready(function(){

	var logoVar = $('#logo');

	$({d: 0}).animate(
	{
		d: 4 // For scaling '1' is original size. We're starting from 0 very small it's invisible and when it reaches '1' it'll be its original size. Here it'll be 4 times the normal size meaning it will start super small, and will grow up to be 4 times the size. 
	},
	{
		duration: 4000,
		step: function(now){
			logoVar.css('transform', 'scale(' + now + ' ,' + now + ')') // 'scale' will take two 'now'  meaning 'numbers' how much it'll scale in the X direction and how much it'll scale in the Y direction 
			} 
		}
	)
});

// Another sudden idea: It scales and fades out 
	$(document).ready(function(){

		var logoVar = $('#logo');

		$({d: 0}).animate(
		{
			d: 4 
		},
		{
			duration: 8000,
			step: function(now){
				
				logoVar.css('transform', 'scale(' + now + ' ,' + now + ')')
				logoVar.fadeOut(3000);
			} 
		}
	)
});

// CSS Transform 'rotate' Function 
	$(document).ready(function(){
		var logoVar3 = $('#logo2');

		$({k: 0}).animate(
		{
			k: 360
		},
		{
			duration: 4000, // don't forget comma in here otherwise you'll get 'Uncaught SyntaxError: Unexpected identifier'
			step: function(now){
				logoVar3.css('transform', 'rotate(' + now + 'deg)');
			}
		}
	)
});

// Another idea: After rotating it will fade out 
	$(document).ready(function(){
		var logoVar4 = $('#logo');

		$({a: 0}).animate(
		{
			a: 360
		},
		{
			duration: 3000,
			step: function(now){
				// logoVar4.fadeIn(2000) adding this function will make our logo fade in & out non stop 
				logoVar4.css('transform', 'rotate(' + now + 'deg)')
				logoVar4.fadeOut(3000);  // if pass it a string value like 'logoVar4.fadeOut('slow') it will not fade out so pass it a second in number '
			}
		}
	)
});

// Now what if we want to rotate, scale, or transform of the same image ?
	$(document).ready(function(){
		var logoVar5 = $('#logo');
		var scaleVar = 0;
		var rotateVar = 0;

		$({scaleVar: 0, rotateVar: 0}).animate(
		{
			scaleVar: 2,
			rotateVar: 360
		},
		{
			duration: 3000,
			step: function(now, ab){

				if(ab.prop == 'scaleVar')
					scaleVar = now;
				else if(ab.prop == 'rotateVar')
					rotateVar = now;

				logoVar5.css('transform', 'scale(' + scaleVar + ') rotate(' + rotateVar + 'deg)')
				logoVar5.fadeOut(3000);
			}
		}
	)
});

// idea: trying to combine 'translate' with 'rotate' CSS Transform functions
$(document).ready(function(){
		var logoVar = $('#logo');
		var rotateVar =0;

		$({translateVar: 0, rotateVar: 0}).animate( 
		{
			translateVar: 200,
			rotateVar: 360 
		},
		{ // animate method options below 
			duration: 5000,  // 5 seconds for the entire animation
			step: function(now, abc){  

				if(abc.prop == 'translateVar')
					translateVar = now;
				else if(abc.prop =='rotateVar')
					rotateVar =now; 

				logoVar.css('transform', 'translate(0px, ' + now + 'px) rotate(' + rotateVar + 'deg)'); 
				// NEED TO GET X and Y positions and asked in stackoverflow waiting for a proper answer 
			}
		}
	);	
});

// sudden idea: what it does is it stops animation when it reaches its halfway uncomment it to see how it works I have easing that's why it's commented
	$(document).ready(function(){
		var imgVar = $('#logo');

		$({n: 100}).animate(
		{
			n: 400
		},
		{
			duration: 3000,
			easing: 'easeOutBounce',  
			step: function(now, tween){  // tween will make it stop when it reaches halfway 
				imgVar.css("transform", 'translate(0px, ' + now + 'px) ');
				imgVar.text(now)
				// if(tween.pos > 0.5)  
				// 	$(this).stop();
			}
		}
	)
});

							// Transforming DOM Elements in 3D

// Rotating an element on the X axis will be accomplished with 'rotateX(deg)' 
// Rotating an element on the Y axis -> rotateY(deg)
// Rotating  an element on the Z axis -> rotateZ(deg)  -> Z axis points directly at the viewer 

// 3D works only when you have an image inside some other container(element) and set up .css properties in our case <div> is a container.  <div> should have 'position: relative' and an image(logo) inside of it should have 'position: absolute'
// Example:
		$(document).ready(function(){
		$('#box').css({
			'perspective': '50px',    // 'perspective' is a 3D value, which lets us know how close or how far away we are from the object itself
			'perspective-origin': '50% 50%'  // 'perspective-origin' will center the image in the middle of our view or we can adjust this and get it to rotate from an edge
		});
		var imgLogo = $('#logo3D');

		$({ threeD : 0}).animate (
		{
			threeD: 360
		},
		{
			duration: 6000,
			easing: 'easeOutBounce',
			step: function(now, abc){  // after 'now' i have 'abc' it just simply to run a code stably I guess
				imgLogo.css('transform', 'rotateX('+now+ 'deg)' );
			}
		}
	);
});

// I am trying 'skew' in 3D
	$(document).ready(function(){
		$('#box').css({
			'perspective': '0px',    
			'perspective-origin': '50% 50%'  
		});
		var imgLogo = $('#logo3D');

		$({ threeD : 0}).animate (
		{
			threeD: 360
		},
		{
			duration: 6000,
			easing: 'easeOutCirc',
			step: function(now, abc){
				imgLogo.css('transform', 'skew('+now+ 'deg)' );
			}
		}
	);
});


// trying  'scale'   No difference at all  with 2D way technique 
	$(document).ready(function(){
		$('#box').css({
			'perspective': '0px',    
			'perspective-origin': '50% 50%'  
		});
		var imgLogo = $('#logo3D');
		var scaleVar = 0;

		$({ scaleVar : -5}).animate (  // trick: an idea came to my mind. I changed its value from positive to the negative value now it animates from large to small size
		{
			scaleVar: 2  // trick: negating this value will make an image upside down 
		},
		{
			duration: 3000,
			// easing: 'easeOutCirc',
			step: function(now, abc){

			imgLogo.css('transform', 'scale(' + now + ' ,' + now + ')')
			}
		}
	);
});

// Combination of all three coordinates X, Y, Z
	$(document).ready(function(){
		$('#box').css({
			'perspective': '50px',
			'perspective-origin': '50% 50%'
		});

		var img3DLogo = $('#logo3D');

		$({ rotateVar: 0}).animate(
			{
				rotateVar: 60 // when use 'rad' decrease this number to give slower motion otherwise it looks a bit hyper
			},
			{
				duration: 9000,
				easing: 'easeOutElastic',
				step: function(now, abc){
					img3DLogo.css('transform', 'rotateZ(' + now + 'deg) rotateX(' + now + 'deg) rotateY(' + now + 'deg)');
				} // try radiance 'rad' -> img3DLogo.css('transform', 'rotateZ(' + now + 'rad) rotateX(' + now + 'rad) rotateY(' + now + 'rad)');
			}
		)
	});





