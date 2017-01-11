

// ES2015 version
// export default class Person {

// CommonJS version
module.exports = class Person {

	constructor(fn, ln) {
		this.fn = fn;
		this.ln = ln;
	}

	getFullName() {
		return this.fn + ' ' + this.ln;
	}

};