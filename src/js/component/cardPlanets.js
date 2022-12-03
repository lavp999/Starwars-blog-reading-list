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

    return (<div key={`divP-${planeta.uid}`} className="col-4 card tarjeta">
                {/* <img src={`../../src/img/fotos/${planeta.uid}.jpg`} className="card-img-top" alt="" /> */}
                <img key={`img-${planeta.uid}`} src="https://m.media-amazon.com/images/I/81nXcPXv69L.jpg" className="card-img-top" alt="" /> 
                <div key={`div2-${planeta.uid}`} className="card-body">
                    <h5 className="card-title">{planeta.name} - {planeta.uid}</h5>
                    <div key={`div3-${planeta.uid}`} className="row p-0 justify-content-between">
                        <div key={`div31-${planeta.uid}`} className="col-auto mr-auto">
                            <Link key={`lnk-${planeta.uid}`} to={`/singlePlanet/${planeta.uid}`} className="btn btn-primary">
                                Learn more!
                            </Link>
                        </div>
                        <div key={`div4-${planeta.uid}`} className="col-auto">
                            {existeFav(store.misFav, planeta.uid, "P") && (<button key={`btn-${planeta.uid}`} onClick={()=>actions.addFav({"id":planeta.uid, "name":planeta.name, "tipo": "P"  })}                                 
                                                                                className="btn btn-primary"><i className="fas fa-heart"></i>
                                                                           </button>)
                            }
                        </div>
                    </div>
                </div>
            </div>)

};