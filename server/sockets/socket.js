
const {io} = require('../server')
io.on("connection", client => {
    console.log("USER conected");
    client.emit("enviarMensaje", {
      usuario: "Admin",
      mensaje: "Bienvenido"
    });
    client.on("disconnect", () => {
      console.log("USER disconnected");
    });
    //Escuchar al cliente
    client.on("enviarMensaje", (data, callback) => {
       console.log(data);

       client.broadcast.emit('enviarMensaje',data)
    //   if (data.usuario) {
    //     callback({
    //       resp: " Todo correcto"
    //     });
    //   } else {
    //     callback({
    //       resp: " Todo mal"
    //     });
    //   }
    });
  });