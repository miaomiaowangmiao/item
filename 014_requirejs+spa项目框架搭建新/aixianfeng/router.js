define(['backbone'],function(){
  
  var Router = Backbone.Router.extend({

      routes: {
        "home": "homeFn",
        "shop": "shopFn",
        "order": "orderFn",
        "cart": "cartFn",
        "mine": "mineFn",
        "*actions":'defaultAction'
      },

      homeFn: function() {
          require(['./modules/home/home.js'],function(home){
            home.render();
          })
      },
      shopFn: function() {
        require(['./modules/shop/shop.js'],function(shop){
          shop.render();
        })
      },
      orderFn: function() {

      },
      cartFn: function() {

      },
      mineFn: function() {

      },
      defaultAction:function(){
        location.hash = 'home'
      }

  });

  var router = new Router();
})
