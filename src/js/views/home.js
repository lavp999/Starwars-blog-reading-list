import React from "react";
import "../../styles/home.css";
import { Characters } from "../component/characters.js";
import { Planets } from "../component/planets.js";

export const Home = (props) => {
	return (<div className="text-center mt-5">
				<div>
					<Characters lista = {props.lista} />
				</div>
				<div>
					<Planets />
				</div>
			</div>
			)
};