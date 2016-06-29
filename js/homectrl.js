/**
 * Created by hxsd on 2016/6/7.
 */
angular.module("myApp").controller("homectrl", function ($scope) {
    $scope.zjl="display:none";
    $scope.om="display:none";
    $scope.showzjl= function () {
        if($scope.zjl=="display:none"){
            $scope.zjl="display:block";
        }else{
            $scope.zjl="display:none";
        }
    };
    $scope.showom= function () {
        if($scope.om=="display:none"){
            $scope.om="display:block";
        }else{
            $scope.om="display:none";
        }
    };
    $scope.play= function () {
        
    }
});