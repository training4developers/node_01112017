//"use strict";

class MyComp extends React.Component {

	// constructor() {
	// 	this.onChange = this.onChange.bind(this);
	// }

	// onChange() {
			this
	// }

	onChange = () => {

	};

	constructor() {
		this.onChange = () => {
			this
		};
	}

}

const fs = require('fs');

var dataReader = {

	data: 'initial data',

	readData: function() {

		return new Promise((resolve, reject) => {
			fs.readFile('./cars.json', 'utf-8', (err, contents) => {
				if (err) {
					reject(err);
					return;
				}
				this.data = contents;
				resolve();
			});
		});
	},

	getData() {
		return this.data;
	}
}

dataReader.readData().then(function() {
	console.log(dataReader.getData());
	//console.log(global.data);
});

