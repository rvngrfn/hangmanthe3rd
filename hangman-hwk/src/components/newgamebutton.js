import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { newGame, createGame } from "../actions/actions";
import { Link } from "react-router-dom";

class NewGameButton extends PureComponent {
	newHang() {
		this.props.createGame;
	}

	render() {
		return (
			<Link to="/hangman">
				<button className="primary" onClick={this.newHang.bind(this)}>
					Start Playing
				</button>
			</Link>
		);
	}
}

export default connect(
	null,
	{ newGame, createGame }
)(NewGameButton);
