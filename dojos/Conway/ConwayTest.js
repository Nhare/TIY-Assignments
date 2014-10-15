var Game = require('./Conways-GOL.js');

var assert = require('chai').assert;

it('should play the game', function(){
  var game = new Game;

  assert.deepEqual(game.board, [
    [ false, false, false ],
    [ false, false, false ],
    [ false, false, false ],
  ]);

// assert.equal(game.rules(false, [false, false, false]), false);

// console.log(game.neighborOf(this.board,0,0));
// assert.deepEqual(game.neighborOf(this.board,0,0) [false, false, false]);

 // Uncomment me to kill tests...
  game.setAlive(0,1);
  game.setAlive(1,1);
  game.setAlive(2,1);
  //
  // assert.isTrue(game.isAlive(0, 1));
  // assert.isTrue(game.isAlive(1, 1));
  // assert.isTrue(game.isAlive(2, 1));
  //
  // assert.equal(game.display(),
  //   "+---+---+---+\n" +
  //   "|   | X |   |\n" +
  //   "+---+---+---+\n" +
  //   "|   | X |   |\n" +
  //   "+---+---+---+\n" +
  //   "|   | X |   |\n" +
  //   "+---+---+---+\n"
  // );
  //
  game.tick();
  //
  assert.isTrue(game.isAlive(1,0));
  assert.isTrue(game.isAlive(1,1));
  assert.isTrue(game.isAlive(1,2));

  // assert.equal(game.display(),
  //   "+---+---+---+\n" +
  //   "|   |   |   |\n" +
  //   "+---+---+---+\n" +
  //   "| X | X | X |\n" +
  //   "+---+---+---+\n" +
  //   "|   |   |   |\n" +
  //   "+---+---+---+\n"
  // );
/*
  game.tick();

  assert.isTrue(game.isAlive(0,1));
  assert.isTrue(game.isAlive(1,1));
  assert.isTrue(game.isAlive(2,1));

  assert.equal(game.display(),
    "+---+---+---+\n" +
    "|   | X |   |\n" +
    "+---+---+---+\n" +
    "|   | X |   |\n" +
    "+---+---+---+\n" +
    "|   | X |   |\n" +
    "+---+---+---+\n"
  );
  // */ // Don't uncomment this line!
});
