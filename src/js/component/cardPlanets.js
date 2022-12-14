import React, { useContext } from "react";
import imagen from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { existePlanetFav }  from "../utilidades.js"

export const CardPlanets = (props) => {
    const planeta = props.planeta;
    const {store, actions} = useContext(Context);

    function existeFav(lista, id, tipo){
        return !(Array.isArray(lista) && lista.find(lf => (lf.id == id && lf.tipo == tipo)));

    }

    return (<div className="col-4 card tarjeta">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${planeta.uid}.jpg`} className="card-img-top imagenesPlat" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{planeta.name} - {planeta.uid}</h5>
                    <div className="row p-0 justify-content-between">
                        <div className="col-auto mr-auto">
                            <Link to={`/singlePlanet/${planeta.uid}`} className="btn btn-primary">
                                Learn more!
                            </Link>
                        </div>
                        <div className="col-auto">
                            {existePlanetFav(store.misFav, planeta.uid, "P") && (<button onClick={()=>actions.addFav({"id":planeta.uid, "name":planeta.name, "tipo": "P"  })}                                 
                                                                                className="btn btn-primary"><i className="fas fa-heart"></i>
                                                                           </button>)
                            }
                        </div>
                    </div>
                </div>
            </div>)

};