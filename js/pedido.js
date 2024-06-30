// pedido.js

// Importar la función prepararPizza desde el módulo preparacion.js
import { prepararPizza } from './prepararpizza.js';

// Importar prompt-sync para interactuar con el usuario
import promptSync from 'prompt-sync';

const prompt = promptSync();

// Función para realizar el pedido de pizza
function realizarPedido() {
    // Pedir al cliente que escriba el nombre de la pizza que desea
    const nombrePizza = prompt('Escriba el nombre de la pizza que desea: ');

    console.log(`¡Pedido confirmado! Usted ha solicitado una pizza ${nombrePizza}.`);

    // Simular la preparación de la pizza
    prepararPizza(nombrePizza);
}

// Exportar la función realizarPedido para que pueda ser importada en otros módulos
export { realizarPedido };
