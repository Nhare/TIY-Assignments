//nhare
//String Calc refactored using new techniques.


var assert = require('chai').assert;

var word = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5,
              six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
              eleven: 11, twelve: 12, thirteen: 13, fourteen: 14,
              fifteen: 15, sixteen: 16, seventeen: 17,
              eighteen: 18, nineteen: 19, twenty: 20};

var stringCalc = {
  fromEnglish : function(x, y){
    return word[x] - word[y];
  }
}

describe('fromEnglish()', function(){
  it('should return "0" when given "zero" and "zero"', function() {
    assert.equal(stringCalc.fromEnglish('zero', 'zero'), 0);
  });
  it('should return "1" when given "two" and "one"', function() {
    assert.equal(stringCalc.fromEnglish('two', 'one'), 1);
  });
  it('should return "2" when given "nine" and "seven"', function() {
    assert.equal(stringCalc.fromEnglish('nine', 'seven'), 2);
  });
  it('should return "3" when given "twelve" and "nine"', function() {
    assert.equal(stringCalc.fromEnglish('twelve', 'nine'), 3);
  });
  it('should return "4" when given "five" and "one"', function() {
    assert.equal(stringCalc.fromEnglish('five', 'one'), 4);
  });
  it('should return "5" when given "eleven" and "six"', function() {
    assert.equal(stringCalc.fromEnglish('eleven', 'six'), 5);
  });
  it('should return "6" when given "twenty" and "fourteen"', function() {
    assert.equal(stringCalc.fromEnglish('twenty', 'fourteen'), 6);
  });
  it('should return "7" when given "nineteen" and "twelve"', function() {
    assert.equal(stringCalc.fromEnglish('nineteen', 'twelve'), 7);
  });
  it('should return "8" when given "ten" and "two"', function() {
    assert.equal(stringCalc.fromEnglish('ten', 'two'), 8);
  });
  it('should return "9" when given "twenty" and "eleven"', function() {
    assert.equal(stringCalc.fromEnglish('twenty', 'eleven'), 9);
  });
  it('should return "10" when given "thirteen" and "three"', function() {
    assert.equal(stringCalc.fromEnglish('thirteen', 'three'), 10);
  });
});


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
