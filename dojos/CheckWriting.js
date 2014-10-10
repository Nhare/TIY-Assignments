// Nhare
/*
 * Check Writing
 *
 * Given an integer representing money -- $1234.56 -- convert
 * that into it;s string representation in English words. For
 * example, 1234.56 is "one thousand, two hundred thirty four
 * and 56/100s", just like you would see on a check.
 *
 * In a lot of ways this is the inverse of the "String Calculator"
 * problem, so a lot of what you've learned there will be put into
 * practice here, but backwards. Hooray!
 */

var assert = require('assert');

numbers = ["zero", "one", "two", "three", "four",
          "five", "six", "seven", "eight", "nine"]

teens = ["ten", "eleven", "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen","seventeen", "eighteen", "nineteen"]

tens = ["zero","ten", "twenty", "thirty", "forty", "fifty",
        "sixty", "seventy", "eighty", "ninety"]

hundreds = ["zero", "one hundred ", "two hundred ", "three hundred ",
            "four hundred ","five hundred ", "six hundred ", "seven hundred ",
            "eight hundred ","nine hundred "]

var numerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function num2Letter(num) {
  var cents = ((num - Math.floor(num))* 100).toFixed(0)
  num = Math.floor(num)
  var val = num.toString();
    if (num < 20){
      return numbers[num] + " and " + cents + "/100 dollars";
    }
    if (num < 100) {
      if (num % 10 === 0) {
        return tens[val[0]] + " and " + cents + "/100 dollars";
    } {
        return tens[val[0]] + ones[val[1]] + " and " + cents + "/100 dollars";
    }
  }
}

describe("num2Letter(), takes a Number with two decimal places as an input and returns it in check form", function(){
  it ("should return $1.56 in words", function(){
    assert.equal(num2Letter(1.56), 'one and 56/100 dollars');
  })
  it ("should return $4.88 in words", function(){
    assert.equal(num2Letter(4.88), 'four and 88/100 dollars');
  })
  it ("should return $9.99 in words", function(){
    assert.equal(num2Letter(9.99), 'nine and 99/100 dollars');
  })
  it ("should return $22.11 in words", function(){
    assert.equal(num2Letter(22.11), 'twenty two and 11/100 dollars');
  })
  it ("should return $30.75 in words", function(){
    assert.equal(num2Letter(30.75), 'thirty and 75/100 dollars');
  })
  it ("should return $40.20 in words", function(){
    assert.equal(num2Letter(40.20), 'forty and 20/100 dollars');
  })
})



// var assert = require('chai').assert;
//
// var ones = [ 'zero', 'one', 'two', 'three', 'four', 'five' ];
//
// function toEnglish(value){
//     return ones[value];
// }
//
// var words = { zero: 0, one: 1, two: 2 };
//
// function fromEnglish(word){
//     return words[word];
//
//     if ( word === 'zero' ){
//         return words[word];
//         // return words['zero']; // word === 'zero'
//         // return 0; // words.zero === 0
//     }
//     if ( word === 'one' ){
//         return words[word];
//         return words['one']; // word === 'one'
//         // return 1; // words.one === 1
//     }
//     if ( word === 'two' ){
//         return words[word];
//         // return words['two']; // word === 'two'
//         // return 2; // words.two === 2
//     }
// }
//
// describe('toEnglish()', function(){
//     it('should convert "zero" through "five"', function(){
//         assert.equal(toEnglish(0), 'zero');
//         assert.equal(toEnglish(1), 'one');
//         assert.equal(toEnglish(2), 'two');
//         assert.equal(toEnglish(3), 'three');
//         assert.equal(toEnglish(4), 'four');
//         assert.equal(toEnglish(5), 'five');
//     });
//
//     it('should not understand 6 yet', function(){
//         assert.isUndefined(toEnglish(6));
//     });
// });
//
// describe('fromEnglish()', function(){
//     it('should convert 0 through 2', function(){
//         assert.equal(fromEnglish('zero'), 0);
//         assert.equal(fromEnglish('one'), 1);
//         assert.equal(fromEnglish('two'), 2);
//         // assert.equal(fromEnglish('three'), 3);
//         // assert.equal(fromEnglish('four'), 4);
//         // assert.equal(fromEnglish('five'), 5);
//     });
//
//     it('should not understand 6 yet', function(){
//         // assert.isUndefined(fromEnglish('six'));
//     });
// });


//
//
//
// Chai learning
//
//
//
// var expect = require('chai').expect,
//     iron = 'yard';
//
// it('should have a length of 4', function(){
//     expect(iron).to.have.length(4);
//     expect(iron).to.be.a('number');
// })
