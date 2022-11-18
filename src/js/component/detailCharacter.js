import React, { Component } from "react";
import { useParams } from "react-router-dom";


export const DetailCharacter = () => {
    const params = useParams();

    return  (<>
             <h1>Detalle Personajes: {params.characterId}</h1>

            </>
            )

};
