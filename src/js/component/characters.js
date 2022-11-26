import React, { Component } from "react";
import { CardCharacters } from "./cardCharacters.js";

export const Characters = (props) => {
    return (<>
            <div className="row">
                <h1>Personajes</h1>
            </div>
            <div className="row">
                    {props.lista.map((ele) => {return (<CardCharacters  personaje={ele}
                                                                        listaFav={props.listaFav}
                                                                        setListaFav={props.setListaFav}/>)
                                              })
                                            }
            </div>
            </>
            )

};