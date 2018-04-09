var express = require('express'),
    app = express();
//server
var server = app.listen(8080, function(){
    console.log('Server is listening to port ' + server.address().port);
});
//set view engine
app.set('view engine', 'ejs');
//static files
app.use(express.static('views'));
//homepage 
app.get(['/home', '/'], function(req, res){
    res.render('homepage');
});
//'Trending' page
app.get('/trending', function(req, res){
    res.render('trending');
});
//'Rated' page
app.get('/rated', function(req, res){
    res.render('rated');
});