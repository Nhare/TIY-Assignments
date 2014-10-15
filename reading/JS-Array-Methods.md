
### JS Array Methods ###

##### Array.from() #####
Creates a new Array instance from an array-like or iterable object.

```
// Array-like object (arguments) to Array
function f() {
  return Array.from(arguments);
}

f(1, 2, 3);
// [1, 2, 3]
```

##### Array.isArray() #####
Returns true if a variable is an array, if not false.

```
// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype);
```
##### Array.of() ####
Creates a new Array instance with a variable number of arguments,
regardless of number or type of the arguments.

```
Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
```

### Mutator methods ###

* These methods modify the array:

#### Array.prototype.copyWithin() ####
Copies a sequence of array elements within the array.

```
[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]

[1, 2, 3, 4, 5].copyWithin(0, 3, 4);
// [4, 2, 3, 4, 5]
```

#### Array.prototype.fill() ####
Fills all the elements of an array from a start index to an end
index with a static value.

```
[1, 2, 3].fill(4)               // [4, 4, 4]
[1, 2, 3].fill(4, 1)            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2)         // [1, 4, 3]

arr.fill(value[, start = 0[, end = this.length]])
```

#### Array.prototype.pop() ####
Removes the last element from an array and returns that element.

```
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

console.log(myFish); // ['angel', 'clown', 'mandarin', 'sturgeon']

var popped = myFish.pop();

console.log(myFish); // ['angel', 'clown', 'mandarin' ]

console.log(popped); // 'sturgeon'
```

#### Array.prototype.push() ####
Adds one or more elements to the end of an array and returns the
new length of the array.

```
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');

console.log(sports); // ['soccer', 'baseball', 'football', 'swimming']
console.log(total);  // 4
```

#### Array.prototype.reverse() ####
Reverses the order of the elements of an array — the first becomes
 the last, and the last becomes the first.

 ```
var myArray = ['one', 'two', 'three'];
myArray.reverse();

console.log(myArray) // ['three', 'two', 'one']
 ```

#### Array.prototype.shift() ####
Removes the first element from an array and returns that element.

```
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('myFish before: ' + myFish);

var shifted = myFish.shift();

console.log('myFish after: ' + myFish);
console.log('Removed this element: ' + shifted);
```

#### Array.prototype.sort() ####
Sorts the elements of an array in place and returns the array.

```
var fruit = ['apples', 'bananas', 'Cherries'];
fruit.sort(); // ['Cherries', 'apples', 'bananas'];

var scores = [1, 2, 10, 21];
scores.sort(); // [1, 10, 2, 21]

var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// In Unicode, numbers come before upper case letters,
// which come before lower case letters.
```

#### Array.prototype.splice() ####
Adds and/or removes elements from an array.

```
var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

// removes 0 elements from index 2, and inserts 'drum'
var removed = myFish.splice(2, 0, 'drum');
// myFish is ['angel', 'clown', 'drum', 'mandarin', 'surgeon']
// removed is [], no elements removed

// removes 1 element from index 3
removed = myFish.splice(3, 1);
// myFish is ['angel', 'clown', 'drum', 'surgeon']
// removed is ['mandarin']

// removes 1 element from index 2, and inserts 'trumpet'
removed = myFish.splice(2, 1, 'trumpet');
// myFish is ['angel', 'clown', 'trumpet', 'surgeon']
// removed is ['drum']

// removes 2 elements from index 0, and inserts 'parrot', 'anemone' and 'blue'
removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
// myFish is ['parrot', 'anemone', 'blue', 'trumpet', 'surgeon']
// removed is ['angel', 'clown']

// removes 2 elements from index 3
removed = myFish.splice(3, Number.MAX_VALUE);
// myFish is ['parrot', 'anemone', 'blue']
// removed is ['trumpet', 'surgeon']
```

#### Array.prototype.unshift() ####
Adds one or more elements to the front of an array and returns the
 new length of the array.

```
var arr = [1, 2];

arr.unshift(0); // result of call is 3, the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr is [[-3], -2, -1, 0, 1, 2]
```

### Accessor methods ###

* These methods do not modify the array and return some representation of the array.

#### Array.prototype.concat() ####
Returns a new array comprised of this array joined with other array(s)
 and/or value(s).

 ```
 var alpha = ['a', 'b', 'c'],
    numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // Result: ['a', 'b', 'c', 1, 2, 3]
 ```

#### Array.prototype.contains() ####
Determines whether an array contains a certain element, returning true
or false as appropriate.

```
[1, 2, 3].contains(2);     // true
[1, 2, 3].contains(4);     // false
[1, 2, 3].contains(3, 3);  // false
[1, 2, 3].contains(3, -1); // true
[1, 2, NaN].contains(NaN); // true
```

#### Array.prototype.join() ####
Joins all elements of an array into a string.

```
var a = new Array('Wind', 'Rain', 'Fire');
var myVar1 = a.join();      // assigns 'Wind,Rain,Fire' to myVar1
var myVar2 = a.join(', ');  // assigns 'Wind, Rain, Fire' to myVar2
var myVar3 = a.join(' + '); // assigns 'Wind + Rain + Fire' to myVar3
```

#### Array.prototype.slice() ####
Extracts a section of an array and returns a new array.

