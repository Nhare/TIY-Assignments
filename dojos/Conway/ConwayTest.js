var game = require('./Conways-GOL.js');

var assert = require('chai').assert;

it('should have a game board', function(){
  assert(game);
  assert.isUndefined(game.board);
  assert.isDefined(game.newBoard);
  assert.isFunction(game.newBoard);
  assert.isFunction(game.rules);
  assert.isFunction(game.display);
  assert.isFunction(game.tick);
});

it('should create an empty board', function (){
  assert.deepEqual(game.newBoard(), [
      [ false, false, false],
      [ false, false, false],
      [ false, false, false],
  ]);
});
