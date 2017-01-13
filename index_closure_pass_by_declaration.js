function doIt() {

	let t = 12;

	setTimeout(function() {
		t = 42;
	}, 2000);

	return function inner() {
		console.log(t);
	};
}

const fn = doIt();
fn();

setTimeout(function() {
	fn();
}, 4000);