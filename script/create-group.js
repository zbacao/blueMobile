/**
 * Created by Administrator on 2016-08-12.
 */
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

    var width=$(window).width();
    $("#Editor_Editor").height(width/2);
    $("#introduce_music").height(width/2);

    $("#onloadPic").on("click",function(){
        if($("#preview").attr("src")==""){
            $(".file-word").hide();
        }
    });
});