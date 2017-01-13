// let t = 'test';
// t = 'this is a not a test';

const p = {
	fn: 'Jimmy',
	ln: 'Johns'
};

Object.freeze(p);

p.fn = 'Joan';

console.log(p.fn);