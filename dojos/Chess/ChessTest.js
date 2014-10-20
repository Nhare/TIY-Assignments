// Chess Test Code

var Chess = require('./Chess.js').chess;
var Position = require('./Chess.js').position;
var Piece = require('./Chess.js').piece;
var _ = require('lodash');
var assert = require('chai').assert;
var expect = require('chai').expect;

var game = new Chess;

// console.log(game.display());
// game.move(game.p3, [4,2]); // white move 1
// game.move(game.P4, [3,3]); // black move 1
// game.move(game.p4, [4,3]); // white move 2
// game.move(game.P5, [2,4]); // black move 2
// game.move(game.kn, [5,5]); // white move 3
// game.move(game.kB, [1,4]); // black move 3
// game.move(game.p7, [5,6]); // white move 4
// game.move(game.kN, [2,5]); // black move 4
// game.move(game.kb, [6,6]); // white move 5
// console.log(game.display());

game.opening();

describe ('Catalan opening should look like', function (){
  it('should display the Catalan Opening', function (){
        assert.equal(game.display(),
          "+---+---+---+---+---+---+---+---+\n" +
          "| R | N | B | Q | K |   |   | R |\n" +
          "+---+---+---+---+---+---+---+---+\n" +
          "| P | P | P |   | B | P | P | P |\n" +
          "+---+---+---+---+---+---+---+---+\n" +
          "|   |   |   |   | P | N |   |   |\n" +
          "+---+---+---+---+---+---+---+---+\n" +
          "|   |   |   | P |   |   |   |   |\n" +
          "+---+---+---+---+---+---+---+---+\n" +
          "|   |   | p | p |   |   |   |   |\n" +
          "+---+---+---+---+---+---+---+---+\n" +
          "|   |   |   |   |   | n | p |   |\n" +
          "+---+---+---+---+---+---+---+---+\n" +
          "| p | p |   |   | p | p | b | p |\n" +
          "+---+---+---+---+---+---+---+---+\n" +
          "| r | n | b | q | k |   |   | r |\n" +
          "+---+---+---+---+---+---+---+---+\n"
        );
  });
});

describe ('Piece construction tests', function (){
    it('should return the piece name as a string', function (){
        assert.isString(game.Q.getName());
    });
    it('should return a string that says Queen', function (){
        assert.equal(game.Q.getName(), 'Queen');
    });
    it('should return a string for black Queen, Q', function (){
        assert.equal(game.Q.toString(), 'Q');
    });
    it('should return the piece name as a string', function (){
        assert.isString(game.q.getName());
    });
    it('should return a string that says Queen', function (){
        assert.equal(game.q.getName(), 'Queen');
    });
    it('should return a string for white Queen, q', function (){
        assert.equal(game.q.toString(), 'q');
    });
    it('should return the piece name as a string', function (){
        assert.isString(game.K.getName());
    });
    it('should return a string that says King', function (){
        assert.equal(game.K.getName(), 'King');
    });
    it('should return a string for black King, K', function (){
        assert.equal(game.K.toString(), 'K');
    });
    it('should return the piece name as a string', function (){
        assert.isString(game.k.getName());
    });
    it('should return a string that says King', function (){
        assert.equal(game.k.getName(), 'King');
    });
    it('should return a string for white King, k', function (){
        assert.equal(game.k.toString(), 'k');
    });
    it('should return the piece name as a string', function (){
        assert.isString(game.P1.getName());
    });
    it('should return a string that says Pawn', function (){
        assert.equal(game.P1.getName(), 'Pawn');
    });
    it('should return a string for black Pawn, P', function (){
        assert.equal(game.P1.toString(), 'P');
    });
    it('should return the piece name as a string', function (){
        assert.isString(game.p1.getName());
    });
    it('should return a string that says Pawn', function (){
        assert.equal(game.p1.getName(), 'Pawn');
    });
    it('should return a string that for white Pawn, p', function (){
        assert.equal(game.p1.toString(), 'p');
    });
    it('should return the piece name as a string', function (){
        assert.isString(game.qB.getName());
    });
    it('should return a string that says Bishop', function (){
        assert.equal(game.qB.getName(), 'Bishop');
    });
    it('should return a string for black Bishop, B', function (){
        assert.equal(game.qB.toString(), 'B');
    });
    it('should return the piece name as a string', function (){
        assert.isString(game.qb.getName());
    });
    it('should return a string that says Bishop', function (){
        assert.equal(game.qb.getName(), 'Bishop');
    });
    it('should return a string for white Bishop, b', function (){
        assert.equal(game.qb.toString(), 'b');
    });
    it('should return the piece name as a string', function (){
        assert.isString(game.qN.getName());
    });
    it('should return a string that says Knight', function (){
        assert.equal(game.qN.getName(), 'Knight');
    });
    it('should return a string for black Knight, N', function (){
        assert.equal(game.qN.toString(), 'N');
    });
    it('should return the piece name as a string', function (){
        assert.isString(game.qn.getName());
    });
    it('should return a string that says Knight', function (){
        assert.equal(game.qn.getName(), 'Knight');
    });
    it('should return a string for white Knight, n', function (){
        assert.equal(game.qn.toString(), 'n');
    });
    it('should return the piece name as a string', function (){
        assert.isString(game.qR.getName());
    });
    it('should return a string that says Rook', function (){
        assert.equal(game.qR.getName(), 'Rook');
    });
    it('should return a string for black Rook, R', function (){
        assert.equal(game.qR.toString(), 'R');
    });
    it('should return the piece name as a string', function (){
        assert.isString(game.qr.getName());
    });
    it('should return a string that says Rook', function (){
        assert.equal(game.qr.getName(), 'Rook');
    });
    it('should return a string for white Rook, r', function (){
        assert.equal(game.qr.toString(), 'r');
    });
});

describe ('should have a functions', function (){
    it('should have a function Chess()', function(){
        assert.isFunction(Chess);
    });
    it('should have a function Position()', function(){
        assert.isFunction(Position);
    });
    it('should have a function Piece()', function(){
        assert.isFunction(Piece);
    });
});
