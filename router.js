const Profile = require("./profile.js");
const renderer = require("./renderer.js");
const queryString = require("querystring");

const commonHeaders = {'Content-Type': 'text/html'};

//-----------------------------------
//  HOME ROUTE
//-----------------------------------
//Handle HTTP route GET / and POST  i.e. Home
function home(request, response) {
    //if the url == "/" && GET
    if(request.url === "/"){
        if(request.method.toLowerCase() === "get"){
        //show search
        response.writeHead(200, commonHeaders);
        renderer.view("header", {}, response);
        renderer.view("search", {}, response);
        renderer.view("footer", {}, response);
        response.end();
        } else {
            //if url == "/" && POST
            //get the post data from body
            request.on("data", function(postBody){
               //extract the username
                let query = queryString.parse(postBody.toString());
                response.write(query.username);
                response.end();
                //redirect to /:username
            });
            
        

        }
    }

    
}

//-----------------------------------
//  USER ROUTE
//-----------------------------------
//Handle HTTP route GET /:username i.e. /sheilaanguiano
function user(request, response) {
    //if url =="/.."
    let username = request.url.replace("/", "");
    if(username.length > 0) {
        response.writeHead(200, commonHeaders);
        renderer.view("header", {}, response);

        //get json from Treehouse
        const studentProfile = new Profile(username);
        
        //on "end"
        studentProfile.on("end", function(profileJSON) {
            //show profile

            //store the values which we need
            const values = {
                avatarUrl:profileJSON.gravatar_url,
                username:profileJSON.profile_name,
                badges:profileJSON.badges.length,
                javascriptPoints:profileJSON.points.JavaScript
            }
            //Simple Response
            renderer.view("profile", values, response);
            renderer.view("footer", {}, response);
            response.end();
        });
    
    //on "error"
    studentProfile.on("error", function(error) {
        //show error
        renderer.view("error", {errorMessage: error.message}, response);
        renderer.view("search", {}, response);
        renderer.view("footer", {}, response);
        response.end();
        });        
    }
}

module.exports.home = home;
module.exports.user = user;