var express = require("express"); //using the express web framework
const port = 3000;
var commentController = require('./controllers/commentController'); // set commentController to the commentController class
var movieController = require('./controllers/movieController'); // set movieController to the movieController class
var app = express(); // set variable app to be an instance of express framework. From now on, app is the express

app.use(express.static("./public")); //static files are to be served from the public folder - for eg. html, images, css
app.use(express.json()); // json() is a method inbuilt in express to recognize the incoming Request Object from the web client as a JSON Object.
// In time to come we will need to accept new or edited comments from user

app.route('/movies').get(movieController.getAllMovies); // activate the getAllMovies method if the route is GET(method) /movies
app.route('/comments').get(commentController.getAllComments) // activate the getAllComments method if the route is GET(method) /comments
app.route('/comments').post(commentController.addComment); // activate the addComments method if the route is POST(method) /comments
app.route('/comments/:id').put(commentController.updateComment) // activate the updateComments method if the route is PUT(method) /comments/:id
app.route('/comments/:id').delete(commentController.deleteComment); // activate the deleteComment method if the route is DELETE(method) /comments/:id


app.listen(port, () => console.log(`Example app listening on port ${port}!`)) // start the nodejs to be listening for incoming request @ port 8080
//console.log("web server running @ http://127.0.0.1:8080"); // output to console 
