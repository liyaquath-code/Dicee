function start() {
    // Set the player name
    var player1 = document.querySelector("#player1").value;
    sessionStorage.setItem("player1", player1);
    var player2 = document.querySelector("#player2").value;
    sessionStorage.setItem("player2", player2);

    // Change the game mode based on user selection
    let mode = document.getElementById('mode').value;
    if(mode == "classic") {
        mode = "dicee"
    } else {
        mode = "fastest"
    }
    window.location.href = mode+".html";
}

// Show or Hide instruction window

function showInstructions() {
    document.getElementById("instructions").style.display="block"; 
}

document.getElementById("close").addEventListener("click", function() {
    document.getElementById("instructions").style.display="none"; 
})