import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {

//	<button id={`bt-${elemento.id}`} onClick={()=>props.setLista(props.lista.filter((e, i) => i != index))}>h</button>

	function borraElemento(id){
		props.setListaFav(props.listaFav.filter((ele, i)=> i != id));
	}

	return (<>
				<nav className="row justtify-content-between navbar navbar-light bg-light mb-3">
					<div className="col-4">
						<Link to="/">
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png" />
						</Link>
					</div>
					<div className="col-4 dropdown">
						<ul className="nav nav-pills">
							<li className="nav-item dropdown active">
								<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">
									{`Favoritos  (${props.listaFav.length}) `}
								</a>
								<ul className="dropdown-menu favoritos">
									{props.listaFav.map((elemento, index)=>{
										return(<div key={`div-${elemento.id}`}>
												  <li><a className="dropdown-item" id={`li-${elemento.id}`} href={elemento.id}>{elemento.name}</a></li>
												  <button id={`bt-${elemento.id}`} onClick={()=>borraElemento(index)}><i className="fas fa-trash-alt" /></button>
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