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

function Board(){
}

// function keyFor(x,y){
//     return x + ',' + y;
// }

function Board(){
}

function Position(x,y){
  return x + ',' + y;
}

function Chess(){
  this.board = new Board();
  var pointValues = { 'Pawn': 1, 'Bishop': 3, 'Knight': 3, 'Rook': 5, 'Queen': 9 };
  this.Q = new Piece('Queen', 'black');
  // this.Q.setPosition(0,3);
  this.q = new Piece('Queen', 'white');
  // this.q.setPosition(7,3);
  this.K = new Piece('King', 'black');
  // this.K.setPosition(0,4);
  this.k = new Piece('King', 'white');
  // this.k.setPosition(7,4);
  this.P = new Piece('Pawn', 'black');
  // this.P.setPosition(1,0);
  // this.P.setPosition(1,1);
  // this.P.setPosition(1,2);
  // this.P.setPosition(1,3);
  // this.P.setPosition(1,4);
  // this.P.setPosition(1,5);
  // this.P.setPosition(1,6);
  // this.P.setPosition(1,7);
  this.p = new Piece('Pawn', 'white');
  // this.p.setPosition(6,0);
  // this.p.setPosition(6,1);
  // this.p.setPosition(6,2);
  // this.p.setPosition(6,3);
  // this.p.setPosition(6,4);
  // this.p.setPosition(6,5);
  // this.p.setPosition(6,6);
  // this.p.setPosition(6,7);
  this.B = new Piece('Bishop', 'black');
  // this.B.setPosition(0,2);
  // this.B.setPosition(0,5);
  this.qb = new Piece('Bishop', 'white');
  // this.qb.setPosition(7,2);
  this.kb = new Piece('Bishop', 'white');
  // this.kb.setPosition(7,5);
  this.N = new Piece('Knight', 'black');
  // this.N.setPosition(0,1);
  // this.N.setPosition(0,6);
  this.n = new Piece('Knight', 'white');
  // this.n.setPosition(7,1);
  // this.n.setPosition(7,6);
  this.R = new Piece('Rook', 'black');
  // this.R.setPosition(0,0);
  // this.R.setPosition(0,7);
  this.r = new Piece('Rook', 'white');
  // this.r.setPosition(7,0);
  // this.r.setPosition(7,7);
  // this.blackPieces = [this.Q, this.K, this.P, this.B, this.N, this.R];
  // this.whitePieces = [this.q, this.k, this.p, this.b, this.n, this.r];
}

Chess.prototype.move = function(piece, destination){
    // this.board[a][b] = this.board[c][d];
    // this.board[c][d] = ' ';
    // board[a][b] = board[c][d];
    // board[c][d] = ' ';
}

Chess.prototype.display = function(){
  // console.log(board);
  var spacer = '+---+---+---+---+---+---+---+---+\n';
    return spacer +
        this.board.map(function renderRow(row){
            return '| ' +
                row.map(function renderCell(position){
                    return position && 'Q' || ' ';
                }).join(' | ')
            + ' |\n';
        }).join(spacer)
    + spacer;
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

Piece.prototype.setPosition = function(){

}

function Position(x,y){
  return x + ',' + y;
}
