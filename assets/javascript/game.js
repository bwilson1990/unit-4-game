$(document).ready(function() {

// random number to guess from 1 to 100
var targetNumber = Math.floor ((Math.random() * 100) + 1);
var wins = 0;
var losses = 0;
var counter = 0;

var numberOptions = ["10", "5", "3", "7"];


// Power Stone Button
    var imagePower = $("#power-stone").html("<img src='assets/images/power-stone.jpg' height='100%' width='100%' />");

// Reality Stone Button
    var imageReality = $("#reality-stone").html("<img src='assets/images/reality-stone.jpg' height='100%' width='100%' />");

// Soul Stone Button
    var imageSoul = $("#soul-stone").html("<img src='assets/images/soul-stone.jpg' height='100%' width='100%' />");

// Time Stone Button
    var imageTime = $("#time-stone").html("<img src='assets/images/time-stone.jpg' height='100%' width='100%' />");


$("#number-to-guess").text("Random number: " + targetNumber);
$("#total-score").text("Your power level is " + counter);
$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

// Cannot figure out how to get the buttons to randomy choose 1 of the numbers from the array
// var stoneValue = [1, 3, 5, 10];
// for (var i = 0; i < stoneValue.length; i++) {
// }

// All 4 buttons, when clicked, increase their count by their respected number, and adds to the total score.

// The Wins increase if the number total score matches the target number. Otherwise Losses increase if the total score exceeds the target number.

imagePower.on("click", function() {
    counter = counter + 1;

    $("#total-score").text("Your total score is " + counter);
    
    if (counter === targetNumber) {
        wins++;
        $("#wins").text("Wins: " + wins);
    } else if (counter >= targetNumber) {
        losses++;
        $("#losses").text("Losses: " + losses);
    }
});

imageReality.on("click", function() {
    counter = counter + 3
    
    $("#total-score").text("Your total score is " + counter);

    if (counter === targetNumber) {
        wins++;
        $("#wins").text("Wins: " + wins);
    } else if (counter >= targetNumber) {
        losses++;
        $("#losses").text("Losses: " + losses);
    }
});

imageSoul.on("click", function() {
    counter = counter + 5
    
    $("#total-score").text("Your total score is " + counter);

    if (counter === targetNumber) {
        wins++;
        $("#wins").text("Wins: " + wins);
    } else if (counter >= targetNumber) {
        losses++;
        $("#losses").text("Losses: " + losses);
    }
});

imageTime.on("click", function() {
    counter = counter + 10
    
    $("#total-score").text("Your total score is " + counter);

    if (counter === targetNumber) {
        wins++;
        $("#wins").text("Wins: " + wins);
    } else if (counter >= targetNumber) {
        losses++;
        $("#losses").text("Losses: " + losses);
    }
});

}); // end of document.ready(function)
