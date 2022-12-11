import React, { useState, useContext } from "react";
import { CardCharacters } from "./cardCharacters.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getPagina } from "../utilidades";
import { Context } from "../store/appContext";

export const Characters2 = () => {
    const params = useParams();

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
		fetch(`${store.servidor}people?page=${miGlobalChar.pag_actual}&limit=15`)
		.then(res => res.json())
		.then((response) => {
			setMiListaChar(response.results);
			setMiGlobalChar({	"next": getPagina(response.next), 
								"previous": getPagina(response.previous), 
								"total_pages" : response.total_pages, 
								"total_records" : response.total_records,
								"pag_anterior": miGlobalChar.pag_actual,
								"pag_actual": miGlobalChar.pag_actual
							   });
		})
		.catch(err => console.error(err));
    }

    const actualizaPagAct = (newPag) =>{
            let obj = {	"next": miGlobalChar.next, 
                        "previous": miGlobalChar.previous, 
                        "total_pages" : miGlobalChar.total_pages, 
                        "total_records" : miGlobalChar.total_records,
                        "pag_anterior": miGlobalChar.pag_anterior,
                        "pag_actual": newPag
                         };
            setMiGlobalChar(obj);
    }

        return (<>
        		{(miGlobalChar.pag_anterior != miGlobalChar.pag_actual) && leerCharacters()}
                <div key="CharDiv1" className="row">
                    <h1>Personajes con useState </h1> 
                </div>

                <div className="carrusel">
                    <div className="row">
                            {miListaChar.map((ele) => {return (<CardCharacters key={ele.uid} personaje={ele}/>)})}
                    </div>
                </div>
                <div className="row p-0 justify-content-between">
                    <div className="col-auto mr-auto">
                        {miGlobalChar.previous != -1 &&   
                            <Link to="/1" onClick={()=>actualizaPagAct(1)} className="btn btn-primary">
                                <i className="fas fa-angle-double-left"></i>
                            </Link>
                        }
                        {miGlobalChar.previous != -1 &&   
                            <Link to={`/${params.pagina}`} onClick={()=>actualizaPagAct(miGlobalChar.previous)} className="btn btn-primary">
                                <i className="fas fa-angle-left"></i>
                            </Link>
                        }
                        
                        <strong> {miGlobalChar.pag_actual} </strong>

                        {miGlobalChar.next != -1 &&   
                            <Link to={`/${params.pagina}`} onClick={()=>actualizaPagAct(miGlobalChar.next)} className="btn btn-primary">
                                <i className="fas fa-angle-right"></i>
                            </Link>
                        }
                        {miGlobalChar.next != -1 &&   
                            <Link to={`/${miGlobalChar.total_pages}`} onClick={()=>actualizaPagAct(miGlobalChar.total_pages)} className="btn btn-primary">
                                <i className="fas fa-angle-double-right"></i>
                                </Link>                    
                        }
                    </div>
                    <div className="col-auto">
                        <p>{miGlobalChar.total_records} personajes en {miGlobalChar.total_pages} páginas ({miGlobalChar.pag_actual})</p>
                    </div>
                </div>
            </>
            )

};