console.log('Hello World!');

var t = 2;

var person = {
	firstName: 'Bob',
	lastName: 'Smith',
	address: {
		street: '123 Oak Lane',
		city: 'Mountain View',
		state: 'CA'
	}
};

var person2 = {
	fn: 'Tom',
	ln: 'Jennings',
	address: person.address
};

person2.address.state = 'HI';
console.log(person.address.state);

var people = [ person ];

var d = new Date();

function t() { }

person.age = 23;

function Person() {

}

// class Person {

// 	constructor() {

// 	}
// }

var p = new Person();

console.log(typeof Person);