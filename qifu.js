/******************************
脚本功能：起伏-解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-05-27
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api\.risingfalling\.com\/api\/vip\/detail url script-response-body https://raw.githubusercontent.com/afengye/QX/main/qifu.js
[mitm] 
hostname = api.risingfalling.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

obj.body.vipType = "VIP";
obj.body.isVip = true;
obj.body.onceForAll = true;

aFengYe = JSON.stringify(obj);
$done(aFengYe);
