function roll() {
    var randomNumber1 = Math.ceil(Math.random() * 6);
    var randomNumber2 = Math.ceil(Math.random() * 6);

    document.querySelector(".img1").classList.add("image");
    document.querySelector(".img2").classList.add("image");

    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 +".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 +".png");

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML="Player 1 wins!"
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML="Player 2 wins!"
    } else {
        document.querySelector("h1").innerHTML="Oops, Draw!"
    }

    setTimeout(function(){ 
        document.querySelector(".img1").classList.remove("image");
        document.querySelector(".img2").classList.remove("image");
     }, 300);
    
}