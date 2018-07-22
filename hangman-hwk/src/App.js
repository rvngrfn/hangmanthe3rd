import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import store from "./store.js";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import DashboardCont from "./containers/dashboardcont";
import NewGameButton from "./components/newgamebutton";
import Dashboard from "./components/dashboard";
import Home from "./containers/home";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Route exact path="/" component={Home} />
					<main>
						<wordList />
						<Route exact path="/hangman" component={DashboardCont} />
					</main>
				</div>
			</Provider>
		);
	}
}
export default App;
