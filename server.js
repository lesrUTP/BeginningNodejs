var http = require("http");
var url = require("url");

function iniciar(route, handle){
    function onRequest(request,response){
        var dataPosteada = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Petición para " + pathname + " recibida");
        request.setEncodigng("utf8");
        request.setListener("data", function(trozoPosteado){
            dataPosteada += trozoPostedado;
            console.log("Recibido trozo POST '" + trozoPosteado + "'.");
        });
    }

    http.createServer(onRequest).listen(8888);
    console.log("Servidor Iniciado.");
}
exports.iniciar = iniciar;