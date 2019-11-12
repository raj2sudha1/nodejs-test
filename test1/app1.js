var express = require('express');
var app = express();
var os = require('os');

const daprPort = process.env.DAPR_HTTP_PORT || 3500;

app.get('/', function (req, res){
        res.send('Hello World from VM : ' + os.hostname());
})
app.get('/test', function (req,res){
	res.send('Hello World - test');
}); 
var server = app.listen(8081, function (){
        var host = server.address().address;
        var port = server.address().port;

        console.log("Example app listening at http://%s:%s", host,port);
})
