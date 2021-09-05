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

// Main function
function roll() {
    var randomNumber1 = Math.ceil(Math.random() * 6);
    var randomNumber2 = Math.ceil(Math.random() * 6);

    // Add the class for animation effect
    document.querySelector(".img1").classList.add("image");
    document.querySelector(".img2").classList.add("image");

    // Remove the animation effect in 300 ms
    setTimeout(function(){ 
        document.querySelector(".img1").classList.remove("image");
        document.querySelector(".img2").classList.remove("image");
     }, 300);

    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 +".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 +".png");

    // Change the label based on Random Number
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = player1 + " wins!"
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML = player2 + " wins!"
    } else {
        document.querySelector("h1").innerHTML ="Oops, Draw!"
    }

    document.querySelector(".btn").innerHTML="Roll Again";
}
