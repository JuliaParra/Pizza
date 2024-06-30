// app.js

// Importar la función realizarPedido desde el módulo pedido.js
import { realizarPedido } from './pedido.js';

// Función principal para iniciar la aplicación
function iniciarApp() {
    console.log("¡Bienvenido a nuestra pizzería!");

    // Llamar a la función realizarPedido para comenzar el pedido
    realizarPedido();
}

// Iniciar la aplicación
iniciarApp();