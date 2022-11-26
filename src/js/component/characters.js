import React, { Component } from "react";
import { CardCharacters } from "./cardCharacters.js";

export const Characters = (props) => {
    console.log(props.lista);

    return (<>
            <div className="row">
                <h1>Personajes</h1>
            </div>
            <div className="row">
                    {props.lista.map((ele) => {return (<CardCharacters  name={ele.name}
                                                                        gender={ele.gender}
                                                                        hair_color={ele.hair_color}
                                                                        eye_color={ele.eye_color}
                                                                        id={ele.id} />)
                                              })
                                            }
            </div>
            </>
            )

};
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