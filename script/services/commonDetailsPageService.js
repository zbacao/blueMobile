/**
 * Created by Administrator on 2016-08-13.
 */
lmapp.service("commonDetailsPageService",function(){
    this.detailsLogic=function(){
        $(function(){
            function musicplay() {
                //���ֲ��ſ���
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
            //���Ʋ��Ű�ť
            $("#playbtn").on("click",function(){
                musicplay();
            });
            //musicplay();
        });
    };
});