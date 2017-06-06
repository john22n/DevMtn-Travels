angular.module('devmtnTravel').controller('locationsCtrl', function($scope, mainSrv){
    // $scope.test = 'is this working';

    $scope.locations = mainSrv.travelInfo;




});