```
// Our good friend the citrus from fruits example
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);

// citrus contains ['Orange','Lemon']
```

#### Array.prototype.toSource() ####
Returns an array literal representing the specified array; you can
use this value to create a new array. Overrides the
Object.prototype.toSource() method.

```
var alpha = new Array('a', 'b', 'c');

alpha.toSource();   //returns ['a', 'b', 'c']
```

#### Array.prototype.toString() ####
Returns a string representing the array and its elements. Overrides
the Object.prototype.toString() method.

```
var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var myVar = monthNames.toString(); // assigns 'Jan,Feb,Mar,Apr' to myVar.
```

#### Array.prototype.toLocaleString() ####
Returns a localized string representing the array and its elements.
Overrides the Object.prototype.toLocaleString() method.

```
var number = 1337;
var date = new Date();
var myArr = [number, date, 'foo'];

var str = myArr.toLocaleString();

console.log(str);
// prints '1.337,6.12.2013 19:37:35,foo'
// if run in a German (de-DE) locale with timezone Europe/Berlin
```

#### Array.prototype.indexOf() ####
Returns the first (least) index of an element within the array equal to
the specified value, or -1 if none is found.

```
var array = [2, 5, 9];
var index = array.indexOf(2);
// index is 0
index = array.indexOf(7);
// index is -1
index = array.indexOf(9, 2);
// index is 2
index = array.indexOf(2, -1);
// index is -1
index = array.indexOf(2, -3);
// index is 0
```

#### Array.prototype.lastIndexOf() ####
Returns the last (greatest) index of an element within the array equal
to the specified value, or -1 if none is found.

```
var array = [2, 5, 9, 2];
var index = array.lastIndexOf(2);
// index is 3
index = array.lastIndexOf(7);
// index is -1
index = array.lastIndexOf(2, 3);  
// index is 3
index = array.lastIndexOf(2, 2);
// index is 0
index = array.lastIndexOf(2, -2);
// index is 0
index = array.lastIndexOf(2, -1);
// index is 3
```

### Iteration methods ###

* Several methods take as arguments functions to be called back while processing the array. When these methods are called, the length of the array is sampled, and any element added beyond this length from within the callback is not visited. Other changes to the array (setting the value of or deleting an element) may affect the results of the operation if the method visits the changed element afterwards. While the specific behavior of these methods in such cases is well-defined, you should not rely upon it so as not to confuse others who might read your code. If you must mutate the array, copy into a new array instead.

#### Array.prototype.forEach() ####
Calls a function for each element in the array.

```
function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

// Note ellision, there is no member at 2 so it isn't visited
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

#### Array.prototype.entries() ####
Returns a new Array Iterator object that contains the key/value pairs
for each index in the array.

```
var arr = ['a', 'b', 'c'];
var eArr = arr.entries();

console.log(eArr.next().value); // [0, 'a']
console.log(eArr.next().value); // [1, 'b']
console.log(eArr.next().value); // [2, 'c']
```

#### Array.prototype.every() ####
Returns true if every element in this array satisfies the provided
testing function.

```
function isBigEnough(element, index, array) {
  return element >= 10;
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
// passed is false
passed = [12, 54, 18, 130, 44].every(isBigEnough);
// passed is true
```

#### Array.prototype.some() ####
Returns true if at least one element in this array satisfies the
provided testing function.

```
function isBigEnough(element, index, array) {
  return element >= 10;
}
var passed = [2, 5, 8, 1, 4].some(isBigEnough);
// passed is false
passed = [12, 5, 8, 1, 4].some(isBigEnough);
// passed is true
```

#### Array.prototype.filter() ####
Creates a new array with all of the elements of this array for which
the provided filtering function returns true.

```
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

#### Array.prototype.find() ####
Returns the found value in the array, if an element in the array
satisfies the provided testing function or undefined if not found.

```
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

#### Array.prototype.findIndex() ####
Returns the found index in the array, if an element in the array
satisfies the provided testing function or -1 if not found.

```
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 12].findIndex(isPrime)); // 2
```

#### Array.prototype.keys() ####
Returns a new Array Iterator that contains the keys for each index in
the array.

```
var arr = ['a', 'b', 'c'];
var eArr = arr.keys();

console.log(eArr.next().value); // 0
console.log(eArr.next().value); // 1
console.log(eArr.next().value); // 2
```

#### Array.prototype.map() ####
Creates a new array with the results of calling a provided function on
every element in this array.

```
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3], numbers is still [1, 4, 9]
```

#### Array.prototype.reduce() ####
Apply a function against an accumulator and each value of the array
(from left-to-right) as to reduce it to a single value.

```
var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
});
// total == 6
```

#### Array.prototype.reduceRight() ####
Apply a function against an accumulator and each value of the array
(from right-to-left) as to reduce it to a single value.

```
var total = [0, 1, 2, 3].reduceRight(function(a, b) {
  return a + b;
});
// total == 6}
```



### TWO DIMENSIONAL ARRAY ###

```javascript
var board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ];

console.log(board.join('\n') + '\n\n');

// Move King's Pawn forward 2
board[4][4] = board[6][4];
board[6][4] = ' ';
console.log(board.join('\n'));
```
