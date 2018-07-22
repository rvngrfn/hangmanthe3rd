import * as React from "react";
import Dashboard from "../components/dashboard";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { isWinner } from "../actions/actions";
import Guesses from "./hangmangamecont";
import SubmitGuess from "../components/submitguess";

class DashboardCont extends React.PureComponent {
	static propTypes = {
		guesses: PropTypes.array.isRequired
	};

	makeGuess() {
		const { guesses, word } = this.props;

		return word
			.split("")
			.map(letter => (guesses.indexOf(letter) < 0 ? "_" : letter))
			.join(" ");
	}

	wrongGuessCount() {
		const { word, guesses } = this.props;

		return guesses.filter(guess => word.indexOf(guess) < 0).length;
	}

	isWinner() {
		const { word, guesses } = this.props;
	}

	wrongGuessLimit() {
		const { word, guesses } = this.props;

		return guesses.filter(guess => word.indexOf(guess) < 0).length >= 6;
	}

	gameFinished() {
		const { word, guesses } = this.props;

		return this.wrongGuessLimit(word, guesses) || isWinner(word, guesses);
	}

	componentDidMount() {
		if (this.wrongGuessCount() >= 6) return this.props.gameOver();
		if (this.isWinner()) return this.props.isWinner();
	}

	render() {
		const { guesses } = this.props;
		return (
			<div>
				<Dashboard />
				<p> {guesses.join(", ")} </p>
				<SubmitGuess />
				<Guesses />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		word: state.word,
		guesses: state.guesses
	};
};

export default connect(
	mapStateToProps,
	{}
)(DashboardCont);
