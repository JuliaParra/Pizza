// preparacion.js

// Función para preparar la pizza
function prepararPizza(nombrePizza) {
    console.log('Cogiendo la masa');
    console.log('Estirando la masa');
    console.log('Añadiendo tomate');
    console.log('Añadiendo mozzarella');
    console.log(`Añadiendo ${nombrePizza}`);
    console.log('Horneando la pizza');
    console.log('¡Pizza lista para ser entregada!');
}

// Exportar la función prepararPizza para que pueda ser importada en otros módulos
export { prepararPizza };
