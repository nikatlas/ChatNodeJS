var fs = require('fs');
var Promise = require('promise');

var chat = {
	writeMsg: function(username,msg){
		var p = new Promise(function(resolve,reject){
			fs.appendFile('models/messages.txt',username + " : " + msg + "\n",function(err){
				if(err)
					throw err;
				resolve(true);
			});
		});
		return p;
	},
	readChat: function(){
		var p = new Promise(function(resolve,reject){
			fs.readFile('models/messages.txt','utf-8',function(err,data){
				if(err){reject(err);}
				resolve(data);
			});
		});
		return p;
	}
};
module.exports = chat;