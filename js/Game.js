// start and end, handle interactions, geta random phrase, check for a win, remove lives

class Game {
	constructor() {
		this.missed = 0;
		this.phrases = this.createPhrases();
		this.activePhrase = null;
	}

	/*
	 * Selects phrases for use in game
	 * @return {array} An array of phrases to be used in the game
	 */
	createPhrases() {
		const phrases = [ 'Get your act together',
						  'Seize the day',
						  'Cutting corners',
						  'Better late than never',
						  'Speak of the devil'
						];
		return phrases.map(phrase => new Phrase(phrase));
	}

	/*
	 * Selects random phrase from the phrase property
	 * @return {Object} Phrase object chosen to be used
	 */
	getRandomPhrase() {
		let randomPhrase = Math.floor(Math.random() * this.createPhrases().length);
		let phrase = this.phrases[randomPhrase];
		return phrase;
	}

	/**
	 * Begins game by selecting a random phrase and displaying it to the user
	 */
	 startGame() {
	 	document.getElementById('overlay').style.visibility = 'hidden';
	 	const callPhrase = this.getRandomPhrase()
	 	callPhrase.addPhraseToDisplay();
	 	this.activePhrase = callPhrase;
	 }

	 /**
	  * Calls all methods to check game/lives status
	  * checkForWin(), removeLife(), gameOver() from Game class
	  * checkLetter(), showMatchedLetter() from Phrase class
	  */
	 // handleInteraction() {
	 // 	checkForWin();
	 // 	removeLife();
	 // 	gameOver();
	 // 	checkLetter();
	 // 	showMatchedLetter();
	 // }

	 /**
	  * Checks for winning move
	  * @return {boolean} True if game has been won, false if it has not
	  */
	  checkForWin() {
	  	const active = document.querySelectorAll('#phrase ul li');
	  	const activeArray = Array.from(active);
	  	let rightAnswer = activeArray.filter(letter => letter.className.charAt(0) === 's');
	  	if (activeArray.length === rightAnswer.length) {
	  		return true;
	  	} else {
	  		return false;
	  	}
	  }
	 
	  /**
	  * Increases the value of the missed property
	  * Removes a life from the scoreboard
	  * Checks if the player has remaining lives and ends the game if the player is out
	  */
	  // removeLife() {

	  // }

	  /**
	  * Displays game over message
	  * @param {boolean} gameWon - Whether or note the user won the game
	  */
	  // gameOver(gameWon) {
	  // 	if () {

	  // 	} else {

	  // 	}
	  // }
}
