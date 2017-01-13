const fetch = require('node-fetch');

fetch('http://localhost:3000/cars')
	.then(res => res.json())
	.then(cars => {
		console.log(cars);
	});