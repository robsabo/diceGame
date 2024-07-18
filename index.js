var randomNumber = Math.floor((Math.random() * 6 + 1));
var randomNumber2 = Math.floor((Math.random() * 6 + 1));


document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber + ".png");

document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber > randomNumber2) {
    document.querySelector(".container h1").textContent = "🚩 Player 1 Wins!";
} 
if (randomNumber2 > randomNumber) {
    document.querySelector(".container h1").textContent = "Player 2 Wins! 🚩";
}
if (randomNumber === randomNumber2) {
    document.querySelector(".container h1").textContent = "Draw!";
}