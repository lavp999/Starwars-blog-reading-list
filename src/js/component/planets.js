import React, { useState } from "react";
import { CardPlanets } from "./cardPlanets";
import { Link } from "react-router-dom";
import { leerPlanets} from "../utilidades";
import { useParams } from "react-router-dom";

export const Planets = (props) => {
	const params = useParams();

	// Planetas lo voy a hacer con UseState, ya que Characters lo he hecho con UseContext
	const [listaPlanets, setListaPlanets] = useState([]);
	const [piePlanets, setPiePlanets] = useState({});
	
		{
            if (!params.pagina || !piePlanets.pag_actual)
                params.pagina = "1";

            if (params.pagina != piePlanets.pag_actual)
                leerPlanets(params.pagina, setListaPlanets , setPiePlanets)        
        }

        return (<>
                <div className="row">
                    <h1>Planetas con Parámetros</h1>
                </div>

                <div className="row justify-content-center">
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