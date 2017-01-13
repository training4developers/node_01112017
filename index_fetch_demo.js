const fetch = require('node-fetch');

class Car { }

fetch('http://localhost:3000/cars').then(function(res) {
	return res.json();
}).then(function(cars) {
	console.log(cars);
	console.log(cars[0] instanceof Car);
});