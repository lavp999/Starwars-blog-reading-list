import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
	return (<>
				<div className="justtify-content-cnter">
					<nav className="navbar navbar-light bg-light mb-3">
						<Link to="/">
							<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png" />
						</Link>
						<div className="dropdown">
							<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								{`Favoritos  (${props.lista.length}) `}
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a className="dropdown-item" href="#">Action</a>
								<a className="dropdown-item" href="#">Another action</a>
								<a className="dropdown-item" href="#">Something else here</a>
							</div>
						</div>
					</nav>
				</div>
			</>
	);
};
