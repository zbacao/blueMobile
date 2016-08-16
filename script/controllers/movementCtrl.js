/**
 * Created by Administrator on 2016-08-12.
 */
lmapp.controller('movementCtrl',function($scope,commonDetailsPageService){
    $.getJSON("json/movement.json",function(data){
        $(".user-pre-cont").html(decodeURI(data.artical.artical_cont));
        $scope.pageData=data;
        $scope.$apply();
    });
    commonDetailsPageService.detailsLogic();
});


//<div class="fl" ng-repeat="m in pageData.labels">
//<span>{{m}}</span>
//</div>

