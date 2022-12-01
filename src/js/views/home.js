import React from "react";
import "../../styles/home.css";
import { Characters } from "../component/characters.js";
import { Planets } from "../component/planets.js";

export const Home = (props) => {
	return (<div className="text-center mt-5">
				<div>
					<Characters lista = {props.lista} setLista={props.setLista} listaFav={props.listaFav} setListaFav={props.setListaFav} pie={props.pie}/>
				</div>
				<div>
					<Planets />
				</div>
			</div>
			)
};