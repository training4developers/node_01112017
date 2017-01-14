
const p1 = new Promise(resolve => setTimeout(() =>
	{ console.log('a'); resolve('a') }, 2000));
const p2 = new Promise((resolve, reject) => setTimeout(() =>
	{ console.log('b'); reject('timeout') }, 1000));

Promise.race([p1,p2]).then(function(results) {
	console.log(results);
}).catch(function(results) {
	console.log(results);
});


