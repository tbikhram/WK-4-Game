$(document).ready(function(){
// create the variables of the game, this is what the functions will do
var randomNumber1;
var randomCrystal = [0,0,0,0];
var Win= 0;
var Loss=0;
var sumPoints=0;

// this is the first function to get the random number
function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;

    }
// this is place a random number between 19 and 121
function placeRandom(){
		randomNumber1 = getRandomInt(19,121);
		$("#randomNumber").html(randomNumber);
		
		


// here we asign the crystals and using the array to get values for each crystal
 function assignCrystalVal(){
 	for(var i=0; i <randomCrystal.length; i++){
		randomCrystal[i] = getRandomInt(1,12);
		console.log(i);
 	}
 	$("#crystal1").attr("value", randomCrystal[0]);	
 	$("#crystal2").attr("value", randomCrystal[1]);	
 	$("#crystal3").attr("value", randomCrystal[2]);	
 	$("#crystal4").attr("value", randomCrystal[3]);	

 }
	 placeRandom();
	 assignCrystalVal();

	 $("#randomNumber").html(randomNumber);
	 $("#gemScores").html(sumPoints);
	 $("#Win").html(Win);
	 $("#Loss").html(Loss);



	// statements to make click true and false so when clicked it has a value that is true
	 $(".crystal").click(function(){
	 	if(sumPoints<randomNumber){
	 		if($(this).hasClass("crystal1")){
	 			sumPoints += randomCrystal[0];
	 		}
	 		else if ($(this).hasClass("crystal2")){
	 			sumPoints += randomCrystal[1];

	 		}
	 		else if($(this).hasClass("crystal3")){
	 			sumPoints += randomCrystal[2];
	 		}
	 		else if($(this).hasClass("crystal4")){
	 			sumPoints += randomCrystal[3];
	 		}
	 		$("#gemScores").html(sumPoints);
	 	}
	 	else{
	 		gemScores();
	 		placeRandom();
	 		assignCrystalVal();
	 		}

	});


	function gemScores(){
		if(sumPoints === randomNumber){
			win++;
		}else if(sumPoints>randomNumber){
			lose++;
		}
	

	sumPoints = 0;
	$("#win").html(win);
	$("#loss").html(loss);
	$("#score").html(sumPoints);

}

}
});




