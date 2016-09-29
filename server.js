var express = require('express');

var app = express();
//view engine
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
//any static files requested by src/href will be directed to the public directory through this method
app.use(express.static(__dirname + '/public')); 


app.set('port', process.env.PORT || 3000);

//routes
var route = require('./controllers/routes');
app.get('/', route.root);



app.listen(app.get('port'), function(){
	console.log( 'Express started on http://localhost:' +
	app.get('port') + '; press Ctrl-C to terminate.' );
});