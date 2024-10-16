//Metodos en Obejtos - Caractersiticas de una pelicula

//Construccion del objeto
const peliculaCine = {
    nombre: "VENOM 3",
    duracion: "2h00 hrs",
    restriccion: "+12",
    estado: "Pre-venta"
}

//Con el metodo keys atraves de Object se vizualiza solo las claves
console.log(Object.keys(peliculaCine));
//Mientras que con el metodo values, se vizualiza los valores
console.log(Object.values(peliculaCine));

