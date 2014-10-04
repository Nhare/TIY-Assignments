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

// var tick = [];
// tick.push(newState);
// console.log(tick);


board = [
  [false, false, false],
  [true, true, true],
  [false, false, false],
]

//var newTick = [];
//function tick(board){

//cycles through board for position
var cellBool = [];
var cellLoc = [];
for (i = 0; i < board.length; i++){
    var b = board[i];
    for(j = 0; j < b.length; j++){
        var pos = b[j];
        var x = i;
        var y = j;
        cellBool.push(pos);
        cellLoc.push(x, y);
        //takes position and checks for neighbors (couldn't figure out my other neighbor code)
        function neighborOf(x, y) {
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
              neighborsAre = [board[0][0], board[1][0], board[2][0], board[0][1], board[0][2], board[2][1], board[2][2], board[1][2]];
            }
            if (x === 1 && y === 2) {
              neighborsAre = [board[1][1], board[0][1], board[0][2], board[2][1], board[2][2]];
            }
            if (x === 2 && y === 1) {
              neighborsAre = [board[1][1], board[2][0], board[1][0], board[1][2], board[2][2]];
            }
            if (x === 2 & y === 2) {
              neighborsAre = [board[1][1], board[2][1], board[1][2]];
            }
            if (x === 0 && y === 1) {
              neighborsAre = [board[1][1], board[0][0], board[1][0], board[0][2], board[1][2]];
            }
            if (x === 0 && y === 2) {
              neighborsAre = [board[1][1], board[0][1], board[1][2]];
            }
        }

        //takes poistion/neighors and runs them through conway's rule set
        var newState = false;
        function conway(pos, neighborsAre){
            var liveBros = 0;

            for (var n = 0; n < neighbors.length; n++){
              if (neighbors[n] === true){
                liveBros++;
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
             //adding them into a new array "newTick" (Doesn't seem to work yet!!)
           }
        }
    }
}
//
// once I figure out the single list for tick, can experiment returning a list of lists
// console.log(newTick);
console.log("Cell states are: " + cellBool);
console.log("Cell coords are: "+ cellLoc);
console.log("\nVictory, or Death!");
