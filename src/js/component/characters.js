import React, { useContext } from "react";
import { CardCharacters } from "./cardCharacters.js";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Characters = () => {
    const params = useParams();
    const { store , actions } = useContext(Context);

    const actualizaPagAct = (newPag) =>{
        actions.setGlobalChar({	"next": store.globalChar.next, 
                                "previous": store.globalChar.previous, 
                                "total_pages" : store.globalChar.total_pages, 
                                "total_records" : store.globalChar.total_records,
                                "pag_anterior": store.globalChar.pag_anterior,
                                "pag_actual": newPag
                              });
    }

        return (<>
                <div key="CharDiv1" className="row">
                    <h1>Personajes</h1>
                </div>

                <div key="CharDiv2" className="carrusel">
                    <div key="CharDiv2.1" className="row">
                            {store.listaChar.map((ele) => {return (<CardCharacters key={ele.uid} personaje={ele}/>)})}
                    </div>
                </div>
                <div key="CharDiv3" className="row p-0 justify-content-between">
                    <div key="CharDiv4" className="col-auto mr-auto">
                        {store.globalChar.previous != -1 &&   
                            <a key="btnChar1" href={`/${params.pagina}`} onClick={()=>actualizaPagAct(store.globalChar.previous)} className="btn btn-primary">
                                {store.globalChar.next}
                            </a>
                        }
                        {store.globalChar.next != -1 &&   
                            <a key="btnChar2" href={`/${params.pagina}`} onClick={()=>actualizaPagAct(store.globalChar.next)} className="btn btn-primary">
                                {store.globalChar.next}
                            </a>
                        }
                    </div>
                    <div key="CharDiv5" className="col-auto">
                        <p>{store.globalChar.total_records} personajes en {store.globalChar.total_pages} páginas</p>
                    </div>
                </div>
            </>
            )

};