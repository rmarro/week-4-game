// On load
// Set wins to 0, losses to 0

//reset
// Generate a random number between 19-120, display it
// Generate a random number between 1-12 for each of the 4 buttons
    // Make that number the value attribute of the button?
// Set total score to 0

// Gameplay
// If total score is less than target score
// On click, add that number to total score
// If total is equal to target, add point to wins and reset random numbers
// If total is greater than target, add point to lose and reset random numbers




var targetNumber;
var totalScore;
var wins;
var losses;

// Generate a random number between 19-120, display it
targetNumber = Math.floor(Math.random()*102 + 19);
$(".target-number").text(targetNumber);

// Generate a random number between 1-12 for each of the 4 buttons, make it the value
for (var i = 0; i < 4; i++) {
    var randomNumber;
    randomNumber = Math.floor(Math.random()*12 +1);
    $(".btn-" + [i+1]).attr("data-value", randomNumber);
}

