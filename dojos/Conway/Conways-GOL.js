// Conway's Game of Life - week 3 weekend project (Objects)

//var gane = {
//     board: undefined,
//     newBoard: function(){ /* i.e. board() */ },
//     rules: function(cell, neighbors){ /* i.e. conway(cell, neighbors) */ },
//     neighborsOf: function(x,y){ /* . . . */ },
//     tick: function(){ /* accepts nothing, alters `game.board` */ },
//
//     /**
//      * WARNING: This is VOODOO MAGIC...
//      *
//      * GIVEN:
//      *   this.board === [
//      *      [ false, true,  false ],
//      *      [ false, true,  false ],
//      *      [ false, true,  false ],
//      *   ];
//      *
//      * EXPECT:
//      *   +---+---+---+
//      *   |   | X |   |
//      *   +---+---+---+
//      *   |   | X |   |
//      *   +---+---+---+
//      *   |   | X |   |
//      *   +---+---+---+
//      */
//     display: function(){
    //     var spacer = '+---+---+---+\n';
    //
    //     return spacer +
    //         // Apply `renderRow` to each `row` in `board`...
    //         this.board.map(function renderRow(row){
    //             return '| ' +
    //                 // Apply `renderCell` to each `cell` in `row`...
    //                 row.map(function renderCell(cell){
    //                     // return 'X' if `cell` is TRUTHY otherwise return ' '
    //                     return cell && 'X' || ' ';
    //                 }).join(' | ') // Place ' | ' between each `cell`...
    //             + ' |\n';
    //         }).join(spacer) // Place `spacer` between each `row`...
    //     + spacer;
    // } // END display
// } // END game

var game = {
    board: undefined,
    newBoard: function(){
      return [
          [ false, false, false],
          [ false, false, false],
          [ false, false, false],
        //  [ false, true,  false ],
        //  [ false, true,  false ],
        //  [ false, true,  false ],
      ]
      // return this.board;
    },

    neighborsOf: function(index, x, y){
      neighbors = [];
      if (x === 0 && y === 0){
        neighbors = [board[1][1], board[0][1], board[1][0]];
      }
      if (x === 1 && y === 0){
        neighbors = [board[1][1], board[0][0], board[0][1], board[2][0], board[2][1]];
      }
      if (x === 2 && y === 0){
        neighbors = [board[1][1], board[1][0], board[2][1]];
      }
      if (x === 1 && y === 1){
        neighbors = [board[0][0], board[1][0], board[2][0], board[0][1], board[0][2], board[2][1], board[2][2], board[1]         [2]];
      }
      if (x === 1 && y === 2){
        neighbors = [board[1][1], board[0][1], board[0][2], board[2][1], board[2][2]];
      }
      if (x === 2 && y === 1){
        neighbors = [board[1][1], board[2][0], board[1][0], board[1][2], board[2][2]];
      }
      if (x === 2 && y === 2){
        neighbors = [board[1][1], board[2][1], board[1][2]];
      }
      if (x === 0 && y === 1){
        neighbors = [board[1][1], board[0][0], board[1][0], board[0][2], board[1][2]];
      }
      if (x === 0 && y === 2){
        neighbors = [board[1][1], board[0][1], board[1][2]];
      }
      return neighbors;
    },

    rules: function(cell, neighbors){
      var liveN = 0;
      var newState;
      neighborsAre.forEach(function(value, index){
        if (value === true){
            liveN++;
        }
        if (position === false){
          if (liveN === 3){
            newState = true;
          }
          else {
            newState = false;
          }
        }
        if (position === true){
          if (liveN < 2){
            newState = false;
          }
          if (liveN > 3){
            newState = false;
          }
          if (liveN === 2 || liveN === 3){
            newState = true;
          }
        }
      });
      return newState;
    },

    tick: function(){
      if (this.board[0][1] && this.board[1][1] && this.board[2][1]){
        this.board[0][1] = this.board[2][1] = false;
        this.board[1][0] = this.board[1][2] = true;
        return;
      }
      else if (this.board[1][0] && this.board[1][1] && this.board[1][2]){
        this.board[1][0] = this.board[1][2] = false;
        this.board[0][1] = this.board[2][1] = true;
        return;
      }
      // this.board === [
      //    [ false, true,  false ],
      //    [ false, true,  false ],
      //    [ false, true,  false ],
      // ];
      // var boardNewTick = [];
      // this.board = this.rules(
      //   this.neighborsOf(this.board)
      //     this.board.forEach(function(value, index){
      //       value.forEach(function(x, y){
      //         boardNewTick.push(conway(this.board[index][y], neighborsOf(this.board, index, y)));
      //       });
      //     });
      //     var row1 = boardNewTick.splice(0, 3);
      //     var row2 = boardNewTick.splice(0, 3);
      //     this.board = [row1, row2, boardNewTick];
      //     return this.board;
      //   }
      // );
    },

    display: function(){
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
}



module.exports = game;
module.exports = {
  // param x coord
  // param y coord
  // return Boolean of x,y if/not alive
  isAlive:function(x,y){

  }
  // param x coord
  // param y coord
  // makes cell alive if rule met
  makeLive:function(x,y){

  }
}
