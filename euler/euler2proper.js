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
  return {
    fibo: function(limit, prev, curr){
      var fiboSeq = [];
      for (curr = curr; curr < limit; curr = prev + curr){
        prev = curr - prev;
        fiboSeq.push(curr);
      }
      return fiboSeq;
    },

    filterEvens: function(index){
      var evens = [];
      fiboSeq.forEach(function(value, index){
        if (value % 2 === 0){
          evens.push(value);
        }
      });
      return evens;
    },

    sum: function(evens){
      sumEvens = 0;
      evens.forEach(function(value, index){
        sumEvens += sumEvens
      });
      return sumEvens;
    }
  }
}

var seqF = solution().fibo(100, 1, 2);
var evenF =  solution().filterEvens(seqF);
var victoryD = solution().sum(evenF);
console.log(victoryD);

// console.log(solution());

// console.log(solution().(4000000, 1, 2);

// function sum(evens);
//   sumEvens = 0;
//   forEach(function(value, index){
//     sumEvens += sumEvens
//   });
//   return sumEvens;
// }
