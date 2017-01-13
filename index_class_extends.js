
class Person {

	constructor(fn, ln) {
		this.fn = fn;
		this.ln = ln;
	}

	getFullName() {
		return this.fn + ' ' + this.ln;
	}
}

class Student extends Person {

	constructor(studentId, fn, ln) {
		super(fn, ln);
		this.studentId = studentId;
	}

	getRecordInfo() {
		return this.studentId + ' ' + this.ln + ", " + this.fn;
	}

}

var s = new Student(1, 'Jim','Bob');

// sProto = Object.getPrototypeOf(s);
// pProto = Object.getPrototypeOf(sProto);
// pProto.getFullName = function() {
// 	console.log("you've been hacked!");
// };

console.log(s.getFullName());
console.log(s.getRecordInfo());

// var p2 = new Person('Jane','Blevins');
// console.log(p2.getFullName());

// console.log(p.getFullName === p2.getFullName);
