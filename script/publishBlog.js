/**
 * Created by Administrator on 2016-07-27.
 */
$(function() {
    $("#txtEditor").Editor();

    //这里是富文本框里面的内容接口
    $("#publicBlog").on("click",function(){
        //获取富文本框里面的内容
        var articalData=encodeURI($("#Editor_Editor").html());
        $.ajax({
            url:"http://www.yuan.com/text.php",
            type:"POST",
            dataType:"json",
            data:{
                sendData:articalData
            },
            beforeSend:function(){
                console.log("发送之前");
            },
            success:function(data){
                console.log(data);
            },
            complete:function(){
                console.log("发送之后");
            },
            error:function(error){
                console.log(error);
            }
        });
    });

//    移除不需要的富文本框功能,可根据需要删减 start
    $(".btn").each(function(index){
        switch($(this).attr("title")){
            case "Fonts":
                $(this).remove();
                break;
            case "Paragraph Format":
                $(this).remove();
                break;
            case "Underline":
                $(this).remove();
                break;
            case "Text/Background Color":
                $(this).remove();
                break;
            case "Increase Indent":
                $(this).remove();
                break;
            case "Decrease Indent":
                $(this).remove();
                break;
            case "Insert/Remove Numbered List":
                $(this).remove();
                break;
            case "Insert/Remove Bulleted List":
                $(this).remove();
                break;
            case "Undo":
                $(this).remove();
                break;
            case "Redo":
                $(this).remove();
                break;
            case "Insert Table":
                $(this).remove();
                break;
            case "Strike Through":
                $(this).remove();
                break;
            case "Insert Special Character":
                $(this).remove();
                break;
            case "Print":
                $(this).remove();
                break;
            case "Select All":
                $(this).remove();
                break;
            case "Source":
                $(this).remove();
                break;
            case "Toggle Screen":
                $(this).remove();
                break;
        }
    });
    //    移除不需要的富文本框功能,可根据需要删减 end

    //添加和移除标签  start
    (function(){
        var labelInput = $(".disp");
        var ipva=$(".ipva");
        var iInp=$(".i_inp");

        //按下回车键生成标签
        $(ipva).on("keypress", function () {
            if (window.event) {
                oEvent = window.event;		//处理兼容性，获得事件对象
                //设置IE的charCode值
                oEvent.charCode = (oEvent.type == "keypress") ? oEvent.keyCode : 0;
            }
            if (oEvent.keyCode == 13) {
                var rds = $(this).val();
                var parten = /^\s*$/;
                if (parten.test(rds)) {
                } else {
                    //var sortable = $(".ui-sortable");

                    $(this).parent().find(".disp").append('<span id="dc" class="sort"  style="  background: rgb(16,157,89);  white-space: nowrap; border-radius:3px; float: left;  display: block; padding-left: 5px; margin: 8px;  height: 22px;  font-size: 14px;  color: #fff;  text-indent: 0; "><div  id="dart"  style="padding:0px 6px; cursor:pointer; height:22px; display:block; float:left;   line-height:22px;">' + rds + '</div><img  class="close"  src="indexImg/close2.png" style="float:left; display:block; cursor:pointer; " /></span>');
                    $(this).val("");

                    again();
                }
            }
        });
        function again(){
            //如果标签个数大于2个则移除输入框
            if ((labelInput.children().length - 1) > 2) {
                $(".ipva").remove();
            }

            //点击关闭图标时移除当前标签，并加回输入框
            $(".close").on("click",function(){
                console.log("haha");
                $(this).parent().remove();
                if((labelInput.children().length - 1) <3  &&  $(".ipva").length===0){
                    $(".i_inp").append("    <input class='ipva'   name=''    type='text'   />");
                    console.log($(".ipva"));
                }
            });
        }

        $(iInp).on("click",function(){
            $(this).find(".ipva").css("display","block");
            $(this).find(".ipva").focus();
        });

    })();
    //添加和移除标签  end

    //上传音乐按钮的模拟点击  start
    $(".upload-music i").on("click",function(){
        $(".input-of-btn").trigger("click");
    });

    $(".input-of-btn").on("change",function(){
        var fileName = $(".input-of-btn").val().substring(12);
        $(".music-name").html(fileName).val();
    });
    //上传音乐按钮的模拟点击  end


    //$(window).on("change",function(){
    //    if($(this).width()<360){
    //        console.log("jaja");
    //        $(".pb-header .cate span").html("");
    //    }
    //});

        $(".cate").on("click",function(){
            $(".cate-nav").slideToggle(300);
        });
        var width=$(window).width();
        $("#Editor_Editor").height(width/2);
        $("#introduce_music").height(width/2);
});


