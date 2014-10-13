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

var ones = ["zero", "one", "two", "three", "four", "five", "six", "seven",
            "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
            "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

var tens = ["zero", "ten", "twenty", "thirty", "fourty", "fifty", "sixty",
            "seventy", "eighty", "ninety"]

var teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
             "sixteen", "seventeen", "eighteen", "nineteen"]

var hundreds = " hundred"

var thousands = " thousand"

// var numerals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var checkWriting = {
  toEnglish : function(val){
    val = Number(val).toFixed(2);
    var cents = ' ' + val.slice(-2) + '/100 dollars';
    var dollars = val.slice(0,-3);

      if (dollars < 20) {
        return ones[dollars] + " and" + cents;
      }
      if (dollars < 100) {
        if (dollars % 10 === 0) {
          return tens[dollars[0]] + " and" + cents;
        } else {
          return tens[dollars[0]] + " " + ones[dollars[1]] + " and" + cents;
        }
      }
      else if (dollars < 1000) {
        if (dollars % 100 === 0) {
          return ones[dollars[0]] + hundreds + " and" + cents;
        }
        else if (dollars % 10 === 0) {
          return ones[dollars[0]] + hundreds + " " + tens[dollars[1]] + " and "+ cents;
        }
        else if (dollars[2] < 2) {
          return ones[dollars[0]] + hundreds + " "  + teens[dollars[2]] + " and" + cents;
        } else {
          return ones[dollars[0]] + hundreds + " "  + tens[dollars[1]] + " " + ones[dollars[2]] + " and" + cents;
        }
      }
      else if (dollars < 10000) {
        if (dollars % 1000 === 0) {
          return ones[dollars[0]] + thousands + " and" + cents;
        }
        else if (dollars % 100 === 0) {
          return ones[dollars[0]] + thousands + " "  + ones[dollars[1]] + hundreds + " and" + cents;
        }
        else if (dollars % 10 === 0) {
          return ones[dollars[0]] + thousands + " " + ones[dollars[1]] + hundreds + " " + tens[dollars[2]] + " and" + cents;
        }
        else if (dollars[2] < 2) {
          return ones[dollars[0]] + thousands + " "  + ones[dollars[1]] + hundreds + " " + teens[dollars[3]] + " and" + cents;
        } else {
          return ones[dollars[0]] + thousands + " "  + ones[dollars[1]] + hundreds + " "  + tens[dollars[2]] + " " + ones[dollars[3]] + " and" + cents;
        }
      }
   }
}

describe("checkWriting.toEnglish(), ", function(){
  it ("should return $1.56 in words", function(){
    assert.equal(checkWriting.toEnglish(1.56), 'one and 56/100 dollars');
  })
  it ("should return $6.66 in words", function(){
    assert.equal(checkWriting.toEnglish(6.66), 'six and 66/100 dollars');
  })
  it ("should return $9.99 in words", function(){
    assert.equal(checkWriting.toEnglish(9.99), 'nine and 99/100 dollars');
  })
  it ("should return $11.11 in words", function(){
    assert.equal(checkWriting.toEnglish(11.11), 'eleven and 11/100 dollars');
  })
  it ("should return $30.33 in words", function(){
    assert.equal(checkWriting.toEnglish(30.33), 'thirty and 33/100 dollars');
  })
  it ("should return $88.66 in words", function(){
    assert.equal(checkWriting.toEnglish(88.66), 'eighty eight and 66/100 dollars');
  })
  it ("should return $100.99 in words", function(){
    assert.equal(checkWriting.toEnglish(100.99), 'one hundred and 99/100 dollars');
  })
  it ("should return $500.50 in words", function(){
    assert.equal(checkWriting.toEnglish(500.50), 'five hundred and 50/100 dollars');
  })
  it ("should return $1337.66 in words", function(){
    assert.equal(checkWriting.toEnglish(1337.66), 'one thousand three hundred thirty seven and 66/100 dollars');
  })
  it ("should return $1234.56 in words", function(){
    assert.equal(checkWriting.toEnglish(1234.56), 'one thousand two hundred thirty four and 56/100 dollars');
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
