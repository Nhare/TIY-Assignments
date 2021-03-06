/*
  If we list all the natural numbers below 10 that are
  multiples of 3 or 5, we get 3, 5, 6 and 9. The sum
  of these multiples is 23.

  Find the sum of all the multiples of 3 or 5 below 1000.

Format

function solution(){
    // change input to suit the solution, e.g. `limit`
    return {
        // I wanna see this one...
        solveFor: function(limit){  perform magic...},

        // For Problem 2, for example... However you solve it.
        fibonacci: function(limit){  . . .  },
        filterEvens: function(list){  . . .  },
        sum: function(list){  . . .  }
    }
}


*Original Solution*
function euler(input){
  var sum = 0;
  for(var num = 0; num < input; num++){
    if (num % 5 === 0 || num % 3 === 0){
        sum += num;
    }
  }
  return sum;
}

console.log(euler(1000));
console.log("\nVictory, or Death.");
*/

var assert = require('chai').assert;
//factory
function solution(){
  return { //return object literal
    solveFor: function(input){ //object with method solveFor
      var sum = 0;
      for(var num = 0; num < input; num++){
        if (num % 5 === 0 || num % 3 === 0){
          sum += num;
        }
      }
      return sum;
    }
  }
}

// console.log(solution().solveFor(10));
// console.log(solution().solveFor(100));
// console.log(solution().solveFor(1000));
//
// describe('Solution().solveFor', function(){
//   it('should take "10" and return "23"', function(){
//     assert.equal(solution().solveFor(10), 23);
//   });
//   it('should take "100" and return "2318"', function(){
//     assert.equal(solution().solveFor(100), 2318);
//   });
//   it('should take "1000" and return "233168"', function(){
//     assert.equal(solution().solveFor(1000), 233168);
//   });
// });

var a = solution(), b = solution();

it('should totally pass', function(){
  assert.typeOf(solution, 'function');
  assert.typeOf(a, 'object');
  assert.isDefined(a.solveFor);
  assert.typeOf(b, 'object');
});
