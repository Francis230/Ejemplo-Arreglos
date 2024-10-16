const comidaCine = {
    nombre: "CANGUIL GRANDE",
    sabor: "Dulce",
    precio: 3.90,
    
    mostrarInfo() {
      console.log(`Producto ${this.nombre} con sabor ${this.sabor} a un precio de  ${this.precio}.`);
    }
  };
  
  comidaCine.mostrarInfo();  