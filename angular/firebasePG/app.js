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

// app.controller("SampleCtrl", function($scope, $firebase) {
//   var ref = new Firebase("https://intense-inferno-770.firebaseio.com/messages");
//   var sync = $firebase(ref);
//
//   $scope.messages = sync.$asArray();
//
//   $scope.addMessage = function(text) {
//     $scope.messages.$add({text: text});
//   };

//   app.controller("SampleCtrl", ["$scope", "$firebaseAuth",
//   function($scope, $firebaseAuth) {
//     var ref = new Firebase("https://intense-inferno-770.firebaseio.com/");
//     var auth = $firebaseAuth(ref);
//     auth.$authWithOAuthPopup("facebook").then(function(authData) {
//       console.log("Logged in as:", authData.uid);
//     }).catch(function(error) {
//       console.error("Authentication failed: ", error);
//     });
//   }
// ]);

// });
