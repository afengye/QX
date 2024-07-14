/******************************
脚本功能：计算器HD-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-02
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/nmeditation\.snailsleep\.net\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/test.js
[mitm] 
hostname = nmeditation.snailsleep.net
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

var expressTime = 32472115200;
var vipFlag = true;

if($request.url.indexOf("/meditation-order/api/order/user/vip/info") != -1) {
     obj.isVip = vipFlag;
     obj.express = expressTime;
}

if($request.url.indexOf("/meditation-user/user/get/info") != -1) {
     obj.result.vip = vipFlag;
     obj.result.express = expressTime;
     obj.result.name = "afengye";
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
