//dice1
var randomNumber1 = Math.floor(Math.random() * 6) +1;
var imgSource2 = "images/dice" + randomNumber1 + ".png"; //img source.
var dice1 = document.querySelectorAll("img")[0].setAttribute("src", imgSource2); //generate img.

//dice2
var randomNumber2 = Math.floor(Math.random() * 6) +1;
var imgSource2 = "images/dice" + randomNumber2 + ".png"; //img source.
var dice1 = document.querySelectorAll("img")[1].setAttribute("src", imgSource2); //generate img.

//getWinner
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Players 1 Wins!";
} 
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "players 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}