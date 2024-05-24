/******************************
脚本功能：起名有福解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-05-24
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/www.qimingyoufu.cn\/v01\/user-info url script-response-body https://raw.githubusercontent.com/afengye/QX/main/yqzm.js
[mitm] 
hostname = mobile-ios-wallpaper-api.zhhainiao.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

aFengYe = JSON.stringify(obj);
$done(aFengYe);
