import React, { Component } from "react";


export const CardCharacters = () => (
    <>
        <div className="card tarjeta">
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </>

);
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