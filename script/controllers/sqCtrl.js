lmapp.controller('sqCtrl',function($scope,scroll){
/*    var myscroll;
    function loaded(){
            myScroll = new IScroll("#wrapper",{
                mouseWheel: true,
                scrollbars:false,
                scrollX:true,
                scrollY:false
            });
    }
    loaded();
    FastClick.attach(document.body);
    $('#wrapper a').css({
        'line-height': $("#wrapper li").height()-2+'px'
    });
    $(".wrapper li").click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });*/
    scroll.iscroll();
    // 实际应该是$http服务注入后请求数据放入这个对象数组中。
    $scope.cardCont={
        card:[
                {
                    headsrc:"image/cardimg/userhead.png",
                    username:"碧池大大",
                    tags:"小时光",
                    cardsrc:"image/cardimg/cardimg.png",
                    cont:"欢乐童年系列之一",
                    num: 12,
                    zannum:22,
                    wechatnum:22
                },
                {
                    headsrc:"image/cardimg/userhead.png",
                    username:"碧池大大",
                    tags:"小时光",
                    cardsrc:"image/cardimg/cardimg.png",
                    cont:"欢乐童年系列之一",
                    num: 12,
                    zannum:22,
                    wechatnum:22
                }
            ]
        }
    });

    

