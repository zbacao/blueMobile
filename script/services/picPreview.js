/**
 * Created by Administrator on 2016-08-18.
 */
lmapp.service("picPreview",function(){
    this.picPreview=function(docObj,imgObjPreview){
        //ͼƬ�ϴ�Ԥ������
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
});