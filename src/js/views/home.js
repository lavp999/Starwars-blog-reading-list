import React, { useState , useEffect } from "react";
import "../../styles/home.css";
import { Characters } from "../component/characters.js";
import { Planets } from "../component/planets.js";

export const Home = (props) => {

	const [lista, setLista] = useState([]);
	const [pie, setPie] = useState({});
	const [paginaChar, setPaginaChar] = useState("3");
	const servidor = "https://www.swapi.tech/api/";
	/*
	const [lista, setLista] = useState([{"name": "Luke Skywalker", "uid":1, "gender": "Masculino", "hair_color": "azul", "eye_color": "no los abre", "image": imagen},
										{"name": "Otto Skywalker", "uid":2, "gender": "Femenino", "hair_color": "verde", "eye_color": "negro", "image": imagen},
										{"name": "Otta Skywalker", "uid":3, "gender": "Masculino", "hair_color": "rojo", "eye_color": "azul", "image": imagen},
										{"name": "Otte Skywalker", "uid":4, "gender": "Femenino", "hair_color": "negro", "eye_color": "negro", "image": imagen},
										{"name": "Otti Skywalker", "uid":5, "gender": "Femenino", "hair_color": "claro", "eye_color": "verde", "image": imagen},
									]);
	*/

	const recortaPagina = (cadena) => {
		let pagina = "-1";

		if (cadena != null){
			let p1 = cadena.indexOf("?page=");
			let p2 = cadena.indexOf("&limit");
			if (p1 !== -1 && p2 != -1)
				pagina = cadena.substring(p1+6 , p2);
		}
		setPaginaChar(pagina);
		return pagina;
	}

	useEffect(()=>{
		fetch(`${servidor}people?page=${paginaChar}&limit=5`)
			.then(res => res.json())
			.then((response) => {
				setPie({"next": recortaPagina(response.next), 
						"previous": recortaPagina(response.previous), 
						"total_pages" : response.total_pages, 
						"total_records" : response.total_records});
				setLista(response.results);
			})
			.catch(err => console.error(err))
	},[]);						

	return (<div className="text-center mt-5">
				<div>
					<Characters listaFav={props.listaFav} setListaFav={props.setListaFav}  lista = {lista} setLista={setLista} pie={pie} paginaChar={paginaChar} setPaginaChar={setPaginaChar}/>
				</div>
				<div>
					<hr className="my-4" />
					<hr className="my-4" />
					<hr className="my-4" />
				</div>
				<div>
					<Planets />
				</div>
			</div>
			)
};