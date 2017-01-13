
const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const carsFileName = path.join(process.cwd(), 'cars.json');

const carsRouter = express.Router();

carsRouter.get('/', function(req, res) {

	fs.readFile(carsFileName, 'utf-8', function(err, data) {
		res.json(JSON.parse(data));
	});

});

carsRouter.post('/', function(req, res) {

	fs.readFile(carsFileName, 'utf-8', function(err, data) {

		const { cars } = JSON.parse(data);
		req.body.id = cars.length + 1;
		cars.push(req.body);

		fs.writeFile(carsFileName, JSON.stringify(cars), 'utf-8', function(err) {

			if (err) {
				console.log(err);
				return;
			}

			res.json(req.body.id);

		});

	});

});

app.use(bodyParser.json());
app.use('/cars', carsRouter);

app.listen(8080, function(err) {

	if (err) {
		console.log(err);
		return;
	}

	console.log('web server started on port 8080');

})