/* Euler Problem 2

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

function euler2(prev, curr){
  var sum = 0;
  for (curr = curr; curr < 4000000; curr = prev + curr){
    console.log('prev is ', prev, ' and curr is ',curr)
    prev = curr - prev;
    if (curr % 2 === 0){
      sum += curr;
    }
  }
  console.log("\nVictory, or Death!\n")
  return sum;
}

console.log(euler2(1, 2));

*/

function solution(){
  var fiboSeq = [];
  var evens = [];
  var sum = 0;
  return {
    solveFor: function(limit){
      return this.sumEvens(
          this.filterEvens(
              this.fibo(limit)
          )
      );
    },
    // Creates the fibonacci sequence
    fibo: function(limit){
      var prev = 1, curr = 2;
      for (curr = curr; curr < limit; curr = prev + curr){
        prev = curr - prev;
        fiboSeq.push(curr);
      }
      //returns Fibonacci Sequence.
      return fiboSeq;
    },
    //Filters the even numbers out of the Fibonacci Sequence generated
    //by object fibo.
    filterEvens: function(fiboSeq){
      fiboSeq.forEach(function(value, index){
        if (value % 2 === 0){
          evens.push(value);
        }
      });
      //returns a list of the even numbers pulled from fibo.
      return evens;
    },
    //Adds all the values from the list of even numbers generated
    //above by filterEvens.
    sumEvens: function(evens){
      evens.forEach(function(value, index){
        sum += value;
      });
      //returns the sum.
      return sum;
    }
  }
}

// console.log(solution().fibo(100, 1, 2));
// console.log(solution().fibo(4000000, 1, 2));
var seqF = solution().fibo(100, 1, 2);
var evenF =  solution().filterEvens(seqF);
var victory = solution().sumEvens(evenF);
var seqBig = solution().fibo(4000000, 1, 2);
var evenBig =  solution().filterEvens(seqBig);
var bigVictory = solution().sumEvens(evenBig);
console.log(seqF);
console.log(evenF);
console.log(victory);
console.log(bigVictory);


var assert = require('chai').assert
describe('Project Euler #1', function(){
    var S; // or var S = solution();

    beforeEach(function(){
        S = solution();
    });
    describe('solveFor', function(){
        it('should have a function for doing this', function(){
            assert.isFunction(S.solveFor);
        });

        it('should be able to solve euler 2', function(){
            assert.equal(S.solveFor(100, 1, 2), 44);
        });
        it('should be able to solve euler 2', function(){
            assert.equal(S.solveFor(4000000, 1, 2), 4613732);
        });

    });
});


// 10 - 13 - 2014 Notes
/**
 * @return Object containing `solveFor`, a method that solves Project Euler #2 for a given limit
 */
