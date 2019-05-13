var exec = require("child_process").exec;

function iniciar(response){
    console.log("Manipulador de peticiones 'iniciar' ha sido llamado");
    
    exec("ls -lah", function(error, stdout, stderr){
        response.writeHead(200,{"Content-Type": "text/html"});
        response.write(stdout);
        response.end();
    });
}

function subir(response){
    console.log("Manipulador de peticiones 'subir' ha sido llamdo");
    response.writeHead(200,{"Content-Type": "text/html"});
    response.write("Hola subir");
    response.end();
}

exports.iniciar = iniciar;
exports.subir = subir;