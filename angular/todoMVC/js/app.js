(function( window ) {
	'use strict';

	angular.module('todomvc', [ ])
		.controller('Ctrl', function(){
			this.tasks = [
			 { text: 'thing in controller 1'},
			 { text: 'thing in controller 2'},
			];

		this.cancelEdit = function(keyCode, task){
			if(keyCode === 27){
					task.editing = false;
			}
		};

		this.startEdit = function(task){
			task.editing = true;
		};
	})
	;
	// });

})( window );
