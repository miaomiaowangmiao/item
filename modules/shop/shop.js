define(['text!./postal.html','css!./postal.css'],function(html){
    function render(){
      $('.container').html(html);
    }
    
      //ajax
    function getData(){
     information();
     
    }

    function bindEvent(){
     titleRotate();
     moveSpan();
    }

    function swiper(){
      
    }
    
    return {
      render:render,
      bindEvent:bindEvent,
      getData:getData
    }
});
//ajax数据
function information(){
	
	var value="热销榜";
     productList_postting(value);
     
     
	$(".categories>.theme-spline:eq(0)").click(function(){
		$("ul.productListRight").html("");
		//点击封装
		 value="热销榜";
	    productList_postting(value);
	    
	});
    $(".categories>.theme-spline:eq(1)").click(function(){
		$("ul.productListRight").html("");
		//点击封装
		 value="天天特价";
	    productList_postting(value);
	});
	  $(".categories>.theme-spline:eq(2)").click(function(){
		$("ul.productListRight").html("");
		//点击封装
		 value="优选水果";
	    productList_postting(value);
	    
	});
	  $(".categories>.theme-spline:eq(3)").click(function(){
		$("ul.productListRight").html("");
		//点击封装
		 value="牛奶面包";
	    productList_postting(value);
	    
	});

}


//封装ajax
function productList_postting(value){
	
	$.ajax({
	   type: "get",
	   url: "http://www.vrserver.applinzi.com/aixianfeng/apicategory.php",
	   data: {category:value},
	   dataType: "json",
       success: function(msg){
       	console.log(msg);
		   	var str="";	
	   	$.each(msg.data,function(i,ele){
				
		   		str+='<li class="mod-product-item">'
		   		+'<div class="spline">'
				      +'<div class="product-image">'
				       +'<img src="'+ele.img+'">'
			          +'</div>'
			        +'<div class="product-meta">'
			    	+'<div class="GoodsName">'+ele.name+'</div>'
			    	+'<div class="promotion"><span>精选</span>';
			    	if(ele.pm_desc!=""){
			    	str+='<a href="##">'+ele.pm_desc+'</a>';
			    	};
			    	str+='</div><div class="specifics">'+ele.specifics+'</div>'
			    	+'<div class="price">'
			    		+'<span class="yuan">￥<span class="price-yuan">'+ele.price+'</span></span>'
			    		+'<span class="market">￥<span class="price-market">'+ele.market_price+'</span></span>'
			    		
			    	+'</div>'
			    	
			    	+'<div class="clear-fix"></div>'
			    	+'<div class="innerCount">'
				    	+'<div class="innerLeft"></div>'
				    	+'<span class="count">0</span>'
				    	+'<div class="innerRight"></div>'
			    	+'</div>'
			    +'</div>'
		    +'</div>'
		    +'</li>'
		   		
		   	
	   	})
	    $("ul.productListRight").html(str);
        getShopData(value);
	    calculate(msg.data,value);
	    
	   }

    });

}
//li跟着的条
function moveSpan(){
	$(".theme-spline").eq(0).find("span").show();
	$(".theme-spline").click(function(){
		$(".slider").hide(50);
		$(this).find("span.slider").show(50);
	});
}

