//Handle HTTP route GET / and POST  i.e. Home
function home(request, response) {
    //if the url == "/" && GET
    if(request.url === "/"){
        //show search
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.write("header\n");
        response.write("search\n")
        response.end("footer\n");
    }

    //if url == "/" && POST 
        //redirect to /:username
}

//Handle HTTP route GET /:username i.e. /sheilaanguiano
function user(request, response) {
    //if url =="/.."
    let username = request.url.replace("/", "");
    if(username.length > 0) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.write("header\n");
        response.write(username + "\n");
        response.end("footer\n");
    }
        //get json from Treehouse
    //on "end"
        //show profile
    //on "error"
        //show error
}

module.exports.home = home;
module.exports.user = user;