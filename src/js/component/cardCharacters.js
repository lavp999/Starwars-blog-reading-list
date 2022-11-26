import React, { Component } from "react";
import imagen from "../../img/rigo-baby.jpg";

export const CardCharacters = (props) => {
    return (<>
            <div className="col-4 card tarjeta">
                <img key={`img-${props.id}`} src={imagen} className="card-img-top" alt="" />
                <div key={`div-${props.id}`} className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{`Gender: ${props.gender}`}</p>
                    <p className="card-text">{`Hair Color: ${props.hair_color}`}</p>
                    <p className="card-text">{`Eye-Color: ${props.eye_color}`}</p>
                    <a href="#" className="btn btn-primary">Learn more!</a>
                    <a href="#" className="btn btn-primary"><i class="fad fa-heart"></i></a>
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