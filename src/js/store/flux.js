const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			servidor:  "https://www.swapi.tech/api/",
			misFav: [],
			listaChar: [],
			globalChar: {"next": 0, 
						 "previous": 0, 
						 "total_pages" : 0, 
						 "total_records" : 0,
						 "pag_actual": 1,
						 "pag_anterior": 0}
						},
		actions: {
			// ---------------------------------------------------------------
			// Acciones con FAVORITOS
			// ---------------------------------------------------------------
			getFav: () => {
				return misFav;
			},

			addFav: (elem) => {
				let store = getStore()
				setStore({misFav : [...store.misFav, elem]});
			},

			delFav: (id, tipo) => {
				let store = getStore()
				setStore({misFav : store.misFav.filter((ele, i)=> !(i == id && ele.tipo == tipo))});
			},			
			// ---------------------------------------------------------------
			// Acciones con Datos de CHARACTERS
			// ---------------------------------------------------------------
			setListaChar: (lista) => {
				setStore({listaChar : lista});
			},
			setGlobalChar: (obj) => {
				setStore({globalChar : obj});
			},
			// ---------------------------------------------------------------
			// Use getActions to call a function within a fuction
			// ---------------------------------------------------------------
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
