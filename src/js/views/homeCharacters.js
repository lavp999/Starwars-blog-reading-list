import React, { useState , useEffect , useContext } from "react";
import "../../styles/home.css";
import { useParams } from "react-router-dom";
import { Characters } from "../component/characters.js";
import { Context } from "../store/appContext";
import { getPagina } from "../utilidades";

export const HomeCharacters = () => {
    const params = useParams();
	const {store, actions} = useContext(Context);

const leerCharacters = () =>{
		fetch(`${store.servidor}people?page=${store.globalChar.pag_actual}&limit=10`)
		.then(res => res.json())
		.then((response) => {
			actions.setListaChar(response.results);
			actions.setGlobalChar({	"next": getPagina(response.next), 
									"previous": getPagina(response.previous), 
									"total_pages" : response.total_pages, 
									"total_records" : response.total_records,
									"pag_anterior": store.globalChar.pag_actual,
									"pag_actual": store.globalChar.pag_actual
								   });
		})
		.catch(err => console.error(err));
}

	return (<div className="text-center mt-5">
				{(store.globalChar.pag_anterior !=  store.globalChar.pag_actual) && leerCharacters()}
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