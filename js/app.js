// handles all events for the two classes and runs the game

// const game = new Game();

// game.phrases.forEach((phrase, index) => {
// 	console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => {
// 	console.log(`Phrase - phrase: `, phrase.phrase);
// }

// const game = new Game();

// logPhrase(game.getRandomPhrase());


// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);

let game;

document.getElementById('btn__reset').addEventListener('click', () => {
	game = new Game();
	game.startGame();
});

/**
 * Handles onscreen keyboard button clicks
 * @param (HTMLButtonELement) button - The clicked button element
 */
document.querySelector('#qwerty').addEventListener('click', (e) => {
	let letters = document.querySelectorAll('button');
	for ( let i = 0; i < letters.length; i++ ) {
		if (e.target && e.target.nodeName == 'BUTTON') {
				game.handleInteraction(e.target); 
				break;
		} else {
			break;
		}
	}
});

document.addEventListener('keyup', (e) => {
	let buttons = document.querySelectorAll('button');
	for ( let i = 0; i < buttons.length; i++) {
		if ( e.code.split('Key').pop().toLowerCase() === buttons[i].textContent) {
			console.log(`${e.code.split('Key').pop().toLowerCase()} matches ${buttons[i].textContent}`);
			break;
		} else {
			console.log(`${e.code.split('Key').pop().toLowerCase()} did not match anything`);
			break;
		}
	}
});





