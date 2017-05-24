 
    function ready() { 
    u="You are in a dark spooky forest searching for dragon treasure. The wind whistles though the trees. It is cold and dark. You shiver. You are alone and cold, so very cold and so very very alone. A moon breaks through the overcast sky and shines its desolate light upon you. You see three paths ahead of you, each darker and spookier than the last. A chill wind upon your back pushes you forward. You must choose a path.  But which path will you choose?"
   // u="path1";
    
    
//left path to volcano dragon
            $("input[type='button'][value='left path']").click(function(){
				$( ".box" ).empty()
				$( ".buttonbox" ).empty()
				$( ".buttonbox" ).append( "<input type='button' value='play again?'>")
				ready();
				u='As you walk along the left path you notice an extreme increase in temperature as lava starts to appear out of nowhere. The heat is stifling and you are sweating like a pig. You have chosen wrongly my traveler, this path has led you to the lair of the VOLCANO DRAGON. Hotter than the flames of hell, you burn to death from the volcanic breath of this great beast.';
				change();
			})
			
//center path to leprechaun			 
			 $("input[type='button'][value='center path']").click(function(){
				$( ".box" ).empty()
				$( ".buttonbox" ).empty()
				$( ".buttonbox" ).append( "<input type='button' value='continue' id='cont1'>")
				ready();
				u="As you walk down the center path you see a rainbow through the trees. You switch from a leisurely pace to a jog, intrigued by the possibility of gold (it is a magical forest after all). As you burst through the trees you see a small man singing: Musha rain dum a doo, dum a da. Whack for my daddy, oh. Whack for my daddy, oh there's whiskey in the jar, oh! 'Is this real???' you ask yourself, stunned by the completely stereotypical picture of a leprechaun. You approach humming along to the Irish jig, unsure of the friendliness of this leprechaun. When he sees you coming he greets you warmly. And, after an hour or so of singing and dancing, the leprechaun gives you some gold as a parting gift.";
				//u="path2";
				change();
				
			})
			
//Leprechaun to bro dragons
//Help begger to bro dragons	
			 $("input[type='button'][id='cont1'],input[type='button'][value='give gold']").click(function(){
				$( ".box" ).empty()
				$( ".buttonbox" ).empty()
				$( ".buttonbox" ).append("<input type='button' value='answer 1' style='float: left;'> \
				 <input type='button' value='answer 2' style='float: right;'>")
				ready();
				u='You encounter the Bro Dragons(famous for their comedic bromance). They are singing a festive holiday tune! They sing: Oh the weather outside is frightful, but the fire is so delightful. Since we have no place to go... The dragons dramatically turn towards you, expecting you to finish the song. Choose the correct lyrics to belt out: 1. Let it snow! Let it snow! Let it Snow! 2. Let it bro! Let it bro! Let it bro!';
				change();
			})
			
//bro dragons to turkey room
            $("input[type='button'][value='answer 1']").click(function(){
				$( ".box" ).empty()
				$( ".buttonbox" ).empty()
				$( ".buttonbox" ).append( "<input type='button' value='play again?'>")
				ready();
				u='You have thrown off the bromantic mood. The Bro Dragons take your gold and you leave them in disgrace. You come across a cave, expecting the sweet release of death by dragon, but instead a turkey appears! You bring the turkey home and have a delicious Thanksgiving dinner with your family, comforted by the fact that you survived the Spooky Dragon Forest.';
				change();
			})
			
//To treasure room
            $("input[type='button'][value='answer 2'], input[type='button'][id='cont2'], input[type='button'][id='cont3']").click(function(){
				$( ".box" ).empty()
				$( ".buttonbox" ).empty()
				$( ".buttonbox" ).append( "<input type='button' value='play again?'>")
				ready();
				u='You stand in a massive cave filled with treasure.  There are piles of gold stacked to the roof and precious gems are strewn about, catching the light.  You could fill a chest a thousand times over and the room would still be just as full of riches as when you began.  This is the most beautiful room you have ever seen.  You never want to leave.  and you never have to.  You can stay in this cave of treasure forever if you wish.';
				change();
			})
			
//right path to noise			
			 $("input[type='button'][value='right path']").click(function(){
				$( ".box" ).empty()
				$( ".buttonbox" ).empty()
				$( ".buttonbox" ).append("<input type='button' value='investigate left' style='float: left;'> \
				 <input type='button' value='investigate right' style='float: right;'>")
				ready();
				u='From the depths of the cave you hear a roaring sound echo. The reverberations cause some stalactite to break off the ceiling and crash to the damp floor "What could create such a noise?" Whatever it is, you do not particularly feel like becoming friends with it any time soon. Maybe if you continue quietly you can avoid a run in.';
				change();
			})
			
//investigate left to begger			
			 $("input[type='button'][value='investigate left']").click(function(){
				$( ".box" ).empty()
				$( ".buttonbox" ).empty()
				$( ".buttonbox" ).append("<input type='button' value='give gold' style='float: left;'> \
				 <input type='button' value='keep your gold' style='float: right;'>")
				ready();
				u='You see a smelly beggar. He smells soooooooooo badly (a pungent smell of despair and bodily fluids), but he begs you for money so he can take a shower and rejoin society. Do you wish to give the poor sap some money?';
				change();
			})
			
//begger turns you into dragon			
			 $("input[type='button'][value='keep your gold']").click(function(){
				$( ".box" ).empty()
				$( ".buttonbox" ).empty()
				$( ".buttonbox" ).append("<input type='button' value='continue' id='cont2'>")
				ready();
				u='With a wave of his hand you feel your body tingle and the way you sense the world changes. Colors become more vibrant and smells are far more intense. You look down at your hands and see a set of scaled claws in their place. The beggar has turned you into a dragon! In disbelief, you run through the caves for what seems like hours before running into the home of a mother dragon and her new born baby. They adopt you and in an effort to comfort you they bring you to...';
				change();
			})
			
//investigate right to tiny dragon		
			 $("input[type='button'][value='investigate right']").click(function(){
				$( ".box" ).empty()
				$( ".buttonbox" ).empty()
				$( ".buttonbox" ).append("<input type='button' value='kill dragon' style='float: left;'> \
				 <input type='button' value='befriend dragon' style='float: right;'>")
				ready();
				u='As you walk further into the caves, nervous about what lays ahead, you hear a noise resembling a roar from before, except much smaller. You tense and turn the corner to find ..... A baby dragon, no bigger than a breadbox. Although it may be cute now you are unsure about how safe it is to let it grow. A baby means there have got to be parents. Right?';
				change();
			})
			
//kill to mama dragon	
			 $("input[type='button'][value='kill dragon']").click(function(){
				$( ".box" ).empty()
				$( ".buttonbox" ).empty()
				$( ".buttonbox" ).append("<input type='button' value='play again?'>")
				ready();
				u='You lift up your trusty sword and kill the tiny beast.  A single piece of gold falls from the dragon’s claw as it goes limp.  You pick up the gold piece, thinking what a pittance this is for killing a dragon, even a small one.  As you are cursing your bad luck, you hear a roar of fury and pain from behind you.  Before you can even swing your sword around to face a dragon that sounds like it has much better treasure than the one you have just killed, you are engulfed in flames.  As you fall to the ground, you catch a glimpse of the beast that has destroyed you.  It looks just like the small dragon you killed, only much much bigger.  This must be its mother.  This was the worst day ever.';
				change();
			})
			
//befriend to mama dragon	
			 $("input[type='button'][value='befriend dragon']").click(function(){
				$( ".box" ).empty()
				$( ".buttonbox" ).empty()
				$( ".buttonbox" ).append("<input type='button' value='continue' id='cont3'>")
				ready();
				u='The baby dragon perches on your shoulder and makes small roars of glee. That baby dragon is just so darn cute! As you make your way deeper into the forest with your newfound friend you hear the roars of a great beast. The mama dragon appears! The baby dragon flies in front of you before its mom can burn you to a crisp. It vouches for your character and the mama dragon nuzzles you in thanks for bringing her baby home. In gratitude, she takes you to...';
				change();
			})
			
//play again button	
			 $("input[type='button'][value='play again?']").click(function(){
				 window.location = 'Homepage.html';
			})
		//change()	
	

}



$(document).ready(function(){
	  ready();
	
	  change();
	   
	});

//$(document).ready(ready);

function changeText(cont2,speed){
	  var Otext=u;
	  var Ocontent=Otext.split("");
	  var i=0;
	  function show(){
	    if(i<Ocontent.length)
	    {  
	      cont2.append(Ocontent[i]);
	      i=i+1;
	    };	
	  };
	    var Otimer=setInterval(show,speed);
	};
	function change(){
	  changeText($(".box"),50); //  50 = the Delay time in milliseconds between strokes.
	  clearInterval(Otimer);
	}
	

	
	