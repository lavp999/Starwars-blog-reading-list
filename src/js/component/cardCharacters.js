import React, { Component } from "react";
import imagen from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";

export const CardCharacters = (props) => {
    const personaje = props.personaje;

    const addFavorit = ()=>{
        props.setListaFav([...props.listaFav, {"id":personaje.id, "name":personaje.name }]);
    }

    function existeFav(lista, id){
        /*
        if (Array.isArray(lista))
            console.log("Que tengo en la lista?" ,  lista.find(lf => lf.id == id), lista);
        else
            console.log("No tengo lista", lista);
        */
        
        return !(Array.isArray(lista) && lista.find(lf => lf.id === id));
    }

    return (<div key={`div-${personaje.id}`} className="col-4 card tarjeta">
                <img src={personaje.image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{personaje.name}</h5>
                    <p className="card-text">{`Gender: ${personaje.gender}`}</p>
                    <p className="card-text">{`Hair Color: ${personaje.hair_color}`}</p>
                    <p className="card-text">{`Eye-Color: ${personaje.eye_color}`}</p>

                    <Link to={`/singleCharacter/${personaje.id}`} key={`link-${personaje.id}`} className="btn btn-primary">
                        Learn more!
					</Link>

                    {existeFav(props.listaFav, personaje.id) && (<button onClick={()=>addFavorit()}                                 
                                                                         className="btn btn-primary"><i className="fad fa-heart"></i>
                                                                 </button>)
                    }
                </div>
            </div>)

};