/**
 * Created by hxsd on 2016/6/7.
 */
angular.module("myApp").controller("mycont", function ($scope){
    var music=document.getElementById("player");
    var musPlay=document.getElementById("play");
    var pPic=document.getElementById("playPic");
    var onOff=true;
    $scope.showfooter= function () {
        document.getElementById("footer").style.display="block";
    };

    $scope.play= function (){

        if(onOff){
            music.play();
            musPlay.className = "button icon ion-pause";
            pPic.className="playPic";
        }else{
            music.pause();
            musPlay.className = "button icon ion-play";
            pPic.className="";
        }
        onOff=!onOff;
    }
}).config(function ($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    //$ionicConfigProvider.tabs.position('bottom');

    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('bottom');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('center');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
    //tabs
    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,
        templateUrl:"template/tabs.html" });
    //tabs
    $stateProvider.state("tour",{
        url:"/tour",
        templateUrl:"template/tour.html",
        controller:"tourCtrl" });
    //home
    $stateProvider.state("tabs.home",{
        url:"/home",
        views:{"tab-home":{templateUrl:"template/home.html",controller:"homectrl"}}});
    //thismusic
    $stateProvider.state("tabs.thismusic",{
        url:"/thismusic",
        views:{"tab-home":{templateUrl:"template/thismusic.html"}}});
    //downloadmusic
    $stateProvider.state("tabs.downloadmusic",{
        url:"/downloadmusic",
        views:{"tab-home":{templateUrl:"template/downloadmusic.html"}}});
    //latelymusic
    $stateProvider.state("tabs.latelymusic",{
        url:"/latelymusic",
        views:{"tab-home":{templateUrl:"template/latelymusic.html"}}});
    //lovemusic
    $stateProvider.state("tabs.lovemusic",{
        url:"/lovemusic",
        views:{"tab-home":{templateUrl:"template/lovemusic.html"}}});
    //downloadvideo
    $stateProvider.state("tabs.downloadvideo",{
        url:"/downloadvideo",
        views:{"tab-home":{templateUrl:"template/downloadvideo.html"}}});
    //discernsong
    $stateProvider.state("tabs.discernsong",{
        url:"/discernsong",
        views:{"tab-home":{templateUrl:"template/discernsong.html"}}});
    //search
    $stateProvider.state("tabs.search",{
        url:"/search",
        views:{"tab-home":{templateUrl:"template/search.html"}}});
    //otherwise
    $urlRouterProvider.otherwise("/tour");
});
