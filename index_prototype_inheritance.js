

const parent = {
	amt: 1000,
	address: {
		city: 'Washington',
		state: 'DC'
	}
};

const child = Object.create(parent);
console.log(child.address.city);
child.address.city = 'Chicago';
console.log(parent.address.city);


// console.log(child.amt);
// console.log(child.hasOwnProperty('amt'));

// child.amt = 20;
// console.log(child.amt);
// console.log(parent.amt);
// console.log(child.hasOwnProperty('amt'));

// delete child.amt;
// console.log(child.amt);
// console.log(parent.amt);
// console.log(child.hasOwnProperty('amt'));
