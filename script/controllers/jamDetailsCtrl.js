/* Created by Administrator on 2016-08-13.*/
lmapp.controller('jamDetails',function($scope,imgscroll,contWH,picPreview){
    //��ȡ����
    $.getJSON("json/jamDetails.json",function(data){
        $(".group-summary-cont").html(decodeURI(data.group.group_intro));
        $scope.pageData=data;
        $scope.$apply();
    });
    //�����Զ��������ֿ��߷���
    contWH.contWidthHeight($(".topic-summary-pic"),$(".topic-cont-words"),$(".hasPic"));
    //����iscroll��������
    $scope.$on('ngRepeatFinished',function(){
        imgscroll.iscroll();
    });

    //����Ԥ���ϴ�ͼƬ����
    $("#onloadPic").on("change",function(){
        picPreview.picPreview("onloadPic","preview");
    });
});