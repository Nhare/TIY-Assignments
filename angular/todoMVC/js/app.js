(function( window ) {
	'use strict';

	angular.module('todomvc', [ ])
		.controller('Ctrl', function(){
			this.tasks = [
			 { text: 'Nicholas Patrick OHare'},
			 { text: 'Isabella Von Carstein'},
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
