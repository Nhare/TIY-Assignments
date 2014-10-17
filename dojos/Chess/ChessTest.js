// Chess Test Code
var Chess = require('./Chess.js');
var _ = require('lodash');
var assert = require('chai').assert;

var game = new Chess;
var w1 = game.move(4,2,6,2);
game.display();
console.log(game.Q);
console.log(game.Q.getName());
console.log(game.Q.toString());
console.log(game.q);
console.log(game.q.getName());
console.log(game.q.toString());
console.log(game.K);
console.log(game.K.getName());
console.log(game.K.toString());
console.log(game.k);
console.log(game.k.getName());
console.log(game.k.toString());
console.log(game.P);
console.log(game.P.getName());
console.log(game.P.toString());
console.log(game.p);
console.log(game.p.getName());
console.log(game.p.toString());

// describe ('The .display method should display the changes of the .move method', function (){
//     it('should display the first white move', function(){
//         assert.deepEqual(game.display() ===
//         [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
//         [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
//         [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
//         [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
//         [ ' ', ' ', 'p', ' ', ' ', ' ', ' ', ' ' ],
//         [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
//         [ 'p', 'p', ' ', 'p', 'p', 'p', 'p', 'p' ],
//         [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ]  );
//     });
// });


describe ('Piece construction tests', function (){
    it('should return the piece name as a string', function (){
        assert.isString(game.Q.getName());
    });
    it('should return a string that says Queen', function (){
        assert.equal(game.Q.getName(), 'Queen');
    });
    it('should return a string that says black Queen', function (){
        assert.equal(game.Q.toString(), 'black Queen');
    });
    it('should return the piece name as a string', function (){
        assert.isString(game.q.getName());
    });
    it('should return a string that says Queen', function (){
        assert.equal(game.q.getName(), 'Queen');
    });
    it('should return a string that says white Queen', function (){
        assert.equal(game.q.toString(), 'white Queen');
    });
    it('should return the piece name as a string', function (){
        assert.isString(game.K.getName());
    });
    it('should return a string that says King', function (){
        assert.equal(game.K.getName(), 'King');
    });
    it('should return a string that says black King', function (){
        assert.equal(game.K.toString(), 'black King');
    });
    it('should return the piece name as a string', function (){
        assert.isString(game.k.getName());
    });
    it('should return a string that says King', function (){
        assert.equal(game.k.getName(), 'King');
    });
    it('should return a string that says white King', function (){
        assert.equal(game.k.toString(), 'white King');
    });
    it('should return the piece name as a string', function (){
        assert.isString(game.P.getName());
    });
    it('should return a string that says Pawn', function (){
        assert.equal(game.P.getName(), 'Pawn');
    });
    it('should return a string that says black Pawn', function (){
        assert.equal(game.P.toString(), 'black Pawn');
    });
    it('should return the piece name as a string', function (){
        assert.isString(game.p.getName());
    });
    it('should return a string that says Pawn', function (){
        assert.equal(game.p.getName(), 'Pawn');
    });
    it('should return a string that says white Pawn', function (){
        assert.equal(game.p.toString(), 'white Pawn');
    });
    it('should return the piece name as a string', function (){
        assert.isString(game.B.getName());
    });
    it('should return a string that says Bishop', function (){
        assert.equal(game.B.getName(), 'Bishop');
    });
    it('should return a string that says black Bishop', function (){
        assert.equal(game.B.toString(), 'black Bishop');
    });
    it('should return the piece name as a string', function (){
        assert.isString(game.b.getName());
    });
    it('should return a string that says Bishop', function (){
        assert.equal(game.b.getName(), 'Bishop');
    });
    it('should return a string that says white Bishop', function (){
        assert.equal(game.b.toString(), 'white Bishop');
    });
    it('should return the piece name as a string', function (){
        assert.isString(game.N.getName());
    });
    it('should return a string that says Knight', function (){
        assert.equal(game.N.getName(), 'Knight');
    });
    it('should return a string that says black Knight', function (){
        assert.equal(game.N.toString(), 'black Knight');
    });
    it('should return the piece name as a string', function (){
        assert.isString(game.n.getName());
    });
    it('should return a string that says Knight', function (){
        assert.equal(game.n.getName(), 'Knight');
    });
    it('should return a string that says white Knight', function (){
        assert.equal(game.n.toString(), 'white Knight');
    });
    it('should return the piece name as a string', function (){
        assert.isString(game.R.getName());
    });
    it('should return a string that says Rook', function (){
        assert.equal(game.R.getName(), 'Rook');
    });
    it('should return a string that says black Rook', function (){
        assert.equal(game.R.toString(), 'black Rook');
    });
    it('should return the piece name as a string', function (){
        assert.isString(game.r.getName());
    });
    it('should return a string that says Rook', function (){
        assert.equal(game.r.getName(), 'Rook');
    });
    it('should return a string that says white Rook', function (){
        assert.equal(game.r.toString(), 'white Rook');
    });
});
