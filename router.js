function route(handle, pathname, response){
    console.log("A punto de retuear una petición para " + pathname);

    if(typeof handle[pathname] == 'function') {
        handle[pathname](response);
    } else {
        console.log("No hay manipuladores de petición para " + pathname);
        response.writeHead(404,{"Content-Type": "text/html"});
        response.write("404 No encontrado");
        response.end();        

    }
}

exports.route = route;