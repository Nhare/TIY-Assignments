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
    // Creates the Fibonacci Sequence with the starting Values.
    fibo: function(limit, prev, curr){
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
