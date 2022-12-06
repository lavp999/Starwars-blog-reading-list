import React, { useState , useEffect , useContext } from "react";
import "../../styles/home.css";
import { useParams } from "react-router-dom";
import { Characters } from "../component/characters.js";
import { Context } from "../store/appContext";
import { getPagina } from "../utilidades";

export const HomeCharacters = () => {
    const params = useParams();
	const {store, actions} = useContext(Context);

	useEffect(()=>{
		let pagina = 1;

		if (!isNaN(params.paginaChar))
			pagina = params.paginaChar;
		
		fetch(`${store.servidor}people?page=${pagina}&limit=10`)
			.then(res => res.json())
			.then((response) => {
				actions.setListaChar(response.results);
				actions.setGlobalChar({	"next": getPagina(response.next), 
										"previous": getPagina(response.previous), 
										"total_pages" : response.total_pages, 
										"total_records" : response.total_records,
										"pag_actual": params.paginaChar});
			})
			.catch(err => console.error(err));
	},[]);						

	return (<div className="text-center mt-5">

				<div>
					<Characters />
				</div>
				<div>
					<hr className="my-4" />
					<hr className="my-4" />
					<hr className="my-4" />
				</div>
			</div>
			)
};