/******************************
脚本功能：藏书馆-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-03
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api\.zglibrary\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/cangshu.js
[mitm] 
hostname = api.zglibrary.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/user/profile") != -1) {
    obj.data.isReceiveVIP = 1;
    obj.data.expireTime = 32485318059;
    obj.data.nickName = "afengye";
    obj.data.isVip = 1;
    obj.data.isVipYear = 1;
}

if($request.url.indexOf("/vip/status") != -1) {
    obj.data.isExpire = 0;
    obj.data.isVip = 1;
    obj.data.expireTime = 32485318059;
    obj.data.surplusDays = 999999;
}


aFengYe = JSON.stringify(obj);
$done(aFengYe);
