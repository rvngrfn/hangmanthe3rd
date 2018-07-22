import * as React from "react";
import { isWinner, makeGuess } from "../actions/actions";
import { connect } from "react-redux";

class SubmitGuess extends React.PureComponent {
	constructor(props) {
		super();

		const guesses = props;

		this.state = guesses;
	}

	updateGuess(event) {
		if (event.keyCode === 13) {
			this.saveGuess();
		}
	}

	saveGuess() {
		const { word } = this.props;
		var alpha = "";
		const guesses = this.refs.guesses.value.toLowerCase();

		if (guesses === word) return this.props.isWinner();
		if (guesses.match(alpha)) this.props.save(guesses);
		this.refs.guesses.value = null;
	}

	render() {
		return (
			<div className="editor">
				<input
					type="text"
					ref="guesses"
					className="guesses"
					placeholder="Enter word or letters "
					defaultValue={this.state.guesses}
					onChange={this.updateGuess.bind(this)}
					onKeyDown={this.updateGuess.bind(this)}
				/>
				<div className="actions">
					<button
						className="primary"
						type="submit"
						onClick={this.saveGuess.bind(this)}
					>
						Guess
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ word, guesses }) => {
	return {
		word,
		guesses
	};
};
const mapDispatchToProps = { save: makeGuess, isWinner };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SubmitGuess);
