import React, { useContext } from "react";
import { CardCharacters } from "./cardCharacters.js";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = () => {
    const {store, actions} = useContext(Context);

        return (<>
                <div className="row">
                    <h1>Personajes</h1>
                </div>

                <div className="carrusel">
                    <div className="row">
                            {store.listaChar.map((ele) => {return (<CardCharacters  personaje={ele}/>)})}
                    </div>
                </div>
                <div className="row p-0 justify-content-between">
                    <div className="col-auto mr-auto">
                        {store.globalChar.previous != -1 && 
                            <Link to={`/${store.globalChar.previous}`} className="btn btn-primary">
                                {store.globalChar.previous}
                            </Link>
                        }
                        {store.globalChar.next != -1 &&   
                            <Link to={`/${store.globalChar.next}`} className="btn btn-primary">
                                {store.globalChar.next}
                            </Link>
                        }
                    </div>
                    <div className="col-auto">
                        <p>{store.globalChar.total_records} personajes en {store.globalChar.total_pages} páginas</p>
                    </div>
                </div>
            </>
            )

};