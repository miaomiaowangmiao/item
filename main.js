require.config({
  paths:{
    'jquery':'lib/jquery-v3.1',
    'backbone':'lib/backbone',
    'underscore':'lib/underscore',
    'text':'lib/text',
    'css':'lib/css',
    'swiper':'lib/swiper.min'
  },

  shim:{
    'swiper':{
      export:'swiper.min'
    }
  }


});

require(['jquery','backbone','./router.js','swiper'],function($,Backbone){

  Backbone.history.start();
})
