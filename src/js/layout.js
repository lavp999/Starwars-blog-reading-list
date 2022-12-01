import React, { useState , useEffect } from "react";
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
	const [listaFav, setListaFav] = useState([]);

	const [lista, setLista] = useState([]);
	const [pie, setPie] = useState({});
	/*
	const [lista, setLista] = useState([{"name": "Luke Skywalker", "uid":1, "gender": "Masculino", "hair_color": "azul", "eye_color": "no los abre", "image": imagen},
										{"name": "Otto Skywalker", "uid":2, "gender": "Femenino", "hair_color": "verde", "eye_color": "negro", "image": imagen},
										{"name": "Otta Skywalker", "uid":3, "gender": "Masculino", "hair_color": "rojo", "eye_color": "azul", "image": imagen},
										{"name": "Otte Skywalker", "uid":4, "gender": "Femenino", "hair_color": "negro", "eye_color": "negro", "image": imagen},
										{"name": "Otti Skywalker", "uid":5, "gender": "Femenino", "hair_color": "claro", "eye_color": "verde", "image": imagen},
									]);
	*/
	useEffect(()=>{
		fetch("https://www.swapi.tech/api/people?page=2&limit=10")
			.then(res => res.json())
			.then((response) => {
				setPie({"next": response.next, 
						"previous": response.previous, 
						"total_pages" : response.total_pages, 
						"total_records" : response.total_records});

				setLista(response.results);
			})
			.catch(err => console.error(err))
	},[]);						

	return (
		<div className="container">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar listaFav={listaFav} setListaFav={setListaFav} />
					<Switch>
						<Route exact path="/">
							<Home lista={lista} setLista={setLista} listaFav={listaFav} setListaFav={setListaFav} pie = {pie}/>
						</Route>
						<Route exact path="/singleCharacter/:characterId">
							<DetailCharacter  listaFav={listaFav} setListaFav={setListaFav} />
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
