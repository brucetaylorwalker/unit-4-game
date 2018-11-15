$(document).ready(function() {
    
var computerChoice = Math.floor(Math.random() * 102) + 19;
    console.log("computer choice: " + computerChoice); 

var wins = 0;
    console.log("wins: " + wins);

var losses = 0;
    console.log("losses: " + losses);

var crystalOne = Math.floor(Math.random() * 12) + 1;
    console.log("crystal 1: " + crystalOne);

var crystalTwo = Math.floor(Math.random() * 12) + 1;
    console.log("crystal 2: " + crystalTwo);

var crystalThree = Math.floor(Math.random() * 12) + 1;
    console.log("crystal 3: " + crystalThree);

var crystalFour = Math.floor(Math.random() * 12) + 1;
    console.log("crystal 4: " + crystalFour);

var score = 0;
    console.log("score: " + score);

$("#random-number").text(computerChoice);

$("#wins").text(wins);

$("#losses").text(losses);

$("#score").text(score);

$("#crystal-image1").on("click", function() {
    score += crystalOne;
    $("#score").text(score);
    if (score === computerChoice) {
        wins++;
        score = 0;
        $("#wins").text(wins);
    };
    if (score > computerChoice) {
        losses++;
        score = 0;
        $("#losses").text(losses);    
    };
});

$("#crystal-image2").on("click", function() {
    score += crystalTwo;
    $("#score").text(score);
    if (score === computerChoice) {
        wins++;
        score = 0;
        $("#wins").text(wins);
    };
    if (score > computerChoice) {
        losses++;
        score = 0;
        $("#losses").text(losses);        
    };
});

$("#crystal-image3").on("click", function() {
    score += crystalThree;
    $("#score").text(score);
    if (score === computerChoice) {
        wins++;
        score = 0;
        $("#wins").text(wins);
    };
    if (score > computerChoice) {
        losses++;
        score = 0;
        $("#losses").text(losses);        
    };
});

$("#crystal-image4").on("click", function() {
    score += crystalFour;
    $("#score").text(score);
    if (score === computerChoice) {
        wins++;
        score = 0;
        $("#wins").text(wins);
    };
    if (score > computerChoice) {
        losses++;
        score = 0;
        $("#losses").text(losses);    
    };
});

});
