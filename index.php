<?php
require_once "jssdk.php";
// appId  和 秘钥
$jssdk = new JSSDK("wx227dee05a2a056c3", "bdb35d03dc72f43c424405db12a06ac3");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>爱鲜蜂</title>
  		<script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
	</head>
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/footer.css">

</head>
<body>
<!--<button onclick="getLocation()">获取位置1</button>
<button onclick="getPosition()">获取位置2</button>-->
  <div class="container">

  </div>
    <p class="perch"></p>
  	<div class="foot">
      
			<a href="#home">
				<img src="images1/frist.png">
				<span>首页</span>
			</a>
			<a href="#shop">
				<img src="images1/lightning.png">
				<span>闪送超市</span>
			</a>
			<a href="#order">
				<img src="images1/foot_07.png">
				<span>新鲜预定</span>
			</a>
			<a href="#cart">
				<div class="purchase"></div>
				<img src="images1/foot_09.png">
				<span>购物车</span>
			</a>
			<a href="#mine">
				<img src="images1/foot_11.png">
				<span>我的</span>
			</a>
		</div>
	
  <script type="text/javascript" src="./common.js"></script>
  <script src="lib/require.js" data-main='main'></script>


  
</body>
  <script type="text/javascript">
//	function code(){
//	 var latitude = 0;
//var longitude = 0;
//function getPosition(){
//
//  wx.openLocation({
//    latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
//    longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
//    name: '', // 位置名
//    address: '', // 地址详情说明
//    scale: 1, // 地图缩放级别,整形值,范围从1~28。默认为最大
//    infoUrl: '' // 在查看位置界面底部显示的超链接,可点击跳转
//});
//}
//
//function getLocation(){
// 
//  wx.getLocation({
//    success: function (res) {
//        latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
//        longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
//        var speed = res.speed; // 速度，以米/每秒计
//        var accuracy = res.accuracy; // 位置精度
//    },
//    cancel: function (res) {
//        alert('用户拒绝授权获取地理位置');
//    }
//});
//}
//
//
//}
	wx.config({
    debug: true,
    appId: '<?php echo $signPackage["appId"];?>',
    timestamp: '<?php echo $signPackage["timestamp"];?>',
    nonceStr: '<?php echo $signPackage["nonceStr"];?>',
    signature: '<?php echo $signPackage["signature"];?>',
     jsApiList: [
        'checkJsApi',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'translateVoice',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'onVoicePlayEnd',
        'pauseVoice',
        'stopVoice',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard'
      ]
  });
	</script>
</html>
