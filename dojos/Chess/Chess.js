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
  this.q = new Piece('Queen', 'white');
  this.K = new Piece('King', 'black');
  this.k = new Piece('King', 'white');
  this.P = new Piece('Pawn', 'black');
  this.p = new Piece('Pawn', 'white');
  this.B = new Piece('Bishop', 'black');
  this.b = new Piece('Bishop', 'white');
  this.N = new Piece('Knight', 'black');
  this.n = new Piece('Knight', 'white');
  this.R = new Piece('Rook', 'black');
  this.r = new Piece('Rook', 'white');
}


Chess.prototype.move = function(a,b,c,d){
    this.board[a][b] = this.board[c][d];
    this.board[c][d] = ' ';
}

Chess.prototype.display = function(){
  console.log(this.board);
}

function Piece(name, color){
  this.name = name;
  this.color = color;
}

Piece.prototype.getColor = function(){
  return this.color;
}
Piece.prototype.getName = function(){
  return this.name;
}
// Piece.prototype.setPosition = function(x,y){
//
// }
//
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
//
// function Position(x,y){
//
// }
