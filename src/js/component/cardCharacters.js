import React, { useContext }from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardCharacters = (props) => {
    const personaje = props.personaje;
    const {store, actions} = useContext(Context);

    function noExisteFav(lista, id, tipo){
        return !(Array.isArray(lista) && lista.find(lf => (lf.id == id && lf.tipo == tipo)));
    }

    return (<div className="col-4 card tarjeta">
                <img src={`https://starwars-visualguide.com/assets/img/characters/${personaje.uid}.jpg`} className="card-img-top imagenesChar" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{personaje.name} - {personaje.uid}</h5>
                    <div className="row p-0 justify-content-between">
                        <div className="col-auto mr-auto">
                            <Link to={`/singleCharacter/${personaje.uid}`} className="btn btn-primary">
                                Learn more!
                            </Link>
                        </div>
                        <div className="col-auto">
                            {noExisteFav(store.misFav, personaje.uid, "C") && 
                                            (<button onClick={()=>actions.addFav({"id":personaje.uid, "name":personaje.name, "tipo": "C" })}                                 
                                                className="btn btn-primary"><i className="fas fa-heart"></i>
                                            </button>)
                            }
                        </div>
                    </div>
                </div>
            </div>)
};