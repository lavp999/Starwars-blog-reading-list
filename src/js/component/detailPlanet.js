import React, { useState , useEffect , useContext} from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { existePlanetFav }  from "../utilidades.js"

export const DetailPlanet = (props) => {
    const params = useParams();
    const [planet, setPlanet] = useState("Vacio");
    const [description, setDescription] = useState("Vacio");
    const {store, actions} = useContext(Context);
    
    useEffect(()=>{
        fetch(`https://www.swapi.tech/api/planets/${params.planetId}`) 
            .then(res => res.json())
            .then((response) => {
                setPlanet(response.result.properties);
                setDescription(response.result.description);
            })
            .catch(err => console.error(err))
    },[]);

    return  (<>
                <div className="jumbotron">
                    <h1 className="display-4">{planet ? description : "Cargando..."} ({params.planetId})</h1>
                    <p className="lead">Aquí encontrarás toda la información del planeta elegido.</p>
                    <hr className="my-4" />
                    <div className="container">

                    <div className="row">
                            <div className="col-5">
                                <img src={`https://starwars-visualguide.com/assets/img/planets/${params.planetId}.jpg`} className="card-img-top" alt="" />
                            </div>
                            <div className="col-7">
                                <p className="m-1">Nombre: <strong>{planet.name}</strong> </p>
                                <p className="m-1">climate: <strong>{planet.climate}</strong> </p>
                                <p className="m-1">terrain: <strong>{planet.terrain}</strong> </p>
                                <p className="m-1">diameter: <strong>{planet.diameter}</strong> </p>
                                <p className="m-1">Inigravitycio: <strong>{planet.gravity}</strong> </p>
                                <p className="m-1">orbital_period: <strong>{planet.orbital_period}</strong> </p>
                                <p className="m-1">population: <strong>{planet.population}</strong> </p>
                                <p className="m-1">rotation_period: <strong>{planet.rotation_period}</strong> </p>
                                <p className="m-1">surface_water: <strong>{planet.surface_water}</strong> </p>
                                <p className="my-4">
                                    {existePlanetFav(store.misFav, params.planetId, "P") && (<button onClick={()=>actions.addFav({"id":params.planetId, "name":planet.name, "tipo": "P"   })}                                 
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