$ (document).ready(function(){
// create the variables of the game, this is what the functions will do
var randomNumber;
var Win= 0;
var Loss=0;
var sumPoints=0;
var randomCrystal= [1,5,15,13];
var totalNumber=0;
//var randomNumber1=(Math.floor(Math.random() *120 )+19)


//var diamonds1=0;
//var diamonds2;
//var diamonds3;
//var diamonds4;


// this is the first function to get the random number
function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
// this is place a random number between 19 and 121
function placeRandom(){
		randomNumber = getRandomInt(19,121);
		$("#randomNumber").html(randomNumber);
}

  //randomNumber= getRandomInt(19,120)
 // $(".showNumber").html(randomNumber1);
 // console.log(randomNumber);
//assinging random variables
 // for(var i=0; i<randomCrystal.length; i++){
 // 	randomCrystal[i]=getRandomInt(1,12);
 // }

// here we asign the crystals and using the array to get values for each crystal
 function assigncrystalVal(){
 	for(var i=0; i <randomCrystal.length; i++){
		randomCrystal[i] = getRandomInt(1,20);
 	}
 	$("#crystal1").attr("value", randomCrystal[0]);	
 	$("#crystal2").attr("value", randomCrystal[1]);	
 	$("#crystal3").attr("value", randomCrystal[2]);	
 	$("#crystal4").attr("value", randomCrystal[3]);	

 }
	 placeRandom();
	 assigncrystalVal();

	 $("#randomNumber").html(randomNumber);
	 $("gemScores").html(sumPoints);
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
	 		$("#yourScores").html(sumPoints);
	 	}
	 	else{
	 		gemScores();
	 		placeRandom();
	 		assigncrystalVal();
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
	$("loss").html(loss);
	$("#score").html(sumPoints);
}
});






//	function testScore(){
  //	console.log("test1");
  	//if(counter== randomNumber1){
  	//	alert("you won");
  	//	win++;
  	//	$("#win").text("wins:"+ win);
  	//	newgame();
  	//}else if (counter > randomNumber1){
  	//	alert("you lose");
  	//	lose++;
  	//	$("#lose").text("lose" + lose);
  	//	newGame()
  	//}
  	
  	
  //};
 
 //this is the step that asigns a random crystal number to a crystal image

 //$(".diamond1").on('click', function(){
 //	if(diamond1 ===0 ){
//	diamond1 = randomCrystal[Math.floor(Math.random() * randomCrystal.length)];
//			$(".diamond1").val(diamond1);}
//			counter =counter + (diamond1);
//			$("#yourScore").text("Your Score"+ counter);
 //	console.log(diamond1);
 //});

 




