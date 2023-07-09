// Antes de ES10
try {
    hello();
} catch (error) {
    console.log(error); // hello is not defined
}

// Con la actualización de ES10
try {
    anotherFn();
} catch {
    console.log('Esto es un error'); // Esto es un error
} // El argumento catch (error) con ES10 es opcional.