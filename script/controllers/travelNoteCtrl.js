/**
 * Created by Administrator on 2016-08-13.
 */
lmapp.controller('travelNoteCtrl',function($scope,commonDetailsPageService){
    $.getJSON("json/travelNote.json",function(data){
        $(".user-pre-cont").html(decodeURI(data.artical.artical_cont));
        $scope.pageData=data;
        $scope.$apply();
    });
        commonDetailsPageService.detailsLogic();
});