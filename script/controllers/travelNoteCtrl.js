/**
 * Created by Administrator on 2016-08-13.
 */
lmapp.controller('travelNoteCtrl',function($scope,detailsPageService){
    detailsPageService.detailsLogic("json/travelNote.json");
});