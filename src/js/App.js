import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import ScrollToTop from "./component/scrollToTop";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Characters from "./component/characters";
import Planet from "./component/planet";
import Planets from "./component/planets";
import Vehicles from "./component/vehicles";
import Vehicle from "./component/vehicle";
import Character from "./component/character";

const App = props => {
	// const showModal = () => {

	// }
	const basename = "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/home" component={Home} />
						<Route path="/vehicles/:vehicle" component={Vehicle} />
						<Route path="/characters/:character" component={Character} />
						<Route path="/planets/:planet" component={Planet} />
						<Route path="/characters" component={Characters} />
						<Route path="/vehicles" component={Vehicles} />
						<Route path="/planets" component={Planets} />
						<Route render={() => <h1 id="undefined">Not Found</h1>} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(App);
