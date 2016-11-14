define(['text!./index.html','css!./index.css','css!./swiper-3.4.0.min.css'],function(html){
    function render(){
      $('.container').html(html);
    }

    //ajax
    function getData(){
       ask();
    }

    function bindEvent(){

    }

    function swiper(){
     bannerImg();
      
    }

    return {
      render:render,
      getData:getData,
      bindEvent:bindEvent,
      swiper:swiper
      
    }
})
//轮播
function bannerImg(){
	var mySwiper = new Swiper ('.swiper-container', {
    pagination : '.swiper-pagination',
    autoplay : 1000,
    loop : true,
    loopAdditionalSlides : 1,
    paginationClickable :true,
    updateOnImagesReady : true,
    autoplayDisableOnInteraction : false,
 
  })    
}

function ask(){
	var aaa=0;//这里测试git
	$.ajax({
	   type: "get",
	   url: "http://www.vrserver.applinzi.com/aixianfeng/apihome.php",
	   dataType: "json",
       success: function(msg){
       	console.log(msg.data.slide);
		   	var strH="";	
	   	$.each(msg.data.slide,function(i,ele){
             strH+='<div class="swiper-slide">'
        	+'<img src="'+ele.activity.img+'"/>'
            +'</div>';
		   	console.log(ele.activity.img);
	   	})

			$(".page .swiper-wrapper").html(strH);
//	    
	   }
       
    });

}


