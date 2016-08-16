/**
 * Created by Administrator on 2016-08-13.
 */
lmapp.controller('interestingCtrl',function($scope,commonDetailsPageService){
    $.getJSON("json/interesting.json",function(data){
        $(".user-pre-cont").html(decodeURI(data.artical.artical_cont));
        $scope.pageData=data;
        $scope.$apply();
    });
    commonDetailsPageService.detailsLogic();
});