// function solution(){
//     return {
//         /**
//          * Find the sum of the even-numbered terms in the Fibonacci Sequence less
//          * than `limit`
//          *
//          * @param Number limit e.g. 4 MILLION!
//          * @return Number sum of even fibonacci terms less than limit
//          */
//         solveFor: function(limit){
//             return this.sum(
//                 this.filterEvens(
//                     this.fibonacci(limit)
//                 )
//             );
//         },
//
//         /**
//          * @param Number limit
//          * @return Array of Number in fibonacci sequence up to limit
//          */
//         fibonacci: function(limit){
//             var prev = 1, curr = 2, temp;
//             var sequence = [ 1, 2 ];
//
//             if ( limit < 3 ){
//                 return [ ];
//             }
//
//             /**
//              * prev = 1, curr = 2, temp = undefined;
//              * while 1 + 2 < 5
//              *   temp = 1 + 2 = 3
//              *   prev = curr = 2
//              *   curr = temp = 3
//              */
//             while ( prev + curr < limit ){
//                 temp = prev + curr;
//                 prev = curr;
//                 curr = temp;
//
//                 sequence.push(temp);
//             }
//             return sequence;
//         },
//
//         /**
//          * @param Array list of Number
//          * @return Array of even-valued Number
//          */
//         filterEvens: function(list){
//             /**
//              * list = [ 1 ], item = 1
//              * item (1) % 2 == 1
//              *
//              * list = [ 2 ], item = 2
//              * item (2) % 2 == 0
//              *
//              * list = [ 3 ], item = 3
//              * item (3) % 2 == 1
//              */
//             return list.filter(function(item){
//                 return ( item % 2 === 0 );
//             });
//         },
//
//         /**
//          * @param Array list of Number
//          * @return Number sum of all items in list
//          */
//         sum: function(list){
//             /**
//              * list = [ 1, 2, 3 ]
//              *
//              * prev = init = 0 from reduce(list, init)
//              * item = 1
//              * return 0 + 1 = 1
//              *
//              * prev = 1 (returned)
//              * item = 2
//              * return 1 + 2 = 3
//              *
//              * prev = 3 (returned)
//              * item = 3
//              * return 3 + 3 = 6
//              */
//             return list.reduce(function(prev, item){
//                 return prev + item;
//             }, 0);
//         }
//     };
// } // END solution
//
//
// /** === TESTING CODE === **/
// var assert = require('chai').assert
//
// describe('Project Euler #1', function(){
//     var S; // or var S = solution();
//
//     beforeEach(function(){
//         S = solution();
//     });
//
//     describe('fibonacci sequence', function(){
//         it('should have a function for doing this', function(){
//             assert.isFunction(S.fibonacci);
//             assert.deepEqual(S.fibonacci(0), [ ]);
//         });
//
//         it('should calculate fibonacci numbers for a small sample', function(){
//             assert.deepEqual(S.fibonacci(5), [ 1, 2, 3 ]);
//             assert.deepEqual(S.fibonacci(10), [ 1, 2, 3, 5, 8 ]);
//             assert.deepEqual(S.fibonacci(20), [ 1, 2, 3, 5, 8, 13]);
//             assert.deepEqual(S.fibonacci(40), [
//                 1, 2, 3, 5, 8, 13, 21, 34
//             ]);
//         });
//     });
//
//     describe('filterEvens', function(){
//         it('should have a function for doing this', function(){
//             assert.isFunction(S.filterEvens);
//             assert.deepEqual(S.filterEvens([ ]), [ ]);
//         });
//
//         it('should filter out evens', function(){
//             assert.deepEqual(S.filterEvens([ 1 ]), [ ]);
//             assert.deepEqual(S.filterEvens([ 2 ]), [ 2 ]);
//
//             assert.deepEqual(S.filterEvens([ 1, 2 ]), [ 2 ]);
//             assert.deepEqual(S.filterEvens([ 1, 2, 3 ]), [ 2 ]);
//         });
//     });
//
//     describe('sum values in a list', function(){
//         it('should have a function for doing this', function(){
//             assert.isFunction(S.sum);
//             assert.equal(S.sum([ ]), 0);
//         });
//
//         it('should sum items', function(){
//             assert.equal(S.sum([ 1 ]), 1);
//             assert.equal(S.sum([ 2 ]), 2);
//
//             assert.equal(S.sum([ 1, 1 ]), 2);
//             assert.equal(S.sum([ 1, 2 ]), 3);
//
//             assert.equal(S.sum([ 1, 2, 3 ]), 6);
//             assert.equal(S.sum([ 2, 2, 2 ]), 6);
//             assert.equal(S.sum([ 3, 1, 4 ]), 8);
//         });
//     });
//
//     describe('solveFor', function(){
//         it('should have a function for doing this', function(){
//             assert.isFunction(S.solveFor);
//         });
//
//         it('should be able to solve simple examples', function(){
//             assert.equal(S.solveFor(0), 0);
//             assert.equal(S.solveFor(3), 2); // FAIL!
//             assert.equal(S.solveFor(5), 2);
//             assert.equal(S.solveFor(15), 10);
//         });
//
//         it('should calculate the final answer', function(){
//             console.time('4M');
//             console.log(S.solveFor(4.0e12));
//             console.timeEnd('4M');
//         });
//     });
// });
