// Chess
/*
@constructor Chess: Setup a board with Pieces representing an initial chessboard.
  @method getPlayer()
  @return String either "white" or "black" representing current player
  @method display()
  @return String representation of board
  @method move(piece, destination): Move piece to destination and...?
  @param Piece piece to move
  @param Position destination to move piece to
  @method opening(): Advance the board to Catalan Opening, Closed Variation
@constructor Position(x,y): Represent a position on a chessboard with coordinates
  usage: new Position(1,1)
  @property Number x coordinate
  @property Number y coordinate
@constructor Piece(name, color): Represent a chesspiece on the board with name and color and appropriate starting position
  usage: new Piece('Queen', 'black')
  @method getName()
  @return String name of Piece, e.g. 'Queen', 'Pawn'
  @method getColor():
  @return String player 'black' or 'white'
  @method setPosition(position): Set Piece to position on board
  @param Position position
  @method toString()
  @return String representation of Piece
    example: "Q" === String(new Piece("Queen", "white"))
    example: "r" === String(new Piece("Rook", "black"))
*/

// Production Code

module.exports = Chess,Position,Piece,Board;
var _ = require('lodash');
// var board = [
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '] ];
    // ['R','N','B','Q','K','B','N','R'],
    // ['P','P','P','P','P','P','P','P'],
    // [' ',' ',' ',' ',' ',' ',' ',' '],
    // [' ',' ',' ',' ',' ',' ',' ',' '],
    // [' ',' ',' ',' ',' ',' ',' ',' '],
    // [' ',' ',' ',' ',' ',' ',' ',' '],
    // ['p','p','p','p','p','p','p','p'],
    // ['r','n','b','q','k','b','n','r'] ];

// function keyFor(x,y){
//     return x + ',' + y;
// }
// board = [
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '],
//       [' ',' ',' ',' ',' ',' ',' ',' '] ];
function Board(){
}
//   return [
//         [' ',' ',' ',' ',' ',' ',' ',' '],
//         [' ',' ',' ',' ',' ',' ',' ',' '],
//         [' ',' ',' ',' ',' ',' ',' ',' '],
//         [' ',' ',' ',' ',' ',' ',' ',' '],
//         [' ',' ',' ',' ',' ',' ',' ',' '],
//         [' ',' ',' ',' ',' ',' ',' ',' '],
//         [' ',' ',' ',' ',' ',' ',' ',' '],
//         [' ',' ',' ',' ',' ',' ',' ',' '] ];
// }

function Chess(){
  this.board = new Board();
  var pointValues = { 'Pawn': 1, 'Bishop': 3, 'Knight': 3, 'Rook': 5, 'Queen': 9 }
  this.Q = new Piece('Queen', 'black', [0,3]);
  this.q = new Piece('Queen', 'white', [7,3]);
  this.K = new Piece('King', 'black', [0,4]);
  this.k = new Piece('King', 'white', [7,4]);
  this.P1 = new Piece('Pawn', 'black', [1,0]);
  this.P2 = new Piece('Pawn', 'black'. [1,1]);
  this.P3 = new Piece('Pawn', 'black', [1,2]);
  this.P4 = new Piece('Pawn', 'black', [1,3]);
  this.P5 = new Piece('Pawn', 'black', [1,4]);
  this.P6 = new Piece('Pawn', 'black', [1,5]);
  this.P7 = new Piece('Pawn', 'black', [1,6]);
  this.P8 = new Piece('Pawn', 'black', [1,7]);
  this.p1 = new Piece('Pawn', 'white' [6,0]);
  this.p2 = new Piece('Pawn', 'white', [6,1]);
  this.p3 = new Piece('Pawn', 'white', [6,2]);
  this.p4 = new Piece('Pawn', 'white', [6,3]);
  this.p5 = new Piece('Pawn', 'white', [6,4]);
  this.p6 = new Piece('Pawn', 'white', [6,5]);
  this.p7 = new Piece('Pawn', 'white', [6,6]);
  this.p8 = new Piece('Pawn', 'white', [6,7]);
  this.qB = new Piece('Bishop', 'black'[0,2]);
  this.kB = new Piece('Bishop', 'black', [0,5]);
  this.qb = new Piece('Bishop', 'white', [7,2]);
  this.kb = new Piece('Bishop', 'white', [7,5]);
  this.qN = new Piece('Knight', 'black', [0,1]);
  this.kN = new Piece('Knight', 'black', [0,6]);
  this.qn = new Piece('Knight', 'white', [7,1]);
  this.kn = new Piece('Knight', 'white', [7,6]);
  this.qR = new Piece('Rook', 'black', [0,0]);
  this.kR = new Piece('Rook', 'black', [0,7]);
  this.qr = new Piece('Rook', 'white', [7,0]);
  this.kr = new Piece('Rook', 'white', [7,7]);
  // this.blackPieces = [this.Q, this.K, this.P, this.B, this.N, this.R];
  // this.whitePieces = [this.q, this.k, this.p, this.b, this.n, this.r];
}

Chess.prototype.move = function(piece, destination){

}
// Chess.prototype.move = function(a,b,c,d){
    // this.board[a][b] = this.board[c][d];
    // this.board[c][d] = ' ';
    // board[a][b] = board[c][d];
    // board[c][d] = ' ';
// }

Chess.prototype.display = function(){
  // console.log(board);
  // var spacer = '+---+---+---+---+---+---+---+---+\n';
  //   return spacer +
  //       this.board.map(function renderRow(row){
  //           return '| ' +
  //               row.map(function renderCell(position){
  //                   return position && 'Q' || ' ';
  //               }).join(' | ')
  //           + ' |\n';
  //       }).join(spacer)
  //   + spacer;
}

function Piece(name, color, position){
  this.name = name;
  this.color = color;
  this.position = position;
}

Piece.prototype.getColor = function(){
  return this.color;
}

Piece.prototype.getName = function(){
  return this.name;
}

Piece.prototype.toString = function(){
  if(this.name === 'Queen'){
    if(this.color === 'white'){
      return 'q';
    }
    else{
      return 'Q'
    }
  }
  if(this.name === 'King'){
    if(this.color === 'white'){
      return 'k';
    }
    else{
      return 'K';
    }
  }
  if(this.name === 'Rook'){
    if(this.color === 'white'){
      return 'r';
    }
    else{
      return 'R';
    }
  }
  if(this.name === 'Knight'){
    if(this.color === 'white'){
      return 'n';
    }
    else{
      return 'N';
    }
  }
  if(this.name === 'Bishop'){
    if(this.color === 'white'){
      return 'b';
    }
    else{
      return 'B';
    }
  }
  if(this.name === 'Pawn'){
    if(this.color === 'white'){
      return 'p';
    }
    else{
      return 'P';
    }
  }
}

Piece.prototype.setPosition = function(position){
  var x,y;
  this.position = position;
  position = new Position(x,y)
// Piece.prototype.setPosition = function(x,y){
  // board[x][y] = this.toString();
}

function Position(x,y){
  this.x = x;
  this.y = y;
  return [x,y];
  // board[x][y] = this.toString();
}
