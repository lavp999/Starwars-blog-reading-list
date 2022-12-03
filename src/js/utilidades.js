

export const getPaginaChar = (cadena) => {
    let pagina = "-1";

    if (cadena != null){
        let p1 = cadena.indexOf("?page=");
        let p2 = cadena.indexOf("&limit");
        if (p1 !== -1 && p2 != -1)
            pagina = cadena.substring(p1+6 , p2);
    }

    return pagina;
}

export const getPagina = (cadena, setPagina) => {
    let pagina = "-1";

    if (cadena != null){
        let p1 = cadena.indexOf("?page=");
        let p2 = cadena.indexOf("&limit");
        if (p1 !== -1 && p2 != -1)
            pagina = cadena.substring(p1+6 , p2);
    }
    setPagina(pagina);
    return pagina;
}