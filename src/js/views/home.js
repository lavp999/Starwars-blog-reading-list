import React from "react";
import "../../styles/home.css";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";

export const Home = () => (
	<div className="text-center mt-5">
		<div>
			<Characters />
		</div>
		<div>
			<Planets />
		</div>
	</div>
);