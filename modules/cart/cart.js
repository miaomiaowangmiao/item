define(['text!./shop.html','css!./shop.css'],function(html){
    function render(){
      $('.container').html(html);
    }

    //ajax
    function getData(){
    //本地存储获取
     local();
    }

    function bindEvent(){
      checkBox();
      to_add();
      
    }

    function swiper(){
      
    }

    return {
      render:render,
      getData:getData,
      bindEvent:bindEvent
    }
})
//total的计算
function to_add(){
	var total1=0;
	var s=0;
	
	$.each($(".ui-ellipsis"),function(i,ele){
	var pice= parseFloat($(ele).find(".pirceTable>span").html());
	var shu1=parseInt($(ele).find(".pirceTable .count").html());
	 total1+=parseFloat(pice*shu1);

	
	})
	total1=0;
	$.each($(".item-checkbox>span"),function(i,elem){
		
		if(elem.className=="selectChecked"){
	 var pice1= parseFloat($(elem).parent().siblings("td").find(".pirceTable>span").html());
	 var shu11=parseInt($(elem).parent().siblings("td").find(".pirceTable .count").html());
	 total1+=parseFloat(pice1*shu11);
	 
		}
	});

	return total1.toFixed(1);
	
}




//点击加减
function calculat(cont){
	var mun=0;
	var  sumCou=0;
	var a=0;
	var b=0;
	$(".purchase").html(cont);
	
    $(".innerRight").click(function(){
 sumCou=parseFloat($(this).parent().siblings("span").html());
 var pan
 =$(this).parents(".ui-ellipsis").siblings(".item-checkbox").find("span").attr("class");
   if(pan!="selectChecked"){
   	$(this).parents(".ui-ellipsis").siblings(".item-checkbox").find("span").attr("class","selectChecked");
   	
   $.each($(".item-checkbox"),function(i,ele){
				
	var box1=$(ele).find("span");
	 var tdRight=$(box1).parent().siblings("td.ui-ellipsis");
		     var ji=parseFloat(tdRight.find(".count").html())*parseFloat(tdRight.find(".pirceTable>span").html()); 
	   if(box1[0].className=="selectChecked"){
		          	a++;
		          	
                  sumCou+=parseFloat(ji);
              
	$(".group-btn").removeClass("group-btnAdd");
		       	   $(".group-btn").html("选好了");
		          
		       }else{
		       	     b++;
		       	if(b==$(".item-checkbox").length){
		       	   $(".group-btn").addClass("group-btnAdd");
		       	   $(".group-btn").html("满￥0元起送");
		       	  }
		       }
				
   });
   }
    
    
	 mun=0;
	$(this).siblings().show();

	$(this).siblings("span.count").html(parseInt($(this).siblings("span.count").html())+1);
	$.each($("span.count"),function(i,ele){
			var digit=parseInt($(ele).html());
			 mun+=digit;

	})

		
	$(".purchase").addClass("chang");
	// 购物车圆圈动画
	clearTimeout(timer);
	var timer=setTimeout(function(){
			$(".purchase").removeClass("chang");
	        },100);
	$(".purchase").html(mun);
	if(mun>0){
			$(".purchase").show();
	}else{
			$(".purchase").hide();
			
		};
		
     $(".total").html("￥"+to_add());
     //数据删改
     var lat=$(this).parents(".ui-ellipsis").parent().attr("title");
        var count=$(this).siblings("span.count").html();
        var parentLi=$(this).parents(".ui-ellipsis").parent();
		var news={
			sum:count,
			keys:lat,
			img:$(parentLi).find(".group-img>img").attr("src"),
			name:$(parentLi).find(".ui-ellipsis>p").html(),
			price:$(parentLi).find(".pirceTable>span").html()
			
		}
		
        localStorage.setItem(lat,JSON.stringify(news));

   
	});
	$(".innerLeft").click(function(){
		mun=0;
		var e=0;
		var countSpan=$(this).siblings("span.count");

		
		if(parseInt(countSpan[0].innerHTML)<=1){
			$(this).next().hide();
			$(this).hide();
            
		}
		$(".purchase").addClass("chang");
		setTimeout(function(){
			$(".purchase").removeClass("chang");
		},100);
		
		$(countSpan).html(parseInt($(this).siblings("span.count").html())-1);
		$.each($("span.count"),function(i,ele){
			var digit=parseInt($(ele).html());
			
			 mun+=digit;
		})
	
//		  $.each($(".item-checkbox>span"),function(i,ele){
//		  	  if(this.className!="selectChecked"){
//       		e++;
//       	}
//		  	  if(e==$(".item-checkbox>span").length){
//		  	  	$(".selectAll-false").removeClass("selectChecked");
//		  	  	$(".group-btn").addClass("group-btnAdd");
//		       	$(".group-btn").html("满￥0元起送");
//		       	$(".total").html("￥"+0);
//		  	  	 
//		  	  }
//       });
		$(".purchase").html(mun);
		
		if(mun>0){
			$(".purchase").show();
		}
     $(".total").html("￥"+to_add());
		
        var count=parseInt($(this).next().html());
        if(count==0){
        	var thisTr=$(this).parents(".ui-ellipsis").parent().index();
       
        	$(".group-list tbody")[0].deleteRow(thisTr);
        }
       
         //数据删改
     var lat=$(this).parents(".ui-ellipsis").parent().attr("title");
        var co=$(this).next().html();
        var parentLi=$(this).parents(".ui-ellipsis").parent();
		var news={
			sum:co,
			keys:lat,
			img:$(parentLi).find(".group-img>img").attr("src"),
			name:$(parentLi).find(".ui-ellipsis>p").html(),
			price:$(parentLi).find(".pirceTable>span").html()
			
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
//本地存储获取
function local(){
//		localStorage.clear();
var strTr="";
var cont=0;
	for(var keys in localStorage){
if(keys != 'jfVersion'){
    		var news=JSON.parse(localStorage.getItem(keys));
    		cont+=parseInt(news.sum);
    		strTr+='<tr title='+keys+'>'
					+'<td class="item-checkbox"><span></span></td>'
					+'<td class="group-img"><img src="'+news.img+'"/></td>'
					+'<td class="ui-ellipsis">'
					   +'<p>'+news.name+'</p>'
						+'<div class="pirceTable">'
							+'<span>'+news.price+'</span>'
							+'<div class="innerCount">'
						    	+'<div class="innerLeft"></div>'
						    	+'<span class="count">'+news.sum+'</span>'
						    	+'<div class="innerRight"></div>'
			    	        +'</div>'
						+'</div>'
					+'</td>'
				+'</tr>';

    	
    	   var newSet={
			sum:news.sum,
			keys:keys,
			img:news.img,
			market_price:news.market_price,
			name:news.name,
			pm_desc:news.pm_desc,
			price:news.price,
			specifics:news.specifics
			
			
		   }


	localStorage.setItem(keys,JSON.stringify(newSet));
    	}
    		}
$(".group-list tbody").html(strTr);
    	
       
    		calculat(cont);
	
	
}
//选框事件
function checkBox(){
	//数字和-show
	var sumCount=0;
	$(".innerLeft").show();
	$(".count").show();
	//checkbox的事
	$.each($(".item-checkbox"),function(i,ele){
				 var tdRigh=$(ele).siblings("td.ui-ellipsis");
		
		var shu=parseFloat($(ele).parent().find(".count").html())*parseFloat(tdRigh.find(".pirceTable>span").html());
		sumCount+=parseFloat(shu);;
	var box=$(this).find("span");
	if(box[0].className!="selectChecked"){
		$(this).find("span").addClass("selectChecked");
		
		}else{
		$(this).find("span").removeClass("selectChecked");
			
		};
		$(".selectAll-false").addClass("selectChecked");
	});
     $(".total").html(sumCount.toFixed(1));
	$(".item-checkbox").click(function(){
	    sumCount=0;
		
		var box=$(this).find("span");
		if(box[0].className!="selectChecked"){
		  $(this).find("span").addClass("selectChecked");
		 
		}else{
			
		  $(this).find("span").removeClass("selectChecked");
		 
			
		};
		var a=0;
		var b=0;
		
		$.each($(".item-checkbox"),function(i,ele){
				
				var box1=$(ele).find("span");
				 var tdRight=$(box1).parent().siblings("td.ui-ellipsis");
		     var ji=parseFloat(tdRight.find(".count").html())*parseFloat(tdRight.find(".pirceTable>span").html()); 
				 
		       if(box1[0].className=="selectChecked"){
		          	a++;
                  sumCount+=parseFloat(ji);

	$(".group-btn").removeClass("group-btnAdd");
		       	   $(".group-btn").html("选好了");
		          
		       }else{
		       	     b++;
		       	if(b==$(".item-checkbox").length){
		       	   $(".group-btn").addClass("group-btnAdd");
		       	   $(".group-btn").html("满￥0元起送");
		       	  }
		       }
				if(a==$(".item-checkbox").length){
		         $(".selectAll-false").addClass("selectChecked");
		         
				}else{
				 $(".selectAll-false").removeClass("selectChecked");
				} 
			
	     })
		
              $(".total").html("￥"+sumCount.toFixed(1));
		
	});
	
	$(".selectAll-false").click(function(){
		var d=0;
		$.each($(".item-checkbox>span"),function(i,ele){
			if(ele.className=="selectChecked"){
				d++;
			}
			if(d==$(".item-checkbox").length){
				$(".total").html("￥"+0);
			}
		});
		if(this.className=="selectAll-false selectChecked"){
			$(".item-checkbox").find("span").removeClass("selectChecked");
		    $(this).removeClass("selectChecked");
		    $(".group-btn").addClass("group-btnAdd");
		    $(".group-btn").html("满￥0元起送");

		 
		}else{
			$(".item-checkbox").find("span").addClass("selectChecked");
		    $(this).addClass("selectChecked");
		    $(".group-btn").removeClass("group-btnAdd");
		    $(".group-btn").html("选好了");
		    to_add();
              $(".total").html("￥"+to_add());
		    
		    
		    
		}
	});
}

