lmapp.service('scroll', function(){
        this.iscroll=function(){
            var myscroll;
            myScroll = new IScroll("#wrapper",{
                mouseWheel: true,
                scrollbars:false,
                scrollX:true,
                scrollY:false
            });
            
                FastClick.attach(document.body);
                $('#wrapper a').css({
                    'line-height': $("#wrapper li").height()-2+'px'
                });
                $(".wrapper li").on("touchstart",function(){
                    $(this).addClass('on').siblings().removeClass('on');
                });
                
        }
    });