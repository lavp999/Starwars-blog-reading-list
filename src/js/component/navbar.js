import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = (props) => {
    const {store, actions} = useContext(Context);

	function borraElemento(id, tipo){
		actions.delFav(id, tipo);
	}

	return (<>
				<nav className="row justtify-content-between navbar navbar-light bg-light mb-3">
					<div className="col-auto">
						<Link to="/1">
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png" className="logo"/>
						</Link>
					</div>
					<div className="col-auto mr-auto dropdown">
						<ul className="nav nav-pills">
							<li className="nav-item dropdown active">
								<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
									{`Favoritos  (${store.misFav.length}) `}
								</a>
								<ul className="dropdown-menu favoritos">
									{store.misFav.map((elemento, index)=>{
											return	(<div key={`div-${elemento.uid}`} className="divListaFavoritos">
														<li key={`li-${elemento.uid}`}>
															<Link to={`/singleCharacter/${elemento.uid}`} key={`link-${elemento.uid}`} className={`dropdown-item ${elemento.tipo == "P" ? "colorPlanetas" : "colorCharacters"}`}>
																{elemento.name}
															</Link>
														</li>
														<button id={`bt-${elemento.uid}`} onClick={()=>borraElemento(index, elemento.tipo)}><i className="fas fa-trash-alt" /></button>
													 </div>
													)
									})}
								</ul>
							</li>
						</ul>
					</div>
				</nav>
			</>
	);
};