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
*/

function test(actual, expected, success){
    if (success === undefined) success = "Victory, or Death.";
    assert.strictEqual(actual, expected);
    console.log(success);
}

board = [
  [false, true, false],
  [false, true, false],
  [false, true, false],
]

var neighborsAre;
  if (x === 0 && y === 0) {
    neighborsAre = [board[1][1], board[0][1], board[1][0]];
  }
  if (x === 1 && y === 0) {
    neighborsAre = [board[1][1], board[0][0], board[0][1], board[2][0], board[2][1]];
  }
  if (x === 2 && y === 0) {
    neighborsAre = [board[1][1], board[1][0], board[2][1]];
  }
  if (x === 1 && y === 1) {
    neighborsAre = [board[0][0], board[1][0], board[2][0], board[0][1], board[0][2], board[2][1], board[2][2], board[1]         [2]];
  }
  if (x === 1 && y === 2) {
    neighborsAre = [board[1][1], board[0][1], board[0][2], board[2][1], board[2][2]];
  }
  if (x === 2 && y === 1) {
    neighborsAre = [board[1][1], board[2][0], board[1][0], board[1][2], board[2][2]];
  }
  if (x === 2 && y === 2) {
    neighborsAre = [board[1][1], board[2][1], board[1][2]];
  }
  if (x === 0 && y === 1) {
    neighborsAre = [board[1][1], board[0][0], board[1][0], board[0][2], board[1][2]];
  }
  if (x === 0 && y === 2) {
    neighborsAre = [board[1][1], board[0][1], board[1][2]];
  }
  return neighborsAre;
}
//takes poistion/neighors and runs them through conway's rule set
// var newState = [];
// var newState;
// function conway(position, neighborsAre){
//     var liveN = 0;
//     for (var i = 0; n < neighborsAre.length; i++){
//       if (neighborsAre[i] === true){
//           liveN++;
//       }
//       if (position === false){
//         if (liveN === 3){
//           newState = true;
//         }
//         else {
//           newState = false;
//         }
//       }
//       if (position === true){
//         if (liveN < 2){
//           newState = false;
//         }
//         if (liveN > 3){
//           newState = false;
//         }
//         else{
//           newState = true;
//         }
//       }
//     }
//     return newState;
// }

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
// board = [
//   [false, false, false],
//   [true, true, true],
//   [false, false, false],
// ]
//
// //cycles through board for position
// var cellBool = [];
// var cellLoc = [];
// for (i = 0; i < board.length; i++){
//     var b = board[i];
//     for(j = 0; j < b.length; j++){
//         var pos = b[j];
//         var x = i;
//         var y = j;
//         cellBool.push(pos);
//         cellLoc.push([x, y]);
//     }
// }
//
//
// var cellBros = [];
// for (k = 0; k < cellLoc.length; k++){
//   var l = cellLoc[l];
//   for (l = 0; j < cellLoc.length; l++){
//   }
// }

//adding them into a new array "newTick" (Doesn't seem to work yet!!)

//
// once I figure out the single list for tick, can experiment returning a list of lists
// console.log(newTick);
// console.log(cellBool);
// console.log(cellLoc);
// console.log(cellBros);
// console.log("\nVictory, or Death!");
