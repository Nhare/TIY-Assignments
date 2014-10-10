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
  return{



  }
}
