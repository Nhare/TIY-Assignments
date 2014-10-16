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

module.exports = Chess;
var _ = require('lodash');

function Chess(){
  this.board = [
      ['R','N','B','Q','K','B','N','R'],
      ['P','P','P','P','P','P','P','P'],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      [' ',' ',' ',' ',' ',' ',' ',' '],
      ['p','p','p','p','p','p','p','p'],
      ['r','n','b','q','k','b','n','r'] ];

  var pointValues = { 'Pawn': 1, 'Bishop': 3, 'Knight': 3, 'Rook': 5, 'Queen': 9 };
  this.Q = new Piece('Queen', 'black');
}


Chess.prototype.move = function(a,b,c,d){
    this.board[a][b] = this.board[c][d];
    this.board[c][d] = ' ';
    // return this.board;
}

Chess.prototype.display = function(){
  console.log(this.board);
}


// var w1 = game.move(4,2,6,2);
// console.log(w1);
// game.display();
// var b1 = game.move(3,3,1,3);
// game.display();
// console.log(b1);
//
function Piece(name, color){
  this.name = name;
  this.color = color;
}

Piece.prototype.getColor = function(){
  return this.color;
  // if(piece === piece.toLowerCase()){
  //    return 'white';
  // }
  // return 'black';
}
Piece.prototype.getName = function(){
  return this.name;
 // if(piece === 'Q' || piece === 'q')
 //   return 'Queen';
}

// var Q = new Piece('Queen', 'black');
// console.log(Q);
// console.log(Q.getName());
// console.log(Q.getColor());
//
// var K = new Piece('King', 'white');
//
// console.log(K);
// console.log(K.getName());
// console.log(K.getName === Q.getName);
// console.log(K === Q);
// console.log(K.prototype === Q.prototype)
// Piece.prototype.setPosition = function(x,y){
//
// }
//
// Piece.prototype.toString = function(){
//
// }
//
// function Position(x,y){
//
// }
