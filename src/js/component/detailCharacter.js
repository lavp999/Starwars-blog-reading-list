import React, { useState , useEffect , useContext} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailCharacter = (props) => {
    const params = useParams();
    const [character, setCharacter] = useState("Vacio");
    const [description, setDescription] = useState("Vacio");
    const {store, actions} = useContext(Context);

    function existeFav(lista, id){ 
          return !(Array.isArray(lista) && lista.find(lf => lf.id == id));
    }
    
    useEffect(()=>{
        fetch(`https://www.swapi.tech/api/people/${params.characterId}`)
            .then(res => res.json())
            .then((response) => {
                setCharacter(response.result.properties);
                setDescription(response.result.description);
            })
            .catch(err => console.error(err))
    },[]);

    return  (<>
                <div className="jumbotron">
                    <h1 className="display-4">{character ? description : "Cargando..."} ({params.characterId})</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>Nombre: <strong>{character.name}</strong> </p>
                    <p>Nacimiento: <strong>{character.birth_year}</strong> </p>
                    <p>Color de Ojos: <strong>{character.eye_color}</strong> </p>
                    <p>Color de pelo: <strong>{character.hair_color}</strong> </p>
                    <p>Color Piel: <strong>{character.skin_color}</strong> </p>
                    <p>Género: <strong>{character.gender}</strong> </p>
                    <p>Peso: <strong>{character.height}</strong> </p>
                    <p>Mundo Natal: <strong>{character.homeworld}</strong> </p>
                    <p>Especie: <strong>{character.species}</strong> </p>
                    <p>Inicio: <strong>{character.starships}</strong> </p>
                    <p>Vehículos: <strong>{character.vehicles}</strong> </p>
                    <p>Películas: <strong>{character.films}</strong> </p>
                    <p>¿Mass?: <strong>{character.mass}</strong> </p>
                    <p>Creado: <strong>{character.created}</strong> </p>
                    <p>Editado: <strong>{character.edited}</strong> </p>

                    {/*<p className="lead">
                        <a clclassNameass="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>*/}

                    <hr className="my-4" />
                    {existeFav(store.misFav, params.characterId) && (<button onClick={()=>actions.addFav({"id":params.characterId, "name":character.name })}                                 
                                                                             className="btn btn-primary"><i className="fas fa-heart"></i>
                                                                     </button>)
                    }
                </div>
            </>
            )
};