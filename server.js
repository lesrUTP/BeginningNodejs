var http = require("http");

function iniciar(){
    function onRequest(request,response){
        console.log("Petición Recibida");
        response.writeHead(200,{"Content-Type": "text/html"});
        response.write("<body><center>Hello World</center></body>");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Servidor Iniciado.");
}
exports.iniciar = iniciar;