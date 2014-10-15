module.exports = Game;

function board(){
  return [
    [ false, false, false ],
    [ false, false, false ],
    [ false, false, false ],
  ];
}

function Game(){
  this.board = board();
}

/**
 * @param Number x coordinate
 * @param Number y coordinate
 * @return Boolean if cell at {x,y} is alive
 */
Game.prototype.isAlive = function(x, y){
  if(this.board[x][y] === true){
    return true;
  }
  else if(this.board[x][y] === false){
    return false;
  }
}

/**
 * Make the cell at {x,y} "alive", whatever that means...
 *
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */
Game.prototype.setAlive = function(x, y){
  this.board[x][y] = true;
}

/**
 * Make the cell at {x,y} "dead", whatever that means...
 *
 * @param Number x coordinate
 * @param Number y coordinate
 * @return undefined
 */
Game.prototype.setDead = function(x, y){
  this.board[x][y] = false;
}

/**
 * Update the `board` by applying the `rules` to each cell.
 */
Game.prototype.tick = function(){
  // Start with a fresh board...
  // Apply `rules` to each cell in the current board...
  // Record the result of `rules` in the new board...
  // Update the current board to match the new board.
  var newBoard = board();
    for (var i = 0; i < newBoard.length; i++){
      for(var j = 0; j < newBoard[i].length; j++){
        newBoard.push(this.rules(i, j, this.board));
      };
    };
    newBoard.splice(0, 3);
    var a = newBoard.splice(0, 3);
    var b = newBoard.splice(0, 3);
    this.board = [a, b, newBoard];
}

/**
 * What goes here?
 */
Game.prototype.rules = function(x, y){
  var cell = this.board[x][y];
   liveCell = this.neighborOf(x, y);
          if (cell) {    //rule #1
            if (liveCell < 2) {
              newCell = false;
          }
            if (liveCell === 2 || liveCell === 3) {
              newCell = true; //rule #2
          }
            if (liveCell > 3){ //rule #3
              newCell = false;
          }
        } else {
              if (liveCell === 3){
              newCell = true;
         } else {
              newCell = false;
          };
        };
        return newCell;
}

Game.prototype.neighborOf = function(x, y){
  var neighbors;
  var liveCell = 0;
    if (x === 0 && y === 0) {
      neighbors = [this.board[0][1], this.board[1][0], this.board[1][1]];
      for(var i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === true) {
          liveCell++;
        };
      };
    }
    if (x === 0 && y === 1) {
      neighbors = [this.board[0][0], this.board[1][0], this.board[1][1],
      this.board[1][2], this.board[0][2]];
      for(var i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === true) {
          liveCell++;
        };
      };
    }
    if (x === 0 && y === 2) {
      neighbors = [this.board[0][1], this.board[1][1], this.board[1][2]];
      for(var i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === true) {
          liveCell++;
        };
      };
    }
    if (x === 1 && y === 0) {
      neighbors = [this.board[0][0], this.board[0][1], this.board[1][1],
      this.board[2][1], this.board[2][0]];
      for(var i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === true) {
          liveCell++;
        };
      };
    }
    if (x === 1 && y === 1) {
      neighbors = [this.board[0][0], this.board[1][0], this.board[2][0],
      this.board[0][1], this.board[2][1], this.board[0][2], this.board[1][2],
      this.board[2][2]];
      for(var i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === true) {
          liveCell++;
        };
      };
    }
    if (x === 1 && y === 2) {
      neighbors = [this.board[0][1], this.board[0][2], this.board[1][1],
      this.board[2][1], this.board[2][2]];
      for(var i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === true) {
          liveCell++;
        };
      };
    }
    if (x === 2 && y === 0) {
      neighbors = [this.board[1][0], this.board[1][1], this.board[2][1]];
      for(var i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === true) {
          liveCell++;
        };
      };
    }
    if (x === 2 && y === 1) {
      neighbors = [this.board[2][0], this.board[1][0], this.board[1][1],
      this.board[1][2], this.board[2][2]];
      for(var i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === true) {
          liveCell++;
        };
      };
    }
    if (x === 2 && y === 2) {
      neighbors = [this.board[2][1], this.board[1][1], this.board[1][2]];
      for(var i = 0; i < neighbors.length; i++) {
        if (neighbors[i] === true) {
          liveCell++;
        };
      };
    }
    return liveCell;
}


/**
 * WARNING: This is VOODOO MAGIC...
 *
 * GIVEN:
 *   this.board === [
 *      [ false, true,  false ],
 *      [ false, true,  false ],
 *      [ false, true,  false ],
 *   ];
 *
 * EXPECT:
 *   +---+---+---+
 *   |   | X |   |
 *   +---+---+---+
 *   |   | X |   |
 *   +---+---+---+
 *   |   | X |   |
 *   +---+---+---+
 */
Game.prototype.display = function(){
    var spacer = '+---+---+---+\n';

    return spacer +
        // Apply `renderRow` to each `row` in `board`...
        this.board.map(function renderRow(row){
            return '| ' +
                // Apply `renderCell` to each `cell` in `row`...
                row.map(function renderCell(cell){
                    // return 'X' if `cell` is TRUTHY otherwise return ' '
                    return cell && 'X' || ' ';
                }).join(' | ') // Place ' | ' between each `cell`...
            + ' |\n';
        }).join(spacer) // Place `spacer` between each `row`...
    + spacer;
} // END display
