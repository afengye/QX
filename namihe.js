/******************************
脚本功能：纳米盒-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-22
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/namibox\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/namihe.js

hostname = namibox.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/auth/getuserinfo") != -1) {
    obj.is_vip = obj.is_member = true;
    obj.member_type  = "VIP";
    obj.nick_name = "afengye";
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
