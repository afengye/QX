/******************************
脚本功能：宜搜小说解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-05-23
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api\.ieasou\.com\/api\/bookapp\/balance\.m url script-response-body https://raw.githubusercontent.com/afengye/QX/main/yisou.js
[mitm] 
hostname = mobile-ios-wallpaper-api.zhhainiao.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);
obj.vipInfo.vip= true, obj.vipInfo.vipStatus = 1;
aFengYe = JSON.stringify(obj);
$done(aFengYe);
