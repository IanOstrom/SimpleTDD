# SimpleTDD
This library for Code.org's AppLab tests a function to see if the actual output is the same as the expected output. 

It only works on functions that input/output numbers, strings, arrays, and dictionaries. For arrays and dictionaries, it only works if they contain only numbers and strings as values. It does not work for objects or arrays with arrays, objects, or methods as values.

# Import

To import this library into an AppLab project use this ID:
`k9lMltOxqXBqO60Qgv8VWiHwemxePHwOk-1PwJDWEeM`

# Syntax

SimpleTDD.test(functionCall(input1, input2, etc), expectedOutput);


# Examples

```
function squareIt(n){
  return n*n;
}

test(squareIt(5), 25);
```

```
function sumList(myList){
  var sum = 0;
  for(var i=0; i<myList.length; i++){
    sum+=myList[i];
  }
  return sum;
}

test(sumList([1,2,3,4,5]), 15);
```

```
function adder(a, b){
  return a+b;
}

test(adder(1,2), 3);
test(adder("wh", "at"), "what");
```

```
function makeList(n){
  var myList = [];
  for(var i=1; i<n+1; i++){
    myList.push(i);
  }
  return myList;
}

test(makeList(5), [1,2,3,4,5]);
```

```
function addProp(dict, key, value){
  dict[key] = value;
  return dict;
}

test(addProp({first:"Ian"}, "last", "Ostrom"), {first:"Ian", last:"Ostrom"});
```
