var app = angular.module('dictionaryApp', ['angular.filter']);

app.controller('dictionary',function($scope, $http) {

  $scope.word;
  $scope.buscar=function(){

    $http.get("http://localhost:3000/api/words/"+word)
       .then(function(response) {
         $scope.data = response.data;
         console.info(response);
       });
   }
   console.info(word);


});
