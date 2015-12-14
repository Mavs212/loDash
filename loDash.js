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
			for (var i = 0; i < collection.length; i++) {//This if statement checks if the collection parameter is 
				callback(collection[i]); // an array.  If it is an array is then the loop will implement 
			}				 // the callback function through every index  of the array.  
		}				  	 //If the collection is an object the else statement runs below
		else {
			for (var key in collection){     //Similar to above, except will run if the collection
							//parameter is an object
				if(collection.hasOwnProperty(key))  {
					callback(collection[key])			   
				}
			}
		}
	}

	function map(collection, callback) {
	 	var result = [];
	 	forEach(collection, function (element) {  //map pushes the result of each collection
	    	result.push(callback(element));});    //item that is run through a callback function to an empty
	  return result;			       //array.  An anonymous callback function is used to showcase 
	}					     //that collection[i] in forEach can be passed up to map in the form 
						     //of element.  Not all parameters in different functions must have the
						    //the same name.

	function filter(collection, predicate) {
	  var result = [];			     //filter is similar to map, but instead the callback function parameter 
	  forEach(collection, function (element) {   //is now called predicate and the elements of the collection will only 
	    if (predicate(element))		     //be pushed to the result array if they pass the predicate test.
	      result.push(element);
	  });
	  return result;
	}
	
	function some(collection, predicate) {   //some is simiar to filter but instead of returning elements that passed the 
	var bool;			        //predicate test this function returns one value (true) if there are some 
		forEach(collection, function(element) {  // elements that pass the predicate function test. 
			if (predicate(element)) {       //Otherwise it returns false.
				bool = true;
			}
			else {
				bool = false;
			}});
		return bool;
	}




	function every(collection, predicate) {   //every is similar to some, except it only 
	  var result = true;			 //returns true if every element in the collection passes the predicate test.
	  forEach(collection, function (element) {
	    if (!predicate(element)) {
	      result = false;
	    }
	  });
	  return result;
	} 

	function reduce(collection, callback, initial) {   //reduce is a function that takes an initial value 
	  var accumulator = initial;		          //(if undefined then the first item in the collection)and 
	  forEach(collection, function (element) {	// performs a callback operation loop that aggregates previous results 
	    if (accumulator === undefined){		//of array items that were run in the callback function with  
	    	accumulator = element;}			//a current array item run in the callback function.  What is left 			
	    accumulator = callback(accumulator, element); //should be a single value for the entire array, aka it is 'reduced'.
	  });
	  return accumulator;
	}


	function contains(collection, target) {	//contains is similar to some, but it uses reduce to see if an element
	  return reduce(collection, function (accumulator, element) {   // is present. It also uses a target value 
	    if (accumulator) {		//instead of a predicate function.  initial is set to false, so 							
	      return true;		// accumulator will equal false unless element === target, and
	    }				//then accumulator will forever thereafter be true until the function ends.
	    return element === target;
	  }, false);												
	}															
																	

	

	function add(a,b) {  //this is an example of a callback function parameter that can be used with the function reduce
		return a + b;
	}

	function grtThan4(x) { //this is an example of a callback function that can be used in the functions x
			      //aka the current index equals the value of the target
		return x > 4;

	}


	//examples using the above functions

	every(myArr,grtThan4);
	contains([1,2,3,4,5], 3);
	reduce([1,2,3,4,5], add);
	
	var g19 = ["GoldenTriangle"];
	contains(g19, "GoldenTriangle");

	
