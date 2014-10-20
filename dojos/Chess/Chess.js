// Chess
// Production Code

module.exports = {"chess": Chess, 'position': Position, 'piece': Piece};
var _ = require('lodash');

function Chess(){
  var pointValues = { 'Pawn': 1, 'Bishop': 3, 'Knight': 3, 'Rook': 5, 'Queen': 9 }
  this.Q =  new Piece('Queen', 'black', [0,3]);
  this.q =  new Piece('Queen', 'white', [7,3]);
  this.K =  new Piece('King', 'black', [0,4]);
  this.k =  new Piece('King', 'white', [7,4]);
  this.P1 = new Piece('Pawn', 'black', [1,0]);
  this.P2 = new Piece('Pawn', 'black', [1,1]);
  this.P3 = new Piece('Pawn', 'black', [1,2]);
  this.P4 = new Piece('Pawn', 'black', [1,3]);
  this.P5 = new Piece('Pawn', 'black', [1,4]);
  this.P6 = new Piece('Pawn', 'black', [1,5]);
  this.P7 = new Piece('Pawn', 'black', [1,6]);
  this.P8 = new Piece('Pawn', 'black', [1,7]);
  this.p1 = new Piece('Pawn', 'white', [6,0]);
  this.p2 = new Piece('Pawn', 'white', [6,1]);
  this.p3 = new Piece('Pawn', 'white', [6,2]);
  this.p4 = new Piece('Pawn', 'white', [6,3]);
  this.p5 = new Piece('Pawn', 'white', [6,4]);
  this.p6 = new Piece('Pawn', 'white', [6,5]);
  this.p7 = new Piece('Pawn', 'white', [6,6]);
  this.p8 = new Piece('Pawn', 'white', [6,7]);
  this.qB = new Piece('Bishop', 'black', [0,2]);
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
}

Chess.prototype.move = function(piece, destination){
  var x,y,active;
  active = piece;
  piece.position = destination;
  destination = new Position(x,y)
}


Chess.prototype.display = function(){
  var board = Array.matrix(8,8,0);
  var pieces = [this.Q, this.q, this.K, this.k, this.P1, this.P2, this.P3,
                this.P4, this.P5, this.P6, this.P7, this.P8, this.p1, this.p2,
                this.p3, this.p4, this.p5, this.p6, this.p7, this.p8, this.qB,
                this.kB, this.qb, this.kb, this.qN, this.kN, this.qn, this.kn,
                this.qR,this.kR, this.qr, this.kr];
  pieces.forEach(function(value, index){
    var x = pieces[index].position[0];
    var y = pieces[index].position[1];
    board[x][y] = pieces[index].toString();
  })
  var spacer = '+---+---+---+---+---+---+---+---+\n';
    return spacer +
        board.map(function renderRow(row){
          return '| ' +
              row.map(function renderPosition(position){
                    if(position === 0){
                      return ' ';
                    }
                    else{
                      return position;
                    }
              }).join(' | ')
          + ' |\n';
        }).join(spacer)
    + spacer;
}

Chess.prototype.opening = function(){
  console.log(this.display());
  this.move(this.p3, [4,2]); // white move 1
  console.log(this.display());
  this.move(this.P4, [3,3]); // black move 1
  this.move(this.p4, [4,3]); // white move 2
  this.move(this.P5, [2,4]); // black move 2
  this.move(this.kn, [5,5]); // white move 3
  this.move(this.kB, [1,4]); // black move 3
  this.move(this.p7, [5,6]); // white move 4
  this.move(this.kN, [2,5]); // black move 4
  this.move(this.kb, [6,6]); // white move 5
  console.log(this.display());
}

Array.matrix = function(numrows, numcols, initial){
   var arr = [];
   for (var i = 0; i < numrows; ++i){
      var columns = [];
      for (var j = 0; j < numcols; ++j){
         columns[j] = initial;
      }
      arr[i] = columns;
    }
    return arr;
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
}

function Position(x,y){
  this.x = x;
  this.y = y;
  return [x,y];
}
