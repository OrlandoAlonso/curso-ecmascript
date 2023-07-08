// Normal Function
function square(num) {
    return num * num;
} // Esta es la forma normal de declarar una función.

//Arrow Function
const square = (num) => {
    return num * num;
} // Esta sirve para las expresiones de funciones entre otras, pero como se puede observar es más legible que el function.

// Return implícito
const square = num => num * num; // Esta forma sirve solamente si la función contará con una sola línea de código por lo que si la función llevará mas de una línea es recomendable usar una de las 2 formas anteriores.