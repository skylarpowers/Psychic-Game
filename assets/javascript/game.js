//letter choices available
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];



var guesses = 9;

var guessesLeft = 9;

var guessedLetters = [];

var letterToGuess = null;

//wins/losses counter
var wins = 0;
var losses = 0;
//computer letter generator
var computerGuess = letters[Math.floor(Math.random() * letters.length)];

//updating guesses left
var updateGuessesLeft = function() {
  document.querySelector('#guessesLeftToWin').innerHTML = "Guesses left: " + guessesLeft;
};

//updating letter to guess
var updateLetterToGuess = function() {
  this.letterToGuess = this.letters[Math.floor(Math.random() * this.letters.length)];
};

//updating letters guessed
var updateGuessesSoFar = function() {
  document.querySelector('#userGuesses').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};


// reset function
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


//when key is released starts it
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
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Yes, you are psychic!");
                //reset game after win
                reset();
            }

        //if you lose this happens   
        }else if(guessesLeft == 0){
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, you're not psychic, maybe try again?");
            // reset game after loss
            reset();
        }
};