/**
 * Created by Administrator on 2016-08-13.
 */
lmapp.controller('interestingCtrl',function($scope,detailsPageService){
    detailsPageService.detailsLogic("json/interesting.json");
});