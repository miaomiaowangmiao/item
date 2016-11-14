define(['text!./seckill.html','css!./seckill.css'],function(html){
    function render(){
      $('.container').html(html);
    }

    //ajax
    function getData(){

    }

    function bindEvent(){
       $(".foot").hide();
       $(".perch").hide();
       $(".backHome").click(function(){
      	 $(".foot").show();
         $(".perch").show();
      })
    }

    function swiper(){
      
    }

    return {
      render:render,
      bindEvent:bindEvent
    }
})


