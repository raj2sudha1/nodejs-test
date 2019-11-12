var express = require('express');
var bodyparser = require('body-parser');

var app = express();
var os = require('os');
var port = 3000;

app.use(bodyparser.json());

const daprPort = process.env.DAPR_HTTP_PORT || 3500;

app.get('/', function (req, res){
	console.log('invoked get method at root');
        res.send('Hello World from VM : ' + os.hostname());
})
app.get('/test', function (req,res){
	console.log('invoked get method at test ');
	res.send('Hello World - test');
}); 
var server = app.listen(port, function (){
        var host = server.address().address;
        var port = server.address().port;

        console.log("Example app listening at http://%s:%s", host,port);
})
