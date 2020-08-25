// handle creation of phrases

class Phrase {
	constructor(phrase) {
		this.phrase = phrase.toLowerCase();
	}

	/**
	 * Display phrase on game board
	 */
	 addPhraseToDisplay() {
	 	let splitPhrase = this.phrase.split('');
	 	const ul = document.querySelector('#phrase ul');
	 	let currentCharacter = splitPhrase.forEach((letter) => {
	 		const letters = /[a-z]/;
	 		if ( letters.test(letter) === true ) {
	 			let li = document.createElement('LI');
	 			li.className = `hide letter ${letter}`;
	 			li.textContent = `${letter}`;
	 			ul.appendChild(li);
	 			// alert(`${letter}`);
	 		} else {
	 			let li = document.createElement('LI');
	 			li.className = "space";
	 			li.textContent = ' ';
	 			ul.appendChild(li);
	 		} 
	 	});
	 }

	/**
	 * Checks if passed letter is in the phrase
	 * @param {string} letter - Letter to check
     */
	 checkLetter(letter) {
	  let currentPhrase = this.phrase;
	  	
	  if ( currentPhrase.indexOf(letter) > -1 ) {
	  	return true
	  } else {
	  	return false;
	  }

	 };


	/**
	  * Displays passed letter on the screen if a match is found
	  * @param {string} letter - Letter to display
	  */
	  showMatchedLetter(letter) {
  		const letterToDisplay = document.querySelectorAll(`.hide.letter.${letter}`);
  		letterToDisplay.forEach(character => {
  			character.className = `show letter ${letter}`;
  		});
  	  }
	  
}

