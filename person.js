

// ES2015 version
// export default class Person {

// CommonJS version
class Person {

	constructor(fn, ln) {
		this.fn = fn;
		this.ln = ln;
	}

	getFullName() {
		return this.fn + ' ' + this.ln;
	}

};

class Place { }

module.exports.Person = Person;
module.exports.Place = Place;