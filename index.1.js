"use strict";

function doIt(...a) {
	console.log(this);
	console.log(a);
	//console.log(arguments);
} 

doIt();

const o = {
	id: 2,
	doIt: doIt
};

o.doIt();
console.log(doIt === o.doIt);

doIt.call({ id:3 }, 1,2,3);
doIt.apply({ id:4 }, [1,2,3,4]);
doIt.call({ id: 5}, ...[1,2,3,4]);

var r = 2;
var w = 3;

// var q = r;
// r = w;
// w = q;

[ w, r] = [r , w];

// console.log(doIt.someProp); // undefined
// doIt.someProp = 'test';
// console.log(doIt.someProp);
// delete doIt.someProp;



