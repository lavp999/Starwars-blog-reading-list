import React, { Component } from "react";
import imagen from "../../img/rigo-baby.jpg"; // https://bloygo.yoigo.com/guia-personajes-star-wars-luke-skywalker-rey/
import { Link } from "react-router-dom";

export const CardCharacters = (props) => {
    const personaje = props.personaje;

    const addFavorit = ()=>{
        props.setListaFav([...props.listaFav, {"id":personaje.uid, "name":personaje.name }]);
    }

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
                <img src={imagen} className="card-img-top" alt="" /> 
                <div className="card-body">
                    <h5 className="card-title">{personaje.name} - {personaje.uid}</h5>
                    {/*
                    <p className="card-text">{`Gender: ${personaje.gender}`}</p>
                    <p className="card-text">{`Hair Color: ${personaje.hair_color}`}</p>
                    <p className="card-text">{`Eye-Color: ${personaje.eye_color}`}</p>
                    */}
                    <div className="row p-0 justify-content-between">
                        <div className="col-auto mr-auto">
                            <Link to={`/singleCharacter/${personaje.uid}`} className="btn btn-primary">
                                Learn more!
                            </Link>
                        </div>
                        <div className="col-auto">
                        {existeFav(props.listaFav, personaje.uid) && (<button onClick={()=>addFavorit()}                                 
                                                                            className="btn btn-primary"><i className="fad fa-heart"></i>
                                                                    </button>)
                        }
                        </div>
                    </div>
                </div>
            </div>)

};