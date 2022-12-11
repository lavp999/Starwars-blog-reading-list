import React, { useState, useContext } from "react";
import "../../styles/home.css";
import { Characters2 } from "../component/characters2.js";
import { getPagina } from "../utilidades";
import { Context } from "../store/appContext";

export const HomeCharacters2 = () => {
	const {store } = useContext(Context);
	const [miListaChar, setMiListaChar] = useState([]);
	const [miGlobalChar, setMiGlobalChar] = useState({	"next": 0, 
														"previous": 0, 
														"total_pages" : 0, 
														"total_records" : 0,
														"pag_actual": 1,
														"pag_anterior": 0
													});

const leerCharacters = () =>{
		fetch(`${store.servidor}people?page=${miGlobalChar.pag_actual}&limit=10`)
		.then(res => res.json())
		.then((response) => {
			setMiListaChar(response.results);
			setMiGlobalChar({	"next": getPagina(response.next), 
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
				<div>
					<hr className="my-4" />
					<hr className="my-4" />
					<hr className="my-4" />
				</div>
				{(miGlobalChar.pag_anterior !=  miGlobalChar.pag_actual) && leerCharacters()}
				<div>
					<Characters2 miListaChar={miListaChar}  setMiListaChar={setMiListaChar} miGlobalChar={miGlobalChar}  setMiGlobalChar = {setMiGlobalChar}/>
				</div>
			</div>
			)
};