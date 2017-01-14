const assert = require('assert');
const express = require('express');
const request = require('supertest');

describe('cars rest service', () => {

	let app;

	beforeEach(() => {
		app = express();
		app.use('/', (req, res) => {
			res.json({ message: 'test' });
		});
	});

	it('get all cars', (done) => {

		request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /application\/json/)
      .expect(200)
			.end(function(err, res) {
				if (err) throw err;
				console.log(res);
				done();
			});

	});

});