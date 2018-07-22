//reducers are what enables us to change our data so we will need data for guesses and word

import { combineReducers } from "redux";
import word from "./wordlist"; // this should be constant except when new game
import guesses from "./gamereducers.js";

console.log(word);
export default combineReducers({
	word,
	guesses
});
