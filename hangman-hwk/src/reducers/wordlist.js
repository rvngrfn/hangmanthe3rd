import wordList from "../lib/game";
//newgame needs the list of words ready to load whenever it starts so Wordlist must be the initial state for every new game
//also we need a button that makes newgame everytime  someone presses start playing or play again
import { NEW_GAME } from "../actions/actions";

export default (state = wordList, { type, payload } = {}) => {
	switch (type) {
		case NEW_GAME:
			return wordList[Math.floor(Math.random() * wordList.length)];
		default:
			return state;
	}
};
