import React, { useContext }from "react";
import imagen from "../../img/rigo-baby.jpg"; // https://bloygo.yoigo.com/guia-personajes-star-wars-luke-skywalker-rey/
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const CardCharacters = (props) => {
    const personaje = props.personaje;
    const {store, actions} = useContext(Context);

    function existeFav(lista, id){
        /*
        if (Array.isArray(lista))
            console.log("Que tengo en la lista?" , lista.id, lista.find(lf => lf.id == id), lista);
        else
            console.log("No tengo lista", lista);
        */
        
        return !(Array.isArray(lista) && lista.find(lf => lf.id == id));
    }

    return (<div key={`div-${personaje.uid}`} className="col-4 card tarjeta">
                {/* <img src={`../../src/img/fotos/${personaje.uid}.jpg`} className="card-img-top" alt="" /> */}
                <img key={`img-${personaje.uid}`} src={imagen} className="card-img-top" alt="" /> 
                <div key={`div2-${personaje.uid}`} className="card-body">
                    <h5 className="card-title">{personaje.name} - {personaje.uid}</h5>
                    <div key={`div3-${personaje.uid}`} className="row p-0 justify-content-between">
                        <div key={`div31-${personaje.uid}`} className="col-auto mr-auto">
                            <Link key={`lnk-${personaje.uid}`} to={`/singleCharacter/${personaje.uid}`} className="btn btn-primary">
                                Learn more!
                            </Link>
                        </div>
                        <div key={`div4-${personaje.uid}`} className="col-auto">
                            {existeFav(store.misFav, personaje.uid) && (<button key={`btn-${personaje.uid}`} onClick={()=>actions.addFav({"id":personaje.uid, "name":personaje.name })}                                 
                                                                                className="btn btn-primary"><i className="fad fa-heart"></i>
                                                                        </button>)
                            }
                        </div>
                    </div>
                </div>
            </div>)

};