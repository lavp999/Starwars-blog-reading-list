import React, { useState , useEffect , Component } from "react";
import { useParams } from "react-router-dom";


export const DetailCharacter = () => {
    const params = useParams();

    const [character, setCharacter] = useState("Vacio");

    useEffect(()=>{
        fetch(`https://www.swapi.tech/api/people/${params.characterId}`)
            .then(res => res.json())
            .then((response) => {
                setCharacter(response.result);
            })
            .catch(err => console.error(err))
    },[]);

    return  (<>
                <div className="jumbotron">
                    {console.log("-----",character.properties, '---')}
                    <h1 className="display-4">{character ? character.description : "Cargando..."} ({params.characterId})</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>Nombre: {character.name} </p>
                    <p>Nacimiento: {character.birth_year} </p>
                    <p>Color de Ojos: {character.eye_color} </p>
                    <p>Color de pelo: {character.hair_color} </p>
                    <p>Color Piel: {character.skin_color} </p>
                    <p>Género: {character.gender} </p>
                    <p>Peso: {character.height} </p>
                    <p>Mundo Natal: {character.homeworld} </p>
                    <p>Especie: {character.species} </p>
                    <p>Inicio: {character.starships} </p>
                    <p>URL: {character.url} </p>
                    <p>Vehículos: {character.vehicles} </p>
                    <p>Películas: {character.films} </p>
                    <p>¿Mass?: {character.mass} </p>
                    <p>Creado: {character.created} </p>
                    <p>Editado: {character.edited} </p>

                    {/*<p className="lead">
                        <a clclassNameass="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>*/}
                </div>
            </>
            )
};