// GLOBAL VARIABLES
// Generates random number
var randomNumber = Math.floor(Math.random()*101+19);
$('#random-number-text').text(randomNumber);
console.log(randomNumber);




//Random numbers for crystals between 1 and 12
var crystal1 = Math.floor(Math.random()*11+1);
console.log(crystal1);
var crystal2 = Math.floor(Math.random()*11+1);
console.log(crystal2);
var crystal3 = Math.floor(Math.random()*11+1);
console.log(crystal3);
var crystal4 = Math.floor(Math.random()*11+1);
console.log(crystal4);

// User score total will be held here
var userScore = 0;

// Game counters held here
var winCounter = 0;
var lossCounter = 0;

// var randomNumberText = document.getElementById('random-number-text');
// var winsText = document.getElementById('wins-text');
// var lossesText = document.getElementById('losses-text');

// FUNCTIONS

$(document).ready(function(){
    $('#wins-text').text(winCounter);
    console.log("you win");
    $('#losses-text').text(lossCounter);
    console.log("you lose");

// Crystal clicks 
$("#green").on("click", function() {
    userScore += crystal1;
    $('#players-score-text').text(userScore);
    console.log(userScore);
})

$( "#blue" ).click(function() {
    userScore += crystal2;
    $('#players-score-text').text(userScore);
    console.log(userScore);
})

$( "#yellow" ).click(function() {
    userScore += crystal3;
    $('#players-score-text').text(userScore);
    console.log(userScore);
})

$( "#red" ).click(function() {
    userScore += crystal4;
    $('#players-score-text').text(userScore);
    console.log(userScore);
})

    // Reset
    
    


// MAIN PROCESS

if (userScore === randomNumber) {
    winCounter++;
    $('#wins-text').text(winCounter);
    console.log("winCounter");

} else { 

}
   

});

