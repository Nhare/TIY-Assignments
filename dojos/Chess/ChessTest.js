// Chess Test Code

var Chess = require('./Chess.js');
var _ = require('lodash');
var assert = require('chai').assert;
var expect = require('chai').expect;

var game = new Chess;
// console.log(game.Q.getName());
// var w1 = game.move(4,2,6,2);  //white move 1
console.log(game.display());
// var b1 = game.move(3,3,1,3);  //black move 1
// game.display();
// var w2 = game.move(4,3,6,3);  //white move 2
// var b2 = game.move(2,4,1,4);  //black move 2
// var w3 = game.move(5,5,7,6);  //white move 3
// var b3 = game.move(1,4,0,5);  //black move 3
// var w4 = game.move(5,6,6,6);  //white move 4
// var b4 = game.move(2,5,0,6);  //black move 4
// var w5 = game.move(6,6,7,5);  //white move 5
// game.display();

// console.log(game.Q);
// console.log(game.Q.getName());
// console.log(game.Q.toString());
// console.log(game.q);
// game.q.setPosition([5,5]);
// console.log(game.q);
// game.move(game.q, [4,4]);
// console.log(game.q);
// console.log(game.q.getName());
// console.log(game.q.toString());
// console.log(game.K);
// console.log(game.K.getName());
// console.log(game.K.toString());
// console.log(game.k);
// console.log(game.k.getName());
// console.log(game.k.toString());
// console.log(game.P);
// console.log(game.P.getName());
// console.log(game.P.toString());
// console.log(game.p);
// console.log(game.p.getName());
// console.log(game.p.toString());
//

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
