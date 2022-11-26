import React, { useState } from "react";
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

	//the basename is used when your project is published in a subdirectory and not in the root of the domain
// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
const basename = process.env.BASENAME || "";
const [listaFav, setListaFav] = useState([{"name": "Luke Skywalker", "id":1},{"name": "Otto Skywalker", "id":2}]);

const [lista, setLista] = useState([{"name": "Luke Skywalker", "id":1, "gender": "Masculino", "hair-color": "azul", "eye-color": "no los abre"},
									{"name": "Otto Skywalker", "id":2, "gender": "Femenino", "hair-color": "verde", "eye-color": "negro"},
									{"name": "Otta Skywalker", "id":3, "gender": "Masculino", "hair-color": "rojo", "eye-color": "azul"},
									{"name": "Otte Skywalker", "id":4, "gender": "Femenino", "hair-color": "negro", "eye-color": "negro"},
									{"name": "Otti Skywalker", "id":5, "gender": "Femenino", "hair-color": "claro", "eye-color": "verde"},
   								   ]);

	return (
		<div className="container">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar listaFav={listaFav} setListaFav={setListaFav} />
					<Switch>
						<Route exact path="/">
							<Home lista={lista} setLista={setLista} listaFav={listaFav} setListaFav={setListaFav} />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/singleCharacter/:characterId">
							<DetailCharacter />
						</Route>
						<Route exact path="/singlePlanet/:planetId">
							<DetailPlanet />
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
