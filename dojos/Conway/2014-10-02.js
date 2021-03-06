// Conway Lite
// Cellular Automaton
// Weekend Assignment
/*
 * Write a function called `conway` that...
 *
 * - GIVEN the state of a `cell` and a list of neighboring cells...
 * - THEN returns the state of the `cell` with the rules applied.
 *
 * Write a function called `neighborsOf` that...
 *
 * - GIVEN a `board` and `row` and `col` coordinates...
 * - THEN returns a list of the neighboring cells.
 *
 * Write a function called `tick` that...
 *
 * - GIVEN a `board`...
 * - THEN returns a NEW `board` representing the next generation.
// */
var assert = require('assert');

//determine neighbors

function neighborOf(board, x, y){
  var neighborsAre;
  if (x === 0 && y === 0){
    neighborsAre = [board[1][1], board[0][1], board[1][0]];
  }
  if (x === 1 && y === 0){
    neighborsAre = [board[1][1], board[0][0], board[0][1], board[2][0], board[2][1]];
  }
  if (x === 2 && y === 0){
    neighborsAre = [board[1][1], board[1][0], board[2][1]];
  }
  if (x === 1 && y === 1){
    neighborsAre = [board[0][0], board[1][0], board[2][0], board[0][1], board[0][2], board[2][1], board[2][2], board[1]         [2]];
  }
  if (x === 1 && y === 2){
    neighborsAre = [board[1][1], board[0][1], board[0][2], board[2][1], board[2][2]];
  }
  if (x === 2 && y === 1){
    neighborsAre = [board[1][1], board[2][0], board[1][0], board[1][2], board[2][2]];
  }
  if (x === 2 && y === 2){
    neighborsAre = [board[1][1], board[2][1], board[1][2]];
  }
  if (x === 0 && y === 1){
    neighborsAre = [board[1][1], board[0][0], board[1][0], board[0][2], board[1][2]];
  }
  if (x === 0 && y === 2){
    neighborsAre = [board[1][1], board[0][1], board[1][2]];
  }
  return neighborsAre; //Returns neighbors
}

//takes poistion/neighors and runs them through conway's rule set
//conway's rules
// 1: Fewer than two live nieghbors dies. Under-population.
// 2: Two or thee live neighbors lives on to the next generation.
// 3: More than three live neighbors dies. Overcrowding.
// 4: Exactly three live neighbors will bring life. Reproduction.
function conway(position, neighborsAre){
    var liveN = 0;
    var newState;
    neighborsAre.forEach(function(value, index){
      if (value === true){
          liveN++;
      }
      if (position === false){
        if (liveN === 3){
          newState = true;
        }
        else {
          newState = false;
        }
      }
      if (position === true){
        if (liveN < 2){
          newState = false;
        }
        if (liveN > 3){
          newState = false;
        }
        //using an ELSE here was crushing my tests, learned something valuable
        if (liveN === 2 || liveN === 3){
          newState = true;
        }
      }
    });
    return newState;
}
//Putting it all together for a new game board
function tick(board){
  var boardNewTick = [] //store new board
  board.forEach(function(value, index){
      value.forEach(function(x, y){
  // for (var i = 0; i < board.length; i++){
  //   for (var j = 0; j < board[i].length; j++){
      boardNewTick.push(conway(board[index][y], neighborOf(board, index, y)));
    });
  });
  //credit to Ari here for alerting me to go read up on .splice
  //solved my initial problem with my first try at this which was
  //creating a newTick in proper format. List of lists/array of arrays.
  var row1 = boardNewTick.splice(0, 3);
  var row2 = boardNewTick.splice(0, 3);
  board = [row1, row2, boardNewTick];
  return board;
}

//THE TEST
function test(board){
  var newTick = tick(board);
  console.log("Initial Board")
  console.log(board);
  console.log("\n");
  console.log("After One Tick")
  console.log(newTick);
  console.log("\n");
  console.log("\n");
}

//boards
var board = [
    [false, true, false],
    [false, true, false],
    [false, true, false],
]

var board2 = [
    [false, false, false],
    [false, true , false],
    [false, false, false],
]
var board3 = [
    [false, false, false],
    [false, false, false ],
    [false, false, false],
]
var board4 = [
    [false, false, false],
    [false, true, false],
    [false, true, false],
]

test(board);
test(board2);
test(board3);
test(board4);

//Trying to figure out how to approach this, made me laugh.
//Kept it here to come back to it one day and tackle it.
//
// TESTS NEEDED
// x-1, x-1, x-1, xnc, xnc, x+1, x+1, x+1
// y-1, ync, y+1, y-1, y+1, y-1, ync, y+1
//
// function neighborsOf(board[r][c]){
//   var brainFuck = [
//       [[r] - 1, [r] - 1, [r] - 1, [r], [r], [r] + 1, [r] + 1,[r] + 1],
//       [[c] - 1, [c], [c] + 1, [c] - 1, [c] + 1, [c] - 1, [c], [c] +1 ],
//   ]
// }
