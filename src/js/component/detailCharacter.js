import React, { Component } from "react";
import { useParams } from "react-router-dom";


export const DetailCharacter = () => {
    const params = useParams();

    /*
    const [character, setCharacter] = useState();
    useEffect(()=>{
        fetch(`usr/${params.id}`)
        .then((response) => {
            setCharacter(response)
        })
    },[]);
     */

    return  (<>
             <h1>Detalle Personajes: {params.characterId}</h1>
            </>
            )

};
