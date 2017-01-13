// const { delayMessage } = require('./async-demo');

// delayMessage('this is a test 1', 2000)
// 	.then(function() { return delayMessage('this is a test 2', 2000); })
// 	.then(function() { return delayMessage('this is a test 3', 2000); });

const youngMan = new Promise(function youngLady(resolve, reject) {

	setTimeout(function() {
		resolve('she is madly in love with the young man, he is the man of her dreams...');
	}, 2000);

});

youngMan.then(function(results) {

	console.log(results);
	console.log('she said yes!');
	console.log('setting a date...');
	// return new Promise(function(resolve, reject) {
	// 	setTimeout(function() {
	// 		resolve('we have a date!');
	// 	}, 2000);
	// });

	throw Error("cannot find a date...");

}).then(function(results) {

	console.log(results);
	console.log('time to get formal wear...');
	return new Promise(function(resolve) {
		setTimeout(function() {
			resolve('say yes to the dress!');
		}, 2000);
	});

}).then(function(results) {
	console.log(results);
}).catch(function(results) {
	console.log(results);
	console.log('she said no!');
}).then(function() {
	console.log('time to do whatever...');
});

console.log('waiting...');