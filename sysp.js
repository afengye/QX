/******************************
脚本功能：水印视频-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-24
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^http:\/\/101\.37\.76\.151\:8045\/\/User\/GetVIPInfo url script-response-body https://raw.githubusercontent.com/afengye/QX/main/sysp.js
[mitm] 
hostname = 101.37.76.151
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

obj.day = "99999";

aFengYe = JSON.stringify(obj);
$done(aFengYe);
