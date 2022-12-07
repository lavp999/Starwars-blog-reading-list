import React, { useState , useEffect } from "react";
import { CardPlanets } from "./cardPlanets";
import { Link } from "react-router-dom";
import { leerPlanets} from "../utilidades";
import { useParams } from "react-router-dom";

export const Planets = (props) => {
	const params = useParams();

	// Planetas lo voy a hacer con UseState, ya que Characters lo he hecho con UseContext
	const [listaPlanets, setListaPlanets] = useState([]);
	const [piePlanets, setPiePlanets] = useState({});
	
		{/* Cargamos de nuevo la lista si la página que nos viene en parámetro es diferente a la que tenemos cargada 
            todos estoas condiciones es porque quiero tratar de manera diferentes personajes y planetas, si no sería mas sencillo:
            {params.pagina != piePlanets.pag_actual) && leerPlanets(params.pagina, setListaPlanets , setPiePlanets)}
        */}
		{
            if (!params.pagina || !piePlanets.pag_actual)
                params.pagina = "1";

            if (params.pagina.substr(0,1) != "C")
                (params.pagina != piePlanets.pag_actual) && leerPlanets(params.pagina, setListaPlanets , setPiePlanets)        
        }

        return (<>
                <div className="row">
                    <h1>Planetas</h1>
                </div>

                <div className="row text-center">
                        {listaPlanets.map((ele) => {return (<CardPlanets key={ele.uid} planeta={ele}/>)})}
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