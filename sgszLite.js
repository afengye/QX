/******************************
脚本功能：时光手帐Lite-登陆后解锁会员
脚本作者：afengye
脚本频道：https://t.me/afengye
更新时间：2024-07-13
使用声明：️仅供学习交流, 🈲️商业用途
*******************************
[rewrite_local]
^https:\/\/api\.shouzhang\.com\/memcenterlk\/member\/firstpage\.do url script-response-body https://raw.githubusercontent.com/afengye/QX/main/sgszLite.js
[mitm] 
hostname = api.shouzhang.com
*******************************/

var aFengYe = $response.body;
var obj =  JSON.parse(aFengYe);

obj.data.vip = true;

aFengYe = JSON.stringify(obj);
$done(aFengYe);
