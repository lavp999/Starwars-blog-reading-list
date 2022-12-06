const servidor = "https://www.swapi.tech/api/";

export const getPagina = (cadena, setPagina) => {
    let pagina = "-1";

    if (cadena != null){
        let p1 = cadena.indexOf("?page=");
        let p2 = cadena.indexOf("&limit");
        if (p1 !== -1 && p2 != -1)
            pagina = cadena.substring(p1+6 , p2);
    }

    return pagina;
}


export const leerPlanets = (pagina, setListaPlanets, setPiePlanets) =>{
    fetch(`${servidor}planets?page=${pagina}&limit=6`)
    .then(res => res.json())
    .then((response) => {
        setPiePlanets({	"next": getPagina(response.next), 
                         "previous": getPagina(response.previous), 
                        "total_pages" : response.total_pages, 
                        "total_records" : response.total_records,
                        "pag_actual": pagina});
        setListaPlanets(response.results);
    })
    .catch(err => console.error(err));		
}

