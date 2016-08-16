/**
 * Created by Administrator on 2016-08-13.
 */
lmapp.controller('jamDetails',function($scope){
    $(function(){
        //����
        //    setImagePreview��������Ϊ(�ϴ���input-id,Ԥ�����ڵ�id)    �м�Ϊid
        document.getElementById("onloadPic").addEventListener("change",function(){
            setImagePreview("onloadPic","preview");
            console.log(this.files);
        },false);

        //ͼƬ�ϴ�Ԥ�����ܲ��
        function setImagePreview(docObj,imgObjPreview) {
            docObj=document.getElementById(docObj);
            imgObjPreview=document.getElementById(imgObjPreview);
            if(docObj.files &&docObj.files[0]){
                //����£�ֱ����img����
                imgObjPreview.style.display = 'block';
                imgObjPreview.style.width = '100px';
                imgObjPreview.style.height = '100px';
//            imgObjPreview.src = docObj.files[0].getAsDataURL();

                //���7���ϰ汾�����������getAsDataURL()��ʽ��ȡ����Ҫһ�·�ʽ
                imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
            }
            else {
                //IE�£�ʹ���˾�
                docObj.select();
                var imgSrc = document.selection.createRange().text;
                var localImagId = document.getElementById("localImag");
                //�������ó�ʼ��С
                localImagId.style.width = "100px";
                localImagId.style.height = "100px";
                //ͼƬ�쳣�Ĳ�׽����ֹ�û��޸ĺ�׺��α��ͼƬ
                try{
                    localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                    localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
                }
                catch(e) {
                    alert("���ϴ���ͼƬ��ʽ����ȷ��������ѡ��!");
                    return false;
                }
                imgObjPreview.style.display = 'none';
                document.selection.empty();
            }
            return true;
        }

        //���������Ĭ���ı���ʧ start
        //var inputBlogTitle = $("#input_blog_title");
        //inputBlogTitle.on("click", function () {
        //    if (inputBlogTitle.get(0).placeholder === "��������⣨���") {
        //        $(this).css("color", "#000");
        //        $(this).get(0).placeholder = "";
        //    }
        //});
        //���������Ĭ���ı���ʧ end

        //��Ӻ��Ƴ���ǩ  start
        (function(){
            var labelInput = $(".disp");
            var ipva=$(".ipva");
            var iInp=$(".i_inp");

            //���»س������ɱ�ǩ
            $(ipva).on("keypress", function () {
                if (window.event) {
                    oEvent = window.event;		//��������ԣ�����¼�����
                    //����IE��charCodeֵ
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
                //�����ǩ��������2�����Ƴ������
                if ((labelInput.children().length - 1) > 2) {
                    $(".ipva").remove();
                }

                //����ر�ͼ��ʱ�Ƴ���ǰ��ǩ�����ӻ������
                $(".close").on("click",function(){
                    console.log("haha");
                    $(this).parent().remove();
                    if((labelInput.children().length - 1) <3  &&  $(".ipva").length===0){
                        $(".i_inp").append("    <input class='ipva'   name=''    type='text'   />");
                    }
                });
            }

            $(iInp).on("click",function(){
                $(this).find(".ipva").css("display","block");
                $(this).find(".ipva").focus();
            });

        })();
        //��Ӻ��Ƴ���ǩ  end


        //���۵Ļظ��򵯳��¼�
        $(".gs-comwhole").on("click",function(){
            if($(this).next('.gs-popreplay').length===0){
                var n = $(this).index(".gs-comwhole");
                // var cloneReply = $(".ts-popreplay").eq(0).clone(ture);
                var cloneEle = $('<div class="gs-popreplay"><div class="gspop-tri"></div><div class="gs-replaycont"><input type="text"><a href="javascript:;">�ظ�</a></div><i></i></div>');
                cloneEle.insertAfter($(this));
                $(this).next('.gs-popreplay').stop().slideDown(300);
            }
            $(".gs-popreplay i").on("click",function(){
                $(this).parent().stop().slideUp(300,function(){
                    $(this).remove();
                });
            });
            $(".gs-popreplay .gs-replaycont a").on("click",function(){
                var n = $(this).index(".gs-popreplay a");
                var str = $('.gs-popreplay input').val();
                if(!(str)){
                    //�����ύ�ظ�����ajax�¼�����ӻظ��¼���
                }
                $('.gs-popreplay').eq(n).on("click",function(){
                    $(this).stop().slideUp(300,function(){
                        $(this).remove();
                    });
                });
            });
        });

        //ģ�������ֺ�ͼƬ�ϴ� start
        $("#musicBtn").on("click",function(){
            $("#uploadMusic").trigger("click");
        });
        $("#picBtn").on("click",function(){
            $("#uploadPic").trigger("click");
        });
        $(".input-of-btn").on("change",function() {
            var fileName = $(this).val().substring(12);
            $("#txtEditor").get(0).value += fileName + " ";
        });
        //ģ�������ֺ�ͼƬ�ϴ� end

        //});

            //��Ⱥ͸߶ȼ���ģ��
            var img = new Image();
            img.src = $(".topic-summary-pic").eq(0).find('img').attr('src');
            ContWidth = $(".topic-summary-pic").width();

            img.onload = function(){
                var bili = ContWidth/this.width;
                var ContHeight = this.height*bili;
                $(".topic-cont-words").height(ContHeight+2);
                // var picWidth=$(pic).width();
                var picWidth = ContWidth;
                var totalWidth=$(".hasPic").width();
                var remainWidth=(1-(picWidth/totalWidth));
                $(".topic-summary-cont.hasPic").width(remainWidth*100-2+"%");
            };

    });
});