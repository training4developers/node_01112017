
var myModule = (function() {

	let h = 0;

	return {
		set: function(n) {
			h = n;
		},
		get: function() {
			return h;
		}
	}

})();

myModule.set(3);
console.log(myModule.get());




// var t = 1;

// function doIt() {

// 	// //t = 2;

// 	// console.log(t);
// 	function callMe() {
// 		//throw Error("Something went wrong!");
// 		console.log(t);
// 		//console.log('I was called!');
// 	}

// 	callMe();

// 	let t = 3;



// 	//setTimeout(callMe, 0);

// 	// console.log('made it here');
// }

// doIt();
