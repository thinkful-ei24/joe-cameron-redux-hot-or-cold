

const GUESS_NUMBER = 'GUESS_NUMBER';

const guessNumber = (number) => {
  type: GUESS_NUMBER,
  number
};

export default guessNumber