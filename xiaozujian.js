/******************************
脚本功能：小组件盒子-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-05-29
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api\.widgetbox\.top\/ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/xiaozujian.js
[mitm] 
hostname = api.widgetbox.top
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

if($request.url.indexOf("/v1/users/me") != -1) {
    obj.isVip = true;
    obj.nickname = "afengye";
}

aFengYe = JSON.stringify(obj);
$done(aFengYe);
