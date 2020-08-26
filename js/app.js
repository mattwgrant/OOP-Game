// handles all events for the two classes and runs the game

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
				e.target.textContent = e.target.textContent.toUpperCase();
				break;
		} else {
			break;
		}
	}


});

document.addEventListener('keyup', (e) => {
	let buttonsNode = document.querySelectorAll('button.key');
	let buttons = Array.from(buttonsNode);
	let find = buttons.filter((button) => {
		if ( e.code.split('Key').pop().toLowerCase() === button.textContent) {
			game.handleInteraction(button); 
			button.textContent = button.textContent.toUpperCase();
		} 
	})
});





