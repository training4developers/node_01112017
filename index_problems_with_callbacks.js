setTimeout(function() {
	console.log('a');
}, 10000);

setTimeout(function() {
	console.log('b');
}, 4000);

setTimeout(function() {
	console.log('c');
}, 1000);

function doIt() {
	console.log('all done');
}


// setTimeout(function() {
// 		console.log('a');
// 		setTimeout(function() {
// 				console.log('b');
// 				setTimeout(function() {
// 					console.log('c');
// 					setTimeout(function() {
// 							console.log('d');
// 					}, 2000);
// 				}, 2000);
// 		}, 2000);
// }, 2000);

// var con = openConnection();
// var rst = con.execute("select * from everything");
// while(rst.EOF) {
// 	rst.MoveNext()
// }

// openConnection(function(con) {
// 	con.execute("select...", function(rst) {

// 	});
// })



