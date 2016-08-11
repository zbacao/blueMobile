lmapp.controller('indexCtrl',['$scope',function(scope){

    var mySwiper1 = new Swiper('#swiper-container1', {
        pagination: '.swiper-pagination',              //分页器
        autoplay: 2000,                                //自动轮播
        speed: 1000,                                   //自动轮播速度
        autoplayDisableOnInteraction: false,
        loop: true                                     //循环
    });

//    文字块宽度和高度处理
    // window.onload = function(){
      setTimeout(function(){
        var pic=$(".artical-summary-pic");
        $(".artical-cont").height($(pic).height()+2);
        var picWidth=($(pic).width());
        var totalWidth=$(".hasPic").width();
        var remainWidth=(1-(picWidth/totalWidth));
        $(".hasPic").width(remainWidth*100-3+"%");
      },300)
    // }
    
}])