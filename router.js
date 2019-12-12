const Profile = require("./profile.js")

//-----------------------------------
//  HOME ROUTE
//-----------------------------------
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

//-----------------------------------
//  USER ROUTE
//-----------------------------------
//Handle HTTP route GET /:username i.e. /sheilaanguiano
function user(request, response) {
    //if url =="/.."
    let username = request.url.replace("/", "");
    if(username.length > 0) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.write("header\n");

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
            response.write(values.username + " has " + values.badges +   " badges\n");
            response.end("footer\n");
        });
    
    //on "error"
    studentProfile.on("error", function(error) {
        //show error
        response.write(error.message + "\n");
        response.end("fooooooter\n");
        });        
    }
}

module.exports.home = home;
module.exports.user = user;