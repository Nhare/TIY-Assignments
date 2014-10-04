// Conway Lite
// Cellular Automaton
// Weekend Assignment

/**var assert = require('assert');

function test(actual, expected, success){
    if (success === undefined) success = 'pass!';

    assert.strictEqual(actual, expected);

    console.log(success);
}
*/

// function board(){
//     return [
//         [ false, false, false ],
//         [ false, true, false ],
//         [ false, false, false ],
//     ];
// }

// neighbors = neighborsOf(row, col);
//
// conway(cell, neighbors);

var board = [
    [ false, true, false ],
    [ false, true, false ],
    [ false, true, false ],
]

for (i = 0; i < board.length; i++){
    var b = board[i];
    for(j = 0; j < b.length; j++){
        var x = b[j];
        console.log(x);
    }
}
