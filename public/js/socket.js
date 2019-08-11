const socket = io();
//on escuchar informacion
socket.on("connect", function() {
  console.log("conectado al servidor");
});
socket.on("disconnect", function() {
  console.log("Conexión perdida");
});

//emit enviar informacion
socket.emit("enviarMensaje", {
  usuario: "Fernando",
  mensaje: "Hola servidor"
},function(resp){
    console.log("respuesta server",resp);
});
//escuchar informacion
socket.on('enviarMensaje',function(data){
  console.log(data);
})