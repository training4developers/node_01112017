const http = require('http');
const path = require('path');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const carsFile = path.join(process.cwd(), 'cars.json');

const carsRouter = express.Router();

carsRouter.use(bodyParser.json());

const loadCars = carsFileName => {
	return new Promise((resolve, reject) => {
		fs.readFile(carsFileName, 'utf8', (err, data) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(JSON.parse(data));
		});	
	});
};

const saveCars = (carsFileName, carsData) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(carsFileName, JSON.stringify(carsData), 'utf8', err => {
			if (err) {
				reject(err);
				return;
			}
			resolve();
		});			
	});
};


carsRouter.route("/")
	.get((req, res) => {
		fs.readFile(carsFile, 'utf8', (err, data) => {
			if (err) {
				res.sendStatus(404);
				return;
			}
			res.json(JSON.parse(data));
		});
	})
	.post((req, res) => {

		loadCars(carsFile).then(cars => {
			req.body.id = cars.length + 1;
			cars.push(req.body);
			return saveCars(carsFile, cars);
		}).then(() => {
			res.json({ id: req.body.id });
		}).catch(err => {
			// log err to something
			res.sendStatus(500);
		});

	});

const app = express();
app.use("/cars", carsRouter);

const server = http.createServer(app);
server.listen(8080, function(err) {
	if (err) {
		console.log(err);
		return;
	}
	console.log('listening on port 8080');
})


