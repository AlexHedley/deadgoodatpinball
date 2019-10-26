var myApp = angular.module('myApp',[]);
myApp.controller('myController', function ($scope, $http, $q, $filter) {

    $scope.init = function () {
        //getData();
    }

    getData = () =>  {
        var file = 'data/scores.json';
        
        $http.get(file)
        .then(function(response) {
            $scope.scores = response;
        });
    };

    $scope.init();
});