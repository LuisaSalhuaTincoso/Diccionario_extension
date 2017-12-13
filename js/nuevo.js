var app = angular.module('booksInventoryApp', []);

app.controller('booksCtrl', function($scope, $http) {

  $http.get("https://whispering-woodland-9020.herokuapp.com/getAllBooks")
    .then(function(response) {
      $scope.data = response.data;
    });
});
