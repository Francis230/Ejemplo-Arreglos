//Copiar objetos- 
// Se construye un obejto con los atributos seleccionados de la pagina
const cineOriginal = {
    nombre: "Multicines",
    ubicacion: "Quito - CCI",
    peliculas: ["Venom 3","Aventuras Caninas","El Joker 2"]
}

//Luego se crea una copia del objeto principal
const cineReplica = {...cineOriginal}
//Se reacciona el nombre de la ubicacion del otro cine 
cineReplica.ubicacion = "Cuenca - Batan"

//Muestra en la consola el valor modficado y no modificado de los objetos
console.log(cineOriginal.ubicacion);
console.log(cineReplica.ubicacion);


