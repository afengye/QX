/******************************
脚本功能：彩云天气-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-05-28
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^ url script-response-body https://raw.githubusercontent.com/afengye/QX/main/caiyun.js
[mitm] 
hostname = api.risingfalling.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);



aFengYe = JSON.stringify(obj);
$done(aFengYe);
