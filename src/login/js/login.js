/**
 * Created by millet on 16/7/27.
 */
require([ 'bootstrap'], function(bootstrap) {
    var $UI =$('body');

    $('.login-in-sms').on('click',function(){
    	$('#img-code').modal('show');
    	$('input[name="img-code"]').val('').focus();
    });

    $UI.on('input propertychange','input[name="img-code"]',function(){

    	changeInput($(this).val()) 

    });

     function changeInput(str){
     	var arr = str.split('');
     	var htmlStr ='';
     	for(var i =0 , j = 0; i < 4; i++){
     		if(arr[i]){
				htmlStr +='<a href="javascript:;" class="active">' + arr[i] + '</a>'
     		}else if(j== 0){
				htmlStr +='<a href="javascript:;" class="active"></a>'
				j =1
     		}else{
				htmlStr +='<a href="javascript:;"></a>'
     		}
     	};
     	
     	$('.base-btn').html(htmlStr);
     
    if(arr.length == 4) {
  		$('input[name="img-code"]').val('');
        $('.base-btn').html('<a href="javascript:; " class="active"></a><a href="javascript:;"></a><a href="javascript:;"></a><a href="javascript:;"></a>');
       //发送接口
     	$('#img-code').modal('hide');

        $('input[name="img-code"]').blur();
    }
     }

});
