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

// console.log(board.join('\n') + '\n\n');

// Example Move
// Move King's Pawn forward 2
// board[4][4] = board[6][4];
// board[6][4] = ' ';
// console.log(board.join('\n'));

// // White Move 1 (Pawn)
// board[4][2] = board[6][2];
// board[6][2] = ' ';
//
// console.log(board.join('\n'));

// // Black Move 1 (Pawn)
// board[3][3] = board[1][3];
// board[1][3] = ' ';
//
// console.log(board.join('\n'));

// // White Move 2 (Pawn)
// board[4][3] = board[6][3];
// board[6][3] = ' ';
//
// console.log(board.join('\n'));

// // Black Move 2 (Pawn)
// board[2][4] = board[1][4];
// board[1][4] = ' ';
//
// console.log(board.join('\n'));

// // White Move 3 (Knight)
// board[5][5] = board[7][6];
// board[7][6] = ' ';
//
// console.log(board.join('\n'));

// // Black Move 3 (Bishop)
// board[1][4] = board[0][5];
// board[0][5] = ' ';
//
// console.log(board.join('\n'));

// // White Move 4 (Pawn)
// board[5][6] = board[6][6];
// board[6][6] = ' ';
//
// console.log(board.join('\n'));

// // Black Move 4 (Knight)
// board[2][5] = board[0][6];
// board[0][6] = ' ';
//
// console.log(board.join('\n'));

// // White Move 5 (Bishop)
// board[6][6] = board[7][5];
// board[7][5] = ' ';
//
// console.log(board.join('\n'));
//
// var board = [
//   ['R','N','B','Q','K','B','N','R'],
//   ['P','P','P','P','P','P','P','P'],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   [' ',' ',' ',' ',' ',' ',' ',' '],
//   ['p','p','p','p','p','p','p','p'],
//   ['r','n','b','q','k','b','n','r'] ];
//
//
// function catalan(board){
//     var moves = [
//         [ board[4][2], board[6][2] ],
//         [ board[3][3], board[1][3] ],
//         [ board[4][3], board[6][3] ],
//         [ board[2][4], board[1][4] ],
//         [ board[5][5], board[7][6] ],
//         [ board[1][4], board[0][5] ],
//         [ board[5][6], board[6][6] ],
//         [ board[2][5], board[0][6] ],
//         [ board[6][6], board[7][5] ],
//     ];
//     moves.forEach(function(move, index){
//         move.forEach(function(x, y){
//           x = y;
//           y = ' ';
//         });
//     });
//     console.log(board.join('\n'));
// }
//
//
// catalan(board);

// var new = [
//     ['R','N','B','Q','K','B','N','R'],
//     ['P','P','P','P','P','P','P','P'],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     [' ',' ',' ',' ',' ',' ',' ',' '],
//     ['p','p','p','p','p','p','p','p'],
//     ['r','n','b','q','k','b','n','r'] ];
//
// function chess(){
//   var board = [
//       ['R','N','B','Q','K','B','N','R'],
//       ['P','P','P','P','P','P','P','P'],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       ['p','p','p','p','p','p','p','p'],
//       ['r','n','b','q','k','b','n','r'] ];
//   return {
//     move: function(a,b,c,d){
//       board[a][b] = board[c][d];
//       board[c][d] = ' ';
//       return board;
//     }
//   }
// }
//
// var w1 = chess().move(4,2,6,2);
// // var b1 = chess().move(3,3,1,3);
// console.log(w1.join('\n'));

//Fully functional chess game!!!
function chess(){
  this.board = [
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P','P','P','P','P','P'],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p','p','p','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ];

  this  .move = function(a,b,c,d){
      this.board[a][b] = this.board[c][d];
      this.board[c][d] = ' ';
      // console.log(this.board);  Different display method
      return this.board;
  }
}

var game = new chess;  // starts a new game with name of your choice
var w1 = game.move(4,2,6,2);  //white move 1
var b1 = game.move(3,3,1,3);  //black move 1
console.log(w1.join('\n'));
console.log(b1.join('\n'));

var w2 = game.move(4,3,6,3);  //white move 2
var b2 = game.move(2,4,1,4);  //black move 2
var w3 = game.move(5,5,7,6);  //white move 3
var b3 = game.move(1,4,0,5);  //black move 3
var w4 = game.move(5,6,6,6);  //white move 4
var b4 = game.move(2,5,0,6);  //black move 4
var w5 = game.move(6,6,7,5);  //white move 5

console.log(w5.join('\n'));
