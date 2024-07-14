/******************************
脚本功能：大象冥想-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-15
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/nmeditation\.snailsleep\.net\/meditation.+ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/elephant.js
[mitm] 
hostname = nmeditation.snailsleep.net
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

var expiresTime = 32472115200;
var vipFlag = true;

if($request.url.indexOf("/meditation-order/api/order/user/vip/info") != -1) {
     obj.isVip = vipFlag;
     obj.expires = expiresTime;
}

if($request.url.indexOf("/meditation-user/user/get/info") != -1) {
     obj.result.vip = vipFlag;
     obj.result.expires = expiresTime;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
