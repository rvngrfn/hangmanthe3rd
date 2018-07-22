import * as React from "react";
import NewGameButton from "./newgamebutton";
import { connect } from "react-redux";

class Dashboard extends React.PureComponent {
	gameStatus(props) {
		const { isWinner } = this.props;

		if (isWinner === null) return <div className="gameProgress" />;

		if (!isWinner)
			return (
				<div className="gameOver">
					<p>'`Not Quite`'</p>
				</div>
			);

		if (isWinner)
			return (
				<div className="winner">
					<p>'Do a Dance, YOU Made It'</p>
					<NewGameButton />
				</div>
			);
	}
	render() {
		return (
			<div className="game wrapper">
				<header>Hangman</header>
				<main>{this.gameStatus()}</main>
			</div>
		);
	}
}

const mapStateToProps = ({ isWinner }) => {
	return {
		isWinner
	};
};
export default connect(mapStateToProps)(Dashboard);
