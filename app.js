//Problem: We need a simple way to look at a user's badge count and JavaScript point from a web browser
//Solution: Use node.js to perform the profile look ups and serve our template via HTTP

//Create a web server
const http = require('http');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((request, response) => {
    home(request, response);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//2. Handle HTTP route GET / and POST  i.e. Home
function home(request, response) {
    //if the url == "/" && GET
        //show search
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.write("header\n");
        response.write("search\n")
        response.end("footer\n");

    //if url == "/" && POST 
        //redirect to /:username
    
}

//3. Handle HTTP route GET /:username i.e. /sheilaanguiano
    //if url =="/.."
        //get json from Treehouse
    //on "end"
        //show profile
    //on "error"
        //show error

//4.Function that handles the reading of iles and merge in value
    //read from file and get a string
        //merge values in to string
