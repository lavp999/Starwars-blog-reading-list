import React from "react";
import "../../styles/home.css";
import { useParams } from "react-router-dom";
import { Planets } from "../component/planets";

export const HomePlanets = () => {
    const params = useParams();


	return (<div className="text-center mt-5">
				<div>
					<Planets pagina={params.pagina}/>
				</div>
			</div>
			)
};