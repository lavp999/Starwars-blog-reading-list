import React, { useState , useEffect , useContext } from "react";
import "../../styles/home.css";
import { useParams } from "react-router-dom";
import { Characters } from "../component/characters.js";
import { Planets } from "../component/planets";
import { Context } from "../store/appContext";
import {getPagina} from "../utilidades";

export const Home = (props) => {
    const params = useParams();
	const [lista, setLista] = useState([]);
	const [pie, setPie] = useState({});
	const [paginaChar, setPaginaChar] = useState("3");
	const {store} = useContext(Context);

	useEffect(()=>{
		console.log(params.pagina);
		fetch(`${store.servidor}people?page=${paginaChar}&limit=10`)
			.then(res => res.json())
			.then((response) => {
				setPie({"next": getPagina(response.next, setPaginaChar), 
						"previous": getPagina(response.previous, setPaginaChar), 
						"total_pages" : response.total_pages, 
						"total_records" : response.total_records});
				setLista(response.results);
			})
			.catch(err => console.error(err));
	},[]);						

	return (<div className="text-center mt-5">
				<div>
					<Characters lista = {lista} setLista={setLista} pie={pie} paginaChar={paginaChar} setPaginaChar={setPaginaChar}/>
				</div>
				<div>
					<hr className="my-4" />
					<hr className="my-4" />
					<hr className="my-4" />
				</div>
				<div>
					<Planets pagina={params.pagina}/>
				</div>
			</div>
			)
};