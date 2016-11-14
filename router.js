define(['backbone'],function(){
  
  var Router = Backbone.Router.extend({

      routes: {
        "home": "homeFn",
        "shop": "shopFn",
        "order": "orderFn",
        "cart": "cartFn",
        "mine": "mineFn",
        "search_sells": "search_sellsFn",
        "hot_search": "hot_searchFn",
        
        "*actions":'defaultAction'
      },

      homeFn: function() {
          require(['./modules/home/home.js'],function(home){
            home.render();
            home.getData();
            home.swiper();
          })
      },
      shopFn: function() {
        require(['./modules/shop/shop.js'],function(shop){
          shop.render();
          shop.bindEvent();
          shop.getData();
          
        })
      },
      orderFn: function() {
         require(['./modules/order/order.js'],function(order){
          order.render();
//        order.bindEvent();
          

        })
      },
      cartFn: function() {
        require(['./modules/cart/cart.js'],function(cart){
          cart.render();
          cart.getData();
          cart.bindEvent();
        })
      },
      mineFn: function() {
         require(['./modules/mine/mine.js'],function(mine){
          mine.render();
        })
      },
      search_sellsFn: function() {
      	//主页搜索
        require(['./modules/home/search_sells.js'],function(search_sells){
          search_sells.render();
          search_sells.bindEvent();
        })
      },   
      hot_searchFn:function() {
      	//主页秒杀
        require(['./modules/home/hot_search/hot_search.js'],function(hot_search){
          hot_search.render();
          hot_search.bindEvent();
        })
      }
      ,defaultAction:function(){
        location.hash = 'home'
      }

  });

  var router = new Router();
})
