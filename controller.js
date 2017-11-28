var app = angular.module('dictionaryApp', ['angular.filter']);



app.controller('dictionary',function($scope, $http) {



 $scope.buscar=function(word){
   $http.get("http://localhost:3000/api/words"+word)
     .then(function(response) {
       $scope.data = response.data;
       console.info(word);
     });
 }

});

app.controller('mostrarCtrl', function($scope) {
    $scope.mostrar = false;
    $scope.buscar = function() {
        $scope.mostrar = !$scope.mostrar;
    }
});
