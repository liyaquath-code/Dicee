// gameStatus: 0 = Start / Restart, 1 = In Progress
var playerTurn, player1Score, player2Score, targetScore = 20, gameStatus = 0;

// Get the name as defined in home page
var player1 = sessionStorage.getItem("player1");
var player2 = sessionStorage.getItem("player2");

// In case if the name is null, default to Player 1 or Player 2
if ((player1 === null || player1 == "" || player1 == "undefined") && (player2 == null || player2 == "" || player2 == "undefined")) {
    player1 = "Player 1";
    player2 = "Player 2";
} else if (player1 === null || player1 == "" || player1 == "undefined"){
    player1 = "Player 1";
    player2 = sessionStorage.getItem("player2");
} else if (player2 === null || player2 == "" || player2 == "undefined"){
    player2 = "Player 2";
    player1 = sessionStorage.getItem("player1");
} else {
    player1 = sessionStorage.getItem("player1");
    player2 = sessionStorage.getItem("player2");
}

// Set the name as defined in home page
document.querySelector(".player1Label").innerHTML = player1;
document.querySelector(".player2Label").innerHTML = player2;

// Restart the game if over, otherwise call rollAction
document.querySelector(".btn").addEventListener("click", function() {
    if (gameStatus == 1) {
        rollAction();
    } else {
        restart();
    }
});

// Main function
function rollAction() {
    var randomNumber = Math.ceil(Math.random() * 6);

    // Add the class for animation effect
    document.querySelector(".img" + playerTurn).classList.add("image");
    document.querySelector(".img" + playerTurn).setAttribute("src", "images/dice" + randomNumber +".png");

    // Remove the animation effect in 300 ms
    setTimeout(function(){ 
        document.querySelector(".img" + playerTurn).classList.remove("image");
     }, 300);

        // This if clause will calculate score, change label, and status (if score is >20) based on player turn
        if (playerTurn == 1) {
            player1Score += randomNumber;
            document.querySelector(".score1").innerHTML = "Score: " + player1Score;
            playerTurn = 2;
            if (player1Score >= targetScore) {
                document.querySelector("h1").innerHTML = player1 + " wins!";
                document.querySelector(".btn").innerHTML = "Restart";
                gameStatus = 0;
            } else {
                document.querySelector("h1").innerHTML = player2 + "'s turn";
            }

         } else {
            player2Score += randomNumber;
            document.querySelector(".score2").innerHTML = "Score: " + player2Score;
            playerTurn = 1;
            if (player2Score >= targetScore) {
                document.querySelector("h1").innerHTML = player2 + " wins!";
                document.querySelector(".btn").innerHTML = "Restart";
                gameStatus = 0;
            } else {
                document.querySelector("h1").innerHTML = player1 + "'s turn";
            }
         }
}

// Resets the score, labels and the status
function restart() {
    player1Score = 0;
    player2Score = 0;
    playerTurn = 1;
    document.querySelector("h1").innerHTML = player1 + "'s turn";
    document.querySelector(".score1").innerHTML = "Score: " + player1Score;
    document.querySelector(".score2").innerHTML = "Score: " + player2Score;
    document.querySelector(".btn").innerHTML = "Roll";
    gameStatus = 1;
}