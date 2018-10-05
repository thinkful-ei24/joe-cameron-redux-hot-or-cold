import {RESTART_GAME} from '../actions/restartGame';
import {GUESS_NUMBER} from '../actions/guessNumber';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  auralStatus: '',
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

const makeGuess = (state, guess) => {
  guess = parseInt(guess, 10);
  if (isNaN(guess)) {
    return Object.assign({}, state, { 
      feedback: 'Please enter a valid number' 
    });
  }

  const difference = Math.abs(guess - state.correctAnswer);

  let feedback;
  if (difference >= 50) {
    feedback = 'You\'re Ice Cold...';
  } else if (difference >= 30) {
    feedback = 'You\'re Cold...';
  } else if (difference >= 10) {
    feedback = 'You\'re Warm.';
  } else if (difference >= 1) {
    feedback = 'You\'re Hot!';
  } else {
    feedback = 'You got it!';
  }

  return Object.assign({}, state, {
    feedback,
    guesses: [...state.guesses, guess]
  });
}

const gameReducer = (state=initialState, action) => {
  if(action.type === RESTART_GAME) {
    const newState = Object.assign({}, initialState, {
    correctAnswer: Math.floor(Math.random() * 100) + 1
    })
    return newState;
  } else if(action.type === GUESS_NUMBER) {
    return makeGuess(state, action.number);
  } else {
    return state;
  }
};

export default gameReducer;