import React, { useState , useEffect , useContext } from "react";
import "../../styles/home.css";
import { useParams } from "react-router-dom";
import { Planets } from "../component/planets";
import { Context } from "../store/appContext";

export const HomePlanets = () => {
    const params = useParams();
	const {store} = useContext(Context);

	return (<div className="text-center mt-5">
				<div>
					<Planets pagina={params.pagina}/>
				</div>
			</div>
			)
};