//购物车点击
function calculate(information,val){
	var mun=0;
	var arr_push=[];
	
$(".innerRight").click(function(){
	mun=0;
	$(this).siblings().show();
	$(this).siblings("span.count").html(parseInt($(this).siblings("span.count").html())+1);
	$.each($("span.count"),function(i,ele){
			var digit=parseInt($(ele).html());
			 mun+=digit;
	})
		
	$(".purchase").addClass("chang");
	// 购物车圆圈动画
	setTimeout(function(){
			$(".purchase").removeClass("chang");
	        },100);
	    var newsI=0;
	

//	$(".purchase").html(mun);
	if(mun>0){
			$(".purchase").show();
	}else{
			$(".purchase").hide();
			
		};

	
		//下标arr存数据
		var index=$(this).parents(".productListRight>.mod-product-item").index();
		var parentLi=$(this).parents(".productListRight>.mod-product-item");
		
		var lat=index+"_"+val;
		var count=$(this).siblings("span.count").html();
		var news={
			sum:count,
			keys:lat,
			img:$(parentLi).find(".product-image>img").attr("src"),
			name:$(parentLi).find(".product-meta>.GoodsName").html(),
			price:$(parentLi).find(".product-meta .price-yuan").html()
			
		}

        localStorage.setItem(lat,JSON.stringify(news));
		
		for(var keys in localStorage){
			if(keys != 'jfVersion'){
    		var news=JSON.parse(localStorage.getItem(keys));
		    newsI+=parseInt(news.sum);
		   }
		   
	       }
	    $(".purchase").html(newsI);

	});
$(".innerLeft").click(function(){
		mun=0;
		var countSpan=$(this).siblings("span.count");
     	if(parseInt(countSpan[0].innerHTML)<=1){

			$(this).next().hide();
			$(this).hide();
            //购物车图标
            $(".purchase").hide();
		}
		$(".purchase").addClass("chang");
		clearTimeout(timer);
		var timer=setTimeout(function(){
			$(".purchase").removeClass("chang");
		},100);
		
		$(countSpan).html(parseInt($(this).siblings("span.count").html())-1);
		$.each($("span.count"),function(i,ele){
			var digit=parseInt($(ele).html());
			
			 mun+=digit;
		})
		$(".purchase").html(mun);
		
		if(mun>0){
			$(".purchase").show();
		}
		var index=$(this).parents(".productListRight>.mod-product-item").index();

		var parentLi=$(this).parents(".productListRight>.mod-product-item");
	
		var lat=index+"_"+val;
        var count=$(this).next().html();
		var news={
			sum:count,
			keys:lat,
			img:$(parentLi).find(".product-image>img").attr("src"),
			name:$(parentLi).find(".product-meta>.GoodsName").html(),
			price:$(parentLi).find(".product-meta .price-yuan").html()
			
		}
		
        localStorage.setItem(lat,JSON.stringify(news));

        if(JSON.parse(localStorage.getItem(lat)).sum==0){
        	localStorage.removeItem(lat);
        }
        var ctent=$(".purchase").html();
       if(ctent==0){
       	$(".purchase").hide();
       }
       
	});

	
	
}

//头部点击旋转事件
	function titleRotate(){
		$(".filter-title>a").click(function(){
		    $(this).css("color","#7d7d7d")
		    var a=$(this).find("span:eq(1)");
		    if (a[0].className=="on") {
		    	$(this).find("span:eq(1)").addClass("up").removeClass("on");
	        }else{
	   	        $(this).find("span:eq(1)").addClass("on").removeClass("up").parent().siblings("a").find("span:eq(1)").removeClass("on").addClass("up");
	        };
	        if (a[0].className=="on") {
	   	        $(".useDisplay").show();
		        if (this.firstChild.innerHTML=="全部分类") {
		            $(".item-sub").show().siblings("li").hide();
		        }else{
			        $(".item-sub").siblings("li").show();
			        $(".item-sub").hide();
		        };
	       }else{
		     	$(".useDisplay").hide();
		     	$(".tap-action").hide();
	       };
	    });
	};
	
function getShopData(value){
    		var keySum=0;
	for(var keys in localStorage){
if(keys != 'jfVersion'){
    		var news=JSON.parse(localStorage.getItem(keys));
    		
    		var arrSplit=keys.split("_")[1];
    		if(arrSplit==value){
    			var arrIndex=keys.split("_")[0]
    			var Parent=$(".mod-product-item").eq(arrIndex).find(".product-meta .count").html(news.sum);
    			$(".mod-product-item").eq(arrIndex).find(".product-meta .count").show();
    			$(".mod-product-item").eq(arrIndex).find(".product-meta .innerLeft").show();


    		}
    	keySum+=parseInt(news.sum);
    		
         $(".purchase").show();
	     $(".purchase").html(keySum);
    		
	}
}
}
