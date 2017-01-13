module.exports.delayMessage = function(msg, delay) {

	return new Promise(function(resolve, reject) {

		setTimeout(function() {
			console.log(msg);
			resolve();
		}, delay);
	});

};