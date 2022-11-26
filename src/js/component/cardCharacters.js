import React, { Component } from "react";
import imagen from "../../img/rigo-baby.jpg";

export const CardCharacters = (props) => {
    const personaje = props.personaje;

    const addFavorit = ()=>{
        console.log("Mi lista favoritos", props.listaFav, personaje.id, personaje.name );
        props.setListaFav([...props.listaFav, {"id":personaje.id, "name":personaje.name }]);
    }

    return (<>
            <div key={`div1-${personaje.id}`} className="col-4 card tarjeta">
                <img key={`img-${personaje.id}`} src={imagen} className="card-img-top" alt="" />
                <div key={`div-${personaje.id}`} className="card-body">
                    <h5 className="card-title">{personaje.name}</h5>
                    <p className="card-text">{`Gender: ${personaje.gender}`}</p>
                    <p className="card-text">{`Hair Color: ${personaje.hair_color}`}</p>
                    <p className="card-text">{`Eye-Color: ${personaje.eye_color}`}</p>
                    <a href="#" className="btn btn-primary">Learn more!</a>
                    <button onClick={()=>addFavorit()} className="btn btn-primary"><i className="fad fa-heart"></i></button>
                </div>
            </div>
            </>)

};
/**
 * <div className="col-4 card tarjeta">
            <img src={imagen} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{`Gender: ${props.gender}`}</p>
                <p className="card-text">{`Hair Color: ${props.hair-color}`}</p>
                <p className="card-text">{`Eye-Color: ${props.eye-color}`}</p>
                <a href="#" className="btn btn-primary">Learn more!</a>
                <a href="#" className="btn btn-primary"><i class="fad fa-heart"></i></a>
            </div>
        </div>
 */