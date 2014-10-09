//Catalan Opening
/*

Just for me to visualize!

['0,0','0,1','0,2','0,3','0,4','0,5','0.6','0,7']
['1,0',                                         ]
['2,0',                                         ]
['3,0',                                         ]
['4,0',                                         ]
['5,0',                                         ]
['6,0',                                         ]
['7,0',                                         ]

*/
var assert = require('chai').assert;

var board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ];

// console.log(board.join('\n') + '\n\n');

// Example Move
// Move King's Pawn forward 2
// board[4][4] = board[6][4];
// board[6][4] = ' ';
// console.log(board.join('\n'));

// White Move 1 (Pawn)
board[4][2] = board[6][2];
board[6][2] = ' ';

// Black Move 1 (Pawn)
board[3][3] = board[1][3];
board[1][3] = ' ';

// White Move 2 (Pawn)
board[4][3] = board[6][3];
board[6][3] = ' ';

// Black Move 2 (Pawn)
board[2][4] = board[1][4];
board[1][4] = ' ';

// White Move 3 (Knight)
board[5][5] = board[7][6];
board[7][6] = ' ';

// Black Move 3 (Bishop)
board[1][4] = board[0][5];
board[0][5] = ' ';

// White Move 4 (Pawn)
board[5][6] = board[6][6];
board[6][6] = ' ';

// Black Move 4 (Knight)
board[2][5] = board[0][6];
board[0][6] = ' ';

// White Move 5 (Bishop)
board[6][6] = board[7][5];
board[7][5] = ' ';

console.log(board.join('\n'));
