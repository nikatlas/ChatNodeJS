/**
 * New node file
 */

var http = require('http'),
	fs   = require('fs');
var logger = require('./logger');
var Chat = require('./models/Chat');
var url = require('url');
var promise = require('promise');

http.createServer(function(req,resp){
	var url_parts = url.parse(req.url, true);
	var query = url_parts.query;
	if(req.method == 'GET'){
		fs.readFile('./views/index.html','utf-8',function(err,data){
			resp.writeHead({
				'Content-Type' : 'text/html'
			});
			resp.end(data);		
		});
	}
	else if(req.method == 'POST'){
		Chat.writeMsg(query.username,query.msg).then(function(v){
			resp.writeHead(200);
			resp.end("");
		});
	}
	else if(req.method == 'PATCH'){
		Chat.readChat().then(function(a){
			resp.writeHead({
				'Content-Type' : 'text/html'
			});
			resp.end(a);
		});
	}
	
}).listen(3000);