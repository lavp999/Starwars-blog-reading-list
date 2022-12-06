import React, { useContext } from "react";
import { CardCharacters } from "./cardCharacters.js";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Characters = () => {
    const { store } = useContext(Context);

        return (<>
                <div key="CharDiv1" className="row">
                    <h1>Personajes</h1>
                </div>

                <div key="CharDiv2" className="carrusel">
                    <div key="CharDiv2.1" className="row">
                            {store.listaChar.map((ele) => {return (<CardCharacters  personaje={ele}/>)})}
                    </div>
                </div>
                <div key="CharDiv3" className="row p-0 justify-content-between">
                    <div key="CharDiv4" className="col-auto mr-auto">
                        {store.globalChar.previous != -1 && 
                            <Link key="KeyChar1" to={`/C${store.globalChar.previous}`} className="btn btn-primary">
                                {store.globalChar.previous}
                            </Link>
                        }
                        {store.globalChar.next != -1 &&   
                            // <Link key="KeyChar2" to={`/C${store.globalChar.next}`} onClick={actualizaPagChar(store.globalChar.next)} className="btn btn-primary">
                            <Link key="KeyChar2" to={`/C${store.globalChar.next}`} className="btn btn-primary">
                                {store.globalChar.next}
                            </Link>
                        }
                    </div>
                    <div key="CharDiv5" className="col-auto">
                        <p>{store.globalChar.total_records} personajes en {store.globalChar.total_pages} páginas</p>
                    </div>
                </div>
            </>
            )

};