$ (document).ready(function(){
// create the variables of the game, this is what the functions will do
var randomNumber = 0;
var wins= 0;
var losses=0;
var counter= 0
var randomCrystal= [1,5,15,13];
var totalNumber=0;
var randomNumber1=(Math.floor(Math.random() *120 )+19)


var diaMonds1=0;
var diaMonds2;
var diaMonds3;
var diaMonds4;


// this is the first function to get the random numbers 
function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  randomNumber= getRandomInt(19,120)
  $(".showNumber").html(randomNumber1);
  console.log(randomNumber);
//assinging random variables
  for(var i=0; i<randomCrystal.length; i++){
  	randomCrystal[i]=getRandomInt(1,12);
  }





  function testScore(){
  	console.log("test1");
  	if(counter== randomNumber1){
  		alert("you won");
  		win++;
  		$("#win").text("wins:"+ win);
  		newgame();
  	}else if (counter > randomNumber1){
  		alert("you lose");
  		lose++;
  		$("#lose").text("lose" + lose);
  		newGame()
  	}
  	
  	
  };
 
 //this is the step that asigns a random crystal number to a crystal image

 $(".diaMonds1").on('click', function(){
 	if(diaMonds1 ===0 ){
	diaMonds1 = randomCrystal[Math.floor(Math.random() * randomCrystal.length)];
			$(".diaMonds1").val(diaMonds1);}
			counter =counter + (diaMonds1);
			$("#yourScore").text("Your Score"+ counter);
 	console.log(diaMonds1);
 });

 



})
