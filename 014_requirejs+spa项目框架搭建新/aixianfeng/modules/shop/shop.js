define(['text!./shop.html','css!./shop.css'],function(html){
    function render(){
      $('.container').html(html);
    }

    return {
      render:render
    }
})
