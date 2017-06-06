angular.module('devmtnTravel').controller('packagesCtrl', function($scope, mainSrv, $stateParams){
    $scope.test = 'is this working';


    $scope.packages = mainSrv.packageInfo.filter(function(a, i, array){
        return a.country === $stateParams.country;
    })





});