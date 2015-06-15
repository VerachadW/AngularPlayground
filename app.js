var app = angular.module('AngularApp', ['ngMap', 'ngRoute', 'ngMaterial']);

app.config(function($routeProvider) {
       $routeProvider.when('/dialog', {
           templateUrl: '',
           controller: ''
       }).otherwise({
           redirectTo: '/'
        });
    });

app.controller('AppController', function($scope, $mdDialog) {
  $scope.markerText='Hello World'
    $scope.showForm = function(ev) {
        $mdDialog.show({
            controller: DialogController,
            templateUrl: 'dialog.html',
            parent: angular.element(document.body),
            targetEvent: ev
        }).then(function(text){
            $scope.markerText = text
        }, 
        function(){});
      }
});

function DialogController($scope, $mdDialog) {
  $scope.hide = function () {
    $mdDialog.hide()
  };
  $scope.cancel = function() {
    $mdDialog.cancel()
  }
  $scope.confirm = function() {
    $mdDialog.hide($scope.input.text)
  }

  $scope.input = {
    text: 'Hello World'
  };
}
