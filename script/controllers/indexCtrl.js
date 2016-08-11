lmapp.controller('indexCtrl',['$scope',function($scope){

    var mySwiper1 = new Swiper('#swiper-container1', {
        pagination: '.swiper-pagination',              //分页器
        autoplay: 2000,                                //自动轮播
        speed: 1000,                                   //自动轮播速度
        autoplayDisableOnInteraction: false,
        loop: true                                     //循环
    });

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
       }
    });
      // },1000)
    // }
    
}])