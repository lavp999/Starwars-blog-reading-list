import React, { useContext }from "react";
import imagen from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardCharacters = (props) => {
    const personaje = props.personaje;
    const {store, actions} = useContext(Context);

    function noExisteFav(lista, id, tipo){
        return !(Array.isArray(lista) && lista.find(lf => (lf.id == id && lf.tipo == tipo)));
    }

    return (<div key={`divC-${personaje.uid}`} className="col-4 card tarjeta">
                {/* <img src={`/../../img/fotos/${personaje.uid}.jpg`} className="card-img-top" alt="" /> */}
                {/* <img key={`img-${personaje.uid}`} src={imagen} className="card-img-top" alt="" />  */}
                <img key={`imgC-${personaje.uid}`} src="https://www.commonsensemedia.org/sites/default/files/styles/ratio_16_9_large/public/blog/starwars-darth-hand-blog-569x329.jpg" className="card-img-top" alt="" /> 
                <div key={`divC2-${personaje.uid}`} className="card-body">
                    <h5 className="card-title">{personaje.name} - {personaje.uid}</h5>
                    <div key={`divC3-${personaje.uid}`} className="row p-0 justify-content-between">
                        <div key={`divC31-${personaje.uid}`} className="col-auto mr-auto">
                            <Link key={`lnkC-${personaje.uid}`} to={`/singleCharacter/${personaje.uid}`} className="btn btn-primary">
                                Learn more!
                            </Link>
                        </div>
                        <div key={`divC4-${personaje.uid}`} className="col-auto">
                            {noExisteFav(store.misFav, personaje.uid, "C") && 
                                            (<button key={`btnC-${personaje.uid}`} onClick={()=>actions.addFav({"id":personaje.uid, "name":personaje.name, "tipo": "C" })}                                 
                                                className="btn btn-primary"><i className="fas fa-heart"></i>
                                            </button>)
                            }
                        </div>
                    </div>
                </div>
            </div>)
};