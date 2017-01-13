

try {

	const t = 3;

	setTimeout(function () {
		//throw Error("Something went wrong!");
		console.log(t);
	}, 0);


	console.log('made it here');

} catch(err) {
	console.log('Caught the error! Intuit Rocks!');
}
