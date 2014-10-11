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
    board: undefined,
    newBoard: function(){ /* i.e. board() */ },
    rules: function(cell, neighbors){ /* i.e. conway(cell, neighbors) */ },
    neighborsOf: function(x,y){ /* . . . */ },
    tick: function(){ /* accepts nothing, alters `game.board` */ },
