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

}
