
var assert = require('assert');

function conway(cell, neighbors){
  if (liveNeighbors >= 2)
      return true;
}

function numberOfLiveNeighbors(neighbors){
   //What do I do with neighbors?

    if (neighbors[0] === true){
        return 1;
    }
    if (neighbors[1] === true){
        return 1;
    }
    
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
