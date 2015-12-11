	var myArr= [1,2,3,4,5];

	var myObj = {
		name: "dave",
		location: "dallas",
		age: 30,

	}	

	function print (input) {
		console.log(input)
	}

	print(myArr[1]);

	print(myObj.location);
	print(myObj['location']);

	function forEach(collection, callback) {
		if (Array.isArray(collection)) {
			for (var i = 0; i < collection.length; i++) {
				callback(collection[i]);
				return collection;
			}
		}
		else {
			for (var key in collection){
				if(collection.hasOwnProperty(key))  {
					callback(collection[i])
					return collection;
				}
			}
		}
	}

	function map(collection, callback) {
	 	var result = [];
	 	forEach(collection, function (element) {
	    	result.push(callback(element));});
	  return result;
	}


	function filter(collection, predicate) {
	  var result = [];
	  forEach(collection, function (element) {
	    if (predicate(element))
	      result.push(element);
	  });
	  return result;
	}
	 

	function forEach(collection, callback) {
		if (Array.isArray(collection)) {
			for (var i = 0; i < collection.length; i++) {
				callback(collection[i]);}
		}
		else {
			for (var key in collection){
				if(collection.hasOwnProperty(key))  {
					callback(collection[key]);}
		}
	 }
	}

	function reduce(collection, callback, initial) {
	  var accumulator = initial;
	  forEach(collection, function (element) {
	    if (accumulator === undefined){
	    	accumulator = element;}
	    accumulator = callback(accumulator, element);
	  });
	  return accumulator;
	}


	function contains(collection, target) {
	  return reduce(collection, function (accumulator, element) {
	    if (accumulator) {
	      return true;
	    }
	    return element === target;
	  }, false);
	}


	function some(collection, predicate) {
	var bool;
		forEach(collection, function(element) {
			if(predicate(element)){
			bool = true;
			}
			else {
			bool = false;
			}});
		return bool;
	}




	function every(collection, predicate) {
	  var result = true;
	  forEach(collection, function (element) {
	    if (!predicate(element)) {
	      result = false;
	    }
	  });
	  return result;
	}

	function add(a,b) {
		return a + b;
	}

	function grtThan4(x) {
		return x > 4;

	}


	//using the above functions

	every(myArr,grtThan4);
	contains([1,2,3,4,5], 3);

	reduce(add, 0, [1,2,3,4,5]);
