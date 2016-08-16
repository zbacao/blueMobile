/**
 * Created by Administrator on 2016-08-13.
 */
lmapp.service("commonDetailsPageService",function(){
    this.detailsLogic=function(){
        $(function(){
            function musicplay() {
                //音乐播放控制
                var playerTimer=null;
                var audio = $('#aud')[0];
                if (audio.paused) {
                    audio.play();
                    audio.loop = true;
                    $("#playbutton").attr("src", "image/indeximg/commonImg/play-bigon.png");
                } else {
                    audio.pause();
                    clearInterval(playerTimer);
                    $("#playbutton").attr("src", "image/indeximg/commonImg/mobile_14.png");
                }
            }
            //控制播放按钮
            $("#playbtn").on("click",function(){
                musicplay();
            });
            //musicplay();
        });
    };
});