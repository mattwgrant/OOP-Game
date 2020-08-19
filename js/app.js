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


const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();
const randomPhrase = game.getRandomPhrase();
const phrase = new Phrase(randomPhrase.phrase);
phrase.addPhraseToDisplay();