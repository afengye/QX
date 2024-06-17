/******************************
脚本功能：皮皮鸭表情包-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-17
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http:\/\/114\.116\.104\.132\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/pipi.js
[mitm] 
hostname = 114.116.104.132
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/app/main/account/index") != -1) {
    obj.data.nickName = "afengye";
    obj.data.vip_expiration_time_show = "2999-01-01";
    obj.data.vipDayThanWeek = true;
    obj.data.vipIsOverdue = false;
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
