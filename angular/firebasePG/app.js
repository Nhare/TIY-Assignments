// Firebase Playground

var rocketChat = angular.module("rocketChat", ["firebase"]);

      rocketChat.controller('chatCtrl', ['$scope', '$firebase',
        function($scope, $firebase) {
          var ref = new Firebase("https://intense-inferno-770.firebaseio-demo.com/");
          $scope.messages = $firebase(ref).$asArray();

          //ADD MESSAGE METHOD
          $scope.addMessage = function(e) {

            //LISTEN FOR RETURN KEY
            if (e.keyCode === 13 && $scope.msg) {
              //ALLOW CUSTOM OR ANONYMOUS USER NAMES
              var name = $scope.name || 'anonymous';
			  $scope.messages.$add({from: name, body: $scope.msg});
              //RESET MESSAGE
              $scope.msg = "";
            }
          };
        }
      ]);
