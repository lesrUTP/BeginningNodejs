var server = require("./server");
var router = require("./router");
var requireHandlers = require("./requestHandlers");

var handle = {}
handle["/"] = requireHandlers.iniciar;
handle["/iniciar"] = requireHandlers.iniciar;
handle["/subir"] = requireHandlers.subir;

server.iniciar(router.route,handle);
console.log("Todo ok :)");