/**
 * Created by zbacao on 2016/8/12.
 */

lmapp.controller("logoController",["$scope","logo",function($scope,logo){

    $scope.logo=logo.logo


    console.log($scope.logo);

    //$scope.$watch("url",function(newValue,oldValue, scope){
    //    console.log(newValue);
    //    console.log(oldValue)
    //});
    //console.log($scope.url);


    //$scope.$watch(function(){
    //    var url=;
    //    var str="person";
    //    var num=url.indexOf(str);
    //    console.log(num);
    //    if(num>0){
    //        $scope.logo="image/images/perCen_03.png";
    //    }else{
    //        $scope.logo=null
    //    }
    //
    //})

}]);