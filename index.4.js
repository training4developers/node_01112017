
const p1 = new Promise(resolve => setTimeout(() => resolve('a'), 2000));
const p2 = new Promise(resolve => setTimeout(() => resolve('b'), 4000));
const p3 = new Promise((resolve, reject) => setTimeout(() => resolve('c'), 6000));
const p4 = new Promise(resolve => setTimeout(() => resolve('d'), 8000));

p1.then(results => console.log(results, 'p1a')).then(() => console.log('p1aa'));
p1.then(results => console.log(results, 'p1b'));
p1.then(results => console.log(results, 'p1c'));
p1.then(results => console.log(results, 'p1d'));

p2.then(results => console.log(results));
p3.then(results => console.log(results)).catch(results => console.log('p3 rejected'));
p4.then(results => console.log(results));

const p5 = Promise.all([p1,p2]);
p5.then(function(results) {
	console.log('do something with results from p1 and p2');
	return results;
});

Promise.all([p5,p3,p4])
	.then(results => console.log('all done', results))
	.catch(results => console.log('one failed', results));


class Promise {

	constructor(fn) {

		this._resolveFns = [];
		this._rejectFns = [];

		fn(this.resolve, this.reject);

	}

	resolve(results) {
		this._resolveFns.forEach(function(fn) {
			fn(results);
		});
	}

	reject(results) {
		this._rejectFns.forEach(function(fn) {
			fn(results);
		});
	}


	then(resolveFn) {
		this._resolveFns.push(resolveFn);
	}

	catch(rejectFn) {
		this._rejectFns.push(rejectFn);
	}


}

