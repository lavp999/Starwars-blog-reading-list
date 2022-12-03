import React, { useState , useEffect } from "react";
import { CardPlanets } from "./cardPlanets";
import { Link } from "react-router-dom";

export const Planets = (props) => {
   
	const [listaPlanets, setListaPlanets] = useState([]);
	const [piePlanets, setPiePlanets] = useState({});
	const [paginaPla, setPaginaPla] = useState("1");

	const servidor = "https://www.swapi.tech/api/";

	const recortaPagina = (cadena) => {
		let pagina = "-1";

		if (cadena != null){
			let p1 = cadena.indexOf("?page=");
			let p2 = cadena.indexOf("&limit");
			if (p1 !== -1 && p2 != -1)
				pagina = cadena.substring(p1+6 , p2);
		}
		setPaginaPla(pagina);
		return pagina;
	}

	useEffect(()=>{
		fetch(`${servidor}planets?page=${props.pagina}&limit=6`)
		.then(res => res.json())
		.then((response) => {
			setPiePlanets({	"next": recortaPagina(response.next), 
					 		"previous": recortaPagina(response.previous), 
							"total_pages" : response.total_pages, 
							"total_records" : response.total_records});
			setListaPlanets(response.results);
		})
		.catch(err => console.error(err));		
	},[]);						

        return (<>
                <div className="row">
                    <h1>Planetas</h1>
                </div>

                <div className="row text-center">
                        {listaPlanets.map((ele) => {return (<CardPlanets planeta={ele}/>)})}
                </div>
                <div className="row p-0 justify-content-between">
                    <div className="col-auto mr-auto">
                        {piePlanets.previous != -1 &&   <Link to={`/${piePlanets.previous}`} className="btn btn-primary">
                                                            {piePlanets.previous}
                                                        </Link>
                        }
                        {piePlanets.next != -1 &&   <Link to={`/${piePlanets.next}`} className="btn btn-primary">
                                                        {piePlanets.next}
                                                    </Link>
                        }
                    </div>
                    <div className="col-auto">
                        <p>{piePlanets.total_records} planetas en {piePlanets.total_pages} páginas</p>
                    </div>
                </div>
            </>
            )

};