import React, { Component } from "react";
import { CardCharacters } from "./cardCharacters.js";

export const Characters = () => (
    <>
        <h1>Personajes</h1>
        <CardCharacters />
        <CardCharacters />
        <CardCharacters />
        <CardCharacters />
        <CardCharacters />
    </>

);
/**
 * <div className="row">
            <h1>Personajes</h1>
        </div>
        <div className="row">
                {props.lista.map((ele) => {return (<CardCharacters name={ele.name}
                                                           gender={ele.gender}
                                                           hair-color={ele.hair-color}
                                                           eye-color={ele.eye-color} />)
                       })
                }
        </div>
 */