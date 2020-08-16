// start and end, handle interactions, geta random phrase, check for a win, remove lives

class Game {
	constructor() {
		this.missed = 0;
		this.phrases = [];
		this.activePhrase = null;
	}

	createPhrase() {
		const phrases = [ 'Get your act together',
						  'Seize the day',
						  'Cutting corners',
						  'Better late than never',
						  'Speak of the devil'
						],
		phrases = Math.random();
		phrases = phrases.toUpperCase();
		return phrases
	}
}