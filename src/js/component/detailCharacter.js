import React, { useState , useEffect , useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailCharacter = (props) => {
    const params = useParams();
    const [character, setCharacter] = useState("Vacio");
    const [description, setDescription] = useState("Vacio");
    const {store, actions} = useContext(Context);
    let planeta = 1

    function existeFav(lista, id){ 
          return !(Array.isArray(lista) && lista.find(lf => lf.id == id));
    }
    
    useEffect(()=>{
        fetch(`https://www.swapi.tech/api/people/${params.characterId}`)
            .then(res => res.json())
            .then((response) => {
                setCharacter(response.result.properties);
                setDescription(response.result.description);
                planeta = (character.homeworld ? character.homeworld.slice(-1) : 0);
            })
            .catch(err => console.error(err))
    },[]);

    return  (<>
                <div className="jumbotron">
                    <h1 className="display-4">{character ? description : "Cargando..."} ({params.characterId})</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <div className="container">
                        <div className="row">
                            <div className="col-5">
                                <img src={`https://starwars-visualguide.com/assets/img/characters/${params.characterId}.jpg`} className="card-img-top" alt="" />
                            </div>
                            <div className="col-7">
                                <p className="m-1">Nombre: <strong>{character.name}</strong> </p>
                                <p className="m-1">Nacimiento: <strong>{character.birth_year}</strong> </p>
                                <p className="m-1">Color de Ojos: <strong>{character.eye_color}</strong> </p>
                                <p className="m-1">Color de pelo: <strong>{character.hair_color}</strong> </p>
                                <p className="m-1">Color Piel: <strong>{character.skin_color}</strong> </p>
                                <p className="m-1">Género: <strong>{character.gender}</strong> </p>
                                <p className="m-1">Peso: <strong>{character.height}</strong> </p>
                                <p className="m-1">Mundo Natal: <strong>
                                                                    <Link to={`/singlePlanet/${planeta}`} >{planeta}</Link>
                                                                </strong>
                                </p>
                                <p className="m-1">Especie: <strong>{character.species}</strong> </p>
                                <p className="m-1">Inicio: <strong>{character.starships}</strong> </p>
                                <p className="m-1">¿Mass?: <strong>{character.mass}</strong> </p>
                                <p className="my-4">
                                    {existeFav(store.misFav, params.characterId) && (<button onClick={()=>actions.addFav({"id":params.characterId, "name":character.name })}                                 
                                                                                            className="btn btn-primary"><i className="fas fa-heart"></i>
                                                                                     </button>)
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            )
};