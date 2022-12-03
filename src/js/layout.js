import React, { useState , useEffect, useContext } from "react";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home.js";
import { Demo } from "./views/demo";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { DetailPlanet } from "./component/detailPlanet";
import { DetailCharacter } from "./component/detailCharacter";

//create your first component 
const Layout = () => {
	// the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="container">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar/>
					<Switch>
						<Route exact path="/">
							<Home/>
						</Route>
						<Route exact path="/singleCharacter/:characterId">
							<DetailCharacter />
						</Route>

						<Route exact path="/singlePlanet/:planetId">
							<DetailPlanet />
						</Route>


						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>

					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
