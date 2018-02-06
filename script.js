$(document).ready(function(){
$('#mainform input,#mainform textarea').on("focus",function(){
    $(this).siblings('.error_message').hide();
   $(this).attr('class','active'); 
});
    $('#mainform input,#mainform textarea').on("blur",function(){
        if($(this).val()==""){
    $(this).siblings('.error_message').fadeIn(350);
           $(this).attr('class','danger'); 
        }
         
    });
$("#mainform").on("submit",function(e){
    var toSubmit=true;
    e.preventDefault();
    $('#mainform input,#mainform textarea').each(function(){
    var $element=$(this);
    if($element.val()==''){
        $element.attr('class','danger');
$element.siblings('.error_message').fadeIn(350);
        toSubmit=false;
        return;
    }
        if($element.attr('type')=='email'){
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var isValidEmailAddress = re.test($element.val());
        if(!isValidEmailAddress){
            $element.attr('class','danger');
 $element.siblings('.error_message').fadeIn(350);
            toSubmit=false;
            return;
        }
        }
        $element.removeClass('error');
			$element.siblings('.error-message').hide();
        });
    if(toSubmit){
        console.log("Form submitted");
    }
});
});