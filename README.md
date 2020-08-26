This project creates a game, Phrase Hunter, using Object Oriented Programming with
JavaScript. Using classes, constructors, and methods, the game randomly generates
a phrase. The player, using the onscreen keyboard, must guess the letters in the 
phrase before having five incorrect letter guesses to win. If they guess five incorrect
letters, the game is over. Whether they win or lose, the board is overlayed with a
message telling them the outcome and a Start Game button to play again. The board is 
cleared and hearts are restored after the game ends so that there is a clean board
every time a new game is started.

For my personal styling, I changed the colors of the background of the on screen keyboard
when a letter is correct or incorrect, as well as the background color of the letters when
they are displayed on the board. I also, though through JS, capitalized the letter
on the key when it has been chosen, whether correct or incorrect.

I have also put in an event listener for the keyup event that makes the physical keyboard
or the onscreen keyboard both work in the same fashion.