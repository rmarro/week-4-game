// On load
// Set wins to 0, losses to 0

//reset
// Generate a random number between 19-120, display it
// Generate a random number between 1-12 for each of the 4 buttons
// Set total score to 0

// Gameplay
// If total score is less than target score
// On click, add that number to total score
// If total is equal to target, add point to wins and reset random numbers
// If total is greater than target, add point to lose and reset random numbers


    var targetNumber;
    var totalNumber;
    var wins = 0;
    var losses = 0;
    $(".wins").text(wins);
    $(".losses").text(losses);
    
    reset();

    // RESET
    function reset() {

        totalNumber = 0;
        $(".total-number").text(totalNumber);
        // $(".message").empty();

        // Generate a random number between 19-120, display it
        targetNumber = Math.floor(Math.random()*102 + 19);
        $(".target-number").text(targetNumber);

        // Generate a random number between 1-12 for each of the 4 buttons, make it the value of each
        for (var i = 0; i < 4; i++) {
            var randomNumber;
            randomNumber = Math.floor(Math.random()*12 +1);
            $(".btn-" + [i+1]).attr("value", randomNumber);
        }
    }

    // GAMEPLAY

    // if total is less than target, add value of button to total number
    if (totalNumber < targetNumber) {    
        $("button").on("click", function () {  
            totalNumber += +$(this).val();
            $(".total-number").text(totalNumber);

            // if total = target, win and reset
            if (totalNumber === targetNumber) {
                wins++;
                $(".wins").text(wins);
                $(".message").text("You won!");
                reset();
            }

            // if total is over target, lose and reset
            if (totalNumber > targetNumber) {
                losses++;
                $(".losses").text(losses);
                $(".message").text("You lost!");
                reset();
            }
        });
    }
