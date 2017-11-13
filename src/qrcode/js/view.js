define(['juicer','mainTpl','jquery','qrcode'],function(_juicer,mainTpl,$,qrcode){
    var obj ={}
    var $UI =$('body');
    obj.init = function(){
        var $dom = $(juicer.templates['main.juicer']());
        $UI.prepend($dom)
        var qrcode = new QRCode('qrcode', { 
            text: 'your content', 
            width: 256, 
            height: 256, 
            colorDark : '#000000', //前景色
            colorLight : '#ffffff',  //背景色
            correctLevel : QRCode.CorrectLevel.H //容错级别，可设置为
          }); 
          qrcode.clear(); 
          qrcode.makeCode($("#text").val());
          $UI.on('click','button',function(){
            qrcode.clear(); 
            qrcode.makeCode($("#text").val());
          })
    }
    

    return obj;
})