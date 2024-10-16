const configuracionCine = {
    nombre: "Multicines - Quito ",
    ubicacion: "Centro Comercial Iñaquito",
    numeroDeSalas: 10,
    abierto: true
  };
  
  // Congelar el objeto para evitar cambios
  Object.freeze(configuracionCine);
  
  // Intentar modificar el objeto (esto no tendrá efecto porque está congelado)
  configuracionCine.nombre = "Multicines - Guayaquil ";
  configuracionCine.abierto = false;
  
  console.log(configuracionCine.nombre);  // Output: "Multicines Central"
  console.log(configuracionCine.abierto); // Output: true
  