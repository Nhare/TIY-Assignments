
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




/**
 *Check Writing
 *
 *Given a Number representing monet -- $1234.56 -- convert that
 *into it's string representation in English words. For example,
 *1234.56 is "one thousand, two hundred thirty four and 56/100s",
 *just like you see on a check.

 *In a lot of ways, this is the inverse of the :String Calculator"
 *problem, so a lot of what you've learned will be put into practice
 *here, but backwards. Hooray!
 */

 /**
  *Sample Data:
  *
  *1234.56 => "one thousand, two hundred thirty four and 56/100s"
  *123.45 => "one hundred twent three and 45/100s"
  *12.34 => "twelve and 34/100s"
  *1.23 => "one and 23/100s"
  *
  *Make up your own, too.
  */
