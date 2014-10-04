// Conway Lite
// Cellular Automaton
// Weekend Assignment

// function board(){
//     return [
//         [ false, false, false ],
//         [ false, true, false ],
//         [ false, false, false ],
//     ];
// }

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
*/

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
//
// var board = [
//     [ false, true, false ],
//     [ false, true, false ],
//     [ false, true, false ],
// ]
//
// var liveCell = 0;
// var win = [];
//
//
//
// var assert = require('assert');
// function test(actual, expected, success){
//     if (success === undefined) success = "Victory, or Death!";
//     assert.strictEqual(actual, expected);
//     console.log(success);
// }



board = [
  [false, false, false],
  [true, true, true],
  [false, false, false],
]

// var tick = [];
// tick.push(newState);
// console.log(tick);

for (i = 0; i < board.length; i++){
    var b = board[i];
    for(j = 0; j < b.length; j++){
        var pos = b[j];

    }
}

var neighbors;
function neighborOf(board, x, y) {
  if (x === 0 && y === 0) {
      neighbors = [board[1][1], board[0][1], board[1][0]];
  }
  if (x === 1 && y === 0) {
      neighbors = [board[1][1], board[0][0], board[0][1], board[2][0], board[2][1]];
  }
  if (x === 2 && y === 0) {
      neighbors = [board[1][1], board[1][0], board[2][1]];
  }
  if (x === 1 && y === 1) {
      neighbors = [board[0][0], board[1][0], board[2][0], board[0][1], board[0][2], board[2][1], board[2][2], board[1][2]];
  }
  if (x === 1 && y === 2) {
      neighbors = [board[1][1], board[0][1], board[0][2], board[2][1], board[2][2]];
  }
  if (x === 2 && y === 1) {
      neighbors = [board[1][1], board[2][0], board[1][0], board[1][2], board[2][2]];
  }
  if (x === 2 & y === 2) {
      neighbors = [board[1][1], board[2][1], board[1][2]];
  }
  if (x === 0 && y === 1) {
      neighbors = [board[1][1], board[0][0], board[1][0], board[0][2], board[1][2]];
  }
  if (x === 0 && y === 2) {
      neighbors = [board[1][1], board[0][1], board[1][2]];
  }
  return neighbors;
}

var newState;
function conway(pos, neighbors){
  var liveBros = 0;
  for (var i = 0; i < neighbors.length; i++){
    if (neighbors[i] === true){
       liveBros++;
    }
  }
    if (pos === false){
      if (liveBros === 3){
        newState = true;
      }
      else {
        newState = false;
      }
    }
    if (pos === true){
      if (liveBros < 2){
        newState = false;
      }
      if (liveBros > 3){
        newState = false;
      }
      else{
        newState = true;
      }
  }

   return newState;
}
