var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount = 10;

// Arrays used to create blanks and letters on screen
var lettersInChosenWord = [];
var blanksLetters = [];

// Array of words the user will guess
var words = ["variable","array", "modulus", "object", "function", "string", "boolean"];

// when start button clicked
    //  timer countdown starts and updates on the dom every second
    // chooses random word
    // listens for keyboard inputs
        // if input char is in the word then update the DOM w/ all instances of the char
        // if all chars in the word are entered updated DOM and stop the counter and update the wins/losses 

    function countdown() {
        // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
        var timeInterval = setInterval(function () {
          // As long as the `timeLeft` is greater than 1
          if (timerCount > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerElement.textContent = timerCount;
            // Decrement `timeLeft` by 1
            timerCount--;
          } else if (timerCount === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerElement.textContent = timerCount;
            timerCount--;
          } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerElement.textContent = '';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            // Call the `displayMessage()` function
            // displayMessage();
          }
        }, 1000);
      
    }
    
    startButton.addEventListener("click", function(event){
        countdown();
    
    var randomIndex;
    randomIndex = Math.floor((Math.random())*words.length);
    var wordToGuess = words[randomIndex];

    console.log("words len:" + words.length);
    console.log("index" + randomIndex);
    console.log("word to guess: " + wordToGuess);

    var wordBlank = Math.floor(Math.random()*(wordToGuess.length-1));

    

    });
    