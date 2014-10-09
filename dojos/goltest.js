
var assert = require('assert');

function conway(cell, neighbors){
    var liveNeighbors = numberOfLiveNeighbors(neighbors);


    }

function numberOfLiveNeighbors(neighbors){
    var liveCells = 0;
    var index = 0;

    while ( index < neighbors.length ){
      if (neighbors[index] === true)
        liveCells++;
      }
      index++;
    }
    return liveCells;

  //  What do I do with neighbors?

  //  if (neighbors[0] === true){
  //      liveCells++;
        //liveCells = liveCells + 1;
        //liveCells += 1;
  //  }
  //  if (neighbors[1] === true){
        liveCells++;
  //  }
  //  if (neighbors[2] === true){
        liveCells++;
  //  }

        //With each neighbor...
      // If neighbor is TRUE
        //add 1 live neighbor
      // Return live neighbors
}

function test_numberOfLiveNeighbors(neighbors, expected, successMessage){
      var actual = numberOfLife Neighbors(neighbors);

      assert(actual === expected) || console.log(message);
}

test_numberOfLiveNeighbors([
      false, false, false,
      false,        false,
      false, false, false
  ]), 0, 'no live neighbors');

test_numberOfLiveNeighbors([
      false, true, false,
      false,        false,
      false, false, false
  ], 1, 'one live neighbor');

var cell = false,
    neighbors = [
      false, false, false, false,
      false, false, false, false,
    ];

assert.equal(conway(cell, neighbors), false,
    'an empty board should remain empty'
) || console.log('Pass');

neighbors = [
false, false,  false,
false,        false,
false, false, false
];

assert.equal(conway(true, neighbors), false,
    'a cell with no neighbors dies'
) || console.log('Pass');

neighbors = [
    false, true,  false,
    false,        false,
    false, false, false
];

assert.equal(conway(true, neighbors), false,
    'a cell with only one neighbor dies'
) || console.log('Pass');

neighbors = [
    true,  true,  false,
    false,        false,
    false, false, false
];

assert.equal(conway(true, neighbors), false,
    'a cell with 2 to 3 living neighbors survives'
) || console.log('Pass');



/** Day TWO 10/02
* For weekend assignment
* Conway's Game of Life
*  - Start with a single 'cell' and a list of 'neighbors'.
*  - When 'conway(cell, neighbors)' is called...
*  - Then calculate and return the state of the 'cell' in the next gen.
*/

assert.equal(true, true);
assert.equal(true, false, 'This is fail');

row = board[1]
cell = row[1]

//board = [
//    [ false, true, false ],
//    [ false, true, false ],
//    [ false, true, false ],
//];

board = [
    [ 0, 1, 0 ],
    [ 0, 1, 0 ],
    [ 0, 1, 0 ],
];


board:
[0,0],[1,0],[2,0]
[0,1],[1,1],[2,1]
[0,2],[1,2],[2,2]

board[1][1]; // Board give me [1,1]
//Item is a list! Loop over to get items.
conway(board[0][0], neighborsOf(0, 0))
conway(board[0][1], neighborsOf(0, 1))
conway(board[0][2], neighborsOf(0, 2))
conway(board[1][1], neighborsOf(1, 1))

// For every cell on the board
neighbors = neighborsOf(row, col); // [ ] of cells

conway(cell, neighbors);
