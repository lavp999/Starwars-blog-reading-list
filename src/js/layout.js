import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Demo } from "./views/demo";
import injectContext from "./store/appContext";

import { HomeCharacters } from "./views/homeCharacters";
import { HomeCharacters2 } from "./views/homeCharacters2";
import { HomePlanets } from "./views/homePlanets";
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
{/*					<Switch>
						{/*<Redirect from="/" to="/1" />
							Como no se redirigirlo esta es la única chapuza que me ha funcionado!! -->  Repetir la ruta						
						

						<Route exact path="/">
							<HomeCharacters />
							<HomePlanets />
							<HomeCharacters2 />
						</Route>	
						<Route exact path="/:pagina">
							<HomeCharacters />
							<HomePlanets />
							<HomeCharacters2 />
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
							<h1>Onde vas!!</h1>
						</Route>
					</Switch>
					*/}						
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
