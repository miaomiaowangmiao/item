define(['text!./index.html','css!./index.css','css!./swiper-3.4.0.min.css'],function(html){
    function render(){
      $('.container').html(html);
      code();
    }

    //ajax
    function getData(){
       ask();
    }
    function code(){
	$(".code").on("click",function(){
	    wx.scanQRCode({
	        needResult: 0, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
	        scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
	        success: function (res) {
	            var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
	            
	        }
	    });
	
	})
}
    function bindEvent(){
  
    }

    function swiper(){
     bannerImg();
      
    }

    return {
      render:render,
      getData:getData,
      swiper:swiper,
      bindEvent:bindEvent
      
      
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
            +'</div>'
	   	})

			$(".page .swiper-wrapper").html(strH);
//	    
	   }
       
    });

}


