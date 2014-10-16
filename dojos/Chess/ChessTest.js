// Chess Test Code
var Chess = require('./Chess.js');
var _ = require('lodash');
var assert = require('chai').assert;

var game = new Chess;
console.log(game.Q);
console.log(game.Q.getName());

describe ('getName method should give us the name', function (){
    it('should return the piece name as a string', function (){
        assert.isString(game.Q.getName());
    });
    it('should return a string that says Queen', function (){
        assert.equal(game.Q.getName(), 'Queen');
    });
});
