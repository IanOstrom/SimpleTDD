/*
This library tests a function to see if the actual output is the same as the expected output.

It only works on functions that input/output numbers, strings, arrays, and dictionaries.
For arrays and dictionaries, it only works if they contain only numbers and strings as values.
It does not work for objects or arrays with arrays, objects, or methods as values.

Distributed under the MIT license. Copyright 2022 Ian Ostrom.


------
Syntax
------

SimpleTDD.test(functionCall(input1, input2, etc), expectedOutput);


-----------------
Example Functions
-----------------


function squareIt(n){
  return n*n;
}

function sumList(myList){
  var sum = 0;
  for(var i=0; i<myList.length; i++){
    sum+=myList[i];
  }
  return sum;
}

function adder(a, b){
  return a+b;
}

function makeList(n){
  var myList = [];
  for(var i=1; i<n+1; i++){
    myList.push(i);
  }
  return myList;
}


function addProp(dict, key, value){
  dict[key] = value;
  return dict;
}

-------------
Example Tests
-------------


test(adder(1,2), 3);
test(squareIt(5), 25);
test(sumList([1,2,3,4,5]), 15);
test(makeList(5), [1,2,3,4,5]);
test(adder("wh", "at"), "what");
test(addProp({first:"Ian"}, "last", "Ostrom"), {first:"Ian", last:"Ostrom"});

*/



// Tests a function to see if the actual output is the same as the expected output.
// The result of the test (pass/fail) is logged to the console.
//
// functionCall {function} - a call to the function to be tested
// expected {number/string/array/dictionary} - the expected output of the function
function test(functionCall, expected) {
  var actual = functionCall;
  
  if( Array.isArray(actual) && Array.isArray(expected) ){
    for(var i=0; i<actual.length; i++){
      if(actual[i] != expected[i]){
        failed();
        break;
      }
    }
    passed();
  } 
  
  else if(typeof actual == "object" && typeof expected == "object"){
    var actualKeys = Object.keys(actual);
    var expectedKeys = Object.keys(expected);
    
    for(var i=0; i<actualKeys.length; i++){
      if(actual[actualKeys[i]] != expected[expectedKeys[i]]){
        failed();
        break;
      }
    }
    passed();
    
  } 
  
  else if(actual == expected){
    passed();
  } 
  
  else{
    failed();
  }
  
  function passed(){
    console.log("Test passed -- Output: " + JSON.stringify(expected) + " ");
  }
  
  function failed(){
    console.log("Test failed -- Expected " + JSON.stringify(expected) + "  --  Instead got " + JSON.stringify(actual) + " ");
  }
}
  