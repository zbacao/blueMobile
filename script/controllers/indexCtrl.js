lmapp.controller('indexCtrl',['$scope',function($scope){

    var mySwiper1 = new Swiper('#swiper-container1', {
        pagination: '.swiper-pagination',              //分页器
        autoplay: 2000,                                //自动轮播
        speed: 1000,                                   //自动轮播速度
        autoplayDisableOnInteraction: false,
        loop: true                                     //循环
    });

    //首页数据,暂时写死
    //$scope.indexData={
    //    lunboImg:[
    //        {imgUrl:"image/indeximg/banner2.jpg"},
    //        {imgUrl:"image/indeximg/banner1.jpg"},
    //        { imgUrl:"image/indeximg/banner3.jpg"},
    //        {imgUrl:"image/indeximg/banner3.jpg"}
    //    ],
    //    articals:[
    //        {
    //            "title":"岁月不老，一世倾城",
    //            "cage":"乐章",
    //            "cont":"时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...",
    //            "pic":"image/indeximg/yuezhangPic_05.png",
    //            "author":"小夏同学",
    //            "date":"5/23",
    //            "time":"16:15",
    //            "zan_num":"22",
    //            "pl_num":"22"
    //        },
    //        {
    //            "title":"一世倾城,岁月不老",
    //            "cage":"聊聊",
    //            "cont":"时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...",
    //            "pic":"image/indeximg/yuezhangPic_05.png",
    //            "author":"小夏同学",
    //            "date":"5/23",
    //            "time":"16:15",
    //            "zan_num":"22",
    //            "pl_num":"22"
    //        },
    //        {
    //            "title":"岁月不老，一世倾城",
    //            "cage":"乐章",
    //            "cont":"时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...时光的流逝，如缓缓流过的小溪，再怎样努力也无法逆转它的方向；这个午后，我站在开满丁香花的树下目送你走远，紫色的小花散发着幽幽的暗香，我忍不住深吸一口气...",
    //            "pic":"image/indeximg/yuezhangPic_05.png",
    //            "author":"小夏同学",
    //            "date":"5/23",
    //            "time":"16:15",
    //            "zan_num":"22",
    //            "pl_num":"22"
    //        }
    //    ]
    //};

//    文字块宽度和高度处理
    // window.onload = function(){
      // setTimeout(function(){

    $(function(){
       var img = new Image();
       img.src = $(".artical-summary-pic").eq(0).find('img').attr('src');
       ContWidth = $(".artical-summary-pic").width();
       
       img.onload = function(){
           var bili = ContWidth/this.width;
           var ContHeight = this.height*bili;
           $(".artical-cont").height(ContHeight+2);
           // var picWidth=$(pic).width();
           var picWidth = ContWidth;
           var totalWidth=$(".hasPic").width();
           var remainWidth=(1-(picWidth/totalWidth));
           $(".artical-summary-cont.hasPic").width(remainWidth*100-3+"%");
       };

    });
      // },1000)
    // }



}]);