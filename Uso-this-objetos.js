// Uso del "this" en objetos - Seleccion de Bebida
//Construccion del objeto 
const bebidaCine = {
    nombre: "Bebida Grande",
    tamaño: "44oz",
    sabor: "fanta",
    precio: 3.90,
    cantidad: 1,
    // Muestra la infromacion de la compra de la Bebida.
    mostrarInformacion: function() {
        return `La bebida ${this.nombre} tiene un tamaño de ${this.tamaño} con un sabor de ${this.sabor} 
        a un precio de ${this.precio} y solo la cantida ${this.cantidad}`;
    }
    
};
console.log(bebidaCine.mostrarInformacion); 
// Llama a la funcion para mostrar la informacionde la compra.


