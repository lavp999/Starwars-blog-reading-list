import React, { useContext } from "react";
import imagen from "../../img/rigo-baby.jpg"; // https://bloygo.yoigo.com/guia-planetas-star-wars-luke-skywalker-rey/
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardPlanets = (props) => {
    const planeta = props.planeta;
    const {store, actions} = useContext(Context);

    function existeFav(lista, id, tipo){
        return !(Array.isArray(lista) && lista.find(lf => (lf.id == id && lf.tipo == tipo)));

    }

    return (<div className="col-4 card tarjeta">
                {/* <img src={`../../src/img/fotos/${planeta.uid}.jpg`} className="card-img-top" alt="" /> */}
                {/* <img src="https://m.media-amazon.com/images/I/81nXcPXv69L.jpg" className="card-img-top" alt="" />  */}
                <img src={`https://starwars-visualguide.com/assets/img/planets/${planeta.uid}.jpg`} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{planeta.name} - {planeta.uid}</h5>
                    <div className="row p-0 justify-content-between">
                        <div className="col-auto mr-auto">
                            <Link to={`/singlePlanet/${planeta.uid}`} className="btn btn-primary">
                                Learn more!
                            </Link>
                        </div>
                        <div className="col-auto">
                            {existeFav(store.misFav, planeta.uid, "P") && (<button onClick={()=>actions.addFav({"id":planeta.uid, "name":planeta.name, "tipo": "P"  })}                                 
                                                                                className="btn btn-primary"><i className="fas fa-heart"></i>
                                                                           </button>)
                            }
                        </div>
                    </div>
                </div>
            </div>)

};