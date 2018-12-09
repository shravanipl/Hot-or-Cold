export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = number => {
	type: 'GUESS_NUMBER', number;
};
export const START_GAME = 'START_GAME';
export const startGame = correct => {
	type: 'START_GAME', correct;
};

export const GENERATE_AURAL_UPDATE = 'GENERATE_AURAL_UPDATE';
export const generateAuralUpdate = () => ({
  type: GENERATE_AURAL_UPDATE
});

