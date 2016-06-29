/**
 * Created by hxsd on 2016/6/8.
 */
angular.module("myApp").controller("tourCtrl", function ($scope,$ionicSlideBoxDelegate){
        $scope.isShow = false;  // 控制是否显示"进入"按钮
        // 幻灯片切换事件响应函数
        $scope.onSlideChanged = function(index){
            if(index == $ionicSlideBoxDelegate.slidesCount() - 1){
                $scope.isShow = true;
            }
        };
    });