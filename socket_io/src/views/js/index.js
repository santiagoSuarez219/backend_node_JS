// Logica del cliente
function checkSocketStatus() {
    console.log("Estado del socket: ", socket.connected);
}

const socket = io();

// Conexion del lado del cliente, se puede ver en consola del navegador 
socket.on("connect", () => {
    console.log("El socket se ha conectado: ", socket.id);
    checkSocketStatus();
});

socket.on("connect_error", () => {
    console.log("No pude conectarme");
});

// Desconexion del lado del cliente
socket.on("disconnect", () => {
    console.log("El socket se ha desconectado: ", socket.id);
    checkSocketStatus();
});

// Evento de reconexion del lado del cliente
socket.io.on("reconnect_attempt", () => {
    console.log("Estoy intentando reconectarme");
});

// Evento de reconexion exitosa del lado del cliente
socket.io.on("reconnect", () => {
    console.log("Me he reconectado exitosamente");
    checkSocketStatus();
});

