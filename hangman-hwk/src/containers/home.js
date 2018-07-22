import * as React from "react";
import NewGameButton from "../components/newgamebutton";

class Home extends React.PureComponent {
	render() {
		return (
			<div className="Home">
				<header className="Hang-Header">
					<h1 className="App-title">Welcome to Hangman</h1>
				</header>
				<p className="App-intro">
					'To Get Started Press The Button... if you dare'.
				</p>
				<NewGameButton />
			</div>
		);
	}
}

export default Home;
