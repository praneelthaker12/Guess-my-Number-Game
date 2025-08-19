# Number Guessing Game

A simple and interactive Number Guessing Game built with JavaScript, HTML, and CSS.

## Features

- Random number generation (1-20)
- Score tracking and high score system
- Feedback messages for user guesses
- Enter key support for faster gameplay
- Restart game functionality with "Again" button
- Dynamic UI changes (background color and number size)

## How to Play

1. Open `index.html` in your browser.
2. A random number between 1 and 20 is generated.
3. Enter your guess in the input box and press **Enter** or click **Check**.
4. The game will show feedback:
   - "TOO HIGH" if your guess is too high
   - "TOO LOW" if your guess is too low
   - "Correct Number" if you guessed correctly
5. Your score decreases by 1 for each wrong guess.
6. If you want to play again, click the **Again** button to reset the game.

## Technologies Used

- JavaScript (ES6)
- HTML5
- CSS3

## Code Overview

- `secretNumber` → Stores the random number.
- `score` → Tracks the player's score.
- `highscore` → Stores the highest score achieved.
- `displayMessage()` → Updates the message displayed to the player.
- Event listeners:
  - `.check` → Handles the guess checking logic.
  - `.again` → Resets the game.
  - `.guess keydown` → Allows pressing Enter to submit a guess.

## Author

Praneel Milind Thaker

---

Enjoy guessing the number and try to beat your high score!
