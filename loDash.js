	var myArr= [1,2,3,4,5];

	var myObj = {
		name: "dave",
		prev_location: "dallas",
		new_location: "denver",
		new_school: "galvanize",
		age: 30,

	}	

	function print (input) {
		console.log(input)
	}


	//acessing index of array using bracket notation
	//print(myArr[1]);    

	//accessing property of object using dot notation
	//print(myObj.location);

	//accessing prperty of object using bracket notation
	//print(myObj['location']);


	//forEach, which is the heart of the loDash library
	function forEach(collection, callback) {
		if (Array.isArray(collection)) {
			for (var i = 0; i < collection.length; i++) {	//this if statement checks if the collection parameter is an array, if it is then 
				callback(collection[i]);					//the loop will implement the callback function
			}												// through every index  of the array, if the collection parameter is an object 
		}													//the else statement runs below
		else {
			for (var key in collection){ 					//Similar to above, except will run if the collection parameter is an object  
				if(collection.hasOwnProperty(key))  {		//the loop checks to see if the collection has a property, which would only occur if it is an object and if so
					callback(collection[key])			    //the callback function is executed on the property
				}
			}
		}
	}

	function map(collection, callback) {
	 	var result = [];
	 	forEach(collection, function (element) {  //map uses an anonymous callback function is used in the forEach declaration 
	    	result.push(callback(element));});    //to push the results of callback for each index in the collection array to an empty array called result
	  return result;
	}


	function filter(collection, predicate) {
	  var result = [];							//filter is similar to map, but instead the callback function parameter is now called predicate
	  forEach(collection, function (element) {   //and the predicate function is now used to determine whether resuts are pushed to the result array.
	    if (predicate(element))
	      result.push(element);
	  });
	  return result;
	}
	
	function some(collection, predicate) {   //some is simiar to filter but instead of returning elements that passed the predicate test
	var bool;								 //this functionr returns true if there are some elements that pass the predicate function test.
		forEach(collection, function(element) {  //otherwise it returns false.
			if (predicate(element)) {
				bool = true;
			}
			else {
				bool = false;
			}});
		return bool;
	}




	function every(collection, predicate) {   //every is similar to some, except it only returns true if every element in the collection
	  var result = true;					  //passes the predicate test
	  forEach(collection, function (element) {
	    if (!predicate(element)) {
	      result = false;
	    }
	  });
	  return result;
	} 

	function reduce(collection, callback, initial) {   //reduce is a function that takes an initial value (if undefined it is the first in the collection)
	  var accumulator = initial;					   //and adds the result of a callback function on each iorrectlytem in a the collection.
	  forEach(collection, function (element) {		  //the callback function must have two parameters in order to work c
	    if (accumulator === undefined){
	    	accumulator = element;}
	    accumulator = callback(accumulator, element);
	  });
	  return accumulator;
	}


	function contains(collection, target) {						//contains is similar to some, but it uses reduce to see if an element is present.
	  return reduce(collection, function (accumulator, element) {     // it also uses a target value instead of a predicate function
	    if (accumulator) {									
	      return true;		
	    }
	    return element === target;
	  }, false);													//initial is set to false, so therefore accumulator will equal false unless
	}																// element === target, aka the current index equals the value of the target
																	//parameter, otherwise, the function will return true to the end

	

	function add(a,b) {  //this is an example of a callback function parameter that can be used with the functionk reduce
		return a + b;
	}

	function grtThan4(x) { //this is an example of a callback function that can be used in the functions filter, some, and every
		return x > 4;

	}


	//examples using the above functions

	every(myArr,grtThan4);
	contains([1,2,3,4,5], 3);
	reduce([1,2,3,4,5], add);
	
	var g19 = ["GoldenTriangle"];
	contains(g19, "GoldenTriangle");

	
