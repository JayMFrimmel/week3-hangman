// establish initial array
var gameWords = ["Statue of Liberty", "White House", "Golden Gate Bridge", "Niagara Falls", "Space Needle"];

// keep track of words in play, letters in the words, guesses made and remaining, wins

wordsInPlay: null,
lettersOfTheWords: [],
matchedLetters: [],
guessedLetters: [],
guessesLeft: 0;
totalGuesses: 0;
letterGuessed: null,
wins: 0,

//set up game function

setupGame: function() {
	// pick a rand word (set)
	var objKeys = Object.keys(this.wordsToPick);
	this.wordsInPlay = objKeys[Math.floor(Math.random() * objKeys.length)];

	this lettersOfTheWords = this.wordsInPlay.split('');
	this.rebuildWordsView();
	this.processUpdateTotalGuesses();
},
updatePage: function(letter) {
	if (this.guessesLeft == 0) {
		this.restartGame();
	} else {
		this.updateGuesses(letter);
		this.updateMatchedLetters(letter);
		this.rebuildWordsView();
		if (this.updateWins() == true) {
			this.restartGame();
		}
	}
}