/**
 * Created by Administrator on 2016-08-12.
 */
lmapp.controller('movementCtrl',function($scope,detailsPageService){
    detailsPageService.detailsLogic("json/movement.json");
});