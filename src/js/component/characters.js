import React from "react";
import { CardCharacters } from "./cardCharacters.js";
import { Link } from "react-router-dom";

export const Characters = (props) => {
   
        return (<>
                <div className="row">
                    <h1>Personajes</h1>
                </div>

                <div className="row">
                        {props.lista.map((ele) => {return (<CardCharacters  personaje={ele}
                                                                            listaFav={props.listaFav}
                                                                            setListaFav={props.setListaFav}/>)
                        })}
                </div>
                <div className="row p-0 justify-content-between">
                    <div className="col-auto mr-auto">
                        <Link to="/" onMouseDown={()=>{props.setPaginaChar(props.pie.previous)}} className="btn btn-primary">
                            {props.pie.previous}
                        </Link>
                        <Link to="/" onMouseDown={()=>{props.setPaginaChar(props.pie.next)}} className="btn btn-primary">
                            {props.pie.next}
                        </Link>
                    </div>
                    <div className="col-auto">
                        <p>{props.pie.total_records} personajes en {props.pie.total_pages} páginas</p>
                    </div>
                </div>
            </>
            )

};