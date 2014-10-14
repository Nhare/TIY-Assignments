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

it('should play the game', function(){
  assert.isDefined(game.board);
  game.board[0][1] = game.board[1][1] = game.board[2][1] = true;
  assert.equal(game.display(),
                "+---+---+---+\n" +
                "|   | X |   |\n" +
                "+---+---+---+\n" +
                "|   | X |   |\n" +
                "+---+---+---+\n" +
                "|   | X |   |\n" +
                "+---+---+---+\n"
  );

  // game.tick();
  // assert.equal(game.display(),
  //               "+---+---+---+\n" +
  //               "|   |   |   |\n" +
  //               "+---+---+---+\n" +
  //               "| X | X | X |\n" +
  //               "+---+---+---+\n" +
  //               "|   |   |   |\n" +
  //               "+---+---+---+\n"
  // );

  // game.tick();
  // assert.equal(game.display(),
  //               "+---+---+---+\n" +
  //               "|   | X |   |\n" +
  //               "+---+---+---+\n" +
  //               "|   | X |   |\n" +
  //               "+---+---+---+\n" +
  //               "|   | X |   |\n" +
  //               "+---+---+---+\n"
  // );
  // assert.equal(game.display(),
  //               "+---+---+---+\n" +
  //               "|   |   |   |\n" +
  //               "+---+---+---+\n" +
  //               "|   |   |   |\n" +
  //               "+---+---+---+\n" +
  //               "|   |   |   |\n" +
  //               "+---+---+---+\n"
  // );
  // assert.equal(game.display(),
  //               "+---+---+---+\n" +
  //               "|   |   |   |\n" +
  //               "+---+---+---+\n" +
  //               "|   |   |   |\n" +
  //               "+---+---+---+\n" +
  //               "|   |   |   |\n" +
  //               "+---+---+---+\n"
  // );
});
