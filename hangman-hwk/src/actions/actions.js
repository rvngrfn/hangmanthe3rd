export const NEW_GAME = "NEW_GAME";
export const MAKE_GUESS = "MAKE_GUESS";
export const IS_WINNER = "IS_WINNER";
export const GAME_OVER = "GAME_OVER";

export function newGame(word) {
	return {
		type: "NEW_GAME"
	};
}

export function makeGuess(guess) {
	return {
		type: "MAKE_GUESS",
		payload: guess
	};
}
export function isWinner() {
	return {
		type: "IS_WINNER"
	};
}
export function loser() {
	return {
		type: "GAME_OVER"
	};
}

export function createGame() {
	return function(dispatch) {
		newGame();
	};
}
