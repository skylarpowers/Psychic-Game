//array for possible choices
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//guessed letters array
var guessedLetters= [];

//correct letter to guess
var letterToGuess = undefined;

//number of guesses left
var guessesLeft = 9;

//wins/losses counter
var wins = 0;
var losses = 0;


//function to show guesses left
var updateGuessesLeft = function() {
  document.querySelector("#guessesLeftToWin").innerHTML = "Number of guesses left: " + guessesLeft;
};

//function to get new letter to guess
var updateLetterToGuess = function() {
  this.letterToGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
};

//function to show guessed letters
var updateGuessedLetters = function() {
  document.querySelector("#userGuesses").innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

//reset function
var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();



document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

  		//if you win this happens
        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML("Wins: " + wins);
                alert("You Win! Continue With Your Streak!!");
                reset();
            }
           //if incorrect this happens
        }else if(guessesLeft == 0){
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML("Losses: " + losses);
            alert("You Lose! Try Again!!");
            // Then we'll call the reset. 
            reset();
        }
};


