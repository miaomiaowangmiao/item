define(['text!./hot_search.html','css!./hot_search.css'],function(html){
    function render(){
      $('.container').html(html);
    }

    //ajax
    function getData(){
//     ask();
    }

    function bindEvent(){
       $(".foot").hide();
       $(".perch").hide();
       $(".back").click(function(){
      	 $(".foot").show();
         $(".perch").show();
      })
       his();
    }

    function swiper(){
      
    }

    return {
      render:render,
      bindEvent:bindEvent
      
    }
})
function his(){
	$(".history").html("");
	var oLi="";
	$(".hot_srarch>li").click(function(){
		
		oLi+='<li>'+$(this).html()+'</li>'

        $(".history").html(oLi);
   });
// var news={
// 	        info:say.value,
// 	        dat:(new Date()).toLocaleString()
// }
//  localStorage.setItem(news.dat,JSON.stringify(news));
//		
// 
}