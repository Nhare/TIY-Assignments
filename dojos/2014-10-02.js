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

/*
var assert = require('assert');

function test(actual, expected, success){
    if (success === undefined) success = 'pass!';

    assert.strictEqual(actual, expected);

    console.log(success);
}
*/

// TESTS NEEDED
// x-1, x-1, x-1, xnc, xnc, x+1, x+1, x+1
// y-1, ync, y+1, y-1, y+1, y-1, ync, y+1

function neighborsOf(board[r][c]){
  var brainFuck = [
      [[r] - 1, [r] - 1, [r] - 1, [r], [r], [r] + 1, [r] + 1,[r] + 1],
      [[c] - 1, [c], [c] + 1, [c] - 1, [c] + 1, [c] - 1, [c], [c] +1 ],
  ]
  for (i = 0; i < brainFuck.length; i++){
    var b = brainFuck[i];
    for(j = 0; j < b.length; j++){
        var x = b[j];
        var win = [];
        win.push(x);
    }
}

var board = [
    [ false, true, false ],
    [ false, true, false ],
    [ false, true, false ],
]

var liveCell = 0;

for (i = 0; i < board.length; i++){
    var b = board[i];
    for(j = 0; j < b.length; j++){
        var x = b[j];
          if(x === true){
            liveCell += 1;
          }
        console.log(x);
    }
}

console.log(liveCell);
