var exec = require('cordova/exec');
function AudioHandler() {}
AudioHandler.prototype.muteApp = function(){ 
	exec(function(result){ 
	}, function(result){ 
	},"AudioHandler",
	"mute",[]);
} 
AudioHandler.prototype.unmuteApp = function(){ 
	exec(function(result){ 
	}, function(result){ 
	},"AudioHandler",
	"unmute",[]);
} 
var audioHandler = new AudioHandler(); 
module.exports = audioHandler;
