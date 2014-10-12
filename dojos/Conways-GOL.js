// Conway's Game of Life - week 3 weekend project (Objects)

// var game = {
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
//         var spacer = '+---+---+---+\n';
//
//         return spacer +
//             // Apply `renderRow` to each `row` in `board`...
//             this.board.map(function renderRow(row){
//                 return '| ' +
//                     // Apply `renderCell` to each `cell` in `row`...
//                     row.map(function renderCell(cell){
//                         // return 'X' if `cell` is TRUTHY otherwise return ' '
//                         return cell && 'X' || ' ';
//                     }).join(' | ') // Place ' | ' between each `cell`...
//                 + ' |\n';
//             }).join(spacer) // Place `spacer` between each `row`...
//         + spacer;
//     } // END display
// } // END game

var game = {
    board: undefined;
    var neighbors;
    var liveN = 0;
    var newState;
    var boardNewTick = []
    newBoard: function(){
      return this.board;
    },

    neighborsOf: function(board, x, y){
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
      board.forEach(function(value, index){
          value.forEach(function(x, y){
          boardNewTick.push(conway(board[index][y], neighborsOf(board, index, y)));
        });
      });
      var row1 = boardNewTick.splice(0, 3);
      var row2 = boardNewTick.splice(0, 3);
      board = [row1, row2, boardNewTick];
      return board;

    },

    display: function(){

    }
}
