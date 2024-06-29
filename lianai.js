/******************************
脚本功能：练爱星球-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-06-29
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api\.navolove\.com\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/lianai.js
[mitm] 
hostname = api.navolove.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/api/refresh_user_info") != -1) {
    obj.data.nickname = "afengye";
    obj.data.is_vip = true;
    obj.data.expiration_time = "2999-01-01 00:00:00";
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
