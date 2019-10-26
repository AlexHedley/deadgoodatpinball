var myApp = angular.module('myApp',[]);
myApp.controller('myController', function ($scope, $http, $q, $filter) {

    $scope.events = [];

    $scope.init = function () {
        getData();
    }

    getData = () =>  {
        var file = 'data/scores.json';

        $http.get(file)
        .then(function(response) {
            $scope.events = response.data.events;
        });
    };

    $scope.loadEvent = (event) => {
        $scope.selectedEvent = event;
    };

    $scope.loadGame = (game) => {
        $scope.selectedGame = game;
    };

    $scope.init();
});