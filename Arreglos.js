// 1. FUNDAMENTOS: Lista de películas en Multicines Quito CCI
const peliculas = ["Oppenheimer", "Venom3", "Sustancia", "Joker 2 ", "Robot Salvaje"];
console.log("Películas en cartelera:", peliculas);

// 2. RECORRIDO: Mostrar cada película con un bucle forEach
console.log("\nCartelera actual:");
peliculas.forEach((pelicula, index) => {
    console.log(`${index + 1}. ${pelicula}`);
});

// 3. MÉTODOS: Añadir nuevas películas y eliminar una película
console.log("\nActualización de cartelera:");
peliculas.push("La Monja II");  // Añadir una película al final
console.log("Película añadida: MASCOTA JURASICA 3");

peliculas.pop();  // Eliminar la última película 
console.log("Última película eliminada: MASCOTA JURASICA 3");

peliculas.unshift("HORIZONTE");  // Añadir una película al inicio
console.log("Película añadida al inicio: HORIZONTE");

peliculas.shift();  // Eliminar la primera película 
console.log("Primera película eliminada: HORIZONTE");

// Mostrar la cartelera después de los cambios
console.log("\nCartelera después de la actualización:", peliculas);

// 4. DESESTRUCTURACIÓN: Obtener las primeras dos películas de la cartelera
const [primeraPelicula, segundaPelicula] = peliculas;
console.log(`\nPrimera película: ${primeraPelicula}`);
console.log(`Segunda película: ${segundaPelicula}`);

// 5. REST OPERATOR: Recoger las películas restantes después de la primera
const [peliculaPrincipal, ...restoPeliculas] = peliculas;
console.log("\nPelícula principal:", peliculaPrincipal);
console.log("Otras películas:", restoPeliculas);

// 6. SPREAD OPERATOR: Combinar arreglos con nuevas películas
const nuevasPeliculas = ["Sonrie 2", "Misfit"];
const carteleraActualizada = [...peliculas, ...nuevasPeliculas];  // Combinar ambos arreglos

console.log("\nCartelera final combinada:");
console.log(carteleraActualizada);
