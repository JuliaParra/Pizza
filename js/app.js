//listado de ingradientes para la masa//
// let harina = "1kg de harina";
// let aceite = "25ml de aceite";
// let sal = "25g de sal"
// let levadura = "14g de levadura"

// function app() {
    
//     hacerPizza()
//     bolerarydarformaalamasa()
//     reposomasa()
//     formarpizza()
//     rellenarlapizza()
//     añadirlosingredientes()
// }

// app();

// function hacerPizza() {
//     console.log("Iniciando proceso de hacer la pizza");
//     hacerMasa()
// }

// function hacerMasa() {
//     mezclarIngredientesMasa()
// }

// function mezclarIngredientesMasa() { 

//     console.log("mesclar ingredientes para la masa: ");
//     console.log("añadir " + harina);
//     console.log("añadir " + aceite);
//     console.log("añadir " + sal);
//     console.log("añadir " + levadura);
// }
// function bolerarydarformaalamasa(){
//     darformaalamasa()

// }

// function darformaalamasa() {
//     console.log("separar la masa en porciones y bolear");
    
// }

// function reposomasa() {
//     console.log("dejar reposar la masa durante 2h ");
    
    
    
// }

// function formarpizza() {
// console.log(" dar forma redonda a las pizzas para añadir los ingredientes seleccionados");

// }


// //lista de ingredientes para la pizza//
// function rellenarlapizza(){
// let tomate;
// let mozzarella;
// let quesogouda;
// let jamonyork;

// }
// rellenarlapizza()

// function añadir los ingredientes() {
//     console.log("añadir " + tomate);
//     console.log("añadir " + mozzarella);
//     console.log("añadir " + quesogouda);
//     console.log("añadir " + jamonyork);
    

let harina = "1kg de harina";
let aceite = "25ml de aceite";
let sal = "25g de sal";
let levadura = "14g de levadura";

// Lista de ingredientes para la pizza
let tomate = "200g de tomate";
let mozzarella = "200g de mozzarella";
let quesogouda = "150g de queso gouda";
let jamonyork = "100g de jamón york";

function app() {
    hacerPizza();
    bolerarydarformaalamasa();
    reposomasa();
    formarpizza();
    añadirlosingredientes();
    hornearyentregar();
}

app();

function hacerPizza() {
    console.log("Iniciando proceso de hacer la pizza");
    hacerMasa();
}

function hacerMasa() {
    mezclarIngredientesMasa();
}

function mezclarIngredientesMasa() { 
    console.log("Mezclar ingredientes para la masa: ");
    console.log("Añadir " + harina);
    console.log("Añadir " + aceite);
    console.log("Añadir " + sal);
    console.log("Añadir " + levadura);
}

function bolerarydarformaalamasa() {
    darformaalamasa();
}

function darformaalamasa() {
    console.log("Separar la masa en porciones y bolear");
}

function reposomasa() {
    console.log("Dejar reposar la masa durante 2h");
}

function formarpizza() {
    console.log("Dar forma redonda a las pizzas para añadir los ingredientes seleccionados");
}

function añadirlosingredientes() {
    console.log("Añadir los ingredientes:");
    console.log("Añadir " + tomate);
    console.log("Añadir " + mozzarella);
    console.log("Añadir " + quesogouda);
    console.log("Añadir " + jamonyork);
}

function hornearyentregar() {
    console.log("Horneando la pizza durante 10 minutos");
    console.log("Pizza lista");
    console.log("Pizza entregada");
}

