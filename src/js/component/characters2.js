import React from "react";
import { CardCharacters } from "./cardCharacters.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const Characters2 = (props) => {
    const params = useParams();

    const actualizaPagAct = (newPag) =>{
            let obj = {	"next": props.miGlobalChar.next, 
                        "previous": props.miGlobalChar.previous, 
                        "total_pages" : props.miGlobalChar.total_pages, 
                        "total_records" : props.miGlobalChar.total_records,
                        "pag_anterior": props.miGlobalChar.pag_anterior,
                        "pag_actual": newPag
                         };
            props.setMiGlobalChar(obj);
    }

        return (<>
                <div key="CharDiv1" className="row">
                    <h1>Personajes con props y UseEffects </h1> 
                </div>

                <div className="carrusel">
                    <div className="row">
                            {props.miListaChar.map((ele) => {return (<CardCharacters key={ele.uid} personaje={ele}/>)})}
                    </div>
                </div>
                <div className="row p-0 justify-content-between">
                    <div className="col-auto mr-auto">
                        {props.miGlobalChar.previous != -1 &&   
                            <Link to={`/${params.pagina}`} onClick={()=>actualizaPagAct(props.miGlobalChar.previous)} className="btn btn-primary">
                                {props.miGlobalChar.previous}
                            </Link>
                        }
                        {props.miGlobalChar.next != -1 &&   
                            <Link to={`/${params.pagina}`} onClick={()=>actualizaPagAct(props.miGlobalChar.next)} className="btn btn-primary">
                                {props.miGlobalChar.next}
                            </Link>
                        }
                    </div>
                    <div className="col-auto">
                        <p>{props.miGlobalChar.total_records} personajes en {props.miGlobalChar.total_pages} páginas</p>
                    </div>
                </div>
            </>
            )

};