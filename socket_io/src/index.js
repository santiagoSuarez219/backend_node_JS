const express = require("express");
const path = require("path");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.static(path.join(__dirname, "views"))); //Achivos estaticos

app.get("/", (req, res) => {
   res.sendFile(__dirname + "/views/index.html");
});

io.on("connection", socket => {
    // console.log("Clientes conectados: ",io.engine.clientsCount); //Cantidad de clientes conectados
    // console.log("ID del socket conectado: ", socket.id); //ID del socket conectado

    // // Comentar las anteriores lineas de codigo y ensayar abriendo varias pestañas en el navegador
    // socket.on("disconnect", () => {
    //     console.log("El socket ", + socket.id + " se desconecto");
    // });

    socket.conn.once("upgrade", () => {
        console.log("Hemos pasado de HTTP LP a ", socket.conn.transport.name);
    });
});

httpServer.listen(3000);
