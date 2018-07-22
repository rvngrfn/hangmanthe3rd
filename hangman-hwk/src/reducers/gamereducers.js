import {
	NEW_GAME,
	MAKE_GUESS,
	GAME_OVER,
	IS_WINNER
} from "../actions/actions.js";
//we need a reducer for every new occurence that happens in relation to the game.
//new actions take plaec only when someone makes a guess with limited oucomes

export default (state = [], action = {}) => {
	// console.log(state, action)
	// console.log(
	//   ...state.concat(action.payload),
	// )

	// [], [] => []
	switch (action.type) {
		case NEW_GAME:
			return (state = []);
		case MAKE_GUESS:
			return [...state, ...action.payload];
		case GAME_OVER:
			return state;
		case IS_WINNER:
			return state;
		default:
			return state;
	}
};
